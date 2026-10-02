/* 카테고리 목록: 이름, 색(hue 0~360), 이모지, 카드 파일.
   새 카테고리를 만들면 ① 여기에 한 줄 추가 ② data/cards/에 파일 만들기 ③ index.html의 <script src="data/cards/..."> 목록에 한 줄 추가. */
window.CATEGORY_DATA = [
  { name: "카페·식당", hue: 32,  emoji: "☕", file: "cafe-restaurant.js" },
  { name: "공항·숙소", hue: 208, emoji: "✈️", file: "airport-hotel.js" },
  { name: "이동·쇼핑", hue: 275, emoji: "🛍️", file: "transport-shopping.js" },
  { name: "일상 대화", hue: 150, emoji: "💬", file: "daily-talk.js" },
  { name: "생활·건강", hue: 350, emoji: "💊", file: "life-health.js" }
];
