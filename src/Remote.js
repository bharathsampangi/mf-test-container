import React from "react";
import MicroFrontend from "./MicroFrontend";

const Remote = () => {
  return (
    <div>
      <h3>Micro MicroFrontend</h3>
      <MicroFrontend
        name="MFtest"
        history={[]}
        host={process.env.REACT_APP_MF_REMOTE}
      />
    </div>
  );
};

export default Remote;
