import React, { Fragment } from "react";

class Buttons extends React.Component {
  state = { resp: Number };
  async componentDidMount() {
    const url = "https://tangled.ae/Spellbound-Robot/entry.php?val=1";
    const response = await fetch(url, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
  }
  // eslint-disable-next-line no-dupe-class-members
  render() {
    return (
      <Fragment>
        <div className="text-center p-5">
          <button
            type="button"
            class="btn-lg btn-secondary"
            onClick={() => this.state.data}
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
          <button type="button" className="btn-lg btn-dark">
            Stop
          </button>
        </div>
      </Fragment>
    );
  }
}
export default Buttons;
