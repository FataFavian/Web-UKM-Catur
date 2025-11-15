// Menunggu hingga seluruh konten HTML dimuat
document.addEventListener("DOMContentLoaded", function() {

    // =============================================
    // == KODE UNTUK HIDE/SHOW HEADER & NAV ==
    // =============================================
    
    // 1. Pilih elemen .header-wrapper
    const headerWrapper = document.querySelector(".header-wrapper");
    
    // 2. Variabel untuk menyimpan posisi scroll terakhir
    let lastScrollTop = 0;
    
    // 3. Tambahkan event listener untuk 'scroll'
    window.addEventListener("scroll", function() {
        // Ambil posisi scroll vertikal saat ini
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Cek apakah scroll ke bawah ATAU ke atas
        if (currentScrollTop > lastScrollTop) {
            // SCROLL KE BAWAH
            // Sembunyikan header HANYA jika sudah scroll lebih dari tinggi header
            if (currentScrollTop > 200) { // Sesuaikan nilai ini jika perlu
                headerWrapper.classList.add("header-hidden");
            }
        } else {
            // SCROLL KE ATAS
            // Langsung tampilkan header
            headerWrapper.classList.remove("header-hidden");
        }
        
        // 4. Update posisi scroll terakhir
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        
    }, false);


    // =============================================
    // == KODE UNTUK ACCORDION TURNAMEN ==
    // =============================================
    
    // 1. Ambil semua tombol toggle turnamen
    const turnamenToggles = document.querySelectorAll(".turnamen-toggle");

    // 2. Loop (ulangi) untuk setiap tombol
    turnamenToggles.forEach(toggle => {
        
        // 3. Tambahkan 'event listener' (pendengar acara) untuk 'click'
        toggle.addEventListener("click", () => {
            
            const detail = toggle.nextElementSibling;
            const icon = toggle.querySelector(".toggle-icon");

            toggle.classList.toggle("active");
            detail.classList.toggle("active");

            if (detail.classList.contains("active")) {
                icon.textContent = "−"; // Tanda minus
            } else {
                icon.textContent = "+"; // Tanda plus
            }
        });
    });

});