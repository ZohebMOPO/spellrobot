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
    const data = response.json();
    console.log(data);
  }
  render() {
    return (
      <div className="text-center p-5">
        <button type="button" className="btn-lg btn-dark">
          Stop
        </button>
      </div>
    );
  }
}

export default Button5;
