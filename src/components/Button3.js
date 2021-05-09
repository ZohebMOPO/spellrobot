import React from "react";

class Button3 extends React.Component {
  async componentDidMount() {
    const url = "https://tangled.ae/Spellbound-Robot/entry.php?val=3";
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
        <button type="button" className="btn-lg btn-danger" onClick={Response}>
          Right
        </button>
      </div>
    );
  }
}

export default Button3;
