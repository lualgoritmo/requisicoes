
    const correctAnwers = ['B', 'B', 'B', 'B'];
    const $form = document.querySelector('.quiz-form');

    $form.addEventListener('submit', event =>
    {
        event.preventDefault();
        let score = 0;
        const userAnwers = [
            $form.inputQuestion1.value,
            $form.inputQuestion2.value,
            $form.inputQuestion3.value,
            $form.inputQuestion4.value
        ]; 
        userAnwers.forEach((userAnwer, index) =>
        {
            if(userAnwer === correctAnwers[index])
            {
                score += 25;
            }
        });
        console.log(score);
    });