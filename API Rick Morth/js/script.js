
     const $btn = document.querySelector('#botao');
     
        function getUsers(imageP, nomeP, especieP, condicaoP, id)
        {
            const img = document.getElementById('img'+id);
            const nome = document.getElementById('nome'+id);
            const especie = document.getElementById('especie'+id);
            const condicao = document.getElementById('condicao'+id);
            img.src = imageP;
            nome.innerHTML = nomeP;
            especie.innerHTML = especieP;
            condicao.innerHTML = condicaoP;
        }

        const createRandonValue = (max, min) =>
        {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
       
        var getPersona = async () =>
        {
            const aleatorio = createRandonValue(671,1);
            const person = await fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`);
            return person;
        }

        const charactersIdentified = async (id) => 
        {  
           const person = await getPersona(id);
            person.json().then(response => 
            {
                var pImg = response.image; 
                var pNome = response.name;
                var estatusP = response.status;
                var especie =  response.species;   

                getUsers(pImg, pNome, estatusP, especie, id);
            });
        }

        function initial(totalDePersonagens)
        {
            var totalPersonagens = totalDePersonagens;
            for(var i = 0; i < (totalPersonagens); i++)
            {
                charactersIdentified(i);
            }
        }
        
        window.addEventListener('load',initial(3));
        $btn.addEventListener('click', Element =>
        {
            Element.preventDefault(); 
            initial(3);
        });   
        
