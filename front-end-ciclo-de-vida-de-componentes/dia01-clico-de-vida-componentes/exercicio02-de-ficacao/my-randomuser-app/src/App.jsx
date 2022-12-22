import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      result: [],
      loading: true,
    }
  }

  fetchApi = async () => {
    const fetcher = await fetch('https://api.randomuser.me/');
    const response = await fetcher.json();
    console.log(response)
    this.setState({result: response.results, loading: false })
  }


  componentDidMount() {

    this.fetchApi();

  }

  render() {
    const {result} = this.state
    return (
      <div>{result.map(({gender, email, registered: {age}, picture: {large}, phone}) => {
        return <><div>{gender} - {email} - {age} - {phone}</div><img src={large} alt="as" /></>
      }
        )}</div>
    )
  }
}
