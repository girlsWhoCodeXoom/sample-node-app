This application retrieves data on what countries customers can send money to from
https://www.xoom.com/mapi/v2/countries
It also retrieves additional country-specific information from 
http://countryapi.gear.host/v1/Country/getCountries

Open the above APIs in https://jsoneditoronline.org/ to get a nice view of the json objects that they return.

The combined dataset is used to create a world map that highlights all of the countries that Xoom serves,
with the option of clicking each serviceable country to get a larger individual view with additional information.

Suggestions for customizations
1. Change the font of the page by modifying layout.hbs and layout.css
2. Customize the map colors in x.js
3. Change the layout of the page using index.hbs and layout.css
4. Retrieve the url of the country flag from countryDataOtherApi response and display it in the single country view
    - Update countryData.js by adding a function called getCountryFlag, similar to getCountryName
    - Update layout.hbs to pass the flag into x.js
    - Update x.js to display the flag when an individual country is selected

