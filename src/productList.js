// ProductList.js
import React, { Component } from 'react';
import axios from 'axios';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteredProducts: [],
            filter: 'all' // Default filter
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                this.setState({
                    products: response.data,
                    filteredProducts: response.data
                });
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    };

    handleFilterChange = (category) => {
        if (category === 'all') {
            this.setState({
                filteredProducts: this.state.products,
                filter: category
            });
        } else {
            const filtered = this.state.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
            this.setState({
                filteredProducts: filtered,
                filter: category
            });
        }
    };

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.handleFilterChange('all')}>All</button>
                    <button onClick={() => this.handleFilterChange('men')}>Men</button>
                    <button onClick={() => this.handleFilterChange('women')}>Women</button>
                </div>
                <div>
                    {this.state.filteredProducts.map(product => (
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <img src={product.image} alt={product.title} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ProductList;
