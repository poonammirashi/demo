localStorage.setItem('userdetailsemailid','name');
var button=document.querySelector('.btn');

button.addEventListener('click',addevent);

function addevent(e) { 
    e.preventDefault();
    var email=document.getElementById('email').value;
    var name=document.querySelector('#name').value;
    localStorage.setItem(email, name);
    email='';
    name='';
}