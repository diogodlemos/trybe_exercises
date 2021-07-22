import React from 'react';
import './App.css'

class PokemoonCard extends React.Component {
  render(){
    const { name, type, averageWeight, image } = this.props;
    return (
      <section className = 'pokemon-card'>
        <p><strong>{name}</strong></p>
        <p>{type}</p>
        <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src = {image} alt = {name}/>
      </section>
    )
  }

}

export default PokemoonCard;