import React, { Component } from 'react';
import Item from './Item';

class List extends Component{
    state = {
        newValue: '',
        values: []
    };

    componentDidMount() {
        const values = localStorage.getItem('values');

        if (values) {
            this.setState({ values: JSON.parse(values) })
        }
    }
    
    componentDidUpdate(_, prevState) {
        if (prevState.values != this.state.values) {
           localStorage.setItem('values', JSON.stringify(this.state.values)) 
        }
    }

    componentWillUnmount() {
        
    }

    handleInputChange = e => {
        this.setState({ newValue: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ 
            values: [...this.state.values, this.state.newValue],
            newValue: ''
        })
    }

    handleDelete = (value) => {
        this.setState({ 
            values: this.state.values.filter(t => t != value)
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Welcome</h1>
                <ul>
                    {this.state.values.map(value => 
                        <Item 
                            key={value} 
                            value={value} 
                            onDelete={() => this.handleDelete(value)} 
                        />
                    )}
                </ul>
                <input 
                    type="text" 
                    onChange={this.handleInputChange} 
                    value={this.state.newValue}
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default List;