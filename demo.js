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
var items=document.querySelectorAll('.list-group-item');
console.log(items);
items[2].style.backgroundColor ="green";

//Gives error
//items.style.fontWeight='bold';

for(var i=0; i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}
