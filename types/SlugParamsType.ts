import { ParsedUrlQuery } from "querystring";

export type SlugParams = ParsedUrlQuery & {
    slug: string,
}