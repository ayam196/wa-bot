let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [62085892910131]
│ • Pulsa [62085892910131]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
