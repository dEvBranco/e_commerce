import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '€5', image:'https://cdn1.dynafit.com/media/image/f0/69/2c/Dynafit_S20_Running-Shoes_Women_800x800.jpg' },
    {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '€10', image:'https://www.discoazul.pt/uploads/media/images/apple-macbook-pro-8gb-256gb-gris-espacial-myd82y-a-12.jpg' },
];

const Products = () => {
    return(
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;