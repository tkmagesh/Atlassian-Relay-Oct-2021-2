/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Status = "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
export type BugPaginationQueryVariables = {
    after?: string | null;
    first?: number | null;
    status?: Status | null;
};
export type BugPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"Bugs_list">;
};
export type BugPaginationQuery = {
    readonly response: BugPaginationQueryResponse;
    readonly variables: BugPaginationQueryVariables;
};



/*
query BugPaginationQuery(
  $after: String
  $first: Int
  $status: Status = IN_PROGRESS
) {
  ...Bugs_list_2mP0Nu
}

fragment Bugs_list_2mP0Nu on RootQuery {
  bugs(status: $status, first: $first, after: $after) {
    edges {
      node {
        id
        title
        description
        status
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "status",
    "variableName": "status"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BugPaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "Bugs_list"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BugPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BugConnection",
        "kind": "LinkedField",
        "name": "bugs",
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
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "status"
        ],
        "handle": "connection",
        "key": "Bugs_bugs",
        "kind": "LinkedHandle",
        "name": "bugs"
      }
    ]
  },
  "params": {
    "cacheID": "f3b63c05a94a9886808af77b05d81c30",
    "id": null,
    "metadata": {},
    "name": "BugPaginationQuery",
    "operationKind": "query",
    "text": "query BugPaginationQuery(\n  $after: String\n  $first: Int\n  $status: Status = IN_PROGRESS\n) {\n  ...Bugs_list_2mP0Nu\n}\n\nfragment Bugs_list_2mP0Nu on RootQuery {\n  bugs(status: $status, first: $first, after: $after) {\n    edges {\n      node {\n        id\n        title\n        description\n        status\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b6b35c54c8ca5936fc3a948fddebe2bb';
export default node;
