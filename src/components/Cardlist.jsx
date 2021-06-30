import React, { Component } from 'react'
import './Card-list-style.css'
import Card from './Card'
class Cardlist extends Component {
    render() {
        return (
            <div className="card-list">
             {
                 
                 this.props.monsters.map(monster=><Card key={monster.id} monster={monster}></Card>)

             }
            </div>
        )
    }
}

export default Cardlist
