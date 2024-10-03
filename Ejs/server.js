const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Load JSON data from the data file
const dataFilePath = path.join(__dirname, 'data.json');

// Helper function to load items from JSON file
function loadItems() {
    return JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
}

// Helper function to save items to JSON file
function saveItems(items) {
    fs.writeFileSync(dataFilePath, JSON.stringify(items, null, 2), 'utf-8');
}

// Render the main page with items from the JSON file
app.get('/', (req, res) => {
    let items = loadItems();
    res.render('index', { items });  // Assuming the template file is named 'index.ejs'
});

// Add a new item to the list
app.post('/add-item', (req, res) => {
    let items = loadItems();
    const { name, price, description, image } = req.body;

    // Add the new item to the items array
    items.push({ name, price, description, image });

    // Save the updated list back to the JSON file
    saveItems(items);

    res.status(200).json({ message: 'Item added successfully' });
});

// Delete an item from the list based on its index
app.delete('/delete-item/:index', (req, res) => {
    let items = loadItems();
    const index = parseInt(req.params.index);

    // Check if the index is valid
    if (index >= 0 && index < items.length) {
        items.splice(index, 1);
        saveItems(items);  // Save the updated list to the JSON file
        res.status(200).json({ message: 'Item deleted successfully' });
    } else {
        res.status(400).json({ message: 'Invalid index' });
    }
});
// Update an item in the list based on its index
app.put('/update-item/:index', (req, res) => {
    let items = loadItems();
    const index = parseInt(req.params.index);
    const { name, price, description, image } = req.body;

    // Check if the index is valid
    if (index >= 0 && index < items.length) {
        // Update the item details
        items[index] = { name, price, description, image };
        saveItems(items);  // Save the updated list to the JSON file
        res.status(200).json({ message: 'Item updated successfully' });
    } else {
        res.status(400).json({ message: 'Invalid index' });
    }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
