// Frank Poth 08/24/2017

(function() {

  var logo, map, resize;

  logo = document.getElementById("footer-logo");
  map = document.getElementById("footer-map");

  resize = function(event) {

    logo.style.height = logo.clientWidth * 0.5028570793 + 32 + "px"; // 32 is the margin
    map.style.height = map.clientWidth + "px";

  };

  window.addEventListener("resize", resize);

  resize();

})();
