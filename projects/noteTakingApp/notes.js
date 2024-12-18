let noteTitle = document.querySelector("input#noteTitle").value;
let notes = document.querySelector("textarea#notes").value;
let errMssg = document.querySelector("div#error");
let submit = document.querySelector("button");
let content = document.querySelector("div.thynotes");

let noteStorage = JSON.parse(localStorage.getItem("notes")) || [];

// Add data to localStorage
function storeData() {
  if ((noteTitle == "") | (notes == "")) {
    let p = document.createElement("p");
    p.style.color = "red";
    p.style.fontSize = "medium";
    p.textContent = "Notes title and content cannot be empty!!";
    errMssg.appendChild(p);
    setTimeout(() => p.remove(), 3000);
    return;
  } else {
    noteStorage.push({
      title: noteTitle,
      notes: notes,
    });

    localStorage.setItem("notes", JSON.stringify(noteStorage));

    let p = document.createElement("p");

    p.style.color = "green";
    p.style.fontSize = "medium";
    p.textContent = "Notes saved successfully!!";
    errMssg.appendChild(p);

    setTimeout(() => p.remove(), 3000);
    clearFields();
  }

  return noteStorage;
}

// Clear fields after sub,itting the form
function clearFields() {
  document.querySelector("input#noteTitle").value = "";
  document.querySelector("textarea#notes").value = "";
}

// Submit form data for storage
submit.addEventListener("click", (e) => {
  e.preventDefault();
  storeData();
});

//counter function
function counter() {
  let count = document.querySelector("b");
  count.textContent = noteStorage.length;
  return count.textContent;
}

//
function notesCounterInfo() {
  let header = document.createElement("h1");
  let b = document.createElement("b");
  header.textContent = `You have about ${(b.innerText = counter())} notes`;
  content.appendChild(header);
  return header;
}

// Delete all button
let clearButton = document.createElement("button");

clearButton.innerText = "Delete All";
clearButton.style.backgroundColor = "red";
clearButton.setAttribute("title", "Delete All Notes permanently?");
clearButton.style.marginBottom = "2rem";

content.addEventListener("change", notesCounterInfo);

//clear all notes
clearButton.addEventListener("click", () => {
  localStorage.clear();
});

content.append(clearButton);

// Item delete mssg: Notification
function deleteMssg(item) {
  let p = document.querySelector("div#mssg");

  p.style.color = "yellow";
  p.style.backgroundColor = "white";
  p.innerText = `${item} successfully deleted`;

  clearButton.setAttribute("hidden", "hidden");

  setTimeout(() => p.remove(), 4000);
  setTimeout(() => clearButton.removeAttribute("hidden"), 3000);
}

//Load content to UI
if (noteStorage.length > 0) {
  notesCounterInfo();

  noteStorage.map((notes, index) => {
    let card = document.createElement("article");
    let heading = document.createElement("h2");
    let para = document.createElement("p");
    let button = document.createElement("button");

    card.setAttribute("key", `${index}`);
    heading.textContent = `${index + 1}: ${notes.title}`;
    para.textContent = notes.notes;
    button.innerText = "delete";

    //Styles
    card.style.backgroundColor = "black";
    card.style.marginTop = "2rem";
    button.style.color = "white";
    button.style.backgroundColor = "red";
    //button.style.float = "right";
    button.style.marginBottom = "1.2rem";

    //clear an item
    button.addEventListener("click", () => {
      let myitem = noteStorage[index].title;
      console.log(typeof myitem);
      noteStorage.splice(index, 1);

      localStorage.setItem("notes", JSON.stringify(noteStorage));

      // ALert user
      deleteMssg(myitem);
      console.log(deleteMssg(myitem));
      card.remove();
    });

    card.append(heading, para, button);
    content.append(card);
  });
} else {
  content.remove();
}

/*
Forgive my helterskelter code, I was not prepaired to do this but I found
myself coding this anyways. It works but the code appears disorganised
But atleast I've learnt a thing or two on localStorage. especially deleting 
an item in an array of objects
*/
