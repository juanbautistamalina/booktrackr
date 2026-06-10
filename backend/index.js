const express = require("express");
const authRouter = require("./routes/auth.js");
const booksRouter = require("./routes/books.js");
const prisma = require("./db.js");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json({ limit: "10mb" }));

app.get("/health", async (req, res) => {
  try {
    await prisma.book.findFirst({
      select: { id: true },
    });

    res.status(200).json({
      status: "ok",
      database: "connected",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

app.use("/api/auth", authRouter);
app.use("/api/books", booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
