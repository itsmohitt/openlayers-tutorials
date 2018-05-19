 
var baseMapLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
});
var map = new ol.Map({
  target: 'map',
  layers: [ baseMapLayer],
  view: new ol.View({
    center: ol.proj.fromLonLat([-74.0061,40.712]), 
          zoom: 12 //Initial Zoom Level
        })
});

var marker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-74.006,40.7127])
  ),  // Cordinates of New York's City Hall
});

marker.setStyle(new ol.style.Style({
  image: new ol.style.Icon( ({
    color: '#ffcd46',
    crossOrigin: 'anonymous',
    src: 'dot.png'
  }))
}));

var vectorSource = new ol.source.Vector({
  features: [marker]
});
var markerVectorLayer = new ol.layer.Vector({
  source: vectorSource,
});
map.addLayer(markerVectorLayer);

var north = 40.7127;
var south = 40.7129;
var east = -74.0059;
var west = -74.0061;
var extent = ol.proj.transformExtent([east, north, west, south], 'EPSG:4326', 'EPSG:3857');
var imageLayer = new ol.layer.Image({
  source: new ol.source.ImageStatic({
                url: 'photo.png',
                imageExtent: extent
              })
});
map.addLayer(imageLayer);