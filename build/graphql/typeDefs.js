"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeDefs = "\n  interface MetaSubscription {\n    type: String!\n    updatedAt: String!\n  }\n\n  # The Location scalar type represents a geolocation point.\n  type Location {\n    # Latitude of the location point\n    lat: Float\n    # Longitude of the location point\n    lng: Float\n  }\n\n  input LocationInput {\n    lat: Float!\n    lng: Float!\n  }\n\n  type Device {\n    id: ID!\n    name: String\n    location: Location\n    updatedAt: String\n  }\n\n  type DeviceSubscription implements MetaSubscription{\n    type: String!\n    id: ID!\n    updatedAt: String!\n    name: String\n    currentLocation: Location\n    previousLocation: Location\n  }\n\n  type Query {\n    device(id: ID!): Device\n    devices(limit: Int skip: Int): [Device]\n  }\n\n  type Mutation {\n    createDevice(name: String! location: LocationInput!): Device\n    updateDeviceLocation(id: ID! location: LocationInput!): Device\n  }\n\n  type Subscription {\n    watchDevice(id: ID!): DeviceSubscription\n    watchDevices: DeviceSubscription\n  }\n\n  type Root {\n    query: Query\n    mutation: Mutation\n    subscription: Subscription\n  }\n";

exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map