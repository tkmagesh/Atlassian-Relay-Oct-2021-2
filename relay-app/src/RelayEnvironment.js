import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

async function fetchRelay(params, variables){
    console.log(params.name, params.text, JSON.stringify(variables))
    return fetchGraphQL(params.text, variables);
}

const enviornment = new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
});

/* window['store'] = enviornment.getStore();
console.dir(window.store);
 */
export default enviornment;

