'use strict';

//This is server-side javascript so it can make full use of ECMAScript6

module.exports = (data1, data2) => {
    const countryDataXoom = data1.data;
    const countryDataOtherApi = data2.data;
    const countryItems=[];
    let countryDataXoomEntry;
    let x;
    let y;

    function getAdditionalCountryInformation(countryCodeXoom, countryItem) {
        for (y in countryDataOtherApi.Response ) {
            if (countryCodeXoom === countryDataOtherApi.Response[y].Alpha2Code) {
                Object.assign(countryItem, {countryItemName: countryDataOtherApi.Response[y].Name},
                    {countryItemLatitude: countryDataOtherApi.Response[y].Latitude},
                    {countryItemLongitude: countryDataOtherApi.Response[y].Longitude},
                    {countryItemFlag: countryDataOtherApi.Response[y].Flag}
                );
            }
        }
    }

    for (x in countryDataXoom.data.countries) {
        countryDataXoomEntry = countryDataXoom.data.countries[x];

        const countryItem = {
            countryItemCountryCode: countryDataXoomEntry.countryCode,
            countryItemDisbursementTypeCount: countryDataXoomEntry.disbursementTypes.length,
            countryItemDisbursementOptions: countryDataXoomEntry.disbursementTypes.toString()
        }

        getAdditionalCountryInformation(countryDataXoomEntry.countryCode, countryItem);

        countryItems.push(countryItem);

    }

    return countryItems;
};
