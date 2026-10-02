/* 카테고리: 생활·건강
   카드를 추가하려면 아래 push( ... ) 안 마지막 카드 뒤에 쉼표를 찍고 붙여넣으세요.
   id는 전체 카드에서 가장 큰 번호 다음 번호로 (CLAUDE.md 참고). */
(window.CARD_DATA = window.CARD_DATA || []).push(
  {
    id: 18,
    category: "생활·건강",
    title: "약국에서 증상 말하기",
    situation: "여행 중에 감기 기운이 있어요. 약국에서 약사에게 증상을 말하고 기침약을 추천받으려고 해요.",
    dialogue: [
      { who: "pharmacist", en: "Hi there. What can I help you find?", ko: "안녕하세요. 뭘 찾으세요?" },
      { who: "me", en: "Hi, I think I'm coming down with a cold.", ko: "안녕하세요, 감기에 걸린 것 같아요." },
      { who: "pharmacist", en: "Oh no. What kind of symptoms are you having?", ko: "저런. 어떤 증상이 있으세요?" },
      { who: "me", en: "I have a sore throat and a runny nose.", ko: "목이 아프고 콧물이 나요." },
      { who: "me", en: "I've been coughing since yesterday.", ko: "어제부터 기침을 하고 있어요." },
      { who: "pharmacist", en: "Okay. Any allergies to medication?", ko: "그렇군요. 약 알레르기 있으세요?" },
      { who: "me", en: "No. Do you have anything for a cough?", ko: "아니요. 기침약 같은 거 있어요?" },
      { who: "pharmacist", en: "Try this one. Take two every six hours with food.", ko: "이걸로 드셔 보세요. 여섯 시간마다 두 알씩, 식사와 함께 드세요." },
      { who: "me", en: "Got it. Does it make you drowsy?", ko: "알겠어요. 먹으면 졸려요?" },
      { who: "pharmacist", en: "It might, so don't take it before driving.", ko: "그럴 수 있으니까 운전하기 전엔 드시지 마세요." }
    ],
    expressions: [
      {
        id: "c18-e1",
        phrase: "come down with ~",
        forms: ["coming down with ~", "came down with ~"],
        ko: "'(감기 등에) 걸리다, 걸리려고 하다'라는 뜻이에요. 막 아프기 시작할 때 I think I'm coming down with something.(뭔가 걸린 것 같아)처럼 써요. 뒤에 a cold(감기), the flu(독감)를 붙여요.",
        examples: [
          { en: "I'm coming down with something, so I'll work from home today.", ko: "뭔가 걸린 것 같아서 오늘은 재택근무할게요." },
          { en: "Half of our tour group came down with the flu.", ko: "우리 투어 일행 절반이 독감에 걸렸어." },
          { en: "Drink some tea so you don't come down with a cold.", ko: "감기 안 걸리게 차 좀 마셔." },
          { en: "You look pale. Are you coming down with something?", ko: "너 얼굴이 창백해. 어디 아픈 거 아니야?" },
          { en: "I always come down with something right before a big trip.", ko: "난 꼭 큰 여행 직전에 뭔가에 걸리더라." }
        ],
        story: {
          en: "So right before my trip to Japan, I started coming down with a cold. I was so scared it would ruin the whole trip that I drank, like, ten cups of ginger tea. By the time I landed in Tokyo, I felt totally fine. Now I swear by ginger tea for everything.",
          ko: "일본 여행 바로 전에 감기 기운이 오기 시작했거든. 여행을 통째로 망칠까 봐 너무 무서워서 생강차를 한 열 잔은 마셨어. 도쿄에 도착할 때쯤엔 완전히 멀쩡해졌어. 이제 나는 뭐든 생강차로 해결하는 사람이 됐어."
        }
      },
      {
        id: "c18-e2",
        phrase: "I have a ~.",
        ko: "'~가 있어요'라는 뜻으로, 증상을 말할 때 제일 쉬운 패턴이에요: I have a headache(두통), a fever(열), a sore throat(목 아픔), a runny nose(콧물). 질문이나 요청 앞에도 써요: I have a question. 비슷한 표현: My ~ hurts.(~가 아파요)",
        examples: [
          { en: "I have a headache, so I'll skip the meeting.", ko: "머리가 아파서 회의는 빠질게요." },
          { en: "I have a quick question about my bill.", ko: "계산서에 대해 잠깐 여쭤볼 게 있어요." },
          { en: "I have a fever. Can I cancel my tour?", ko: "열이 나는데, 투어 취소할 수 있을까요?" },
          { en: "I have a sore throat from singing karaoke all night.", ko: "밤새 노래방에서 노래해서 목이 아파." },
          { en: "I have a food allergy, so no nuts, please.", ko: "음식 알레르기가 있어서 견과류는 빼 주세요." }
        ],
        story: {
          en: "Last Friday I told my boss, “I have a terrible headache,” and left work early. I went straight home and took a long nap. Then I went out for dinner and ran into my whole team at the same restaurant. I've never eaten soup so dramatically.",
          ko: "지난 금요일에 팀장님께 “머리가 너무 아파요.” 하고 일찍 퇴근했거든. 집에 가자마자 낮잠을 푹 잤지. 그러고 저녁 먹으러 나갔는데 같은 식당에서 우리 팀 전체를 딱 마주쳤어. 그렇게 아픈 척하면서 수프를 먹어 본 건 처음이야."
        }
      },
      {
        id: "c18-e3",
        phrase: "I've been ~ing.",
        ko: "'(계속) ~하고 있어요'라는 뜻이에요. 어떤 일이 얼마 동안 이어지고 있는지 말할 때 써요. 증상을 말할 때 I've been coughing for two days.처럼 since(~부터), for(~ 동안)를 붙이면 완벽해요.",
        examples: [
          { en: "I've been working here for about a year.", ko: "여기서 일한 지 1년쯤 됐어요." },
          { en: "I've been waiting for twenty minutes. Is our order coming?", ko: "20분째 기다리고 있는데요. 주문한 거 나오나요?" },
          { en: "I've been meaning to call you!", ko: "너한테 계속 전화하려고 했었어!" },
          { en: "I've been traveling around Europe for a month.", ko: "한 달째 유럽 여행 중이에요." },
          { en: "I've been sneezing all morning.", ko: "아침 내내 재채기가 나요." }
        ],
        story: {
          en: "I've been trying to wake up at 6 a.m. every day this month. The first week went great, and I felt like a productivity genius. The second week, I started hitting snooze five times every morning. Now I'm back to waking up at eight, but I tell everyone I'm still trying.",
          ko: "이번 달엔 매일 아침 6시에 일어나려고 노력 중이야. 첫 주는 완벽해서 내가 무슨 생산성 천재 같았어. 둘째 주부터는 매일 아침 알람을 다섯 번씩 미루기 시작했지. 지금은 다시 8시에 일어나는데, 사람들한텐 아직 노력 중이라고 말해."
        }
      },
      {
        id: "c18-e4",
        phrase: "Do you have anything for ~?",
        ko: "'~에 듣는 거(약) 있어요?'라는 뜻이에요. 약국에서 증상 뒤에 붙여 말하면 끝이에요. 가게에서 '~용으로 쓸 만한 거 있어요?'라는 뜻으로도 써요.",
        examples: [
          { en: "Do you have anything for a headache?", ko: "두통약 같은 거 있어요?" },
          { en: "Do you have anything for sunburn?", ko: "햇볕에 탄 데 바르는 거 있어요?" },
          { en: "Do you have anything for a five-year-old's birthday?", ko: "다섯 살 생일 선물로 괜찮은 거 있어요?" },
          { en: "Do you have anything for people who don't eat meat?", ko: "고기 안 먹는 사람이 먹을 만한 메뉴 있어요?" },
          { en: "Do you have anything for jet lag?", ko: "시차 적응에 도움 되는 거 있어요?" }
        ],
        story: {
          en: "So on my trip to Bali, I got the worst sunburn of my life on the very first day. I walked into a pharmacy looking like a lobster and asked, “Do you have anything for this?” The pharmacist didn't say a word, she just handed me a giant bottle of aloe. I basically lived in that aloe for the rest of the week.",
          ko: "발리 여행 첫날에 인생 최악으로 햇볕에 탔거든. 랍스터 같은 몰골로 약국에 들어가서 “이거에 바를 거 있어요?” 하고 물었어. 약사는 아무 말 없이 커다란 알로에 한 통을 건네주더라. 남은 일주일 동안 거의 그 알로에를 바르고 살았어."
        }
      }
    ],
    extraExpressions: []
  }
);
