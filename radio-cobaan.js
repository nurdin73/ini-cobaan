import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio : []
    }
  }
  
  handleChange = (id) => (e) => {
    var jwb = e.target.value
    const findIndex =this.state.radio.findIndex((e) => e.id === id)
    if (findIndex === -1) {
      this.state.radio.push({id, jwb})
      this.setState({radio : this.state.radio})
    } else {
      this.state.radio[findIndex] = {id, jwb}
      this.setState({radio : this.state.radio})
    }
  }
  render() {
    const test = [
      {id: 1, soal: 'hallow1'},
      {id: 2, soal: 'hallow2'},
      {id: 3, soal: 'hallow3'},
      {id: 4, soal: 'hallow4'},
      {id: 5, soal: 'hallow5'},
    ]
    console.log(this.state.radio)
    return (
      <div className="animated fadeIn">
        {/* Content in here */}
        <h1>PROFILE DISINI</h1>
        {test.map((data, i) => {
          return (
            <div key={i}>
              <label>{data.soal}</label>
              <input type="radio" name={"pilih["+data.id+"]"} value="a" onChange={this.handleChange(data.id)} />
              <input type="radio" name={"pilih["+data.id+"]"} value="b" onChange={this.handleChange(data.id)} />
              <input type="radio" name={"pilih["+data.id+"]"} value="c" onChange={this.handleChange(data.id)} />
              <input type="radio" name={"pilih["+data.id+"]"} value="d" onChange={this.handleChange(data.id)} />
              <input type="radio" name={"pilih["+data.id+"]"} value="e" onChange={this.handleChange(data.id)} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default Profile;
