const List = require("./models/list");

const createList = async (req, res) => {
  try {
    const { title, userId, cardId } = req.body;

    const newList = new List({
      title,
      userId,
      cardId,
    });

    await newList.save();

    res.status(201).json(newList);
  } catch (error) {
    console.error("Error al crear la lista:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
const updateList = async (req, res) => {
    try {
      const { listId } = req.params;
      const { title, userId, cardId } = req.body;
  
      
      const updatedList = await List.findByIdAndUpdate(
        listId,
        {
          title,
          userId,
          cardId,
        },
        { new: true }
      );
  
      if (!updatedList) {
        return res.status(404).json({ error: 'Lista no encontrada' });
      }
  
      res.status(200).json(updatedList);
    } catch (error) {
      console.error('Error al actualizar la lista:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  
module.exports = {
    createList,
    updateList,
  }