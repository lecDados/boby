import express from "express";
import TelegramBot from "node-telegram-bot-api";

const app = express();

// 🔑 coloque seu token aqui
const TOKEN = "8588128538:AAFmj-H6c-pC9fJyBIe-IuIQ3LwPU0xgIMw";
const CHAT_ID = "8531658015";

const bot = new TelegramBot(TOKEN, { polling: false });

app.use(express.json());
app.use(express.static("public"));

app.post("/send", async (req, res) => {
  const { nome } = req.body;

  try {
    await bot.sendMessage(CHAT_ID, `${nome}`);
    res.json({ sucesso: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sucesso: false });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
