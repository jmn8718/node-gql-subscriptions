# subscriptions

## watchDevice

```
subscription UpdateDevice($id: ID!) {
  watchDevice(id: $id) {
    type
    id
    name
    updatedAt
    currentLocation {
      lat
      lng
    }
    previousLocation {
      lat
      lng
    }
  }
}
```

```js
{
  "id": "593bc4b0dd514803019eeeca"
}
```

```js
{
  "watchDevice": {
    "type": "UPDATE_DEVICE",
    "id": "593bc4b0dd514803019eeeca",
    "name": "test create device",
    "updatedAt": "Sat Jun 10 2017 10:21:38 GMT+0000 (UTC)",
    "currentLocation": {
      "lat": 63.3,
      "lng": 45.5
    },
    "previousLocation": {
      "lat": 63.4,
      "lng": 45.5
    }
  }
}
```

## watchDevices

```
subscription WatchDevices {
  watchDevices {
    type
    id
    name
    updatedAt
    currentLocation {
      lat
      lng
    }
    previousLocation {
      lat
      lng
    }
  }
}
```

```json
{
  "watchDevices": {
    "type": "UPDATE_DEVICE",
    "id": "593bc4b0dd514803019eeeca",
    "name": "test create device",
    "updatedAt": "Sat Jun 10 2017 10:24:48 GMT+0000 (UTC)",
    "currentLocation": {
      "lat": 63.3,
      "lng": 45.4
    },
    "previousLocation": {
      "lat": 63.3,
      "lng": 45.5
    }
  }
}
```

```json
{
  "watchDevices": {
    "type": "CREATE_DEVICE",
    "id": "593bc92ed26159038837bd5a",
    "name": "test create subs",
    "updatedAt": "Sat Jun 10 2017 10:25:50 GMT+0000 (UTC)",
    "currentLocation": {
      "lat": 65,
      "lng": 46.3
    },
    "previousLocation": null
  }
}
```
