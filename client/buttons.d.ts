import { Api } from "../tl";
import type { ButtonLike } from "../gramjs/define";
/** @hidden */
export declare function buildReplyMarkup(buttons: Api.TypeReplyMarkup | undefined | ButtonLike | ButtonLike[] | ButtonLike[][], inlineOnly?: boolean): Api.TypeReplyMarkup | undefined;
