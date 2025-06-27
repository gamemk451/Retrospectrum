kaboom()

//setGravity(2400)

const MOVEMENT_SPEED = 240

loadSprite("fly", "fly.png")

const Player = add([
  sprite("fly"),
  pos(180, 20),
  rotate(0),
  scale(4),
  anchor("center"),
])

onKeyDown("right", () => {
    bean.move(-SPEED, 0)
})
