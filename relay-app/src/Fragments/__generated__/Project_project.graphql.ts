/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import ProjectRefetchQuery from "./ProjectRefetchQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type Project_project = {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly bugs: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Bug_bug">;
    }> | null;
    readonly " $refType": "Project_project";
};
export type Project_project$data = Project_project;
export type Project_project$key = {
    readonly " $data"?: Project_project$data;
    readonly " $fragmentRefs": FragmentRefs<"Project_project">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "status"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": ProjectRefetchQuery,
      "identifierField": "id"
    }
  },
  "name": "Project_project",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Bug_bug"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Project",
  "abstractKey": null
};
})();
(node as any).hash = 'f4df0770792c72ff18615dd4ada9a374';
export default node;
