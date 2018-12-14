const Discord1 = require("discord.js");
const Discord2 = require("discord.js");
const Discord3 = require("discord.js");
const Discord4 = require("discord.js");
const Discord5 = require("discord.js");
const Discord6 = require("discord.js");
const Discord7 = require("discord.js");
////////////////////////////////////////////
const client1 = new Discord1.Client();
const client2 = new Discord2.Client();
const client3 = new Discord3.Client();
const client4 = new Discord4.Client();
const client5 = new Discord5.Client();
const client6 = new Discord6.Client();
const client7 = new Discord7.Client();
///////////////////////////////////////////
client1.on('ready',async () => {
    console.log("Starting..");
    let g = client.guilds.get("504685916023947264");
    let c = g.channels.get("508293409157677056");
    if(c.type === 'voice') {
    c.join();
    setInterval(() => {
    if(!g.me.voiceChannel) c.join();
    }, 1);
    } else {
    console.log("Failed To Join:\n The Channel Type isn't \"text\"");
    }
    });
client2.on('ready',async () => {
    console.log("Starting..");
    let g = client.guilds.get("504685916023947264");
    let c = g.channels.get("508293440258179074");
    if(c.type === 'voice') {
    c.join();
    setInterval(() => {
    if(!g.me.voiceChannel) c.join();
    }, 1);
    } else {
    console.log("Failed To Join:\n The Channel Type isn't \"text\"");
    }
    });
client3.on('ready',async () => {
    console.log("Starting..");
    let g = client.guilds.get("504685916023947264");
    let c = g.channels.get("508293454279999513");
    if(c.type === 'voice') {
    c.join();
    setInterval(() => {
    if(!g.me.voiceChannel) c.join();
    }, 1);
    } else {
    console.log("Failed To Join:\n The Channel Type isn't \"text\"");
    }
    });
client4.on('ready',async () => {
    console.log("Starting..");
    let g = client.guilds.get("504685916023947264");
    let c = g.channels.get("508293425460936709");
    if(c.type === 'voice') {
    c.join();
    setInterval(() => {
    if(!g.me.voiceChannel) c.join();
    }, 1);
    } else {
    console.log("Failed To Join:\n The Channel Type isn't \"text\"");
    }
    });
client5.on('ready',async () => {
    console.log("Starting..");
    let g = client.guilds.get("504685916023947264");
    let c = g.channels.get("508299151394734100");
    if(c.type === 'voice') {
    c.join();
    setInterval(() => {
    if(!g.me.voiceChannel) c.join();
    }, 1);
    } else {
    console.log("Failed To Join:\n The Channel Type isn't \"text\"");
    }
    });
client6.on('ready',async () => {
    console.log("Starting..");
    let g = client.guilds.get("504685916023947264");
    let c = g.channels.get("522515374802075649");
    if(c.type === 'voice') {
    c.join();
    setInterval(() => {
    if(!g.me.voiceChannel) c.join();
    }, 1);
    } else {
    console.log("Failed To Join:\n The Channel Type isn't \"text\"");
    }
    });
client7.on('ready',async () => {
    console.log("Starting..");
    let g = client.guilds.get("504685916023947264");
    let c = g.channels.get("522518058187620364");
    if(c.type === 'voice') {
    c.join();
    setInterval(() => {
    if(!g.me.voiceChannel) c.join();
    }, 1);
    } else {
    console.log("Failed To Join:\n The Channel Type isn't \"text\"");
    }
    });
///////////////////////////////////////////////////////
client1.login(process.env.B1);
client2.login(process.env.B2);
client3.login(process.env.B3);
client4.login(process.env.B4);
client5.login(process.env.B5);
client6.login(process.env.B6);
client7.login(process.env.B7);
