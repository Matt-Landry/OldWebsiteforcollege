// ADD NEW ITEM TO END OF LIST
var node = document.createElement('li');
node.appendChild(document.createTextNode('cream'));

document.querySelector('ul').appendChild(node);

// ADD NEW ITEM START OF LIST
var node2 = document.createElement('li');
node2.textContent = 'kale';
document.querySelector('ul').insertBefore(node2, document.querySelector('ul').firstElementChild);

var myList = document.getElementsByTagName("LI");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for(i = 0;i < myList.length; i++){

    myList[i].className = "cool";
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
