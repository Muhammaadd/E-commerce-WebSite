// // Slider 
var sliderImagesArray = ["3.jpg","1.jpg","2.jpg","4.jpg","5.jpg","6.jpg"];
var sliderimg = document.querySelector(".slider img");
var arrowleft = document.getElementById("arrowLeft");
var arrowRight = document.getElementById("arrowRight");
var playSymbol = document.getElementById("play");
var imgsourceIndex = 0
arrowleft.onclick =function(){
    if(imgsourceIndex===0)
        imgsourceIndex=5;
    else 
        imgsourceIndex --;
    sliderimg.setAttribute("src",`images/${sliderImagesArray[imgsourceIndex]}`);
}
arrowRight.onclick = function(){
    if(imgsourceIndex===5)
    imgsourceIndex=0;
    else imgsourceIndex++;
    sliderimg.setAttribute("src",`images/${sliderImagesArray[imgsourceIndex]}`);
    
}
var myinterval;
function play() {
    myinterval= setInterval(function(){
        if(imgsourceIndex===5)
            imgsourceIndex=0;
        else 
            imgsourceIndex++;
        sliderimg.setAttribute("src",`images/${sliderImagesArray[imgsourceIndex]}`);
    },1000);
}
playSymbol.onclick = function(){
    if(playSymbol.className === "fa-solid fa-play")
    {
        play();
    }
    else {
        stop();
    }
    playSymbol.className =  playSymbol.className ==="fa-solid fa-play" ? "fa-solid fa-pause" : "fa-solid fa-play";
};
function stop() {
    clearInterval(myinterval);
}
// // end of slider 

// navbar icon on click
var dd = document.getElementById("s");
var navbaricon = document.getElementById("navbar");
var navbarlist = document.querySelector(".navbarlist");
navbaricon.onclick = function(){
    navbarlist.classList.toggle("display");
    setTimeout(() => {
    navbarlist.style.marginTop = 0;
    }, 1);
}


// // loaded products on window load 
window.onload = function(){
    categories[0].style.color = "var(--maincolor)";
    display("shopall",1);
}
function display(arrayname,opacity){
    productscontainer.innerText = "";
    console.log("function is called");
    var arr = localStorage.getItem(arrayname).split(",");
    console.log(arr);
    console.log(arr.length);
    var newProductArray = [];
    for(var i=0;i<arr.length;i++)
    {
        newProductArray[i] = product.cloneNode(true);
        newProductArray[i].children[1].children[0].setAttribute("src",`images/product${arr[i]}.jpg`);
        newProductArray[i].style.display = 'flex';
        newProductArray[i].style.opacity = opacity;
        productscontainer.appendChild(newProductArray[i]);
        console.log(newProductArray[i]);
    }
    if(opacity!==1)
    {
        setTimeout(function(){
            for(var i=0;i<arr.length;i++)
            {
                newProductArray[i].style.opacity = 1;
            }
        },1000)
    }
    state = "Shop all";
    console.log("display func");
}

// //////////end


// change productImg Source for hover
var imgSource;
document.body.addEventListener("mouseover", function(e){ 
    if(e.target.className==="productImg"){
        imgSource = e.target.getAttribute("src")
        e.target.setAttribute("src",`-${e.target.getAttribute("src")}`)
    }
});
document.body.addEventListener("mouseout", function(e){ 
    if(e.target.className==="productImg"){
        e.target.setAttribute("src",`${imgSource}`)
    }
});
// end

// load products from selected category 
var shopall = document.getElementById("shopall");
var women = document.getElementById("women");
var men = document.getElementById("men");
var sale = document.getElementById("sale");
var categories =document.querySelectorAll(".productsSection li");
var product = document.querySelector(".product");
var productscontainer = document.getElementById("productscontainer");
var heading = document.getElementById("categoryheading");
function displayProducts(head,arrayname) {
    heading.style.opacity = 0;
    setTimeout(function(){
        heading.style.opacity = 1;
        heading.innerText = head;
    },1000);
    state = head;
    console.log("display products func");
}
//////////////////////////end

// set color of category on click
function setColor(categorynumber){
    for(var i=0;i<categories.length;i++)
    {
        categories[i].style.color = "black";
    }
    categories[categorynumber].style.color = "var(--maincolor)";
    console.log("setColor func");
}
//////// end

//  products Categories onclick
shopall.onclick = function(){
    setColor(0);
    displayProducts("Shop all","shopall");
    display("shopall",0);
}
women.onclick = function(){
    setColor(1);
    displayProducts("Women","womenProducts");
    display("womenProducts",0);
}
men.onclick = function(){
    setColor(2);
    displayProducts("Men","menProducts");
    display("menProducts",0);
}
sale.onclick = function(){
    setColor(3);
    displayProducts("Sale","saleProducts");
    display("saleProducts",0);
}
//////// end
// product onclik goto card page
var newWindow;
document.body.addEventListener("click", function(e){ 
    if(e.target.className==="productImg"){
        localStorage.setItem("src",e.target.getAttribute("src").replace('-', ''));
        newWindow = window.open("card.html","_blank");        
    }
});
///// end

// up arrow
var uparrow = document.getElementById("uparrow");
uparrow.onclick = function(){
    window.scrollTo({left:0,top:0,behavior:"smooth"})
}
window.onscroll = function(){
    if(window.scrollY >= 500)
    {
        uparrow.style.display = "block";
    }
    else {
        uparrow.style.display = "none";
    }
}





















shopall = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
womenProducts = ["10","11","12","13","14","15","16","17","1","2","3","4"];
menProducts = ["7","8","12","10","9","1","2","5","20","19","18","17"];
saleProducts = ["15","16","17","18","19","20","1","5","7","9","11","13"];
window.localStorage.setItem("womenProducts",womenProducts);
window.localStorage.setItem("menProducts",menProducts);
window.localStorage.setItem("saleProducts",saleProducts);
localStorage.setItem("shopall",shopall);
