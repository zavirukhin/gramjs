import { Connection, PacketCodec } from "./Connection";
import type { PromisedNetSockets, PromisedWebSockets } from "../../extensions";
export declare class AbridgedPacketCodec extends PacketCodec {
    static tag: any;
    static obfuscateTag: any;
    private tag;
    obfuscateTag: Buffer;
    constructor(props: any);
    encodePacket(data: Buffer): any;
    readPacket(reader: PromisedNetSockets | PromisedWebSockets): Promise<Buffer>;
}
/**
 * This is the mode with the lowest overhead, as it will
 * only require 1 byte if the packet length is less than
 * 508 bytes (127 << 2, which is very common).
 */
export declare class ConnectionTCPAbridged extends Connection {
    PacketCodecClass: typeof AbridgedPacketCodec;
}
