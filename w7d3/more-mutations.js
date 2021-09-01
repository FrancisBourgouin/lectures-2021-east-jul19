export const playerData = {
  1: {
    id: 1,
    name: "Dianne",
    nickname: "Dennaire",
    wins: 0
  },
  2: {
    id: 2,
    name: "Alex",
    nickname: "ROFLOLIGIST",
    wins: 0
  },
}

const updatedPlayer = { ...playerData[1] }
// {
//   id: 1,
//   name: "Dianne",
//   nickname: "Dennaire",
//   wins: 0
// },
updatedPlayer.wins++
// {
//   id: 1,
//   name: "Dianne",
//   nickname: "Dennaire",
//   wins: 1
// },

const updatedPlayers = { ...playerData }

// {
//   1: {
//     id: 1,
//     name: "Dianne",
//     nickname: "Dennaire",
//     wins: 0
//   },
//   2: {
//     id: 2,
//     name: "Alex",
//     nickname: "ROFLOLIGIST",
//     wins: 0
//   },
// }

updatedPlayers[1] = updatedPlayer

// {
//   1: {
//     id: 1,
//     name: "Dianne",
//     nickname: "Dennaire",
//     wins: 1
//   },
//   2: {
//     id: 2,
//     name: "Alex",
//     nickname: "ROFLOLIGIST",
//     wins: 0
//   },
// }