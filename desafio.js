let heroName = "FelipaoDeArmadura"
let xpHero = 6000
function elo(xpHero)
{
if (xpHero < 1000)
    return("Ferro")

else if (xpHero >= 1000 && xpHero <= 2000)
    return("Bronze")

else if (xpHero >= 2001 && xpHero <= 5000)
    return("Prata")

else if (xpHero >= 5001 && xpHero <= 7000)
    return("Ouro")

else if (xpHero >= 7001 && xpHero <= 8000)
    return("Platina")

else if (xpHero >= 8001 && xpHero <= 9000)
    return("Ascendente")

else if (xpHero >= 9001 && xpHero <= 10000 )
    return("Imortal")

else 
    return("Radiante")
}
let heroElo = elo(xpHero)
console.log("Parabéns " + heroName + " você está no nivel " + heroElo + "!")

