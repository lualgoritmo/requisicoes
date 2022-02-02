


const APIKey = 'a9KlnLZMNTUeW2ydAW3LTsXc0h9P5eLd';
const baseUrl = 'http://dataservice.accuweather.com/';
const getCityUrl = cityName =>
    `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

  /*const getWeartherUrl = ({Key}) => 
    {
        `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`;
    } */
    
    const fechData = async url =>
    {
        try
        {
            const response = await fetch(url);

            if(!response.ok)
            {
                throw new Error('Não Funcionou');
            }
            
            return response.json();
        }
        catch({name, message})
        {
            alert(`${name}: ${message}`);
        }
    }

    const getCityData = cityName => fechData(getCityUrl(cityName));
    

    const getCityWearther = async cityKey => 
    {
        const [cityData] = await getCityData(cityKey);
        const cityWeartherUrl = `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`;
        return fechData(cityWeartherUrl);
    }


   /* const getCityWearther = async cityName =>
    {
        try
        {
            const { Key } = await getCityData(cityName);
            const cityWeartherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`;
            const response = await fetch(cityWeartherUrl);

            if(!response.ok)
            {
                throw new Error('Não foi Possível obter os dados');
            }
            const [cityWeartherData] = await response.json();
            console.log('TESTE', cityWeartherData);
            return cityWeartherData;
        }
        catch({name, message})
        {
            alert(`${name}: ${message}`);
        }
    }
    getCityWearther('Itamaraju');*/