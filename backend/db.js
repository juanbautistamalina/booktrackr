// db.js
const { PrismaClient } = require("@prisma/client");
// Instancia el cliente y reutilízalo (patrón singleton)
const prisma = new PrismaClient();
module.exports = prisma;
