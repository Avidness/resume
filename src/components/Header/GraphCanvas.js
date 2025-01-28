import React, { useEffect, useRef } from 'react';

const GraphCanvas = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = [];
    const connections = [];
    const numNodes = 100;

    // Generate random nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() > 0.5 ? 4 : 6, // Blue or white nodes
        color: Math.random() > 0.5 ? '#58a6ff' : '#ffffff',
      });
    }

    // Create random connections
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        if (Math.random() < 0.05) {
          // 5% chance of connection
          connections.push([i, j]);
        }
      }
    }

    function draw() {
      ctx.fillStyle = '#0d1117'; // Dark background for the graph
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.beginPath();
      for (const [i, j] of connections) {
        const nodeA = nodes[i];
        const nodeB = nodes[j];

        ctx.moveTo(nodeA.x, nodeA.y);
        ctx.lineTo(nodeB.x, nodeB.y);
      }
      ctx.strokeStyle = 'rgba(88, 166, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }
    }

    function update() {
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default GraphCanvas;
