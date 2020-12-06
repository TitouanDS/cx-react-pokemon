import React from 'react'
import './App.css';

class AllPokemons extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      pokemon: null,
      index: null
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:4242/pokemons/001')
    const data = await response.json()
    this.setState({pokemon: data.nom,
      index: data.numéro
    })
    //console.log(data)
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <span> JSON : {this.state.pokemon || 'no data' } </span>
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.state.index || 'no data' }.png`}></img>

        </header>
      </div>
      
    );
  }
}
export default AllPokemons;