import React from "react";

class Button4 extends React.Component {
  state = { data: [] };
  async componentDidMount() {
    const url = "http://tangled.ae/Spellbound-Robot/entry.php?val=4";
    const response = await fetch(url, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  render() {
    return (
      <div className="p-5">
        <button
          type="button"
          class="btn-lg btn-warning"
          onClick={() => this.state.data}
        >
          Back
        </button>
      </div>
    );
  }
}

export default Button4;