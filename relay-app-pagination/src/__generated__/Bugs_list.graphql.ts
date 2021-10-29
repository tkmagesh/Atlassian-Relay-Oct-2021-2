/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import BugPaginationQuery from "./BugPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type Status = "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
export type Bugs_list = {
    readonly bugs: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly title: string;
                readonly description: string;
                readonly status: Status | null;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "Bugs_list";
};
export type Bugs_list$data = Bugs_list;
export type Bugs_list$key = {
    readonly " $data"?: Bugs_list$data;
    readonly " $fragmentRefs": FragmentRefs<"Bugs_list">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "bugs"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": "IN_PROGRESS",
      "kind": "LocalArgument",
      "name": "status"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": BugPaginationQuery
    }
  },
  "name": "Bugs_list",
  "selections": [
    {
      "alias": "bugs",
      "args": [
        {
          "kind": "Variable",
          "name": "status",
          "variableName": "status"
        }
      ],
      "concreteType": "BugConnection",
      "kind": "LinkedField",
      "name": "__Bugs_bugs_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "BugEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Bug",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RootQuery",
  "abstractKey": null
};
})();
(node as any).hash = 'b6b35c54c8ca5936fc3a948fddebe2bb';
export default node;
