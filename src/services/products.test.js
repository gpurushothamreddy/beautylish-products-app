import { ApplyFilterAndSort, getBrandsCount } from './products.js';

test('ApplyFilterAndSort', () => {
    var mockApiResponse = {
        "products": [{
                "deleted": false,
                "price": "$123.45",
                "brand_name": "Hooli",
                "id": 2003,
                "hidden": true,
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
    var actualProduct = [{ "brand_name": "Wonderful Widgets", "deleted": false, "hidden": false, "id": 1002, "price": "$99.99", "product_name": "Another Widget" }, { "brand_name": "Acme", "deleted": false, "hidden": false, "id": 2003, "price": "$99.99", "product_name": "Anvil - Two Pack" }, { "brand_name": "Wonderful Widgets", "deleted": false, "hidden": false, "id": 1001, "price": "$99.99", "product_name": "Most Wonderful Widget" }, { "brand_name": "Acme", "deleted": false, "hidden": false, "id": 2000, "price": "$123.45", "product_name": "Anvil" }]
    var expectedProducts = ApplyFilterAndSort(mockApiResponse.products)
    expect(expectedProducts).toEqual(actualProduct);
});

test('getBrandsCount', () => {
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
    var expectedProducts = getBrandsCount(mockApiResponse.products)
    expect(expectedProducts).toEqual(3);
});