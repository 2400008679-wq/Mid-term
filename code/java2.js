    let currentAlbum = [];
    let currentIndex = 0;

    // Hàm mở Lightbox và nạp dữ liệu ảnh
    function openLightbox(element) {
        const category = element.getAttribute('data-category');
        const title = element.getAttribute('data-title');
        const albumString = element.getAttribute('data-album');
        
        if (!albumString) return; // Nếu thẻ không có dữ liệu album thì bỏ qua

        currentAlbum = albumString.split(','); // Chuyển chuỗi chữ thành mảng danh sách ảnh
        currentIndex = 0; // Mặc định hiển thị ảnh đầu tiên

        // Đổ dữ liệu vào giao diện
        document.getElementById('lightboxCategory').innerText = category;
        document.getElementById('lightboxTitle').innerText = title;
        document.getElementById('lightboxImg').src = currentAlbum[currentIndex];

        // Hiển thị hộp thoại lên màn hình
        document.getElementById('lightboxModal').style.display = 'flex';
    }

    // Hàm đóng Lightbox
    function closeLightbox() {
        document.getElementById('lightboxModal').style.display = 'none';
    }

    // Hàm chuyển ảnh khi bấm nút < hoặc >
    function changeImage(direction) {
        currentIndex += direction;

        // Nếu vượt quá ảnh cuối thì quay lại ảnh đầu
        if (currentIndex >= currentAlbum.length) {
            currentIndex = 0;
        }
        // Nếu lùi quá ảnh đầu thì nhảy tới ảnh cuối cùng
        if (currentIndex < 0) {
            currentIndex = currentAlbum.length - 1;
        }

        // Cập nhật lại đường dẫn ảnh mới
        document.getElementById('lightboxImg').src = currentAlbum[currentIndex];
    }

    // Đóng hộp thoại khi người dùng bấm trượt ra ngoài vùng ảnh
    window.onclick = function(event) {
        const modal = document.getElementById('lightboxModal');
        if (event.target == modal) {
            closeLightbox();
        }
    }

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
