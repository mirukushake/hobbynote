/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** ISO8601 Date values */
  Date: { input: any; output: any; }
  /** BigInt value */
  GraphQLBigInt: { input: any; output: any; }
  /** A Float or a String */
  GraphQLStringOrFloat: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  __typename?: 'Mutation';
  create_brands_item?: Maybe<Brands>;
  create_brands_items: Array<Brands>;
  create_brands_translations_item?: Maybe<Brands_Translations>;
  create_brands_translations_items: Array<Brands_Translations>;
  create_colors_item?: Maybe<Colors>;
  create_colors_items: Array<Colors>;
  create_colors_translations_item?: Maybe<Colors_Translations>;
  create_colors_translations_items: Array<Colors_Translations>;
  create_embroidery_design_floss_item?: Maybe<Embroidery_Design_Floss>;
  create_embroidery_design_floss_items: Array<Embroidery_Design_Floss>;
  create_embroidery_design_item?: Maybe<Embroidery_Design>;
  create_embroidery_design_items: Array<Embroidery_Design>;
  create_floss_colors_item?: Maybe<Floss_Colors>;
  create_floss_colors_items: Array<Floss_Colors>;
  create_floss_floss_item?: Maybe<Floss_Floss>;
  create_floss_floss_items: Array<Floss_Floss>;
  create_floss_item?: Maybe<Floss>;
  create_floss_items: Array<Floss>;
  create_pencils_colors_item?: Maybe<Pencils_Colors>;
  create_pencils_colors_items: Array<Pencils_Colors>;
  create_pencils_item?: Maybe<Pencils>;
  create_pencils_items: Array<Pencils>;
  create_pencils_translations_item?: Maybe<Pencils_Translations>;
  create_pencils_translations_items: Array<Pencils_Translations>;
  create_pigments_colors_item?: Maybe<Pigments_Colors>;
  create_pigments_colors_items: Array<Pigments_Colors>;
  create_pigments_item?: Maybe<Pigments>;
  create_pigments_items: Array<Pigments>;
  create_watercolors_colors_item?: Maybe<Watercolors_Colors>;
  create_watercolors_colors_items: Array<Watercolors_Colors>;
  create_watercolors_item?: Maybe<Watercolors>;
  create_watercolors_items: Array<Watercolors>;
  create_watercolors_pigments_item?: Maybe<Watercolors_Pigments>;
  create_watercolors_pigments_items: Array<Watercolors_Pigments>;
  create_watercolors_translations_item?: Maybe<Watercolors_Translations>;
  create_watercolors_translations_items: Array<Watercolors_Translations>;
  delete_brands_item?: Maybe<Delete_One>;
  delete_brands_items?: Maybe<Delete_Many>;
  delete_brands_translations_item?: Maybe<Delete_One>;
  delete_brands_translations_items?: Maybe<Delete_Many>;
  delete_colors_item?: Maybe<Delete_One>;
  delete_colors_items?: Maybe<Delete_Many>;
  delete_colors_translations_item?: Maybe<Delete_One>;
  delete_colors_translations_items?: Maybe<Delete_Many>;
  delete_embroidery_design_floss_item?: Maybe<Delete_One>;
  delete_embroidery_design_floss_items?: Maybe<Delete_Many>;
  delete_embroidery_design_item?: Maybe<Delete_One>;
  delete_embroidery_design_items?: Maybe<Delete_Many>;
  delete_floss_colors_item?: Maybe<Delete_One>;
  delete_floss_colors_items?: Maybe<Delete_Many>;
  delete_floss_floss_item?: Maybe<Delete_One>;
  delete_floss_floss_items?: Maybe<Delete_Many>;
  delete_floss_item?: Maybe<Delete_One>;
  delete_floss_items?: Maybe<Delete_Many>;
  delete_pencils_colors_item?: Maybe<Delete_One>;
  delete_pencils_colors_items?: Maybe<Delete_Many>;
  delete_pencils_item?: Maybe<Delete_One>;
  delete_pencils_items?: Maybe<Delete_Many>;
  delete_pencils_translations_item?: Maybe<Delete_One>;
  delete_pencils_translations_items?: Maybe<Delete_Many>;
  delete_pigments_colors_item?: Maybe<Delete_One>;
  delete_pigments_colors_items?: Maybe<Delete_Many>;
  delete_pigments_item?: Maybe<Delete_One>;
  delete_pigments_items?: Maybe<Delete_Many>;
  delete_watercolors_colors_item?: Maybe<Delete_One>;
  delete_watercolors_colors_items?: Maybe<Delete_Many>;
  delete_watercolors_item?: Maybe<Delete_One>;
  delete_watercolors_items?: Maybe<Delete_Many>;
  delete_watercolors_pigments_item?: Maybe<Delete_One>;
  delete_watercolors_pigments_items?: Maybe<Delete_Many>;
  delete_watercolors_translations_item?: Maybe<Delete_One>;
  delete_watercolors_translations_items?: Maybe<Delete_Many>;
  update_brands_batch: Array<Brands>;
  update_brands_item?: Maybe<Brands>;
  update_brands_items: Array<Brands>;
  update_brands_translations_batch: Array<Brands_Translations>;
  update_brands_translations_item?: Maybe<Brands_Translations>;
  update_brands_translations_items: Array<Brands_Translations>;
  update_colors_batch: Array<Colors>;
  update_colors_item?: Maybe<Colors>;
  update_colors_items: Array<Colors>;
  update_colors_translations_batch: Array<Colors_Translations>;
  update_colors_translations_item?: Maybe<Colors_Translations>;
  update_colors_translations_items: Array<Colors_Translations>;
  update_embroidery_design_batch: Array<Embroidery_Design>;
  update_embroidery_design_floss_batch: Array<Embroidery_Design_Floss>;
  update_embroidery_design_floss_item?: Maybe<Embroidery_Design_Floss>;
  update_embroidery_design_floss_items: Array<Embroidery_Design_Floss>;
  update_embroidery_design_item?: Maybe<Embroidery_Design>;
  update_embroidery_design_items: Array<Embroidery_Design>;
  update_floss_batch: Array<Floss>;
  update_floss_colors_batch: Array<Floss_Colors>;
  update_floss_colors_item?: Maybe<Floss_Colors>;
  update_floss_colors_items: Array<Floss_Colors>;
  update_floss_floss_batch: Array<Floss_Floss>;
  update_floss_floss_item?: Maybe<Floss_Floss>;
  update_floss_floss_items: Array<Floss_Floss>;
  update_floss_item?: Maybe<Floss>;
  update_floss_items: Array<Floss>;
  update_pencils_batch: Array<Pencils>;
  update_pencils_colors_batch: Array<Pencils_Colors>;
  update_pencils_colors_item?: Maybe<Pencils_Colors>;
  update_pencils_colors_items: Array<Pencils_Colors>;
  update_pencils_item?: Maybe<Pencils>;
  update_pencils_items: Array<Pencils>;
  update_pencils_translations_batch: Array<Pencils_Translations>;
  update_pencils_translations_item?: Maybe<Pencils_Translations>;
  update_pencils_translations_items: Array<Pencils_Translations>;
  update_pigments_batch: Array<Pigments>;
  update_pigments_colors_batch: Array<Pigments_Colors>;
  update_pigments_colors_item?: Maybe<Pigments_Colors>;
  update_pigments_colors_items: Array<Pigments_Colors>;
  update_pigments_item?: Maybe<Pigments>;
  update_pigments_items: Array<Pigments>;
  update_watercolors_batch: Array<Watercolors>;
  update_watercolors_colors_batch: Array<Watercolors_Colors>;
  update_watercolors_colors_item?: Maybe<Watercolors_Colors>;
  update_watercolors_colors_items: Array<Watercolors_Colors>;
  update_watercolors_item?: Maybe<Watercolors>;
  update_watercolors_items: Array<Watercolors>;
  update_watercolors_pigments_batch: Array<Watercolors_Pigments>;
  update_watercolors_pigments_item?: Maybe<Watercolors_Pigments>;
  update_watercolors_pigments_items: Array<Watercolors_Pigments>;
  update_watercolors_translations_batch: Array<Watercolors_Translations>;
  update_watercolors_translations_item?: Maybe<Watercolors_Translations>;
  update_watercolors_translations_items: Array<Watercolors_Translations>;
};


export type MutationCreate_Brands_ItemArgs = {
  data: Create_Brands_Input;
};


export type MutationCreate_Brands_ItemsArgs = {
  data?: InputMaybe<Array<Create_Brands_Input>>;
  filter?: InputMaybe<Brands_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Brands_Translations_ItemArgs = {
  data: Create_Brands_Translations_Input;
};


export type MutationCreate_Brands_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Brands_Translations_Input>>;
  filter?: InputMaybe<Brands_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Colors_ItemArgs = {
  data: Create_Colors_Input;
};


export type MutationCreate_Colors_ItemsArgs = {
  data?: InputMaybe<Array<Create_Colors_Input>>;
  filter?: InputMaybe<Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Colors_Translations_ItemArgs = {
  data: Create_Colors_Translations_Input;
};


export type MutationCreate_Colors_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Colors_Translations_Input>>;
  filter?: InputMaybe<Colors_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Embroidery_Design_Floss_ItemArgs = {
  data: Create_Embroidery_Design_Floss_Input;
};


export type MutationCreate_Embroidery_Design_Floss_ItemsArgs = {
  data?: InputMaybe<Array<Create_Embroidery_Design_Floss_Input>>;
  filter?: InputMaybe<Embroidery_Design_Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Embroidery_Design_ItemArgs = {
  data: Create_Embroidery_Design_Input;
};


export type MutationCreate_Embroidery_Design_ItemsArgs = {
  data?: InputMaybe<Array<Create_Embroidery_Design_Input>>;
  filter?: InputMaybe<Embroidery_Design_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Floss_Colors_ItemArgs = {
  data: Create_Floss_Colors_Input;
};


export type MutationCreate_Floss_Colors_ItemsArgs = {
  data?: InputMaybe<Array<Create_Floss_Colors_Input>>;
  filter?: InputMaybe<Floss_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Floss_Floss_ItemArgs = {
  data: Create_Floss_Floss_Input;
};


export type MutationCreate_Floss_Floss_ItemsArgs = {
  data?: InputMaybe<Array<Create_Floss_Floss_Input>>;
  filter?: InputMaybe<Floss_Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Floss_ItemArgs = {
  data: Create_Floss_Input;
};


export type MutationCreate_Floss_ItemsArgs = {
  data?: InputMaybe<Array<Create_Floss_Input>>;
  filter?: InputMaybe<Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Pencils_Colors_ItemArgs = {
  data: Create_Pencils_Colors_Input;
};


export type MutationCreate_Pencils_Colors_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pencils_Colors_Input>>;
  filter?: InputMaybe<Pencils_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Pencils_ItemArgs = {
  data: Create_Pencils_Input;
};


export type MutationCreate_Pencils_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pencils_Input>>;
  filter?: InputMaybe<Pencils_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Pencils_Translations_ItemArgs = {
  data: Create_Pencils_Translations_Input;
};


export type MutationCreate_Pencils_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pencils_Translations_Input>>;
  filter?: InputMaybe<Pencils_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Pigments_Colors_ItemArgs = {
  data: Create_Pigments_Colors_Input;
};


export type MutationCreate_Pigments_Colors_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pigments_Colors_Input>>;
  filter?: InputMaybe<Pigments_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Pigments_ItemArgs = {
  data: Create_Pigments_Input;
};


export type MutationCreate_Pigments_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pigments_Input>>;
  filter?: InputMaybe<Pigments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Watercolors_Colors_ItemArgs = {
  data: Create_Watercolors_Colors_Input;
};


export type MutationCreate_Watercolors_Colors_ItemsArgs = {
  data?: InputMaybe<Array<Create_Watercolors_Colors_Input>>;
  filter?: InputMaybe<Watercolors_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Watercolors_ItemArgs = {
  data: Create_Watercolors_Input;
};


export type MutationCreate_Watercolors_ItemsArgs = {
  data?: InputMaybe<Array<Create_Watercolors_Input>>;
  filter?: InputMaybe<Watercolors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Watercolors_Pigments_ItemArgs = {
  data: Create_Watercolors_Pigments_Input;
};


export type MutationCreate_Watercolors_Pigments_ItemsArgs = {
  data?: InputMaybe<Array<Create_Watercolors_Pigments_Input>>;
  filter?: InputMaybe<Watercolors_Pigments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Watercolors_Translations_ItemArgs = {
  data: Create_Watercolors_Translations_Input;
};


export type MutationCreate_Watercolors_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Watercolors_Translations_Input>>;
  filter?: InputMaybe<Watercolors_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDelete_Brands_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Brands_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Brands_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Brands_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Colors_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Colors_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Colors_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Colors_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Embroidery_Design_Floss_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Embroidery_Design_Floss_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Embroidery_Design_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Embroidery_Design_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Floss_Colors_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Floss_Colors_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Floss_Floss_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Floss_Floss_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Floss_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Floss_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Pencils_Colors_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Pencils_Colors_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Pencils_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Pencils_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Pencils_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Pencils_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Pigments_Colors_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Pigments_Colors_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Pigments_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Pigments_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Watercolors_Colors_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Watercolors_Colors_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Watercolors_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Watercolors_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Watercolors_Pigments_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Watercolors_Pigments_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Watercolors_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Watercolors_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdate_Brands_BatchArgs = {
  data?: InputMaybe<Array<Update_Brands_Input>>;
  filter?: InputMaybe<Brands_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Brands_ItemArgs = {
  data: Update_Brands_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Brands_ItemsArgs = {
  data: Update_Brands_Input;
  filter?: InputMaybe<Brands_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Brands_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Brands_Translations_Input>>;
  filter?: InputMaybe<Brands_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Brands_Translations_ItemArgs = {
  data: Update_Brands_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Brands_Translations_ItemsArgs = {
  data: Update_Brands_Translations_Input;
  filter?: InputMaybe<Brands_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Colors_BatchArgs = {
  data?: InputMaybe<Array<Update_Colors_Input>>;
  filter?: InputMaybe<Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Colors_ItemArgs = {
  data: Update_Colors_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Colors_ItemsArgs = {
  data: Update_Colors_Input;
  filter?: InputMaybe<Colors_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Colors_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Colors_Translations_Input>>;
  filter?: InputMaybe<Colors_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Colors_Translations_ItemArgs = {
  data: Update_Colors_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Colors_Translations_ItemsArgs = {
  data: Update_Colors_Translations_Input;
  filter?: InputMaybe<Colors_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Embroidery_Design_BatchArgs = {
  data?: InputMaybe<Array<Update_Embroidery_Design_Input>>;
  filter?: InputMaybe<Embroidery_Design_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Embroidery_Design_Floss_BatchArgs = {
  data?: InputMaybe<Array<Update_Embroidery_Design_Floss_Input>>;
  filter?: InputMaybe<Embroidery_Design_Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Embroidery_Design_Floss_ItemArgs = {
  data: Update_Embroidery_Design_Floss_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Embroidery_Design_Floss_ItemsArgs = {
  data: Update_Embroidery_Design_Floss_Input;
  filter?: InputMaybe<Embroidery_Design_Floss_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Embroidery_Design_ItemArgs = {
  data: Update_Embroidery_Design_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Embroidery_Design_ItemsArgs = {
  data: Update_Embroidery_Design_Input;
  filter?: InputMaybe<Embroidery_Design_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Floss_BatchArgs = {
  data?: InputMaybe<Array<Update_Floss_Input>>;
  filter?: InputMaybe<Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Floss_Colors_BatchArgs = {
  data?: InputMaybe<Array<Update_Floss_Colors_Input>>;
  filter?: InputMaybe<Floss_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Floss_Colors_ItemArgs = {
  data: Update_Floss_Colors_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Floss_Colors_ItemsArgs = {
  data: Update_Floss_Colors_Input;
  filter?: InputMaybe<Floss_Colors_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Floss_Floss_BatchArgs = {
  data?: InputMaybe<Array<Update_Floss_Floss_Input>>;
  filter?: InputMaybe<Floss_Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Floss_Floss_ItemArgs = {
  data: Update_Floss_Floss_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Floss_Floss_ItemsArgs = {
  data: Update_Floss_Floss_Input;
  filter?: InputMaybe<Floss_Floss_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Floss_ItemArgs = {
  data: Update_Floss_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Floss_ItemsArgs = {
  data: Update_Floss_Input;
  filter?: InputMaybe<Floss_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pencils_BatchArgs = {
  data?: InputMaybe<Array<Update_Pencils_Input>>;
  filter?: InputMaybe<Pencils_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pencils_Colors_BatchArgs = {
  data?: InputMaybe<Array<Update_Pencils_Colors_Input>>;
  filter?: InputMaybe<Pencils_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pencils_Colors_ItemArgs = {
  data: Update_Pencils_Colors_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Pencils_Colors_ItemsArgs = {
  data: Update_Pencils_Colors_Input;
  filter?: InputMaybe<Pencils_Colors_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pencils_ItemArgs = {
  data: Update_Pencils_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Pencils_ItemsArgs = {
  data: Update_Pencils_Input;
  filter?: InputMaybe<Pencils_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pencils_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Pencils_Translations_Input>>;
  filter?: InputMaybe<Pencils_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pencils_Translations_ItemArgs = {
  data: Update_Pencils_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Pencils_Translations_ItemsArgs = {
  data: Update_Pencils_Translations_Input;
  filter?: InputMaybe<Pencils_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pigments_BatchArgs = {
  data?: InputMaybe<Array<Update_Pigments_Input>>;
  filter?: InputMaybe<Pigments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pigments_Colors_BatchArgs = {
  data?: InputMaybe<Array<Update_Pigments_Colors_Input>>;
  filter?: InputMaybe<Pigments_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pigments_Colors_ItemArgs = {
  data: Update_Pigments_Colors_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Pigments_Colors_ItemsArgs = {
  data: Update_Pigments_Colors_Input;
  filter?: InputMaybe<Pigments_Colors_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Pigments_ItemArgs = {
  data: Update_Pigments_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Pigments_ItemsArgs = {
  data: Update_Pigments_Input;
  filter?: InputMaybe<Pigments_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Watercolors_BatchArgs = {
  data?: InputMaybe<Array<Update_Watercolors_Input>>;
  filter?: InputMaybe<Watercolors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Watercolors_Colors_BatchArgs = {
  data?: InputMaybe<Array<Update_Watercolors_Colors_Input>>;
  filter?: InputMaybe<Watercolors_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Watercolors_Colors_ItemArgs = {
  data: Update_Watercolors_Colors_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Watercolors_Colors_ItemsArgs = {
  data: Update_Watercolors_Colors_Input;
  filter?: InputMaybe<Watercolors_Colors_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Watercolors_ItemArgs = {
  data: Update_Watercolors_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Watercolors_ItemsArgs = {
  data: Update_Watercolors_Input;
  filter?: InputMaybe<Watercolors_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Watercolors_Pigments_BatchArgs = {
  data?: InputMaybe<Array<Update_Watercolors_Pigments_Input>>;
  filter?: InputMaybe<Watercolors_Pigments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Watercolors_Pigments_ItemArgs = {
  data: Update_Watercolors_Pigments_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Watercolors_Pigments_ItemsArgs = {
  data: Update_Watercolors_Pigments_Input;
  filter?: InputMaybe<Watercolors_Pigments_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Watercolors_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Watercolors_Translations_Input>>;
  filter?: InputMaybe<Watercolors_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Watercolors_Translations_ItemArgs = {
  data: Update_Watercolors_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Watercolors_Translations_ItemsArgs = {
  data: Update_Watercolors_Translations_Input;
  filter?: InputMaybe<Watercolors_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Query = {
  __typename?: 'Query';
  brands: Array<Brands>;
  brands_aggregated: Array<Brands_Aggregated>;
  brands_by_id?: Maybe<Brands>;
  brands_translations: Array<Brands_Translations>;
  brands_translations_aggregated: Array<Brands_Translations_Aggregated>;
  brands_translations_by_id?: Maybe<Brands_Translations>;
  categories: Array<Categories>;
  categories_aggregated: Array<Categories_Aggregated>;
  categories_by_id?: Maybe<Categories>;
  categories_translations: Array<Categories_Translations>;
  categories_translations_aggregated: Array<Categories_Translations_Aggregated>;
  categories_translations_by_id?: Maybe<Categories_Translations>;
  colors: Array<Colors>;
  colors_aggregated: Array<Colors_Aggregated>;
  colors_by_id?: Maybe<Colors>;
  colors_translations: Array<Colors_Translations>;
  colors_translations_aggregated: Array<Colors_Translations_Aggregated>;
  colors_translations_by_id?: Maybe<Colors_Translations>;
  embroidery_design: Array<Embroidery_Design>;
  embroidery_design_aggregated: Array<Embroidery_Design_Aggregated>;
  embroidery_design_by_id?: Maybe<Embroidery_Design>;
  embroidery_design_floss: Array<Embroidery_Design_Floss>;
  embroidery_design_floss_aggregated: Array<Embroidery_Design_Floss_Aggregated>;
  embroidery_design_floss_by_id?: Maybe<Embroidery_Design_Floss>;
  floss: Array<Floss>;
  floss_aggregated: Array<Floss_Aggregated>;
  floss_by_id?: Maybe<Floss>;
  floss_colors: Array<Floss_Colors>;
  floss_colors_aggregated: Array<Floss_Colors_Aggregated>;
  floss_colors_by_id?: Maybe<Floss_Colors>;
  floss_floss: Array<Floss_Floss>;
  floss_floss_aggregated: Array<Floss_Floss_Aggregated>;
  floss_floss_by_id?: Maybe<Floss_Floss>;
  languages: Array<Languages>;
  languages_aggregated: Array<Languages_Aggregated>;
  languages_by_id?: Maybe<Languages>;
  pencils: Array<Pencils>;
  pencils_aggregated: Array<Pencils_Aggregated>;
  pencils_by_id?: Maybe<Pencils>;
  pencils_colors: Array<Pencils_Colors>;
  pencils_colors_aggregated: Array<Pencils_Colors_Aggregated>;
  pencils_colors_by_id?: Maybe<Pencils_Colors>;
  pencils_translations: Array<Pencils_Translations>;
  pencils_translations_aggregated: Array<Pencils_Translations_Aggregated>;
  pencils_translations_by_id?: Maybe<Pencils_Translations>;
  pigments: Array<Pigments>;
  pigments_aggregated: Array<Pigments_Aggregated>;
  pigments_by_id?: Maybe<Pigments>;
  pigments_colors: Array<Pigments_Colors>;
  pigments_colors_aggregated: Array<Pigments_Colors_Aggregated>;
  pigments_colors_by_id?: Maybe<Pigments_Colors>;
  series: Array<Series>;
  series_aggregated: Array<Series_Aggregated>;
  series_by_id?: Maybe<Series>;
  series_translations: Array<Series_Translations>;
  series_translations_aggregated: Array<Series_Translations_Aggregated>;
  series_translations_by_id?: Maybe<Series_Translations>;
  watercolors: Array<Watercolors>;
  watercolors_aggregated: Array<Watercolors_Aggregated>;
  watercolors_by_id?: Maybe<Watercolors>;
  watercolors_colors: Array<Watercolors_Colors>;
  watercolors_colors_aggregated: Array<Watercolors_Colors_Aggregated>;
  watercolors_colors_by_id?: Maybe<Watercolors_Colors>;
  watercolors_pigments: Array<Watercolors_Pigments>;
  watercolors_pigments_aggregated: Array<Watercolors_Pigments_Aggregated>;
  watercolors_pigments_by_id?: Maybe<Watercolors_Pigments>;
  watercolors_translations: Array<Watercolors_Translations>;
  watercolors_translations_aggregated: Array<Watercolors_Translations_Aggregated>;
  watercolors_translations_by_id?: Maybe<Watercolors_Translations>;
};


export type QueryBrandsArgs = {
  filter?: InputMaybe<Brands_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBrands_AggregatedArgs = {
  filter?: InputMaybe<Brands_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBrands_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBrands_TranslationsArgs = {
  filter?: InputMaybe<Brands_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBrands_Translations_AggregatedArgs = {
  filter?: InputMaybe<Brands_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBrands_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategories_AggregatedArgs = {
  filter?: InputMaybe<Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategories_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategories_TranslationsArgs = {
  filter?: InputMaybe<Categories_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategories_Translations_AggregatedArgs = {
  filter?: InputMaybe<Categories_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategories_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryColorsArgs = {
  filter?: InputMaybe<Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryColors_AggregatedArgs = {
  filter?: InputMaybe<Colors_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryColors_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryColors_TranslationsArgs = {
  filter?: InputMaybe<Colors_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryColors_Translations_AggregatedArgs = {
  filter?: InputMaybe<Colors_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryColors_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEmbroidery_DesignArgs = {
  filter?: InputMaybe<Embroidery_Design_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEmbroidery_Design_AggregatedArgs = {
  filter?: InputMaybe<Embroidery_Design_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEmbroidery_Design_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEmbroidery_Design_FlossArgs = {
  filter?: InputMaybe<Embroidery_Design_Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEmbroidery_Design_Floss_AggregatedArgs = {
  filter?: InputMaybe<Embroidery_Design_Floss_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEmbroidery_Design_Floss_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFlossArgs = {
  filter?: InputMaybe<Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFloss_AggregatedArgs = {
  filter?: InputMaybe<Floss_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFloss_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFloss_ColorsArgs = {
  filter?: InputMaybe<Floss_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFloss_Colors_AggregatedArgs = {
  filter?: InputMaybe<Floss_Colors_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFloss_Colors_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFloss_FlossArgs = {
  filter?: InputMaybe<Floss_Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFloss_Floss_AggregatedArgs = {
  filter?: InputMaybe<Floss_Floss_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFloss_Floss_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_AggregatedArgs = {
  filter?: InputMaybe<Languages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPencilsArgs = {
  filter?: InputMaybe<Pencils_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPencils_AggregatedArgs = {
  filter?: InputMaybe<Pencils_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPencils_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPencils_ColorsArgs = {
  filter?: InputMaybe<Pencils_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPencils_Colors_AggregatedArgs = {
  filter?: InputMaybe<Pencils_Colors_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPencils_Colors_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPencils_TranslationsArgs = {
  filter?: InputMaybe<Pencils_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPencils_Translations_AggregatedArgs = {
  filter?: InputMaybe<Pencils_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPencils_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPigmentsArgs = {
  filter?: InputMaybe<Pigments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPigments_AggregatedArgs = {
  filter?: InputMaybe<Pigments_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPigments_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPigments_ColorsArgs = {
  filter?: InputMaybe<Pigments_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPigments_Colors_AggregatedArgs = {
  filter?: InputMaybe<Pigments_Colors_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPigments_Colors_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySeriesArgs = {
  filter?: InputMaybe<Series_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeries_AggregatedArgs = {
  filter?: InputMaybe<Series_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeries_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySeries_TranslationsArgs = {
  filter?: InputMaybe<Series_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeries_Translations_AggregatedArgs = {
  filter?: InputMaybe<Series_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeries_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWatercolorsArgs = {
  filter?: InputMaybe<Watercolors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWatercolors_AggregatedArgs = {
  filter?: InputMaybe<Watercolors_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWatercolors_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWatercolors_ColorsArgs = {
  filter?: InputMaybe<Watercolors_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWatercolors_Colors_AggregatedArgs = {
  filter?: InputMaybe<Watercolors_Colors_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWatercolors_Colors_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWatercolors_PigmentsArgs = {
  filter?: InputMaybe<Watercolors_Pigments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWatercolors_Pigments_AggregatedArgs = {
  filter?: InputMaybe<Watercolors_Pigments_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWatercolors_Pigments_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWatercolors_TranslationsArgs = {
  filter?: InputMaybe<Watercolors_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWatercolors_Translations_AggregatedArgs = {
  filter?: InputMaybe<Watercolors_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWatercolors_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  brands_mutated?: Maybe<Brands_Mutated>;
  brands_translations_mutated?: Maybe<Brands_Translations_Mutated>;
  categories_mutated?: Maybe<Categories_Mutated>;
  categories_translations_mutated?: Maybe<Categories_Translations_Mutated>;
  colors_mutated?: Maybe<Colors_Mutated>;
  colors_translations_mutated?: Maybe<Colors_Translations_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  embroidery_design_floss_mutated?: Maybe<Embroidery_Design_Floss_Mutated>;
  embroidery_design_mutated?: Maybe<Embroidery_Design_Mutated>;
  floss_colors_mutated?: Maybe<Floss_Colors_Mutated>;
  floss_floss_mutated?: Maybe<Floss_Floss_Mutated>;
  floss_mutated?: Maybe<Floss_Mutated>;
  languages_mutated?: Maybe<Languages_Mutated>;
  pencils_colors_mutated?: Maybe<Pencils_Colors_Mutated>;
  pencils_mutated?: Maybe<Pencils_Mutated>;
  pencils_translations_mutated?: Maybe<Pencils_Translations_Mutated>;
  pigments_colors_mutated?: Maybe<Pigments_Colors_Mutated>;
  pigments_mutated?: Maybe<Pigments_Mutated>;
  series_mutated?: Maybe<Series_Mutated>;
  series_translations_mutated?: Maybe<Series_Translations_Mutated>;
  watercolors_colors_mutated?: Maybe<Watercolors_Colors_Mutated>;
  watercolors_mutated?: Maybe<Watercolors_Mutated>;
  watercolors_pigments_mutated?: Maybe<Watercolors_Pigments_Mutated>;
  watercolors_translations_mutated?: Maybe<Watercolors_Translations_Mutated>;
};


export type SubscriptionBrands_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBrands_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCategories_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCategories_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionColors_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionColors_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionEmbroidery_Design_Floss_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionEmbroidery_Design_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionFloss_Colors_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionFloss_Floss_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionFloss_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLanguages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPencils_Colors_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPencils_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPencils_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPigments_Colors_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPigments_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSeries_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSeries_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionWatercolors_Colors_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionWatercolors_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionWatercolors_Pigments_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionWatercolors_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Brands = {
  __typename?: 'brands';
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Array<Maybe<Brands_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type BrandsTranslationsArgs = {
  filter?: InputMaybe<Brands_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Brands_Aggregated = {
  __typename?: 'brands_aggregated';
  avg?: Maybe<Brands_Aggregated_Fields>;
  avgDistinct?: Maybe<Brands_Aggregated_Fields>;
  count?: Maybe<Brands_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Brands_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Brands_Aggregated_Fields>;
  min?: Maybe<Brands_Aggregated_Fields>;
  sum?: Maybe<Brands_Aggregated_Fields>;
  sumDistinct?: Maybe<Brands_Aggregated_Fields>;
};

export type Brands_Aggregated_Count = {
  __typename?: 'brands_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Brands_Aggregated_Fields = {
  __typename?: 'brands_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Brands_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Brands_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Brands_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Brands_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Brands_Mutated = {
  __typename?: 'brands_mutated';
  data?: Maybe<Brands>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Brands_Translations = {
  __typename?: 'brands_translations';
  brand_name?: Maybe<Scalars['String']['output']>;
  brands_id?: Maybe<Brands>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
};


export type Brands_TranslationsBrands_IdArgs = {
  filter?: InputMaybe<Brands_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Brands_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Brands_Translations_Aggregated = {
  __typename?: 'brands_translations_aggregated';
  avg?: Maybe<Brands_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Brands_Translations_Aggregated_Fields>;
  count?: Maybe<Brands_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Brands_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Brands_Translations_Aggregated_Fields>;
  min?: Maybe<Brands_Translations_Aggregated_Fields>;
  sum?: Maybe<Brands_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Brands_Translations_Aggregated_Fields>;
};

export type Brands_Translations_Aggregated_Count = {
  __typename?: 'brands_translations_aggregated_count';
  brand_name?: Maybe<Scalars['Int']['output']>;
  brands_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
};

export type Brands_Translations_Aggregated_Fields = {
  __typename?: 'brands_translations_aggregated_fields';
  brands_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Brands_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Brands_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Brands_Translations_Filter>>>;
  brand_name?: InputMaybe<String_Filter_Operators>;
  brands_id?: InputMaybe<Brands_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
};

export type Brands_Translations_Mutated = {
  __typename?: 'brands_translations_mutated';
  data?: Maybe<Brands_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Categories = {
  __typename?: 'categories';
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Categories>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Array<Maybe<Categories_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type CategoriesParentArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoriesTranslationsArgs = {
  filter?: InputMaybe<Categories_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Categories_Aggregated = {
  __typename?: 'categories_aggregated';
  avg?: Maybe<Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Categories_Aggregated_Fields>;
  count?: Maybe<Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Categories_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Categories_Aggregated_Fields>;
  min?: Maybe<Categories_Aggregated_Fields>;
  sum?: Maybe<Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Categories_Aggregated_Fields>;
};

export type Categories_Aggregated_Count = {
  __typename?: 'categories_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Categories_Aggregated_Fields = {
  __typename?: 'categories_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  order?: InputMaybe<Number_Filter_Operators>;
  parent?: InputMaybe<Categories_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Categories_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Categories_Mutated = {
  __typename?: 'categories_mutated';
  data?: Maybe<Categories>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Categories_Translations = {
  __typename?: 'categories_translations';
  categories_id?: Maybe<Categories>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  name?: Maybe<Scalars['String']['output']>;
};


export type Categories_TranslationsCategories_IdArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Categories_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Categories_Translations_Aggregated = {
  __typename?: 'categories_translations_aggregated';
  avg?: Maybe<Categories_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Categories_Translations_Aggregated_Fields>;
  count?: Maybe<Categories_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Categories_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Categories_Translations_Aggregated_Fields>;
  min?: Maybe<Categories_Translations_Aggregated_Fields>;
  sum?: Maybe<Categories_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Categories_Translations_Aggregated_Fields>;
};

export type Categories_Translations_Aggregated_Count = {
  __typename?: 'categories_translations_aggregated_count';
  categories_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
};

export type Categories_Translations_Aggregated_Fields = {
  __typename?: 'categories_translations_aggregated_fields';
  categories_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Categories_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Translations_Filter>>>;
  categories_id?: InputMaybe<Categories_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type Categories_Translations_Mutated = {
  __typename?: 'categories_translations_mutated';
  data?: Maybe<Categories_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Colors = {
  __typename?: 'colors';
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Array<Maybe<Colors_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type ColorsTranslationsArgs = {
  filter?: InputMaybe<Colors_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Colors_Aggregated = {
  __typename?: 'colors_aggregated';
  avg?: Maybe<Colors_Aggregated_Fields>;
  avgDistinct?: Maybe<Colors_Aggregated_Fields>;
  count?: Maybe<Colors_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Colors_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Colors_Aggregated_Fields>;
  min?: Maybe<Colors_Aggregated_Fields>;
  sum?: Maybe<Colors_Aggregated_Fields>;
  sumDistinct?: Maybe<Colors_Aggregated_Fields>;
};

export type Colors_Aggregated_Count = {
  __typename?: 'colors_aggregated_count';
  color?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Colors_Aggregated_Fields = {
  __typename?: 'colors_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Colors_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Colors_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Colors_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Colors_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Colors_Mutated = {
  __typename?: 'colors_mutated';
  data?: Maybe<Colors>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Colors_Translations = {
  __typename?: 'colors_translations';
  color_name?: Maybe<Scalars['String']['output']>;
  colors_id?: Maybe<Colors>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
};


export type Colors_TranslationsColors_IdArgs = {
  filter?: InputMaybe<Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Colors_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Colors_Translations_Aggregated = {
  __typename?: 'colors_translations_aggregated';
  avg?: Maybe<Colors_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Colors_Translations_Aggregated_Fields>;
  count?: Maybe<Colors_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Colors_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Colors_Translations_Aggregated_Fields>;
  min?: Maybe<Colors_Translations_Aggregated_Fields>;
  sum?: Maybe<Colors_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Colors_Translations_Aggregated_Fields>;
};

export type Colors_Translations_Aggregated_Count = {
  __typename?: 'colors_translations_aggregated_count';
  color_name?: Maybe<Scalars['Int']['output']>;
  colors_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
};

export type Colors_Translations_Aggregated_Fields = {
  __typename?: 'colors_translations_aggregated_fields';
  colors_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Colors_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Colors_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Colors_Translations_Filter>>>;
  color_name?: InputMaybe<String_Filter_Operators>;
  colors_id?: InputMaybe<Colors_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
};

export type Colors_Translations_Mutated = {
  __typename?: 'colors_translations_mutated';
  data?: Maybe<Colors_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Create_Brands_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Brands_Translations_Input>>>;
};

export type Create_Brands_Translations_Input = {
  brand_name?: InputMaybe<Scalars['String']['input']>;
  brands_id?: InputMaybe<Create_Brands_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Colors_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Colors_Translations_Input>>>;
};

export type Create_Colors_Translations_Input = {
  color_name?: InputMaybe<Scalars['String']['input']>;
  colors_id?: InputMaybe<Create_Colors_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Embroidery_Design_Floss_Input = {
  embroidery_design_id?: InputMaybe<Create_Embroidery_Design_Input>;
  floss_id?: InputMaybe<Create_Floss_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Create_Embroidery_Design_Input = {
  book_page?: InputMaybe<Scalars['Int']['input']>;
  book_title?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  design?: InputMaybe<Scalars['String']['input']>;
  finished_image?: InputMaybe<Scalars['String']['input']>;
  floss?: InputMaybe<Array<InputMaybe<Create_Embroidery_Design_Floss_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title: Scalars['String']['input'];
  website_url?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Floss_Colors_Input = {
  colors_id?: InputMaybe<Create_Colors_Input>;
  floss_id?: InputMaybe<Create_Floss_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Create_Floss_Floss_Input = {
  floss_id?: InputMaybe<Create_Floss_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  related_floss_id?: InputMaybe<Create_Floss_Input>;
};

export type Create_Floss_Input = {
  alternative?: InputMaybe<Array<InputMaybe<Create_Floss_Floss_Input>>>;
  brand?: InputMaybe<Create_Brands_Input>;
  code?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Create_Floss_Colors_Input>>>;
  floss_color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inv_qty?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  wish_qty?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Pencils_Colors_Input = {
  colors_id?: InputMaybe<Create_Colors_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pencils_id?: InputMaybe<Create_Pencils_Input>;
};

export type Create_Pencils_Input = {
  brand?: InputMaybe<Create_Brands_Input>;
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Create_Colors_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inv_qty?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pencil_color?: InputMaybe<Scalars['String']['input']>;
  series?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Pencils_Translations_Input>>>;
  wish_qty?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Pencils_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Scalars['String']['input']>;
  pencil_name?: InputMaybe<Scalars['String']['input']>;
  pencils_id?: InputMaybe<Create_Pencils_Input>;
};

export type Create_Pigments_Colors_Input = {
  colors_id?: InputMaybe<Create_Colors_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pigments_id?: InputMaybe<Create_Pigments_Input>;
};

export type Create_Pigments_Input = {
  alt_name?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Create_Pigments_Colors_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Watercolors_Colors_Input = {
  colors_id?: InputMaybe<Create_Colors_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  watercolors_id?: InputMaybe<Create_Watercolors_Input>;
};

export type Create_Watercolors_Input = {
  brand?: InputMaybe<Create_Brands_Input>;
  code?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Create_Watercolors_Colors_Input>>>;
  grade?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inv_qty?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pigments?: InputMaybe<Array<InputMaybe<Create_Watercolors_Pigments_Input>>>;
  series?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['JSON']['input']>;
  swatch?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Watercolors_Translations_Input>>>;
  wish_qty?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Watercolors_Pigments_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  pigments_id?: InputMaybe<Create_Pigments_Input>;
  watercolors_id?: InputMaybe<Create_Watercolors_Input>;
};

export type Create_Watercolors_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Scalars['String']['input']>;
  paint_name?: InputMaybe<Scalars['String']['input']>;
  watercolors_id?: InputMaybe<Create_Watercolors_Input>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']['output']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID']['output'];
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars['String']['output']>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Scalars['String']['output']>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<String_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  __typename?: 'directus_files_mutated';
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Embroidery_Design = {
  __typename?: 'embroidery_design';
  book_page?: Maybe<Scalars['Int']['output']>;
  book_title?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  design?: Maybe<Directus_Files>;
  finished_image?: Maybe<Directus_Files>;
  floss?: Maybe<Array<Maybe<Embroidery_Design_Floss>>>;
  floss_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title: Scalars['String']['output'];
  website_url?: Maybe<Scalars['String']['output']>;
};


export type Embroidery_DesignDesignArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Embroidery_DesignFinished_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Embroidery_DesignFlossArgs = {
  filter?: InputMaybe<Embroidery_Design_Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Embroidery_Design_Aggregated = {
  __typename?: 'embroidery_design_aggregated';
  avg?: Maybe<Embroidery_Design_Aggregated_Fields>;
  avgDistinct?: Maybe<Embroidery_Design_Aggregated_Fields>;
  count?: Maybe<Embroidery_Design_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Embroidery_Design_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Embroidery_Design_Aggregated_Fields>;
  min?: Maybe<Embroidery_Design_Aggregated_Fields>;
  sum?: Maybe<Embroidery_Design_Aggregated_Fields>;
  sumDistinct?: Maybe<Embroidery_Design_Aggregated_Fields>;
};

export type Embroidery_Design_Aggregated_Count = {
  __typename?: 'embroidery_design_aggregated_count';
  book_page?: Maybe<Scalars['Int']['output']>;
  book_title?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  design?: Maybe<Scalars['Int']['output']>;
  finished_image?: Maybe<Scalars['Int']['output']>;
  floss?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  notes?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  website_url?: Maybe<Scalars['Int']['output']>;
};

export type Embroidery_Design_Aggregated_Fields = {
  __typename?: 'embroidery_design_aggregated_fields';
  book_page?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Embroidery_Design_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Embroidery_Design_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Embroidery_Design_Filter>>>;
  book_page?: InputMaybe<Number_Filter_Operators>;
  book_title?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  design?: InputMaybe<Directus_Files_Filter>;
  finished_image?: InputMaybe<Directus_Files_Filter>;
  floss?: InputMaybe<Embroidery_Design_Floss_Filter>;
  floss_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  notes?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  website_url?: InputMaybe<String_Filter_Operators>;
};

export type Embroidery_Design_Floss = {
  __typename?: 'embroidery_design_floss';
  embroidery_design_id?: Maybe<Embroidery_Design>;
  floss_id?: Maybe<Floss>;
  id: Scalars['ID']['output'];
};


export type Embroidery_Design_FlossEmbroidery_Design_IdArgs = {
  filter?: InputMaybe<Embroidery_Design_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Embroidery_Design_FlossFloss_IdArgs = {
  filter?: InputMaybe<Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Embroidery_Design_Floss_Aggregated = {
  __typename?: 'embroidery_design_floss_aggregated';
  avg?: Maybe<Embroidery_Design_Floss_Aggregated_Fields>;
  avgDistinct?: Maybe<Embroidery_Design_Floss_Aggregated_Fields>;
  count?: Maybe<Embroidery_Design_Floss_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Embroidery_Design_Floss_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Embroidery_Design_Floss_Aggregated_Fields>;
  min?: Maybe<Embroidery_Design_Floss_Aggregated_Fields>;
  sum?: Maybe<Embroidery_Design_Floss_Aggregated_Fields>;
  sumDistinct?: Maybe<Embroidery_Design_Floss_Aggregated_Fields>;
};

export type Embroidery_Design_Floss_Aggregated_Count = {
  __typename?: 'embroidery_design_floss_aggregated_count';
  embroidery_design_id?: Maybe<Scalars['Int']['output']>;
  floss_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Embroidery_Design_Floss_Aggregated_Fields = {
  __typename?: 'embroidery_design_floss_aggregated_fields';
  embroidery_design_id?: Maybe<Scalars['Float']['output']>;
  floss_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Embroidery_Design_Floss_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Embroidery_Design_Floss_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Embroidery_Design_Floss_Filter>>>;
  embroidery_design_id?: InputMaybe<Embroidery_Design_Filter>;
  floss_id?: InputMaybe<Floss_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Embroidery_Design_Floss_Mutated = {
  __typename?: 'embroidery_design_floss_mutated';
  data?: Maybe<Embroidery_Design_Floss>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Embroidery_Design_Mutated = {
  __typename?: 'embroidery_design_mutated';
  data?: Maybe<Embroidery_Design>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Floss = {
  __typename?: 'floss';
  alternative?: Maybe<Array<Maybe<Floss_Floss>>>;
  alternative_func?: Maybe<Count_Functions>;
  brand?: Maybe<Brands>;
  code?: Maybe<Scalars['String']['output']>;
  colors?: Maybe<Array<Maybe<Floss_Colors>>>;
  colors_func?: Maybe<Count_Functions>;
  floss_color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inv_qty?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  wish_qty?: Maybe<Scalars['Int']['output']>;
};


export type FlossAlternativeArgs = {
  filter?: InputMaybe<Floss_Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FlossBrandArgs = {
  filter?: InputMaybe<Brands_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FlossColorsArgs = {
  filter?: InputMaybe<Floss_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Floss_Aggregated = {
  __typename?: 'floss_aggregated';
  avg?: Maybe<Floss_Aggregated_Fields>;
  avgDistinct?: Maybe<Floss_Aggregated_Fields>;
  count?: Maybe<Floss_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Floss_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Floss_Aggregated_Fields>;
  min?: Maybe<Floss_Aggregated_Fields>;
  sum?: Maybe<Floss_Aggregated_Fields>;
  sumDistinct?: Maybe<Floss_Aggregated_Fields>;
};

export type Floss_Aggregated_Count = {
  __typename?: 'floss_aggregated_count';
  alternative?: Maybe<Scalars['Int']['output']>;
  brand?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  colors?: Maybe<Scalars['Int']['output']>;
  floss_color?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inv_qty?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  wish_qty?: Maybe<Scalars['Int']['output']>;
};

export type Floss_Aggregated_Fields = {
  __typename?: 'floss_aggregated_fields';
  brand?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  inv_qty?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
  wish_qty?: Maybe<Scalars['Float']['output']>;
};

export type Floss_Colors = {
  __typename?: 'floss_colors';
  colors_id?: Maybe<Colors>;
  floss_id?: Maybe<Floss>;
  id: Scalars['ID']['output'];
};


export type Floss_ColorsColors_IdArgs = {
  filter?: InputMaybe<Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Floss_ColorsFloss_IdArgs = {
  filter?: InputMaybe<Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Floss_Colors_Aggregated = {
  __typename?: 'floss_colors_aggregated';
  avg?: Maybe<Floss_Colors_Aggregated_Fields>;
  avgDistinct?: Maybe<Floss_Colors_Aggregated_Fields>;
  count?: Maybe<Floss_Colors_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Floss_Colors_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Floss_Colors_Aggregated_Fields>;
  min?: Maybe<Floss_Colors_Aggregated_Fields>;
  sum?: Maybe<Floss_Colors_Aggregated_Fields>;
  sumDistinct?: Maybe<Floss_Colors_Aggregated_Fields>;
};

export type Floss_Colors_Aggregated_Count = {
  __typename?: 'floss_colors_aggregated_count';
  colors_id?: Maybe<Scalars['Int']['output']>;
  floss_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Floss_Colors_Aggregated_Fields = {
  __typename?: 'floss_colors_aggregated_fields';
  colors_id?: Maybe<Scalars['Float']['output']>;
  floss_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Floss_Colors_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Floss_Colors_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Floss_Colors_Filter>>>;
  colors_id?: InputMaybe<Colors_Filter>;
  floss_id?: InputMaybe<Floss_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Floss_Colors_Mutated = {
  __typename?: 'floss_colors_mutated';
  data?: Maybe<Floss_Colors>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Floss_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Floss_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Floss_Filter>>>;
  alternative?: InputMaybe<Floss_Floss_Filter>;
  alternative_func?: InputMaybe<Count_Function_Filter_Operators>;
  brand?: InputMaybe<Brands_Filter>;
  code?: InputMaybe<String_Filter_Operators>;
  colors?: InputMaybe<Floss_Colors_Filter>;
  colors_func?: InputMaybe<Count_Function_Filter_Operators>;
  floss_color?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  inv_qty?: InputMaybe<Number_Filter_Operators>;
  order?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  wish_qty?: InputMaybe<Number_Filter_Operators>;
};

export type Floss_Floss = {
  __typename?: 'floss_floss';
  floss_id?: Maybe<Floss>;
  id: Scalars['ID']['output'];
  related_floss_id?: Maybe<Floss>;
};


export type Floss_FlossFloss_IdArgs = {
  filter?: InputMaybe<Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Floss_FlossRelated_Floss_IdArgs = {
  filter?: InputMaybe<Floss_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Floss_Floss_Aggregated = {
  __typename?: 'floss_floss_aggregated';
  avg?: Maybe<Floss_Floss_Aggregated_Fields>;
  avgDistinct?: Maybe<Floss_Floss_Aggregated_Fields>;
  count?: Maybe<Floss_Floss_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Floss_Floss_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Floss_Floss_Aggregated_Fields>;
  min?: Maybe<Floss_Floss_Aggregated_Fields>;
  sum?: Maybe<Floss_Floss_Aggregated_Fields>;
  sumDistinct?: Maybe<Floss_Floss_Aggregated_Fields>;
};

export type Floss_Floss_Aggregated_Count = {
  __typename?: 'floss_floss_aggregated_count';
  floss_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  related_floss_id?: Maybe<Scalars['Int']['output']>;
};

export type Floss_Floss_Aggregated_Fields = {
  __typename?: 'floss_floss_aggregated_fields';
  floss_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  related_floss_id?: Maybe<Scalars['Float']['output']>;
};

export type Floss_Floss_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Floss_Floss_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Floss_Floss_Filter>>>;
  floss_id?: InputMaybe<Floss_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  related_floss_id?: InputMaybe<Floss_Filter>;
};

export type Floss_Floss_Mutated = {
  __typename?: 'floss_floss_mutated';
  data?: Maybe<Floss_Floss>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Floss_Mutated = {
  __typename?: 'floss_mutated';
  data?: Maybe<Floss>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Languages = {
  __typename?: 'languages';
  code: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Languages_Aggregated = {
  __typename?: 'languages_aggregated';
  count?: Maybe<Languages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Languages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Languages_Aggregated_Count = {
  __typename?: 'languages_aggregated_count';
  code?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
};

export type Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type Languages_Mutated = {
  __typename?: 'languages_mutated';
  data?: Maybe<Languages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Pencils = {
  __typename?: 'pencils';
  brand?: Maybe<Brands>;
  code?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Colors>;
  id: Scalars['ID']['output'];
  inv_qty?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  pencil_color?: Maybe<Scalars['String']['output']>;
  series?: Maybe<Series>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Array<Maybe<Pencils_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  wish_qty?: Maybe<Scalars['Int']['output']>;
};


export type PencilsBrandArgs = {
  filter?: InputMaybe<Brands_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PencilsColorArgs = {
  filter?: InputMaybe<Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PencilsSeriesArgs = {
  filter?: InputMaybe<Series_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PencilsTranslationsArgs = {
  filter?: InputMaybe<Pencils_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pencils_Aggregated = {
  __typename?: 'pencils_aggregated';
  avg?: Maybe<Pencils_Aggregated_Fields>;
  avgDistinct?: Maybe<Pencils_Aggregated_Fields>;
  count?: Maybe<Pencils_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pencils_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pencils_Aggregated_Fields>;
  min?: Maybe<Pencils_Aggregated_Fields>;
  sum?: Maybe<Pencils_Aggregated_Fields>;
  sumDistinct?: Maybe<Pencils_Aggregated_Fields>;
};

export type Pencils_Aggregated_Count = {
  __typename?: 'pencils_aggregated_count';
  brand?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inv_qty?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  pencil_color?: Maybe<Scalars['Int']['output']>;
  series?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  wish_qty?: Maybe<Scalars['Int']['output']>;
};

export type Pencils_Aggregated_Fields = {
  __typename?: 'pencils_aggregated_fields';
  brand?: Maybe<Scalars['Float']['output']>;
  color?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  inv_qty?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  series?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
  wish_qty?: Maybe<Scalars['Float']['output']>;
};

export type Pencils_Colors = {
  __typename?: 'pencils_colors';
  colors_id?: Maybe<Colors>;
  id: Scalars['ID']['output'];
  pencils_id?: Maybe<Pencils>;
};


export type Pencils_ColorsColors_IdArgs = {
  filter?: InputMaybe<Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pencils_ColorsPencils_IdArgs = {
  filter?: InputMaybe<Pencils_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pencils_Colors_Aggregated = {
  __typename?: 'pencils_colors_aggregated';
  avg?: Maybe<Pencils_Colors_Aggregated_Fields>;
  avgDistinct?: Maybe<Pencils_Colors_Aggregated_Fields>;
  count?: Maybe<Pencils_Colors_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pencils_Colors_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pencils_Colors_Aggregated_Fields>;
  min?: Maybe<Pencils_Colors_Aggregated_Fields>;
  sum?: Maybe<Pencils_Colors_Aggregated_Fields>;
  sumDistinct?: Maybe<Pencils_Colors_Aggregated_Fields>;
};

export type Pencils_Colors_Aggregated_Count = {
  __typename?: 'pencils_colors_aggregated_count';
  colors_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  pencils_id?: Maybe<Scalars['Int']['output']>;
};

export type Pencils_Colors_Aggregated_Fields = {
  __typename?: 'pencils_colors_aggregated_fields';
  colors_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pencils_id?: Maybe<Scalars['Float']['output']>;
};

export type Pencils_Colors_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pencils_Colors_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pencils_Colors_Filter>>>;
  colors_id?: InputMaybe<Colors_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  pencils_id?: InputMaybe<Pencils_Filter>;
};

export type Pencils_Colors_Mutated = {
  __typename?: 'pencils_colors_mutated';
  data?: Maybe<Pencils_Colors>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pencils_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pencils_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pencils_Filter>>>;
  brand?: InputMaybe<Brands_Filter>;
  code?: InputMaybe<String_Filter_Operators>;
  color?: InputMaybe<Colors_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  inv_qty?: InputMaybe<Number_Filter_Operators>;
  order?: InputMaybe<Number_Filter_Operators>;
  pencil_color?: InputMaybe<String_Filter_Operators>;
  series?: InputMaybe<Series_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Pencils_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  wish_qty?: InputMaybe<Number_Filter_Operators>;
};

export type Pencils_Mutated = {
  __typename?: 'pencils_mutated';
  data?: Maybe<Pencils>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pencils_Translations = {
  __typename?: 'pencils_translations';
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  pencil_name?: Maybe<Scalars['String']['output']>;
  pencils_id?: Maybe<Pencils>;
};


export type Pencils_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pencils_TranslationsPencils_IdArgs = {
  filter?: InputMaybe<Pencils_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pencils_Translations_Aggregated = {
  __typename?: 'pencils_translations_aggregated';
  avg?: Maybe<Pencils_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Pencils_Translations_Aggregated_Fields>;
  count?: Maybe<Pencils_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pencils_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pencils_Translations_Aggregated_Fields>;
  min?: Maybe<Pencils_Translations_Aggregated_Fields>;
  sum?: Maybe<Pencils_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Pencils_Translations_Aggregated_Fields>;
};

export type Pencils_Translations_Aggregated_Count = {
  __typename?: 'pencils_translations_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  pencil_name?: Maybe<Scalars['Int']['output']>;
  pencils_id?: Maybe<Scalars['Int']['output']>;
};

export type Pencils_Translations_Aggregated_Fields = {
  __typename?: 'pencils_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pencils_id?: Maybe<Scalars['Float']['output']>;
};

export type Pencils_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pencils_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pencils_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  pencil_name?: InputMaybe<String_Filter_Operators>;
  pencils_id?: InputMaybe<Pencils_Filter>;
};

export type Pencils_Translations_Mutated = {
  __typename?: 'pencils_translations_mutated';
  data?: Maybe<Pencils_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pigments = {
  __typename?: 'pigments';
  alt_name?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  colors?: Maybe<Array<Maybe<Pigments_Colors>>>;
  colors_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type PigmentsColorsArgs = {
  filter?: InputMaybe<Pigments_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pigments_Aggregated = {
  __typename?: 'pigments_aggregated';
  avg?: Maybe<Pigments_Aggregated_Fields>;
  avgDistinct?: Maybe<Pigments_Aggregated_Fields>;
  count?: Maybe<Pigments_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pigments_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pigments_Aggregated_Fields>;
  min?: Maybe<Pigments_Aggregated_Fields>;
  sum?: Maybe<Pigments_Aggregated_Fields>;
  sumDistinct?: Maybe<Pigments_Aggregated_Fields>;
};

export type Pigments_Aggregated_Count = {
  __typename?: 'pigments_aggregated_count';
  alt_name?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  colors?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  notes?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Pigments_Aggregated_Fields = {
  __typename?: 'pigments_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Pigments_Colors = {
  __typename?: 'pigments_colors';
  colors_id?: Maybe<Colors>;
  id: Scalars['ID']['output'];
  pigments_id?: Maybe<Pigments>;
};


export type Pigments_ColorsColors_IdArgs = {
  filter?: InputMaybe<Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pigments_ColorsPigments_IdArgs = {
  filter?: InputMaybe<Pigments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pigments_Colors_Aggregated = {
  __typename?: 'pigments_colors_aggregated';
  avg?: Maybe<Pigments_Colors_Aggregated_Fields>;
  avgDistinct?: Maybe<Pigments_Colors_Aggregated_Fields>;
  count?: Maybe<Pigments_Colors_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pigments_Colors_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pigments_Colors_Aggregated_Fields>;
  min?: Maybe<Pigments_Colors_Aggregated_Fields>;
  sum?: Maybe<Pigments_Colors_Aggregated_Fields>;
  sumDistinct?: Maybe<Pigments_Colors_Aggregated_Fields>;
};

export type Pigments_Colors_Aggregated_Count = {
  __typename?: 'pigments_colors_aggregated_count';
  colors_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  pigments_id?: Maybe<Scalars['Int']['output']>;
};

export type Pigments_Colors_Aggregated_Fields = {
  __typename?: 'pigments_colors_aggregated_fields';
  colors_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  pigments_id?: Maybe<Scalars['Float']['output']>;
};

export type Pigments_Colors_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pigments_Colors_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pigments_Colors_Filter>>>;
  colors_id?: InputMaybe<Colors_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  pigments_id?: InputMaybe<Pigments_Filter>;
};

export type Pigments_Colors_Mutated = {
  __typename?: 'pigments_colors_mutated';
  data?: Maybe<Pigments_Colors>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pigments_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pigments_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pigments_Filter>>>;
  alt_name?: InputMaybe<String_Filter_Operators>;
  code?: InputMaybe<String_Filter_Operators>;
  colors?: InputMaybe<Pigments_Colors_Filter>;
  colors_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  notes?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Pigments_Mutated = {
  __typename?: 'pigments_mutated';
  data?: Maybe<Pigments>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Series = {
  __typename?: 'series';
  brand?: Maybe<Brands>;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  translations?: Maybe<Array<Maybe<Series_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type SeriesBrandArgs = {
  filter?: InputMaybe<Brands_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SeriesTranslationsArgs = {
  filter?: InputMaybe<Series_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Series_Aggregated = {
  __typename?: 'series_aggregated';
  avg?: Maybe<Series_Aggregated_Fields>;
  avgDistinct?: Maybe<Series_Aggregated_Fields>;
  count?: Maybe<Series_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Series_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Series_Aggregated_Fields>;
  min?: Maybe<Series_Aggregated_Fields>;
  sum?: Maybe<Series_Aggregated_Fields>;
  sumDistinct?: Maybe<Series_Aggregated_Fields>;
};

export type Series_Aggregated_Count = {
  __typename?: 'series_aggregated_count';
  brand?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Series_Aggregated_Fields = {
  __typename?: 'series_aggregated_fields';
  brand?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Series_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Series_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Series_Filter>>>;
  brand?: InputMaybe<Brands_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Series_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Series_Mutated = {
  __typename?: 'series_mutated';
  data?: Maybe<Series>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Series_Translations = {
  __typename?: 'series_translations';
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  series_id?: Maybe<Series>;
  series_name?: Maybe<Scalars['String']['output']>;
};


export type Series_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Series_TranslationsSeries_IdArgs = {
  filter?: InputMaybe<Series_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Series_Translations_Aggregated = {
  __typename?: 'series_translations_aggregated';
  avg?: Maybe<Series_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Series_Translations_Aggregated_Fields>;
  count?: Maybe<Series_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Series_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Series_Translations_Aggregated_Fields>;
  min?: Maybe<Series_Translations_Aggregated_Fields>;
  sum?: Maybe<Series_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Series_Translations_Aggregated_Fields>;
};

export type Series_Translations_Aggregated_Count = {
  __typename?: 'series_translations_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  series_id?: Maybe<Scalars['Int']['output']>;
  series_name?: Maybe<Scalars['Int']['output']>;
};

export type Series_Translations_Aggregated_Fields = {
  __typename?: 'series_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
};

export type Series_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Series_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Series_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  series_id?: InputMaybe<Series_Filter>;
  series_name?: InputMaybe<String_Filter_Operators>;
};

export type Series_Translations_Mutated = {
  __typename?: 'series_translations_mutated';
  data?: Maybe<Series_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Brands_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Brands_Translations_Input>>>;
};

export type Update_Brands_Translations_Input = {
  brand_name?: InputMaybe<Scalars['String']['input']>;
  brands_id?: InputMaybe<Update_Brands_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Colors_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Colors_Translations_Input>>>;
};

export type Update_Colors_Translations_Input = {
  color_name?: InputMaybe<Scalars['String']['input']>;
  colors_id?: InputMaybe<Update_Colors_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Embroidery_Design_Floss_Input = {
  embroidery_design_id?: InputMaybe<Update_Embroidery_Design_Input>;
  floss_id?: InputMaybe<Update_Floss_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Update_Embroidery_Design_Input = {
  book_page?: InputMaybe<Scalars['Int']['input']>;
  book_title?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  design?: InputMaybe<Scalars['String']['input']>;
  finished_image?: InputMaybe<Scalars['String']['input']>;
  floss?: InputMaybe<Array<InputMaybe<Update_Embroidery_Design_Floss_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  website_url?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Floss_Colors_Input = {
  colors_id?: InputMaybe<Update_Colors_Input>;
  floss_id?: InputMaybe<Update_Floss_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Update_Floss_Floss_Input = {
  floss_id?: InputMaybe<Update_Floss_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  related_floss_id?: InputMaybe<Update_Floss_Input>;
};

export type Update_Floss_Input = {
  alternative?: InputMaybe<Array<InputMaybe<Update_Floss_Floss_Input>>>;
  brand?: InputMaybe<Update_Brands_Input>;
  code?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Update_Floss_Colors_Input>>>;
  floss_color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inv_qty?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  wish_qty?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Pencils_Colors_Input = {
  colors_id?: InputMaybe<Update_Colors_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pencils_id?: InputMaybe<Update_Pencils_Input>;
};

export type Update_Pencils_Input = {
  brand?: InputMaybe<Update_Brands_Input>;
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Update_Colors_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inv_qty?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pencil_color?: InputMaybe<Scalars['String']['input']>;
  series?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Pencils_Translations_Input>>>;
  wish_qty?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Pencils_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Scalars['String']['input']>;
  pencil_name?: InputMaybe<Scalars['String']['input']>;
  pencils_id?: InputMaybe<Update_Pencils_Input>;
};

export type Update_Pigments_Colors_Input = {
  colors_id?: InputMaybe<Update_Colors_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pigments_id?: InputMaybe<Update_Pigments_Input>;
};

export type Update_Pigments_Input = {
  alt_name?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Update_Pigments_Colors_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Watercolors_Colors_Input = {
  colors_id?: InputMaybe<Update_Colors_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  watercolors_id?: InputMaybe<Update_Watercolors_Input>;
};

export type Update_Watercolors_Input = {
  brand?: InputMaybe<Update_Brands_Input>;
  code?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Update_Watercolors_Colors_Input>>>;
  grade?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inv_qty?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pigments?: InputMaybe<Array<InputMaybe<Update_Watercolors_Pigments_Input>>>;
  series?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['JSON']['input']>;
  swatch?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Watercolors_Translations_Input>>>;
  wish_qty?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Watercolors_Pigments_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  pigments_id?: InputMaybe<Update_Pigments_Input>;
  watercolors_id?: InputMaybe<Update_Watercolors_Input>;
};

export type Update_Watercolors_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Scalars['String']['input']>;
  paint_name?: InputMaybe<Scalars['String']['input']>;
  watercolors_id?: InputMaybe<Update_Watercolors_Input>;
};

export type Watercolors = {
  __typename?: 'watercolors';
  brand?: Maybe<Brands>;
  code?: Maybe<Scalars['String']['output']>;
  colors?: Maybe<Array<Maybe<Watercolors_Colors>>>;
  colors_func?: Maybe<Count_Functions>;
  grade?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inv_qty?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  pigments?: Maybe<Array<Maybe<Watercolors_Pigments>>>;
  pigments_func?: Maybe<Count_Functions>;
  series?: Maybe<Series>;
  sizes?: Maybe<Scalars['JSON']['output']>;
  sizes_func?: Maybe<Count_Functions>;
  swatch?: Maybe<Directus_Files>;
  translations?: Maybe<Array<Maybe<Watercolors_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  wish_qty?: Maybe<Scalars['Int']['output']>;
};


export type WatercolorsBrandArgs = {
  filter?: InputMaybe<Brands_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WatercolorsColorsArgs = {
  filter?: InputMaybe<Watercolors_Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WatercolorsPigmentsArgs = {
  filter?: InputMaybe<Watercolors_Pigments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WatercolorsSeriesArgs = {
  filter?: InputMaybe<Series_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WatercolorsSwatchArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WatercolorsTranslationsArgs = {
  filter?: InputMaybe<Watercolors_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Watercolors_Aggregated = {
  __typename?: 'watercolors_aggregated';
  avg?: Maybe<Watercolors_Aggregated_Fields>;
  avgDistinct?: Maybe<Watercolors_Aggregated_Fields>;
  count?: Maybe<Watercolors_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Watercolors_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Watercolors_Aggregated_Fields>;
  min?: Maybe<Watercolors_Aggregated_Fields>;
  sum?: Maybe<Watercolors_Aggregated_Fields>;
  sumDistinct?: Maybe<Watercolors_Aggregated_Fields>;
};

export type Watercolors_Aggregated_Count = {
  __typename?: 'watercolors_aggregated_count';
  brand?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  colors?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inv_qty?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  pigments?: Maybe<Scalars['Int']['output']>;
  series?: Maybe<Scalars['Int']['output']>;
  sizes?: Maybe<Scalars['Int']['output']>;
  swatch?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  wish_qty?: Maybe<Scalars['Int']['output']>;
};

export type Watercolors_Aggregated_Fields = {
  __typename?: 'watercolors_aggregated_fields';
  brand?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  inv_qty?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  series?: Maybe<Scalars['Float']['output']>;
  wish_qty?: Maybe<Scalars['Float']['output']>;
};

export type Watercolors_Colors = {
  __typename?: 'watercolors_colors';
  colors_id?: Maybe<Colors>;
  id: Scalars['ID']['output'];
  watercolors_id?: Maybe<Watercolors>;
};


export type Watercolors_ColorsColors_IdArgs = {
  filter?: InputMaybe<Colors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Watercolors_ColorsWatercolors_IdArgs = {
  filter?: InputMaybe<Watercolors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Watercolors_Colors_Aggregated = {
  __typename?: 'watercolors_colors_aggregated';
  avg?: Maybe<Watercolors_Colors_Aggregated_Fields>;
  avgDistinct?: Maybe<Watercolors_Colors_Aggregated_Fields>;
  count?: Maybe<Watercolors_Colors_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Watercolors_Colors_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Watercolors_Colors_Aggregated_Fields>;
  min?: Maybe<Watercolors_Colors_Aggregated_Fields>;
  sum?: Maybe<Watercolors_Colors_Aggregated_Fields>;
  sumDistinct?: Maybe<Watercolors_Colors_Aggregated_Fields>;
};

export type Watercolors_Colors_Aggregated_Count = {
  __typename?: 'watercolors_colors_aggregated_count';
  colors_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  watercolors_id?: Maybe<Scalars['Int']['output']>;
};

export type Watercolors_Colors_Aggregated_Fields = {
  __typename?: 'watercolors_colors_aggregated_fields';
  colors_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  watercolors_id?: Maybe<Scalars['Float']['output']>;
};

export type Watercolors_Colors_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Watercolors_Colors_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Watercolors_Colors_Filter>>>;
  colors_id?: InputMaybe<Colors_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  watercolors_id?: InputMaybe<Watercolors_Filter>;
};

export type Watercolors_Colors_Mutated = {
  __typename?: 'watercolors_colors_mutated';
  data?: Maybe<Watercolors_Colors>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Watercolors_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Watercolors_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Watercolors_Filter>>>;
  brand?: InputMaybe<Brands_Filter>;
  code?: InputMaybe<String_Filter_Operators>;
  colors?: InputMaybe<Watercolors_Colors_Filter>;
  colors_func?: InputMaybe<Count_Function_Filter_Operators>;
  grade?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  inv_qty?: InputMaybe<Number_Filter_Operators>;
  order?: InputMaybe<Number_Filter_Operators>;
  pigments?: InputMaybe<Watercolors_Pigments_Filter>;
  pigments_func?: InputMaybe<Count_Function_Filter_Operators>;
  series?: InputMaybe<Series_Filter>;
  sizes?: InputMaybe<String_Filter_Operators>;
  sizes_func?: InputMaybe<Count_Function_Filter_Operators>;
  swatch?: InputMaybe<Directus_Files_Filter>;
  translations?: InputMaybe<Watercolors_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  wish_qty?: InputMaybe<Number_Filter_Operators>;
};

export type Watercolors_Mutated = {
  __typename?: 'watercolors_mutated';
  data?: Maybe<Watercolors>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Watercolors_Pigments = {
  __typename?: 'watercolors_pigments';
  id: Scalars['ID']['output'];
  pigments_id?: Maybe<Pigments>;
  watercolors_id?: Maybe<Watercolors>;
};


export type Watercolors_PigmentsPigments_IdArgs = {
  filter?: InputMaybe<Pigments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Watercolors_PigmentsWatercolors_IdArgs = {
  filter?: InputMaybe<Watercolors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Watercolors_Pigments_Aggregated = {
  __typename?: 'watercolors_pigments_aggregated';
  avg?: Maybe<Watercolors_Pigments_Aggregated_Fields>;
  avgDistinct?: Maybe<Watercolors_Pigments_Aggregated_Fields>;
  count?: Maybe<Watercolors_Pigments_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Watercolors_Pigments_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Watercolors_Pigments_Aggregated_Fields>;
  min?: Maybe<Watercolors_Pigments_Aggregated_Fields>;
  sum?: Maybe<Watercolors_Pigments_Aggregated_Fields>;
  sumDistinct?: Maybe<Watercolors_Pigments_Aggregated_Fields>;
};

export type Watercolors_Pigments_Aggregated_Count = {
  __typename?: 'watercolors_pigments_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  pigments_id?: Maybe<Scalars['Int']['output']>;
  watercolors_id?: Maybe<Scalars['Int']['output']>;
};

export type Watercolors_Pigments_Aggregated_Fields = {
  __typename?: 'watercolors_pigments_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  pigments_id?: Maybe<Scalars['Float']['output']>;
  watercolors_id?: Maybe<Scalars['Float']['output']>;
};

export type Watercolors_Pigments_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Watercolors_Pigments_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Watercolors_Pigments_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  pigments_id?: InputMaybe<Pigments_Filter>;
  watercolors_id?: InputMaybe<Watercolors_Filter>;
};

export type Watercolors_Pigments_Mutated = {
  __typename?: 'watercolors_pigments_mutated';
  data?: Maybe<Watercolors_Pigments>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Watercolors_Translations = {
  __typename?: 'watercolors_translations';
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  paint_name?: Maybe<Scalars['String']['output']>;
  watercolors_id?: Maybe<Watercolors>;
};


export type Watercolors_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Watercolors_TranslationsWatercolors_IdArgs = {
  filter?: InputMaybe<Watercolors_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Watercolors_Translations_Aggregated = {
  __typename?: 'watercolors_translations_aggregated';
  avg?: Maybe<Watercolors_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Watercolors_Translations_Aggregated_Fields>;
  count?: Maybe<Watercolors_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Watercolors_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Watercolors_Translations_Aggregated_Fields>;
  min?: Maybe<Watercolors_Translations_Aggregated_Fields>;
  sum?: Maybe<Watercolors_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Watercolors_Translations_Aggregated_Fields>;
};

export type Watercolors_Translations_Aggregated_Count = {
  __typename?: 'watercolors_translations_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  paint_name?: Maybe<Scalars['Int']['output']>;
  watercolors_id?: Maybe<Scalars['Int']['output']>;
};

export type Watercolors_Translations_Aggregated_Fields = {
  __typename?: 'watercolors_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  watercolors_id?: Maybe<Scalars['Float']['output']>;
};

export type Watercolors_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Watercolors_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Watercolors_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  paint_name?: InputMaybe<String_Filter_Operators>;
  watercolors_id?: InputMaybe<Watercolors_Filter>;
};

export type Watercolors_Translations_Mutated = {
  __typename?: 'watercolors_translations_mutated';
  data?: Maybe<Watercolors_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type UpdateFlossMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: Update_Floss_Input;
}>;


export type UpdateFlossMutation = { __typename?: 'Mutation', update_floss_item?: { __typename?: 'floss', id: string, code?: string | null, floss_color?: string | null, inv_qty?: number | null, wish_qty?: number | null, order?: number | null, brand?: { __typename?: 'brands', id: string, en?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null, ja?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null } | null, colors?: Array<{ __typename?: 'floss_colors', colors_id?: { __typename?: 'colors', id: string } | null } | null> | null } | null };

export type UpdatePencilMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: Update_Pencils_Input;
}>;


export type UpdatePencilMutation = { __typename?: 'Mutation', update_pencils_item?: { __typename?: 'pencils', id: string, code?: string | null, pencil_color?: string | null, inv_qty?: number | null, wish_qty?: number | null, order?: number | null, brand?: { __typename?: 'brands', id: string, en?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null, ja?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null } | null } | null };

export type DesignQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DesignQuery = { __typename?: 'Query', embroidery_design_by_id?: { __typename?: 'embroidery_design', id: string, title: string, book_title?: string | null, book_page?: number | null, website_url?: string | null, notes?: string | null, tags?: any | null, date_created?: any | null, date_updated?: any | null, finished_image?: { __typename?: 'directus_files', id: string } | null, design?: { __typename?: 'directus_files', id: string } | null, floss?: Array<{ __typename?: 'embroidery_design_floss', floss_id?: { __typename?: 'floss', id: string, code?: string | null, floss_color?: string | null, inv_qty?: number | null, brand?: { __typename?: 'brands', id: string, en?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null, ja?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null } | null } | null } | null> | null } | null };

export type DesignsQueryVariables = Exact<{ [key: string]: never; }>;


export type DesignsQuery = { __typename?: 'Query', embroidery_design: Array<{ __typename?: 'embroidery_design', id: string, title: string, book_title?: string | null, book_page?: number | null, website_url?: string | null, notes?: string | null, tags?: any | null, date_created?: any | null, date_updated?: any | null, finished_image?: { __typename?: 'directus_files', id: string } | null, design?: { __typename?: 'directus_files', id: string } | null, floss?: Array<{ __typename?: 'embroidery_design_floss', floss_id?: { __typename?: 'floss', id: string, code?: string | null, floss_color?: string | null, inv_qty?: number | null, brand?: { __typename?: 'brands', id: string, en?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null, ja?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null } | null } | null } | null> | null }>, floss: Array<{ __typename?: 'floss', id: string, code?: string | null, floss_color?: string | null, inv_qty?: number | null, wish_qty?: number | null, order?: number | null, brand?: { __typename?: 'brands', id: string, en?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null, ja?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null } | null, colors?: Array<{ __typename?: 'floss_colors', colors_id?: { __typename?: 'colors', id: string } | null } | null> | null }> };

export type FlossQueryVariables = Exact<{ [key: string]: never; }>;


export type FlossQuery = { __typename?: 'Query', floss: Array<{ __typename?: 'floss', id: string, code?: string | null, floss_color?: string | null, inv_qty?: number | null, wish_qty?: number | null, order?: number | null, brand?: { __typename?: 'brands', id: string, en?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null, ja?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null } | null, colors?: Array<{ __typename?: 'floss_colors', colors_id?: { __typename?: 'colors', id: string } | null } | null> | null }> };

export type PencilQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PencilQuery = { __typename?: 'Query', pencils_by_id?: { __typename?: 'pencils', id: string, code?: string | null, pencil_color?: string | null, inv_qty?: number | null, wish_qty?: number | null, brand?: { __typename?: 'brands', id: string, en?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null, ja?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null } | null, series?: { __typename?: 'series', id: string, en?: Array<{ __typename?: 'series_translations', series_name?: string | null } | null> | null, ja?: Array<{ __typename?: 'series_translations', series_name?: string | null } | null> | null } | null, color?: { __typename?: 'colors', id: string, color?: string | null } | null } | null };

export type PencilsQueryVariables = Exact<{ [key: string]: never; }>;


export type PencilsQuery = { __typename?: 'Query', pencils: Array<{ __typename?: 'pencils', id: string, code?: string | null, pencil_color?: string | null, inv_qty?: number | null, wish_qty?: number | null, brand?: { __typename?: 'brands', id: string, en?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null, ja?: Array<{ __typename?: 'brands_translations', brand_name?: string | null } | null> | null } | null, series?: { __typename?: 'series', id: string, en?: Array<{ __typename?: 'series_translations', series_name?: string | null } | null> | null, ja?: Array<{ __typename?: 'series_translations', series_name?: string | null } | null> | null } | null, color?: { __typename?: 'colors', id: string, color?: string | null } | null }> };


export const UpdateFlossDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateFloss"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"update_floss_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_floss_item"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"en"},"name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ja"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"ja","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"floss_color"}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"colors_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"inv_qty"}},{"kind":"Field","name":{"kind":"Name","value":"wish_qty"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]} as unknown as DocumentNode<UpdateFlossMutation, UpdateFlossMutationVariables>;
export const UpdatePencilDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePencil"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"update_pencils_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_pencils_item"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"en"},"name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ja"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"ja","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"pencil_color"}},{"kind":"Field","name":{"kind":"Name","value":"inv_qty"}},{"kind":"Field","name":{"kind":"Name","value":"wish_qty"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]} as unknown as DocumentNode<UpdatePencilMutation, UpdatePencilMutationVariables>;
export const DesignDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Design"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"embroidery_design_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"finished_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"design"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"floss"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"floss_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"en"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"en","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ja"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"ja","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"floss_color"}},{"kind":"Field","name":{"kind":"Name","value":"inv_qty"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"book_title"}},{"kind":"Field","name":{"kind":"Name","value":"book_page"}},{"kind":"Field","name":{"kind":"Name","value":"website_url"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"date_updated"}}]}}]}}]} as unknown as DocumentNode<DesignQuery, DesignQueryVariables>;
export const DesignsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Designs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"embroidery_design"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"finished_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"design"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"floss"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"floss_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"en"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"en","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ja"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"ja","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"floss_color"}},{"kind":"Field","name":{"kind":"Name","value":"inv_qty"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"book_title"}},{"kind":"Field","name":{"kind":"Name","value":"book_page"}},{"kind":"Field","name":{"kind":"Name","value":"website_url"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"date_updated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"floss"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"brand.id","block":false},{"kind":"StringValue","value":"order","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"en"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"en","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ja"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"ja","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"floss_color"}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"colors_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"inv_qty"}},{"kind":"Field","name":{"kind":"Name","value":"wish_qty"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]} as unknown as DocumentNode<DesignsQuery, DesignsQueryVariables>;
export const FlossDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Floss"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"floss"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"brand.id","block":false},{"kind":"StringValue","value":"order","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"en"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"en","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ja"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"ja","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"floss_color"}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"colors_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"inv_qty"}},{"kind":"Field","name":{"kind":"Name","value":"wish_qty"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]} as unknown as DocumentNode<FlossQuery, FlossQueryVariables>;
export const PencilDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pencil"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pencils_by_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"pencil_color"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"en"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"en","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ja"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"ja","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"en"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"en","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"series_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ja"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"ja","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"series_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"inv_qty"}},{"kind":"Field","name":{"kind":"Name","value":"wish_qty"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<PencilQuery, PencilQueryVariables>;
export const PencilsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pencils"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pencils"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"brand.id","block":false},{"kind":"StringValue","value":"order","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"pencil_color"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"en"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"en","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ja"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"ja","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"en"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"en","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"series_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ja"},"name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"languages_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"ja","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"series_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"inv_qty"}},{"kind":"Field","name":{"kind":"Name","value":"wish_qty"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<PencilsQuery, PencilsQueryVariables>;