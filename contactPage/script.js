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

        // 3. Form Submission Logic (Visual Simulation)
        function handleFormSubmit(event) {
            event.preventDefault(); // প্রিভেন্ট ডিফল্ট: ডেটা কোথাও পাঠানো আটকায়
            
            const btn = document.getElementById('submit-btn');
            const originalText = btn.innerText;
            
            // লোডিং স্টেট
            btn.innerText = 'Transmitting...';
            btn.style.opacity = '0.7';
            btn.style.pointerEvents = 'none';

            // সিমুলেটেড নেটওয়ার্ক ডিলে (1.5 সেকেন্ড)
            setTimeout(() => {
                // ফর্ম রিসেট এবং বাটন রিস্টোর
                document.getElementById('arventa-contact-form').reset();
                btn.innerText = originalText;
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
                
                // সাকসেস পপআপ শো করানো
                document.getElementById('success-modal').classList.add('active');
                document.body.style.overflow = 'hidden'; // ব্যাকগ্রাউন্ড স্ক্রল বন্ধ
            }, 1500);
        }

        // 4. Close Modal Logic
        function closeModal() {
            document.getElementById('success-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // 5. FAQ Accordion Logic (Same as Homepage)
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