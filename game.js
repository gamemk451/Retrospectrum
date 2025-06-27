kaboom()

// setGravity(2400)

const SPEED = 240

loadSprite("fly", "fly.png")

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
