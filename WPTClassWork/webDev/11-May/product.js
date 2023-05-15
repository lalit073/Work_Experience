export default class Product
{
    constructor(pn,pcost,brand)
    {
        this.productName = pn
        this.pcost=pcost
        this.brandname = brand
    }
    show()
    {
        console.log("the product info is : ",this.productName,this.pcost,this.brandname)
    }
}

let purva=new Product("Human",1000,"Lalit")
purva.show()


