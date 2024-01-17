document.addEventListener("DOMContentLoaded", function(){
    const carrossel = document.getElementById('img')

    function moveCarrossel(){
        const primeiroItem = carrossel.firstElementChild;
        
        carrossel.appendChild(primeiroItem);
        carrossel.style.transform = 'translateX(0)';
        carrossel.style.transition = '0';

        setTimeout(()=> {
            carrossel.style.transition = 'transform 0.5s ease-in-out';
        });
    }
    setInterval(moveCarrossel, 2500);
})

