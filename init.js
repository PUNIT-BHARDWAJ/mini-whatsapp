const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = [
    {
    from:"neha",
    to: "priya",
    msg: "send me class notes",
    created_at: new Date(),    
    },
    {
    from:"sonu",
    to: "monu",
    msg: "teach me js callbacks",
    created_at: new Date(),    
    },
    {
    from:"rohit",
    to: "mohit",
    msg: "all the best",
    created_at: new Date(),    
    },
    {
    from:"sohan",
    to: "mohan",
    msg: "Hello, how are you",
    created_at: new Date(),    
    },
    {
    from:"punit",
    to: "sumit",
    msg: "What about today's class",
    created_at: new Date(),    
    }
]
 
Chat.insertMany(allChats).then((res) => {
console.log(res)
})
.catch((err) => {
    console.log(err)
})
