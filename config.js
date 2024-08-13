const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255763782257";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255763782257";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_28_08_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM0LFxuICAgICAgICA5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNixcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDk0LFxuICAgICAgICA0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR2lOUk1hbzgzVDh0M0ZqMDJyZCs5WVBFNHRqRVpFZWt5QlVHb1lLY2VmOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NjM3ODIyNTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDNkFDM0RFOUM2MzRFRUMxOUM1NUY0QTY5Qjg1MkQ4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzU2MjkxNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3aWFOYXFDU1FVYWQtWUg5N2VDNVJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImMyNzNhZmU0LTU1ZjctNGRhZS1hODk1LTEyMWUzMjUyNTZiNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDE0MixcbiAgICAgIDEsXG4gICAgICAxMDgsXG4gICAgICAxOTMsXG4gICAgICAxODEsXG4gICAgICAxMjQsXG4gICAgICA4MyxcbiAgICAgIDE0LFxuICAgICAgMjE5LFxuICAgICAgMjM1LFxuICAgICAgNjQsXG4gICAgICAyNSxcbiAgICAgIDIzMyxcbiAgICAgIDkzLFxuICAgICAgOTIsXG4gICAgICAyMTEsXG4gICAgICAxNzEsXG4gICAgICAyMzMsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTc4LFxuICAgICAgMjE5LFxuICAgICAgNjAsXG4gICAgICAyMzcsXG4gICAgICAyOSxcbiAgICAgIDEwNCxcbiAgICAgIDIyNSxcbiAgICAgIDEyLFxuICAgICAgNTksXG4gICAgICAxNDQsXG4gICAgICAxNCxcbiAgICAgIDI1LFxuICAgICAgNzYsXG4gICAgICAxMjUsXG4gICAgICAyMTksXG4gICAgICAxNjksXG4gICAgICAyNTAsXG4gICAgICA4LFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjExSlo1RENWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NjM3ODIyNTc6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEdW5nYUpyXCIsXG4gICAgXCJsaWRcIjogXCIzNzg5MDY3MTI3NjAzNToyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQSzE3Qm9RbXZmdHRRWVlFQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjViRUw1eFdCSUFKSDNHeElXL3RzSlBHek95S3NpMVdrYmEwOVJ0dUZMV009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidXB3OVVQeHBUNys2SkdVZmhORXExd01heHdWRWhZSXNlM3JWdmlKL0lZYitWTGFDaVgzTEgzMkltQTRRamRqbExYS3pZNXBqcGcrek91RGY1a3FOQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY0xZb3hOQnZjVk9GMVIwQU03cXBpRnZwRGlyMk5maDcwbVBLZURLMVNBT1ZudjhCa2c5Z2xnQWRJb29mVllMSk1LZkZ6UWV6Zy9zS3F1aEtCZzUxQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzYzNzgyMjU3OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjM1NjI5MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNUEJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1QQi5qc29uIjogIntcImtleURhdGFcIjpcIkUrRmhRdk1JaGJCcjEzb2NXUGdpK29rakE2TFF4TFVsdkh4SlhuckNPTFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTYzMDIzMjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0NTIyNTY2MTVcIn0iCn0="  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
