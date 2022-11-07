import React from "react";

let SlotMac = (props) => {
  // let x = props.x;
  // let y = props.y;
  // let z = props.z;

  let { x, y, z } = props; //obj destructring

  if (x == y && y == z) {
    return (
      <div className="slot_inner">
        <h1>
          {x} {y} {z}
        </h1>

        <h1>This is Matching</h1>

        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          {x} {y} {z}
        </h1>

        <h1>This is Not Matching</h1>

        <hr />
      </div>
    );
  }
};

export { SlotMac };
