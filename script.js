let inp1 = document.getElementById("inputT")
let inp2 = document.getElementById("inputB")
let button1 = document.getElementById("butT")
let button2 = document.getElementById("butB")
let h5 = document.getElementById("hedh5")
let h5T = document.getElementById("h5") // elment h5 in the ele div => top
let divAdd = document.getElementById("add")

let arr = []
let id = 1;
let storId = localStorage.getItem("id")
if (storId != null) {
    id = storId
}

let storage = localStorage.getItem("ele")
if (storage != null) {
    arr = JSON.parse(storage)
    for (let i = 0; i < arr.length; i++) {
        let ele = 
    `
    <div class="child ${arr[i].state === true ? "true" : "" }" data-id="${arr[i].id}">
        ${arr[i].value} <button class="delete" onclick="deleteEle(this.parentElement)">Del</button>
    </div>
    `;
    divAdd.innerHTML += ele
    }
}

button1.onclick = () => {
    if (inp1.value) {
        addEle()
        inp1.value = ""
        inp1.focus()
    }
}

function addEle() {
    let ele = 
    `
    <div class="child" data-id="${id}">
        ${inp1.value} <button class="delete" onclick="deleteEle(this.parentElement)">Del</button>
    </div>
    `;
    let obj = {value : inp1.value, id : id, state : false}
    divAdd.innerHTML += ele
    arr.push(obj)
    localStorage.setItem("ele", JSON.stringify(arr))
    id++
    localStorage.setItem("id", id)
    trueDiv()
}

function deleteEle(ele) {
    ele.remove()
    arr.forEach((div) => {
        if (div.id == ele.dataset.id) {
            let divNum = arr.indexOf(div)
            arr.splice(divNum, 1)
            localStorage.setItem("ele", JSON.stringify(arr))
        }
    })
}

inp2.oninput = () => {
    if (divAdd.children.length > 0) {
            let ele = document.querySelectorAll(".child")
            ele.forEach(e => {
                e.style.display = "none"
                if (e.childNodes[0].textContent.includes(inp2.value)) {
                    e.style.display = "block"
                }
        });
    }
}


button2.onclick = () => {
    if (divAdd.children.length > 0) {
        let sure =  window.confirm("Are You Sure ?")
        if (sure === true) {
            localStorage.clear()
            divAdd.innerHTML = ""
        }
    }
}

function trueDiv() {
    if (divAdd.children.length > 0) {
        let divs = document.querySelectorAll(".child");
        divs.forEach((ele) => {
            ele.addEventListener("click", (e) => {
                e.target.classList.toggle("true")
                for (let i = 0; i < arr.length; i++) {
                        if (arr[i].id == ele.dataset.id) {
                            if (ele.classList.contains("true") != false) {
                                arr[i].state = true
                                localStorage.setItem("ele", JSON.stringify(arr))
                            }else {
                                arr[i].state = false
                                localStorage.setItem("ele", JSON.stringify(arr))
                            }
                        }
                }
            })
        })
    }
}
trueDiv()


/*
عاوز ازود حجات
----------------
1- عاوز لما اعمل ريلود للصفحه يخلي الايتم بتاعت الوكل استوردج تبدأ من الرقم الي انتهت عنده
2- لو عملت ريلود للصفحه وفي عناصر واخده علامه الحذف ديه تفضل وخداها
*/