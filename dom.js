let inp1 = document.getElementById("inputT")
let inp2 = document.getElementById("inputB")
let button1 = document.getElementById("butT")
let button2 = document.getElementById("butB")
let h5 = document.getElementById("hedh5")
let h5T = document.getElementById("h5") // elment h5 in the ele div => top
let divAdd = document.getElementById("add")

// local storage

if (window.localStorage.length >= 1) {
    for (let i = 0; i < localStorage.length; i++) {
        let divs = document.createElement("div")
        let clear = document.createElement("button")
        divs.textContent = localStorage.getItem(`content${i+1}`);
        clear.textContent = "del"
        divs.style.display = "block"
        divs.className = "newdiv"
        divs.appendChild(clear)
        divAdd.appendChild(divs)
    }
}

// enimation
inp1.onclick = () => {
    h5T.style.color = "#02cece"
}
inp1.onblur = () => {
    h5T.style.color = "rgb(60, 64, 67)"
}
inp2.onfocus = () => {
    h5.style.display = "block"
}
inp2.onblur = () => {
    h5.style.display = "none"
}

// add element
button1.addEventListener("click", add)



let i = 1;
function add()  {
    let divs = document.createElement("div")
    let clear = document.createElement("button")
    divs.textContent = inp1.value;
    localStorage.setItem(`content${i}`, divs.textContent)
    clear.textContent = "del"
    divs.style.display = "block"
    divs.className = "newdiv"
    divs.appendChild(clear)
    divAdd.appendChild(divs)
    inp1.value = ""
    // localStorage.setItem("i", i)
    i++
    clear.onclick = () => {
        clear.parentElement.remove()
        let del =  clear.parentElement.childNodes[0].textContent
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.getItem(localStorage.key(i)) === del) {
                    localStorage.removeItem(localStorage.key(i))
                }
            }
    }
    
}
// if (window.localStorage.length === 0) {
//     localStorage.setItem("i", 0)
// }

// text-decoration-line: line-through;

// filteration
inp2.oninput = () => {
    let child = divAdd.children
    if (divAdd.hasChildNodes()) {
        for (let i = 0; i < divAdd.children.length; i++) {
            divAdd.children[i].style.display = "none"
            if (child[i].childNodes[0].textContent.includes(inp2.value)) {
                divAdd.children[i].style.display = "block"
            }
        }
    }
}

// check

document.addEventListener("click", function (e) {
    if (e.target.className === "newdiv") {
        e.target.style = "text-decoration-line: line-through";
    }
})

// clear All

button2.onclick = () => {
    alert("Are You Sure ?")
    divAdd.innerHTML = ""
    localStorage.clear()
}


/*
عاوز ازود حجات
----------------
1- عاوز لما اعمل ريلود للصفحه يخلي الايتم بتاعت الوكل استوردج تبدأ من الرقم الي انتهت عنده
2- لو عملت ريلود للصفحه وفي عناصر واخده علامه الحذف ديه تفضل وخداها
 */