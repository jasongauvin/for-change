import geojsonvt from 'geojson-vt';
var vtpbf from 'vt-pbf';

const utils = {
    transformeGeoJson(geoJSON) {
        // build an initial index of tiles
        var tileIndex = geojsonvt(geoJSON);

        // request a particular tile
        // var features = tileIndex.getTile(z, x, y).features;

        // show an array of tile coordinates created so far
        console.log(tileIndex.tileCoords); // [{z: 0, x: 0, y: 0}, ...]
        console.log(features)
    }
};

export default utils;
  