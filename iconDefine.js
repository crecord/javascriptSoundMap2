/*
var place = L.Icon.extend({
    options: {
    iconUrl: 'icons/newPlace.png',

    iconSize:     [26, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
    }
});*/


var newPlace = L.icon({
    iconUrl: 'icons/newPlace.png',

    iconSize:     [26, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
}); 

var oldPlace = L.icon({
    iconUrl: 'icons/oldPlace.png',

    iconSize:     [26, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
}); 

var selectedPause = L.icon({
    iconUrl: 'icons/selectedPause.png',

    iconSize:     [26, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
}); 

var selectedPlay = L.icon({
    iconUrl: 'icons/selectedPlay.png',

    iconSize:     [26, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
}); 

/*
var newPlace = new place({iconUrl: 'icons/newplace.png'}),
    oldPlace = new place({iconUrl: 'oldPlace.png'}),
    selectedPause = new place({iconUrl: 'selectedPause.png'});
    selectedPlay = new place({iconUrl: 'selectedPlay.png'});
*/