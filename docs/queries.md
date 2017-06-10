# queries

## devices

```
query GetDevices($limit: Int $skip: Int) {
  devices(limit: $limit skip: $skip) {
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

```js
{
  "skip": 0,
  "limit": 2
}
```

```js
{
  "data": {
    "devices": [
      {
        "id": "593bc4b0dd514803019eeeca",
        "name": "test create device",
        "location": {
          "lat": 63,
          "lng": 45.3
        },
        "updatedAt": "Sat Jun 10 2017 10:06:40 GMT+0000 (UTC)"
      },
      {
        "id": "593bc0fda9ea61012face6ff",
        "name": "tesdt",
        "location": {
          "lat": 34.2,
          "lng": 66
        },
        "updatedAt": "Sat Jun 10 2017 09:50:53 GMT+0000 (UTC)"
      }
    ]
  }
}
```

## device
```
query GetDevice($id: ID!) {
  device(id: $id) {
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

```js
{
  "id": "593bc4b0dd514803019eeeca"
}
```

```js
{
  "data": {
    "device": {
      "id": "593bc4b0dd514803019eeeca",
      "name": "test create device",
      "location": {
        "lat": 63,
        "lng": 45.3
      },
      "updatedAt": "Sat Jun 10 2017 10:06:40 GMT+0000 (UTC)"
    }
  }
}
```
