const express = require("express");
const prisma = require("../db.js");
const verifyToken = require("../middleware.js");

const router = express.Router();
router.use(verifyToken);

// GET (Mostrar todos los libros del usuario)
router.get("/", async (request, response) => {
  const id = request.user.id;
  const books = await prisma.book.findMany({
    where: {
      userId: id,
    },
  });
  response.send({ books });
});

// POST (Crear un nuevo libro)
router.post("/", async (request, response) => {
  const body = request.body;
  const title = body.title;
  const author = body.author;
  const genre = body.genre;
  const status = body.status;
  const image = body.image;
  const notes = body.notes;
  const id = request.user.id;

  const book = await prisma.book.create({
    data: {
      userId: id,
      title,
      author,
      genre,
      status,
      notes,
      image,
    },
  });
  response.send({ book });
});

// DELETE (Eliminar un libro)
router.delete("/:id", async (request, response) => {
  const id = Number(request.params.id);
  const userId = request.user.id;

  // verificar que el libro existe y pertenece al usuario logeado
  const books = await prisma.book.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (books == null) {
    return response.status(401).json({
      error: "Book not found or does not belong to the user",
    });
  }

  // eliminar libro y devolverlo como respuesta
  const deleteBook = await prisma.book.delete({
    where: {
      id,
    },
  });
  response.send({ deleteBook });
});

// PUT (Editar un libro)
router.put("/:id", async (request, response) => {
  const id = Number(request.params.id);
  const userId = request.user.id;

  // nuevos datos del libro
  const body = request.body;
  const title = body.title;
  const author = body.author;
  const genre = body.genre;
  const status = body.status;
  const image = body.image;
  const notes = body.notes;

  // verificar que el libro existe y pertenece al usuario logeado
  const books = await prisma.book.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (books == null) {
    return response.status(401).json({
      error: "Book not found or does not belong to the user",
    });
  }

  // eliminar libro y devolverlo como respuesta
  const book = await prisma.book.update({
    where: { id },
    data: {
      title,
      author,
      genre,
      status,
      image,
      notes,
    },
  });
  response.send({ book });
});

module.exports = router;
