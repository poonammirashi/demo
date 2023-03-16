
var form = document.querySelector('#my-form');

form.addEventListener('submit', addevent);

var itemlist = document.querySelector('.items')
//itemlist.addEventListener('click', removeitem);
//itemlist.addEventListener('click', edititem);



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

    var li = document.createElement('li');

    li.className = 'item';
    li.appendChild(document.createTextNode(name + '-' + email + '-' + num));
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('delete'));

    // email = '';
    // name = '';
    btn.onclick = () => {
        // e.preventDefault();
        //var li = e.target.parentElement;
        //var email = document.getElementById('email').value;
        itemlist.removeChild(li);
        localStorage.removeItem(obj.email);
    }

    var edit = document.createElement('button');
    edit.appendChild(document.createTextNode('edit'));
    edit.onclick = () => {
        //e.preventDefault();
        //var li = e.target.parentElement;
        itemlist.removeChild(li);
        localStorage.removeItem(obj.email);
        document.getElementById('name').value = obj.name
        document.getElementById('email').value = obj.email;
        document.getElementById('number').value = obj.num
    }
    li.appendChild(btn);
    li.appendChild(edit);
    itemlist.appendChild(li);
}
