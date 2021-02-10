//Examine the document object:
/* console.dir(document); */
//a few examples what I can catch with document
/* console.log(document.domain); */
/* console.log(document.URL); */
/* console.log(document.title); */
/* document.title = "new title 123"; //I can change stuff not only read it
console.log(document.title);
 */
/* console.log(document.doctype); */
/* console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
 */
/* console.log(document.forms); */
/* console.log(document.links); */
/* console.log(document.forms[0]); */

/* console.log(document.images); */

//SELECTORS
//getElementByID not recommended to use this selector
/* const headerTitle = document.getElementById("header-title"); //not recommended to use this selector
console.log(headerTitle); */
//SELECTORS
//document.getElementsByClassName (same goes for getElementsByTagName)
/* const items = document.getElementsByClassName("list-group-item");
console.log(items[3]);
items[0].textContent =
  "item 1 is now changed by textContent and fontWeight + fontSize";
items[0].style.fontSize = "2rem";
items[0].style.fontWeight = "bold";
items[1].style.backgroundColor = "#7FFF00";
console.log(items[3].textContent);

// items.style.background = "black"; // this wont work because its a COLLECTION of items in order to change we need to loop it
for (var i = 0; i < items.length; i++) {
  items[i].style.background = "#f4f4";
} */
/* 

 */
//SELECTORS
//document.querySelector
//note that it only grabs the first match!
//can grab anything class, tag, header, id. (same as with jquery, which I never used yet)

/* const headerTitle = document.querySelector("#header-title");
const header = document.querySelector("header"); */

/* headerTitle.textContent = "New header";

headerTitle.innerText = "newest chage"; */

/* console.log(headerTitle.textContent); */
//textContent wont pay attention to styling which is display none, while innerText will and output will be 'Item Lister', not 'Item lister 123'.

/* headerTitle.innerHTML = "<h3>Hell</h3>"; //very interesting, it puts h3 inside h1 :O */

/* headerTitle.style.border = "2px solid black"; */

/* header.style.borderBottom = "25px solid yellow"; //!!altough css has property border-bottom here dash has to be changed to borderBottom !! */

/* const header = document.querySelector("#main-header");
header.style.borderBottom = "dotted 10px red"; */

/* const input = document.querySelector("input");
input.value = "Hello value in the input field"; //grabs only the first input out of 2 */

/* const submit = document.querySelector('input[type = "submit"]');
console.log(submit);
submit.value = "changing button value with submit.value";

const item = document.querySelector(".list-group-item");
item.style.color = "red";

const lastItem = document.querySelector(".list-group-item:last-child"); //css selectors can be applied same as in css
lastItem.style.color = "blue";

const secondChild = document.querySelector(".list-group-item:nth-child(2)"); //css selector used
secondChild.style.color = "orange"; */

//SELECTOR querySelectorAll

/* const titles = document.querySelectorAll(".title");
console.log(titles);
console.log(titles[0]);
console.log(titles[1]);
titles[0].textContent = "Hell";
titles[1].textContent = "Items changed with titles[1].textContent";
 */
const oddTitles = document.querySelectorAll("li:nth-child(odd)");
const evenTitles = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < oddTitles.length; i++) {
  oddTitles[i].style.background = "#f4f4f4";
  evenTitles[i].style.background = "#ccc";
}
