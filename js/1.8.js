const readlineSync = require("readline-sync");
let hero = readlineSync.question("who is the hero of your story (example: Jhon)? ");
let character = readlineSync.question("who will he meet (example: a hobbit)? ");
let location = readlineSync.question("where does your story take place (example: a forest)? ");
let object = readlineSync.question("write the name of an object (example: smartphone) : ");

console.log("once upon a time, in "+ location+", a young boy named "+hero
+" was traveling. Suddenly he encountered a mysterious person on his way. " +hero+"asked \"Who are you?\". "
+" this mysterious character replied.-\"I'm "+character+"\". - \"I was waiting for you to give you this\". he gave her something."
+"then,"+character+" mysteriously disappeared! "+hero+" looked at his hand and discovered that the mysterious figure gave him a "+object
+". "+hero+" put this "+object+" away and thought \"he was really strange this "+character+". Then "+ hero+" continued his trip.")