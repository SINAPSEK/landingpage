import { useEffect, useRef } from 'react';

type Node = {
  x: number;
  y: number;
  phase: number;
};

type Edge = {
  a: number;
  b: number;
};

type Pulse = {
  edge: Edge;
  t: number;
  speed: number;
  reverse: boolean;
};

const NODE_COUNT = 34;
const MAX_EDGES_PER_NODE = 3;
const MAX_EDGE_DIST = 0.26;
const MAX_PULSES = 2;

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function buildField() {
  const rand = seededRandom(42);
  const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
    x: rand(),
    y: rand(),
    phase: rand() * Math.PI * 2,
  }));

  const edges: Edge[] = [];
  const edgeSet = new Set<string>();

  nodes.forEach((node, i) => {
    const distances = nodes
      .map((other, j) => ({
        j,
        d: Math.hypot(node.x - other.x, node.y - other.y),
      }))
      .filter((entry) => entry.j !== i && entry.d < MAX_EDGE_DIST)
      .sort((a, b) => a.d - b.d)
      .slice(0, MAX_EDGES_PER_NODE);

    distances.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push({ a: Math.min(i, j), b: Math.max(i, j) });
      }
    });
  });

  return { nodes, edges };
}

export default function NeuralField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const { nodes, edges } = buildField();
    const pulses: Pulse[] = [];

    let width = 0;
    let height = 0;
    let raf = 0;
    let lastSpawn = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnPulse = (time: number) => {
      if (pulses.length >= MAX_PULSES || edges.length === 0) return;
      const edge = edges[Math.floor(Math.random() * edges.length)];
      pulses.push({
        edge,
        t: 0,
        speed: 0.00035 + Math.random() * 0.00025,
        reverse: Math.random() > 0.5,
      });
      lastSpawn = time;
    };

    const drawStatic = () => {
      resize();
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(230, 245, 236, 0.14)';
      ctx.lineWidth = 1;
      edges.forEach(({ a, b }) => {
        const na = nodes[a];
        const nb = nodes[b];
        ctx.beginPath();
        ctx.moveTo(na.x * width, na.y * height);
        ctx.lineTo(nb.x * width, nb.y * height);
        ctx.stroke();
      });

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(61, 224, 138, 0.55)';
        ctx.arc(n.x * width, n.y * height, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    if (reduceMotion) {
      drawStatic();
      const onResize = () => drawStatic();
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    resize();

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(230, 245, 236, 0.12)';
      ctx.lineWidth = 1;
      edges.forEach(({ a, b }) => {
        const na = nodes[a];
        const nb = nodes[b];
        ctx.beginPath();
        ctx.moveTo(na.x * width, na.y * height);
        ctx.lineTo(nb.x * width, nb.y * height);
        ctx.stroke();
      });

      nodes.forEach((n) => {
        const flicker = 0.45 + Math.sin(time * 0.0006 + n.phase) * 0.15;
        ctx.beginPath();
        ctx.fillStyle = `rgba(61, 224, 138, ${flicker})`;
        ctx.arc(n.x * width, n.y * height, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      if (time - lastSpawn > 1400) {
        spawnPulse(time);
      }

      for (let i = pulses.length - 1; i >= 0; i -= 1) {
        const pulse = pulses[i];
        pulse.t += pulse.speed;
        if (pulse.t >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const na = nodes[pulse.reverse ? pulse.edge.b : pulse.edge.a];
        const nb = nodes[pulse.reverse ? pulse.edge.a : pulse.edge.b];
        const x = (na.x + (nb.x - na.x) * pulse.t) * width;
        const y = (na.y + (nb.y - na.y) * pulse.t) * height;

        const glow = ctx.createRadialGradient(x, y, 0, x, y, 10);
        glow.addColorStop(0, 'rgba(61, 224, 138, 0.9)');
        glow.addColorStop(1, 'rgba(61, 224, 138, 0)');
        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = '#3DE08A';
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
