const express = require("express");
const bcrypt = require("bcrypt");
const prisma = require("../db.js");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const router = express.Router();
router.use(express.json());

router.post("/register", async (request, response) => {
  const { email, password } = request.body;

  if (email == undefined) {
    return response.status(400).json({ error: "Email requerido" });
  } else if (password == undefined) {
    return response.status(400).json({ error: "Contraseña requerida" });
  }

  const passwordHash = await bcrypt.hash(password, saltRounds);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: passwordHash,
      },
    });

    response.status(201).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    return response.status(400).json({ error: "El email ya está registrado" });
  }

  response.status(201).json({
    id: user.id,
    email: user.email,
  });
});

router.post("/login", async (request, response) => {
  const { email, password } = request.body;

  if (email == undefined) {
    return response.status(400).json({ error: "Email requerido" });
  } else if (password == undefined) {
    return response.status(400).json({ error: "Contraseña requerida" });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return response
      .status(401)
      .json({ error: "Email o contraseña incorrectos" });
  }

  const validation = await bcrypt.compare(password, user.password);

  if (!validation) {
    return response
      .status(401)
      .json({ error: "Email o contraseña incorrectos" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );

  response.send({ token });
});

module.exports = router;
