/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Status = "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
export type ProjectRefetchQueryVariables = {
    status?: Status | null;
    id: string;
};
export type ProjectRefetchQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"Project_project">;
    } | null;
};
export type ProjectRefetchQuery = {
    readonly response: ProjectRefetchQueryResponse;
    readonly variables: ProjectRefetchQueryVariables;
};



/*
query ProjectRefetchQuery(
  $status: Status
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...Project_project
    id
  }
}

fragment Bug_bug on Bug {
  id
  title
  description
  status
}

fragment Project_project on Project {
  id
  name
  description
  bugs(status: $status) {
    id
    ...Bug_bug
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "status"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Project_project"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ProjectRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "status",
                    "variableName": "status"
                  }
                ],
                "concreteType": "Bug",
                "kind": "LinkedField",
                "name": "bugs",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "status",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Project",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "be9a0fbab3baa23044d8ada6215f101c",
    "id": null,
    "metadata": {},
    "name": "ProjectRefetchQuery",
    "operationKind": "query",
    "text": "query ProjectRefetchQuery(\n  $status: Status\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...Project_project\n    id\n  }\n}\n\nfragment Bug_bug on Bug {\n  id\n  title\n  description\n  status\n}\n\nfragment Project_project on Project {\n  id\n  name\n  description\n  bugs(status: $status) {\n    id\n    ...Bug_bug\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f4df0770792c72ff18615dd4ada9a374';
export default node;
