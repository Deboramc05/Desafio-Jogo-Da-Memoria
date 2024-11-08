const emojis = [
    "☮",
    "☮",
    "⚕",
    "⚕",
    "☯",
    "☯",
    "☸",
    "☸",
    "☪",
    "☪",
    "✝",
    "✝",
    "✡",
    "✡",
    "♾",
    "♾",
  ];
  let openCards = [];
  
  let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
  
  for (let i=0; i < emojis.length; i++) {
    let box = document.createElement("div");
    let idBox = document.createAttribute("id");
    idBox.value = i;
    box.setAttributeNode(idBox);

    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
  }

  function handleClick() {

    playSound("mixkit-page-back-chime-1108.wav");

    if (openCards.length < 2) {
      this.classList.add("boxOpen");
      openCards.push(this);
      
    }
  
    if (openCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
  
    console.log(openCards);
  }
  
  function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML && openCards[0].id !== openCards[1].id) {
      openCards[0].classList.add("boxmatch");
      openCards[1].classList.add("boxmatch");
      playSound("mixkit-correct-answer-fast-notification-953.wav");
      alert('Você encontrou uma combinação')
      
  } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
      playSound("mixkit-failure-arcade-alert-notification-240.wav");
     alert('Errou, tente novamente')
  }
  
    openCards = [];
  
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
      alert("Parabéns!! Você acertou todas as combinações!");
    }
  }

  function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}`);
    audio.volume = 0.2;
    audio.play();
}
  