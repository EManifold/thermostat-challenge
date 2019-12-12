$(document).ready(function() {
  let thermostat = new Thermostat
    $('#tempDisplay').text(`${thermostat.getCurrentTemperature()} °C`);

    $('#decreaseTemp').click(function() {
      thermostat.decrease()
      $('#tempDisplay').text(`${thermostat.getCurrentTemperature()} °C`);
    });

    $('#increaseTemp').click(function() {
      thermostat.increase()
      $('#tempDisplay').text(`${thermostat.getCurrentTemperature()} °C`);
    });

    $('#reset').click(function() {
      thermostat.reset()
      $('#tempDisplay').text(`${thermostat.getCurrentTemperature()} °C`);
    });

    $('#powerSaving').click(function() {
      thermostat.togglePowerSaving()
      $('#tempDisplay').text(`${thermostat.getCurrentTemperature()} °C`);
    });

    // var city = $("#city :selected").text();

    $("#city").change(function(){
      var city = $(this).val();
      $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=bb2a87298eceeff6c09488295024027c`, function(json) {
        $('#cityTemp').text(`${Math.round(json.main.temp - 273.15)} °C`);
      });
    });


});
