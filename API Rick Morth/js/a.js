
function gerarPersonagem (pimgdata,pname, pespecie ,pcondicao , id )
{
    const imagem = document.getElementById('img'+id);
    const nomeDoPersonagem = document.querySelector('#nome'+id);
    const especie = document.querySelector('#especie'+id);
    const condicao = document.querySelector('#condicao'+id);
    
    imagem.src = pimgdata;
    dataname = pname;
    nomeDoPersonagem.innerHTML= pname;
    especie.innerHTML =  pespecie;
    condicao.innerHTML = pcondicao;
}

gerarValorAleatorio = () => 
{
    return Math.floor(Math.random()* 671);
}

pegarPersonagem = (id) => 
{
    let numeroAleatorio = gerarValorAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
        method:'GET',
        headers: 
        {
            Accept: 'application/json',
            "Content-type":'application/json'
        }
    }).then((response) => response.json()).then((data) => 
    {
        var dataimage = data.image
        var dataname = data.name
        var datanomedop = data.name
        var especiedop = data.species
        var condicaodop = data.status

        gerarPersonagem(dataimage,datanomedop ,especiedop, condicaodop , id);
    });
}



function initial(totalPersonagens)
{   
    var totalDePersonagensCarregar = totalPersonagens;
    for (var i = 0; i < (totalDePersonagensCarregar); i++) 
    {
        pegarPersonagem(i);
    }

}

botao.addEventListener('click', initial(3));
