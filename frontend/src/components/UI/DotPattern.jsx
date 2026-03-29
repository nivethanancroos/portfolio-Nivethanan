"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

export function DotPattern({
  className,
  children,
  dotSize = 2,
  gap = 25,
  baseColor = "#78716c",
  glowColor = "#ceb022", // used as solid hover color
  proximity = 80, //  reduced hover area
  waveSpeed = 0.4,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const dotsRef = useRef([]);

  const mouseTarget = useRef({ x: -1000, y: -1000 });
  const smoothMouse = useRef({ x: -1000, y: -1000 });

  const animationRef = useRef();
  const startTimeRef = useRef(Date.now());

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const glowRgb = useMemo(() => hexToRgb(glowColor), [glowColor]);

  // 🔷 BUILD GRID
  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cellSize = dotSize + gap;
    const cols = Math.ceil(rect.width / cellSize) + 1;
    const rows = Math.ceil(rect.height / cellSize) + 1;

    const offsetX = (rect.width - (cols - 1) * cellSize) / 2;
    const offsetY = (rect.height - (rows - 1) * cellSize) / 2;

    const dots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          x: offsetX + col * cellSize,
          y: offsetY + row * cellSize,
          baseOpacity: 0.55,
        });
      }
    }

    dotsRef.current = dots;
  }, [dotSize, gap]);

  // DRAW LOOP
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    // smooth mouse
    smoothMouse.current.x +=
      (mouseTarget.current.x - smoothMouse.current.x) * 0.15;
    smoothMouse.current.y +=
      (mouseTarget.current.y - smoothMouse.current.y) * 0.15;

    const mx = smoothMouse.current.x;
    const my = smoothMouse.current.y;

    const proxSq = proximity * proximity;
    const time = (Date.now() - startTimeRef.current) * 0.001 * waveSpeed;

    for (const dot of dotsRef.current) {
      const dx = dot.x - mx;
      const dy = dot.y - my;
      const distSq = dx * dx + dy * dy;

      const wave = Math.sin(dot.x * 0.02 + dot.y * 0.02 + time) * 0.5 + 0.5;

      let opacity = dot.baseOpacity + wave * 0.05;
      let scale = 1;

      let r = baseRgb.r;
      let g = baseRgb.g;
      let b = baseRgb.b;

      //  SIMPLE HOVER (NO GLOW)
      if (distSq < proxSq) {
        const t = 1 - distSq / proxSq;

        r = glowRgb.r;
        g = glowRgb.g;
        b = glowRgb.b;

        opacity = 1;
        scale = 1.4; //  subtle size increase
      }

      const radius = (dotSize / 2) * scale;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(draw);
  }, [proximity, baseRgb, glowRgb, dotSize, waveSpeed]);

  // INIT
  useEffect(() => {
    buildGrid();
    const ro = new ResizeObserver(buildGrid);
    containerRef.current && ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [buildGrid]);

  // LOOP
  useEffect(() => {
    animationRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationRef.current);
  }, [draw]);

  // GLOBAL MOUSE
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();

      mouseTarget.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleLeave = () => {
      mouseTarget.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className || ""}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none"
      />

      {children && (
        <div className="relative z-10 h-full w-full">{children}</div>
      )}
    </div>
  );
}

export default function DotPatternDemo() {
  return <DotPattern />;
}
