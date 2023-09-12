const Card = require('../models/card')

const getCards = async (req, res) => {

    const cards = await Card.find({});

    if (!cards || cards.length === 0) {
        return res.status(404).json({
            message: "No se encontraron facturas"
        });
    }
    res.status(200).json(cards);

};

const getCardById = async (req, res) => {
    const idCard = req.params.idCard
    const oneCard = await Card.findById(idCard)
    res.json(oneCard)
}
const createCard = async (req, res) => {
    const cardData = req.body;
    const newCard = new Card(cardData);
    await newCard.save();
    res.status(201).json(newCard);
}
const updateCard = async (req, res) => {
    const {
        cardId
    } = req.params;
    const existingCard = await Card.findById(cardId);
    Object.assign(existingCard, req.body);
    await existingCard.save();
    res.status(200).json(existingCard)
}
const deleteCard = async (req, res) => {
    const {
        cardId
    } = req.params;
    const existingCard = await Card.findById(cardId);
    await existingCard.remove();
}

module.exports = {
    getCards,
    getCardById,
    createCard,
    updateCard,
    deleteCard,
};