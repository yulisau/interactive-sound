const maxApi = require("max-api");
// maxAPI.outlet("js is working");

const weather = require("openweather-apis");
weather.setAPPID("7bfc5fc999374d78e5cea3520544682b");
weather.setLang("en");
weather.setUnits("imperial");

maxApi.addHandler("denver", () => {
  weather.setCity('denver');
  weather.getAllWeather(function(err, JSONObj){
    maxApi.outlet(JSONObj);
  });
});

maxApi.addHandler("new york", () => {
    weather.setCity('new york city');
    weather.getAllWeather(function(err, JSONObj){
      maxApi.outlet(JSONObj);
    });
  });

  maxApi.addHandler("los angeles", () => {
    weather.setCity('los angeles');
    weather.getAllWeather(function(err, JSONObj){
      maxApi.outlet(JSONObj);
    });
  });


