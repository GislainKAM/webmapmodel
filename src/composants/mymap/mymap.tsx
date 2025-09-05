import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { useGeographic } from "ol/proj";
import "ol/ol.css";
import "./mymap.css";

function MyMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    useGeographic();

    useEffect(() => {   
      const map = new Map({
        target: mapRef.current!,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: ([3.14, 11.5]),
          zoom: 5,
        }),
      });   
      return () => map.setTarget(undefined);
    }, []); 
    return <div ref={mapRef} id="map" className="map-container"></div>;
}

export default MyMap;
