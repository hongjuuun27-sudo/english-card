/* 그림 묘사 세트: 출근 준비하기 (구조는 data/pic-ramen.js와 같음) */
window.PIC_SETS = window.PIC_SETS || [];
(() => {
  const items = [
    { en: "I turn off my alarm.", ko: "알람을 꺼." },
    { en: "I put toothpaste on my toothbrush and brush my teeth.", ko: "칫솔에 치약을 짜서 이를 닦아." },
    { en: "I wash my face with cold water.", ko: "찬물로 세수를 해." },
    { en: "I button up my shirt.", ko: "셔츠 단추를 잠가." },
    { en: "I pour myself a cup of coffee.", ko: "커피를 한 잔 따라." },
    { en: "I pack my laptop and wallet in my backpack.", ko: "노트북과 지갑을 가방에 챙겨." },
    { en: "I put on my sneakers.", ko: "운동화를 신어." },
    { en: "I lock the door and head out.", ko: "문을 잠그고 나가." }
  ].map((x, i) => ({ img: "images/pic-work-" + (i + 1) + ".webp", en: x.en, ko: x.ko, audio: "audio/pic-work-" + (i + 1) + ".mp3" }));
  window.PIC_SETS.push({
    id: "pic-work",
    title: "출근 준비하기",
    verbs: ["turn off", "brush", "wash", "button up", "pour", "pack", "put on", "lock"],
    items,
    story: { en: items.map(x => x.en).join(" "), audio: "audio/pic-work-story.mp3" }
  });
})();
