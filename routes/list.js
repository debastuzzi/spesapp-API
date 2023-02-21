const express = require("express");
const router = express.Router();
const ListItem = require("../models/List");

// Get all Items 
router.get("/", async (req, res) => {
    try {
        const items = await ListItem.find();
        res.json(items);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})


//  Create New Item 
router.post("/", async (req, res) => {
    try {
        const newItem = new ListItem({
            name: req.body.name,
            qty: req.body.qty
        })
        await newItem.save();
        res.json(newItem)
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
})

// Get single item by ID
router.get("/:itemId", async (req, res) => {
    try {
        const { itemId } = req.params;
        const foundItem = await ListItem.findById(itemId);
        res.json(foundItem);
    } catch (e) {
        res.status(404).json({ message: e.message })
    }
})

// Update single item by using ID
router.patch("/:itemId", async (req, res) => {
    try {
        const { itemId } = req.params;
        let update = req.body.qty;
        const response = await ListItem.findByIdAndUpdate(itemId, { qty: update });
        await response.save()
        res.json(response);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

// Delete Signle Item from list by using id
router.delete("/:itemId", async (req, res) => {
    try {
        const { itemId } = req.params;
        const foundItem = await ListItem.findByIdAndDelete(itemId);
        res.json({ message: "Item deleted" });
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

module.exports = router;