import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  btnFunc1 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
    }), () => {
      console.log(`A cor do botão 1 é ${this.buttonColor(this.state.numeroDeCliques1)}`)
    })
  }

  btnFunc2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }), () => {
      console.log(`A cor do botão 2 é ${this.buttonColor(this.state.numeroDeCliques2)}`)
    })
  }

  btnFunc3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
    }), () => {
      const {'numeroDeCliques3': clique3} = this.state
      console.log(`A cor do botão 3 é ${this.buttonColor(clique3)}`)
    })
  }

  buttonColor = (number) => number % 2 === 0 ? 'purple' : 'gray';

  render() {
    return (
      <div>
        <button onClick={ this.btnFunc1 } style={ {backgroundColor: this.buttonColor(this.state.numeroDeCliques1)} }>texto do click { this.state.numeroDeCliques1 }</button>

        <button onClick={ this.btnFunc2 } style={{backgroundColor: this.buttonColor(this.state.numeroDeCliques2)}}>texto do click { this.state.numeroDeCliques2 }</button>

        <button onClick={ this.btnFunc3 } style={{backgroundColor: this.buttonColor(this.state.numeroDeCliques3)}}>texto do click { this.state.numeroDeCliques3 }</button>
      </div>
    )
  }
}

export default App;
