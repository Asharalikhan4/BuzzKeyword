const keyword = require('../models/keyword');

exports.setKeywordAndCount = async (req, res) => {
    const { word } = req.body;
    try {
        const existingKeyword = await keyword.findOne({ word });
        if (existingKeyword) {
            existingKeyword.count++;
            await existingKeyword.save();
            res.status(200).json({ message: 'Keyword count updated successfully.' });
        } else {
            const newKeyword = new keyword({ word });
            await newKeyword.save();
            res.status(200).json({ message: 'New keyword added successfully.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getKeywordAndCount = async (req, res) => {
    try {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const keywords = await keyword.find({ createdAt: { $gte: thirtyDaysAgo } }).sort({ count: -1 });
        res.status(200).json({ keywords });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};