import React, { Fragment } from "react";

class Button1 extends React.Component {
  async componentDidMount() {
    const url = "https://tangled.ae/Spellbound-Robot/entry.php?val=1";
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
        <div className="text-center p-5">
          <button
            type="button"
            className="btn-lg btn-secondary"
            onClick={Response}
          >
            Front
          </button>
        </div>
      </Fragment>
    );
  }
}
export default Button1;
