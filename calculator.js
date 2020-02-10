var oper=process.argv[3]
var num1=parseInt( process.argv[2])
var num2=parseInt( process.argv[4])


if (oper === "sum"){
    sum()
}
else if (oper === "subs"){
operSubs()
}
else if (oper==="mult"){
    opermult()

}
else if (oper ==="divid"){
    operDivid()
}
else{
    console.log("I don't know what you want")

}
function sum(){
    var total=num1 + num2
    console.log(total)
}


function operSubs(){
    var total=num1 - num2
    console.log(total)
}


function opermult(){
    var total=num1 * num2
    console.log(total)
}

function operDivid(){
    var total=num1 / num2
    console.log(total)
}