import { Router } from "express";
import {
  agregarColores,
  mostrarColores,
  eliminarColor,
} from "../controllers/coloreControllers.js";

const router = Router();

router.get("/colores", mostrarColores);
router.post("/colores", agregarColores);

router.delete("/colores/:id", eliminarColor);

export default router;
