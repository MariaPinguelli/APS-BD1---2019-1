import React, { Component } from 'react'
import axios from 'axios';

export default class Catalogo extends Component {
    constructor(props){
        super(props);

        this.state = {
            flor: []
        };
    }
    componentDidMount() {
        const url = `localhost:3000/flor/`;
        axios.get(url).then(res => res.data)
        .then((data) => {
          this.setState({ flor: data })
          console.log(this.state.flor)
        })
    }

    render() {
        return (
            <div>
                <h1>Catalogo</h1>
            </div>
        )
    }
}
