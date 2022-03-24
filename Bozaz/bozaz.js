document.querySelector("form").addEventListener("submit", bozazFun);
function bozazFun() {
    event.preventDefault();
    var cat=document.querySelector("#category").value;
    var td1=document.createElement("td");
    td1.innerText=cat;

    var names=document.querySelector("#name").value;
    var td2=document.createElement("td");
    td2.innerText=names;

    var price=document.querySelector("#price").value;
    var td3=document.createElement("td");
    td3.innerText=price;
    console.log(cat,names,price);

    var row=document.createElement("tr");
    row.append(td1,td2,td3);
    document.querySelector("tbody").append(row);

}
