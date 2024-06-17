let product = {
    Product_name : 'Basketball',
    price : 2095
}

product.price = 2595;
console.log(product.price);

product['delivery-time'] = '3 Days';
console.log(product);

let product2 = {
    product_name : 'shoes',
    price : 2990
}

let product_3 = {
    product_name : 'SLIPPERS',
    price : 2480
}

let repeat_count = 3;

function compare_price(){
    if (product2.price !== product_3.price){
        console.log(product_3.price);
    }
}

compare_price()

if (product2.price && product2.product_name === product_3.product_name && product_3.price){
    console.log('TRUE');
}
else{
    console.log('FALSE');
}

console.log(product_3.product_name);
console.log(product_3.product_name.toLocaleLowerCase());
console.log(product2.product_name.repeat(repeat_count));