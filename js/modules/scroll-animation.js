export default function initScrollAnimation() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const windowHalf = window.innerHeight * 0.5;

    function scrollAnimation() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            const isSectionVisible = (sectionTop - windowHalf) < 0;
            if (isSectionVisible) {
                section.classList.add('active');
            }
            else if (section.classList.contains('active')) {
                section.classList.remove('active');
            }
        });
    }
    if (sections) {
        scrollAnimation();
        window.addEventListener('scroll', scrollAnimation);
    }
}
