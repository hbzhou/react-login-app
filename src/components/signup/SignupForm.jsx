import React from 'react'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""

    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
     e.preventDefault();
     console.log(e)
  }

  render() {
    const { username, email, password, passwordConfirm } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input className="form-control"
            type="text"
            name="username"
            value={username}
            onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label className="control-label">Confirm Password</label>
          <input className="form-control"
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={this.onChange} />
        </div>
        <button className="btn-primary">Submit</button>
      </form>
    )
  }

}

export default SignupForm;
