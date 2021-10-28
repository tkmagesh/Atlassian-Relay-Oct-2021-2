/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AppPreLoadQueryVariables = {};
export type AppPreLoadQueryResponse = {
    readonly totalUsers: number | null;
    readonly users: ReadonlyArray<{
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
    }>;
};
export type AppPreLoadQuery = {
    readonly response: AppPreLoadQueryResponse;
    readonly variables: AppPreLoadQueryVariables;
};



/*
query AppPreLoadQuery {
  totalUsers
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
    "kind": "ScalarField",
    "name": "totalUsers",
    "storageKey": null
  },
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
    "name": "AppPreLoadQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppPreLoadQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e226d8dce0273840f42e4a841796b212",
    "id": null,
    "metadata": {},
    "name": "AppPreLoadQuery",
    "operationKind": "query",
    "text": "query AppPreLoadQuery {\n  totalUsers\n  users {\n    id\n    firstName\n    lastName\n  }\n}\n"
  }
};
})();
(node as any).hash = '9262e4c90873105fa0d7255ed77a9b82';
export default node;
