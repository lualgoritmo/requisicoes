 
        let $cep = document.querySelector('#cep');

        const showCep = result =>
        {
            for(const camp in result)
            {
                if(document.querySelector('#'+camp))
                {
                    document.querySelector('#'+camp).value = result[camp];
                }
            }
        }

        $cep.addEventListener('blur', event =>
        {
            event.preventDefault();

            const getCep = async () => 
            {
                let cepRecebido = $cep.value;
                const response = await fetch(`https://viacep.com.br/ws/${cepRecebido}/json/`);
                return await response.json();
            }

            const cepIdentify = async result =>
            {  
                result = await getCep();
                showCep(result);
            }
            cepIdentify();
        });