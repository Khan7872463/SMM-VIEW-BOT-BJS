/*CMD
  command: /upiqr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/


var tt = "🔝<b> Send INR On This QR Code. \nUsing Any Upi App</>"
var mm = User.getProperty("dep")
var button = [
  [
    { text: "✅ Deposit", callback_data: "/upipay" },
    { text: "⬅️ Back", callback_data: "/deposit" }
  ]
]
Api.editMessageMedia({
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: "https://t.me/vzkaksbdj/97",
    caption: tt,
    parse_mode: "html"
  },
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: button }
})

