document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // 2. Intersection Observer for Cinematic Reveals
            const revealElements = document.querySelectorAll('.reveal');
            const revealOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };
            
            const revealOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('active');
                    
                    // Trigger counters if it's the hero stats section
                    if (entry.target.classList.contains('hero-stats')) {
                        runCounters();
                    }
                    
                    observer.unobserve(entry.target); // Only animate once
                });
            }, revealOptions);
            
            revealElements.forEach(el => revealOnScroll.observe(el));
            
            // 3. Number Counter Animation for Stats
            let countersRun = false;
            
            function runCounters() {
                if (countersRun) return;
                const counters = document.querySelectorAll('.counter');
                const speed = 200; // The lower the slower
                
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
            
            // 4. FAQ Accordion Logic
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            otherItem.querySelector('.faq-question span').innerText = '+';
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                    const icon = question.querySelector('span');
                    if (item.classList.contains('active')) {
                        icon.innerText = '-';
                    } else {
                        icon.innerText = '+';
                    }
                });
            });
            
        });
        
        // এই ফাংশনটি বাটন ক্লিক হ্যান্ডেল করবে
        function toggleMenu() {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('nav-menu');
            
            btn.classList.toggle('active');
            menu.classList.toggle('active');
            
            // মেনু খোলা অবস্থায় পেজের স্ক্রল বন্ধ রাখা
            if (menu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
        
        // স্ক্রল করলে হেডারের ব্যাকগ্রাউন্ড চেঞ্জ হবে
        window.addEventListener('scroll', () => {
            const header = document.getElementById('navbar');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });