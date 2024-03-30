import React, { useState } from "react";
import Draggable from "react-draggable";

function MyComponent() {
  const [activeDrags, setActiveDrags] = useState(0);
  const [current, setCurrent] = useState("A");

  const [deltaPosition, setDeltaPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };

  const onStart = () => {
    let t = activeDrags;
    setActiveDrags(++t);
  };

  const onStop = () => {
    let t = activeDrags;
    setActiveDrags(--t);
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };

  return (
    <div style={{ position: "relative" }}>
      <div
        className="box"
        style={{
          height: "500px",
          width: "500px",
          position: "relative",
          padding: "0",
          borderStyle: "solid",
        }}
      >
        <Draggable onDrag={handleDrag} {...dragHandlers} bounds="parent">
          <div className="box" style={{ width: 200, background: "green" }}>
            <div>{current}</div>
            <div>
              x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}
            </div>
          </div>
        </Draggable>
      </div>

      <div className="" style={{ display: "flex", gap: 10, margin: 5 }}>
        <div
          style={{
            width: 200,
            height: 50,
            borderStyle: "solid",
            background: current == "A" ? "green" : "transparent",
          }}
          onClick={() => {
            setCurrent("A");
          }}
        >
          A
        </div>
        <div
          style={{
            width: 200,
            height: 50,
            borderStyle: "solid",
            background: current == "B" ? "green" : "transparent",
          }}
          onClick={() => {
            setCurrent("B");
          }}
        >
          B
        </div>
        <div
          style={{
            width: 200,
            height: 50,
            borderStyle: "solid",
            background: current == "C" ? "green" : "transparent",
          }}
          onClick={() => {
            setCurrent("C");
          }}
        >
          C
        </div>
        <div
          style={{
            width: 200,
            height: 50,
            borderStyle: "solid",
            background: current == "D" ? "green" : "transparent",
          }}
          onClick={() => {
            setCurrent("D");
          }}
        >
          D
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
