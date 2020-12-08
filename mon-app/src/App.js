import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      all: [],
      nom: null,
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({value: event.target.value});  }
  handleSubmit(event) { alert('A name was submitted: ' + this.state.value);
                        event.preventDefault();

            fetch(`http://localhost:4242/pokemons/${this.state.value}`)
            .then((res) => {
              return res.json()
            })
            .then((data) => {
                this.setState({
                  resp: JSON.stringify(data),
                  all: data,
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
            })
  }

   async componentDidMount() {
    const response = await fetch(`http://localhost:4242/pokemons`)
    const data = await response.json()
    console.log(data)
    this.setState({
      all: data,
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
    console.log(this.state.all[0])
  }

  render(){
   
    const isAll = this.state.all;
    let all;
    if (!isAll.length == 0) {
      all = <div>
              <CardColumns>
                {this.state.all.sort((a, b) => a.numéro - b.numéro).map((item, i) => {
                  return  <Card>
                            <Card.Img variant="top" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item.numéro || 'no data' }.png`} />
                            <Card.Body>
                              <Card.Title># {item.numéro} - {item.nom}</Card.Title>
                              <Card.Text>
                              <Figure.Caption>Taille : {item.taille} - Poids : {item.poids}</Figure.Caption>
                              <Figure.Caption>Type1 : {item.type1}</Figure.Caption>
                              <Figure.Caption>Type2 : {item.type2}</Figure.Caption>
                              <Figure.Caption>Espèce : {item.espece}</Figure.Caption>
                              <Figure.Caption>Forme : {item.forme}</Figure.Caption>
                              <Figure.Caption>Nom EN : {item.nomen}</Figure.Caption>
                              <Figure.Caption>Nom DE : {item.nomde}</Figure.Caption>
                              <Figure.Caption>Nom TM : {item.nomtm}</Figure.Caption>
                              <Figure.Caption>Nom JA : {item.nomja}</Figure.Caption>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                })}
                  </CardColumns>

            </div>
    } else {
      all = "";
    }

    const isNom = this.state.nom;
    let nom;
    if (isNom) {
      nom = <div>
              <Row className="justify-content-md-center">
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.state.numéro || 'no data' }.png`} class="img-fluid"></img>
              </Row>
              <Row className="justify-content-md-center">
                <h1 class="text-dark"> #{this.state.numéro || 'no data' } {this.state.nom || 'no data' }</h1>
              </Row>
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
            </div>
    } else {
      nom = "";
    }

    return (
      <div className="App">
        <header className="App-header">
        <Container>
          <Jumbotron>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Pokemon number :</Form.Label>
              <Form.Control type="text" value={this.state.value} placeholder="Enter number" onChange={this.handleChange}/>
            </Form.Group>
              <Row className="justify-content-md-center">
                <p>Search for a pokemon of the first generation with its appearance number. Submit nothing to display all the pokemons.</p>
              </Row>
              <Row className="justify-content-md-center">
                <Button variant="primary" type="submit" >Search</Button>
              </Row>
              <hr class="my-4"></hr>

          </Form>
            {/* <h1 class="text-dark"> #{this.state.numéro || 'no data' } {this.state.nom || 'no data' }</h1> */}
            <div isLoggedIn={isNom} />
              {nom}
         
            <div isLoggedIn={isAll} />
              {all}

            {/* <h1 class="text-dark">Identité</h1>
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
            </Row> */}
          </Jumbotron>
        </Container>
        </header>
      </div>
      
    );
  }
}
export default App;