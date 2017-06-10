# Mutations

## createDevice
```
mutation CreateDevice($name: String! $location: LocationInput!){
  createDevice(name:$name location: $location) {
    id
    name
    location {
      lat
      lng
    }
  }
}
```

```json
{
  "name": "test create device",
  "location": {
    "lat": 63.0,
    "lng": 45.3
  }
}
```

```json
{
  "data": {
    "createDevice": {
      "id": "593bc4b0dd514803019eeeca",
      "name": "test create device",
      "location": {
        "lat": 63,
        "lng": 45.3
      }
    }
  }
}
```

## updateDeviceLocation
```
mutation UpdateDevice($id: ID! $location: LocationInput!){
  updateDeviceLocation(id:$id location: $location) {
    id
    name
    location {
      lat
      lng
    }
    updatedAt
  }
}
```

```json
{
  "id": "593bc4b0dd514803019eeeca",
  "location": {
    "lat": 63.1,
    "lng": 45.4
  }
}
```

```json
{
  "data": {
    "updateDeviceLocation": {
      "id": "593bc4b0dd514803019eeeca",
      "name": "test create device",
      "location": {
        "lat": 63.1,
        "lng": 45.4
      },
      "updatedAt": "Sat Jun 10 2017 10:16:14 GMT+0000 (UTC)"
    }
  }
}
```
