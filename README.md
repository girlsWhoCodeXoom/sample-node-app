This application retrieves data on what countries customers can send money to from
https://api.xoom.com/v2/catalog/currency-channels?beta=false&page_size=500
It also retrieves additional country-specific information from 
http://countryapi.gear.host/v1/Country/getCountries

Open the above APIs in https://jsoneditoronline.org/ to get a nice view of the json objects that they return.

The combined dataset is used to create a Goggle Charts world map visualization that highlights all of the countries that Xoom serves, with the option of selecting each pin to get a birds-eye view of that country. Additionally we can enable a Google Places search on the individual country view.
