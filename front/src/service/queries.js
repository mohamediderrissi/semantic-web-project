const CITIES="SELECT DISTINCT ?object  WHERE { ?subject <http://dbpedia.org/ontology#city> ?object }";
const TYPES="SELECT DISTINCT  ?object WHERE {  ?subject <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> ?object }";
const selectRessourceForCity = (city,resource) => {
    return `SELECT DISTINCT ?subject ?label ?lat ?lont WHERE {
     ?subject <http://dbpedia.org/ontology#city> <http://dbpedia.org/resource/${city}>.
     ?subject a <http://www.dbpedia.org/resource/${resource}>;
    <http://www.w3.org/2000/01/rdf-schema#label> ?label;
    <http://www.w3.org/2003/01/geo/wgs84_pos#long> ?lont;
    <http://www.w3.org/2003/01/geo/wgs84_pos#lat> ?lat.
    } LIMIT 10`.trim();
};
const selectOneResource = (uri) => {
    return `SELECT DISTINCT ?predicate ?object
            where { <${uri}> ?predicate ?object. }`.trim();
};
export { CITIES, TYPES, selectRessourceForCity, selectOneResource }