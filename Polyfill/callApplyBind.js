let name ={
    firstname:"Tushar",
    lastname:"Mahajan",
}
let printfullname =function(hometown,state) {
    console.log(this.firstname + " " + this.lastname+" from "+ hometown+" , " + state);
}
let name2 ={
    firstname:"Tilak",
    lastname:"Raj",
}
//function borrowing - call method
printfullname.call(name2,"Chd","Pjb");
printfullname.call(name,"Jammu","J&k");

//Apply method
printfullname.apply(name,["Jammu","J&k"]);

//bind method 
let printMyName = printfullname.bind(name,"Jammu","J&k")       
// console.log(printMyName)
printMyName()



