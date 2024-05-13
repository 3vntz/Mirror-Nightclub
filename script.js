document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });

            this.classList.add('active');

            var href = this.getAttribute('href');

            document.getElementById('content').classList.add('hide');

            setTimeout(function() {
                window.location.href = href;
            }, 500);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var fadeInElement = document.querySelector('.fade-in');
    fadeInElement.classList.add('active'); // Add 'active' class to trigger the fade-in effect
});
