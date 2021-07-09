import geojsonvt from "geojson-vt";
import vtpbf from "vt-pbf";
import fs from "file-system";

const utils = {
  transformGeoJson() {
    console.log("PROTOBUFF EN COURS");
    // build an initial index of tiles
    var orig = JSON.parse(
      fs.readFileSync(__dirname + "./assets/FOR_PUBL_MTQ.json")
    );
    var tileIndex = geojsonvt(orig);
    var tile = tileIndex.getTile(1, 0, 0); // mapbox sends automatic request to the server, and give x, y , z

    console.log(tileIndex);

    // request a particular tile
    // var features = tileIndex.getTile(z, x, y).features;

    // show an array of tile coordinates created so far
    console.log(tileIndex.tileCoords); // [{z: 0, x: 0, y: 0}, ...]
    // console.log(features)

    // pass in an object mapping layername -> tile object
    var buff = vtpbf.fromGeojsonVt({ geojsonLayer: tile });
    var out = fs.writeFileSync("my-tile.pbf", buff);
    console.log(out);
  }
};

export default utils;
