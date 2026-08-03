// Language dropdown
const langCurrent = document.querySelector('.lang-current');
const langMenu = document.querySelector('.lang-menu');

if (langCurrent && langMenu) {
  langCurrent.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('open');
  });
  document.addEventListener('click', () => langMenu.classList.remove('open'));
}

// Video modal (single shared modal, driven by data-video attribute)
const overlay = document.getElementById('modal-overlay');
const modalVideo = document.getElementById('modal-video');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('[data-video]').forEach(btn => {
  btn.addEventListener('click', () => {
    modalVideo.src = btn.dataset.video;
    overlay.classList.add('open');
  });
});

if (modalClose) modalClose.addEventListener('click', closeModal);
if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  if (!overlay) return;
  overlay.classList.remove('open');
  modalVideo.pause();
  modalVideo.src = '';
}
