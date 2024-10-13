const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const path = require("path");

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// mongoose
//   .conntect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Подключились к БД"))
//   .catch((er) => console.error(er));                        потом ДОБАВИТЬ подключение к базе данных

// app.use("/reader", require("./routes/readerRoutes"));
// app.use("book", require("./routes/bookRoutes"));

app.use((req, res, next) => {
  res.status(404).json({
    message: "Путь не найден",
  });
});

app.use((er, req, res, next) => {
  console.error(er.stack);
  res.status(505).json({
    message: "Ошибка на стороне сервера",
  });
});

const PORT = 3005;

app.listen(PORT, () => {
  console.log(`Сервер работает http://127.0.0.1: ${PORT}`);
});
