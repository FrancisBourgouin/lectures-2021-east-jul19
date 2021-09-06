

app.get("/api/matches", (req, res) => {
  // db query
  res.json(matches)
})

app.get("/api/weather", (req, res) => {
  request("https://api.openweather.org", (err, status, body) => {
    res.json(body)
  })
})