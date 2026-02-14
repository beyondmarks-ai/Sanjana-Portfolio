document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            nav.classList.toggle('active');
            // Toggle icon
            const icon = menuIcon.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-th');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-th');
            }
        });
    }

    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(15, 15, 15, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
        }
    });
    // Email Modal
    const modal = document.getElementById("email-modal");
    const emailTrigger = document.getElementById("email-trigger");
    const closeBtn = document.getElementsByClassName("close-modal")[0];
    const copyBtn = document.getElementById("copy-email");
    const emailText = document.getElementById("email-address");

    if (emailTrigger && modal) {
        // Open modal
        emailTrigger.onclick = function (e) {
            e.preventDefault();
            modal.style.display = "block";
            // Disable scroll
            document.body.style.overflow = "hidden";
        }

        // Close modal
        closeBtn.onclick = function () {
            modal.style.display = "none";
            // Enable scroll
            document.body.style.overflow = "auto";
        }

        // Close on outside click
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }

        // Copy to clipboard
        if (copyBtn) {
            copyBtn.onclick = function () {
                const textToCopy = emailText.innerText;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    // Feedback
                    const icon = copyBtn.querySelector('i');
                    icon.classList.remove('fa-copy');
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    icon.classList.add('fa-check');

                    setTimeout(() => {
                        icon.classList.remove('fa-check');
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                        icon.classList.add('fa-copy');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            }
        }
    }
});
