import {menu} from './menu.js';
import {contact} from './contact.js';
import './style.css';


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

console.log('My name is Skylar White, yo');

let wrapper = document.createElement('div');
document.body.appendChild(wrapper);

let header = document.createElement('div');
header.classList.add('header');


let hometab = document.createElement('button');
hometab.textContent = 'Home';
hometab.onclick = function() {

    removeAllChildNodes((wrapper));
    header.appendChild(hometab);
    header.appendChild(menutab);
    header.appendChild(contacttab);

    wrapper.appendChild(header);
    home();

}

let menutab = document.createElement('button');
menutab.textContent = 'Menu';
menutab.onclick = function() {
    
 
    removeAllChildNodes((wrapper));
    header.appendChild(hometab);
    header.appendChild(menutab);
    header.appendChild(contacttab);

    wrapper.appendChild(header);
    menu();
}

let contacttab = document.createElement('button');
contacttab.textContent = 'Contact';
contacttab.onclick = function() {


    removeAllChildNodes((wrapper));
    header.appendChild(hometab);
    header.appendChild(menutab);
    header.appendChild(contacttab);

    wrapper.appendChild(header);
    contact();

}


header.appendChild(hometab);
header.appendChild(menutab);
header.appendChild(contacttab);

wrapper.appendChild(header);

//document.body.appendChild(header);


let home = function() {

    let homediv = document.createElement('div');
    homediv.classList.add('homediv');

    let title = document.createElement(`div`);
    title.textContent = 'Welcome to Sanji\'s Sea Store! ';
    title.classList.add('title');
    homediv.appendChild(title);


    let description = document.createElement(`div`);
    description.textContent = 'Sanji is the premiere chef of the Straw Hat Pirates! With him as your cook, you\'ll be bound to eat all sorts of worldwide delicacies, from the East Blue to the New World!'
    description.classList.add('description');
    homediv.appendChild(description);

    let hours = document.createElement(`div`);
    hours.textContent = `List of Hours: 
    Sunday: 8am - 8pm 
    Monday to Friday: 12pm - 4am 
    Saturday: 1pm - 4am`;
    hours.classList.add('hours');
    homediv.appendChild(hours);

    let place = document.createElement('div');
    place.textContent = 'Located on the Thousand Sunny, the pirate ship of the Straw Hat Pirates, led by Yonko Straw Hat Luffy';
    place.classList.add('place');
    homediv.appendChild(place);

    wrapper.appendChild(homediv);

    return{homediv, title, description, hours, place}

}

let {homediv, title, description, hours, place} = home();





