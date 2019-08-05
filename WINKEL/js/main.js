"use strict"


window.onload = function() {
  preloader.classList.add("hide");

  setTimeout(() => {
    preloader.classList.add("d-none");
  }, 500);
  if(localStorage.getItem("basket") === null)
{
//     // create basket array in local storage
    localStorage.setItem("basket", JSON.stringify([]));
}
const addToCart = [...document.querySelectorAll(".add")];
const basketCart = document.getElementById("basket");
const basket = JSON.parse(localStorage.getItem("basket"));
const img = [...document.getElementsByTagName("img")];

UpdateCart(basket);

addToCart.forEach(btn =>{
    btn.onclick = function(e){
        e.preventDefault();


        const proid = this.getAttribute("proid");
        const proname = this.getAttribute("data-proname");
        const proprice = this.getAttribute("data-proprice");
        let proImg=this.parentElement.previousElementSibling.getAttribute("src");

        const product = {
          id: proid,
          name: proname,
          price: proprice,
          img: proImg
        };
    
        const basketParsed = JSON.parse (localStorage.getItem("basket"));

        basketParsed.push(product);
        UpdateCart(basketParsed);

        localStorage.setItem("basket", JSON.stringify(basketParsed));
        
        
    };
})
function UpdateCart(basket)
{
  basketCart.querySelector("span").innerText = basket.length;
}
 




};

$(document).ready(function () {

//// add to basket
/// when window loads check user basket exits in local storage


        $(".menu").click(function(e){
            e.preventDefault();
            

            $(".nav-mobile").toggleClass("active")
          
        })




 


   $("#woman .pilus").click(function(){

    let value = $(".changeable").text()
  value++;

   
   $(".changeable").text(value)


   })
   $("#woman .minus").click(function(){

    if($(".changeable").text() > 1 ){
        let value = $(".changeable").text()
        value--;
      
         
         $(".changeable").text(value)
    }

   


   })


$('.oc-1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.oc-2').owlCarousel({
    loop: false,
    items:3,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})
$('.loop').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    center: true,
    responsive: {
        600: {
            items: 4
        }
    }
});
$('.nonloop').owlCarousel({
    center: true,
    items: 2,
    loop: false,
    margin: 10,
    responsive: {
        300:{
            items:1
        },
       
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

$(window).scroll(function () {
    let scroll = jQuery(window).scrollTop();

    if (scroll >= 400) {
        $("#navbar").addClass("sticky");
        $(".sticky .navright li.active a ").css("color", "#ffa45c");
        $(".sticky .navright li span.active ").css("color", "#ffa45c");
        $("#navbar .navleft .navbar-brand").addClass("mbl")


        $(".sticky .navright li:last-of-type").addClass("cart");


        $("#navbar").css("top", "0px");


        




        
               

      
    }
    else {
        $("#navbar").removeClass("sticky")
        $("#navbar").css("top", "-50px")
        $(".navright li.active a ").css("color", "#000");
        $(".navright li:last-of-type").removeClass("cart");
        $(".navright li span.active ").css("color", "#000");
        $("#navbar .navleft .navbar-brand").removeClass("mbl")







    }
})
    let counters = [...document.querySelectorAll(".increasing span")];
    counters.forEach(counter => {
        let value = counter.getAttribute("data-count");


        let count = 0;
        count = parseInt(counter.innerHTML);

        setInterval(() => {
            if (count < value) {
                count = count + 1;
                counter.innerHTML = count;
            }
            else {
                clearInterval();
            }

        }, 0.001);




    })

  
});
