let index = 1; 
let interval;
let slides = document.getElementsByClassName('slide');
let dots = document.getElementsByClassName('dot');

let nextPage = (increment) => {
  clearInterval(interval);
  index += increment;
  paginate(index); 
  rotate();
}

let paginate = (pageIndex) => {
  index = pageIndex;
  if(index > slides.length)
     index = 1;
  
  if(index < 1)
    index = slides.length;
  
for(let i = 0; i < slides.length; i++){
  slides[i].style.cssText = 'display: none;';
}

for(let i = 0; i < dots.length; i++){
  dots[i].classList.remove('active');
}

  slides[index-1].style.cssText='display: block;';
  dots[index-1].classList.add('active');
}

paginate(index);

let rotate = () => {
    
interval = setInterval(() => {
  paginate(++index);
}, 5000)
}

rotate();