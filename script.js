const Permissions = {
    WEB_HOOK: 1,
    ADMINISTRATOR: 2,
    READ_EVENTS: 4,
    CONNECT: 8,
    MANAGE_SERVER: 16,
    SEND_MESSAGE: 32,
};

function decodePermissions(permissionValue) {
    if (permissionValue == 0 || permissionValue == null) return { permissions: "DEFAULT"};
    const decodedPermissions = Object.keys(Permissions)
        .filter(permission => (permissionValue & Permissions[permission]) !== 0)
        .map(permission => permission.toUpperCase());

    return { permissions: decodedPermissions.join(', ') };
}

module.exports = {
    decodePermissions,
};