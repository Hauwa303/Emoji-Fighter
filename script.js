const fighters =["🦀", "🐥", "🐊","💩", "🦍", "🐢","🐕", "🤌 ", "🐉" ,"🐝","", "🐘" ]

const stageEl = document.getElementById("stage-el")
const fightButtonEl = document.getElementById("fightButton-el")
console.log(stageEl)

fightButtonEl.addEventListener("click", function() {
    const randomIndexOne = Math.floor(Math.random() * fighters.length )
    const randomIndexTwo = Math.floor(Math.random() * fighters.length )
    stageEl.textContent = `${fighters[randomIndexOne]} vs ${fighters[randomIndexTwo]}`


})   


