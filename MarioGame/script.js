function jump() {
    var mario = document.querySelector('.mario')

    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)


}

function start() {
    const loop = setInterval(() => {
        var mario = document.querySelector('.mario')
        var bullet = document.querySelector('.bullet')

        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const bulletPosition = bullet.offsetLeft;
        console.log(marioPosition);

        

        if (bulletPosition <= 120 && bulletPosition > 0 && marioPosition < 80) {
            bullet.style.animation = 'none';
            bullet.style.left = `${bulletPosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './imagens/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);
        }

    }, 10);


}

document.addEventListener('keydown', jump);