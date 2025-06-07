import React, { useRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/addons/math/ImprovedNoise.js"; // For organic movement

export default function CosmicBackground() {
  const mountRef = useRef(null);
  const frameId = useRef(0);

  // Cosmic color palette
  const COSMIC_COLORS = {
  DEEP_SPACE: 0x000000, // Pure black

  STAR_BASE: 0xb3d9ff,  // Cool soft blue

  STAR_GIANTS: [
    0xff4422, // Red giant
    0x44aaff, // Blue giant
    0xffdd88, // Yellow giant
  ],
};



  const createStarField = useCallback((scene) => {
    // Hyper-realistic star distribution parameters
    const STAR_COUNT = 5000; // Better matches visible star density
    const STAR_DISTANCE = 1000; // In parsecs (artistic scale)
    const STAR_SIZE_VARIATION = [0.1, 1.5]; // Range of star sizes

    const positions = new Float32Array(STAR_COUNT * 3);
    const colors = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      // Spherical distribution
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = STAR_DISTANCE * Math.cbrt(Math.random());

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Color variation based on star type
      const isGiant = Math.random() < 0.05; // 5% chance of giant star
      const color = new THREE.Color(
        isGiant 
          ? COSMIC_COLORS.STAR_GIANTS[Math.floor(Math.random() * 2)]
          : COSMIC_COLORS.STAR_BASE
      );
      color.toArray(colors, i * 3);

      // Size variation with gamma correction
      sizes[i] = THREE.MathUtils.mapLinear(
        Math.pow(Math.random(), 2), 
        0, 1, 
        STAR_SIZE_VARIATION[0], 
        STAR_SIZE_VARIATION[1]
      );
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      vertexColors: true,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      depthWrite: false
    });

    const stars = new THREE.Points(geometry, material);
    stars.rotation.set(Math.PI / 4, Math.PI / 4, 0); // Angled galactic plane
    scene.add(stars);

    return stars;
  }, []);


  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(COSMIC_COLORS.DEEP_SPACE);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Cosmic elements
    const stars = createStarField(scene);

    // Add interstellar dust (particle field)
    const dust = new THREE.Points(
      new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 10000 }, () => {
          const v = new THREE.Vector3(
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 200
          );
          v.multiplyScalar(3);
          return v;
        })
      ),
      new THREE.PointsMaterial({
        color: 0x8888aa,
        size: 0.1,
        transparent: true,
        opacity: 0.05
      })
    );
    scene.add(dust);

    // Animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.0001;

      // Galactic rotation
      stars.rotation.y += 0.0001;


      // Dust rotation
      dust.rotation.x += 0.0002;
      dust.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    // Responsive handling with debounce
    const resizeDebounce = debounce(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, 100);

    window.addEventListener("resize", resizeDebounce);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId.current);
      window.removeEventListener("resize", resizeDebounce);
      mountRef.current?.removeChild(renderer.domElement);
      
      [scene, renderer].forEach(obj => {
        obj.dispose?.();
        if (obj instanceof THREE.Scene) {
          obj.traverse(child => {
            if (child.material) {
              child.material.dispose();
            }
            if (child.geometry) {
              child.geometry.dispose();
            }
          });
        }
      });
    };
  }, [createStarField]);

  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}

// Utility function
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}