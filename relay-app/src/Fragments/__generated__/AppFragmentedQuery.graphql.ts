/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppFragmentedQueryVariables = {};
export type AppFragmentedQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"User_user" | "UserIds_user">;
    }>;
    readonly totalUsers: number | null;
};
export type AppFragmentedQuery = {
    readonly response: AppFragmentedQueryResponse;
    readonly variables: AppFragmentedQueryVariables;
};



/*
query AppFragmentedQuery {
  users {
    id
    ...User_user
    ...UserIds_user
  }
  totalUsers
}

fragment UserIds_user on User {
  id
}

fragment User_user on User {
  id
  firstName
  lastName
  email
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalUsers",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "User_user"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserIds_user"
          }
        ],
        "storageKey": null
      },
      (v1/*: any*/)
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
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
          (v0/*: any*/),
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
      (v1/*: any*/)
    ]
  },
  "params": {
    "cacheID": "2d7da6494508df23fb5bd93e709aa9b9",
    "id": null,
    "metadata": {},
    "name": "AppFragmentedQuery",
    "operationKind": "query",
    "text": "query AppFragmentedQuery {\n  users {\n    id\n    ...User_user\n    ...UserIds_user\n  }\n  totalUsers\n}\n\nfragment UserIds_user on User {\n  id\n}\n\nfragment User_user on User {\n  id\n  firstName\n  lastName\n  email\n}\n"
  }
};
})();
(node as any).hash = '3e6e4a766a63a52a3176391dacf143ea';
export default node;
