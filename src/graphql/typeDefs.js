const typeDefs = `
  interface MetaSubscription {
    type: String!
    updatedAt: String!
  }

  # The Location scalar type represents a geolocation point.
  type Location {
    # Latitude of the location point
    lat: Float
    # Longitude of the location point
    lng: Float
  }

  input LocationInput {
    lat: Float!
    lng: Float!
  }

  type Device {
    id: ID!
    name: String
    location: Location
    updatedAt: String
  }

  type DeviceSubscription implements MetaSubscription{
    type: String!
    id: ID!
    updatedAt: String!
    name: String
    currentLocation: Location
    previousLocation: Location
  }

  type Query {
    device(id: ID!): Device
    devices(limit: Int skip: Int): [Device]
  }

  type Mutation {
    createDevice(name: String! location: LocationInput!): Device
    updateDeviceLocation(id: ID! location: LocationInput!): Device
  }

  type Subscription {
    watchDevice(id: ID!): DeviceSubscription
    watchDevices: DeviceSubscription
  }

  type Root {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

export default typeDefs;
