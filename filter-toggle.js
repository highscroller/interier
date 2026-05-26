document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.filter-toggle');
    const form = document.querySelector('.filter-form');

    if (!btn || !form) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        form.classList.toggle('visible');
        btn.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!form.contains(e.target) && !btn.contains(e.target)) {
            form.classList.remove('visible');
            btn.classList.remove('active');
        }
    });
});