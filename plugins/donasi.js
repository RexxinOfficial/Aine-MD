let handler = async m => m.reply(`
╭─「 Donasi • Dana 」
│ • Dana [0813-1754-9796]
│ • Gopay [0813-1754-9796]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler