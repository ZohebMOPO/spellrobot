import React from "react";

class Button5 extends React.Component {
  state = { data: [] };
  async componentDidMount() {
    const url = "https://tangled.ae/Spellbound-Robot/entry.php?val=0";
    const response = await fetch(url, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  render() {
    return (
      <div className="text-center p-5">
        <button
          type="button"
          className="btn-lg btn-dark"
          onClick={() => this.state.data}
        >
          Stop
        </button>
      </div>
    );
  }
}

export default Button5;
