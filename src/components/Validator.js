import react from "react";

class Validator extends react.Component {
  state = { password: "" };

  render() {
    return (
      <form className="ui form">
        <div className="field">
          {" "}
          <br />
          <div>
            <label>
              {" "}
              <h5>Password</h5>
            </label>
          </div>
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        {this.state.password.length < 6
          ? "Password must be atleast 6 characters"
          : ""}
      </form>
    );
  }
}

export default Validator;
