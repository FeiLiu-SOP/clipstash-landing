(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var url = window.CLIPSTASH_BUY_URL || "#";
  var links = document.querySelectorAll("[data-buy], a.buy-link");
  links.forEach(function (a) {
    a.setAttribute("href", url);
    if (url.indexOf("REPLACE_WITH") !== -1) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        alert(
          "Set your Lemon Squeezy URL in config.js first.\n\nOpen config.js and replace CLIPSTASH_BUY_URL."
        );
      });
    }
  });
})();
