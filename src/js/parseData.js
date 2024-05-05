import fetchWeatherDetails from "./fetchWeatherdetails";

const parseData = async function parsesDataToGetDetails(location){
    let fecthDetails = fetchWeatherDetails();
    let data = await fecthDetails.getDetails(location);

    const locationDetails = function getLocation(){
        let country = data.location.country;
        let city = data.location.name;
        return {country, city};

    }

    const weatherDetails = function getWeatherDetails(){
        let condition = data.current.condition.text;
        let icon = data.current.condition.icon;
        let temp_c = data.current.temp_c;
        let temp_f = data.current.temp_f;
        let feelsLikeC = data.current.feelslike_c;
        let feelsLikeF = data.current.feelslike_f;
        let uv = data.current.uv;


        return {condition, 
                icon ,temp_c, 
                temp_f,
                feelsLikeC,
                feelsLikeF,
                uv,}

    }

    return {weatherDetails, locationDetails};
}

export default parseData;