var zip=document.getElementById("zip")
var sizedisplay=document.getElementById("sizedisplay")
var Pizzasize=document.getElementById("Pizzasize")
var checkboxes=document.getElementsByName("topping")
var Enteryourcity=document.getElementById("deliveryfeedback")
var totalprice=document.getElementById("pricetotal")
var price=0
var toppings=[]

function ordernow(){
console.log(zip.value)
alert("order compelte")

}
Pizzasize.oninput=function(){
    sizedisplay.innerHTML=this.value
}
// zip.oninput=function(){
//     Enteryourcity.innerHTML=this.value
// }
function checkzip(){
    console.log(zip.value)
    if(zip.value==="123"){
        Enteryourcity.innerHTML="we deliver"
    }
    else{
        Enteryourcity.innerHTML="We dont deliver"
    }
}
function completeorder(){
    checktoppings()
    var userselction=Pizzasize.value
    console.log("userselction",userselction)
    if(userselction==="13"){
price+=190
    }
    else if (userselction==="26"){
        price+=678
    }
    else if(userselction==="39"){
        price+=50000000000
    }
    console.log("length",toppings.length)
    var toppingsmessage=''
    for(let i=0;i<toppings.length;i++){
        toppingsmessage += toppings[i]+" "
    }
    price=price+toppings.length
    var message=`your ${userselction} inch ${toppingsmessage} pizza costs ${price} bitcon`
    totalprice.innerHTML=message

    console.log("price",price)
    console.log("toppings",toppings)
    price=0
    toppings=[]
}
function checktoppings(){
    checkboxes.forEach((element) => { 
    if(element.checked){
        toppings.push(element.value)
    }
    });
    

}

