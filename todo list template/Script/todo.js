var toDoItems = JSON.parse(localStorage.getItem("toDoDetail"));
// console.log(toDoItems);
var completedItems = JSON.parse(localStorage.getItem("completedList")) || [];
toDoItems.map(function (el) {
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  td4.innerText = "Mark Complete";
  
  td4.style.cursor = "pointer";

  td1.innerText = el.name;
  td2.innerText = el.quantity;
  td3.innerText = el.priority;

  var row = document.createElement("tr");
  row.append(td1, td2, td3, td4);

  document.querySelector("#body").append(row);
  
  td4.style.backgroundColor="#c7dee5";
 
  td4.addEventListener("click", function () {
    clickFun(el);
  });
});
function clickFun(el) {
  // console.log(el)
//   completedItems=[];
  completedItems.push(el);
  // console.log(completedItems);
  localStorage.setItem("completedList", JSON.stringify(completedItems));
  
}
