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

const headerTitle = document.querySelector("#header-title");

/* headerTitle.textContent = "New header";

headerTitle.innerText = "newest chage"; */

/* console.log(headerTitle.textContent); */
//textContent wont pay attention to styling which is display none, while innerText will and output will be 'Item Lister', not 'Item lister 123'.

/* headerTitle.innerHTML = "<h3>Hell</h3>"; //very interesting, it puts h3 inside h1 :O */

headerTitle.style.border = "2px solid black";
