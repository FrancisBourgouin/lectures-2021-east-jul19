# Todo list with Weather info


# Data structure

## Todo

```jsx
  {
    id:"",
    name:"",
    completed:false
  }
```

## Todos

```jsx
  [
    {Todo},
    {Todo}
  ]
```

## Weather

```jsx
  {
    temp:0,
    condition:""
  }
```

# HTML Structure

- body
  - header
    - h1 title
  - section
    - h1 title of section  
    - ul
      - li (multiple)
  - section
    - h1 title of section
    - form
  - section
    - h1 title of section
    - h2 city
    - p temp + condition

# Component Structure

- App
  - TodoList
    - TodoListItem
  - TodoForm
  - Weather