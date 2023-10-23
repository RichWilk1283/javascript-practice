window.addEventListener("load", () => {
  const images = [
    "http://dalkeithguesthouse.co.uk/wp-content/uploads/2019/10/Porch-400x400.jpg.png",
    "http://dalkeithguesthouse.co.uk/wp-content/uploads/2019/10/Outside-Sign-400x400.jpg.png",
    "http://dalkeithguesthouse.co.uk/wp-content/uploads/2019/10/Room-4-light-400x400.jpg.png",
    "http://dalkeithguesthouse.co.uk/wp-content/uploads/2019/10/Room-4-mirror-400x400.jpg.png",
    "http://dalkeithguesthouse.co.uk/wp-content/uploads/2019/10/Room-4-Pillows-400x400.jpg.png",
    "http://dalkeithguesthouse.co.uk/wp-content/uploads/2019/10/Stairs-400x400.jpg.png"
  ];

  images.forEach((i) => {
    const newElement = document.createElement("img");
    const gallery = document.querySelector("#gallery");
    newElement.setAttribute("src", i);

    gallery.appendChild(newElement);    
  });
});