function validateLinkedInURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if (regex.test(url)) {
        console.log(`"${url}" is a valid LinkedIn profile URL.`);
    } else {
        console.log(`"${url}" is not a valid LinkedIn profile URL.`);
    }
}

// Test cases
const profileURLs = [
    "https://www.linkedin.com/in/john-doe",
    "https://www.linkedin.com/in/jane_smith123",
    "https://www.linkedin.com/in/developer_123456",
    "https://www.linkedin.com/in/alexander",
    "https://www.linkedin.com/in/johndoe12345678901234567890123",
    "https://www.linkedin.com/in/invalid@profile"
];

for (const url of profileURLs) {
    validateLinkedInURL(url);
}
