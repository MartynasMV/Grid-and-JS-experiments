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
//textContent wont pay attention to styling which in this case is display:none, while innerText will and output will be 'Item Lister', not 'Item lister 123'.

/* headerTitle.innerHTML = "<h3>Hell</h3>"; //very interesting, it puts h3 INSIDE h1 :O */

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

/* const oddTitles = document.querySelectorAll("li:nth-child(odd)");
const evenTitles = document.querySelectorAll("li:nth-child(even)");
console.log(oddTitles.length);
for (var i = 0; i < oddTitles.length; i++) {
  oddTitles[i].style.background = "#f4f4f4";
  evenTitles[i].style.background = "#ccc";
} */

//Parents
/* const itemList = document.querySelector("#items");
console.log(itemList);
//Parent Nodes : parentNode and parentElement can be used for the same
console.log(itemList.parentNode);
itemList.parentNode.style.background = "#f4f4f4";
console.log(itemList.parentNode.parentNode); //parents parent
 */

/* //Children
const itemList = document.querySelector("#items");
console.log(itemList.childNodes); // ChildNodes - a bit tricyky as it gives not 'clean' children

console.log(itemList.children); //"pure" childrent with no whitespaces as with childNode
console.log(itemList.children[0]); //specific child
itemList.children[0].style.fontSize = "0.7rem";
itemList.children[1].style.background = "yellow";
//firstChild
console.log(itemList.firstChild); //gives us first child of ChildNode :( a bit useless..

//first ElementChild
console.log(itemList.firstElementChild); //this is 'pure''child
itemList.firstElementChild.textContent =
  "changed with firstElementChild.text.Content";

//last Element Child
console.log(itemList.lastChild); // as firstChild gives not 'pure' child as it is from childNode
console.log(itemList.lastElementChild); //'pure' child
console.log((itemList.lastElementChild.textContent = "Hay!"));
 */
/* 
//Siblings
//nextSibling and previousSibling
const container = document.querySelector(".list-group-item");
console.log(container.nextSibling); //'unpure' sibling... :(

//nextElementSibling and previousElementSibling
console.log(container.nextElementSibling); //selects pure next sibling

//Create Element */
/* 
//create a div with createElement
const newDiv = document.createElement("div");

//add class
newDiv.className = "class_created_with_className";
//add id
newDiv.id = "hell";
//add atribute
newDiv.setAttribute("title", "Hello again");
//ad type
newDiv.setAttribute("type", "xxx");

//add text node with createTextNode
const newDivText = document.createTextNode("Hello World text");

//add text to the div
newDiv.appendChild(newDivText);

//
const container = document.querySelector("header .container");
const h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1); //what iserting and where so newDiv inserting before h1

newDiv.style.fontSize = "2rem";
console.log(newDiv);
 */

//EVENTS!

//button even listener example 1
/* const button = document.querySelector("#button");
button.addEventListener("click", function () {
  console.log("Clicked");
});
 */
//button event listener example 2. difference is named function
/* const button = document.querySelector("#button");
button.addEventListener("click", buttonClick);

function buttonClick() {
  console.log("Clicked");
} */
//example 3 (just as two just with more changes)
/* 
const button = document.querySelector("#button");
button.addEventListener("click", buttonClick);

function buttonClick() {
  document.querySelector("#button").style.background = "red";
  document.querySelector("#header-title").textContent = "Thank you!";
}
 */
/* 
//good trick to get all the info when I click on the button is with console.log(event)

const button = document.querySelector("#button");
button.addEventListener("click", buttonClick);

function buttonClick(event) {
  console.log(event); //to get all Mouseevents when i click
  console.log(event.target); //to see the info about the button class id etc
  console.log(event.target.id); //going deeper and getting buttons specific id which is called 'button'
  console.log(event.target.className); //same as above just with class. just look at all the naming in console.log(event) and console
  const output = document.querySelector("#output");
  output.appendChild(document.createTextNode(event.target.id)); //or for example: output.innerHTML = "<h3>event.target.id</h3>";

  //other useful things i can grab below:
  console.log(event.type); //in this case its click
  console.log(event.clientX); //mouse x axis on the screen (browser)
  console.log(event.clientY); //mouse x axis on the screen (browser)
  console.log(event.offsetX); //X of the element itself
  console.log(event.offsetY); //Y of the element itself
  console.log(event.shiftKey);
  console.log(event.altKey);
  console.log(event.ctrlKey);
}
 */
/* 
const button = document.querySelector("#button");
button.addEventListener("click", runEvent);
button.addEventListener("dblclick", runEvent);
button.addEventListener("mousedown", runEvent);
button.addEventListener("mouseup", runEvent);
function runEvent(event) {
  console.log("EVENT TYPE: " + event.type);
}
 */

//mouse Enter Leave over out events
/* 
const button = document.querySelector("#button");
const box = document.querySelector("#box");
box.addEventListener("mouseenter", runEvent);
box.addEventListener("mouseleave", runEvent);
box.addEventListener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent);
box.addEventListener("mousemove", runEvent);
function runEvent(event) {
  console.log("EVENT TYPE: " + event.type);
  const output = document.querySelector("#output");
  output.innerHTML =
    "<h3>Mouse Y: " + event.offsetY + " Mouse X: " + event.offsetX + "</h3>"; //!!! need to surround even.offsetx with ++ as in this example
  //output.innerHTML = "X: " + event.offsetX + "Y: " + event.offsetY; //simplified version of above

  box.style.background = "rgb(" + event.offsetX + "," + event.offsetY + ",40)";
}
 */

//Keyboard events: Keyup keydown keypress
/* 
const button = document.querySelector("#button");
const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form[class="form-inline mb-3"]'); //more simply would be grabbing by just with .

itemInput.addEventListener("keydown", runEvent); //registering what is typed in input text field

function runEvent(event) {
  console.log("Event type: " + event.type);
  console.log(event.target.value); //with this we are capturing what is written in the field in the console, cna put it somewhere else as well
  const output = document.querySelector("#output");
  output.innerHTML = event.target.value;
  output.style.background = "red";
}
 */

// Keyboard events: focus(in field) blur(clicking out of field)
/* 
const itemInput = document.querySelector('input[type="text"]');
itemInput.addEventListener("focus", runEvent);
itemInput.addEventListener("blur", runEvent);
itemInput.addEventListener("cut", runEvent); //nice! can register when smth is cut
itemInput.addEventListener("paste", runEvent); //can register when smth is pasted
itemInput.addEventListener("copy", runEvent); //can register when smth is copied

function runEvent(event) {
  console.log("EVENT TYPE: " + event.type);
  //i can make any action in connection to the keybaord event for example cut will make body to disappear:
  //document.body.style.display = "none"; //need to get rid of all other event listeners except CUT
} */
/* 
//Keyboard events: input (registers entering cuting and pasting but no copy)

const itemInput = document.querySelector("input[class='form-control mr-2']");

itemInput.addEventListener("input", runEvent);
function runEvent(event) {
  console.log(event.type);
}
 */
/* 
//Keyboard: change event

const select = document.querySelector("select");
select.addEventListener("input", runEvent);
select.addEventListener("change", runEvent);
function runEvent(event) {
  console.log(event.type); //any change will be recorded
  console.log(event.target.value); //logging the selection of change
}
 */

//Keyboard submit event with example to grab what is written in submit and display instead of item 1
const form = document.querySelector("form");
form.addEventListener("submit", runEvent);

function runEvent(e) {
  console.log(e.type);
  e.preventDefault();
  const text = document.querySelector('li[class="list-group-item"]');
  //console.log((text.innerText = "a"));
  const inputValue = document.querySelector("input[type ='text']");
  //console.log(inputValue.value);
  text.innerHTML = inputValue.value;
}
