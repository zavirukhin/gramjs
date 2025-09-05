import type { FileLike } from "../../define";
import { inspect } from "../../inspect";
export declare class File {
    [inspect.custom]: () => {
        [key: string]: any;
    };
    private readonly media;
    constructor(media: FileLike);
    get id(): void;
    get name(): any;
    get mimeType(): string | undefined;
    get width(): any;
    get height(): any;
    get duration(): any;
    get title(): any;
    get performer(): any;
    get emoji(): any;
    get stickerSet(): any;
    get size(): any;
    _fromAttr(cls: any, field: string): any;
}
