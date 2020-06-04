// nav list array
let navList = [
  "About Us",
  "Club Buzz",
  "Membership",
  "Wine & Dine",
  "Facilities",
  "Banquet",
  "Gallery",
  "What's new",
  "Sports",
  "Swimming",
  "Social",
];

const navListComp = (hasSearchBtn) => {
  // let navUl = `<ul class="nav-items">
  // </ul>`

  let navLi = "";
  navList.forEach((list) => {
    navLi += `<li class="nav-item">
    <a class="nav-item__link" href="#">${list}</a>
  </li>`;
  });
  if (!hasSearchBtn) {
    return `<ul class="nav-items">${navLi} </ul>`;
  } else {
    return `<ul class="nav-items">${navLi} <li class="nav-item-search" id="btn-search-desktop">
    <button class="btn"><i class="fas fa-search"></i></button>
  </li> </ul>`;
  }
};

// Render Nav list to sidedrawer and navbar component
const sideDrawer = $(".sidedrawer").html(navListComp(false));
const navListGeneral = $("#nav-list-general").html(navListComp(true));

// Jquery Event Listener
$(document).ready(function () {
  // Owl Carousel Inizialization
  let owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
  });

  owl.on("translate.owl.carousel", function (e) {
    $(".owl-item video").each(function () {
      $(this).get(0).pause();
    });
  });
  owl.on("translated.owl.carousel", function (e) {
    if ($(".owl-item.active video").get(0)) {
      $(".owl-item.active video").get(0).play();
    }
  });

  $(".owl-item ").each(function () {
    var attr = $(this).attr("data-videosrc");
    if (typeof attr !== typeof undefined && attr !== false) {
      console.log("hit");
      var videosrc = $(this).attr("data-videosrc");
      $(this).prepend(
        '<video muted playsinline><source src="' +
          videosrc +
          '" type="video/mp4"></video>'
      );
    }
  });
  $(".owl-item.active video").attr("autoplay", true).attr("loop", true);

  // Bars Icon Click Handler
  const backDrop = $(".backdrop");

  $("#bars-btn").click(function () {
    sideDrawer.toggleClass("active");
    backDrop.toggleClass("active");
  });

  // backdrop click handler
  backDrop.click(function () {
    sideDrawer.removeClass("active");
    backDrop.removeClass("active");
  });

  // mobile search button click handler
  $("#search-btn-mobile").click(function () {
    $("#search-form-mobile").toggleClass("active");
  });

  // desktop search button click handler
  $("#btn-search-desktop").click(function () {
    $("#search-form-mobile").toggleClass("active");
  });

  // desktop search box button click handler
  $("#search-box-btn").click(function () {
    $("#search-box-input").toggleClass("d-none").fadeIn(600);
  });

  // box menu button click handler
  $("#menu-btn").click(function () {
    $("#menu-text").hide();
    const navBoxBtn = $(".navbar-box__btn");
    navBoxBtn.toggleClass("show-menu");

    if (navBoxBtn.hasClass("show-menu")) {
      $("#nav-box-items").html(navListComp()).fadeIn(600);
    } else {
      $("#nav-box-items").html("").fadeOut(600);
    }
  });

  // read more button click handler
  let readMoreBtn = $("#read-more-btn");
  readMoreBtn.click(() => {
    let moreContentWrapper = $("#more-content");
    moreContentWrapper.toggleClass("d-none");
    if (moreContentWrapper.hasClass("d-none")) {
      readMoreBtn.html(`Read More <i class="fas fa-plus"></i> `);
    } else {
      readMoreBtn.html(`Read Less <i class="fas fa-minus"></i> `);
    }
  });

  // Scroll Event
  const navBox = $(".navbar-box");
  const generalHeader = $(".custom-header");
  $(document).scroll(function () {
    if ($(this).scrollTop() > 140) {
      navBox.removeClass("unscrolled");
      generalHeader.addClass("scrolled");
      $(".search-box").addClass("d-none");
    } else {
      navBox.addClass("unscrolled");
      generalHeader.removeClass("scrolled");
      $(".search-box").removeClass("d-none");
    }
  });
});

// tab nodeList

const tabNodes = document.querySelectorAll(".tab-item");

function changeActiveTab(tabName) {
  tabNodes.forEach((tab) => {
    if (tab.innerText.toLowerCase() == tabName.toLowerCase()) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}
