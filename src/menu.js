
let menu = function() {

console.log('My name is Jessie Pinkman, yo');

//Should I try making the individual sections of the page into functions? Maybe that's better?

let menuheading = document.createElement('div');
menuheading.textContent = 'Menu';
document.body.appendChild(menuheading);



let bevarages = function () {

    let title = document.createElement('div');
    title.textContent = 'Bevarages';
    document.body.appendChild(title);

    let content = document.createElement('div');

    let item1 = document.createElement('div');
    let item2 = document.createElement('div');
    let item3 = document.createElement('div');

    item1.textContent = 'Water';
    item2.textContent = 'Sake';
    item3.textContent = 'Cola';

    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);

    document.body.appendChild(content);


}


let sidedishes = function() {

    let title = document.createElement('div');
    title.textContent = 'Side Dishes';
    document.body.appendChild(title);

    let content = document.createElement('div');

    let item1 = document.createElement('div');
    let item2 = document.createElement('div');
    let item3 = document.createElement('div');

    item1.textContent = 'Pizza';
    item2.textContent = 'French Fries';
    item3.textContent = 'Chocolate Cake';

    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);

    document.body.appendChild(content);


}

let maindishes = function() {

    let title = document.createElement('div');
    title.textContent = 'Main Dishes';
    document.body.appendChild(title);

    let content = document.createElement('div');

    let item1 = document.createElement('div');
    let item2 = document.createElement('div');
    let item3 = document.createElement('div');

    item1.textContent = 'Macaroni Casserole';
    item2.textContent = 'Chicken Alfredo Pasta';
    item3.textContent = 'Spaghetti and Meatballs';

    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);

    document.body.appendChild(content);


}

bevarages();
sidedishes();
maindishes();


}

export {menu};

