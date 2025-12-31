import express from "express";
import TelegramBot from "node-telegram-bot-api";

const app = express();

const TOKEN = "SEU_TOKEN_AQUI";
const bot = new TelegramBot(TOKEN, { polling: false });

app.use(express.json());
app.use(express.static("public"));

app.post("/send", async (req, res) => {
  const { nome, chatId } = req.body;

  try {
    await bot.sendMessage(chatId, nome);
    res.json({ sucesso: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sucesso: false });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/index.html");
});
