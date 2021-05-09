import React from "react";

class Button4 extends React.Component {
  async componentDidMount() {
    const url = "https://tangled.ae/Spellbound-Robot/entry.php?val=4";
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
      <div className="p-5">
        <button type="button" className="btn-lg btn-warning" onClick={Response}>
          Back
        </button>
      </div>
    );
  }
}

export default Button4;
