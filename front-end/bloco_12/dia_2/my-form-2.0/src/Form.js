import React from 'react';

export default class Form extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {

    }

    render() {
        return (
            <fieldset>
                <label htmlFor="name">
                    Nome:
                    <input type="text" name="name" id="name" maxLength='40' required>
                    </input>
                </label>
                <label htmlFor="email">
                    Email:
                    <input type="email" name="email" id="email" maxLength="50" required>
                    </input>
                </label>
                <label htmlFor="cpf">
                    CPF:
                    <input type="text" maxLength="11" name="cpf" id="cpf" required>
                    </input>
                </label>
                <label htmlFor="address">
                    Endereço:
                    <input type="text" maxLength="200" name="address" id="address" pattern="[A-Za-z]{3}" required>
                    </input>
                </label>
                <label htmlFor="city">
                    Cidade:
                    <input type="text" maxLength="28" name="city" id="city" required>
                    </input>
                </label>
                <label htmlFor="state">
                    Estado:
                    <select name="state" id="state" required>
                        <option value='MG'>MG</option>
                        <option value='RJ'>RJ</option>
                        <option value='SP'>SP</option>
                        <option value='TO'>TO</option>
                    </select>
                </label>
                  <label>
                      Tipo:
                      <div>
                        <input type="radio" name="house" value="house" />Casa
                        <input type="radio" name="house" value="Apartment" />Apartamento
                      </div>
                  </label>
            </fieldset>
        )
    }
}