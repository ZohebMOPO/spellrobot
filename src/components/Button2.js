import React, { Fragment } from "react";

class Button2 extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="p-5">
          <a href="http://tangled.ae/Spellbound-Robot/entry.php?val=2">
            <button type="button" className="btn-lg btn-success">
              Left
            </button>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Button2;
