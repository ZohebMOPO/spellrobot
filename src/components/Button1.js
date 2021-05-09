import React, { Fragment } from "react";

class Button1 extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="text-center p-5">
          <a href="http://tangled.ae/Spellbound-Robot/entry.php?val=1">
            <button type="button" className="btn-lg btn-secondary">
              Front
            </button>
          </a>
        </div>
      </Fragment>
    );
  }
}
export default Button1;
