

const catalog = [
    {
        "title" :"Banana",
        "image" :"banana.png",
        "price" :"2.99",
        "category" :"fruits",
        "id" :"1",
    },
    {
        "title" :"Cheese",
        "image" :"cheese.png",
        "price" :"4.99",
        "category" :"dairy",
        "id" :"2",
    },
    
    {
        "title" :"Coffee",
        "image" :"coffee.png",
        "price" :"3.99",
        "category" :"beverages",
        "id" :"3",
    },
    
    {
        "title" :"Hoodie",
        "image" :"hoodie.png",
        "price" :"29.99",
        "category" :"clothing",
        "id" :"4",
    },
    
    {
        "title" :"Milk",
        "image" :"milk.png",
        "price" :"1.99",
        "category" :"dairy",
        "id" :"5",
    },
    
    {
        "title" :"Oranges",
        "image" :"oranges.png",
        "price" :"3.49",
        "category" :"fruits",
        "id" :"6",
    },
    
    {
        "title" :"Steak",
        "image" :"steak.jpeg",
        "price" :"19.99",
        "category" :"meat",
        "id" :"7",
    },
    
    {
        "title" :"Tea",
        "image" :"tea.jpg",
        "price" :"2.49",
        "category" :"beverages",
        "id" :"8",
    },
    
    {
        "title" :"Teapot",
        "image" :"teapot.jpg",
        "price" :"24.99",
        "category" :"kitchen",
        "id" :"9",
    },
    
    {
        "title" :"Vitamins",
        "image" :"vitamins.png",
        "price" :"19.99",
        "category" :"health",
        "id" :"10",
    },


]

class DataService{
    getProducts(){
        return catalog
    }

}

export default DataService