import type { BinaryReader } from "../../extensions";
export declare class GZIPPacked {
    static CONSTRUCTOR_ID: number;
    static classType: string;
    data: Buffer;
    private CONSTRUCTOR_ID;
    private classType;
    constructor(data: Buffer);
    static gzipIfSmaller(contentRelated: boolean, data: Buffer): Promise<any>;
    static gzip(input: Buffer): any;
    static ungzip(input: Buffer): any;
    toBytes(): Promise<any>;
    static read(reader: BinaryReader): Promise<any>;
    static fromReader(reader: BinaryReader): Promise<GZIPPacked>;
}
