import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const HcgMap = ({ lat, lng }) => {
  const mapRefContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoieWlsYWIiLCJhIjoiY2xxbjlmemFiMnEzeDJ1bWtvOG81aDQ5bSJ9.zsIhUdyTzPai91h7lWkUfQ";
    const map = new mapboxgl.Map({
      container: mapRefContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom: 16,
    });
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    new mapboxgl.Marker({
      color: "darkGreen",

      className: "absolute top-0",
    })
      .setLngLat([lng, lat])
      .addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRefContainer} className="w-full h-full " />;
};

export default HcgMap;
