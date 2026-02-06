
console.log("JS file is connected!");
// Hamburger CSS STARTS HERE
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

// Optional: Close menu when clicking a link
const sideLinks = sideMenu.querySelectorAll("a");
sideLinks.forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });
});
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});
// Hamburger CSS ENDS HERE

// BLUR CSS STARTS HERE

// BLUR CSS ENDS HERE


// IMAGE SLIDER STARTS HERE
document.addEventListener("DOMContentLoaded", function () {
  const ring = document.querySelector('.rotating-slider-ring');
  const zoomOverlay = document.getElementById('zoomPreview');
  const zoomImage = document.getElementById('zoomImage');
  const closeZoom = document.getElementById('closeZoom');
  const prevZoom = document.getElementById('prevZoom');
  const nextZoom = document.getElementById('nextZoom');

  const imagePaths = [
    "images/approved1.jpg",
    "images/approved2.png",
    "images/approved3.png",
    "images/image3.jpg",
    "images/approved10.jpg",
    "images/image10.jpg",
    "images/image12.jpg",
    "images/image13.jpg",
    "images/image14.png",
    "images/image16.png",
    "images/approved4.jpg",
    "images/approved5.jpg",
    "images/new1.png",
    "images/new2.png",
    "images/new3.png"
  ];

  let currentIndex = 0;

  ring.innerHTML = "";
  imagePaths.forEach((src, i) => {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('rotating-slider-img');
    imgDiv.style.backgroundImage = `url(${src})`;
    imgDiv.dataset.index = i; // store index
    ring.appendChild(imgDiv);
  });

  const autoRotate = gsap.to('.rotating-slider-ring', {
    rotationY: '+=360',
    duration: 50,
    ease: 'none',
    repeat: -1,
  });

  gsap.set('.rotating-slider-ring', { rotationY: 365 });
  gsap.set('.rotating-slider-img', {
    rotateY: (i) => i * -36,
    transformOrigin: '50% 50% 500px',
    z: -500,
    backfaceVisibility: 'hidden'
  });

  function openZoom(index) {
    currentIndex = index;
    zoomImage.style.backgroundImage = `url(${imagePaths[currentIndex]})`;
    zoomOverlay.style.display = 'flex';
    autoRotate.pause();
  }

  document.querySelectorAll('.rotating-slider-img').forEach(img => {
    img.addEventListener('click', (e) => {
      openZoom(parseInt(img.dataset.index));
      e.stopPropagation();
    });
  });

  if (closeZoom) {
    closeZoom.addEventListener('click', () => {
      zoomOverlay.style.display = 'none';
      autoRotate.resume();
    });
  }

  // Navigate next/prev
  nextZoom.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    zoomImage.style.backgroundImage = `url(${imagePaths[currentIndex]})`;
  });

  prevZoom.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    zoomImage.style.backgroundImage = `url(${imagePaths[currentIndex]})`;
  });
});


// IMAGE SLIDER ENDS HERE


// EMAIL KA CHAKKAR STARTS HERE
// EMAIL KA CHAKKAR ENDS HERE

// Experimental button starts here
document.addEventListener('DOMContentLoaded', () => {

  // === Elements ===
  const overlay = document.getElementById('callOverlay');
  const triggers = document.querySelectorAll('.js-call-trigger');

  const displayNumber = document.getElementById('displayNumber');
  const callBtn = document.querySelector('.call-btn'); // popup main button
  const copyBtn = document.querySelector('.copy-btn'); // popup copy button
  const closeBtn = document.getElementById('closeOverlayBtn');

  if (!overlay) return;

  // === Open popup dynamically ===
  triggers.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();

      const type = btn.dataset.type;   // "phone" or "email"
      const value = btn.dataset.value; // number or email

      if (!value) return;

      displayNumber.textContent = value;

      // --- SHRINK font for long emails ---
      displayNumber.style.fontSize = type === 'email' ? '1.5rem' : '2rem';

      if (type === 'phone') {
        callBtn.href = `tel:${value}`;
        callBtn.textContent = 'Call';
      } else if (type === 'email') {
        // Gmail compose link
        callBtn.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${value}`;
        callBtn.target = "_blank"; // open in new tab
        callBtn.textContent = 'Email';
      }

      overlay.classList.add('active');
    });
  });

  // === Close popup ===
  const closePopup = () => overlay.classList.remove('active');
  if (closeBtn) closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', e => { if (e.target === overlay) closePopup(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('active')) closePopup(); });

  // === Copy button logic ===
  if (copyBtn && displayNumber) {
    copyBtn.addEventListener('click', () => {
      const text = displayNumber.textContent.trim();
      if (!text) return;

      // Get feedback inside this button only
      const feedback = copyBtn.querySelector('.copy-feedback');
      if (!feedback) return;

      // Copy to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast(feedback));
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast(feedback);
      }
    });

    function showToast(feedbackElement) {
      // Clear previous timeout
      if (feedbackElement.hideTimeout) clearTimeout(feedbackElement.hideTimeout);

      // Show feedback
      feedbackElement.style.opacity = '1';

      // Hide after 1.5 seconds
      feedbackElement.hideTimeout = setTimeout(() => {
        feedbackElement.style.opacity = '0';
      }, 1500);
    }
  }

});


//Experimenatl button ends here


console.log("JS file is connected till end!");


