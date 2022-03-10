
    const form = document.querySelector('.quiz-form');
    const corret = ['B', 'B', 'B', 'B'];
    const finaliResult = document.querySelector('.result');
    form.addEventListener('submit', event =>
    {
        event.preventDefault();
        let score = 0;

        const ansWers = [
            form.inputQuestion1.value,
            form.inputQuestion2.value,
            form.inputQuestion3.value,
            form.inputQuestion4.value,
        ];
        //console.log(ansWers);
        ansWers.forEach((ansWer, index) =>
        {
            if(ansWer === corret[index])
            {
                score += 25;
                console.log('Acertou');
            }
        });

            scrollTo(0,0);
            finaliResult.classList.remove('d-none');

            let counter = 0;
            const timer = setInterval(() =>
            {
                if(counter === score)
                {
                    clearInterval(timer);
                }
                finaliResult.querySelector('span').textContent = `${counter}%`;
                counter++;
            }, 10);
    });

    
    /*const timer = setInterval(() =>
    {
        console.log('Pronto');
        counter++;

        if(counter === 5)
        {
            clearInterval(timer);
        }
    }, 2000);*/



