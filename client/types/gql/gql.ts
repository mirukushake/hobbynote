/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation updateFloss($id: ID!, $input: update_floss_input!) {\n  update_floss_item(id: $id, data: $input) {\n    id\n    brand {\n      id\n      en: translations {\n        brand_name\n      }\n      ja: translations(filter: {languages_code: {code: {_eq: \"ja\"}}}) {\n        brand_name\n      }\n    }\n    code\n    floss_color\n    colors {\n      colors_id {\n        id\n      }\n    }\n    inv_qty\n    wish_qty\n    order\n  }\n}": types.UpdateFlossDocument,
    "query Floss {\n  floss(limit: -1, sort: [\"brand.id\", \"order\"]) {\n    id\n    brand {\n      id\n      en: translations(filter: {languages_code: {code: {_eq: \"en\"}}}) {\n        brand_name\n      }\n      ja: translations(filter: {languages_code: {code: {_eq: \"ja\"}}}) {\n        brand_name\n      }\n    }\n    code\n    floss_color\n    colors {\n      colors_id {\n        id\n      }\n    }\n    inv_qty\n    wish_qty\n    order\n  }\n}": types.FlossDocument,
    "query Pencils {\n  pencils(limit: -1, sort: [\"brand.id\", \"order\"]) {\n    id\n    code\n    pencil_color\n    brand {\n      id\n      en: translations {\n        brand_name\n      }\n      ja: translations(filter: {languages_code: {code: {_eq: \"ja\"}}}) {\n        brand_name\n      }\n    }\n  }\n}": types.PencilsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation updateFloss($id: ID!, $input: update_floss_input!) {\n  update_floss_item(id: $id, data: $input) {\n    id\n    brand {\n      id\n      en: translations {\n        brand_name\n      }\n      ja: translations(filter: {languages_code: {code: {_eq: \"ja\"}}}) {\n        brand_name\n      }\n    }\n    code\n    floss_color\n    colors {\n      colors_id {\n        id\n      }\n    }\n    inv_qty\n    wish_qty\n    order\n  }\n}"): (typeof documents)["mutation updateFloss($id: ID!, $input: update_floss_input!) {\n  update_floss_item(id: $id, data: $input) {\n    id\n    brand {\n      id\n      en: translations {\n        brand_name\n      }\n      ja: translations(filter: {languages_code: {code: {_eq: \"ja\"}}}) {\n        brand_name\n      }\n    }\n    code\n    floss_color\n    colors {\n      colors_id {\n        id\n      }\n    }\n    inv_qty\n    wish_qty\n    order\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Floss {\n  floss(limit: -1, sort: [\"brand.id\", \"order\"]) {\n    id\n    brand {\n      id\n      en: translations(filter: {languages_code: {code: {_eq: \"en\"}}}) {\n        brand_name\n      }\n      ja: translations(filter: {languages_code: {code: {_eq: \"ja\"}}}) {\n        brand_name\n      }\n    }\n    code\n    floss_color\n    colors {\n      colors_id {\n        id\n      }\n    }\n    inv_qty\n    wish_qty\n    order\n  }\n}"): (typeof documents)["query Floss {\n  floss(limit: -1, sort: [\"brand.id\", \"order\"]) {\n    id\n    brand {\n      id\n      en: translations(filter: {languages_code: {code: {_eq: \"en\"}}}) {\n        brand_name\n      }\n      ja: translations(filter: {languages_code: {code: {_eq: \"ja\"}}}) {\n        brand_name\n      }\n    }\n    code\n    floss_color\n    colors {\n      colors_id {\n        id\n      }\n    }\n    inv_qty\n    wish_qty\n    order\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Pencils {\n  pencils(limit: -1, sort: [\"brand.id\", \"order\"]) {\n    id\n    code\n    pencil_color\n    brand {\n      id\n      en: translations {\n        brand_name\n      }\n      ja: translations(filter: {languages_code: {code: {_eq: \"ja\"}}}) {\n        brand_name\n      }\n    }\n  }\n}"): (typeof documents)["query Pencils {\n  pencils(limit: -1, sort: [\"brand.id\", \"order\"]) {\n    id\n    code\n    pencil_color\n    brand {\n      id\n      en: translations {\n        brand_name\n      }\n      ja: translations(filter: {languages_code: {code: {_eq: \"ja\"}}}) {\n        brand_name\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;