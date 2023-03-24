const graphql = require("graphql");
const {
  GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList,
} = graphql;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const UserType = require("./typedefs/UserType");
const ProductType = require("./typedefs/ProductType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: {},
      resolve() {
        const users = prisma.users.findMany();
        return users;
      },
    },
    getAllProducts: {
      type: new GraphQLList(ProductType),
      args: {},
      resolve() {
        const products = prisma.products.findMany();
        return products;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        address: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        const user = prisma.users.create({
          data: {
            firstname: args.firstname,
            lastname: args.lastname,
            address: args.address,
            email: args.email,
            password: args.password,
            created_at: new Date()  
          }
        });
        return user;
      },
    },
    createProduct: {
      type: ProductType,
      args: {
        title: { type: GraphQLString },
        category: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        rent: { type: GraphQLFloat },
        rent_option: { type: GraphQLString },
        owner_id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        const product = prisma.products.create({
          data: {
            title: args.title,
            category: args.category,
            description: args.description,
            price: args.price,
            rent: args.rent,
            rent_option: args.rent_option,
            owner_id: args.owner_id,
            created_at: new Date()
          },
        });
        return product;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
