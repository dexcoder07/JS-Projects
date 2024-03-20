const container = document.querySelector('.container');

addEventListener('keydown', function(e) {
    console.log(e.key);
    if(e.key == 'ArrowRight'){
        container.style.justifyContent = 'right';
    }
    else if(e.key == 'ArrowLeft'){
        container.style.justifyContent = 'left';
    }
    else if(e.key == 'ArrowUp'){
        container.style.justifyContent = 'up';
    }
})