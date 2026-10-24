import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Waypoints representing the 3D environmental journey through sections
const WAYPOINTS = [
  // 0.00: Hero - establishing shot centered on the glowing core
  { progress: 0.00, pos: [0, 0.8, 16.5], look: [0, 0, 0] },
  // 0.16: About - glide closer toward left aspect
  { progress: 0.16, pos: [-3.2, -2.8, 12.8], look: [0, -1.2, 0] },
  // 0.33: Skills - orbit to the right, angled perspective
  { progress: 0.33, pos: [4.2, -7.6, 12.2], look: [0.6, -6.2, 0] },
  // 0.50: Experience - sweep through the orbital plane
  { progress: 0.50, pos: [-3.6, -12.4, 13.5], look: [-0.4, -11.0, 0] },
  // 0.67: Projects - pull back for depth and wide perspective
  { progress: 0.67, pos: [3.4, -17.8, 14.8], look: [0.2, -16.2, 0] },
  // 0.83: Education & Strengths - descend along the cosmic axis
  { progress: 0.83, pos: [-2.4, -22.8, 13.2], look: [0, -21.2, 0] },
  // 1.00: Contact - final centered atmospheric perspective
  { progress: 1.00, pos: [0, -27.8, 14.5], look: [0, -26.8, 0] },
];

function interpolateWaypoints(p) {
  const clamped = Math.max(0, Math.min(1, p));

  // Find surrounding waypoints
  let i = 0;
  while (i < WAYPOINTS.length - 1 && WAYPOINTS[i + 1].progress < clamped) {
    i++;
  }

  if (i >= WAYPOINTS.length - 1) {
    const last = WAYPOINTS[WAYPOINTS.length - 1];
    return {
      pos: new THREE.Vector3(...last.pos),
      look: new THREE.Vector3(...last.look),
    };
  }

  const w0 = WAYPOINTS[i];
  const w1 = WAYPOINTS[i + 1];
  const segmentT = (clamped - w0.progress) / (w1.progress - w0.progress);
  // Smoothstep easing for fluid transitions without abrupt jumps
  const smoothT = segmentT * segmentT * (3 - 2 * segmentT);

  const pos = new THREE.Vector3(
    THREE.MathUtils.lerp(w0.pos[0], w1.pos[0], smoothT),
    THREE.MathUtils.lerp(w0.pos[1], w1.pos[1], smoothT),
    THREE.MathUtils.lerp(w0.pos[2], w1.pos[2], smoothT)
  );

  const look = new THREE.Vector3(
    THREE.MathUtils.lerp(w0.look[0], w1.look[0], smoothT),
    THREE.MathUtils.lerp(w0.look[1], w1.look[1], smoothT),
    THREE.MathUtils.lerp(w0.look[2], w1.look[2], smoothT)
  );

  return { pos, look };
}

export default function ScrollCamera({ mouseRef, isMobile = false }) {
  const { camera } = useThree();
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        targetProgressRef.current = Math.max(0, Math.min(1, window.scrollY / docHeight));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    // Smooth progress dampening (independent of frame rate)
    const factor = Math.min(delta * 4.5, 1);
    currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * factor;

    const { pos: targetPos, look: targetLook } = interpolateWaypoints(currentProgressRef.current);

    // Responsive position modifier on mobile
    if (isMobile) {
      targetPos.z *= 1.25;
      targetPos.x *= 0.4;
    }

    // Parallax response on desktop
    if (!isMobile && mouseRef && mouseRef.current) {
      targetPos.x += mouseRef.current.x * 0.8;
      targetPos.y += mouseRef.current.y * 0.5;
    }

    // Smoothly interpolate camera position and lookAt
    camera.position.lerp(targetPos, factor);
    currentLookAt.current.lerp(targetLook, factor);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}
