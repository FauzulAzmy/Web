// Mengambil elemen dari DOM
const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');

// Membuka popup ketika tombol diklik
openPopupButton.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah tindakan default
    popup.style.display = 'flex'; // Tampilkan popup
});

// Menutup popup ketika tombol close diklik
closePopupButton.addEventListener('click', function() {
    popup.style.display = 'none'; // Sembunyikan popup
});

// Menutup popup ketika klik di luar konten popup
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none'; // Sembunyikan popup
    }
});

// Menangani form submission
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah pengiriman form default
    alert('Pendaftaran berhasil!'); // Pesan sukses
    popup.style.display = 'none'; // Sembunyikan popup setelah pendaftaran
});
