import DiscordBot from "./bot";

const bot = new DiscordBot();
bot.start().catch(console.error);
import * as http from 'http';

http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  res.end('Bot is running!');
}).listen(process.env.PORT || 3000);
