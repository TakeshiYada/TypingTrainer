'use strict';

{
  document.addEventListener('keydown',f => {
    if (f.key === ' '){
      location.href = 'rensyu.html';
    }
    else if (f.key === 'Enter'){
      location.href = 'title.html';
    }
  })
}