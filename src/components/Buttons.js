import React, { Fragment } from "react";

function Buttons() {
  return (
    <Fragment>
      <div className="text-center p-5">
        <button type="button" class="btn-lg btn-secondary">
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
