let bestScore = localStorage.getItem('bestScore')
let nameBestScore = localStorage.getItem('name')

console.log(bestScore)
console.log(nameBestScore)
console.log(score)

if(score>bestScore)
{
    do{
        name=parseInt(window.prompt('Entrez 3 caractères'))
    }while(name.length>4)

    name=name.toUpperCase()
    bestScore=score
    score=0
}

localStorage.setItem('bestScore', bestScore)
console.log(bestScore)

localStorage.setItem('name' ,name)
console.log(name)
