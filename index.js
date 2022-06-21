const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.querySelector("#emoji-container")
const emojiInput = document.querySelector("#emoji-input")
const pushBtn = document.querySelector("#push-btn")
const unshiftBtn = document.querySelector("#unshift-btn")
const popBtn = document.querySelector("#pop-btn")
const shiftBtn = document.querySelector("#shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})
