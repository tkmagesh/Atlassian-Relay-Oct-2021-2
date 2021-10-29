/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Status = "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
export type AppFragmentedQueryVariables = {
    status?: Status | null;
};
export type AppFragmentedQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"User_user">;
    }>;
    readonly totalUsers: number | null;
    readonly projects: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Project_project">;
    } | null>;
};
export type AppFragmentedQuery = {
    readonly response: AppFragmentedQueryResponse;
    readonly variables: AppFragmentedQueryVariables;
};



/*
query AppFragmentedQuery(
  $status: Status
) {
  users {
    id
    ...User_user
  }
  totalUsers
  projects {
    id
    ...Project_project
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

fragment User_user on User {
  id
  firstName
  lastName
  email
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "status"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalUsers",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppFragmentedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "User_user"
          }
        ],
        "storageKey": null
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "projects",
        "plural": true,
        "selections": [
          (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppFragmentedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "projects",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          (v3/*: any*/),
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
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              (v3/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0c053a5de74a079e31d88945bfc0de0b",
    "id": null,
    "metadata": {},
    "name": "AppFragmentedQuery",
    "operationKind": "query",
    "text": "query AppFragmentedQuery(\n  $status: Status\n) {\n  users {\n    id\n    ...User_user\n  }\n  totalUsers\n  projects {\n    id\n    ...Project_project\n  }\n}\n\nfragment Bug_bug on Bug {\n  id\n  title\n  description\n  status\n}\n\nfragment Project_project on Project {\n  id\n  name\n  description\n  bugs(status: $status) {\n    id\n    ...Bug_bug\n  }\n}\n\nfragment User_user on User {\n  id\n  firstName\n  lastName\n  email\n}\n"
  }
};
})();
(node as any).hash = 'be04ad3babbcb3a3b70076afa0f069aa';
export default node;
