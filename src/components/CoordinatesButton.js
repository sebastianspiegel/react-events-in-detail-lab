// Code CoordinatesButton Component Here

import React from 'react'

class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        let array = []
        array.push(event.clientX)
        array.push(event.clientY)
        this.props.onReceiveCoordinates(array)
    }

    render(){
        return <button onClick={this.handleClick}></button>
    }
}

export default CoordinatesButton