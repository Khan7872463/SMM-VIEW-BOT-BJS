/*CMD
  command: RefCheck
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Setup
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var refi = User.getProperty("refi")
var url = Bot.getProperty("apiurl")
HTTP.get({
  url:
    ""+url+"&action=refill&order=" +
    refi +
    "",
  success: "api15"
})

