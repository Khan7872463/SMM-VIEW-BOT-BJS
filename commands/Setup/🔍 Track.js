/*CMD
  command: 🔍 Track
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Setup
  answer: Send Order Id
  keyboard: 
  aliases: 
  group: 
CMD*/

User.setProperty("OrderID", message)
Bot.sendMessage("*🔍 Fatching Info...*")
var url = Bot.getProperty("apiurl")
HTTP.get({
  url:
    ""+url+"&action=status&order=" +
    message +
    "",
  success: "order-stat"
})

