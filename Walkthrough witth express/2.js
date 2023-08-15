// Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express
// ‘/’→ send counter data as {counter:counter}
// `/increment` → increment counter by 1 and send in response latest data as { counter: counter }
// `/decrement` → decrement counter by 1 and send in response latest data as { counter: counter }
// Note: Using Express is Mandatory for this Question


const express = require('express');
const app = express();
const PORT = 3000;

// Initial counter value
let counter = 0;

app.use(express.json());

// Endpoint to get the current counter value
app.get('/', (req, res) => {
    res.json({ counter });
});

// Endpoint to increment the counter by 1
app.post('/increment', (req, res) => {
    counter += 1;
    res.json({ counter });
});

// Endpoint to decrement the counter by 1
app.post('/decrement', (req, res) => {
    counter -= 1;
    res.json({ counter });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});




