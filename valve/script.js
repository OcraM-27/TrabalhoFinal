var radios = document.getElementsByClassName('radio');
var carousel = document.getElementById('custom-carousel-items');
var rightArrow = document.getElementById('right-arrow');
var leftArrow  = document.getElementById('left-arrow');
var prevIndex = 0;
var count = 0;
var interval = null;

for(var i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", (element) => {
        setIntervalCustom();
        count = element.srcElement.getAttribute('value');
        changeSlide(element.srcElement.getAttribute('value'))
    });
}

leftArrow.addEventListener("click", (element) => {
    setIntervalCustom();
    count--;
    if (count < 0) count = radios.length - 1;
    changeSlide(radios[count].getAttribute('value'))
});

rightArrow.addEventListener("click", () => {
    setIntervalCustom();
    count++;
    if (count >= radios.length) count = 0;
    changeSlide(radios[count].getAttribute('value'))
});

setIntervalCustom();

function setIntervalCustom() {
    if(interval) clearInterval(interval);

    interval = setInterval(() => {
        if (count >= radios.length) count = 0;
        changeSlide(count)
        count++;
    }, 6000)
}

function changeSlide(index) {
    radios[prevIndex].classList.toggle('active');
    radios[index].classList.toggle('active');
    carousel.style.left = -100 * (index) + "%";
    prevIndex = index;
}

//BOTAO DAS NOTICIAS
  $("#formButton1").click(function() {
    $("#form1").toggleClass("show");
  });

  $("#formButton2").click(function() {
    $("#form2").toggleClass("show");
  });

  $("#formButton3").click(function() {
    $("#form3").toggleClass("show");
  });

//BOTAO TOPO
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//FIM BOTAO TOPO

  