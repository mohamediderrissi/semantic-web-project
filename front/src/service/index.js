const getData = async (SparqlQuery) => { 
let Data = null;
const query = encodeURIComponent(SparqlQuery);
await fetch("http://localhost:3030/one/query", {
  //body: "query=SELECT+%3Fsubject+%3Fpredicate+%3Fobject%0AWHERE+%7B%0A++%3Fsubject+%3Fpredicate+%3Fobject%0A%7D%0ALIMIT+25",
  body: `query=${query}`,
  headers: {
    Accept: "application/sparql-results+json,*/*;q=0.9",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})
.then(response => response.json())
.then(data => { Data = data; });
  return Data;
};

export { getData }