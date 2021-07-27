import React from 'react';

export default class Job extends React.Component {
  render() {
    return (
      <fieldset className="form">
        <label>
          Resumo do Currículo:<br/>
          <textarea maxLength="1000" required></textarea>
        </label>

        <label>
          Cargo:<br/>
          <textarea maxLength="40" required></textarea>
        </label>

        <label>
          Descrição do Cargo:<br/>
          <textarea maxLength="500" required></textarea>
        </label>
        <button className="buttons">Cadastrar Currículo</button>
        <button className="buttons">Limpar</button>
      </fieldset>
    )
  }
}