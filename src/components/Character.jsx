// src/components/CosmicAvatar.jsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function CosmicAvatar() {
  const mountRef = useRef(null);

  useEffect(() => {
    let avatar = null;

    // === Scene Setup ===
    const scene = new THREE.Scene();
    scene.background = null;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      75,
      (window.innerWidth / 2) / window.innerHeight, // Adjusted aspect ratio
      0.1,
      1000
    );
    camera.position.set(0, 1, 3);

    // === Lighting ===
    scene.add(new THREE.AmbientLight(0xffffff, 1));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 5, 5);
    scene.add(directionalLight);

    // === Controls ===
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.enablePan = false;
    controls.autoRotate = false;
    controls.enableZoom = false;

    // === Load Avatar ===
    const loader = new GLTFLoader();
    loader.load("/3d/avatar.glb", (gltf) => {
      avatar = gltf.scene;
      avatar.scale.set(1.85, 1.85, 1.85);
      avatar.position.set(0, -1.5, 0); // Centered in smaller canvas
      scene.add(avatar);
    });

    // === Animate ===
    const animate = () => {
      requestAnimationFrame(animate);
      if (avatar) {
        avatar.rotation.y += 0.003;
      }
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // === Resize Handling ===
    const handleResize = () => {
      renderer.setSize(window.innerWidth / 2, window.innerHeight);
      camera.aspect = (window.innerWidth / 2) / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="mx-0 h-full -z-5"
    />
  );
}
