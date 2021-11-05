// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul');
var items = list[0].getElementsByTagName('li');

let backItem = document.createElement('li');
backItem.innerHTML = 'cream';

list[0].appendChild(backItem);

// ADD NEW ITEM START OF LIST
let frontItem = document.createElement('li');
frontItem.innerHTML = 'kale';

list[0].insertBefore(frontItem, list[0].firstChild)

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for(let i = 0; i < items.length; i++){
    items[i].setAttribute('class', 'cool');}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var groceries = document.getElementsByTagName('h2');
groceries[0].innerHTML += "<span>" + items.length + "</span>";