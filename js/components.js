// plain javascript

// post array
let posts = [
  {
    id: 1,
    title: "SALE OF ORDINARY MEMBERSHIP AT THE CLUB",
    excerpt: "Purchase of membership directly from the club",
    imgAlt: "swimming pool building",
  },
  {
    id: 2,
    title: "SOCIAL DANC NIGHT BLACK & WHITE NIGHT",
    excerpt: "Come out and dance to a live band and have the time of your life",
    imgAlt: "woman volleyball",
  },
  {
    id: 3,
    title: "21ST SSC OPEN INVITATIONAL MIDGET MEET 2015",
    excerpt: "12 & 13 September Venue : Competition Pool",
    imgAlt: "a man is swimming ",
  },
  {
    id: 4,
    title: "ANNUAL 9-BALL POOL COMPETITION ",
    excerpt:
      "Time: 7pm (weekdays) <br> Venue: Billiards Room (Bowling Centre) ",
    imgAlt: "8 ball pool wallpaper ",
  },
  {
    id: 5,
    title: "22ND TABLE TENNIS OPEN CHAMPIONSHIP",
    excerpt:
      "Men's Singles / Doubles <br> Ladies' Singles/Doubles <br>Mixed Doubles",
    imgAlt: "Table tennis ready to play ",
  },
  {
    id: 6,
    title: "WEEKEND BAZAAR EVERY SATURDAY",
    excerpt: "Time: 7am to 10pm <br> Venue: The Atrium",
    imgAlt: "weekend bazaar situation ",
  },
];

const postContainer = document.getElementById("post-cards");
console.log(postContainer);

function renderAllPost() {
  let allPost = "";
  posts.forEach((post) => {
    allPost += `<div class="col-md-6 col-lg-4">
    <div class="post-card">
      <a href="#">
        <div class="post-card__image">
          <img width="250" height="220" src="assets/image-${post.id.toString()}.png" alt="${
      post.imgAlt
    }">
        </div>
      </a>
      <div class="post-card__details">

        <a href="#" class="title">${post.title}</a>
        <span class="separator"></span>
        <small class="excerpt">${post.excerpt}</small>
      </div>
    </div>
  </div>`;
  });
  postContainer.innerHTML = allPost;
}

window.onload = () => {
  setTimeout(() => {
    renderAllPost();
  }, 2000);
};
