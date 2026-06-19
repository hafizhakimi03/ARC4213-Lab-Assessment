function addTask() {
    let task = document.getElementById("task").value;

    if (task === "") return;

    let li = document.createElement("li");

    li.innerHTML = `${task}
    <button onclick="this.parentElement.remove()">
        Delete
    </button>`;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("task").value = "";
}

function addStudent() {
    let student = document.getElementById("studentName").value;

    if (student === "") return;

    let li = document.createElement("li");

    li.innerHTML = `${student}
    <button onclick="this.parentElement.remove()">
        Delete
    </button>`;

    document.getElementById("studentList").appendChild(li);

    document.getElementById("studentName").value = "";
}