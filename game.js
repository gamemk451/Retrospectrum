kaboom()

const SPEED = 240

// Load assets
loadSprite("fly", "fly.png")

// --- Loading Screen ---
scene("loading", async () => {
  // Set black background
  setBackground(Color.fromHex("#000000"))

  const loadingText = add([
    text("Loading Retrospectrum...", {
      size: 32,
      font: "sink",
    }),
    pos(center()),
    anchor("center"),
    scale(0),
  ])

  // Dramatic zoom-in effect
  tween(
    loadingText.scale,
    vec2(1),
    1, // 1 second
    (newVal) => loadingText.scale = newVal,
    easings.easeOutBack
  )

  // simulate dramatic pause
  await wait(2)

  go("menu")
})

// --- Main Menu Scene ---
scene("menu", () => {
  // Set a background color (optional)
  setBackground(Color.fromHex("#1a1a1a"))

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

  onKeyDown("up", () => {
    Player.move(0, -SPEED)
  })

  onKeyDown("down", () => {
    Player.move(0, SPEED)
  })
})

// Start with loading screen
go("loading")
