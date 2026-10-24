import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CorePlanet from './CorePlanet';
import FloatingObjects from './FloatingObjects';
import ScrollCamera from './ScrollCamera';
import CyberStars from './CyberStars';

function isWebGLAvailable() {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function ImmersiveScene() {
  const [hasWebGL] = useState(() => isWebGLAvailable());
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const [isVisible, setIsVisible] = useState(true);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    const handleVisibility = () => {
      setIsVisible(document.visibilityState !== 'hidden');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  // Graceful CSS Fallback if WebGL is unavailable
  if (!hasWebGL) {
    return (
      <div className="webgl-fallback-bg" aria-hidden="true">
        <div className="cyber-ambient-orb orb-1"></div>
        <div className="cyber-ambient-orb orb-2"></div>
      </div>
    );
  }

  return (
    <div
      className="immersive-canvas-container"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <Canvas
        camera={{ position: [0, 0.8, 16.5], fov: 45, near: 0.1, far: 100 }}
        dpr={isMobile ? [1, 1.3] : [1, 1.8]}
        gl={{
          antialias: !isMobile,
          powerPreference: 'high-performance',
          alpha: true,
          stencil: false,
          depth: true,
        }}
        frameloop={isVisible && !reducedMotion ? 'always' : 'demand'}
        style={{ pointerEvents: 'none' }}
      >
        <fog attach="fog" args={['#030712', 12, 45]} />
        <ambientLight intensity={0.45} />
        <pointLight position={[12, 10, 10]} intensity={18} color="#00f5ff" decay={2} />
        <pointLight position={[-12, -14, 8]} intensity={14} color="#38bdf8" decay={2} />
        <pointLight position={[0, -26, 12]} intensity={15} color="#2dd4bf" decay={2} />

        <Suspense fallback={null}>
          <CorePlanet isMobile={isMobile} />
          <FloatingObjects isMobile={isMobile} mouseRef={mouseRef} />
          <CyberStars isMobile={isMobile} />
          <ScrollCamera mouseRef={mouseRef} isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
