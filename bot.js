const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
client.on(`ready`, () => console.log(`Ready!`))
const channels = {};
const ytdl = require('ytdl-core');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');

var prefix = 'G!'

//=======================================================================help

client.on('message', message => {
    if(message.content.startsWith(prefix+'help')) {
   const embed = new Discord.RichEmbed()
.setColor('RANDOM')
        .setDescription(`**
General's Commands. 
${prefix}server - معلومات عن سيرفرك :scroll:
${prefix}id - الأيدي حقك :flashlight:
${prefix}avatar - صورة بروفايلك الشخصي :frame_photo:
${prefix}voice - معرفة عدد المتواجدين بالصوت :microphone:
${prefix}allbots - رؤية جميع بوتات السيرفر :robot:
${prefix}channels - لرؤية رومات السيرفر :urn:
${prefix}color - لأختيار لونك في السيرفر :heart:
${prefix}invite - معلومات عن الدعوة :soccer:
         
        Admin's Commands.  
$ban - أمر الباند :no_entry:
$kick - أمر الكيك  :outbox_tray:
$ccolors-   صنع ألوان 
$bc -   البرودكاست  لكل الأعضاء
$role - لأعطاء رتبة لـ أحد الأعضاء  
$rerole - لآزالة الرتبة من أحد الاعضاء 
$setvoice -   لعمل روم الفويس أونلاين  
$giveaway - قيف اواي :tada:
$setvoice - لعمل روم بآالمتصلين بالصوت في السيرفر :telephone_receiver: 
$setwelcomer - لوضع شات لترحيب
            bot info       
$inv - لدعوة البوت :pen_fountain: 
$sup - الدعم الفني :nut_and_bolt:**`)
    message.author.send(embed)
}
});

client.on('message', message => {
    if(message.content.startsWith('$help')) {
        
        message.channel.send('**[ لقد تم أرسال جميع أوامر البوت في الخاص :envelope_with_arrow: | Check your DM. ]**')
    }
});

//=======================================================================General


//=======================================================================Admin


//========================================================================Games

//========================================================================Music


//========================================================================Other


  client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content === -help') {
message.author.send(`الرسآلهه`).catch(RebeL =>{console.log('`Error`: ' + RebeL);
message.channel.send("**للأسف , لديك اعدادات خصوصية لاتسمح لي بأرسال رسائل خاصة لك **")
});
}}});
  

client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('G!ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});



client.on('message', message => {
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });


  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "id")) {
           if (message.channel.id !== "ايدي الروم الي تبي فيه الامر") return;
            
            if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)


.setFooter(message.author.username, message.author.avatarURL)  
    message.channel.sendEmbed(id);
})
}
    

         
     });
  

  const afk = require('./afk.json');
client.on('message',async rebel => {
      if(rebel.author.bot) return;
  if (afk[rebel.author.id]) {
    delete afk[rebel.author.id];
    if (rebel.member.nickname === null) {
      msg.channel.send("أهلا بك , <@"+rebel.author.id+"> أنأ **أحاول** أن أزيل عنك الأفك.");     } else {
      rebel.member.setNickname(rebel.member.nickname.replace(/(\[AFK\])/,''));
      rebel.channel.send("أهلا بك , <@"+rebel.author.id+"> تم فك عنك الأفك بسبب رجوعك."); 
    }
    fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
} else {
    if (rebel.content.startsWith(prefix + 'afk ')||rebel.content === prefix + 'afk') {
      rebel.member.setNickname("[AFK] " + rebel.member.displayName);
      let args1 = rebel.content.split(' ').slice(1);
      if (args1.length === 0) {
        afk[rebel.author.id] = {"reason": true}; 
        rebel.reply("** لقد وضعتك بوضع الأفك **")
      } else {
        afk[rebel.author.id] = {"reason": args1.join(" ")}; // with reason
        rebel.reply("لقد أضفتك للأفك بسبب "+ args1.join(" ") + ".")
      }
      fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});   
  }
}
         var mentionned = rebel.mentions.users.first();
if(rebel.mentions.users.size > 0) return ;
if (afk[rebel.mentions.users.first().id]) {
if (afk[rebel.mentions.users.first().id].reason === true) {
rebel.channel.send(`**<@!${mentionned.id}> مأفك** `);
}else{
rebel.channel.send(`**<@!${mentionned.username}> مأفك , سبب الأفك \n ${afk[rebel.mentions.users.first().id].reason}**`);
}
} 
});
  


client.on('message',function(message) {
    
    if(message.content.startsWith(`<@${client.user.id}>`)) {
        message.channel.send('Hey Im `GuilderBot`  مرحبا انا ')
        message.channel.send('My Prefix is G!')
        message.channel.send('البريفكس الخاص بي هو G!')
    }
});


client.on('message', function(msg) {
  var prefix = 'G!'
  if(msg.content.startsWith (prefix + "server")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

client.on('message',async msg => {
     if(msg.channel.type === "dm") return;
  if(msg.author.bot) return;
   var everyone = msg.guild.defaultRole;
  var p = "G!";
  if(msg.content.startsWith(p + "setstats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
           var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
                       var a =msg.guild.createChannel('SERVER STATS', 'voice').then(yo => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       yo.setParent(kk);
     al.overwritePermissions(everyone, { CONNECT: false });
      alp.overwritePermissions(everyone, { CONNECT: false });
       alph.overwritePermissions(everyone, { CONNECT: false });
        yo.overwritePermissions(everyone, { CONNECT: false });
  setInterval(() => {
     al.setName('Members: ' + msg.guild.members.filter(m => !(m.user.bot)).size, 'voice');
      alp.setName('Bots: ' + msg.guild.members.filter(m => m.user.bot).size, 'voice');
        alph.setName('Text channels: ' + msg.guild.channels.filter(c => c.type == 'text').size, 'voice');
         yo.setName('Voice channels: ' + (msg.guild.channels.filter(c => c.type == 'voice').size - 3), 'voice');
 },1000);
                       })
                   })
    
                })
           })
  })
           
  }
 
});
 


 client.on('message',message =>{
       const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === 'invites') {
let guild = message.guild
var codes = [""]
 var nul = 0
      
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
    nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}
 
})
  if (nul > 0) {
      const e = new Discord.RichEmbed()
      .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
      .setColor('#36393e')
      message.channel.send(e)
  }else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.channel.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite code ${message.guild.name}`, `Invite Codes :\n${codes.join("\n")}`)
.setColor('#36393e')
message.channel.send({ embed: embed });
return;
}
})
}

});



client.on('message',async message => {
    var p = "G!"
  function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
  };
  if(message.content.startsWith( p + "bot")) {
    const millis = new Date().getTime() - client.user.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAT = millis / 1000 / 60 / 60 / 24;
    var star = new Discord.RichEmbed() 
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle(`${client.user.username} معلومات عن بوت`)
    .setColor('#36393e')
    .addField('🌟 امر البوت', prefix, true)
    .addField('🌟 الرامات المستخدمة', `${(process.memoryUsage().rss / 1048576).toFixed()} ميجا بايت`,true)
    .addField('🌟 سرعة البوت', `${Math.round(client.ping)} ملي سكند`,true)
    .addField('🌟 تم تشغيل البوت منذ', `${timeCon(process.uptime())}`, true)
    .addField('🌟 السيرفرات', client.guilds.size,true)
    .addField('🌟 المستخدمين', client.users.size,true)
    .setFooter(`${client.user.username} :: ${new Date().toLocaleString()}`);
    message.channel.send(star);
  }
});


  const devs = ["your id"];
const adminprefix = ["G!!"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developer.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
  


client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا
