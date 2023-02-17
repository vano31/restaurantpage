let contact = function() {



console.log('Say my name.');
console.log('...You\'re Heisenberg.');
console.log('You\'re goddam right.');


let contactheading = document.createElement('div');
contactheading.textContent = 'Contact Us';
document.body.appendChild(contactheading);


let contactlist = function () {

    let title = document.createElement('div');
    title.textContent = 'Bevarages';
    document.body.appendChild(title);

    let content = document.createElement('div');

    let item1 = document.createElement('div');
    let item2 = document.createElement('div');
    let item3 = document.createElement('div');

    item1.textContent = 'Sanji @ Thousand Sunny Kitchen Room';
    item2.textContent = 'Nami @ Thousand Sunny Map Room';
    item3.textContent = 'Nico Robin at Thousand Sunny Library';

    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);

    document.body.appendChild(content);

}

contactlist();



}

export {contact};