var forDisplayCompleted=JSON.parse(localStorage.getItem("completedList"));
// console.log(forDisplayCompleted);

var displayComplete=[];

forDisplayCompleted.map(function(el){
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    

    td1.innerText=el.name;
    td2.innerText=el.quantity;
    td3.innerText=el.priority;

    // console.log(td1,td2,td3);
    var row=document.createElement("tr");
    row.append(td1,td2,td3);
    document.querySelector("#body").append(row);
    // for(var i=0;i<displayComplete.length;i++){
    //     if(el.name!=displayComplete[i].name && 
    //         el.quantity!=displayComplete[i].quantity
    //          && el.priority!=displayComplete[i].priority){
    //             // displayComplete.push(el);
    //             console.log(displayComplete[i]);
    //          }
    //     // console.log(displayComplete[i]);

    // }
    
    displayComplete.push(el);
    localStorage.setItem("display",JSON.stringify(displayComplete));    
    // console.log(displayComplete);

})