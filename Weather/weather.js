function ktoC(temp) {
  temp = temp - 273.15;
  temp = temp.toFixed(2);
  temp = temp + "C";
  return temp;
}

function ktoF(temp) {
  temp = temp - 273.15;
  temp = temp * 1.8 + 32;
  temp = temp.toFixed(2);
  temp = temp + "F";
  return temp
}

function msToMPH(speed) {
  speed = speed * 2.23694;
  speed = speed.toFixed(2);
  speed = speed.toString();
  console.log(speed)
  speed = speed + "MPH";
  return speed;
}

function degToDir(direction) {
  if (direction <= 11.25 || direction >= 348.75) {
    direction = "N";
  } else if (direction <= 33.75) {
    direction = "NNE";
  } else if (direction <= 56.25) {
    direction = "NE";
  } else if (direction <= 78.75) {
    direction = "ENE";
  } else if (direction <= 101.25) {
    direction = "E";
  } else if (direction <= 123.75) {
    direction = "ESE";
  } else if (direction <= 146.25) {
    direction = "SE";
  } else if (direction <= 168.75) {
    direction = "SSE";
  } else if (direction <= 191.25) {
    direction = "S";
  } else if (direction <= 213.75) {
    direction = "SSW";
  } else if (direction <= 236.25) {
    direction = "SW";
  } else if (direction <= 258.75) {
    direction = "WSW";
  } else if (direction <= 281.25) {
    direction = "W";
  } else if (direction <= 303.75) {
    direction = "WNW";
  } else if (direction <= 326.25) {
    direction = "NW";
  } else if (direction <= 348.75) {
    direction = "NNW";
  }
  return direction;
}

function setBackground(code) {
  if (code >= 900) {
    $(".weatherBody").addClass("extemeWeather");
  } else if (code >= 800) {
    $(".weatherBody").addClass("clearWeather");
  } else if (code >= 700) {
    $(".weatherBody").addClass("atmosphereWeather");
  } else if (code >= 600) {
    $(".weatherBody").addClass("snowWeather");
  } else if (code >= 500) {
    $(".weatherBody").addClass("rainWeather");
  } else if (code >= 300) {
    $(".weatherBody").addClass("drizzleWeather");
  } else if (code >= 200) {
    $(".weatherBody").addClass("thunderWeather");
  }
}
if (navigator.geolocation) {
  var latitude;
  var longitude;
  navigator.geolocation.getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=aacd3d4cc5a1e8c3a2829fae92681ba2";
        $.getJSON(url, function(json) {
          var temp = ktoF(json["main"]["temp"]);
          var city = json["name"];
          var currentWeather = json["weather"][0]["description"];
          var icon = "http://openweathermap.org/img/w/" + json["weather"][0]["icon"] + ".png";
          var windSpeed = msToMPH(json["wind"]["speed"]);
          var windDirection = degToDir(json["wind"]["deg"]);
          var weatherCode = json["weather"][0]["id"];
          setBackground(weatherCode);
          $(".temp").html('<span class="data"><img class="icon" src=' + icon + '></img>' + temp + "</span>");
          $(".city").html('<b>' + city + '</b>');
          $(".weather").html('<b>' + currentWeather + '</b>');
          $(".wind").html('<b>' + windSpeed + ' ' + windDirection + '</b>');
        });
   });
}
