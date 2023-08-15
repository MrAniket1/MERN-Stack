// Q.1 Build a Server Using Http Module NodejS with api endpoints for Getting Products Data
// ‘/’ → send msg as “Welcome to Men & Women Dummy Data
// ‘/men’ → send 10 products data of mens
// ‘/women’ → send 10 products data of womes
// ‘/other’  → send response as page not found
// Hint: You can use any data, send data in json format

const http = require('http');

// Sample product data
let menProducts = []; // Array of men's products
let womenProducts = []; // Array of women's products

womenProducts = [
    {
        "id": 1,
        "name": "Women's T-Shirt",
        "category": "Clothing",
        "price": 19.99
    },
    {
        "id": 2,
        "name": "Women's Jeans",
        "category": "Clothing",
        "price": 39.99
    },
    {
        "id": 3,
        "name": "Women's Sneakers",
        "category": "Footwear",
        "price": 49.99
    },
    {
        "id": 4,
        "name": "Women's Dress",
        "category": "Clothing",
        "price": 59.99
    },
    {
        "id": 5,
        "name": "Women's Handbag",
        "category": "Accessories",
        "price": 29.99
    },
    {
        "id": 6,
        "name": "Women's Earrings",
        "category": "Jewelry",
        "price": 14.99
    },
    {
        "id": 7,
        "name": "Women's Sunglasses",
        "category": "Accessories",
        "price": 24.99
    },
    {
        "id": 8,
        "name": "Women's Sweater",
        "category": "Clothing",
        "price": 34.99
    },
    {
        "id": 9,
        "name": "Women's Watch",
        "category": "Accessories",
        "price": 39.99
    },
    {
        "id": 10,
        "name": "Women's Skirt",
        "category": "Clothing",
        "price": 29.99
    }
];

menProducts = [
    {
        "id": 1,
        "name": "Men's Polo Shirt",
        "category": "Clothing",
        "price": 24.99
    },
    {
        "id": 2,
        "name": "Men's Chinos",
        "category": "Clothing",
        "price": 44.99
    },
    {
        "id": 3,
        "name": "Men's Sneakers",
        "category": "Footwear",
        "price": 59.99
    },
    {
        "id": 4,
        "name": "Men's Jacket",
        "category": "Clothing",
        "price": 79.99
    },
    {
        "id": 5,
        "name": "Men's Backpack",
        "category": "Accessories",
        "price": 39.99
    },
    {
        "id": 6,
        "name": "Men's Tie",
        "category": "Accessories",
        "price": 19.99
    },
    {
        "id": 7,
        "name": "Men's Sunglasses",
        "category": "Accessories",
        "price": 29.99
    },
    {
        "id": 8,
        "name": "Men's Sweater",
        "category": "Clothing",
        "price": 39.99
    },
    {
        "id": 9,
        "name": "Men's Watch",
        "category": "Accessories",
        "price": 59.99
    },
    {
        "id": 10,
        "name": "Men's Jeans",
        "category": "Clothing",
        "price": 49.99
    }
];


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Root endpoint
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Welcome to Men & Women Dummy Data");
    } else if (req.url === '/men') {
        // Men endpoint
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        // Women endpoint
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(womenProducts));
    } else {
        // Other endpoint
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
