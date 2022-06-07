// set image of the selected product
var cardimg = document.getElementById("cardimg");
var current = document.getElementById("current");
cardimg.setAttribute("src",localStorage.getItem("src"));
current.onclick = function(){
    cardimg.setAttribute("src",localStorage.getItem("src"));
    setborder();
};
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
    colorvalue.innerText = "Color: red";
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
    if(numberOfcolor != undefined)
    colors[numberOfcolor].style.outline = "1px solid black";
}
///// end

// set quantity to card and check validation
var cardbtn = document.querySelector(".cardbtn");
var Numberofquantity = document.getElementById("typeNumber");
var alertmessage = document.querySelectorAll(".alertmessage");
var size = document.getElementsByName("size");
var donemessage = document.querySelector(".donemessage");
let cardproducts = document.querySelector(".cardproducts");
let div = document.querySelector(".bigcontainer");
let popup = document.querySelector(".popup");
let selectedProductInfo = [];
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
        if(!localStorage.numberofproducts)
            localStorage.numberofproducts = 0;
        if(localStorage.getItem("quantity"))
            localStorage.setItem("quantity",parseInt(localStorage.getItem("quantity")) + quantity);
        else
            localStorage.setItem("quantity",quantity);
        selectedProductInfo[0] = cardimg.getAttribute('src');
        selectedProductInfo[1] = size[0].value;
        selectedProductInfo[2] = quantity;
        selectedProductInfo[3] = `arr${localStorage.getItem("numberofproducts")}`;
        localStorage.setItem(`arr${localStorage.getItem("numberofproducts")}`,selectedProductInfo);
        localStorage.setItem("numberofproducts",parseInt(localStorage.getItem("numberofproducts")) + 1);
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
        popup.style.display = 'block';
        for(let i=0;i<parseInt(localStorage.numberofproducts);i++)
        {
            if(localStorage.getItem(`arr${i}`))
            {
            let info = localStorage.getItem(`arr${i}`).split(',');
            let cloned = div.cloneNode(true);
            cloned.style.display = 'block';
            cloned.children[0].children[0].setAttribute('src',info[0]);
            cloned.children[0].children[4].children[1].innerText = info[1];
            cloned.children[0].children[5].children[1].innerText = info[2];
            cloned.setAttribute('name',info[3]); 
            cardproducts.appendChild(cloned);
            }
        }
    window.scrollTo({left:0,top:0,behavior:"smooth"});
    }
    else {
        alert("The Card is empty");
    }

}
//end
// on popup screen close
var closepopup = document.getElementById("closepopup");
var confirm = document.getElementById("confirm");
function reset(status) {
    popup.style.display = 'none';
    cardproducts.innerHTML = "";
    if(status)
    {
        localStorage.setItem("quantity","0");
        localStorage.setItem("numberofproducts",0);
    }
}
closepopup.onclick = function(){
    reset('c');
}
confirm.onclick = function(){
    reset();
    setTimeout(function(){
        alert(
    `Quantity : ${localStorage.quantity}, 
     Total Price is : $${localStorage.quantity*45}.00`
                );
        localStorage.setItem("quantity","0");
        localStorage.setItem("numberofproducts",0); 
    },100)
}
//end
// remove product from the card popup
function removeProduct(e){
    localStorage.quantity -= parseInt(e.parentElement.children[5].children[1].innerHTML);
    localStorage.setItem(`${e.parentElement.parentElement.getAttribute('name')}`,'');
    // localStorage.numberofproducts = parseInt(localStorage.numberofproducts) -1;
    e.parentElement.parentElement.remove();
}
//end
