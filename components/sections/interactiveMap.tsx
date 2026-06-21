"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const position: [number, number] = [
  35.9253,
  -77.7779,
];

export default function InteractiveMap() {
  useEffect(() => {
    delete (
      L.Icon.Default.prototype as unknown as {
        _getIconUrl?: string;
      }
    )._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
  center={position}
  zoom={14}
  zoomControl={false}
  scrollWheelZoom={false}
  dragging={true}
  touchZoom={false}
  doubleClickZoom={false}
  boxZoom={false}
  keyboard={false}
  inertia={true}
  className="h-full w-full z-0"
  style={{
    height: "100%",
    width: "100%",
    touchAction: "pan-y",
  }}
>
      <TileLayer
        attribution="Tiles © Esri"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />

      <TileLayer
        attribution="Tiles © Esri"
        url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
      />

      <ZoomControl position="topright" />

      <Marker position={position}>
        <Popup>
          <div className="space-y-2">
            <h3 className="font-bold text-[#16352A]">
              Proposed Development Site
            </h3>

            <p className="text-sm">
              3031 Treatment Plant Rd
              <br />
              Rocky Mount, NC 27801
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}