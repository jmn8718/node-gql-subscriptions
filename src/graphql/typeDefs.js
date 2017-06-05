const typeDefs = `
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

  input BoxInput {
    bottomLeftPoint: LocationInput,
    topRightPoint: LocationInput,
  }

  type Device {
    id: ID!
    name: String
    location: Location
  }

  type Query {
    device(id: ID!): Device
    devices: [Device]
    devicesByLocation(location: LocationInput!, distance: Float): [Device]
    devicesByBox(box: BoxInput): [Device]
  }
`;

export default typeDefs;