import React from "react";

class Button2 extends React.Component {
  state = { data: [] };
  async componentDidMount() {
    const url = "http://tangled.ae/Spellbound-Robot/entry.php?val=2";
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
          class="btn-lg btn-success"
          onClick={() => this.state.data}
        >
          Left
        </button>
      </div>
    );
  }
}

export default Button2;
