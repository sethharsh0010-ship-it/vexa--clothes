/**
 * VEXA - Liquid Cursor & Interactive Ambient Background Experience
 * 
 * Features:
 * 1. Desktop Liquid Cursor with Spring Physics & Trailing Lag
 * 2. Magnetic Interaction on CTAs and Interactive Buttons
 * 3. Fluid Distortion and Translucent Champagne/Pearl Glow
 * 4. Ambient Pearl Liquid Flow Canvas with Slow Organic Sinusoidal Movement
 * 5. Complete Device Detection (disables on touch / respects prefers-reduced-motion)
 */

(function() {
  'use strict';

  // 1. Accessibility & Device Checks
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  if (prefersReducedMotion || isTouchDevice) {
    // Graceful exit for touch and reduced motion preferences
    return;
  }

  // ==================== A. LIQUID CURSOR WITH SPRING PHYSICS ====================
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let glowX = mouseX;
  let glowY = mouseY;
  let targetMagneticElement = null;
  let magneticX = 0;
  let magneticY = 0;

  // Create DOM Elements if not present
  let cursorEl = document.getElementById('liquidCursor');
  let glowEl = document.getElementById('liquidCursorGlow');

  if (!cursorEl) {
    cursorEl = document.createElement('div');
    cursorEl.id = 'liquidCursor';
    cursorEl.className = 'vexa-liquid-cursor';
    document.body.appendChild(cursorEl);
  }

  if (!glowEl) {
    glowEl = document.createElement('div');
    glowEl.id = 'liquidCursorGlow';
    glowEl.className = 'vexa-liquid-cursor-glow';
    document.body.appendChild(glowEl);
  }

  window.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (targetMagneticElement) {
      const rect = targetMagneticElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = mouseX - centerX;
      const distY = mouseY - centerY;
      const distance = Math.hypot(distX, distY);

      if (distance < 90) {
        // Subtle magnetic pull
        magneticX = centerX + distX * 0.35;
        magneticY = centerY + distY * 0.35;
        targetMagneticElement.style.transform = `translate(${distX * 0.22}px, ${distY * 0.22}px)`;
      } else {
        targetMagneticElement.style.transform = '';
        targetMagneticElement = null;
      }
    }
  }, { passive: true });

  // Bind Magnetic & Hover Elements
  function bindInteractiveElements() {
    const interactives = document.querySelectorAll('.btn, .icon-action-btn, .category-card, .product-card, a, button, input, select');
    interactives.forEach(function(el) {
      if (el.dataset.hasCursorListener) return;
      el.dataset.hasCursorListener = 'true';

      el.addEventListener('mouseenter', function() {
        if (cursorEl) cursorEl.classList.add('cursor-hover');
        if (el.classList.contains('btn') || el.classList.contains('icon-action-btn')) {
          targetMagneticElement = el;
        }
      });

      el.addEventListener('mouseleave', function() {
        if (cursorEl) cursorEl.classList.remove('cursor-hover');
        if (targetMagneticElement === el) {
          el.style.transform = '';
          targetMagneticElement = null;
        }
      });
    });
  }

  // Animation Loop for Spring Interpolation
  function animateCursor() {
    // Dynamic spring interpolation constants
    const targetX = targetMagneticElement ? magneticX : mouseX;
    const targetY = targetMagneticElement ? magneticY : mouseY;

    // Fast spring for inner liquid dot
    cursorX += (targetX - cursorX) * 0.22;
    cursorY += (targetY - cursorY) * 0.22;

    // Smoother, lagging trail for outer ambient champagne glow
    glowX += (targetX - glowX) * 0.09;
    glowY += (targetY - glowY) * 0.09;

    cursorEl.style.left = cursorX + 'px';
    cursorEl.style.top = cursorY + 'px';

    glowEl.style.left = glowX + 'px';
    glowEl.style.top = glowY + 'px';

    requestAnimationFrame(animateCursor);
  }

  // ==================== B. AMBIENT LIQUID PEARL CANVAS ====================
  let canvas = document.getElementById('ambientLiquidCanvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'ambientLiquidCanvas';
    canvas.className = 'ambient-liquid-canvas';
    document.body.prepend(canvas);
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', function() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  // Floating Organic Blobs with subtle pearl / soft champagne hues
  const blobs = [
    { x: width * 0.2, y: height * 0.3, radius: 360, vx: 0.15, vy: 0.12, baseColor: 'rgba(240, 237, 231, 0.42)' },
    { x: width * 0.8, y: height * 0.25, radius: 420, vx: -0.12, vy: 0.18, baseColor: 'rgba(232, 223, 208, 0.35)' },
    { x: width * 0.5, y: height * 0.75, radius: 460, vx: 0.14, vy: -0.15, baseColor: 'rgba(247, 247, 245, 0.55)' },
    { x: width * 0.15, y: height * 0.85, radius: 340, vx: -0.11, vy: -0.13, baseColor: 'rgba(244, 245, 246, 0.48)' }
  ];

  let time = 0;
  function renderLiquidBackground() {
    time += 0.003;
    ctx.clearRect(0, 0, width, height);

    blobs.forEach(function(blob, i) {
      // Harmonic motion
      blob.x += Math.sin(time + i * 1.5) * 0.45 + blob.vx;
      blob.y += Math.cos(time + i * 1.2) * 0.45 + blob.vy;

      // Wrap around screen bounds
      if (blob.x < -blob.radius) blob.x = width + blob.radius;
      if (blob.x > width + blob.radius) blob.x = -blob.radius;
      if (blob.y < -blob.radius) blob.y = height + blob.radius;
      if (blob.y > height + blob.radius) blob.y = -blob.radius;

      const grad = ctx.createRadialGradient(
        blob.x, blob.y, 0,
        blob.x, blob.y, blob.radius
      );
      grad.addColorStop(0, blob.baseColor);
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(renderLiquidBackground);
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', function() {
    bindInteractiveElements();
    // Rebind periodically when views or product grids update
    setInterval(bindInteractiveElements, 2000);
  });

  animateCursor();
  renderLiquidBackground();
})();
