import React from "react";

class Button3 extends React.Component {
  state = { data: [] };
  async componentDidMount() {
    const url = "http://tangled.ae/Spellbound-Robot/entry.php?val=3";
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
          class="btn-lg btn-danger"
          onClick={() => this.state.data}
        >
          Right
        </button>
      </div>
    );
  }
}

export default Button3;
