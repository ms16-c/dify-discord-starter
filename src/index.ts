import DiscordBot from "./bot";

const bot = new DiscordBot();
bot.start().catch(console.error);
const http = require('http');
http.createServer((req, res) => res.end('Bot is running!')).listen(process.env.PORT || 3000);
