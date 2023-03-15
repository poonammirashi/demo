localStorage.setItem('userdetailsemailid', 'name,email,number');
var button = document.querySelector('.btn');
console.log(localStorage.getItem('userdetailsemailid'));

button.addEventListener('click', addevent);

function addevent(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var name = document.querySelector('#name').value;
    var num = document.querySelector('#number').value;
    var obj = {
        person_is: name,
        email_is: email,
        number_is: num
    }
    var obj_serialized = JSON.stringify(obj);
    localStorage.setItem(email, obj_serialized);

    var itemlist = document.querySelector('.items')
    var li = document.createElement('li');

    li.className = 'item';
    li.appendChild(document.createTextNode(name + '-' + email +'-' + (num)));
    itemlist.appendChild(li)
    email = '';
    name = '';
}