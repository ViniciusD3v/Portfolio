function irPara(str, boolean) {
    if (boolean) { return window.open(str, "_blank", 'noopener'); }
    window.location.href = str;
}

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
    });
  });

 function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      document.getElementById('slider').checked = false;
  } else {
      setTheme('theme-light');
    document.getElementById('slider').checked = true;
  }
})();  