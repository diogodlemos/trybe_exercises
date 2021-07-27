import React from 'react';

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
          name: '',
          email: '',
          cpf: '',
          address: '',
          city: '',
          state: 'Minas Gerais',
          house: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this)
    }

    handleChange({ target }) {
      this.setState({
        [target.name]: target.value,
      });
    }

    handleClear() {
      this.setState({    
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        state: 'Minas Gerais',
        house: '',
      })
    }

    render() {
        const { name, email, cpf, address, city } = this.state;
        return (
            <fieldset className="form">
                <label htmlFor="name">
                    Nome:<br/>
                    <input 
                        type="text"
                        value={name}
                        name="name"
                        id="name"
                        maxLength='40'
                        onChange={this.handleChange}
                        required />
                </label>
                <label htmlFor="email">
                    Email:<br/>
                    <input type="email"
                    name="email"
                    id="email"
                    maxLength="50"
                    value={email}
                    onChange={this.handleChange}
                    required/>
                </label>
                <label htmlFor="cpf">
                    CPF:<br/>
                    <input
                      type="text"
                      maxLength="11"
                      name="cpf"
                      id="cpf"
                      value={cpf}
                      onChange={this.handleChange}
                      required />
                </label>
                <label htmlFor="address">
                    Endereço:<br/>
                    <input
                      type="text"
                      maxLength="200"
                      name="address"
                      id="address"
                      value={address}
                      onChange={this.handleChange}
                      pattern="[A-Za-z]{3}" 
                      required />
                </label>
                <label htmlFor="city">
                    Cidade:<br/>
                    <input
                      type="text"
                      maxLength="28"
                      name="city"
                      id="city"
                      value={city}
                      onChange={this.handleChange}
                      required />
                </label>
                <label htmlFor="state">
                    Estado:
                    <select name="state" id="state" onChange={ this.handleChange } required>
                        <option value='Minas Gerais'>MG</option>
                        <option value='Rio de Janeiro'>RJ</option>
                        <option value='São Paulo'>SP</option>
                        <option value='Tocantins'>TO</option>
                    </select>
                </label>
                  <label>
                      Tipo:<br/>
                      <div>
                        <input type="radio" name="house" value='Casa' onChange={this.handleChange}/>Casa
                        <input type="radio" name="house" value='Apartamento' onChange={this.handleChange}/>Apartamento
                      </div>
                  </label>
                  <button className="buttons">Cadastrar Currículo</button>
                  <button className="buttons" onClick={ this.handleClear }>Limpar</button>
            </fieldset>
        )
    }
}