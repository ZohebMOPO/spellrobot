import React, { Fragment } from "react";

class Buttons extends React.Component {
  async componentDidMount() {
    const url = "https://tangled.ae/Spellbound-Robot/entry.php?val=1";
    const response = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    console.log(data);
  }
  render() {
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
          <button type="button" className="btn-lg btn-dark">
            Stop
          </button>
        </div>
      </Fragment>
    );
  }
}
export default Buttons;
