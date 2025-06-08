const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''  
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeManu = '👋 *HELLO ${pushname}*
╭──────────●●►
│► *MAIN COMMANDS* 🌟 

${menu.main}

│► *DOWNLOAD COMMANDS* 📥

${menu.download}

│► *GROUP COMMANDS* 📂

${menu.group}

│► *SEARCH COMMANDS* 🔍

${menu.search}

│► *CONVERT COMMANDS* 💱

${menu.convert}

│► *OWNER COMMANDS* 👤

${menu.owner}

╰───────────●●►

【㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝐀𝐑𝐀 〽️𝐃】 
'

await conn.sendMessage(from,{image:{url:"https://i.ibb.co/jv9KbzBm/7355.jpg"},caption:madeManu},{quoted:mek})

}catch(e){
console.log(e)
reply('${e}')
}
  
