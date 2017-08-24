// Frank Poth 08/24/2017

(function() {

  var map, resize;

  map = document.getElementById("footer-map");

  resize = function(event) {

    map.style.height = Math.floor(map.parentNode.clientWidth * 0.8) + "px";

  };

  window.addEventListener("resize", resize);

  resize();

})();
