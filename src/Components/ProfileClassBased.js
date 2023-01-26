import React from "react";

class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInfo: {
        name: "Hello",
        location: "Guntur"
      }
    }

    console.log("Inside Child - Constructor")
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sivakrishna29");
    const profileData = await data.json();
    this.setState({
      userInfo: profileData
    })
  }

  componentDidUpdate(){
    console.log("Inside - Child ComponenetDidUpdate")
  }
  componentWillUnmount(){
    console.log("Inside - Child ComponenetWillUnmount")
  }

  render(){
    console.log("Inside - child Render")
    return(
      <div>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.id}</h2>
        <h3>Age: {this.state.userInfo.login}</h3>
        <h4>Age: {this.state.userInfo.type}</h4>
      </div>
    )
  }

}

export default Profile;
