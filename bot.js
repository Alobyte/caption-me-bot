// Run dotenv
require('dotenv').config();
const fs = require('fs');
let request = require(`request`);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
//Bot Behaviour---------------------------------------------------------------------------------------------------------------------------

// A list of captions that the bot will use.
var captionPhrase = [
    "LOL",
    "My reaction when I watch a Christopher Nolan Movie",
    "When you forgot to charge your phone over night",
    "When you have a test, a report, and an exam on the exact day",
    "When you win a game"
]

var people = ["Albert", "John", "Bob"];

//Random server Messages
client.on('message', msg => {

    //caption me
    if (msg.content.toLowerCase() === 'caption me!' || msg.content.toLowerCase() === 'caption me'){
        //Albert
        if(msg.author.username === "Alobyte"){
            getFolderSize('Albert').then(function(response){
                var exAlbert = response;
                msg.reply(captionPhrase[randomNum(captionPhrase)], {files: ["./captionAlbert/" + Math.floor(Math.random() * exAlbert) + ".jpg" ]})
                })
        }

        //John
        if(msg.author.username === "John"){
            getFolderSize('John').then(function(response){
                var exChris = response;
                msg.reply(captionPhrase[randomNum(captionPhrase)], {files: ["./captionJohn/" + Math.floor(Math.random() * exJohn) + ".jpg" ]})
                })
        }

        //Bob
        if(msg.author.username === "Bob"){
            getFolderSize('Bob').then(function(response){
                var exKian = response;
                msg.reply(captionPhrase[randomNum(captionPhrase)], {files:["./captionBob/" + Math.floor(Math.random() * exBob) + ".jpg" ]})
            })
        }
        console.log(msg.author.username + " got captioned");
        console.log(captionPhrase.length);
    }

    //caption Random
    if(msg.content.toLowerCase() === 'caption someone'){
        var randomPerson = people[randomNum(people)];
        getFolderSize(randomPerson).then(function(response){
            var exPerson = response;
            msg.reply(captionPhrase[randomNum(captionPhrase)], {files: ["./caption" + randomPerson + "/" + Math.floor(Math.random() * exPerson) + ".jpg" ]})
        })

        console.log(randomPerson + " got captioned");
    }
  



// Generates a random number based on the list's length
function randomNum(list){
    var generatedNum = Math.floor(Math.random() * list.length);
    console.log("Gen number: " + generatedNum);
    return generatedNum;
}

// Checks for the size of folder
async function getFolderSize(person){
    return new Promise(function(resolve, reject){
      var dir = './caption' + person;
      var folderLength = 0;
    
      fs.readdir(dir, (err, files) => {
        resolve(files.length);
      });
    })
}
}
)
