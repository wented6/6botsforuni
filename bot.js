const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');
const D4 = require('discord.js');
const D5 = require('discord.js');
const D6 = require('discord.js');
const D7 = require('discord.js');
const D8 = require('discord.js');


const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D3.Client();
const p4 = new D4.Client();
const p5 = new D5.Client();
const p6 = new D6.Client();
const p7 = new D7.Client();
const p8 = new D8.Client();



p1.on("message", message => {
    console.log("S1");
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
p2.on("message", message => {
    console.log("S2");
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
p3.on("message", message => {
    console.log("S3");
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
p4.on("message", message => {
    console.log("S4");
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
p5.on("message", message => {
    console.log("S5");
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
p6.on("message", message => {
    console.log("S6");
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
p7.on("message", message => {
    console.log("S7");
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
p8.on("message", message => {
    console.log("S8");
    let g = client.guilds.get("504685916023947264");
    let c = g.channels.get("510806482925781032");
    if(c.type === 'voice') {
    c.join();
    setInterval(() => {
    if(!g.me.voiceChannel) c.join();
    }, 1);
    } else {
    console.log("Failed To Join:\n The Channel Type isn't \"text\"");
    }
    });




p1.login(process.env.B1);
p2.login(process.env.B2);
p3.login(process.env.B3);
p4.login(process.env.B4);
p5.login(process.env.B5);
p6.login(process.env.B6);
p7.login(process.env.B7);
p8.login(process.env.B8);

