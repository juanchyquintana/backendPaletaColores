import Colore from "../database/models/Colores.js";

const mostrarColores = async (req, res) => {
  try {
    const colores = await Colore.find();
    res.status(202).json(colores);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "No se pudieron encontrar los colores" });
  }
};

const agregarColores = async (req, res) => {
  try {
    const colorAgregado = await Colore.create(req.body);

    await colorAgregado.save();
    res.status(201).json({ msg: "Éxito! Color agregado Correctamente." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Error! No se pudo agregar el color" });
  }
};

const eliminarColor = async (req, res) => {
  try {
    const buscarColor = await Colore.findById(req.params.id);
    if (!buscarColor) {
      return res.status(404).json({ msg: "Color No Encontrado" });
    }

    await Colore.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Color Eliminado Correctamente!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Error! No se pudo eliminar el color" });
  }
};

export { mostrarColores, agregarColores, eliminarColor };
