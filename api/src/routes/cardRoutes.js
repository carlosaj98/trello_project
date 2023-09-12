

const {
    getCards,
    getCardById,
    createCard,
    updateCard,
    deleteCard,
} = require("../controllers/card");

const router = express.Router();

// Rutas para obtener 
router.get("/api/card", getCards); 
router.get("/api/card/:cardId", getCardById); 

// Rutas para crear 
router.post("/api/card", createCard); 


// Ruta para actualizar 
router.put("/api/card/:cardId", updateCard); 



// Ruta para eliminar 
router.delete("/api/card/:cardId", deleteCard);

module.exports = router;