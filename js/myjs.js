




window.onscroll = function() {
  scrollHeader();
}

var header = document.getElementById("header")

function scrollHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('scrol_header');
  } else {
    header.classList.remove('scrol_header');
  }
}



//


            $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 0,
                nav: true,
                loop: true,
                smartSpeed: 650,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 4
                  }
                }
              })
            })





// resp menu 


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$(document).ready(function(){



var nav_item = document.getElementsByClassName("nav-item");




function hideNav(){

for (var i = 0; i < nav_item.length; i++) {
  nav_item[i].addEventListener("click",function(){
    document.getElementById("myNav").style.height = "0%";
  })
}
}
hideNav()



// mousemove

function mousemove(){


window.addEventListener("mousemove",function(event){
var x = (event.clientX / window.innerWidth *100)/45;
var y = (event.clientY / window.innerWidth *100)/55;

document.getElementById("footer_pegion").style.top = 2+ y + "%";
document.getElementById("footer_pegion").style.right = 5+x + "%";
document.getElementById("footer_pegion").style.top = 7+ x + "%";
document.getElementById("footer_pegion").style.left = 15+y + "%";
})

}

mousemove()

  
})





// function mousemove3(){


// window.addEventListener("mousemove",function(event){
// var x = (event.clientX / window.innerWidth *100)/25;
// var y = (event.clientY / window.innerWidth *100)/10;

// document.getElementById("bio_move").style.top = 5+ x + "%";
// document.getElementById("bio_move").style.left = 2+y + "%";

// })

// }

// mousemove3()



// scrol top

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});


$(".fa_icons span").eq(0).click(function(){

  window.open("https://www.facebook.com/DostoevskyGeo","_blank")
})


// particle

