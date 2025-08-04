import express from "express";
import cors from "cors";
import logger from "morgan"; // Si estás usando morgan como logger
import { dbProductos } from "./models/index.js"; // Cambiado para usar dbProductos desde models/index.js

// Importar rutas
import productoRoutes from "./routes/producto.routes.js";
import provinciasRoutes from "./routes/provincias.routes.js";
import sectoresRoutes from "./routes/sectores.routes.js";
import contactoRoutes from "./routes/contacto.routes.js"; // Importar la ruta de contacto

const app = express();
const PORT = 3000;

// #region Middlewares
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

app.use(logger("dev")); // O solo `app.use(logger)` si ya es una función definida por vos
// #endregion

// Página de inicio básica
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Servidor Express</title>
        <style>
          body { background-color: #f2f2f2; font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; }
          .container { background: #fff; padding: 2rem; border-radius: 12px; box-shadow: 0 0 12px rgba(0,0,0,0.1); text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>API SIBOMSACKS</h1>
          <p>Servidor corriendo en <strong>http://localhost:${PORT}</strong></p>
        </div>
      </body>
    </html>
  `);
});

// #region Routers
app
  .use("/provincias", provinciasRoutes)
  .use("/sectores", sectoresRoutes)
  .use("/contacto", contactoRoutes)
  .use("/productos", productoRoutes);

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// #region Iniciar servidor
(async function start() {
  try {
    await dbProductos.authenticate(); // Cambiado para usar dbProductos
    console.log("✅ Conexión a la base de datos establecida.");
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:\n", error);
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}());
// #endregion
