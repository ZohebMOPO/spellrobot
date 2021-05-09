import React, { Fragment } from "react";

class Button2 extends React.Component {
  async componentDidMount() {
    const url = "https://tangled.ae/Spellbound-Robot/entry.php?val=2";
    const response = await fetch(url, {
      mode: "no-cors",
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
        <div className="p-5">
          <button
            type="button"
            className="btn-lg btn-success"
            onClick={Response}
          >
            Left
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Button2;
