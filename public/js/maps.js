
var maps = {};

maps = (function () {
    "use strict";

    function init(apiData) {
        google.charts.load('current', { 'packages': ['map'], 'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY' });
        google.charts.setOnLoadCallback(drawWorldMap);

        function drawWorldMap() {
            var worldMapOptions = {
                zoomLevel: 2,
                showTooltip: false,
                showInfoWindow: false,
                useMapTypeControl: true
                },
                worldMap = new google.visualization.Map(document.getElementById('js-world-map-container')),
                worldMapDataTable = new google.visualization.DataTable(),
                apiDataArray = apiData.split("/"),
                worldMapCountryDataArray;

            worldMapDataTable.addColumn('number', 'Latitude');
            worldMapDataTable.addColumn('number', 'Longitude');

            for (var y = 0; y < apiDataArray.length-1; y++) {
                worldMapCountryDataArray = apiDataArray[y].split(',').map(Number);
                worldMapDataTable.addRow(worldMapCountryDataArray);
            }

            worldMap.draw(worldMapDataTable, worldMapOptions);

            addListenerToWorldMap(worldMap, worldMapDataTable);
        }
    }



    function addListenerToWorldMap(worldMap, data) {
        google.visualization.events.addListener(worldMap, 'select', function () {
            var selection = worldMap.getSelection();

            if (selection.length > 0) {
                var selectedCountryLatitude = data.getFormattedValue(selection[0].row, 0),
                    selectedCountryLongitude = data.getFormattedValue(selection[0].row, 1);

                drawCountryMap(selectedCountryLatitude, selectedCountryLongitude);
            }
        });
    }

    function drawCountryMap(selectedCountryLatitude, selectedCountryLongitude) {
        var countryMapOptions = {
                zoomLevel: 5,
                showTooltip: true,
                showInfoWindow: true,
                useMapTypeControl: true,
                icons: {
                    default: {
                        normal: 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Azure-icon.png',
                        selected: 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Right-Azure-icon.png'
                    }
                }
            },
            countryMap = new google.visualization.Map(document.getElementById('js-country-map-container')),
            countryMapDataTable = new google.visualization.DataTable(),
            latitudeLongitudeArray = [selectedCountryLatitude, selectedCountryLongitude].map(Number);

        countryMapDataTable.addColumn('number', 'Latitude');
        countryMapDataTable.addColumn('number', 'Longitude');
        countryMapDataTable.addRow(latitudeLongitudeArray);

        countryMap.draw(countryMapDataTable, countryMapOptions);
    }

    return {
        init: init
    };
}());
