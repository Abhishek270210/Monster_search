import React, { Component } from 'react'
import './Searchbox-style.css'
class Searchbox extends Component {
    render() {
      const  { placeholder , handlechange }=this.props
        return (
       <input className="search" type="search" placeholder={placeholder} onChange={handlechange} />
        )
    }
}

export default Searchbox
