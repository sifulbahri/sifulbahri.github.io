import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Typing Effect for Hero
    const typeWriterElement = document.getElementById('typewriter');
    if (typeWriterElement) {
        const textToType = typeWriterElement.getAttribute('data-text') || "System Security Analyst";
        let i = 0;
        typeWriterElement.textContent = '';
        
        function typeWriter() {
            if (i < textToType.length) {
                typeWriterElement.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 500);
    }

    // Glitch Effect on Hover for headings
    const glitchElements = document.querySelectorAll('.glitch-hover');
    glitchElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            const originalText = el.textContent;
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
            
            let iterations = 0;
            const interval = setInterval(() => {
                el.textContent = el.textContent.split('')
                    .map((char, index) => {
                        if(index < iterations) {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                
                if(iterations >= originalText.length){ 
                    clearInterval(interval);
                    el.textContent = originalText;
                }
                
                iterations += 1/3;
            }, 30);
        });
    });

    // Form Handling (Mock)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'ENCRYPTING & SENDING...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = 'TRANSMISSION COMPLETE';
                btn.classList.add('text-cyber-green', 'border-cyber-green');
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
    }
});
