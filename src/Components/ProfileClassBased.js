import React from "react";
import UserContext from "../Utils/UserContext";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Hello",
        location: "Guntur",
      },
    };

    console.log("Inside Child - Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sivakrishna29");
    const profileData = await data.json();
    this.setState({
      userInfo: profileData,
    });
  }

  componentDidUpdate() {
    console.log("Inside - Child ComponenetDidUpdate");
  }
  componentWillUnmount() {
    console.log("Inside - Child ComponenetWillUnmount");
  }

  render() {
    console.log("Inside - child Render");
    return (
      <div className="ml-3">
        <UserContext.Consumer>
          {({ profile }) => (
            <span className="p-10 font-bold text-red-900">
              {profile.name} - {profile.email}
            </span>
          )}
        </UserContext.Consumer>
        <img
          src={this.state.userInfo.avatar_url}
          className="w-52 h-52 border border-sky-300 pt-10"
        />
        <h2 className="pt-3 font-bold text-1xl">
          Name: {this.state.userInfo.id}
        </h2>
        <h3 className="font-bold text-1xl">Age: {this.state.userInfo.login}</h3>
        <h4 className="pb-3 font-bold text-1xl">
          Age: {this.state.userInfo.type}
        </h4>
      </div>
    );
  }
}

export default Profile;
