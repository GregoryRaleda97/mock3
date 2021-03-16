let barangLelang = [
    ["Baju", 10000],
    ["Celana", 20000],
    ["Kacamata", 30000],
]

let lelangArr = (num) => {
    for (let i = 0; i < barangLelang.length; i++) {
        result += barangLelang(((num)[1]) * 0.1);
    }
}

// console.log(lelangArr(1))
// console.log(lelangArr(5))
// console.log(lelang(10))

// NO.2
let listTodo = [{
    no: 1,
    kegiatan: "Lari",
    hari: "Senin",
    poster: "google.com",
}, ];

const arrHari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

function login() {
    let done = 0;
    let username = document.login.username.value;
    let password = password.toLowerCase();


    function addTodo() {
        let kegiatan = document.getElementById("inputTask").Value;
        let hari = document.getElementById("inputHari").value;
        let poster = document.getElementById("inputUrl").value;

        listTodo.push({
            no: listTodo.length + 1,
            kegiatan,
            hari,
            poster,
        });

        document.getElementById("inputTask").Value = ""
        document.getElementById("inputHari").value = ""
        document.getElementById("inputUrl").value = ""

        showTodo();
    }

    function showTodo(index) {
        if (index) {
            let listEdit = listTodo.map((el) => {
                if (el.no == index) {
                    return `
    <tr>
    <td>${el.no}</td>
    <td><input type="text" id="editTask" value="${el.task}"></td>
    <td>${el.hari}</td>
    <td><input type="url" id="editUrl" value="${el.poster}"></td>
    <td>
        <input type="button" value="save" onclick="save(${el.no})">
        <input type="button" value="cancel" onclick="cancel()">
    </td>
    </tr>
    `;

                } else {
                    return `
                <tr>
                <td>${el.no}</td>
                <td>${el.task}</td>
                <td>${el.hari}</td>
                <td><img src="${el.poster}" alt="${el.poster}" width="50px"></td>
                <td>
                <input type="button" onclick="editTask(${el.no})" value="Edit">
                <input type="button" onclick="deleteTask(${el.no})" value="Delete">
                </td>
                </tr>
`;
                }
            });

            var listHari = arrHari.map((el) => {
                return `<option value=${el}>${el}</option>`;
            });
            document.getElementById("render").innerHTML = listTodo.join("");
        } else {
            let list = listTodo.map((el) => {
                return `
                    <tr>
                    <td>${el.no}</td>
                    <td>${el.kegiatan}</td>
                    <td>${el.hari}</td>
                    <td><img src="${el.poster}" alt="${el.poster} width="50px"></td>
                    <td>
                    <input type="button" onclick="editTask(${el.no})" value="Edit">
                    <input type="button" onclick="deleteTask(${el.no})" value="Delete">
                    </td>
                    </tr>
`;
            });
            var listHari = arrHari.map((el) => {
                return `<option value=${el}>${el}</option>`;
            });
            document.getElementById("render").innerHTML = list.join("");
        }
    }

    function editTask(number) {
        showTodo(number);
    }

    function deleteTask(number) {
        listTodo = listTodo.filter((el) => {
            return el.no != number;
        });

        showTodo();
    }

    function cancel() {
        showTodo();
    }

    function save(number) {
        let index = listTodo.findIndex(el => el.no == number)

        let kegiatan = document.getElementById("editTask").Value;
        let hari = document.getElementById("editHari").value;
        let poster = document.getElementById("editUrl").value;

        listTodo[index] = {
            ...listTodo[index],
            kegiatan,
            hari,
            poster,
        }

        showTodo();
    }
}
showTodo();

////no 3

function cekkoin(koin) {
    let koinList = {
        koin1: 25,
        koin2: 10,
        koin3: 5,
        koin4: 1,
    };
    let result = {
        koin1: 0,
        koin2: 0,
        koin3: 0,
        koin4: 0,
    };
    var change = koin;

    while (change > koinList.koin4) {
        for (var key in koinList) {
            if (change >= koinList[key]) {
                change = change - koinList[key];
                result[key]++;
                break;
            }
        }
    }
    return result;
}

console.log(cekkoin(31));