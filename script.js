document.addEventListener('DOMContentLoaded', () => {
  const messageModal = document.getElementById('messageModal');
  const openMessageBtn = document.getElementById('openMessageBtn');
  const closeMessageBtn = document.getElementById('closeMessageBtn');

  const galleryModal = document.getElementById('galleryModal');
  const openGalleryBtn = document.getElementById('openGalleryBtn');
  const closeGalleryBtn = document.getElementById('closeGalleryBtn');

  const watchBtn = document.getElementById('watchBtn');
  const giftVideo = document.getElementById('giftVideo');

  let previouslyFocusedElement = null;

  // Open modal and move focus to close control
  function openModal(modal) {
    if (!modal) return;
    previouslyFocusedElement = document.activeElement;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 100);
    }
  }

  // Close modal and restore focus to trigger element
  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
      previouslyFocusedElement.focus();
    }
  }

  if (openMessageBtn) {
    openMessageBtn.addEventListener('click', () => openModal(messageModal));
  }
  if (closeMessageBtn) {
    closeMessageBtn.addEventListener('click', () => closeModal(messageModal));
  }

  if (openGalleryBtn) {
    openGalleryBtn.addEventListener('click', () => openModal(galleryModal));
  }
  if (closeGalleryBtn) {
    closeGalleryBtn.addEventListener('click', () => closeModal(galleryModal));
  }

  [messageModal, galleryModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (messageModal && messageModal.classList.contains('active')) {
        closeModal(messageModal);
      }
      if (galleryModal && galleryModal.classList.contains('active')) {
        closeModal(galleryModal);
      }
    }
  });

  if (watchBtn && giftVideo) {
    watchBtn.addEventListener('click', () => {
      giftVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (giftVideo.paused) {
        giftVideo.play().catch(() => {});
        watchBtn.textContent = 'Pause Film';
      } else {
        giftVideo.pause();
        watchBtn.textContent = 'Watch Film';
      }
    });

    giftVideo.addEventListener('play', () => {
      watchBtn.textContent = 'Pause Film';
    });

    giftVideo.addEventListener('pause', () => {
      watchBtn.textContent = 'Watch Film';
    });

    const handleFullscreenChange = () => {
      const isFs = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
      if (isFs) {
        giftVideo.classList.add('fullscreen-active');
      } else {
        giftVideo.classList.remove('fullscreen-active');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
  }

  // Chalk particle sparkle effect on click
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
      createSparkle(e.clientX, e.clientY);
    });
  });

  function createSparkle(x, y) {
    const colors = ['#c9c4ba', '#edefe6'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = `${x - 12}px`;
    sparkle.style.top = `${y - 12}px`;
    sparkle.style.width = '24px';
    sparkle.style.height = '24px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.color = color;
    sparkle.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z"/></svg>`;
    sparkle.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    sparkle.style.transform = 'scale(0.5) rotate(0deg)';
    sparkle.style.opacity = '1';

    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {
      sparkle.style.transform = 'scale(1.5) rotate(45deg) translateY(-20px)';
      sparkle.style.opacity = '0';
    });

    setTimeout(() => {
      sparkle.remove();
    }, 600);
  }
});




