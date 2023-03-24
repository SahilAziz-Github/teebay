const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } = graphql;

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    category: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    rent: { type: GraphQLFloat },
    rent_option: { type: GraphQLString },
    owner_id: { type: GraphQLInt},
    created_at: { type: GraphQLString },
    expires_at: { type: GraphQLString }
  }),
});

module.exports = ProductType;