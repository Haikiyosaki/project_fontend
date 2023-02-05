const search = ()=>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    console.log(storeitems);
    const productSearch = document.querySelectorAll(".menuitem")
    console.log("Product search day la" ,productSearch);
    const pname = storeitems.getElementsByTagName("h3")
    console.log("pname la", pname);

    for(var i =0; i < pname.length; i++){
        let match = pname[i].getElementsByTagName("a")[0];
        console.log("Match la", match);
        if(match){
            let textvalue = match.textContent || match.innerHTML;
            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                productSearch[i].style.display = "";
            } else{
                productSearch[i].style.display = "none";
            }
        }
    }
}


const menuitem = document.querySelectorAll('.menuitem')
const products = [
    {
        id:1,
        title: "Air Force",
        price: 109,
        colors: [
            {
            code: "black",
            img: "img/air.png",
            },
            {
            code: "darkblue",
            img: "img/air2.png",
            },
        ]
    },
    {
        id:2,
        title: "JORDAN",
        price: 123,
        colors: [
            {
            code: "Green",
            img: "img/blazer.png",
            },
            {
            code: "White",
            img: "img/blazer2.png",
            },
        ]
    },
    {
        id:3,
        title: "BLAZER",
        price: 88,
        colors: [
            {
            code: "black",
            img: "img/crater.png",
            },
            {
            code: "darkblue",
            img: "img/crater2.png",
            },
        ]
    },
    {
        id:4,
        title: "CRATER",
        price: 99,
        colors: [
            {
            code: "black",
            img: "img/hippie2.png",
            },
            {
            code: "darkblue",
            img: "img/hippie.png",
            },
        ]
    },
    {
        id:5,
        title: "HIPPIE",
        price: 129,
        colors: [
            {
            code: "black",
            img: "img/jordan.png",
            },
            {
            code: "darkblue",
            img: "img/jordan2.png",
            },
        ]
    },
]

let chooseproduct = products[0];
const currentProductImg  = document.querySelector(".img");
const currentProductTitle  = document.querySelector(".title");
const currentProductPrice = document.querySelector(".price-desc");

menuitem.forEach((item, index) => {
    item.addEventListener('click', ()=>{
      chooseproduct = products[index];
      currentProductImg.src = chooseproduct.colors[0].img;
      currentProductTitle.textContent = chooseproduct.title;
      currentProductPrice.textContent = "$" + chooseproduct.price;
    });
});


const clickBuy = document.querySelector(".buynow");

clickBuy.addEventListener('click', ()=>{
    const quality = document.querySelector("#cart-item");
    var increas =  quality.textContent;
    increas++;
    quality.textContent = increas;
})
const currentProductclBlue = document.querySelector("#Blue");
const currentProductclBlack = document.querySelector("#Black");

currentProductclBlue.addEventListener('click',()=>{
    
currentProductImg.src = chooseproduct.colors[1].img;
      });
currentProductclBlack.addEventListener('click',()=>{

currentProductImg.src = chooseproduct.colors[0].img;
      });
