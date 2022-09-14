//WEATHER APP
//OPEN WEATHER API
//JQUERY
//MAPBOX
(function (){
    "use strict"
    console.log('testing conection');
    // 1.) create a function to render html to page from five day forecast function
    // TODO
    // create structure of data in a table format on HTML file and in function
    // loop through format to display forecast for each day
    function renderHTML(weatherData){
        let html = '';
        html += `<div id="five-day-forecast">\n` +
            `   <h1>Time</h1>\n` +
            `   <p>${weatherData[0][0]['dt']}</p>/n` +
            `</div>\n`;


        return html;
    }
    // 1.) Update your layout and AJAX request(s) to display a five day forecast for the city you
    //      live in that looks like the screenshot below.
    //TODO
    // create a function that takes in weather data as a argument
    // inetrate through list to find list of 3hr forecast. single out list and store in new binding
    // convert 3hr forecast to 1Day forecast
    // iterate through

    // Separates weather data from all other datasets in JSON object from OpenWeather API
    function fiveDayForeCast(weatherData){
        // stores weather 3hr weather forecast in binding
        let forecast = weatherData['list'];
        // console.log(forecast);
        // let day_forecast = [];
        // day_forecast = forecast.splice(0,8);
        // console.log(day_forecast);
        // create empty list to store 5-day forecast
        let five_day_forecast = [];
        // iterate through 3hr weather array to convert to a day format of 3hr forecast for next 5-days
        while(forecast.length){
            // create empty array to act as temporary storage to transfer to 5-day forecast array
            let day_forecast = [];
            // conditional to control flow of while loop for one DAY
            if(forecast.length % 8 === 0) {
                // REMOVE first 8 indexes/elements from forecast array & ADD them 5-day forecast array
                day_forecast = forecast.splice(0, 8);
                five_day_forecast.push(day_forecast);
                //counter for while loop to eventually terminate
                forecast.length - 8;
            }else {
                // Break if forecast length is not divisible by 8
                break;
            }

        }
        console.log(five_day_forecast);
        return five_day_forecast;
    }


    $.get('https://api.openweathermap.org/data/2.5/forecast',{
        appid: WEATHER_APP_ID,
        lon: -87.083321,
        lat: 32.333469,
        unit: 'imperial',
    }).done(function (data){
        console.log(data);
        // fiveDayForeCast(data);
        let weatherData = fiveDayForeCast(data);
        let fiveDayForeCastHTML = renderHTML(weatherData);
        $('#five-day-forecast').html(fiveDayForeCastHTML);
    }).fail(function (error){
        console.log(error);
    })

})();