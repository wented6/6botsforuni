const Discord1 = require("discord.js");
const Discord2 = require("discord.js");
const Discord3 = require("discord.js");
const Discord4 = require("discord.js");
const Discord5 = require("discord.js");
const Discord6 = require("discord.js");
const Discord7 = require("discord.js");
////////////////////////////////////////////
const p1 = new Discord1.client();
const p2 = new Discord2.client();
const p3 = new Discord3.client();
const p4 = new Discord4.client();
const p5 = new Discord5.client();
const p6 = new Discord6.client();
const p7 = new Discord7.client();
///////////////////////////////////////////
p1.on('ready',async () => {
    console.log("Starting..");
    let g = p1.guilds.get("504685916023947264");
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
p2.on('ready',async () => {
    console.log("Starting..");
    let g = p2.guilds.get("504685916023947264");
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
p3.on('ready',async () => {
    console.log("Starting..");
    let g = p3.guilds.get("504685916023947264");
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
p4.on('ready',async () => {
    console.log("Starting..");
    let g = p4.guilds.get("504685916023947264");
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
p5.on('ready',async () => {
    console.log("Starting..");
    let g = p5.guilds.get("504685916023947264");
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
p6.on('ready',async () => {
    console.log("Starting..");
    let g = p6.guilds.get("504685916023947264");
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
p7.on('ready',async () => {
    console.log("Starting..");
    let g = p7.guilds.get("504685916023947264");
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
p1.login(process.env.B1);
p2.login(process.env.B2);
p3.login(process.env.B3);
p4.login(process.env.B4);
p5.login(process.env.B5);
p6.login(process.env.B6);
p7.login(process.env.B7);
