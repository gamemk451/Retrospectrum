kaboom()

const SPEED = 240

// Load assets
loadSprite("fly", "fly.png")

// --- Loading Screen ---
scene("loading", async () => {
  add([
    text("Loading Retrospectrum...", {
      size: 24,
    }),
    pos(center()),
    anchor("center"),
  ])

  // simulate load delay
  await wait(1)

  // Go to menu after loading
  go("menu")
})

// --- Main Menu Scene ---
scene("menu", () => {
  add([
    text("RETROSPECTRUM", {
      size: 32,
    }),
    pos(center().x, center().y - 100),
    anchor("center"),
  ])

  const startText = add([
    text("Press [Enter] to Start", {
      size: 20,
    }),
    pos(center().x, center().y + 50),
    anchor("center"),
    area(),
  ])

  // Flashing effect
  loop(0.6, () => {
    startText.hidden = !startText.hidden
  })

  onKeyPress("enter", () => {
    go("game")
  })
})

// --- Game Scene ---
scene("game", () => {
  const Player = add([
    sprite("fly"),
    pos(180, 20),
    rotate(0),
    scale(4),
    anchor("center"),
  ])

  onKeyDown("right", () => {
    Player.move(SPEED, 0)
  })

  onKeyDown("left", () => {
    Player.move(-SPEED, 0)
  })
})

// Start with loading screen
go("loading")
