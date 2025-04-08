/*CMD
  command: /AddFile5#5#5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Auto Script

  <<ANSWER
🥳* Send Category Of Your Service*


`Tg-View`
`Tg-Subs`
`Tg-React`
`Tg-Shares`
`Ig-Followers`
`Ig-Post-Like`
`Ig-Comment`
`Ig-Views`
`Yt-Subs`
`Yt-View`
`Yt-Likes`
`Fb-Likes`
`Fb-follow`
`Spotify-follow`
`Monthly-Listener`
`Premium-Play`
`Search-Play`
`Tic-follow`
`Tic-Likes`
`Tic-Views`
`Tic-comments`
`Web-Ind`
`Web-Seo`
`Web-Mob`
`Web-Ref`
`Tw-Follow`
`Tw-Like`
`Tw-View-Imp`
`Tw-Tw-View`
`Tw-Rtw`
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var cat = Libs.Random.randomInt(1, 99999999999999)
var adm = Bot.getProperty("admin_chat")
var des = User.getProperty("decription")
var minimum = User.getProperty("Minimum")
var sid = User.getProperty("sid")
var api = User.getProperty("apiurl")
var type = message;
var name = User.getProperty("Name")
var amount = User.getProperty("cost")
let photot = User.getProperty("phpphoto")
//User.setProperty("php", request.document.file_id, "string")
if (!photot || photot == "null") {
  Bot.setProperty({
    name: cat,
    value: {
      cost: amount,
      description: des,
      admin: user.telegramid,
      type: type,
      sid: sid,
      status: "✅ On",
      api: api,
      pname: name,
      minimum: minimum
    }
  })
} else {
  Bot.setProperty({
    name: cat,
    value: {
      cost: amount,
      description: des,
      admin: user.telegramid,
      type: type,
      sid: sid,
      api: api,
      pname: name,
      status: "✅ On",
      photoo: photot,
      minimum: minimum
    }
  })
}
if (!photot || photot == "null") {
  Bot.sendMessage("*No Photo Available*")
} else {
//  var capt = "This Photo Demo Of Service"
 // Api.sendPhoto({ chat_id: adm, photo: photot, caption: capt })
}
let cur = Bot.getProperty("cur")
var butn = [
  [
    { text: "💛 Seller of Script", url: "tg://user?id=" + user.telegramid + "" }
  ],
  [
    { text: "✅ Approve", callback_data: "/FileApprove " + cat },
    { text: "❌ Reject", callback_data: "/reject " + cat }
  ]
]
//Api.sendPhoto({ photo: photot})
Api.sendPhoto({
  chat_id: adm,
  photo: photot,
  caption:
    "*🔰 New Service Adding !!\n🔰 Service Name :* " +
    name +
    "\n*🔰 Amount Per 1k: *" +
    amount +
    " *" +
    cur +
    "*\n*🔰 Minimum Order : "+minimum+"*\n*🔰 Description :* " +
    des +
    "\n\n*🔰 Type :* " +
    type +
    "\n\n* 🔰 Approval Id : *`" +
    cat +
    "`",
  reply_markup: {
    inline_keyboard: butn
  },
  parse_mode: "Markdown"
})
Bot.sendMessage(
  "*🍭 Your Service Sended Wait For Admin Approval Or Disapproval*"
)

