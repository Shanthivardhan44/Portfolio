import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

function pseudoRandom(seed) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function SingleFloatingMesh({ item, mouseRef }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Smooth subtle floating & rotation
    meshRef.current.rotation.x += delta * item.rotSpeedX;
    meshRef.current.rotation.y += delta * item.rotSpeedY;
    meshRef.current.rotation.z += delta * item.rotSpeedZ;

    meshRef.current.position.y = item.baseY + Math.sin(t * item.floatSpeed + item.phase) * item.floatAmp;
    meshRef.current.position.x = item.baseX + Math.cos(t * item.floatSpeed * 0.7 + item.phase) * (item.floatAmp * 0.5);

    // Subtle parallax response to mouse
    if (mouseRef && mouseRef.current) {
      meshRef.current.position.x += (mouseRef.current.x * item.parallaxFactor - (meshRef.current.position.x - item.baseX)) * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[item.baseX, item.baseY, item.baseZ]}>
      {item.geometry === 'icosahedron' && <icosahedronGeometry args={[item.scale, 0]} />}
      {item.geometry === 'octahedron' && <octahedronGeometry args={[item.scale, 0]} />}
      {item.geometry === 'tetrahedron' && <tetrahedronGeometry args={[item.scale, 0]} />}
      {item.geometry === 'torusKnot' && <torusKnotGeometry args={[item.scale * 0.7, item.scale * 0.22, 64, 8]} />}
      {item.geometry === 'ring' && <ringGeometry args={[item.scale * 0.8, item.scale, 24]} />}

      <meshStandardMaterial
        color={item.color}
        emissive={item.emissive}
        emissiveIntensity={item.emissiveIntensity}
        wireframe={item.wireframe}
        roughness={0.25}
        metalness={0.8}
        transparent
        opacity={item.opacity}
      />
    </mesh>
  );
}

export default function FloatingObjects({ isMobile = false, mouseRef }) {
  // Pre-generate deterministic floating objects spanning across the vertical scroll travel
  const objects = useMemo(() => {
    const count = isMobile ? 12 : 24;
    const geometries = ['icosahedron', 'octahedron', 'tetrahedron', 'torusKnot', 'ring'];
    const colors = [
      { color: '#0284c7', emissive: '#00f5ff', intensity: 0.9 },
      { color: '#0891b2', emissive: '#22d3ee', intensity: 0.8 },
      { color: '#0d9488', emissive: '#2dd4bf', intensity: 0.85 },
      { color: '#2563eb', emissive: '#60a5fa', intensity: 0.75 },
    ];

    const items = [];
    for (let i = 0; i < count; i++) {
      const palette = colors[i % colors.length];
      const geom = geometries[i % geometries.length];

      const r1 = pseudoRandom(i * 11 + 1);
      const r2 = pseudoRandom(i * 17 + 2);
      const r3 = pseudoRandom(i * 23 + 3);
      const r4 = pseudoRandom(i * 31 + 4);
      const r5 = pseudoRandom(i * 37 + 5);
      const r6 = pseudoRandom(i * 41 + 6);

      // Distribute from top to bottom spanning the scroll journey (Y: from +8 down to -32)
      const t = i / count;
      const baseY = 8 - t * 38 + (r1 - 0.5) * 4;
      const angle = (i * 2.39996) + r2; // Golden spiral distribution
      const radius = 6 + r3 * 11;
      const baseX = Math.cos(angle) * radius;
      const baseZ = (Math.sin(angle) * radius * 0.6) - 5;

      items.push({
        id: i,
        geometry: geom,
        baseX,
        baseY,
        baseZ,
        scale: 0.35 + r4 * 0.65,
        wireframe: r5 > 0.35,
        color: palette.color,
        emissive: palette.emissive,
        emissiveIntensity: palette.intensity,
        opacity: 0.7 + r6 * 0.25,
        rotSpeedX: (pseudoRandom(i * 43 + 7) - 0.5) * 0.4,
        rotSpeedY: (pseudoRandom(i * 47 + 8) - 0.5) * 0.5,
        rotSpeedZ: (pseudoRandom(i * 53 + 9) - 0.5) * 0.3,
        floatSpeed: 0.8 + pseudoRandom(i * 59 + 10) * 0.8,
        floatAmp: 0.3 + pseudoRandom(i * 61 + 11) * 0.4,
        phase: pseudoRandom(i * 67 + 12) * Math.PI * 2,
        parallaxFactor: (pseudoRandom(i * 71 + 13) - 0.5) * 1.5,
      });
    }

    return items;
  }, [isMobile]);

  return (
    <group>
      {objects.map((item) => (
        <SingleFloatingMesh key={item.id} item={item} mouseRef={mouseRef} />
      ))}
    </group>
  );
}
