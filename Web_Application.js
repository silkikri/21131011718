// src/components/AllProducts.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import { Container, Grid, Card, CardContent, Typography, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Laptop');
    const [company, setCompany] = useState('AMZ');
    const [top, setTop] = useState(10);
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(10000);

    useEffect(() => {
        fetchProducts();
    }, [category, company, top, minPrice, maxPrice]);

    const fetchProducts = async () => {
        const data = await getProducts(company, category, top, minPrice, maxPrice);
        setProducts(data);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                {/* Filters */}
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Company</InputLabel>
                        <Select value={company} onChange={(e) => setCompany(e.target.value)}>
                            <MenuItem value="AMZ">Amazon</MenuItem>
                            <MenuItem value="FLP">Flipkart</MenuItem>
                            <MenuItem value="SNP">Snapdeal</MenuItem>
                            <MenuItem value="MYN">Myntra</MenuItem>
                            <MenuItem value="AZO">Alibaba</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <MenuItem value="Laptop">Laptop</MenuItem>
                            <MenuItem value="Phone">Phone</MenuItem>
                            <MenuItem value="TV">TV</MenuItem>
                            <MenuItem value="Earphone">Earphone</MenuItem>
                            <MenuItem value="Tablet">Tablet</MenuItem>
                            {/* Add other categories as needed */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Min Price"
                        type="number"
                        fullWidth
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Max Price"
                        type="number"
                        fullWidth
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Top N"
                        type="number"
                        fullWidth
                        value={top}
                        onChange={(e) => setTop(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{product.name}</Typography>
                                <Typography variant="body1">Company: {product.company}</Typography>
                                <Typography variant="body1">Category: {product.category}</Typography>
                                <Typography variant="body1">Price: ${product.price}</Typography>
                                <Typography variant="body1">Rating: {product.rating}</Typography>
                                <Typography variant="body1">Discount: {product.discount}%</Typography>
                                <Typography variant="body1">Availability: {product.availability}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default AllProducts;
// src/components/AllProducts.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import { Container, Grid, Card, CardContent, Typography, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Laptop');
    const [company, setCompany] = useState('AMZ');
    const [top, setTop] = useState(10);
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(10000);

    useEffect(() => {
        fetchProducts();
    }, [category, company, top, minPrice, maxPrice]);

    const fetchProducts = async () => {
        const data = await getProducts(company, category, top, minPrice, maxPrice);
        setProducts(data);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                {/* Filters */}
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Company</InputLabel>
                        <Select value={company} onChange={(e) => setCompany(e.target.value)}>
                            <MenuItem value="AMZ">Amazon</MenuItem>
                            <MenuItem value="FLP">Flipkart</MenuItem>
                            <MenuItem value="SNP">Snapdeal</MenuItem>
                            <MenuItem value="MYN">Myntra</MenuItem>
                            <MenuItem value="AZO">Alibaba</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <MenuItem value="Laptop">Laptop</MenuItem>
                            <MenuItem value="Phone">Phone</MenuItem>
                            <MenuItem value="TV">TV</MenuItem>
                            <MenuItem value="Earphone">Earphone</MenuItem>
                            <MenuItem value="Tablet">Tablet</MenuItem>
                            {/* Add other categories as needed */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Min Price"
                        type="number"
                        fullWidth
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Max Price"
                        type="number"
                        fullWidth
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Top N"
                        type="number"
                        fullWidth
                        value={top}
                        onChange={(e) => setTop(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{product.name}</Typography>
                                <Typography variant="body1">Company: {product.company}</Typography>
                                <Typography variant="body1">Category: {product.category}</Typography>
                                <Typography variant="body1">Price: ${product.price}</Typography>
                                <Typography variant="body1">Rating: {product.rating}</Typography>
                                <Typography variant="body1">Discount: {product.discount}%</Typography>
                                <Typography variant="body1">Availability: {product.availability}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default AllProducts;
// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardContent, Typography } from '@mui/material';

const ProductDetail = ({ products }) => {
    const { productId } = useParams();
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <Typography variant="h5">Product not found</Typography>;
    }

    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography variant="h5">{product.name}</Typography>
                    <Typography variant="body1">Company: {product.company}</Typography>
                    <Typography variant="body1">Category: {product.category}</Typography>
                    <Typography variant="body1">Price: ${product.price}</Typography>
                    <Typography variant="body1">Rating: {product.rating}</Typography>
                    <Typography variant="body1">Discount: {product.discount}%</Typography>
                    <Typography variant="body1">Availability: {product.availability}</Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ProductDetail;
