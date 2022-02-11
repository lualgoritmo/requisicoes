

   const showHTML = (resultId, resultTitle) =>
   {
        let $div = document.querySelector('.playce');
        let $p = document.createElement('p');
            $p.innerHTML = `Id: ${resultId} - `;
            $p.innerHTML += ` Titulo: ${resultTitle}`;
            $div.append($p);
    }
    
    const getTodos = async () =>
    {
        const resolve = await fetch`https://jsonplaceholder.typicode.com/todos`;
        return await resolve.json();
    }
    
    const personTodos = async() =>
    {
        const result = await getTodos();
        result.map(element => showHTML(element.id, element.title));
    }
    personTodos();

