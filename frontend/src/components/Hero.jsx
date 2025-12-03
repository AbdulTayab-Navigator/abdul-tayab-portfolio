import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import * as THREE from 'three';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
              <img
                src="/profile.jpg"
                alt="Abdul Tayab"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-primary-500 shadow-2xl glow-effect"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Abdul+Tayab&size=200&background=0ea5e9&color=fff&bold=true';
                }}
              />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="text-gradient">Abdul Tayab</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Software Engineer | AI/ML Specialist | Full-Stack Developer
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Final year BESE student at IQRA University, passionate about creating intelligent solutions 
              that bridge the gap between artificial intelligence and practical applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 glass-effect rounded-full text-white font-semibold hover:bg-slate-700/50 transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/abdultayab696"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdultayab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:abdultayab696@gmail.com"
              className="text-slate-400 hover:text-primary-400 transition-colors transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-primary-400 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;