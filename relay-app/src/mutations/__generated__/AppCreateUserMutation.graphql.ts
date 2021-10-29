/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AppCreateUserMutationVariables = {
    firstName: string;
    lastName: string;
    email: string;
};
export type AppCreateUserMutationResponse = {
    readonly createUser: {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
    } | null;
};
export type AppCreateUserMutation = {
    readonly response: AppCreateUserMutationResponse;
    readonly variables: AppCreateUserMutationVariables;
};



/*
mutation AppCreateUserMutation(
  $firstName: String!
  $lastName: String!
  $email: String!
) {
  createUser(firstName: $firstName, lastName: $lastName, email: $email) {
    id
    firstName
    lastName
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "firstName"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lastName"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "firstName",
        "variableName": "firstName"
      },
      {
        "kind": "Variable",
        "name": "lastName",
        "variableName": "lastName"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "createUser",
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppCreateUserMutation",
    "selections": (v3/*: any*/),
    "type": "Mutations",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppCreateUserMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "1ddbea62a832989eaf466bf582dabfcd",
    "id": null,
    "metadata": {},
    "name": "AppCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation AppCreateUserMutation(\n  $firstName: String!\n  $lastName: String!\n  $email: String!\n) {\n  createUser(firstName: $firstName, lastName: $lastName, email: $email) {\n    id\n    firstName\n    lastName\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '874a4bf5397002e95df2b2970855030e';
export default node;
