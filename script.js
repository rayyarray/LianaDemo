const counters = document.querySelectorAll('.counter');
const countSpeed = 200;

counters.forEach(counter =>{
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / countSpeed;

        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1)
        } else {
            count.innerText = target;
        }
    }

    updateCount();
});