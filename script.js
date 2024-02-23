
// Define notes array to hold note items-------------
let notes = [];



// add eventListener to addNotes button ----------
btn.addEventListener('click', function addTitle() {

  // grab user input value------------
  let userInput = document.getElementById('inputNote').value;

  // get note key -----------------
  let grabInputTitle = `note ${localStorage.length + 1}`;

  // Set  note to localStorage--------------
  localStorage.setItem(grabInputTitle, JSON.stringify(userInput));

  // Reload the page after setting the note-------------
  location.reload();
});


// Display notes in the DOM from localStorage------------
for (let i = 0; i < localStorage.length; i++) {
  let grabDisplayItem = localStorage.getItem(localStorage.key(i));
  if (grabDisplayItem) {
    notes.push({ key: localStorage.key(i), value: JSON.parse(grabDisplayItem) }); // Push each note to the notes array
  }
}


notes.forEach(function (elem) {
  // create li to display in dom -----------
  const noteList = document.getElementById('list');
  var listItem = document.createElement('li');
  listItem.textContent = elem.value;
  noteList.appendChild(listItem);

  // create button for each li to delete specific note -----------
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.addEventListener('click', function () {
    // Remove item from local storage----------
    localStorage.removeItem(elem.key);
    // Remove the list item from the DOM------------
    listItem.remove();
  });
  listItem.appendChild(deleteButton);

});

// add eventListener to clear button to clear all the note at a time -----------
let clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function () {
  localStorage.clear()
  location.reload()
})






