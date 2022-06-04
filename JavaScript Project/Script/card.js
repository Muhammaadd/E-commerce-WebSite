// set image of the selected product
var cardimg = document.getElementById("cardimg");
cardimg.setAttribute("src",localStorage.getItem("src"));
////// end
// opacity animation of page
var cardsection = document.querySelector(".card");
cardsection.style.opacity = 1;
//////end

//set outline of selected color and set color value
var colors = document.querySelectorAll(".colr");
var colorvalue = document.getElementById("colorvalue");
colors[0].onclick = function(){
    setborder(0);
    cardimg.setAttribute("src","images/product3.jpg");
    colorvalue.innerText = "Color: red"
}
colors[1].onclick = function(){
    setborder(1);
    cardimg.setAttribute("src","-images/product5.jpg");
    colorvalue.innerText = "Color: Bink"
}
colors[2].onclick = function(){
    setborder(2);
    cardimg.setAttribute("src","images/product2.jpg");
    colorvalue.innerText = "Color: Green"
}
function setborder(numberOfcolor){
    for(var i=0;i<colors.length;i++)
    {
        colors[i].style.outline = 0;
    }
    colors[numberOfcolor].style.outline = "1px solid black";
}
///// end

// set quantity to card and check validation
var cardbtn = document.querySelector(".cardbtn");
var Numberofquantity = document.getElementById("typeNumber");
var alertmessage = document.querySelectorAll(".alertmessage");
var size = document.getElementsByName("size");
var donemessage = document.querySelector(".donemessage");
cardbtn.onclick = function(){
    var quantity = Numberofquantity.valueAsNumber;
    if(size[0].value == "Select" ||Numberofquantity.value ==="")
    {
        if(size[0].value == "Select")
        alertmessage[0].style.opacity = 1;
        if(Numberofquantity.value === "")
        alertmessage[1].style.opacity = 1;
    }
    else
    {
        if(localStorage.getItem("quantity"))
            localStorage.setItem("quantity",parseInt(localStorage.getItem("quantity")) + quantity);
        else
            localStorage.setItem("quantity",quantity);
        size[0].value = "Select";
        Numberofquantity.value ='';
        donemessage.style.opacity = 1;
        setTimeout(function(){
            donemessage.style.opacity = 0;
        },2000)
    }
}
size[0].onchange = function(){
    alertmessage[0].style.opacity = 0;
}
Numberofquantity.onchange = function(){
    alertmessage[1].style.opacity = 0;
}
//// end

//calculate price of selected products
var buybtn = document.querySelector('.buy');
buybtn.onclick = function(){
    if(localStorage.quantity != "0")
    {
    alert(
        `Quantity : ${localStorage.quantity} ,
Total Price is : $${localStorage.quantity*45}.00`
    );
    localStorage.setItem("quantity","0");
    }
    else {
        alert("The Card is empty");
    }
}

