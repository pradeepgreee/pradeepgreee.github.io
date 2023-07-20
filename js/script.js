// console.log("hello world");


let logoLeft = document.querySelector('.logo-left');

logoLeft.addEventListener('click', function(e){
  
  window.scrollTo({ top: 0, behavior: 'smooth' })

  e.preventDefault;
});


let home = document.getElementById('home');


home.addEventListener('click', function(e){
  
  window.scrollTo({ top: 0, behavior: 'smooth' })

  e.preventDefault;
});

// About Me Scroll

let aboutMe = document.getElementById('aboutme');

aboutMe.addEventListener('click', function(e){
  
  if({

  })
  window.scrollTo({ top: 600, behavior: 'smooth' })

  e.preventDefault;
})

// Design Scroll

let Design = document.getElementById('design');

Design.addEventListener('click', function(e){
  
  window.scrollTo({ top: 1300, behavior: 'smooth' })

  e.preventDefault;
})

// Contact Me Scroll

let Contact = document.getElementById('contact');

Contact.addEventListener('click', function(e){
  
  if (screen.width > 1024)  {
    window.scrollTo({ top: 2250, behavior: 'smooth' })
    
  } else {
    window.scrollTo({ top: 2637, behavior: 'smooth' })
  }

  e.preventDefault;
})

