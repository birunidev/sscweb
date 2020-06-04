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

const navListComp = (hasSearchBtn, forMobile) => {
  // let navUl = `<ul class="nav-items">
  // </ul>`

  let navLi = "";
  navList.forEach((list) => {
    navLi += `<li class="nav-item">
    <a class="nav-item__link" href="#">${list}</a>
  </li>`;
  });

  let closeBtn =
    '<button class="sidedrawer-close-btn btn" aria-expanded="false" aria-controls="side-drawer" aria-label="Close SideDrawer" > <i class="fas fa-times"></i></button>';

  let searchBtn = `<li class="nav-item-search" id="btn-search-desktop">
  <button class="btn"><i class="fas fa-search"></i></button>
</li>`;

  return `${forMobile ? closeBtn : ""} <ul class="nav-items">${navLi} ${
    hasSearchBtn ? searchBtn : ""
  } </ul>`;
};

// Render Nav list to sidedrawer and navbar component
const sideDrawer = $(".sidedrawer").html(navListComp(false, true));
const navListGeneral = $("#nav-list-general").html(navListComp(true, false));

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
  const barsBtn = $("#bars-btn");
  const sideDrawerCloseBtn = $(".sidedrawer-close-btn");

  barsBtn.click(function () {
    sideDrawer.toggleClass("active");
    backDrop.toggleClass("active");
    if (sideDrawer.hasClass("active")) {
      $(this).attr("aria-expanded", true);
      sideDrawerCloseBtn.attr("aria-expanded", true);
    } else {
      $(this).attr("aria-expanded", false);
      sideDrawerCloseBtn.attr("aria-expanded", false);
    }
  });

  // backdrop click handler

  // Sidedrawer Close Button Click Handler
  sideDrawerCloseBtn.click(function () {
    sideDrawer.removeClass("active");
    backDrop.removeClass("active");
    if (sideDrawer.hasClass("active")) {
      $(this).attr("aria-expanded", true);
      barsBtn.attr("aria-expanded", true);
    } else {
      $(this).attr("aria-expanded", false);
      barsBtn.attr("aria-expanded", false);
    }
  });

  backDrop.click(function () {
    sideDrawer.removeClass("active");
    backDrop.removeClass("active");
    barsBtn.attr("aria-expanded", false);
    sideDrawerCloseBtn.attr("aria-expaned", false);
  });

  // mobile search button click handler
  const searchFormMobile = $("#search-form-mobile");
  $("#search-btn-mobile").click(function () {
    searchFormMobile.toggleClass("active");

    if (searchFormMobile.hasClass("active")) {
      $(this).attr("aria-expanded", true);
    } else {
      $(this).attr("aria-expanded", false);
    }
  });

  // desktop search button click handler
  $("#btn-search-desktop").click(function () {
    searchFormMobile.toggleClass("active");

    if (searchFormMobile.hasClass("active")) {
      $(this).attr("aria-expanded", true);
    } else {
      $(this).attr("aria-expanded", false);
    }
  });

  // desktop search box button click handler
  let searchBoxInput = $("#search-box-input");
  $("#search-box-btn").click(function () {
    searchBoxInput.toggleClass("d-none").fadeIn(600);
    if (searchBoxInput.hasClass("d-none")) {
      $(this).attr("aria-expanded", "false");
    } else {
      $(this).attr("aria-expanded", "true");
    }
  });

  // box menu button click handler
  $("#menu-btn").click(function () {
    $("#menu-text").hide();
    const navBoxBtn = $(".navbar-box__btn");
    navBoxBtn.toggleClass("show-menu");

    if (navBoxBtn.hasClass("show-menu")) {
      $("#menu-btn").attr("aria-expanded", true);
      $("#nav-box-items").html(navListComp()).fadeIn(600);
      $("#chevron-icon").attr("class", "fas fa-chevron-up");
    } else {
      $("#menu-btn").attr("aria-expanded", true);
      $("#nav-box-items").html("").fadeOut(600);
      $("#chevron-icon").attr("class", "fas fa-chevron-down");
    }
  });

  // read more button click handler
  let readMoreBtn = $("#read-more-btn");
  readMoreBtn.click(function () {
    let moreContentWrapper = $("#more-content");
    moreContentWrapper.toggleClass("d-none");
    if (moreContentWrapper.hasClass("d-none")) {
      readMoreBtn.html(`Read More <i class="fas fa-plus"></i> `);
      $(this).attr("aria-expanded", false);
    } else {
      $(this).attr("aria-expanded", true);
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
