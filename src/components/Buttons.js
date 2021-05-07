import React, { Fragment } from "react";

function Buttons() {
  return (
    <Fragment>
      <div className="text-center p-5">
        <button type="button" class="btn-lg btn-secondary">
          Secondary
        </button>
      </div>
      <div className="p-5">
        <button type="button" class="btn-lg btn-success">
          Success
        </button>
      </div>
      <div className="text-center p-5">
        <button type="button" class="btn-lg btn-danger">
          Danger
        </button>
      </div>
      <div className="p-5">
        <button type="button" class="btn-lg btn-warning">
          Warning
        </button>
      </div>
      <div className="text-center p-5">
        <button type="button" class="btn-lg btn-dark">
          Dark
        </button>
      </div>
    </Fragment>
  );
}

export default Buttons;
