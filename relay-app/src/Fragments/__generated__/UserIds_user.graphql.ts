/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserIds_user = {
    readonly id: string;
    readonly " $refType": "UserIds_user";
};
export type UserIds_user$data = UserIds_user;
export type UserIds_user$key = {
    readonly " $data"?: UserIds_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserIds_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserIds_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '6bd46e690ff6b5a048f4ebf207290e75';
export default node;
