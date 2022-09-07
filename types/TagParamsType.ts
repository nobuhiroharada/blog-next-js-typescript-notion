import { ParsedUrlQuery } from "querystring";

export type TagParams = ParsedUrlQuery & {
    tag: string,
}