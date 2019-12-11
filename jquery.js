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

});
