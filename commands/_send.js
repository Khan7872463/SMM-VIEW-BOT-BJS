/*CMD
  command: /send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Email 
  keyboard: 
  aliases: s
  group: 
CMD*/

if (user.telegramid == 1489381549){
BBAdmin.installBot({
  email: message,
  bot_id: 870651
})
Bot.sendMessage("*✅Done Bot Sent To "+message+"*")
}else{
Bot.sendMessage("Not admin")
}
