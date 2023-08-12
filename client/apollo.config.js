module.exports = {
  client: {
    includes: ['graphql/**/*.gql'],
    service: {
      name: "directus",
      url: "http://localhost:8055/graphql"
    }
  }
};