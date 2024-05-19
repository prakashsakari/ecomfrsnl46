export const getPriceSortedProducts = (products, type) => {
    if (type?.length === 0){
        return products
    }
    if (type === 'lth'){
        return [...products].sort((a, b) => a.discountedPrice - b.discountedPrice)
    }
    if (type === 'htl'){
        return [...products].sort((a, b) => b.discountedPrice - a.discountedPrice)
    }
    else {
        return products
    }
}

export const getDiscountedProducts = (products, discount) => discount > 0 ? products.filter(product => product?.discountPercentage >= discount) : products;