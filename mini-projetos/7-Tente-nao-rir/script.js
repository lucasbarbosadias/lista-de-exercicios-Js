const JOKES = [
    "What did Michael Jackson name his denim store? Billy Jeans!",
    "What did the grape do when he got stepped on? He let out a little wine.",
    "How does a dyslexic poet write? Inverse.",
    "When does a joke become a dad joke? When it becomes apparent.",
    "What do you call a fashionable lawn statue with an excellent sense of rhythmn? A metro-gnome.",
    "Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.",
    "How does the moon cut his hair? Eclipse it.",
    "Shout out to my grandma, that's the only way she can hear.",
    "R.I.P. boiled water. You will be mist.",
    "Which side of the chicken has more feathers? The outside."
]
let prox = document.querySelector('.box__btn')
let desc = document.querySelector('.box__txt')
let num = 0
desc.innerHTML = JOKES[num]

prox.addEventListener('click', (event) => {
    if(num < JOKES.length-1){
        num++
        desc.innerHTML = JOKES[num]
    } else {
        num = 0
        desc.innerHTML = JOKES[num]
    }
})