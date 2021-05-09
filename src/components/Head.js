import React, { Fragment } from "react";

function Head() {
  return (
    <Fragment>
      <h1 className="text-center text-light mt-5">SpellBound Robot</h1>
      <div className="d-flex justify-content-center">
        <form className="d-flex mt-5 w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Magic Happens Here!"
          />
          <a href="https://tangled.ae/Spellbound-Robot/entry.php?val=6">
            <button className="btn btn-info">Magic</button>
          </a>
        </form>
      </div>
    </Fragment>
  );
}

export default Head;
