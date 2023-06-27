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

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='hello';

var secondList = document.querySelectorAll('.list-group-item');

secondList[1].style.color = 'green';
var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');
for(var i = 0; i < odd.length; i++)
{
   odd[i].style.backgroundColor = 'green';
   // even[i].style.backgroundColor = '#ccc';
}

