import React from "react";

class Newfullwebsite extends React.Component {
  state = { name: "", username: "" , password:"", confirmpassword:""};

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.username === "" || this.state.password === "" || this.state.confirmpassword === "" ) {
      alert("all fields are mandatory");
      return;
    } else {
      alert("successfully Inserted");
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", password: "", username: "", confirmpassword: "" });
  };

render(){
    return(
      <>

<nav className="navbar navbar-default navbar-fixed-top selected-navbar">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#myPage">Valorant</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#home">HOME</a></li>
        <li><a href="#Updates">Updates</a></li>
        <li><a href="#patches">Patches</a></li>
        <li><a href="#Register">Register</a></li>
        <li><a href="#Login">Login</a></li>
      </ul>
    </div>
  </div>
</nav>

    
    <div className="row">
        <div className="col-md-6">
            <img src="\images\Valorant_Cover_Art.jpg" className="img" alt=""></img>
        </div>
        <div className="col-md-6">
            <p>
            Valorant is a team-based first-person tactical hero shooter set in the near future.
             Players play as one of a set of Agents, characters based on several countries and cultures around the world.
            In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it.
            Agents have unique abilities, each requiring charges, as well as a unique ultimate ability that requires charging through kills, deaths, orbs, or objectives.
            Every player starts each round with a "classic" pistol and one or more "signature ability" charges.
            </p>
        </div>
    </div>

    <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

  
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src="\images\Valorant_Cover_Art.jpg" alt="New York"></img>
        <div className="carousel-caption">
        </div>      
      </div>

      <div className="item">
        <img src="/images/jett.jpg" alt="Chicago" ></img>
        <div className="carousel-caption">
        </div>      
      </div>
    
      <div className="item">
        <img src="/images/valorant.png" alt="Los Angeles" ></img>
        <div className="carousel-caption">
        </div>      
      </div>
    </div>
    
    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
</div>

<div className="ui-main">
<form className="ui form" onSubmit={this.add}>
<div className="field">
<div className="row">
        <div className="col-md-6">
            <img src="\images\phenoix.jpg" className="img"></img>
        </div>
        <div className="col-md-6">
        <h2>Register Now</h2>
        <label>Name</label>
        <input className="form-control" placeholder="Enter name" name="name" type="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input><br></br>
        <label>Username</label>
        <input className="form-control" placeholder="Enter Username"  name="username" type="username"  value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} ></input><br></br>
        <label>Gender </label>
        <input type="radio"name="gender"/> Male
        <input type="radio"name="gender" /> Female<br></br>
        <label>Password</label>
        <input className="form-control" placeholder="Enter Password"  name="password" type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} ></input><br></br>
        <label>Confirm password</label>
        <input className="form-control" placeholder="confirm password"  name="confirmpassword" type="password" value={this.state.confirmpassword} onChange={(e) => this.setState({ confirmpassword: e.target.value })}></input><br></br>
        <button className="form-control btn btn-primary">Register</button>
        </div>
</div>
</div>
</form>
</div>


<div className="row">
        <div className="col-md-3">
          <h2>Valorant</h2>
        <ul>
        <li><a href="#myPage">1084 Sector 19 b chandigarh</a></li>
        <li><a href="#myPage">Phone no 9876543210</a></li>
        <li><a href="#myPage">feedback@valorant.com</a></li>
        </ul>
        </div>
        <div className="col-md-3">
          <h2>Learn</h2>
        <ul>
        <li><a href="#myPage">About us</a></li>
        <li><a href="#myPage">agents</a></li>
        <li><a href="#myPage">Privacy Policy</a></li>
        <li><a href="#myPage">Contact us</a></li>
        <li><a href="#myPage">Terms of service</a></li>
        </ul>
        </div>
        <div className="col-md-3">
          <h2>Learn</h2>
        <ul>
        <li><a href="#myPage">About us</a></li>
        <li><a href="#myPage">agents</a></li>
        <li><a href="#myPage">Privacy Policy</a></li>
        <li><a href="#myPage">Contact us</a></li>
        <li><a href="#myPage">Terms of service</a></li>
        </ul>
        </div>
        <div className="col-md-3">
          <h2>Learn</h2>
        <ul>
        <li><a href="#myPage">About us</a></li>
        <li><a href="#myPage">agents</a></li>
        <li><a href="#myPage">Privacy Policy</a></li>
        <li><a href="#myPage">Contact us</a></li>
        <li><a href="#myPage">Terms of service</a></li>
        </ul>
        </div>
</div>
</>
)
    }
  }
  export default Newfullwebsite;
