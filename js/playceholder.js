
    const getPhotos = async () =>
    {
        const response = await fetch`https://jsonplaceholder.typicode.com/photos`;
        return await response.json();
    }

    const resultPhoto = async result =>
    {
         let $h1 = document.querySelector('h1');
         result = await getPhotos();
         result.map(response =>
         {
             let p = document.createElement('p');
             const { albumId, id, title, thumbnailUrl, url } = response;
             p.innerHTML = `${albumId}, ${id}, ${title}, ${thumbnailUrl}, ${url}`;
             $h1.append(p);
         });
    }
    resultPhoto();