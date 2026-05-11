// 1. Mobile Menu Logic
        function toggleMenu() {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('nav-menu');
            btn.classList.toggle('active');
            menu.classList.toggle('active');
            if (menu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        // 2. Navbar Scroll Logic
        window.addEventListener('scroll', () => {
            const header = document.getElementById('navbar');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // 3. Cinematic Scroll Reveals & Number Counters
        document.addEventListener('DOMContentLoaded', () => {
            const revealElements = document.querySelectorAll('.reveal');
            
            const revealOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    
                    entry.target.classList.add('active');
                    
                    // Trigger counters if it's the stats section
                    if(entry.target.classList.contains('stats-section')) {
                        runCounters();
                    }
                    
                    observer.unobserve(entry.target);
                });
            }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

            revealElements.forEach(el => revealOnScroll.observe(el));

            // Number Counter Function
            let countersRun = false;
            function runCounters() {
                if(countersRun) return;
                const counters = document.querySelectorAll('.counter');
                const speed = 200; 

                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 15);
                        } else {
                            counter.innerText = target + "+";
                        }
                    };
                    updateCount();
                });
                countersRun = true;
            }
        });

        // 4. FAQ Accordion Logic
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('span').innerText = '+';
                    }
                });
                item.classList.toggle('active');
                const icon = question.querySelector('span');
                if (item.classList.contains('active')) {
                    icon.innerText = '-';
                } else {
                    icon.innerText = '+';
                }
            });
        });