import express from "express";
import cors from "cors";
import logger from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { dbProductos } from "./models/index.js";

// Importar rutas
import productoRoutes from "./routes/producto.routes.js";
import provinciasRoutes from "./routes/provincias.routes.js";
import sectoresRoutes from "./routes/sectores.routes.js";
import contactoRoutes from "./routes/contacto.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// __dirname para ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// #region Middlewares

const allowedOrigins = [
  "http://localhost:5173",
  "https://sibomsacks-1.onrender.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(logger("dev"));

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "dist")));

// #region Routers API
app
  .use("/provincias", provinciasRoutes)
  .use("/sectores", sectoresRoutes)
  .use("/contacto", contactoRoutes)
  .use("/productos", productoRoutes);

// Catch-all para rutas de React (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// #region Iniciar servidor
(async function start() {
  try {
    await dbProductos.authenticate();
    console.log("✅ Conexión a la base de datos establecida.");
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:\n", error);
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
})();
