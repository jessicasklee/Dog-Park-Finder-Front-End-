import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const url = "http://localhost:8080/parks"

class Create extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      location: null,
      size: null,
      bathrooms: null,
      parking: null,
      misc: null,
      author: null
    }
  }

  handleNameInput(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleLocationInput(e) {
    this.setState({
      location: e.target.value
    })
  }

  handleSizeInput(e) {
    this.setState({
      size: e.target.value
    })
  }

  handleBathroomInput(e) {
    this.setState({
      bathrooms: e.target.value
    })
  }

  handleParkingInput(e) {
    this.setState({
      parking: e.target.value
    })
  }

  handleCommentsInput(e) {
    this.setState({
      misc: e.target.value
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    axios.post(url, {...this.state})
    .catch((err) => {
      console.log(err)
    })
  }

  componentDidMount() {
    let decoded = jwtDecode(localStorage.token)

    console.log(decoded.email)
    this.setState({
      author: decoded.email
    })
  }

  render() {
   
    return(
      <div>
        <form onSubmit={(e) => this.handleSearchSubmit(e)}>
          <p>Please enter all fields to let the community know about a Dog Park you'd like to share!</p>
          <p>
            <label>Name:</label>
            <textarea onChange={(e) => this.handleNameInput(e)}></textarea>
          </p>
          <p>
            <label>Location: </label>
            <textarea onChange={(e) => this.handleLocationInput(e)}>
            </textarea>
          </p>
          <p>
            <label>Size: </label>
            <textarea onChange={(e) => this.handleSizeInput(e)}>
            </textarea>
          </p>
          <p>
            <label>Bathroom: </label>
            <textarea onChange={(e) => this.handleBathroomInput(e)}>
            </textarea>
          </p>
          <p>
            <label>Parking: </label>
            <textarea onChange={(e) => this.handleParkingInput(e)}>
            </textarea>
          </p>
          <p>
            <label>Comments: </label>
            <textarea onChange={(e) => this.handleCommentsInput(e)}>
            </textarea>
          </p>
          <input type="submit" value="createNewDogPark"/>
        </form>
      </div>
    )
  }
}


export default Create
