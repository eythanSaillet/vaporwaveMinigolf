let bestScore = localStorage.getItem('bestScore')
let nameBestScore = localStorage.getItem('nameBestScore')

console.log(bestScore)
console.log(nameBestScore)
console.log(score)

if(highScore>bestScore)
{
    do{
        nameBestScore=parseInt(window.prompt('Entrez 3 caractères'))
    }while(nameBestScore.length>4)

    nameBestScore=nameBestScore.toUpperCase()
    highScore=bestScore
}

localStorage.setItem('bestScore', bestScore)
console.log(bestScore)

localStorage.setItem('nameBestScore' ,nameBestScore)
console.log(nameBestScore)
