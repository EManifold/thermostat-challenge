# Thermostat Challenge

## Description
An online thermostat that allows the user to set the temperature.

User stories:
```
As a user,
So that I can tell the temperature,
I want a thermostat

As a user,
So that I can warm up,
I want to be able to increase the temperature

As a user,
So that I can save on my electricity bills,
I want to be able to set the temperature o power saving mode

As a user,
So that I can return to a standard temperature,
I want to be able to reset the thermostat

As a user,
So that I can remain conscious of my carbon footprint,
I want to be able to monitor my energy usage
```

## Installation
- Clone this repository
- ```$ bundle```
- ```$ open index.html```

## Usage

This is the initial thermostat that will display when opening the program. The temperature is on medium-usage.
<img width="1271" alt="Screenshot 2019-12-29 at 11 28 38" src="https://user-images.githubusercontent.com/53044792/71556347-7734cd00-2a2f-11ea-9fc8-aa70f9eaccfe.png">

The user can then increase the temperature using the up arrow, up to 25 degrees on power saving. The usage will change to high usage past 25 degrees.
<img width="1272" alt="Screenshot 2019-12-29 at 11 28 53" src="https://user-images.githubusercontent.com/53044792/71556349-7bf98100-2a2f-11ea-9ce0-77eaab3f29f4.png">

Then when power saving is switched off (via the button, which turns red), the user can increase the temperature up to 32 degrees. This is the thermostat's maximum temperature.
<img width="1272" alt="Screenshot 2019-12-29 at 11 29 07" src="https://user-images.githubusercontent.com/53044792/71556352-87e54300-2a2f-11ea-8a98-93ce9dff20bf.png">

Pressing reset will then bring the temperature back down to 20 degrees.
<img width="1275" alt="Screenshot 2019-12-29 at 11 29 23" src="https://user-images.githubusercontent.com/53044792/71556365-b06d3d00-2a2f-11ea-8dd6-79738812c44a.png">

You can decrease the temperature down to 10 degrees, and will change to low usage once it hits 17 degrees.
<img width="1276" alt="Screenshot 2019-12-29 at 11 29 40" src="https://user-images.githubusercontent.com/53044792/71556371-c8dd5780-2a2f-11ea-99a8-67bb5ba2232b.png">

The user may also choose their location via the dropdown menu, and see what the temperature is outside in order to set their internal temperature accordingly.
<img width="1273" alt="Screenshot 2019-12-29 at 11 43 55" src="https://user-images.githubusercontent.com/53044792/71556437-85cfb400-2a30-11ea-8e23-6878e01435bf.png">

When the user turns on power saving and the temperature is set above 25 degrees, the temperature will automatically be brought down to 25 degrees.

## Technologies used
- JavaScript
- HTML
- CSS
- Sinatra
- Jasmine
- JQuery

## Project Status
Project is unfinished as app.rb and a server need to be functioning in order to allow the temperature to stay the same on a page refresh. Styling needs to be developed. Weather could be worked on to include different weather forecasts instead of just temperature. Also different locations. 
