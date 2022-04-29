const addButton = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes"));
let x=0;
const updateLocalStorage = () => {
  const notesText = document.querySelectorAll("textarea");
  const notes = [];
  notesText.forEach((note) => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
};



addButton.addEventListener("click", () => addNewNote());

const addNewNote = (text = "") => {
    console.log("hello");
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tl">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>`;
    
  const editButton = note.querySelector(".edit");
  const deleteButton = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");
  textArea.value = text;
  main.innerHTML = marked(text);
   



      editButton.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
      });
      textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        updateLocalStorage();
      });
      document.body.appendChild(note);
      deleteButton.addEventListener("click", () => {
        note.remove();
        updateLocalStorage();
      });
      
    let  tls=document.getElementsByClassName("tl")[x];
    
    console.log(x);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
      console.log('#'+randomColor);
      x++;
      tls.style.backgroundColor='#'+randomColor;

};