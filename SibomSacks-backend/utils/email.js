// email.js
import nodemailer from "nodemailer";
import { Provincia, Sector } from "../models/index.js";

// Configurar transportador SMTP con Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mtmartincarrizo@gmail.com",
    pass: "ajrr hrvb fguj abah" // Clave de app, no la contraseña común
  }
});

export async function enviarCorreoContacto({
  empresa,
  nombre,
  apellido,
  correo,
  telefono,
  id_sector,
  id_provincia,
  mensaje
}) {
  const provincia = await Provincia.findByPk(id_provincia);
  const sector = await Sector.findByPk(id_sector);

  const provinciaNombre = provincia?.nombre || `ID ${id_provincia}`;
  const sectorNombre = sector?.nombre || `ID ${id_sector}`;

  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <ul>
      <li><strong>Empresa:</strong> ${empresa || "-"}</li>
      <li><strong>Nombre:</strong> ${nombre} ${apellido}</li>
      <li><strong>Correo:</strong> ${correo}</li>
      <li><strong>Teléfono:</strong> ${telefono || "-"}</li>
      <li><strong>Provincia:</strong> ${provinciaNombre}</li>
      <li><strong>Sector:</strong> ${sectorNombre}</li>
    </ul>
    <p><strong>Mensaje:</strong></p>
    <p>${mensaje}</p>
  `;

  const text = `
Nuevo mensaje de contacto:

Empresa: ${empresa || "-"}
Nombre: ${nombre} ${apellido}
Correo: ${correo}
Teléfono: ${telefono || "-"}
Provincia: ${provinciaNombre}
Sector: ${sectorNombre}
Mensaje: ${mensaje}
  `;

  try {
    const info = await transporter.sendMail({
      from: `"Formulario Web" <mtmartincarrizo@gmail.com>`,
      to: "mtmartincarrizo@gmail.com", // Cambialo si querés otro destino
      replyTo: correo,
      subject: "📩 Nuevo mensaje de contacto desde la web",
      text,
      html
    });

    console.log("✅ Correo enviado:", info.messageId);
  } catch (error) {
    console.error("❌ Error al enviar el correo:", error);
    throw error;
  }
}
