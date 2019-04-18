let bestScore = localStorage.getItem('bestScore')
bestScore = JSON.parse(bestScore)

let name = localStorage.getItem('name')
name = JSON.parse(name)


console.log(bestScore)
console.log(name)
console.log(score)

if(score>bestScore)
{
    let name = window.prompt('Entrer votre nom')
    bestScore=score
    score=0
}


bestScore = JSON.stringify(bestScore)
localStorage.setItem('bestScore', bestScore)
console.log(bestScore)

name = JSON.stringify(name)
localStorage.setItem('name' ,name)
console.log(name)