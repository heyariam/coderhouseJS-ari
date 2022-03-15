var list = []
var inp = document.getElementById("inp")
var todolist = document.getElementById("todolist")

document.getElementById("btn").addEventListener("click", function () {
  list.push(inp.value)
  inp.value = ""
  showList()
})

function showList() {
  todolist.innerHTML = ""
  list.forEach(function (n, i) {
    todolist.innerHTML += "<li>" + n + "</li > "
  })

}

localStorage.setItem('list', JSON.stringify(todolist));
let saves = localStorage.getItem('todolist');
array = JSON.parse(dataInput);