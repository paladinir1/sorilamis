window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.backgroundColor = "rgba(255,255,255,0.8)";
  } else {
    document.getElementById("header").style.backgroundColor = "rgba(255,255,255,0)";
  }
}