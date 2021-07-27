import './App.css';
import React from 'react'
import Form from './Form';
import Job from './Job';

class App extends React.Component {

  render() {
    return (
      <div className="main-container">
        <h1>Cadastro de Currículos</h1>
        <div className="container-forms">
          <Form />
          <Job />
        </div>
        {/* <div>
          <button className="buttons">Cadastrar Currículo</button>
          <button className="buttons">Limpar</button>
        </div> */}
      </div>
    );
  } 
}

export default App;
