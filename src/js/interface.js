import parseData from "./parseData";

const userInterface = function manipulatesAndGetsDataFromDOM(){
    const cacheDom = function cachesDomElements(){
        const inputBox = document.querySelector('input');
        const button = document.querySelector('button');
        const detailsBox = document.querySelector('.weather-details');
        return {button, inputBox,detailsBox};
    }

    const bindEvents = function bindEventListenersToDomElements(){
        cacheDom().button.addEventListener('click',displayData);
    }
    
    const displayData = function displaysTheWeatherDataToDom(e){
        e.preventDefault();

        let userSearch = cacheDom().inputBox;
        parseData(userSearch.value).then((data)=>{
            let condition = data.weatherDetails().condition;
            let country = data.locationDetails().country;
            let city = data.locationDetails().city;
            let temp_c = data.weatherDetails().temp_c;
            let temp_f = data.weatherDetails().temp_f;
            let feelslike_c = data.weatherDetails().feelsLikeC;
            let feelslike_f = data.weatherDetails().feelsLikeF;
            let uv = data.weatherDetails().uv;
            let weatherIcon = data.weatherDetails().icon;
            cacheDom().detailsBox.innerHTML =

            `
            <div class = "reveal">
              <h1> ${city}, ${country}</h1>
              <div>
                <img src=${weatherIcon}>
                <h2> ${condition}</h2>
              </div>
              <h2> Temperature: ${temp_c} &#176;</h2>
              <h2> Feels Like: ${feelslike_c} &#176;</h2>
            </div>

            `
            userSearch.placeholder = " ";

            

            
            
        })
    }




    bindEvents()
}

export default userInterface;