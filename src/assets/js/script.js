window.addEventListener("scroll", function () {
  var header = this.document.querySelector(".header-menu");
  header.classList.toggle("sticky", this.scrollY > 0);
});

//accrodion with jquery
$(document).ready(function () {
  $(".accordion-item__header").click(function () {
    // self clicking close
    if ($(this).next(".text").hasClass("active")) {
      $(this).next(".text").removeClass("active").slideUp();
      $(this)
        .children(".icon")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
    } else {
      $(".accordion-item .text").removeClass("active").slideUp();
      $(".accordion-item .accordion-item__header .icon")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
      $(this).next(".text").addClass("active").slideDown();
      $(this)
        .children(".icon")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-up");
    }
  });
});

//image zoom with jquery
$(document).ready(function () {
  $("#img").hover(function () {
    $("#img").attr("src", $(this).attr("src"));
  });
});
$(document).ready(function () {
  $("#img").imagezoomsl({
    zoomrange: [3, 3],
  });
});
