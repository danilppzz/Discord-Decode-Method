# Discord Invite EndPoint

First you need to clone this repo from the command or download the zip package.
```git
git clone https://github.com/soizx/DecodeValue
```

Then you need to open the ` script.js ` file and write the flags that u want to have.
```js
const Intents = {
    WEB_HOOK: 1,
    ADMINISTRATOR: 2,
    READ_EVENTS: 4,
    CONNECT: 8,
    MANAGE_SERVER: 16,
    SEND_MESSAGE: 32,
};
```
For make your flags you have to type first the name of the flag and then the number
```js
const Intents = {  
    EXAMPLE_FLAG: [1, 2, 4, 8, 16, 32, 64, 128]
};
```
This code defines a set of intents using a JavaScript object. Each intent is assigned a numerical value that is a power of 2. The decodeIntents function takes an integer representing a combination of these intents and decodes it into an array of corresponding intent names in uppercase. If the input value is 0 or null, it returns a default value.


# How to use the EndPoint
You need to open your browser or your testing tool ` Postman ` and copy paste this url and replace the ` serverID ` and ` Intents ` with values that you want.
```
http://localhost:3000/invite/:serverID?intents=8
```
This will return you the server id info and the intents.
Intents work by adding the numbers of the flags.
```java
[ WEB_HOOK: 1 ] + [ READ_EVENTS: 4 ] = 5
[ ADMINISTRATOR: 2 ] + [ SEND_MESSAGE: 32 ] + [ READ_EVENTS: 4 ] = 38
```

# ⚠️ Warning ⚠️
I'm not sure if the method that discord use is the same, but I think it is right
