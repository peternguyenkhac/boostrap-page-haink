let mysBtn = document
    .getElementById('scrollbuttonid');

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 200
        || document.documentElement.scrollTop > 200) {
        mysBtn.style.display = 'block';
    } else {
        mysBtn.style.display = 'none';
    }
});