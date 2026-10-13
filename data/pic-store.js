/* 그림 묘사 세트: 편의점에서 장보기 (구조는 data/pic-ramen.js와 같음) */
window.PIC_SETS = window.PIC_SETS || [];
(() => {
  const items = [
    { en: "I walk into the convenience store.", ko: "편의점에 들어가." },
    { en: "I grab a basket.", ko: "바구니를 하나 들어." },
    { en: "I take a bottle of water out of the fridge.", ko: "냉장고에서 물 한 병을 꺼내." },
    { en: "I pick up a triangle kimbap and put it in the basket.", ko: "삼각김밥을 집어 바구니에 넣어." },
    { en: "I put my basket on the counter.", ko: "바구니를 계산대에 올려놔." },
    { en: "The cashier scans my items.", ko: "점원이 물건을 스캔해." },
    { en: "I pay by card.", ko: "카드로 계산해." },
    { en: "I take my bag and leave the store.", ko: "봉투를 들고 가게를 나와." }
  ].map((x, i) => ({ img: "images/pic-store-" + (i + 1) + ".webp", en: x.en, ko: x.ko, audio: "audio/pic-store-" + (i + 1) + ".mp3" }));
  window.PIC_SETS.push({
    id: "pic-store",
    title: "편의점에서 장보기",
    verbs: ["walk in", "grab", "take out", "pick up", "put", "scan", "pay", "leave"],
    items,
    story: { en: items.map(x => x.en).join(" "), audio: "audio/pic-store-story.mp3" }
  });
})();
