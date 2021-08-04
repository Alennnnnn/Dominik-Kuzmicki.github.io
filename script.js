// let a = document.getElementsByClassName("homeImg");

// let height = document.documentElement.clientHeight

// window.addEventListener("scroll",()=>{
//   if(window.pageYOffset > height){
//     a.hidden = false
//   }

//   if(window.pageYOffset < height){
//       a.hidden = true
//     }
// })


var homeImg = document.querySelector('.homeImg');
let height = document.documentElement.clientHeight-100

window.addEventListener("scroll",()=>{
    if(window.pageYOffset > height){
        homeImg.hidden = false
      }
    
      if(window.pageYOffset < height){
        homeImg.hidden = true
        }
})

homeImg.addEventListener('click', function () {
    window.scrollBy({
        top: -document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
});
 
