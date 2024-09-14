const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Data storage file
const dataFilePath = path.join(__dirname, 'submissions.json');

// Load or create data file
const loadSubmissions = () => {
    try {
        if (fs.existsSync(dataFilePath)) {
            return JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
        }
        return [];
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
};

// Save submissions to file
const saveSubmissions = (submissions) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(submissions, null, 2));
    } catch (err) {
        console.error('Error writing file:', err);
    }
};

// Routes
app.post('/submit', (req, res) => {
    const { submission } = req.body;

    // Validate submission
    if (!submission) {
        return res.status(400).json({ message: 'Submission data is required' });
    }

    const submissions = loadSubmissions();
    submissions.push(submission);
    saveSubmissions(submissions);

    res.status(200).json({ message: 'Submission received!' });
});

app.get('/submissions', (req, res) => {
    try {
        const submissions = loadSubmissions();
        res.status(200).json(submissions);
    } catch (err) {
        console.error('Error loading submissions:', err);
        res.status(500).json({ message: 'Error loading submissions' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
