let notes = []


// onclick event  to  store the list -------------

btn.addEventListener('click', function addTitle() {

  // grab input Title field value 
  let grabIputTitle = document.getElementById("inputTitle").value



  // grab the note input field value --------------
  let userInput = document.getElementById('inputNote').value
  notes.push(userInput)

  // set the note to localStorage ------------

  localStorage.setItem(JSON.stringify(grabIputTitle), JSON.stringify(notes));
  notes = [];

  location.reload()
})

// display notes in to the DOM from the localstorage 

for (let i = 0; i < localStorage.length; i++) {
  let grabDisplayItem = localStorage.getItem(localStorage.key(i))

  if (grabDisplayItem) {
    notes = JSON.parse(grabDisplayItem)
  }

  notes.forEach(function (elem) {
    const noteList = document.getElementById('list');
    let listItem = document.createElement('li');
    listItem.textContent = elem;
    noteList.appendChild(listItem)

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete' 
    listItem.appendChild(deleteButton);

  })
}
 
notes = []




