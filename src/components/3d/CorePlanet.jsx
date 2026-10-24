import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

// Simple deterministic pseudo-random generator based on index to satisfy render purity
function pseudoRandom(seed) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export default function CorePlanet({ isMobile = false }) {
  const groupRef = useRef();
  const innerSphereRef = useRef();
  const wireframeSphereRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const satelliteGroupRef = useRef();

  // Create subtle pulsing effect and smooth rotations
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
    if (innerSphereRef.current) {
      const scale = 1 + Math.sin(t * 1.5) * 0.04;
      innerSphereRef.current.scale.set(scale, scale, scale);
    }
    if (wireframeSphereRef.current) {
      wireframeSphereRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
      wireframeSphereRef.current.rotation.y += delta * 0.12;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.18;
      ring1Ref.current.rotation.x = Math.sin(t * 0.3) * 0.2 + 0.8;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.14;
      ring2Ref.current.rotation.y += delta * 0.05;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.1;
      ring3Ref.current.rotation.y -= delta * 0.08;
    }
    if (satelliteGroupRef.current) {
      satelliteGroupRef.current.rotation.y += delta * 0.25;
    }
  });

  const coreRadius = isMobile ? 3.0 : 4.2;

  // Particle nodes on the outer ring generated deterministically
  const nodes = useMemo(() => {
    const count = isMobile ? 6 : 12;
    const items = [];
    const radius = coreRadius * 1.85;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const rnd = pseudoRandom(i + 1);
      items.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius * 0.4,
        z: Math.sin(angle) * radius * 0.9,
        size: 0.09 + rnd * 0.06,
      });
    }
    return items;
  }, [coreRadius, isMobile]);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Inner Glow Core */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[coreRadius * 0.72, isMobile ? 24 : 36, isMobile ? 24 : 36]} />
        <meshStandardMaterial
          color="#0284c7"
          emissive="#00f5ff"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Outer Wireframe Cyber Sphere */}
      <mesh ref={wireframeSphereRef}>
        <sphereGeometry args={[coreRadius, isMobile ? 18 : 28, isMobile ? 18 : 28]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#22d3ee"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Deep Core Point Light */}
      <pointLight color="#00f5ff" intensity={15} distance={20} decay={2} />

      {/* Primary Orbital Ring */}
      <mesh ref={ring1Ref} rotation={[1.1, 0.4, 0]}>
        <torusGeometry args={[coreRadius * 1.55, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Secondary Orbital Ring */}
      <mesh ref={ring2Ref} rotation={[-0.8, -0.6, 0.5]}>
        <torusGeometry args={[coreRadius * 1.9, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#2dd4bf"
          emissive="#2dd4bf"
          emissiveIntensity={0.9}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Third Equatorial Ring */}
      <mesh ref={ring3Ref} rotation={[0.3, 0.8, -0.5]}>
        <torusGeometry args={[coreRadius * 2.3, 0.02, 16, 120]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#60a5fa"
          emissiveIntensity={0.7}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Orbiting Satellite Data Nodes */}
      <group ref={satelliteGroupRef}>
        {nodes.map((node, i) => (
          <mesh key={i} position={[node.x, node.y, node.z]}>
            <octahedronGeometry args={[node.size, 0]} />
            <meshStandardMaterial
              color="#00f5ff"
              emissive="#38bdf8"
              emissiveIntensity={1.5}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
