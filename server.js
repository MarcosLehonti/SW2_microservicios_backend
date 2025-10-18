import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Aquí irán tus rutas o microservicios
app.get("/", (req, res) => {
  res.send("Servidor backend con PostgreSQL funcionando ✅");
});

// 🔹 Sincroniza Sequelize (opcional)
await sequelize.sync({ alter: true });

// 🔹 Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});
