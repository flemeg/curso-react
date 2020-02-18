import React, { Component } from "react";
import InputCustom from "../InputCustom";

class Bet extends Component {
  constructor(props) {
    super(props);
    this.state = { resultados: [] };

    this.addItemToList = e => {
      e.preventDefault();

      var result = this.calculate(this.state.numero2);

      const newitem = { aposta: this.state.aposta, valor: result };
      this.setState({
        resultados: [...this.state.resultados, newitem]
      });
    };

    this.handleApostaChange = e => {
      this.setState({ aposta: e.target.value });
    };

    this.handleNumero2Change = e => {
      this.setState({ numero2: e.target.value });
    };
  }

  calculate(param1) {
    return param1 * param1;
  }

  render() {
    return (
      <div id="layout">
        <div id="main">
          <div className="header">
            <h3>Aposta da quadrada</h3>
          </div>
          <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned">
                <InputCustom
                  id="aposta"
                  type="text"
                  name="aposta"
                  value={this.state.aposta}
                  onChange={this.handleApostaChange}
                  label="Aposta"
                />
                <div className="pure-control-group">
                  <label htmlFor="email">Número 2</label>
                  <input
                    id="numero2"
                    type="text"
                    name="numero2"
                    value={this.state.numero2}
                    onChange={this.handleNumero2Change}
                  />
                </div>
                <div className="pure-control-group">
                  <label></label>
                  <button
                    type="none"
                    onClick={this.addItemToList}
                    className="pure-button pure-button-primary"
                  >
                    Vai
                  </button>
                </div>
              </form>
            </div>
            <div>
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Aposta</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.resultados.map(function(resultado) {
                    return (
                      <tr>
                        <td>{resultado.aposta}</td>
                        <td>{resultado.valor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bet;
