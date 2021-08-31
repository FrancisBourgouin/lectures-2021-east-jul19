# Water plant thingy

# Info

Show a list of tiles representing plants, with their name, and the last time they were watered.

- last watered
- watering interval
- type of plant
- name

# Data

```jsx
  const plant = {
    id: "String",
    name: "String",
    type: "String",
    wateringInterval: "Integer",
    lastWatered: "String (Date)"
  }

  const plantsObj = {1:plant}
  plantsObj[plantId].lastWatered = ...

  const plantsArray = [plant]
  plantsArray.find(plant => plant.id === id)
```

# Mock data

```jsx
  {
    1:{
        id: 1,
        name: "Peace Lily",
        type: "Flower",
        wateringInterval: 3,
        lastWatered: "Tue, 31 Aug 2021 14:18:51 GMT"
      },
    2:{
        id: 2,
        name: "Bamboo Plant",
        type: "Tree",
        wateringInterval: 20,
        lastWatered: "Tue, 31 Aug 2021 14:18:51 GMT"
      },
    3:{
        id: 3,
        name: "Zamioculcas zamiifolia",
        type: "Interior",
        wateringInterval: 7,
        lastWatered: "Tue, 31 Aug 2021 14:18:51 GMT"
      },
    4:{
        id: 4,
        name: "Aloe Vera",
        type: "Greasy plant",
        wateringInterval: 12,
        lastWatered: "Tue, 31 Aug 2021 14:18:51 GMT"
      },
  }
```

# HTML Structure

  - body
    - header
      - h1 title
      - img logo
    - main
      - section
        - h1
        - article (multiple)
          - h1 name
          - h2 type
          - h2 last watered
          - p water interval

# React Components

  - App
    - Header
    - PlantList
      - PlantListItem

