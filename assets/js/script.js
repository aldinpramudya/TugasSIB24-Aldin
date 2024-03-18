const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('namalengkap').value;
    
    alert('Selamat Datang ' + name);
});