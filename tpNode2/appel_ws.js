import fetch from 'node-fetch';

function myGenericJsGetFetchData(url) {
    return new Promise((resolveWithJsData, reject) => {
        fetch(url)
            .then((response) => {
                if (response.status !== 200) {
                    var errString = 'Problem. Status Code: ' + response.status;
                    console.log(errString); reject(errString); return;
                }
                // Examine the text in the response :
                response.json().then(function (data) {
                    resolveWithJsData(data);
                })
            })
            .catch((err) => { console.log('Fetch Error :-S', err); reject(err); });
    });
}

/*
let wsUrl = "https://api.zippopotam.us/fr/27200";

myGenericJsGetFetchData(wsUrl)
    .then((data) => {
        console.log(data)
        let longitude = data.places[0].longitude;
        let latitude = data.places[0].latitude;
        console.log(`longitude=${longitude}  latitude=${latitude}`);
        let apiKey = "27a68278aebee75af9d4fc23d7a68f75";
        let wsUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
        return myGenericJsGetFetchData(wsUrl2);
    } )
    .then((data2) => { console.log("data2=" + JSON.stringify(data2)); })
    .catch((err) => { console.log(err); });

    */

    async function enchainementAppelsWs(){
        try{
            let wsUrlZip = "https://api.zippopotam.us/fr/27200";
            const dataWsZip = await myGenericJsGetFetchData(wsUrlZip);
            console.log("dataWsZip=" + JSON.stringify(dataWsZip));
            let longitude = dataWsZip.places[0].longitude;
            let latitude = dataWsZip.places[0].latitude;
            console.log(`longitude=${longitude}  latitude=${latitude}`);
            let apiKey = "27a68278aebee75af9d4fc23d7a68f75";
            let wsUrlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
            const dataWeather = await  myGenericJsGetFetchData(wsUrlWeather);
            console.log("dataWeather=" + JSON.stringify(dataWeather)); 
        }catch(err){
            console.log(err);
        }
    }

    enchainementAppelsWs();
    console.log("suite immédiate sans blocage du thread principal de nodeJs ...");