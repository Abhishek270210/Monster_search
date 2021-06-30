import React, { Component } from 'react'
import './Card-style.css'
class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <img src={`https://robohash.org/${this.props.monster.id}?set=set2&`} alt=""/>
               <h2>{this.props.monster.name}</h2>
               <p>Email: {this.props.monster.email}</p>
            </div>
        )
    }
}

export default Card
