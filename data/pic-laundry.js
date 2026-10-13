/* 그림 묘사 세트: 빨래하기 (구조는 data/pic-ramen.js와 같음) */
window.PIC_SETS = window.PIC_SETS || [];
(() => {
  const items = [
    { en: "I sort the laundry.", ko: "빨래를 분류한다." },
    { en: "I load the clothes into the washing machine.", ko: "옷을 세탁기에 넣는다." },
    { en: "I pour detergent into the drawer.", ko: "세제 칸에 세제를 붓는다." },
    { en: "I press the start button.", ko: "시작 버튼을 누른다." },
    { en: "When the wash is done, I take the clothes out.", ko: "빨래가 끝나면 옷을 꺼낸다." },
    { en: "I hang them on the drying rack.", ko: "건조대에 넌다." },
    { en: "Once they're dry, I fold them.", ko: "다 마르면 갠다." },
    { en: "I put them away in the drawer.", ko: "서랍에 넣어 정리한다." }
  ].map((x, i) => ({ img: "images/pic-laundry-" + (i + 1) + ".webp", en: x.en, ko: x.ko, audio: "audio/pic-laundry-" + (i + 1) + ".mp3" }));
  window.PIC_SETS.push({
    id: "pic-laundry",
    title: "빨래하기",
    verbs: ["sort", "load", "pour", "press", "take out", "hang", "fold", "put away"],
    items,
    story: { en: items.map(x => x.en).join(" "), audio: "audio/pic-laundry-story.mp3" }
  });
})();
