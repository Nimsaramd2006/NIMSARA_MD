const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/Y7Qhtxvg/639623a5da1ceb01.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I Am NIMSARA-MD  i am alive now!",
};
