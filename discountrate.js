function discount(price, discount){
    const pricelist=[]
    for (let i = 0; i<price.length; i++){
        let total = price[i] - price[i]*discount
        pricelist.push(total)
    }
    return pricelist
}

const discounted_price = discount([100, 200, 300], 0.15);
console.log(discounted_price);