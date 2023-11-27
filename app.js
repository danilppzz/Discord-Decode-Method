const express =  require('express')

const { decodeIntents } = require('./script');

const app = express()

const servers = [
    { id: 5892, name: 'Soizx Development', owner: 'soizx#0001', members: 59 },
    { id: 7234, name: 'TonimatasDEV', owner: 'tonimatasdev#0001', members: 238 },
    { id: 3238, name: 'Meliodas', owner: 'meliodas#0001', members: 20 },
    { id: 1234, name: 'Example Server 1', owner: 'owner1#0001', members: 100 },
    { id: 5678, name: 'Sample Server 2', owner: 'owner2#0001', members: 75 },
    { id: 9876, name: 'Test Server 3', owner: 'owner3#0001', members: 150 },
    { id: 4567, name: 'Demo Server 4', owner: 'owner4#0001', members: 50 },
    { id: 7890, name: 'New Server 5', owner: 'owner5#0001', members: 120 },
    { id: 2345, name: 'Prototype Server 6', owner: 'owner6#0001', members: 80 },
    { id: 3456, name: 'Experimental Server 7', owner: 'owner7#0001', members: 110 },
    { id: 6543, name: 'Trial Server 8', owner: 'owner8#0001', members: 95 },
    { id: 8765, name: 'Alpha Server 9', owner: 'owner9#0001', members: 130 },
    { id: 7891, name: 'Beta Server 10', owner: 'owner10#0001', members: 70 }
];


// Invite End Point with the serverID and the intents based on DecoderIntents in ("./script.js")

app.get('/invite/:serverID', (req, res) => {
    const intents = req.query.intents;
    const serverID = parseInt(req.params.serverID);

    const arg1 = servers.find(server => server.id === serverID)

    // Validate the params
    if (arg1 == null) res.json({ status: 400, error: "Invalid Server ID" })

    const arg2 = decodeIntents(intents)

    // Parse the arguments intents and server info
    const response = { ...arg1, ...arg2 };

    res.json(response);
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});