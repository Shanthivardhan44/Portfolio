import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function pseudoRandom(seed) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export default function CyberStars({ isMobile = false }) {
  const pointsRef = useRef();

  const count = isMobile ? 550 : 1300;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color('#00f5ff'); // neon cyan
    const color2 = new THREE.Color('#38bdf8'); // electric blue
    const color3 = new THREE.Color('#2dd4bf'); // teal
    const color4 = new THREE.Color('#ffffff'); // pure star

    for (let i = 0; i < count; i++) {
      const r1 = pseudoRandom(i * 3 + 1);
      const r2 = pseudoRandom(i * 3 + 2);
      const r3 = pseudoRandom(i * 3 + 3);

      const radius = 8 + r1 * 26;
      const angle = r2 * Math.PI * 2;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (r3 - 0.7) * 55;
      pos[i * 3 + 2] = Math.sin(angle) * radius - 5;

      const pick = pseudoRandom(i * 7 + 4);
      let c = color1;
      if (pick > 0.75) c = color4;
      else if (pick > 0.5) c = color2;
      else if (pick > 0.25) c = color3;

      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.09 : 0.12}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
