import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productlist.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom'; 

const ProductList = () => {
  // Sample product data (you can replace this with your API data)
  const products = [
    {
      id: 1,
      product_name: 'Product 1',
      Festival: 'Festival 1',
      image: { src: '/Image/product1.jpg' }, 
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 2,
      product_name: 'Product 12',
      Festival: 'Festival 1',
      image: { src: '/Image/product1.jpg' }, 
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 3,
      product_name: 'Product 3',
      Festival: 'Festival 1',
      image: { src: '/Image/product1.jpg' }, 
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 4,
      product_name: 'Product 4',
      Festival: 'Festival 1',
      image: { url: 'product4.jpg' },
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 5,
      product_name: 'Product 5',
      Festival: 'Festival 2',
      image: { url: 'product5.jpg' },
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 6,
      product_name: 'Product 6',
      Festival: 'Festival 1',
      image: { url: 'product6.jpg' },
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 7,
      product_name: 'Product 7',
      Festival: 'Festival 1',
      image: { url: 'product7.jpg' },
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 8,
      product_name: 'Product 8',
      Festival: 'Festival 1',
      image: { url: 'product8.jpg' },
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 9,
      product_name: 'Product 9',
      Festival: 'Festival 2',
      image: { url: 'product9.jpg' },
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 10,
      product_name: 'Product 10',
      Festival: 'Festival 2',
      image: { url: 'product10.jpg' },
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 11,
      product_name: 'Product 11',
      Festival: 'Festival 2',
      image: { url: 'product11.jpg' },
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 12,
      product_name: 'Product 12',
      Festival: 'Festival 2',
      image: { url: 'product12.jpg' },
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 13,
      product_name: 'Product 13',
      Festival: 'Festival 8',
      image: { url: 'product13.jpg' },
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 14,
      product_name: 'Product 14',
      Festival: 'Festival 2',
      image: { url: 'product14.jpg' },
      product_price: 100,
      product_quantity: 10,
    },
    {
      id: 15,
      product_name: 'Product 15',
      Festival: 'Festival 5',
      image: { url: 'product15.jpg' },
      product_price: 100,
      product_quantity: 10,
    },

    {
      id: 16,
      product_name: 'Product 16',
      Festival: 'Festival 3',
      image: { url: 'product16.jpg' },
      product_price: 150,
      product_quantity: 5,
    },
    // Add more products here
  ];

  // Get unique Festival names
  const uniqueCategories = [...new Set(products.map((prod) => prod.Festival))];

  // State to track the selected Festival
  const [selectedFestival, setSelectedFestival] = useState(uniqueCategories[0]);

  // Function to filter products based on the selected Festival
  const filteredProducts = products.filter((prod) => prod.Festival === selectedFestival);

  return (
    <Container>
      <div className="row">
        <div className="col-md-3">
          {/* Festival links */}
          <ul className="Festival-links">
            {uniqueCategories.map((Festival, index) => (
              <li
                key={index}
                className={Festival === selectedFestival ? 'active' : ''}
                onClick={() => setSelectedFestival(Festival)}
              >
                {Festival}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9">
          {/* Product list */}
          <div className="row">
            {filteredProducts.map((prod) => (
              <div className="col-md-12 col-lg-4 mb-4 mb-lg-0" key={prod.id}>
                <Card className="product-card">
                  <Card.Body>
                    <h4 className="mb-0 fw-bold">{prod.product_name}</h4>
                    <img src={prod.image.src} className="card-img-top" alt={prod.product_name} /> {/* Use 'src' */}
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{prod.product_name}</h5>
                      <h5 className="text-dark mb-0">Rs: {prod.product_price}</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2 avail" data-avail={prod.product_quantity}>
                      <p className="text-muted mb-0">
                        Available: <span className="fw-bold">{prod.product_quantity}</span>
                      </p>
                      <div className="ms-auto text-warning">
                        <Link to="/cart">
                          <Button className="book-button" variant="primary">
                            Book
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductList;