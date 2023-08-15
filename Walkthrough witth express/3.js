// Q.3_Create a Basic Server with Different Routes using Express
// `/`→ send response as { msg: `I am homepage` }
// `/about` → send response as { msg: `I am about page` }
// `/contact ` → send response as { emai::`suppor#@pwskills.com`}

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Route for the homepage
app.get('/', (req, res) => {
    res.json({ msg: 'I am homepage' });
});

// Route for the about page
app.get('/about', (req, res) => {
    res.json({ msg: 'I am about page' });
});

// Route for the contact page
app.get('/contact', (req, res) => {
    res.json({ email: 'support@pwskills.com' });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
