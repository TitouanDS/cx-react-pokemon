import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      pokemon: null,
      index: null,
      nomen: null,
      nomja: null,
      espece: null,
      taille: null,
      numéro: null,
      nomde: null,
      nomtm: null,
      type1: null,
      type2: null,
      forme: null,
      poids: null,
      couleur: null,
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:4242/pokemons/001')
    const data = await response.json()
    this.setState({
      pokemon: data.nom,
      numéro: data.numéro,
      nomen: data.nomen,
      nom: data.nom,
      nomja: data.nomja,
      espece: data.espece,
      taille: data.taille,
      type1: data.type1,
      type2: data.type2,
      forme: data.forme,
      poids: data.poids,
      nomde: data.nomde,
      nomtm: data.nomtm,
      type1: data.type1,
      type2: data.type2,
      forme: data.forme,
      couleur: data.couleur,



    })
    //console.log(data)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <p>
          Welcome into POKEDEX
        </p>
        <Container>
          <Jumbotron>
            <h1 class="text-dark"> #{this.state.numéro || 'no data' } {this.state.pokemon || 'no data' }</h1>
            <hr class="my-4"></hr>

            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.state.numéro || 'no data' }.png`} class="img-thumbnail"></img>
            <hr class="my-4"></hr>
            
            <h1 class="text-dark">Identité</h1>
            <hr class="my-4"></hr>

            <Row>

            <Col>
              <Table striped borderless hover class="bg-light">
                <tbody>
                  <tr>
                    <td>Couleur</td>
                    <td>{this.state.couleur || 'no data' }</td>
                  </tr>
                  <tr>
                    <td>Espece</td>
                    <td>{this.state.espece || 'no data' }</td>
                  </tr>
                  <tr>
                    <td>Type 1</td>
                    <td>{this.state.type1 || 'no data' }</td>
                  </tr>
                  <tr>
                    <td>Type 2</td>
                    <td>{this.state.type2 || 'no data' }</td>
                  </tr>
                  <tr>
                    <td>Taille</td>
                    <td>{this.state.taille || 'no data' }</td>
                  </tr>
                  <tr>
                    <td>Poids</td>
                    <td>{this.state.poids || 'no data' }</td>
                  </tr>
                  <tr>
                    <td>Forme</td>
                    <td>{this.state.forme || 'no data' }</td>
                  </tr>
                </tbody>
              </Table>
              </Col>
              <Col>
              <Table striped borderless hover class="bg-light">
                <tbody>
                  <tr>
                    <td>Pokémon</td>
                    <td>{this.state.nom || 'no data' }</td>
                  </tr>
                  <tr>
                    <td>Nom FR</td>
                    <td>{this.state.nom || 'no data' }</td>
                  </tr>
                  <tr>
                    <td>Nom EN</td>
                    <td>{this.state.nomen || 'no data' }</td>
                  </tr>
                  <tr>
                    <td>Nom DE</td>
                    <td>{this.state.nomde || 'no data' }</td>
                  </tr>
                  <tr>
                    <td>Nom TM</td>
                    <td>{this.state.nomtm || 'no data' }</td>
                  </tr>
                  <tr>
                    <td>Nom JA</td>
                    <td>{this.state.nomja || 'no data' }</td>
                  </tr>
                </tbody>
              </Table>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
        </header>
      </div>
      
    );
  }
}
export default App;