// 1. MOBILE MENU LOGIC
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

// 2. NAVBAR SCROLL EFFECT & REVEAL ANIMATION
window.addEventListener('scroll', () => {
    const header = document.getElementById('navbar');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    handleReveal();
});

function handleReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
}
// Trigger reveal on load
document.addEventListener('DOMContentLoaded', handleReveal);

// 3. STATIC HTML SEARCH & FILTER LOGIC
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('blog-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.blog-post');

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        
        posts.forEach(post => {
            const searchData = post.getAttribute('data-search').toLowerCase();
            if (searchData.includes(term)) {
                post.style.display = 'flex'; // Show post
            } else {
                post.style.display = 'none'; // Hide post
            }
        });
    });

    // Filter Button functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            posts.forEach(post => {
                const category = post.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    post.style.display = 'flex';
                } else {
                    post.style.display = 'none';
                }
            });
            // Clear search input when using category filters
            searchInput.value = '';
        });
    });
});
