player.onChat("!fdx.bigtnt", function (Arg) {
    blocks.fill(
    TNT,
    pos(Arg, Arg, Arg),
    pos(Arg - Arg * 2, Arg - Arg * 2, Arg - Arg * 2),
    FillOperation.Replace
    )
    player.execute(
    "summon tnt ~ ~+" + ("" + (Arg + 3) + " ~")
    )
    player.execute(
    "/tellraw @a {\"rawtext\":[{"text":\"FDX —> Summoned a tnt with a radius of " + ("" + Arg + "\"}]}")
    )
})
player.onChat("!fdx.givexp", function (Arg) {
    gameplay.xp(Arg, mobs.target(LOCAL_PLAYER))
    player.execute(
    "tellraw @a {\"rawtext\":[{\"text":"FDX —> Gave you " + ("" + Arg + " xp.\"}]}")
    )
})
player.onChat("!fdx.cowbomb", function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(COW, pos(0, 10, 0))
    }
})
