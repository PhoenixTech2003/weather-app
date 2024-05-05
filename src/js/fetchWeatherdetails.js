const fetchWeatherDetails = function getsWeatherDetailsOfSpecifiedLocation(){
  const getDetails = async function fecthDetails(location){
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=dffb002748c3494ca8a61940240105&q=${location}`,{mode:'cors'});
    let data = await response.json();
    return data;
  }

  return{getDetails};
}

export default fetchWeatherDetails;

