const { Sequelize } = require(`sequelize`);
const fs = require(`fs`);
if (fs.existsSync(`config.env`)) require(`dotenv`).config({ path: `./config.env` });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {


ALIVE_MSG: `default` ,

LANG: `EN` ,

ALIVE_LOGO: `https://github.com/Janithsadanuwan/Ari-Ani` ,

FOOTER: `FoxALPHA-ᴍᴅ Bot` ,

CAPTION: `*🖥ɢᴇɴᴀʀᴀᴛᴇᴅ ʙʏ FoxAlpha*` ,

ONLY_GROUP: `true`,

INBOX_BL_MSG: `*Inbox not allowed` ,

HOST: `REPLIT` ,

SESSION_ID: `` 


};
