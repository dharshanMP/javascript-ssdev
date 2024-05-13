// Restaurant order cost

num = 10 + (3*8) + 5
console.log(num);

// for each person

num = (10 + (3*8) + 5)/3
console.log(num);

// purchase of clothes with tax 10% & 20%

cost = 18.50 + 7.50*2
amt_10_percent = cost*0.1 //for 10%
amt_20_percent = cost*0.2 //for 20%

console.log(cost);
console.log(amt_10_percent);
console.log(amt_20_percent);


// cost products before shipping

basket_ball = 2095
t_shirt = 799
toaster = 1899
shipping = 499

cost_of_purchase = basket_ball + t_shirt + toaster
console.log(cost_of_purchase/100);



// total cost before adding tax

total_before_tax = cost_of_purchase + shipping
console.log(total_before_tax/100);

// 10% tax with math.round 

tax = total_before_tax * 0.1
console.log(Math.round(tax)/100);

// total amt with tax

total_amt = total_before_tax + tax
console.log(Math.round(total_amt)/100);

// ceil operator
a = 2.2
console.log(Math.ceil(a));

// temperature celsius to fahrenheit

c = 25
fahrenheit = (c*9/5)+32
console.log(fahrenheit);

// fahrenheit to celsius

f = 86
celsius = (f - 32)*5/9
console.log(celsius);

// celsius to fahrenheit

c = -5
fahrenheit_n = (c*9/5)+32
console.log(fahrenheit_n);
