
var button = document.querySelector('.btn');


button.addEventListener('click', addevent);
var btn=document.createElement('button');

var itemlist = document.querySelector('.items')

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
    btn.addEventListener('click', removeitem);
    
    var li = document.createElement('li');
    
    btn.appendChild(document.createTextNode('delete'));

    li.className = 'item';
    li.appendChild(document.createTextNode(name + '-' + email +'-' + (num)));
    li.appendChild(btn);
    itemlist.appendChild(li)
    email = '';
    name = '';

function removeitem(e){
    e.preventDefault();
    var li=e.target.parentElement;
    var email = document.getElementById('email').value;
    itemlist.removeChild(li);
    localStorage.removeItem(email);
}
}