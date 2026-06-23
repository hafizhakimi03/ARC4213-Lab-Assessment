function addTask() {

    let task = document.getElementById("task").value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.className =
        "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
        ${task}
        <button class="btn btn-danger btn-sm"
            onclick="this.parentElement.remove()">
            Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("task").value = "";
}

function addStudent() {

    let student =
        document.getElementById("studentName").value;

    if (student === "") {
        alert("Please enter student name.");
        return;
    }

    let li = document.createElement("li");

    li.className =
        "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
        ${student}
        <button class="btn btn-danger btn-sm"
            onclick="this.parentElement.remove()">
            Delete
        </button>
    `;

    document.getElementById("studentList").appendChild(li);

    document.getElementById("studentName").value = "";
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
    { name: "Iphone16 Pro Max", page: "iphone16promax.html" },
    { name: "Elgato Stream Deck XL", page: "elgato.html" }

];

const searchBox =
    document.getElementById("searchProduct");

if (searchBox) {

    searchBox.addEventListener("input", function () {

        let keyword =
            this.value.toLowerCase();

        let products =
            document.querySelectorAll("#product .col-md-3");

        products.forEach(function (product) {

            let productName =
                product.querySelector("h5")
                .textContent
                .toLowerCase();

            if (productName.includes(keyword)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

    searchBox.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            let keyword =
                this.value.toLowerCase();

            let product =
                allProducts.find(function (item) {

                    return item.name
                        .toLowerCase()
                        .includes(keyword);

                });

            if (product) {

                window.location.href =
                    product.page;

            } else {

                alert("Product not found.");

            }

        }

    });

}