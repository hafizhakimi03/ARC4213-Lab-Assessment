function updateCounters() {
    const taskList = document.getElementById("taskList");
    const totalTasks = taskList.getElementsByTagName("li").length;
    const completedTasks = taskList.getElementsByClassName("completed-task").length;

    document.getElementById("totalTasks").innerText = totalTasks;
    document.getElementById("completedTasks").innerText = completedTasks;
}

function createTaskElement(task) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center p-3";

    li.innerHTML = `
        <span class="task-text">${task}</span>
        <div>
            <button class="btn btn-success btn-sm me-2 btn-complete">
                Complete
            </button>
            <button class="btn btn-danger btn-sm btn-delete">
                Delete
            </button>
        </div>
    `;

    const completeBtn = li.querySelector(".btn-complete");
    const deleteBtn = li.querySelector(".btn-delete");
    const taskText = li.querySelector(".task-text");

    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed-task");

        const isCompleted = li.classList.contains("completed-task");

        if (isCompleted) {
            taskText.style.textDecoration = "line-through";
            taskText.style.color = "#94a3b8";
            li.style.background = "rgba(16, 185, 129, 0.15)";
            li.style.borderColor = "rgba(16, 185, 129, 0.4)";

            this.innerText = "Undo";
            this.classList.remove("btn-success");
            this.classList.add("btn-secondary");
        } else {
            taskText.style.textDecoration = "none";
            taskText.style.color = "#f1f5f9";
            li.style.background = "rgba(30, 27, 75, 0.5)";
            li.style.borderColor = "rgba(168, 85, 247, 0.1)";

            this.innerText = "Complete";
            this.classList.remove("btn-secondary");
            this.classList.add("btn-success");
        }

        updateCounters();
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCounters();
    });

    return li;
}

function addTask() {
    const input = document.getElementById("task");
    const task = input.value.trim();

    if (!task) {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    taskList.appendChild(createTaskElement(task));

    input.value = "";
    updateCounters();
}

function addStudent() {
    const input = document.getElementById("studentName");
    const student = input.value.trim();

    if (!student) {
        alert("Please enter student name.");
        return;
    }

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center p-3";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => li.remove());

    li.textContent = student;
    li.appendChild(deleteBtn);

    document.getElementById("studentList").appendChild(li);
    input.value = "";
}

const allProducts = [
    { name: "Razer Blade 18", page: "razerblade.html" },
    { name: "Prism+ 49AL Monitor", page: "prism+49AL.html" },
    { name: "Attack Shark X68", page: "attacksharkx68.html" },
    { name: "Xlite V4 Mini", page: "xlitev4mini.html" },
    { name: "Razer Kraken V3 X", page: "razerkrakenv3x.html" },
    { name: "iPhone 17 Pro Max", page: "iphone17promax.html" },
    { name: "ROG Phone 9 Pro", page: "rogphone9pro.html" },
    { name: "Samsung Galaxy S25 Ultra", page: "samsunggalaxys25ultra.html" },
    { name: "MacBook Pro M4", page: "macbook.html" },
    { name: "ASUS ROG Strix G18", page: "rogg18.html" },
    { name: "Logitech G Pro X Superlight", page: "logitech.html" },
    { name: "Sony WH-1000XM5", page: "sony.html" },
    { name: "iPad Pro M4", page: "ipad.html" },
    { name: "Galaxy Tab S10", page: "tabs10.html" },
    { name: "MSI Raider GE78", page: "msi.html" },
    { name: "SteelSeries Apex Pro", page: "steelseries.html" },
    { name: "Alienware M18", page: "alienware.html" },
    { name: "Steam Deck OLED", page: "steamdeck.html" },
    { name: "RTX 5090 Founders Edition", page: "rtx5090.html" },
    { name: "AMD Ryzen 9 9950X", page: "ryzen9950x.html" },
    { name: "Corsair K100 RGB", page: "corsairk100.html" },
    { name: "LG UltraGear 45 OLED", page: "lgultragear.html" },
    { name: "iPhone 16 Pro Max", page: "iphone16promax.html" },
    { name: "Elgato Stream Deck XL", page: "elgato.html" }
];

const searchBox = document.getElementById("searchProduct");

if (searchBox) {
    searchBox.addEventListener("input", function () {
        const keyword = this.value.toLowerCase();
        const products = document.querySelectorAll("#product .col-md-3");

        products.forEach(product => {
            const name = product.querySelector("h5")?.textContent.toLowerCase() || "";
            product.style.display = name.includes(keyword) ? "block" : "none";
        });
    });

    searchBox.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const keyword = this.value.toLowerCase();

            const product = allProducts.find(item =>
                item.name.toLowerCase().includes(keyword)
            );

            if (product) {
                window.location.href = product.page;
            } else {
                alert("Product not found.");
            }
        }
    });
}

function showProfile(name, course, semester) {
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalCourse").innerText = "Course: " + course;
    document.getElementById("modalSemester").innerText = semester;

    let modal = new bootstrap.Modal(document.getElementById("profileModal"));
    modal.show();
}