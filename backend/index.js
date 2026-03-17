const express = require("express");
const authRouter = require("./routes/auth.js");
const booksRouter = require("./routes/books.js");
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use("/api/auth", authRouter);

app.use("/api/books", booksRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
