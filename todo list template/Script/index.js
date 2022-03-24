document.querySelector("#form").addEventListener("submit",submitFun);

var toDoList;
if(localStorage.getItem("toDoDetail")==null){
  toDoList=[];
}
else{
  toDoList=JSON.parse(localStorage.getItem("toDoDetail"));
}
// console.log(toDoList.length);
function submitFun() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var quantity = document.querySelector("#qty").value;
  var prior = document.querySelector("#priority").value;
  var toDoData = {
    name: name,
    quantity: quantity,
    priority: prior,
  };
  // console.log(toDoData);
  toDoList.push(toDoData);
//   console.log(toDoList);
  localStorage.setItem("toDoDetail", JSON.stringify(toDoList));
//   console.log(JSON.parse(localStorage.getItem("toDoDetail")));

}
// if()

