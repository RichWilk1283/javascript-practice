window.addEventListener('load', (event) => {

  const bannerImg = document.querySelector("#banner-img")
  
  let imgCounter = 0;
  const images = [
    "https://dalkeithgh.blob.core.windows.net/dalkeithguesthouse/Carousel/dining room.jpg",
    "https://dalkeithgh.blob.core.windows.net/dalkeithguesthouse/Carousel/room7 headboard shot.jpg",
    "https://dalkeithgh.blob.core.windows.net/dalkeithguesthouse/Carousel/external mountain view.jpg",
    "https://dalkeithguesthouse.co.uk/wp-content/uploads/revslider/Derwent-Water-1100x400.jpg"
  ]

  const rightBtn = document.querySelector("#right-btn");
  rightBtn.addEventListener('click', (event) => {    
    bannerImg.setAttribute("src", images[imgCounter]);
    if (imgCounter === 3) {
      imgCounter = 0
    } else {
      imgCounter++;
    }
  })

  const leftBtn = document.querySelector("#left-btn");
  leftBtn.addEventListener('click', (event) => {
    bannerImg.setAttribute("src", images[imgCounter]);
    if (imgCounter === 0) {
      imgCounter = 3
    } else {
      imgCounter--;
    }
  })

  const reviews = [
    {name: "Joe B",
    message: "Great place"},
    {name: "Mel B",
    message: "The best place"},
    {name: "Sandy B",
    message: "A fantasitc place"}
  ]
  const reviewMsg = document.querySelector("#review-msg");
  const reviewPerson = document.querySelector("#review-person");
  let reviewCounter = 0;

  // The below infinite loop may not be the best/ a safe way to do this kind of loop.
  function displayReview() {
    reviewMsg.textContent = reviews[reviewCounter].message;
    reviewPerson.textContent = reviews[reviewCounter].name;
    reviewCounter === 2 ? reviewCounter = 0 : reviewCounter++;
    reviewLooper();
  }  
  
  function reviewLooper() {
    const reviewLoop = new Promise((resolve) => {
      setTimeout(() => {
        resolve(displayReview());
      }, 4000)
    })
  }

  displayReview();

})