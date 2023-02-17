import {menu} from './menu.js';
import {contact} from './contact.js';
import './style.css';


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

console.log('My name is Skylar White, yo')

let header = document.createElement('div');

let hometab = document.createElement('button');
hometab.textContent = 'Home';
hometab.onclick = function() {

    removeAllChildNodes((document.body));
    header.appendChild(hometab);
    header.appendChild(menutab);
    header.appendChild(contacttab);

    document.body.appendChild(header);
    home();

}

let menutab = document.createElement('button');
menutab.textContent = 'Menu';
menutab.onclick = function() {
    
 
    removeAllChildNodes((document.body));
    header.appendChild(hometab);
    header.appendChild(menutab);
    header.appendChild(contacttab);

    document.body.appendChild(header);
    menu();
}

let contacttab = document.createElement('button');
contacttab.textContent = 'Contact';
contacttab.onclick = function() {


    removeAllChildNodes((document.body));
    header.appendChild(hometab);
    header.appendChild(menutab);
    header.appendChild(contacttab);

    document.body.appendChild(header);
    contact();

}


header.appendChild(hometab);
header.appendChild(menutab);
header.appendChild(contacttab);

document.body.appendChild(header);


let home = function() {

    let title = document.createElement(`div`);
    title.textContent = 'Welcome to Sanji\'s Sea Store! ';
    document.body.appendChild(title);


    let description = document.createElement(`div`);
    description.textContent = 'Sanji is the premiere chef of the Straw Hat Pirates! With him as your cook, you\'ll be bound to eat all sorts of worldwide delicacies, from the East Blue to the New World!'
    document.body.appendChild(description);

    let hours = document.createElement(`div`);
    hours.textContent = `List of Hours: 
    Sunday: 8am - 8pm 
    Monday to Friday: 12pm - 4am 
    Saturday: 1pm - 4am`
    document.body.appendChild(hours);

    let place = document.createElement('div');
    place.textContent = 'Located on the Thousand Sunny, the pirate ship of the Straw Hat Pirates, led by Yonko Straw Hat Luffy';
    document.body.appendChild(place);

    return{title, description, hours, place}

}

let {title, description, hours, place} = home();





