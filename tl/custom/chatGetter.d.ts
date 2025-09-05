import type { Entity, EntityLike } from "../../define";
import type { TelegramClient } from "../../client/TelegramClient";
import { inspect } from "../../inspect";
export interface ChatGetterConstructorParams {
    chatPeer?: EntityLike;
    inputChat?: EntityLike;
    chat?: EntityLike;
    broadcast?: boolean;
}
export declare class ChatGetter {
    [inspect.custom]: () => {
        [key: string]: any;
    };
    _chatPeer?: EntityLike;
    _inputChat?: EntityLike;
    _chat?: Entity;
    _broadcast?: boolean;
    _client?: TelegramClient;
    static initChatClass(c: any, { chatPeer, inputChat, chat, broadcast }: ChatGetterConstructorParams): void;
    get chat(): Entity | undefined;
    getChat(): Promise<Entity | undefined>;
    get inputChat(): any;
    getInputChat(): Promise<any>;
    get chatId(): any;
    get isPrivate(): boolean | undefined;
    get isGroup(): boolean | undefined;
    get isChannel(): boolean;
    _refetchChat(): Promise<void>;
}
