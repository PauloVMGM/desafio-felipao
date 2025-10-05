// vetor que vai armazenar o nome e XP do heroi
let heroi = ["Rodolfo", 5001]

if (heroi[1] <= 1000)
{
    console.log("O Herói de nome " + heroi[0] + " está no nivel de " + heroi[1] + " - Ferro")
} 
else if (heroi[1] > 1000 && heroi[1] <= 2000)
{
    console.log("O Herói de nome " + heroi[0] + " está no nivel de " + heroi[1] + " - Bronze")
}
else if (heroi[1] > 2000 && heroi[1] <= 5000)
{
    console.log("O Herói de nome " + heroi[0] + " está no nivel de " + heroi[1] + " - Prata")
}
else if (heroi[1] > 5000 && heroi[1] <= 7000)
{
    console.log("O Herói de nome " + heroi[0] + " está no nivel de " + heroi[1] + " - Ouro")
}
else if (heroi[1] > 7000 && heroi[1] <= 8000)
{
    console.log("O Herói de nome " + heroi[0] + " está no nivel de " + heroi[1] + " - Platina")
}
else if (heroi[1] > 8000 && heroi[1] <= 9000)
{
    console.log("O Herói de nome " + heroi[0] + " está no nivel de " + heroi[1] + " - Ascendente")
}
else if (heroi[1] > 9000 && heroi[1] <= 10000)
{
    console.log("O Herói de nome " + heroi[0] + " está no nivel de " + heroi[1] + " - Imortal")
}
else if (heroi[1] > 10000)
{
    console.log("O Herói de nome " + heroi[0] + " está no nivel de " + heroi[1] + " - Radiante")
}