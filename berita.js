let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', function () {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            // Scroll ke atas
            document.getElementById('nav-bawah').classList.add('navbar-visible');
            document.getElementById('nav-bawah').classList.remove('navbar-hidden');
        } else {
            // Scroll ke bawah
            document.getElementById('nav-bawah').classList.remove('navbar-visible');
            document.getElementById('nav-bawah').classList.add('navbar-hidden');
        }

        prevScrollPos = currentScrollPos;
    });

  // Initialize ScrollReveal
  ScrollReveal().reveal('.card', {
    duration: 1000, // Animation duration in milliseconds
    origin: 'bottom', // Animation starting point
    distance: '50px', // Distance the element moves during animation
    easing: 'ease-in-out', // Easing function
    interval: 200 // Delay between items in a group
  });


