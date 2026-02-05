
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
    "images/approved9.jpg",
    "images/image12.jpg",
    "images/image13.jpg",
    "images/image14.png",
    "images/image16.png",
    "images/approved4.jpg",
    "images/approved5.jpg"
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


//Experimenatl button ends here


console.log("JS file is connected till end!");


