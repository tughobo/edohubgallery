let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");
let currentIndex = 0;


images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(Array.from(images).map(img => img.src), index);
  });
});

// close.addEventListener("click", () => (wrapper.style.display = "none"));


function openModal(images, index) {
  wrapper.style.display = "flex";
  wrapper.style.width = "100vw" 
  wrapper.style.height ="100vh"
  currentIndex = index;
  imgWrapper.src = images[currentIndex];

 
// Remove previous button from the wrapper
  wrapper.querySelectorAll("button").forEach(btn => {
    btn.remove();
  })
  
}


