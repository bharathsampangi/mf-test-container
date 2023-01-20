import React from "react";

const MicroFrontend = ({ name, host, history }) => {
  React.useEffect(() => {
    const render = () => {
      console.log(window[`renderMFtest`]);
      window[`renderMFtest`](`${name}-container`, history);
    };

    const scriptId = `mf-script-${name}`;
    if (document.getElementById(scriptId)) {
      render();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest["files"]["main.js"]}`;
        script.onload = render;
        document.head.appendChild(script);
      });
  }, [name, host]);

  return <main id={`${name}-container`} />;
};

export default MicroFrontend;
