/* 그림 묘사 세트: 그림 보고 영어로 말하기. 세트마다 window.PIC_SETS에 하나씩 추가.
   items = { img, en, ko(반말), audio }, story = { en(문장을 공백으로 이은 것), audio } */
window.PIC_SETS = window.PIC_SETS || [];
(() => {
  const items = [
    { en: "I fill a pot with water.", ko: "냄비에 물을 받아." },
    { en: "I put the pot on the stove and turn on the heat.", ko: "냄비를 가스레인지에 올리고 불을 켜." },
    { en: "When the water boils, I add the soup powder and the noodles.", ko: "물이 끓으면 수프랑 면을 넣어." },
    { en: "I lift the noodles with chopsticks to keep them chewy.", ko: "면이 꼬들꼬들하게 젓가락으로 들어 올려." },
    { en: "I chop some green onions and a chili pepper.", ko: "파랑 고추를 좀 썰어." },
    { en: "I toss them into the pot.", ko: "그걸 냄비에 툭 넣어." },
    { en: "I crack an egg into the pot.", ko: "냄비에 달걀을 하나 깨 넣어." },
    { en: "I turn off the heat and dig in.", ko: "불을 끄고 먹기 시작해." }
  ].map((x, i) => ({ img: "images/pic-ramen-" + (i + 1) + ".webp", en: x.en, ko: x.ko, audio: "audio/pic-ramen-" + (i + 1) + ".mp3" }));
  window.PIC_SETS.push({
    id: "pic-ramen",
    title: "꼬들꼬들 라면 끓이기",
    verbs: ["fill", "turn on", "add", "lift", "chop", "toss", "crack", "turn off"],
    items,
    story: { en: items.map(x => x.en).join(" "), audio: "audio/pic-ramen-story.mp3" }
  });
})();
