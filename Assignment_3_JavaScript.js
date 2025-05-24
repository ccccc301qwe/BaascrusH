const reviews = [
  {
    name: "Chris",
    text: "A big thanks to Mark and the crew. They were so good and quick with the replacement of my 06 ECU.",
    rating: "★★★★★"
  },
  {
    name: "Jeff",
    text: "Was able to source a refurbished lower front spoiler for my 07 Saab sport combi and it looks brand new. Also picked up a windscreen washer jet so very happy.",
    rating: "★★★★★"
  },
  {
    name: "Rick",
    text: "Fixed my convertible roof in less than an hour and for only $23 of hydraulic fluid. Was I lucky? Absolutely! Thanks.",
    rating: "★★★★★"
  },
  {
    name: "Lee",
    text: "Had my Saab 900 blow off belts and bearings. The guys were fantastic with helping me get the right parts and information at a great price.",
    rating: "★★★★★"
  }
];

let currentReview = 0;

function renderReview() {
  const review = reviews[currentReview];
  document.getElementById("review-box").innerHTML = `
    <h3>${review.name}</h3>
    <p>${review.text}</p>
    <p>${review.rating}</p>
  `;
}

function prevReview() {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  renderReview();
}

function nextReview() {
  currentReview = (currentReview + 1) % reviews.length;
  renderReview();
}

window.addEventListener("DOMContentLoaded", renderReview);

// Back to Top
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
