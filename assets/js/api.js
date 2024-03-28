 // Fungsi untuk menampilkan data dari API
 function displayData() {
    fetch('https://crudcrud.com/api/5ee073471469419395915420b88cdd46/movies')
    .then(response => response.json())
    .then(data => {
        const apiDataElement = document.getElementById('apiData');
        apiDataElement.innerHTML = ''; // Menghapus data sebelumnya
        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `Judul: ${item.title}, Sutradara: ${item.director}, Tahun: ${item.year}`;
            apiDataElement.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

// Menampilkan data pertama kali saat halaman dimuat
displayData();

// Fungsi untuk menambahkan data ke API
document.getElementById('addMovieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman untuk refresh

    // Mengambil nilai dari form
    const formData = new FormData(this);

    // Membuat objek data untuk dikirim ke API
    const newData = {};
    formData.forEach((value, key) => {
        newData[key] = value;
    });

    // Mengirim permintaan POST ke API
    fetch('https://crudcrud.com/api/5ee073471469419395915420b88cdd46/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data berhasil ditambahkan:', data);
        // Menampilkan kembali data setelah berhasil menambahkan
        displayData();
        // Mengosongkan form setelah berhasil menambahkan
        this.reset();
    })
    .catch(error => {
        console.error('Error adding data:', error);
    });
});