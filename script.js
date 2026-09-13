document.addEventListener('DOMContentLoaded', () => {
  // Modal Elements
  const messageModal = document.getElementById('messageModal');
  const openMessageBtn = document.getElementById('openMessageBtn');
  const closeMessageBtn = document.getElementById('closeMessageBtn');

  const galleryModal = document.getElementById('galleryModal');
  const openGalleryBtn = document.getElementById('openGalleryBtn');
  const closeGalleryBtn = document.getElementById('closeGalleryBtn');

  // Video Elements
  const watchBtn = document.getElementById('watchBtn');
  const giftVideo = document.getElementById('giftVideo');

  // Utility to open modal
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent main scrolling
  }

  // Utility to close modal
  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore main scrolling
  }

  // Message Modal Events
  if (openMessageBtn) {
    openMessageBtn.addEventListener('click', () => openModal(messageModal));
  }
  if (closeMessageBtn) {
    closeMessageBtn.addEventListener('click', () => closeModal(messageModal));
  }

  // Gallery Modal Events
  if (openGalleryBtn) {
    openGalleryBtn.addEventListener('click', () => openModal(galleryModal));
  }
  if (closeGalleryBtn) {
    closeGalleryBtn.addEventListener('click', () => closeModal(galleryModal));
  }

  // Close modals on overlay background click
  [messageModal, galleryModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  // Close modals on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(messageModal);
      closeModal(galleryModal);
    }
  });

  // Gift Video Watch Button Event
  if (watchBtn && giftVideo) {
    watchBtn.addEventListener('click', () => {
      giftVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (giftVideo.paused) {
        giftVideo.play().catch(() => {
          // Fallback if video source is empty placeholder
          console.log('Video play triggered. Please add a valid video source.');
        });
        watchBtn.textContent = 'Pause';
      } else {
        giftVideo.pause();
        watchBtn.textContent = 'Watch';
      }
    });

    giftVideo.addEventListener('play', () => {
      watchBtn.textContent = 'Pause';
    });

    giftVideo.addEventListener('pause', () => {
      watchBtn.textContent = 'Watch';
    });

    // Dynamic Fullscreen Handler to strip borders & rounded corners
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
});
