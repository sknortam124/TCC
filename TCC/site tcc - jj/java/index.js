function showPassword() {
    const eye = document.getElementById('eye')
    const eyeslash = document.getElementById('eye-slash')
    const fielpassword = document.getElementById('fiel-password')

    if(eye.style.display === 'none'){
       eye.style.display = 'block'
       eyeslash.style.display = 'none'
       fielpassword.type = 'text'

    } else{
        eye.style.display = 'none'
       eyeslash.style.display = 'block'
       fielpassword.type = 'password'
    }
};

document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('logado!');   
});