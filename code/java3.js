
        const lightbox = document.getElementById('imageLightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const closeBtn = document.querySelector('.lightbox-close');
        const gridItems = document.querySelectorAll('.grid-item');

        // Lắng nghe sự kiện click vào từng ô ảnh
        gridItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                if (img) {
                    lightbox.style.display = 'flex'; // Hiện khung lightbox
                    lightboxImg.src = img.src; // Gán đường dẫn ảnh sang ảnh phóng to
                    lightboxImg.alt = img.alt;
                }
            });
        });

        // Click vào dấu X để đóng ảnh phóng to
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        // Hoặc click vào bất kỳ vùng nền tối nào bên ngoài cũng tự động đóng ảnh
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg && e.target !== closeBtn) {
                lightbox.style.display = 'none';
            }
        });

const menuButton = document.getElementById('menuButton');
const mtMenu = document.getElementById('mtMenu');

menuButton.addEventListener('click', () => {
    mtMenu.classList.toggle('active');
    if (mtMenu.classList.contains('active')) {
        menuButton.textContent = '✕';
    } else {
        menuButton.textContent = '☰';
    }
});

const menuLinks = document.querySelectorAll('.mt-link, .contact-button');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mtMenu.classList.remove('active');
        menuButton.textContent = '☰';
    });
});
