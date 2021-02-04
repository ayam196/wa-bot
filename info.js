let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Alia
╠➥ Script: @Lisa
║
╠➥ Github: https://github.com/ayam196/wa-bot
╠➥ Instagram: @Lisa
╠➥ YouTube: Agan Channel
║
╠═〘 Thanks To 〙 ═
╠➥ Lisa
╠➥ Alia
╠➥ Nurutomo
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Pulsa: 62085892910131
╠➥ Indosat: 62085892910131
║
║>Request? Wa.me/62085892910131
║
╠═〘 Lisa BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

