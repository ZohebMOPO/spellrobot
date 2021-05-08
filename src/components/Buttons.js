import React, { Fragment, useState } from "react";

function Buttons() {
  const [forward, setforward] = useState("");
  const front = async () => {
    try {
      const response = await fetch(
        "http://tangled.ae/Spellbound-Robot/entry.php?val=1"
      );
      const data = await response.json();
      this.setState({ totalReactPackages: data.total });
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <div className="text-center p-5">
        <button
          type="button"
          class="btn-lg btn-secondary"
          value={forward}
          onSubmit={setforward()}
        >
          Front
        </button>
      </div>
      <div className="p-5">
        <button type="button" class="btn-lg btn-success">
          Left
        </button>
      </div>
      <div className="text-center p-5">
        <button type="button" class="btn-lg btn-danger">
          Right
        </button>
      </div>
      <div className="p-5">
        <button type="button" class="btn-lg btn-warning">
          Back
        </button>
      </div>
      <div className="text-center p-5">
        <button type="button" class="btn-lg btn-dark">
          Stop
        </button>
      </div>
    </Fragment>
  );
}

export default Buttons;
