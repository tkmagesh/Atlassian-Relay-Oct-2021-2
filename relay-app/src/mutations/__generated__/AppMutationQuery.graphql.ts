/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AppMutationQueryVariables = {};
export type AppMutationQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly fullName: string;
    }>;
};
export type AppMutationQuery = {
    readonly response: AppMutationQueryResponse;
    readonly variables: AppMutationQueryVariables;
};



/*
query AppMutationQuery {
  users {
    id
    firstName
    lastName
    email
    fullName
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fullName",
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
    "name": "AppMutationQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppMutationQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8d7ec5fede6d181a2eb70452dd837842",
    "id": null,
    "metadata": {},
    "name": "AppMutationQuery",
    "operationKind": "query",
    "text": "query AppMutationQuery {\n  users {\n    id\n    firstName\n    lastName\n    email\n    fullName\n  }\n}\n"
  }
};
})();
(node as any).hash = '8e2c52a2c61a13a385d0ec4af5114049';
export default node;
