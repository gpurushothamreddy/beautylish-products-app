import { render, screen } from '@testing-library/react';
import App from './App.js';
import ApplyFilterAndSort from "./App";

test('renders learn react link', () => {
    var mockApiResponse = {
        "products": [{
                "deleted": false,
                "price": "$123.45",
                "brand_name": "Hooli",
                "id": 2003,
                "hidden": false,
                "product_name": "Nucleus"
            },
            {
                "deleted": true,
                "price": "$123.45",
                "brand_name": "Wonderful Widgets",
                "id": 1000,
                "hidden": true,
                "product_name": "Widget 3000"
            },
            {
                "deleted": true,
                "price": "$123.45",
                "brand_name": "Acme",
                "id": 2002,
                "hidden": false,
                "product_name": "Mini Anvil"
            },
            {
                "deleted": true,
                "price": "$123.45",
                "brand_name": "Acme",
                "id": 2001,
                "hidden": false,
                "product_name": "Giant Anvil"
            },
            {
                "deleted": false,
                "price": "$99.99",
                "brand_name": "Wonderful Widgets",
                "id": 1002,
                "hidden": false,
                "product_name": "Another Widget"
            },
            {
                "deleted": true,
                "price": "$123.45",
                "brand_name": "Wonderful Widgets",
                "id": 1000,
                "hidden": true,
                "product_name": "Widget 3000"
            },
            {
                "deleted": false,
                "price": "$123.45",
                "brand_name": "Acme",
                "id": 2000,
                "hidden": false,
                "product_name": "Anvil"
            },
            {
                "deleted": false,
                "price": "$99.99",
                "brand_name": "Wonderful Widgets",
                "id": 1001,
                "hidden": false,
                "product_name": "Most Wonderful Widget"
            },
            {
                "deleted": false,
                "price": "$99.99",
                "brand_name": "Acme",
                "id": 2003,
                "hidden": false,
                "product_name": "Anvil - Two Pack"
            }
        ]
    }

    render( < App pros={mockApiResponse} /> );
    const linkElement = screen.getByTestId("products-content");
    expect(linkElement).toBeInTheDocument();
});
