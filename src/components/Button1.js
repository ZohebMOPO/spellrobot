import React, { Fragment } from "react";

class Button1 extends React.Component {
  state = { data: [] };
  async componentDidMount() {
    const url = "https://tangled.ae/Spellbound-Robot/entry.php?val=1";
    const response = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      </Fragment>
    );
  }
}
export default Button1;
