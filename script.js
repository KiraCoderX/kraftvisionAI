document.addEventListener('DOMContentLoaded', () => {
    console.log('Unified Web Design loaded successfully.');

    // Mobile Menu Toggle Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    
    if (mobileBtn && mobileMenu) {
        let isMenuOpen = false;
        
        mobileBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                // Open menu
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
                
                // Animate hamburger to X
                bar1.classList.add('translate-y-[8px]', 'rotate-45');
                bar2.classList.add('opacity-0');
                bar3.classList.add('-translate-y-[8px]', '-rotate-45');
                
                // Prevent body scrolling
                document.body.style.overflow = 'hidden';
            } else {
                // Close menu
                mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
                
                // Revert hamburger
                bar1.classList.remove('translate-y-[8px]', 'rotate-45');
                bar2.classList.remove('opacity-0');
                bar3.classList.remove('-translate-y-[8px]', '-rotate-45');
                
                // Restore body scrolling
                document.body.style.overflow = '';
            }
        });
    }
});
