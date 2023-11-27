const Intents = {
    WEB_HOOK: 1,
    ADMINISTRATOR: 2,
    READ_EVENTS: 4,
    CONNECT: 8,
    MANAGE_SERVER: 16,
    SEND_MESSAGE: 32,
};

function decodeIntents(intentValue) {
    if (intentValue == 0 || intentValue == null) return { intents: "DEFAULT"}
    const decodedIntents = Object.keys(Intents)
        .filter(intent => (intentValue & Intents[intent]) !== 0)
        .map(intent => intent.toUpperCase());

    return { intents: decodedIntents.join(', ') };
}

module.exports = {
    decodeIntents,
};