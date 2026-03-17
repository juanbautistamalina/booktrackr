const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Obtener el header
  const authHeader = req.headers["authorization"];

  // Verificar si existe y tiene el formato "Bearer <token>"
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Token no proporcionado o formato inválido" });
  }

  // Extraer el token (segunda parte del array dividido)
  const token = authHeader.split(" ")[1];

  try {
    // Verificar el token con la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Guardar datos para usar en rutas
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token inválido o expirado" });
  }
};

module.exports = verifyToken