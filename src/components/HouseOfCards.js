import React, { Component } from "react";
import Card from "./Card";

export default class HouseOfCards extends Component {
  constructor(props) {
    super(props);

    this.state = { cards: [], count: 1 };

    this.addCard();
  }

  addCard = () => {
    var card = { name: "novo", value: this.state.count };

    this.setState({
      cards: [...this.state.cards, card]
    });
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <div className="header">
          <h2>Stateful</h2>
          <button
            type="none"
            onClick={this.addCard}
            className="pure-button pure-button-active"
          >
            Adicionar
          </button>
          <p /> 
        </div>
        <div className="content" id="content">
          <div className="pure g">
            {this.state.cards.map(function(card, index) {
              return <Card key={index} title={card.name} value={card.value} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
