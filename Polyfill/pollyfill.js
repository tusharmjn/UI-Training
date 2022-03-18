let name ={
    firstname:"Tushar",
    lastname:"Mahajan",
}
let printName = function(hometown,state) {
    console.log(this.firstname + " " + this.lastname+" "+ hometown +", "+state);
}

let printMyName = printName.bind(name," Jammu");
printMyName("J&k");

Function.prototype.mybind = function(...args){
    let obj = this
    params = args.slice(1);
        return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}

let printMyName2 = printName.mybind(name,"Jammu");
printMyName2("J&K");
