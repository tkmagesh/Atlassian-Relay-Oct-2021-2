async function fetchGraphQL(query, variables) {
  const response = await fetch('http://localhost:8081/graphql', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  return response.json();
}

export default fetchGraphQL;