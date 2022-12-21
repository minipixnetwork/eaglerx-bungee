export var EaglerPacketId;
(function (EaglerPacketId) {
    EaglerPacketId[EaglerPacketId["IDENTIFY_CLIENT"] = 1] = "IDENTIFY_CLIENT";
    EaglerPacketId[EaglerPacketId["IDENTIFY_SERVER"] = 2] = "IDENTIFY_SERVER";
    EaglerPacketId[EaglerPacketId["LOGIN"] = 4] = "LOGIN";
    EaglerPacketId[EaglerPacketId["LOGIN_ACK"] = 5] = "LOGIN_ACK";
    EaglerPacketId[EaglerPacketId["SKIN"] = 7] = "SKIN";
    EaglerPacketId[EaglerPacketId["C_READY"] = 8] = "C_READY";
    EaglerPacketId[EaglerPacketId["COMPLETE_HANDSHAKE"] = 9] = "COMPLETE_HANDSHAKE";
    EaglerPacketId[EaglerPacketId["DISCONNECT"] = 255] = "DISCONNECT";
})(EaglerPacketId || (EaglerPacketId = {}));
export var DisconnectReason;
(function (DisconnectReason) {
    DisconnectReason[DisconnectReason["CUSTOM"] = 8] = "CUSTOM";
})(DisconnectReason || (DisconnectReason = {}));
export const MAGIC_BUILTIN_SKIN_BYTES = [0x00, 0x05, 0x01, 0x00, 0x00, 0x00];
export const MAGIC_ENDING_IDENTIFY_S_BYTES = [0x00, 0x00, 0x00];
export const MAGIC_ENDING_S_SKINDL_BI = [0x00, 0x00, 0x00];
export const EAGLERCRAFT_SKIN_CHANNEL_NAME = "EAG|Skins-1.8";
// EAGLERCRAFT SKIN PROTOCOL
// All Eaglercraft skin networking is done through plugin channels under the channel name EAG|Skins-1.8.
// Below are some packet defs.
export var EaglerSkinPacketId;
(function (EaglerSkinPacketId) {
    EaglerSkinPacketId[EaglerSkinPacketId["C_FETCH_SKIN"] = 3] = "C_FETCH_SKIN";
    EaglerSkinPacketId[EaglerSkinPacketId["S_SKIN_DL_BI"] = 4] = "S_SKIN_DL_BI";
    EaglerSkinPacketId[EaglerSkinPacketId["S_SKIN_DL"] = 5] = "S_SKIN_DL";
    EaglerSkinPacketId[EaglerSkinPacketId["C_REQ_SKIN"] = 6] = "C_REQ_SKIN";
})(EaglerSkinPacketId || (EaglerSkinPacketId = {}));
