const express =  require('express')

const { decodePermissions } = require('./script');

const app = express()

const bots = [
    { id: 5892, name: 'Soizx Bot', owner: 'soizx#0001' },
    { id: 7234, name: 'TonimatasDEV Bot', owner: 'tonimatasdev#0001' },
    { id: 3238, name: 'Meliodas Bot', owner: 'meliodas#0001' },
];


// Invite End Point with the serverID and the intents based on DecoderIntents in ("./script.js")

app.get('/invite/:botID', (req, res) => {
    const permissions = req.query.permissions;
    const scope = req.query.scope;
    const botID = parseInt(req.params.botID);

    const arg1 = bots.find(bots => bots.id === botID)

    // Validate the params
    if (arg1 == null) res.json({ status: 400, error: "Invalid Server ID" })

    const arg2 = decodePermissions(permissions)

    const arg3 = { scope: scope }
    // Parse the arguments intents and server info
    const response = { ...arg1, ...arg2, ...arg3 };

    res.json(response);
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});