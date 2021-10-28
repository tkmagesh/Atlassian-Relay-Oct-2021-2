/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Status = "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
export type Bug_bug = {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly status: Status | null;
    readonly " $refType": "Bug_bug";
};
export type Bug_bug$data = Bug_bug;
export type Bug_bug$key = {
    readonly " $data"?: Bug_bug$data;
    readonly " $fragmentRefs": FragmentRefs<"Bug_bug">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Bug_bug",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "type": "Bug",
  "abstractKey": null
};
(node as any).hash = '79d43153047b736c3951bca08dab8268';
export default node;
