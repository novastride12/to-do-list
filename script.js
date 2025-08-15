const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (inputBox.value.trim() !== '') {
            addTask();
        }
    
    }
});


function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveData();  // ✅ Save after adding
    }
    inputBox.value = "";
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();  // ✅ Save after toggling
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();  // ✅ Save after removing
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();
