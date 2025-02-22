document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
  const addNoteBtn = document.getElementById("addNote");
  let longPressTimer = null;

  board.addEventListener("click", function (event) {
    if (event.target.classList.contains("note")) {
      editNote(event.target);
    }
  });

  board.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains("note")) {
      longPressTimer = setTimeout(() => {
        event.target.remove();
      }, 2000);
    }
  });

  board.addEventListener("mouseup", function () {
    clearTimeout(longPressTimer);
  });

  addNoteBtn.addEventListener("click", function () {
    const note = createNote();
    board.appendChild(note);
  });

  function createNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.textContent = "Нова нотатка";
    return note;
  }

  function editNote(note) {
    const newText = prompt("Редагувати нотатку:", note.textContent);
    if (newText !== null) {
      note.textContent = newText;
    }
  }
});
