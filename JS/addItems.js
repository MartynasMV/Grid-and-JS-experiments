const form = document.querySelector("#addForm");
const itemList = document.querySelector("#items");
const filter = document.querySelector("#filter");

//form submit event
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener("click", removeItem);
//add filter event
filter.addEventListener("keyup", filterItems);

//addItem function
function addItem(e) {
  e.preventDefault();
  //get input value
  const newItem = document.querySelector("#item").value;
  //in this case grabbing this worked, but if there would appear new input there would be a trouble, so bettter would be to use id or class for a specific form!
  console.log(newItem);

  //create new li element
  const li = document.createElement("li");
  //add Class name
  li.className = "list-group-item";
  //add text from the text field
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);

  //create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  //create X by creating text in the button
  deleteBtn.appendChild(document.createTextNode("X"));
  //adding button in the li element:
  li.appendChild(deleteBtn);
}

//remoteItem function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      const li = e.target.parentElement; //!!very important, parent element in this case is buttons parent which is li. if had grabed by li = document.querySelector("li"); then I would be deleting always top li, not the current
      itemList.removeChild(li); //originally it worked with li.remove() but maybe its not the best way??
    }
  }
}

//filterItems Function
function filterItems(e) {
  //grab the text of the search field and convert to lowercase
  const text = e.target.value.toLowerCase();
  //get list of li
  const items = itemList.querySelectorAll("li");
  //converting Html collection to an array
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
