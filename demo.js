//Examine the document object//

//console.log(document.dir);
//console.log(document);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);
//console.log(document.forms);
//console.log(document.links);


//GETELEMENTBYID//

//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//headerTitle.textContent='hello';
//headerTitle.innerText='GoodBye';
//header.style.borderBottom='solid 3px #000000';


//GETELEMENTBYCLASS//

//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent='Hello 2';
//console.log(items[2]);
//var items=document.querySelectorAll('.list-group-item');
//console.log(items);
//items[2].style.backgroundColor ="green";

//Gives error
//items.style.fontWeight='bold';

//for(var i=0; i<items.length;i++)
//{
  //  items[i].style.fontWeight='bold';
//}


//GETELEMENTBYTAGNAME//

//var li=document.getElementsByTagName('li');
//console.log(li);
//li[1].textContent='hello';
//li[1].style.backgroundColor='yellow';

//for(var i=0;i<li.length;i++)
//{
  //  li[i].style.fontWeight='bold';
//}

//QUERYSELECTOR//

//var input=document.querySelector('input');
//input.value='hello world';

//var item = document.querySelector('.list-group-item');
//item.style.color="red";

//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = "blue";

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor = 'green';
//secondItem.style.visibility = 'hidden';

//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.visibility = 'hidden';

//QUERYSELECTORALL//

//var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent='hello';

//var secondList = document.querySelectorAll('.list-group-item');

//secondList[1].style.color = 'green';
//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');
//for(var i = 0; i < odd.length; i++)
//{
  // odd[i].style.backgroundColor = 'green';
   // even[i].style.backgroundColor = '#ccc';
//}


//TRAVERSING THE DOM//

var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);


//parentElement//
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);

//childNodes//

//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'red';

//firstChild//
//console.log(itemList.firstChild);

//firstElementChild//

//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello';

//lastChild//

//console.log(itemList.lastChild);

//lastElementChild//

//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'goodbye';

//nextsibling//

//console.log(itemList.nextSibling);

//nextElementSibling//

//console.log(itemList.nextElementSibling);

//previoussibling//

//console.log(itemList.previousSibling);

//previousElementsiblings//

//console.log(itemList.previousElementSibling);

//createElement//

//create a div

var newDiv = document.createElement('div');

//add class

newDiv.className = 'hello';

//add id

newDiv.id = 'hello1';

//add attribute

newDiv.setAttribute('title', 'hello div');

//create text node

var newDivText = document.createTextNode('Hello World');

//add text to div

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

var listGroup = document.querySelector('.list-group');
var list = document.querySelectorAll('.list-group-item');
//var h2 = document.querySelectorAll('h2');
console.log(list[0]);
//console.log(li);

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);
listGroup.insertBefore(newDiv, list[0]);