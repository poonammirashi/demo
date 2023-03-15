localStorage.setItem('userdetailsemailid','name,age');
var button=document.querySelector('.btn');
console.log(localStorage.getItem('userdetailsemailid'));

button.addEventListener('click',addevent);

function addevent(e) { 
    e.preventDefault();
    var email=document.getElementById('email').value;
    var name=document.querySelector('#name').value;
    var obj = {
        person:name,
        age:23
    }
    var obj_serialized = JSON.stringify(obj);
    localStorage.setItem(email, obj_serialized);
    email='';
    name='';
}