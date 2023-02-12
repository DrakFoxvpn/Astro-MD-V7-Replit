const { Sequelize } = require(`sequelize`);
const fs = require(`fs`);
if (fs.existsSync(`config.env`)) require(`dotenv`).config({ path: `./config.env` });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {


ALIVE_MSG: `default` ,

LANG: `EN` ,

ALIVE_LOGO: `https://i.imgur.com/v8iuP8v.jpg` ,

FOOTER: `ᴀꜱᴛʀᴏ-ᴍᴅ ᴘᴜʙʟɪᴄ ꜱᴛᴀʙʟᴇ` ,

CAPTION: `*ɢᴇɴᴀʀᴀᴛᴇᴅ ʙʏ ᴀꜱᴛʀᴏ-ᴍᴅ*` ,

ONLY_GROUP: `false`,

INBOX_BL_MSG: `*Inbox not allowed` ,

HOST: `-` ,

SESSION_ID: `` 


};
