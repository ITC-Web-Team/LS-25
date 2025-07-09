import React, { useEffect, useRef } from "react";

function AnalogClock() {
  const hourRef = useRef();
  const minuteRef = useRef();
  const secondRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const sec = now.getSeconds();
      const min = now.getMinutes();
      const hr = now.getHours();

      hourRef.current.style.transform = `rotate(${hr * 30 + min / 2}deg)`;
      minuteRef.current.style.transform = `rotate(${min * 6}deg)`;
      secondRef.current.style.transform = `rotate(${sec * 6}deg)`;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: 200,
      height: 200,
      border: "8px solid #333",
      borderRadius: "50%",
      position: "relative",
      margin: "40px auto",
      background: "#fff"
    }}>
      <div ref={hourRef} style={{
        position: "absolute",
        width: 6,
        height: 60,
        background: "#333",
        top: 40,
        left: 97,
        transformOrigin: "bottom center",
        borderRadius: 3
      }} />
      <div ref={minuteRef} style={{
        position: "absolute",
        width: 4,
        height: 80,
        background: "#666",
        top: 20,
        left: 98,
        transformOrigin: "bottom center",
        borderRadius: 2
      }} />
      <div ref={secondRef} style={{
        position: "absolute",
        width: 2,
        height: 90,
        background: "#e33",
        top: 10,
        left: 99,
        transformOrigin: "bottom center",
        borderRadius: 1
      }} />
      <div style={{
        position: "absolute",
        width: 16,
        height: 16,
        background: "#222",
        borderRadius: "50%",
        top: 92,
        left: 92
      }} />
    </div>
  );
}

export default AnalogClock;
