/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UsersQueryVariables = {};
export type UsersQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
    }>;
};
export type UsersQuery = {
    readonly response: UsersQueryResponse;
    readonly variables: UsersQueryVariables;
};



/*
query UsersQuery {
  users {
    id
    firstName
    lastName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
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
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "76ddcae7ed2314402e1fb3146494fa82",
    "id": null,
    "metadata": {},
    "name": "UsersQuery",
    "operationKind": "query",
    "text": "query UsersQuery {\n  users {\n    id\n    firstName\n    lastName\n  }\n}\n"
  }
};
})();
(node as any).hash = '61251c457881cf9ba9fab51d2f1df35b';
export default node;
