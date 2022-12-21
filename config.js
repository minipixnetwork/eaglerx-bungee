export const config = {
    name: "MinecraftProxy",
    bindHost: "0.0.0.0",
    bindPort: 25545,
    maxPlayers: 20,
    motd: {
        iconURL: null,
        l1: "hi",
        l2: "lol"
    },
    server: {
	host: "172.18.0.1",
        port: 25565
    },
    security: {
        enabled: false,
        key: null,
        cert: null
    }
};
export const BRANDING = Object.freeze("EaglerXProxy");
export const VERSION = "1.0.0";
export const NETWORK_VERSION = Object.freeze(BRANDING + "/" + VERSION);
