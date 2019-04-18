let bestScore = localStorage.getItem('bestScore')
let name = localStorage.getItem('name')

console.log(bestScore)
console.log(name)
console.log(score)

if(score>bestScore)
{
    do{
        name=parseInt(window.prompt('Entrer votre nom en 3 caractères'))
    }while(name.length>4)

    name.toUpperCase()
    bestScore=score
    score=0
}

localStorage.setItem('bestScore', bestScore)
console.log(bestScore)

localStorage.setItem('name' ,name)
console.log(name)