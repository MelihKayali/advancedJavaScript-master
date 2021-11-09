class Customer{
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1,"11121");
customer.name = "Melo"
console.log(customer.name)

Customer.random = "random"
console.log(Customer.random)

console.log(customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName;
    }
    
}

class CorporateCustomer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName;
    }
    
}