$(function() {

	const FORECAST = {

    roundedTemp: []
  };

  $(".js-location-form").on("submit", function(event) {

    event.preventDefault();

    $(".waitForIt").removeClass("waitForIt");

    const zipCode = $("#location-input-id").val();
    const OPEN_WEATHER_MAP_API_KEY = "98500b30bcf94df7d89fffc470786b49";
    const OPEN_WEATHER_MAP_API_KEY_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipCode + ",us" + "&" + "units=imperial" + "&" + "appid=" + OPEN_WEATHER_MAP_API_KEY;

    $.getJSON(OPEN_WEATHER_MAP_API_KEY_URL, { zip: zipCode }, function(response) {
      const theTemp = response.list[0].temp.max;

      const theConditions = response.list[0].weather[0].description;
      //function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}
      const roundedTemp = theTemp.toFixed();
      const casedConditions = theConditions.toUpperCase();

      $(".js-temp-conditions").html('<p class="tempClass">Temperature' +': ' + roundedTemp + ' °F</p><p class="conditionsClass">Conditions' +': ' + casedConditions + '</p>');
      //$(".js-forecast-data").append('<p class="conditionsClass">Conditions' +': ' + casedConditions + '</p>');


      if (parseInt(roundedTemp)>= 70) {
        return $(".js-outfit-rec").html("<p>Shorts<br>T-Shirt</p>");
      }

      else if (parseInt(roundedTemp)>= 51 && roundedTemp<= 69) {
        return $(".js-outfit-rec").html("<p>Long Sleeves<br>Long Pants</p>");
      }

      else if (parseInt(roundedTemp)<= 50) 
        return $(".js-outfit-rec").html("<p>Long Sleeves<br>Long Pants<br>Jacket</p>");

    });
  });

  $("#temp_box1").on("click", function() {
    const zipCode = $("#location-input-id").val();
    const OPEN_WEATHER_MAP_API_KEY = "98500b30bcf94df7d89fffc470786b49";
    const OPEN_WEATHER_MAP_API_KEY_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipCode + ",us" + "&" + "units=imperial" + "&" + "appid=" + OPEN_WEATHER_MAP_API_KEY;

    $.getJSON(OPEN_WEATHER_MAP_API_KEY_URL, { zip: zipCode }, function(response) {
      const theTemp = response.list[0].temp.max;

      const theConditions = response.list[0].weather[0].description;
      //function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}
      const roundedTemp = theTemp.toFixed();
      const casedConditions = theConditions.toUpperCase();
      if (parseInt(roundedTemp)>= 75 && ($("#temp_box1").is(":checked"))) {
        return $(".js-outfit-rec").html("<p>Shorts<br>T-Shirt</p>");
      }

      else if (parseInt(roundedTemp)>= 61 && roundedTemp<= 74 && ($("#temp_box1").is(":checked"))) {
        return $(".js-outfit-rec").html("<p>Long Sleeves<br>Long Pants</p>");
      }

      else if (parseInt(roundedTemp)<= 60 && ($("#temp_box1").is(":checked"))) 
        return $(".js-outfit-rec").html("<p>Long Sleeves<br>Long Pants<br>Jacket</p>");
    });
  });
  $("#temp_box2").on("click", function() {
    const zipCode = $("#location-input-id").val();
    const OPEN_WEATHER_MAP_API_KEY = "98500b30bcf94df7d89fffc470786b49";
    const OPEN_WEATHER_MAP_API_KEY_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipCode + ",us" + "&" + "units=imperial" + "&" + "appid=" + OPEN_WEATHER_MAP_API_KEY;

    $.getJSON(OPEN_WEATHER_MAP_API_KEY_URL, { zip: zipCode }, function(response) {
      const theTemp = response.list[0].temp.max;

      const theConditions = response.list[0].weather[0].description;
      //function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}
      const roundedTemp = theTemp.toFixed();
      const casedConditions = theConditions.toUpperCase();
      if (parseInt(roundedTemp)>= 60 && ($("#temp_box2").is(":checked"))) {
        return $(".js-outfit-rec").html("<p>Shorts<br>T-Shirt</p>");
      }

      else if (parseInt(roundedTemp)>= 41 && roundedTemp<= 59 && ($("#temp_box2").is(":checked"))) {
        return $(".js-outfit-rec").html("<p>Long Sleeves<br>Long Pants</p>");
      }

      else if (parseInt(roundedTemp)<= 40 && ($("#temp_box2").is(":checked"))) 
        return $(".js-outfit-rec").html("<p>Long Sleeves<br>Long Pants<br>Jacket</p>");
    });
  });

  $("#temp_box3").on("click", function() {
    const zipCode = $("#location-input-id").val();
    const OPEN_WEATHER_MAP_API_KEY = "98500b30bcf94df7d89fffc470786b49";
    const OPEN_WEATHER_MAP_API_KEY_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipCode + ",us" + "&" + "units=imperial" + "&" + "appid=" + OPEN_WEATHER_MAP_API_KEY;

    $.getJSON(OPEN_WEATHER_MAP_API_KEY_URL, { zip: zipCode }, function(response) {
      const theTemp = response.list[0].temp.max;

      const theConditions = response.list[0].weather[0].description;
      //function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}
      const roundedTemp = theTemp.toFixed();
      const casedConditions = theConditions.toUpperCase();
      if (parseInt(roundedTemp)>= 70 && ($("#temp_box3").is(":checked"))) {
        return $(".js-outfit-rec").html("<p>Shorts<br>T-Shirt</p>");
      }

      else if (parseInt(roundedTemp)>= 51 && roundedTemp<= 69 && ($("#temp_box3").is(":checked"))) {
        return $(".js-outfit-rec").html("<p>Long Sleeves<br>Long Pants</p>");
      }

      else if (parseInt(roundedTemp)<= 50 && ($("#temp_box3").is(":checked"))) 
        return $(".js-outfit-rec").html("<p>Long Sleeves<br>Long Pants<br>Jacket</p>");
    });
  });

  function displayApiError(error) {
  	$(".error-notice").text(error);
  }

  function displayInvalidLocationError() {
  	$(".error-notice").text("The location you entered is invalid.  Please select another one.");
  }

  function updateLocation(newLocation) {
    const newLocation = { zip: zipCode };
    const zipCode = $("#location-input-id").val();
    const OPEN_WEATHER_MAP_API_KEY = "98500b30bcf94df7d89fffc470786b49";
    const OPEN_WEATHER_MAP_API_KEY_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipCode + ",us" + "&" + "units=imperial" + "&" + "appid=" + OPEN_WEATHER_MAP_API_KEY;

    return $.ajax({
      url: OPEN_WEATHER_MAP_API_KEY_URL,
      method: 'PATCH',
      data: newLocation,
    });
  }
});