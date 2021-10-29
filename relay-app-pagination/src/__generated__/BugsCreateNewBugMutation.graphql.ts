/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type Severity = "CRITICAL" | "LOW" | "MAJOR" | "MINOR" | "%future added value";
export type Status = "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
export type CreateBugInput = {
    bug?: BugInput | null;
    clientMutationId?: string | null;
};
export type BugInput = {
    title: string;
    description: string;
    severity: Severity;
    projectId: string;
    userId: string;
};
export type BugsCreateNewBugMutationVariables = {
    input: CreateBugInput;
};
export type BugsCreateNewBugMutationResponse = {
    readonly createBug: {
        readonly bugEdge: {
            readonly node: {
                readonly id: string;
                readonly title: string;
                readonly description: string;
                readonly severity: Severity;
                readonly status: Status | null;
                readonly projectId: string | null;
            } | null;
            readonly cursor: string;
        } | null;
    } | null;
};
export type BugsCreateNewBugMutation = {
    readonly response: BugsCreateNewBugMutationResponse;
    readonly variables: BugsCreateNewBugMutationVariables;
};



/*
mutation BugsCreateNewBugMutation(
  $input: CreateBugInput!
) {
  createBug(input: $input) {
    bugEdge {
      node {
        id
        title
        description
        severity
        status
        projectId
      }
      cursor
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateBugPayload",
    "kind": "LinkedField",
    "name": "createBug",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BugEdge",
        "kind": "LinkedField",
        "name": "bugEdge",
        "plural": false,
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
                "name": "severity",
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
                "name": "projectId",
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BugsCreateNewBugMutation",
    "selections": (v1/*: any*/),
    "type": "Mutations",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BugsCreateNewBugMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fe0964225500819fb977be26f2872d28",
    "id": null,
    "metadata": {},
    "name": "BugsCreateNewBugMutation",
    "operationKind": "mutation",
    "text": "mutation BugsCreateNewBugMutation(\n  $input: CreateBugInput!\n) {\n  createBug(input: $input) {\n    bugEdge {\n      node {\n        id\n        title\n        description\n        severity\n        status\n        projectId\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0d112e982291b6dab61a50dc023a2de7';
export default node;
