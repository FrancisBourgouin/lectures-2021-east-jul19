# Tourney manager

## Participant

```jsx
const participant = {
  id,
  name,
  nickname,
  wins
}
```

## Participants

```jsx
  // Winner!
  const participants = {
    id:participant,
    id:participant,
    id:participant,
  }

  // vs

  const participants = [
    participant,
    participant,
    participant,
    participant,
  ]
```

## Structure

### HTML

- body
- header
-  h1
- main
- section
-   article
-     h1 (name / nickname)
-     h2 (number of wins)
-     button (add a win)

### Components

- App
- PlayerList
-   PlayerListItem
- SuperWinAllButtonOfDestiny