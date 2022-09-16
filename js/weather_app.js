//WEATHER APP
//OPEN WEATHER API
//JQUERY
//MAPBOX
(function (){
    "use strict"
    console.log('testing conection');

    // create structure of data in a table format on HTML file and in function
    // loop through format to display forecast for each day
    function renderHTML(weatherData){
        let html = '';
        for(let i = 0; i < weatherData.length ; ++i)
                html +=
                    '               <div class="accordion accordion-flush" id="accordionFlushExample">\n' +
                    '                    <div class="accordion-item">\n' +
                    '                        <h2 class="accordion-header" id="flush-headingOne">\n' +
                    '                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"aria-expanded="false" aria-controls="flush-collapseOne">\n' +
                    '                                Day 1\n' +
                    '                            </button>\n' +
                    '                        </h2>\n' +
                    '                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">\n' +
                    '                            <div class="accordion-body">\n' +
                    '                                <p>Description: ' + weatherData[i][0]['weather'][0]['description'] + '</p>\n' +
                    '                                <p>Humidity: ' + weatherData[i][0]['main']['humidity'] + '</p>\n' +
                    '                                <p>Wind-Speed: ' + weatherData[i][0]['wind']['speed'] + '</p>\n' +
                    '                                <p>Pressure: ' + weatherData[i][0]['main']['pressure']+ '</p>\n' +
                    '                            </div>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </div>';



        return html;
    }
    // Separates weather data from all other datasets in JSON object from OpenWeather API
    function fiveDayForeCast(weatherData){
        // stores weather 3hr weather forecast in binding
        let forecast = weatherData['list'];
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

    $('#btn').on('click', event =>{
        // search functionality convert name into lat long
        // geocode(`${jsonData['street-name']}, ${jsonData['city']}, ${jsonData['state']} ${jsonData['zipcode']}`, MAPBOX_TOKEN_OPEN_WEATHER).then(function(result) {
        geocode(`${jsonData['address']}`, MAPBOX_TOKEN_OPEN_WEATHER).then(function(result) {
            console.log(result);
            map.setCenter(result);
            map.setZoom(5);
            marker.setLngLat([result[0],result[1]]);
        });
    });
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-96.775621, 32.817754])
        .addTo(map);

        // creates functionality which returns lat-long
        function onDragEnd() {
            const lngLat = marker.getLngLat();
            coordinates.style.display = 'block';
            coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
            // console.log(coordinates);
            $.get('https://api.openweathermap.org/data/2.5/forecast',{
                appid: WEATHER_APP_ID,
                lon: lngLat.lng, //resultsLong
                lat: lngLat.lat, //resultsLat
                unit: 'imperial',
            }).done(function (data){
                console.log(data);
                // fiveDayForeCast(data);
                let weatherData = fiveDayForeCast(data);
                let fiveDayForeCastHTML = renderHTML(weatherData);
                $('#five-day-forecast').html(fiveDayForeCastHTML);
                // creates marker that is draggable by user

            }).fail(function (error){
                console.log(error);
            })
            // converts lat-long to physical address
            reverseGeocode(marker.getLngLat() ,MAPBOX_TOKEN_OPEN_WEATHER )
                .then(function(results) {
                    // converts address to lat long
                    geocode(results, MAPBOX_TOKEN_OPEN_WEATHER).then(function(result) {
                        console.log(result);
                        map.setCenter(result);
                        map.setZoom(5);
                        console.log(results);
                    });
                });
            }
        // marker drag event that triggers capture of lat-long
        marker.on('dragend', onDragEnd);
})();
