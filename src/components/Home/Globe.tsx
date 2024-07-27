"use client";

import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";

const locations: Record<
  string,
  { lat: number; lon: number; country: string; region: string; city: string }
> = {
  India: {
    lat: 20.5937,
    lon: 78.9629,
    country: "India",
    region: "Asia",
    city: "Delhi",
  },
  USA: {
    lat: 37.7749,
    lon: -122.4194,
    country: "USA",
    region: "California",
    city: "San Francisco",
  },
  Canada: {
    lat: 45.4215,
    lon: -75.6972,
    country: "Canada",
    region: "Ontario",
    city: "Ottawa",
  },
  Brazil: {
    lat: -15.8267,
    lon: -47.9218,
    country: "Brazil",
    region: "Distrito Federal",
    city: "Brasília",
  },
  Australia: {
    lat: -35.2809,
    lon: 149.13,
    country: "Australia",
    region: "Australian Capital Territory",
    city: "Canberra",
  },
  Germany: {
    lat: 52.52,
    lon: 13.405,
    country: "Germany",
    region: "Berlin",
    city: "Berlin",
  },
  Japan: {
    lat: 35.6762,
    lon: 139.6503,
    country: "Japan",
    region: "Tokyo",
    city: "Tokyo",
  },
  France: {
    lat: 48.8566,
    lon: 2.3522,
    country: "France",
    region: "Île-de-France",
    city: "Paris",
  },
  UK: {
    lat: 51.5074,
    lon: -0.1278,
    country: "UK",
    region: "England",
    city: "London",
  },
  "South Africa": {
    lat: -33.9249,
    lon: 18.4241,
    country: "South Africa",
    region: "Western Cape",
    city: "Cape Town",
  },
  // Add more locations as needed
};

const Globe: React.FC<{ className?: string; country: string }> = ({
  className,
  country,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const focusedLocation = locations[country];
  const [rotationActive, setRotationActive] = useState(true);
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let phi = 0;
    let theta = 0;
    let blinkState = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [1, 0.1, 0.1],
      glowColor: [1, 1, 1],
      markers: focusedLocation
        ? [{ location: [focusedLocation.lat, focusedLocation.lon], size: 0.03 }]
        : [],
      onRender: (state) => {
        if (rotationActive) {
          state.phi = phi;
          state.theta = theta;
          phi += 0.005; // Slow rotation
        } else {
          // Focus on the customer's country
          const targetPhi = (90 - focusedLocation.lat) * (Math.PI / 180);
          const targetTheta = (focusedLocation.lon + 180) * (Math.PI / 180);
          state.phi = targetPhi;
          state.theta = targetTheta;

          // Calculate marker position in canvas coordinates
          const x =
            (Math.sin(targetPhi) * Math.cos(targetTheta) + 1) * (600 / 2);
          const y =
            (Math.sin(targetPhi) * Math.sin(targetTheta) + 1) * (600 / 2);
          setMarkerPosition({ x, y });
        }

        // Advanced Blink effect
        blinkState = (blinkState + 1) % 30; // Slower blink
        state.markerColor = blinkState < 15 ? [1, 0.1, 0.1] : [1, 1, 1]; // Change color more drastically
      },
    });

    return () => {
      globe.destroy();
    };
  }, [focusedLocation, rotationActive]);

  useEffect(() => {
    setRotationActive(false); // Stop rotation when the customer's country changes
  }, [country]);

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        className={className}
      />
      {focusedLocation && (
        <motion.div
          style={{
            position: "absolute",
            top: markerPosition.y,
            left: markerPosition.x,
            transform: "translate(-50%, -50%)", // Center the card at the marker position
            padding: "20px", // Increased padding for a more spacious feel
            backgroundColor: "rgba(0, 0, 20, 0.8)", // Slightly darker background for better contrast
            color: "white",
            borderRadius: "15px", // More rounded corners for a smoother look
            boxShadow:
              "12px 12px 24px rgba(0, 0, 0, 0.2), -12px -12px 24px rgba(255, 255, 255, 0.3)", // Advanced neumorphic shadows
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 style={{ margin: "0 0 10px 0", fontSize: "1.2em" }}>
            {focusedLocation.city}
          </h3>
          <p style={{ margin: "0", fontSize: "1em" }}>
            {focusedLocation.region}, {focusedLocation.country}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Globe;
