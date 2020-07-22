function loadTodos() {
    console.log(localStorage.getItem("todolist"));
    if (localStorage.getItem("todolist")) {
        document.querySelector("ul").innerHTML = localStorage.getItem("todolist");
    }
}

function saveBtn() {
    document.querySelector(".save").addEventListener("click", function(){
    localStorage.setItem("todolist", document.querySelector("ul").innerHTML);
    console.log(localStorage);
});
}
export {saveBtn, loadTodos};