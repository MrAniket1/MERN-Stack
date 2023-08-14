function validateURL(url) {
    const regex = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[.][a-zA-Z]+$/;

    if (regex.test(url)) {
        console.log(`"${url}" is a valid URL.`);
    } else {
        console.log(`"${url}" is not a valid URL.`);
    }
}

// Test cases
const urls = [
    "http://www.example.com",
    "https://www.example.com",
    "http://subdomain.example.com",
    "https://subdomain.example.com",
    "http://123.45",
    "https://123.45",
    "ftp://www.example.com"
];

for (const url of urls) {
    validateURL(url);
}
