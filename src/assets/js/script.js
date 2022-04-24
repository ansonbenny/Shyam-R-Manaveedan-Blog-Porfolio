$(document).ready(function(){
    $(".nav-link-color").mouseenter(function(){
        $(this).css({"color":"#8e43e7"})
    })
    $(".nav-link-color").mouseleave(function(){
        $(this).css({"color":"gray"})
    })
})

  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = ["Freelance", "Mentor","Counselor", "Designer", "Content Creator", "Blogger","Videographer","Helicam Operator"];
  const typingDelay = 200;
  const erasingDelay = 10;
  const newTextDelay = 100; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      // add class 'typing' if there's none
      if (!cursorSpan.classList.contains("typing")) {
        cursorSpan.classList.add("typing");
      }
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, 0);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay);
    }
  }

  document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });


$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    480: {
      items: 1,
      nav: false
    },
    700: {
      items: 1,
      nav: false
    },
    1090: {
      items: 3,
      nav: false
    }
  }
})


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbw5N7w69KprOqNNjURoVA6cRHsO3yNhjKoB5p90duSKuMw58LK2u8SxbBwHB1QuQgDm/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                  $("#form-submit-success").toggle();
                  setTimeout(function() {
                  location.reload();
                  }, 5000);
                    //alert("Form submitted successfully")
                    //window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                  $("#form-submit-error").toggle();
                    //alert("Something Error")

                }
            })
        })

//iframe

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}
