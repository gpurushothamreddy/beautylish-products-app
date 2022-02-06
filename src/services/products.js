export function getProductList() {
    return fetch("https://www.beautylish.com/rest/interview-product/list")
        .then(response => {
            return response.json()
        })
        .then(data => {
            var finalProducts = ApplyFilterAndSort(data.products);
            return finalProducts;
        })
}

function uniqByKeepLastProduct(a, key) {
    return [
        ...new Map(
            a.map(x => [key(x), x])
        ).values()
    ]
}

export function ApplyFilterAndSort(products) {
    // Filter out any products that are hidden or deleted.
    var filterActiveProducts = products.filter(function(el) {
        return !el.hidden && !el.deleted;
    });
    // Sort by lowest to highest price.
    filterActiveProducts.sort((a, b) => (Number(a.price.substring(1, a.price.length)) > Number(b.price.substring(1, b.price.length)) ? 1 : -1));
    // If two items have the same price, sort by name.
    filterActiveProducts.sort((a, b) => {
            if (a.price == b.price) {
                if (a.product_name > b.product_name) {
                    return 1;
                } else {
                    return -1;
                }
            }
        })
        // if the same product is included twice, only display it once.
    var uniqProductsWithSamePrice = uniqByKeepLastProduct(filterActiveProducts, data => data.product_name);
    return uniqProductsWithSamePrice;
}

// Get uniq brands count
export function getBrandsCount(products) {
    var newArr = [];
    for (var i = 0; i < products.length; i++) {
        if (newArr.indexOf(products[i].brand_name) === -1) {
            newArr.push(products[i].brand_name);
        }
    }
    return newArr.length
}