import { useLayoutEffect, useState } from 'react';

function useDiagonalLines() {
  const [positions, setPositions] = useState<{
    div1: { x: number; y: number };
    div2: { x: number; y: number };
    div3: { x: number; y: number };
  }>({
    div1: { x: 0, y: 0 },
    div2: { x: 0, y: 0 },
    div3: { x: 0, y: 0 },
  });

  useLayoutEffect(() => {
    const updatePositions = () => {
      const div1 = document.getElementById('div1');
      const div2 = document.getElementById('div2');
      const div3 = document.getElementById('div3');

      if (div1 && div2 && div3) {
        const div1Rect = div1.getBoundingClientRect();
        const div2Rect = div2.getBoundingClientRect();
        const div3Rect = div3.getBoundingClientRect();

        const centerX1 = div1Rect.left + div1Rect.width / 2;
        const centerY1 = div1Rect.top + div1Rect.height / 2;
        const centerX2 = div2Rect.left + div2Rect.width / 2;
        const centerY2 = div2Rect.top + div2Rect.height / 2;
        const centerX3 = div3Rect.left + div3Rect.width / 2;
        const centerY3 = div3Rect.top + div3Rect.height / 2;

        setPositions({
          div1: { x: centerX1, y: centerY1 },
          div2: { x: centerX2, y: centerY2 },
          div3: { x: centerX3, y: centerY3 },
        });
      }
    };

    window.addEventListener('resize', updatePositions);

    // Initial call to set initial positions
    updatePositions();

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', updatePositions);
    };
  }, []);

  return function DiagonalLines() {
    return (
      <svg className="line">
        <line className="line" x1={positions.div1.x} y1={positions.div1.y} x2={positions.div2.x} y2={positions.div2.y} stroke="black" strokeWidth="3" />
        <line className="line" x1={positions.div2.x} y1={positions.div2.y} x2={positions.div3.x} y2={positions.div3.y} stroke="black" strokeWidth="3" />
      </svg>
    );
  };
}

export default useDiagonalLines;