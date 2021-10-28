/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UsersTotalQueryVariables = {};
export type UsersTotalQueryResponse = {
    readonly totalUsers: number | null;
};
export type UsersTotalQuery = {
    readonly response: UsersTotalQueryResponse;
    readonly variables: UsersTotalQueryVariables;
};



/*
query UsersTotalQuery {
  totalUsers
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersTotalQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsersTotalQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9d3f0b0fd13cffe614c76d61e589d060",
    "id": null,
    "metadata": {},
    "name": "UsersTotalQuery",
    "operationKind": "query",
    "text": "query UsersTotalQuery {\n  totalUsers\n}\n"
  }
};
})();
(node as any).hash = 'db1feee1ce0701ccee53d26acfddd57d';
export default node;
