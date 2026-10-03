/* 카테고리: 이동·쇼핑
   카드를 추가하려면 아래 push( ... ) 안 마지막 카드 뒤에 쉼표를 찍고 붙여넣으세요.
   id는 전체 카드에서 가장 큰 번호 다음 번호로 (CLAUDE.md 참고). */
(window.CARD_DATA = window.CARD_DATA || []).push(
  {
    id: 7,
    category: "이동·쇼핑",
    title: "길 물어보기",
    situation: "처음 와 본 동네에서 지하철역을 찾고 있어요. 지나가던 사람에게 길을 물었는데, 말이 빨라서 한 번 더 들어야 해요.",
    dialogue: [
      { who: "me", en: "Excuse me, sorry!", ko: "실례합니다, 죄송해요!",
        chunks: "Excuse me, sorry!",
        tips: [{ target: "Excuse me", ko: "'익스큐즈 미'를 붙여 빠르게, s는 z 소리로 울려요." }] },
      { who: "local", en: "Yeah? What's up?", ko: "네? 무슨 일이세요?",
        chunks: "Yeah? What's‿up?",
        tips: [{ target: "What's up", ko: "s가 up에 붙어 '왓썹'처럼 이어져요." }] },
      { who: "me", en: "Do you know where the subway station is?", ko: "지하철역이 어디 있는지 아세요?",
        chunks: "Do you know / where the subway station‿is?",
        soloChunks: [1, 2],
        tips: [{ target: "Do you know", ko: "빠르게 말하면 '두유노'가 '쥬노'처럼 뭉개져요." },
               { target: "station is", ko: "n이 is에 붙어 '스테이셔니즈'처럼 이어져요." }] },
      { who: "local", en: "Oh yeah, it's not far. Go straight two blocks, then hang a left.", ko: "아 네, 멀지 않아요. 두 블록 직진하다가 왼쪽으로 꺾으세요.",
        chunks: "Oh yeah, it's not far. / Go straight two blocks, / then hang‿a left.",
        tips: [{ target: "not far", ko: "not의 t는 멈추기만 하고 터뜨리지 않아요." },
               { target: "hang a left", ko: "'왼쪽으로 꺾다'. hang이 a에 붙어 '행어 레프트'처럼." }] },
      { who: "me", en: "Sorry, could you say that again?", ko: "죄송한데, 다시 한번 말해 주시겠어요?",
        chunks: "Sorry, / could‿you say that‿again?",
        tips: [{ target: "could you", ko: "d와 y가 만나 '쿠쥬'처럼 소리 나요." },
               { target: "that again", ko: "t가 굴러 '대러겐'처럼 이어져요." }] },
      { who: "local", en: "Sure. Two blocks straight, then left. You can't miss it.", ko: "그럼요. 두 블록 직진하고 왼쪽이요. 바로 보일 거예요.",
        chunks: "Sure. Two blocks straight, / then left. / You can't miss‿it.",
        tips: [{ target: "miss it", ko: "s가 it에 붙어 '미씻'처럼 이어져요." },
               { target: "can't", ko: "'금방 찾을 거예요'라는 말이라 can't에 힘을 줘요." }] },
      { who: "me", en: "Got it. Thanks so much!", ko: "알겠어요. 정말 감사해요!",
        chunks: "Got‿it. / Thanks so much!",
        tips: [{ target: "Got it", ko: "t가 굴러 '가릿'처럼 이어져요." },
               { target: "Thanks", ko: "th는 혀끝을 이 사이에 살짝 물고 바람을 내요." }] }
    ],
    expressions: [
      {
        id: "c7-e1",
        phrase: "Do you know where ~ is?",
        ko: "'~이 어디 있는지 아세요?'라는 뜻이에요. 그냥 Where is ~?보다 훨씬 공손하게 들려요. 모르는 사람에게 물을 땐 앞에 Excuse me를 꼭 붙이세요. 비슷한 표현: Where can I find ~?",
        examples: [
          { en: "Excuse me, do you know where the nearest restroom is?", ko: "실례지만, 제일 가까운 화장실이 어디 있는지 아세요?" },
          { en: "Do you know where my charger is? I can't find it anywhere.", ko: "내 충전기 어디 있는지 알아? 아무리 찾아도 없어." },
          { en: "Do you know where the conference room is?", ko: "회의실이 어디 있는지 아세요?" },
          { en: "Do you know where the fitting room is?", ko: "탈의실이 어디 있는지 아세요?" },
          { en: "Do you know where the ketchup is? It's not on our table.", ko: "케첩 어디 있는지 아세요? 저희 테이블엔 없어서요." }
        ],
        story: {
          en: "So I was in New York last summer, totally lost, and I asked this guy, “Do you know where Times Square is?” He didn't say a word and just pointed behind me. I turned around, and there it was, giant screens and all, literally right behind me. I wanted to disappear.",
          ko: "작년 여름에 뉴욕에서 완전 길을 잃어서 어떤 남자한테 “타임스스퀘어가 어디 있는지 아세요?” 하고 물어봤거든. 그 사람이 아무 말 없이 내 뒤를 가리키는 거야. 뒤돌아보니까 거대한 전광판까지 다 있는 타임스스퀘어가 진짜 바로 내 뒤에 있었어. 땅으로 꺼지고 싶었어."
        }
      },
      {
        id: "c7-e2",
        phrase: "say that again",
        ko: "'다시 한번 말해 주시겠어요?'라는 뜻이에요. 못 알아들었을 때 당황하지 말고 Sorry, could you say that again?으로 다시 들으면 돼요. a little slower(조금 천천히)를 붙이면 더 좋아요. 친구 사이에선 놀랐을 때 '뭐라고?' 느낌으로도 써요. 비슷한 표현: Sorry? / Come again?",
        examples: [
          { en: "Sorry, could you say that again? It's really loud in here.", ko: "죄송한데 다시 말해 주실래요? 여기 너무 시끄러워서요." },
          { en: "Can you say that again? You cut out for a second.", ko: "다시 말해 줄래? 잠깐 끊겼어." },
          { en: "Wait, say that again? You're moving to Canada?", ko: "잠깐, 뭐라고? 너 캐나다로 이사 간다고?" },
          { en: "Could you say that again a little slower?", ko: "조금만 천천히 다시 말해 주시겠어요?" },
          { en: "Sorry, can you say that again? I missed the last part.", ko: "죄송한데 다시 말씀해 주실래요? 마지막 부분을 놓쳤어요." }
        ],
        story: {
          en: "My coworker told me yesterday, totally casually, that she's quitting to travel the world for a year. I almost choked on my coffee and said, “Wait, say that again?” She just smiled and showed me her one-way ticket to Lisbon. Now I'm sitting at my desk wondering what I'm doing with my life.",
          ko: "어제 동료가 아무렇지 않게 1년 동안 세계 여행 가려고 회사를 그만둔다고 하는 거야. 커피 마시다 사레들릴 뻔해서 “잠깐, 다시 말해 봐?” 했지. 걔는 그냥 웃으면서 리스본행 편도 티켓을 보여 주더라. 그래서 지금 나는 책상에 앉아서 내 인생 뭐 하고 있나 생각 중이야."
        }
      },
      {
        id: "c7-e3",
        phrase: "You can't miss it.",
        ko: "'바로 보일 거예요, 못 찾을 수가 없어요'라는 뜻이에요. 길을 알려 준 사람이 마지막에 자주 덧붙여요. 이 말이 나오면 거의 다 왔다는 뜻이에요.",
        examples: [
          { en: "It's the big red building on the corner. You can't miss it.", ko: "모퉁이에 있는 큰 빨간 건물이에요. 바로 보일 거예요." },
          { en: "The restaurant has a huge neon sign. You can't miss it.", ko: "그 식당 엄청 큰 네온사인이 있어. 못 찾을 수가 없어." },
          { en: "My desk is the one covered in plants. You can't miss it.", ko: "제 자리는 화분으로 뒤덮인 데예요. 바로 보일 거예요." },
          { en: "Our house is the only yellow one on the street. You can't miss it.", ko: "우리 집이 그 길에서 유일한 노란 집이야. 못 찾을 수가 없어." },
          { en: "Your gate is right next to the duty-free shop. You can't miss it.", ko: "게이트는 면세점 바로 옆이에요. 바로 보이실 거예요." }
        ],
        story: {
          en: "My friend gave me directions to her new place and said, “It's the blue house with the big dog. You can't miss it.” Well, there were three blue houses with big dogs on that street. I knocked on the wrong door, and a very confused grandpa invited me in for tea. I actually stayed, and he was awesome.",
          ko: "친구가 새 집 가는 길을 알려 주면서 “큰 개 있는 파란 집이야. 못 찾을 수가 없어.” 했거든. 근데 그 길에 큰 개 있는 파란 집이 세 채나 있더라. 엉뚱한 집 문을 두드렸는데, 엄청 당황한 할아버지가 차 한잔하고 가라고 하셨어. 진짜로 들어가서 마셨는데, 할아버지 완전 멋있으셨어."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 8,
    category: "이동·쇼핑",
    title: "택시·우버에서 목적지 말하기",
    situation: "우버를 탔어요. 기사님이 목적지를 확인하면, 시간이 얼마나 걸리는지 묻고 호텔 정문 앞에 내려 달라고 하고 싶어요.",
    dialogue: [
      { who: "driver", en: "Hey, Minji? Heading to the Hilton downtown?", ko: "안녕하세요, 민지 님? 시내 힐튼 호텔 가시는 거죠?",
        chunks: "Hey, Minji? / Heading to the Hilton downtown?",
        tips: [{ target: "Minji?", ko: "이름을 확인하는 질문이라 끝을 올려요." },
               { target: "Heading", ko: "d가 약하게 굴러 '헤링'처럼 들려요." }] },
      { who: "me", en: "Yep, that's me. How long will it take?", ko: "네, 맞아요. 얼마나 걸릴까요?",
        chunks: "Yep, that's me. / How long will‿it take?",
        tips: [{ target: "Yep", ko: "p는 입술만 닫고 터뜨리지 않아요." },
               { target: "will it", ko: "l이 it에 붙어 '윌릿'처럼 이어져요." }] },
      { who: "driver", en: "Traffic's not too bad, so twenty minutes or so.", ko: "차가 많이 안 막혀서 한 20분쯤이요.",
        chunks: "Traffic's not too bad, / so twenty minutes‿or so.",
        tips: [{ target: "twenty", ko: "빠르게 말하면 가운데 t가 빠져 '트웨니'처럼 들려요." },
               { target: "or so", ko: "'~쯤'이라는 뜻. 앞 숫자에 붙여 가볍게 말해요." }] },
      { who: "me", en: "Cool. Could you drop me off at the main entrance?", ko: "좋아요. 정문 앞에 내려 주실 수 있어요?",
        chunks: "Cool. / Could‿you drop me off / at the main entrance?",
        soloChunks: [2, 3],
        tips: [{ target: "drop me off", ko: "'내려 주다'. 한 덩어리로 이어서 말해요." },
               { target: "entrance", ko: "첫음절 '엔'에 힘을 줘요." }] },
      { who: "driver", en: "You got it. … Alright, here we are!", ko: "알겠습니다. … 자, 도착했습니다!",
        chunks: "You got‿it. … / Alright, here we are!",
        tips: [{ target: "got it", ko: "t가 굴러 '가릿'처럼 이어져요." },
               { target: "here we are", ko: "'다 왔어요'라는 뜻. are에 힘을 줘요." }] },
      { who: "me", en: "Thanks, have a good one!", ko: "감사해요, 좋은 하루 보내세요!",
        chunks: "Thanks, / have‿a good‿one!",
        tips: [{ target: "good one", ko: "d가 one에 붙어 '구던'처럼 이어져요." }] }
    ],
    expressions: [
      {
        id: "c8-e1",
        phrase: "How long will it take?",
        ko: "'얼마나 걸릴까요?'라는 뜻이에요. 이동 시간, 대기 시간, 수리 시간 모두 이걸로 물어요. 뒤에 to + 동작을 붙이면 '~하는 데 얼마나 걸려요?'가 돼요. 비슷한 표현: How long does it take ~?(평소에 얼마나 걸리는지)",
        examples: [
          { en: "How long will it take to get to the airport?", ko: "공항까지 얼마나 걸릴까요?" },
          { en: "How long will it take to fix my phone?", ko: "제 폰 고치는 데 얼마나 걸릴까요?" },
          { en: "How long will it take for the food to come out?", ko: "음식 나오는 데 얼마나 걸릴까요?" },
          { en: "How long will it take you to finish the slides?", ko: "슬라이드 끝내는 데 얼마나 걸릴 것 같아요?" },
          { en: "How long will it take to drive to your place?", ko: "너희 집까지 차로 얼마나 걸려?" }
        ],
        story: {
          en: "So I dropped my laptop off at the repair shop and asked, “How long will it take?” The guy said, “Maybe an hour,” so I went to grab lunch nearby. Two hours later he called and said it was actually gonna take three days. I've been living on my phone ever since, and my thumbs hate me.",
          ko: "노트북을 수리점에 맡기면서 “얼마나 걸릴까요?” 하고 물어봤거든. 아저씨가 “한 시간쯤이요.” 해서 근처에서 점심 먹고 있었지. 두 시간 뒤에 전화가 와서는 사실 3일 걸린대. 그 뒤로 계속 폰으로만 버티는 중이라 엄지손가락이 날 미워해."
        }
      },
      {
        id: "c8-e2",
        phrase: "drop ~ off",
        ko: "'(차로) ~를 내려 주다', '(물건을) 맡기다/갖다 놓다'라는 뜻이에요. 택시에서 Could you drop me off at ~?는 '~에 내려 주세요'예요. 반대로 '태우러 오다'는 pick ~ up. 비슷한 표현: Can you let me out here?(여기서 내려 주세요)",
        examples: [
          { en: "Can you drop me off at the corner?", ko: "저 모퉁이에 내려 주실 수 있어요?" },
          { en: "I'll drop the kids off at school on my way to work.", ko: "출근하는 길에 애들 학교에 내려 줄게." },
          { en: "Could you drop these files off at the front desk?", ko: "이 서류 좀 안내 데스크에 갖다 놓아 줄래요?" },
          { en: "Thanks for offering to drop me off at the airport!", ko: "공항까지 태워 준다고 해서 고마워!" },
          { en: "Just drop the bike off at the shop when you're done.", ko: "다 타면 자전거는 가게에 그냥 반납하시면 돼요." }
        ],
        story: {
          en: "Last night my friend offered to drop me off at home after dinner. She's the worst driver I know, but I said yes because it was pouring. She missed my street twice and then parked halfway on the sidewalk. Next time, I'm walking, rain or not.",
          ko: "어젯밤에 친구가 저녁 먹고 집까지 태워 준다고 했거든. 내가 아는 사람 중에 운전을 제일 못하는 애인데, 비가 쏟아져서 그냥 타겠다고 했지. 우리 집 골목을 두 번이나 지나치더니 인도에 반쯤 걸쳐서 차를 세우더라. 다음엔 비가 오든 말든 걸어갈 거야."
        }
      },
      {
        id: "c8-e3",
        phrase: "You got it.",
        ko: "'알겠어요, 그렇게 할게요'라는 뜻이에요. 부탁을 받았을 때 시원하게 '접수!' 하는 느낌이에요. 직원, 기사님, 친구가 자주 써요. 비슷한 표현: Sure thing. / Will do.",
        examples: [
          { en: "You got it, boss. I'll handle it.", ko: "알겠습니다, 팀장님. 제가 처리할게요." },
          { en: "You got it, I'll text you when I land.", ko: "알았어, 도착하면 문자할게." },
          { en: "One more order of fries? You got it.", ko: "감자튀김 하나 더요? 알겠습니다." },
          { en: "You got it, your bags will be in your room in ten minutes.", ko: "알겠습니다, 짐은 10분 안에 객실로 올려 드릴게요." },
          { en: "You got it, I'll have your size ready at the counter.", ko: "알겠습니다, 고객님 사이즈로 카운터에 준비해 둘게요." }
        ],
        story: {
          en: "So my little brother asked if I could help him move this weekend, and I said, “You got it!” without thinking. Turns out he lives on the fifth floor with no elevator, and he owns, like, two hundred books. My legs are still shaking. He owes me pizza for life.",
          ko: "남동생이 이번 주말에 이사 좀 도와줄 수 있냐길래 생각도 안 하고 “당연하지!” 했거든. 알고 보니 엘리베이터 없는 5층에 살고, 책이 한 200권은 있더라. 아직도 다리가 후들거려. 걔는 평생 나한테 피자 사야 돼."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 9,
    category: "이동·쇼핑",
    title: "옷 가게에서 사이즈 묻기",
    situation: "옷 가게에서 마음에 드는 셔츠를 찾았는데 내 사이즈가 안 보여요. 직원에게 물어보고 입어 보고 싶어요.",
    dialogue: [
      { who: "clerk", en: "Hey there! Let me know if you need any help.", ko: "안녕하세요! 도움 필요하시면 말씀하세요.",
        chunks: "Hey there! / Let me know / if you need‿any help.",
        soloChunks: [2, 3],
        tips: [{ target: "Let me know", ko: "let me가 '레미'처럼 줄어들어요." },
               { target: "need any", ko: "d가 any에 붙어 '니대니'처럼 이어져요." }] },
      { who: "me", en: "Do you have this in a medium?", ko: "이거 미디엄 사이즈 있어요?",
        chunks: "Do you have / this‿in‿a medium?",
        soloChunks: [1, 2],
        tips: [{ target: "Do you have", ko: "빠르게 말하면 '쥬해브'처럼 뭉개져요." },
               { target: "this in a", ko: "끊지 말고 '디씨너'처럼 한 번에 이어요." }] },
      { who: "clerk", en: "Let me check in the back. … Yep, here's a medium!", ko: "창고에 확인해 볼게요. … 네, 미디엄 여기 있어요!",
        chunks: "Let me check‿in the back. … / Yep, here's‿a medium!",
        tips: [{ target: "check in", ko: "k가 in에 붙어 '체킨'처럼 이어져요." },
               { target: "here's a", ko: "s가 a에 붙어 '히어저'처럼 이어져요." }] },
      { who: "me", en: "Awesome. Where are the fitting rooms?", ko: "좋아요. 탈의실은 어디예요?",
        chunks: "Awesome. / Where‿are the fitting rooms?",
        tips: [{ target: "Where are", ko: "r로 이어져 '웨어라'처럼 붙어요." },
               { target: "fitting", ko: "tt가 굴러 '피링'처럼 들려요." }] },
      { who: "clerk", en: "Right over there. Let me know how it fits!", ko: "바로 저쪽이에요. 잘 맞는지 알려 주세요!",
        chunks: "Right‿over there. / Let me know how it fits!",
        tips: [{ target: "Right over", ko: "t가 굴러 '라이로버'처럼 이어져요." },
               { target: "how it fits", ko: "'잘 맞는지'. how it이 '하우잇'으로 붙어요." }] },
      { who: "me", en: "Hmm, it's a little tight around the shoulders.", ko: "음, 어깨 쪽이 좀 끼네요.",
        chunks: "Hmm, / it's‿a little / tight‿around the shoulders.",
        soloChunks: [2, 3],
        tips: [{ target: "little", ko: "tt가 굴러 '리를'처럼 들려요." },
               { target: "tight around", ko: "t가 굴러 '타이러라운드'처럼 이어져요." }] },
      { who: "clerk", en: "Ah, gotcha. Wanna try a size up?", ko: "아, 그렇군요. 한 사이즈 큰 걸로 입어 보실래요?",
        chunks: "Ah, gotcha. / Wanna try a size‿up?",
        tips: [{ target: "gotcha", ko: "got you를 줄인 말. '가챠'처럼 짧게." },
               { target: "size up", ko: "z가 up에 붙어 '사이접'처럼 이어져요." }] },
      { who: "me", en: "Yeah, do you have a large?", ko: "네, 라지 있어요?",
        chunks: "Yeah, / do you have‿a large?",
        tips: [{ target: "have a", ko: "v가 a에 붙어 '해버'처럼 이어져요." },
               { target: "large", ko: "r을 굴리고 끝 ge는 '쥐'처럼 짧게." }] }
    ],
    expressions: [
      {
        id: "c9-e1",
        phrase: "Do you have this in ~?",
        ko: "'이거 ~로도 있어요?'라는 뜻이에요. 사이즈·색깔·종류를 물을 때 만능 문장이에요. in 뒤에 a medium, black, size 8처럼 붙이면 돼요. 비슷한 표현: Does this come in ~?",
        examples: [
          { en: "Do you have this in a size eight?", ko: "이거 8 사이즈 있어요?" },
          { en: "Do you have this in a smaller size? It's for my niece.", ko: "이거 더 작은 사이즈 있어요? 조카 주려고요." },
          { en: "Do you have this in a PDF? I want to read it on my phone.", ko: "이거 PDF로도 있어요? 폰으로 읽고 싶어서요." },
          { en: "Do you have this in decaf?", ko: "이거 디카페인으로도 돼요?" },
          { en: "Do you have this in a lunch portion?", ko: "이거 점심 메뉴 양으로도 나와요?" }
        ],
        story: {
          en: "So I found the perfect jacket at this vintage store yesterday, but it was way too big. I asked the guy, “Do you have this in a small?” and he laughed and said, “It's vintage, man, there's only one.” I bought it anyway, and now I'm basically wearing a tent. But it's a really cool tent.",
          ko: "어제 빈티지 가게에서 완벽한 재킷을 찾았는데, 너무 큰 거야. 직원한테 “이거 스몰 있어요?” 했더니 웃으면서 “빈티지라서 하나밖에 없어요.” 하더라. 그래도 그냥 샀고, 지금 거의 텐트를 입고 다니는 중이야. 그래도 엄청 멋진 텐트야."
        }
      },
      {
        id: "c9-e2",
        phrase: "Let me check ~.",
        ko: "'확인해 볼게요'라는 뜻이에요. 직원이 재고나 예약을 확인하러 갈 때 꼭 하는 말이에요. 나도 바로 대답하기 곤란할 때 쓰기 좋아요. 비슷한 표현: Let me see. / I'll double-check.",
        examples: [
          { en: "Let me check my calendar and get back to you.", ko: "일정 확인해 보고 다시 연락드릴게요." },
          { en: "Let me check if we have a table for four.", ko: "4인 테이블 있는지 확인해 볼게요." },
          { en: "Let me check the bus schedule real quick.", ko: "버스 시간표 잠깐 확인해 볼게." },
          { en: "Let me check with my roommate first.", ko: "룸메이트한테 먼저 물어볼게." },
          { en: "Let me check in the back for your size.", ko: "창고에 손님 사이즈 있는지 확인해 볼게요." }
        ],
        story: {
          en: "My friend asked if I wanted to go to Jeju with her next month, and I said, “Let me check my schedule.” Honestly, I had nothing going on, I just didn't want to sound too excited. Five minutes later, I texted her, “Okay, I'm free!” She knew exactly what I was doing.",
          ko: "친구가 다음 달에 제주도 같이 가겠냐고 물어서 “일정 좀 확인해 볼게.” 했거든. 솔직히 아무 일정도 없었는데, 너무 신난 티 내기 싫었어. 5분 뒤에 “오케이, 나 시간 돼!” 하고 문자 보냈지. 친구는 내 속셈을 다 알고 있었어."
        }
      },
      {
        id: "c9-e3",
        phrase: "It's a little ~.",
        ko: "'좀 ~하네요'라는 뜻이에요. 불만을 부드럽게 말할 때 좋아요. tight(끼는), loose(헐렁한), long(긴) 같은 단어만 바꿔 끼우면 끝. 비슷한 표현: It's kind of ~. / It's a bit ~.",
        examples: [
          { en: "It's a little tight around the shoulders.", ko: "어깨가 좀 끼네요." },
          { en: "It's a little loud in here. Can we sit outside?", ko: "여기 좀 시끄럽네요. 밖에 앉아도 될까요?" },
          { en: "It's a little early for me. How about ten?", ko: "저한테는 좀 이르네요. 10시 어때요?" },
          { en: "It's a little far, but the view is totally worth it.", ko: "좀 멀긴 한데, 경치가 완전 그럴 만해." },
          { en: "It's a little spicy, but you'll love it.", ko: "좀 맵긴 한데, 너 완전 좋아할 거야." }
        ],
        story: {
          en: "So I made kimchi stew for my American coworkers at a potluck yesterday. I warned them, “It's a little spicy,” and they all said they could handle it. Ten minutes later, everyone was sweating and chugging milk like crazy. Next time, I'm bringing the mild version.",
          ko: "어제 회사 포트럭 파티에 미국인 동료들 먹으라고 김치찌개를 만들어 갔거든. “좀 매워요.” 하고 미리 말했더니 다들 괜찮다는 거야. 10분 뒤에 다들 땀 뻘뻘 흘리면서 우유를 미친 듯이 들이켜더라. 다음엔 순한 맛으로 가져가야겠어."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 15,
    category: "이동·쇼핑",
    title: "버스 타고 목적지 확인하기",
    situation: "처음 가는 도시에서 버스를 타요. 이 버스가 미술관에 가는지 확인하고, 어디서 내려야 하는지 기사님께 알려 달라고 하고 싶어요.",
    dialogue: [
      { who: "me", en: "Hi, does this bus go to the art museum?", ko: "안녕하세요, 이 버스 미술관 가요?",
        chunks: "Hi, does this bus / go to the art museum?",
        soloChunks: [1, 2],
        tips: [{ target: "bus", ko: "'버스'가 아니라 끝 s를 짧게 '버ㅅ'처럼." },
               { target: "museum", ko: "'지'에 힘을 줘요. 뮤'지'엄." }] },
      { who: "driver", en: "Yep, hop on. It's about six stops from here.", ko: "네, 타세요. 여기서 여섯 정거장쯤이에요.",
        chunks: "Yep, hop‿on. / It's‿about six stops from here.",
        tips: [{ target: "hop on", ko: "'타세요'. p가 on에 붙어 '하펀'처럼." },
               { target: "six stops", ko: "s가 겹쳐 '식스땁스'처럼 한 번에." }] },
      { who: "me", en: "Great. Can I pay with my card?", ko: "좋아요. 카드로 내도 돼요?",
        chunks: "Great. / Can‿I pay with my card?",
        tips: [{ target: "Can I", ko: "n이 I에 붙어 '캐나이'처럼 이어져요." }] },
      { who: "driver", en: "Sure, just tap it right there.", ko: "네, 저기에 대시면 돼요.",
        chunks: "Sure, / just tap‿it right there.",
        tips: [{ target: "tap it", ko: "p가 it에 붙어 '태핏'처럼 이어져요." },
               { target: "right there", ko: "right의 t는 멈추기만 하고 바로 there로." }] },
      { who: "me", en: "Could you tell me when to get off?", ko: "어디서 내려야 하는지 알려 주실 수 있어요?",
        chunks: "Could‿you tell me / when to get‿off?",
        soloChunks: [1, 2],
        tips: [{ target: "Could you", ko: "d와 y가 만나 '쿠쥬'처럼 소리 나요." },
               { target: "get off", ko: "'내리다'. t가 굴러 '게로프'처럼." }] },
      { who: "driver", en: "No problem. I'll give you a heads-up.", ko: "그럼요. 미리 말씀드릴게요.",
        chunks: "No problem. / I'll give‿you a heads-up.",
        tips: [{ target: "give you", ko: "v와 y가 이어져 '기뷰'처럼." },
               { target: "heads-up", ko: "'미리 알려 줌'. heads에 힘을 줘요." }] },
      { who: "driver", en: "Okay, this is you! The museum's right across the street.", ko: "자, 여기서 내리세요! 미술관은 길 바로 건너편이에요.",
        chunks: "Okay, this‿is you! / The museum's right‿across the street.",
        tips: [{ target: "this is you", ko: "'여기서 내리세요'라는 뜻. you에 힘을 줘요." },
               { target: "right across", ko: "t가 굴러 '라이러크로스'처럼 이어져요." }] },
      { who: "me", en: "Thanks so much. Have a good one!", ko: "정말 감사해요. 좋은 하루 보내세요!",
        chunks: "Thanks so much. / Have‿a good‿one!",
        tips: [{ target: "good one", ko: "d가 one에 붙어 '구던'처럼 이어져요." }] }
    ],
    expressions: [
      {
        id: "c15-e1",
        phrase: "Does this ~ go to ~?",
        ko: "'이 ~ ~에 가요?'라는 뜻이에요. 버스, 지하철, 기차가 목적지에 가는지 확인할 때 쓰는 패턴이에요. bus, train, shuttle만 바꿔 끼우면 돼요. 비슷한 표현: Is this the right bus for ~?",
        examples: [
          { en: "Does this train go to Brooklyn?", ko: "이 지하철 브루클린 가요?" },
          { en: "Does this shuttle go to the airport?", ko: "이 셔틀 공항 가요?" },
          { en: "Does this road go to the beach?", ko: "이 길로 가면 해변 나와요?" },
          { en: "Does this elevator go to the rooftop bar?", ko: "이 엘리베이터 루프톱 바까지 가요?" },
          { en: "Does this hallway go to the conference rooms?", ko: "이 복도로 가면 회의실 나와요?" }
        ],
        story: {
          en: "Last summer in Rome, I jumped on a bus and asked the driver, “Does this bus go to the Colosseum?” He nodded, so I sat down and relaxed. Forty minutes later, I was somewhere in the countryside surrounded by sheep. Turns out he just didn't speak English and was being polite.",
          ko: "작년 여름에 로마에서 버스에 올라타면서 기사님께 “이 버스 콜로세움 가요?” 하고 물었거든. 고개를 끄덕이시길래 편하게 앉아 있었지. 40분 뒤에 나는 양들에 둘러싸인 시골 어딘가에 있었어. 알고 보니 기사님이 영어를 못 하셔서 그냥 예의상 끄덕이신 거였어."
        }
      },
      {
        id: "c15-e2",
        phrase: "hop on",
        forms: ["hopped on"],
        ko: "'(버스·차·자전거에) 올라타다'라는 뜻이에요. get on보다 가볍고 캐주얼한 느낌이에요. 반대는 hop off(내리다). '참여하다'라는 뜻으로 hop on a call(통화에 들어오다)처럼도 써요.",
        examples: [
          { en: "Hop on, I'll give you a ride home.", ko: "타, 집까지 태워 줄게." },
          { en: "Let's hop on the ferry to the island.", ko: "섬 가는 페리 타자." },
          { en: "Can you hop on a quick call at three?", ko: "3시에 잠깐 통화 들어올 수 있어요?" },
          { en: "Just hop on the next train. It's faster.", ko: "그냥 다음 열차 타. 그게 더 빨라." },
          { en: "You can hop on one of those city bikes right outside.", ko: "바로 밖에 있는 공공 자전거 타고 가면 돼요." }
        ],
        story: {
          en: "So I was running late for a job interview yesterday, and a bus was just pulling away. The driver saw me sprinting, stopped, and yelled, “Hop on, hurry up!” I made it to the interview with two minutes to spare. If I get the job, I'm sending that driver a thank-you card.",
          ko: "어제 면접에 늦어서 뛰어가는데 버스가 막 출발하고 있었거든. 기사님이 내가 전력 질주하는 걸 보고 멈추더니 “타요, 빨리!” 하고 소리치셨어. 덕분에 면접에 2분 남기고 도착했어. 합격하면 그 기사님께 감사 카드 보낼 거야."
        }
      },
      {
        id: "c15-e3",
        phrase: "get off",
        ko: "'(버스·지하철·비행기에서) 내리다'라는 뜻이에요. 어디서 내리는지 물을 때 Where should I get off?를 꼭 기억하세요. 반대는 get on(타다). get off work(퇴근하다)도 자주 써요.",
        examples: [
          { en: "Where should I get off for Central Park?", ko: "센트럴파크 가려면 어디서 내려야 해요?" },
          { en: "What time do you get off work today?", ko: "오늘 몇 시에 퇴근해?" },
          { en: "We need to get off at the next stop.", ko: "우리 다음 정거장에서 내려야 해." },
          { en: "Please stay seated until it's time to get off the plane.", ko: "비행기에서 내릴 때까지 자리에 앉아 계세요." },
          { en: "Let's get off here and walk the rest of the way.", ko: "여기서 내려서 나머지는 걸어가자." }
        ],
        story: {
          en: "I fell asleep on the subway after a long day at work and completely forgot to get off. When I woke up, I was at the very last stop, and it was almost midnight. I had to take a forty-dollar taxi all the way back. Most expensive nap of my life.",
          ko: "회사에서 긴 하루를 보내고 지하철에서 잠들어서 내리는 걸 완전히 까먹었어. 눈을 떠 보니 종점이었고, 거의 자정이었어. 결국 40달러짜리 택시를 타고 돌아와야 했지. 내 인생에서 제일 비싼 낮잠이었어."
        }
      },
      {
        id: "c15-e4",
        phrase: "give ~ a heads-up",
        ko: "'~에게 미리 알려 주다, 귀띔해 주다'라는 뜻이에요. 나중에 놀라지 않게 미리 말해 줄 때 써요. Thanks for the heads-up!(미리 알려 줘서 고마워!)도 정말 자주 들려요.",
        examples: [
          { en: "Can you give me a heads-up before the boss comes in?", ko: "팀장님 오시기 전에 미리 좀 알려 줄래?" },
          { en: "I'll give you a heads-up when the food's almost ready.", ko: "음식 거의 다 되면 미리 알려 줄게." },
          { en: "Just to give you a heads-up, the pool is closed today.", ko: "미리 말씀드리면, 오늘 수영장은 문을 닫아요." },
          { en: "Give me a heads-up if you're running late.", ko: "늦을 것 같으면 미리 말해 줘." },
          { en: "The airline should give us a heads-up about any delays.", ko: "항공사가 지연되면 미리 알려 줘야 하는데." }
        ],
        story: {
          en: "My roommate texted me yesterday, “Just to give you a heads-up, my parents are coming over tonight.” I looked around, and our apartment looked like a tornado had hit it. I spent the next two hours cleaning like my life depended on it. Her mom still asked why the couch smelled like pizza.",
          ko: "어제 룸메이트가 “미리 말해 두는데, 오늘 밤에 우리 부모님 오셔.” 하고 문자를 보냈어. 주위를 둘러보니까 우리 집이 토네이도가 휩쓸고 간 꼴이더라. 그 뒤로 두 시간 동안 목숨 걸고 청소했어. 그래도 룸메이트 어머니가 소파에서 왜 피자 냄새가 나냐고 물어보셨어."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 16,
    category: "이동·쇼핑",
    title: "옷 교환·환불하기",
    situation: "지난주에 산 바지가 작아요. 영수증을 들고 가게에 다시 와서, 더 큰 사이즈로 바꾸고 싶어요.",
    dialogue: [
      { who: "clerk", en: "Hi there! What can I help you with?", ko: "안녕하세요! 뭘 도와드릴까요?",
        chunks: "Hi there! / What can‿I help‿you with?",
        tips: [{ target: "help you", ko: "p가 you에 붙어 '헬퓨'처럼 이어져요." },
               { target: "with?", ko: "th는 혀끝을 살짝 내밀고 짧게 끝내요." }] },
      { who: "me", en: "Hi, I bought these pants last week.", ko: "안녕하세요, 지난주에 이 바지를 샀는데요.",
        chunks: "Hi, / I bought these pants last week.",
        tips: [{ target: "bought", ko: "gh는 소리 나지 않아요. '봇'처럼 짧게." },
               { target: "last week", ko: "last의 t는 거의 안 들리고 '래스 윅'처럼." }] },
      { who: "me", en: "Unfortunately, they're a little too small.", ko: "아쉽게도 조금 작아요.",
        chunks: "Unfortunately, / they're‿a little too small.",
        tips: [{ target: "Unfortunately", ko: "'포'에 힘을 주고 빠르게 '언포r츄너리'처럼." },
               { target: "little", ko: "tt가 굴러 '리를'처럼 들려요." }] },
      { who: "clerk", en: "Oh no. Do you have the receipt with you?", ko: "아이고. 영수증 갖고 계세요?",
        chunks: "Oh no. / Do you have the receipt / with you?",
        soloChunks: [2, 3],
        tips: [{ target: "receipt", ko: "p는 소리 나지 않아요. '리씻'처럼." },
               { target: "with you", ko: "th와 y가 이어져 '위쥬'처럼 들리기도 해요." }] },
      { who: "me", en: "Yep, here it is.", ko: "네, 여기 있어요.",
        chunks: "Yep, here‿it‿is.",
        tips: [{ target: "here it is", ko: "끊지 말고 '히어리리즈'처럼 한 번에." }] },
      { who: "clerk", en: "Great. Would you like a refund or an exchange?", ko: "좋아요. 환불해 드릴까요, 교환해 드릴까요?",
        chunks: "Great. / Would‿you like a refund / or‿an‿exchange?",
        soloChunks: [2, 3],
        tips: [{ target: "Would you", ko: "d와 y가 만나 '우쥬'처럼 소리 나요." },
               { target: "refund or an exchange", ko: "둘 중 고르는 질문: refund에서 올리고 exchange에서 내려요." }] },
      { who: "me", en: "Can I exchange them for a bigger size?", ko: "더 큰 사이즈로 바꿀 수 있을까요?",
        chunks: "Can‿I exchange them / for‿a bigger size?",
        soloChunks: [1, 2],
        tips: [{ target: "exchange them", ko: "them은 약하게 '덤'처럼 짧게 지나가요." },
               { target: "for a", ko: "r이 a에 붙어 '포러'처럼 이어져요." }] },
      { who: "clerk", en: "Of course. Let me grab a pair in a thirty-two.", ko: "물론이죠. 32 사이즈로 하나 가져올게요.",
        chunks: "Of course. / Let me grab‿a pair / in‿a thirty-two.",
        soloChunks: [2, 3],
        tips: [{ target: "Of course", ko: "'오브 코스'가 아니라 '어v 코r스'처럼 빠르게." },
               { target: "grab a pair", ko: "b가 a에 붙어 '그래버 페어r'처럼." }] },
      { who: "me", en: "Thanks. Sorry for the hassle!", ko: "감사해요. 번거롭게 해서 죄송해요!",
        chunks: "Thanks. / Sorry for the hassle!",
        tips: [{ target: "hassle", ko: "'번거로움'. ss는 s 소리로 '해슬'." }] }
    ],
    expressions: [
      {
        id: "c16-e1",
        phrase: "Would you like ~ or ~?",
        ko: "'~로 하실래요, ~로 하실래요?'라는 뜻이에요. 점원이 선택지를 줄 때 거의 이 패턴이에요. 대답은 고른 것만 말하면 끝: An exchange, please. 비슷한 표현: Do you want ~ or ~?(더 캐주얼)",
        examples: [
          { en: "Would you like soup or salad with that?", ko: "수프로 하실래요, 샐러드로 하실래요?" },
          { en: "Would you like a window or an aisle seat?", ko: "창가 자리로 하실래요, 통로 자리로 하실래요?" },
          { en: "Would you like to meet on Monday or Tuesday?", ko: "월요일에 만날까요, 화요일에 만날까요?" },
          { en: "Would you like a bag or are you okay?", ko: "봉투 드릴까요, 괜찮으세요?" },
          { en: "Would you like tea or coffee?", ko: "차 마실래, 커피 마실래?" }
        ],
        story: {
          en: "So I went to a fancy restaurant for my birthday, and the waiter asked, “Would you like still or sparkling water?” I panicked and just said, “Yes.” He smiled and brought me both without saying a word. Honestly, it was the classiest mistake I've ever made.",
          ko: "생일이라 고급 식당에 갔는데 웨이터가 “일반 물로 드릴까요, 탄산수로 드릴까요?” 하고 묻는 거야. 당황해서 그냥 “네.”라고 해 버렸어. 웨이터는 웃으면서 아무 말 없이 두 개 다 가져다줬어. 솔직히 내 인생에서 제일 우아한 실수였어."
        }
      },
      {
        id: "c16-e2",
        phrase: "exchange ~ for ~",
        ko: "'~를 ~로 바꾸다/교환하다'라는 뜻이에요. 가게에서 사이즈나 색을 바꿀 때 써요. 환전할 때도 exchange dollars for won처럼 똑같이 써요. 비슷한 표현: swap ~ for ~(캐주얼)",
        examples: [
          { en: "Can I exchange this shirt for a medium?", ko: "이 셔츠 미디엄으로 바꿀 수 있어요?" },
          { en: "I need to exchange some dollars for won.", ko: "달러를 원화로 좀 바꿔야 해요." },
          { en: "Could I exchange the fries for a side salad?", ko: "감자튀김 대신 사이드 샐러드로 바꿀 수 있을까요?" },
          { en: "Let's exchange numbers for the group chat.", ko: "단톡방 만들게 번호 교환하자." },
          { en: "Can I exchange my ticket for an earlier train?", ko: "표를 더 이른 기차로 바꿀 수 있을까요?" }
        ],
        story: {
          en: "For my birthday, my aunt got me a sweater that was, honestly, the ugliest thing I've ever seen. I went to the store to exchange it for something else, and the cashier said, “Oh, I love this one!” I felt so bad that I almost kept it. In the end, I swapped it for a scarf, and she bought the sweater herself.",
          ko: "생일에 이모가 스웨터를 사 주셨는데, 솔직히 내가 본 것 중에 제일 못생긴 옷이었어. 다른 걸로 바꾸려고 가게에 갔더니 계산원이 “어머, 저 이거 너무 좋아해요!” 하는 거야. 너무 미안해서 그냥 가질 뻔했어. 결국 목도리로 바꿨고, 그 스웨터는 계산원이 직접 샀어."
        }
      },
      {
        id: "c16-e3",
        phrase: "Let me grab ~.",
        ko: "'~ 좀 가져올게요/챙길게요'라는 뜻이에요. grab은 원래 '잡다'인데 대화에선 '가볍게 가져오다, 사다, 먹다'로 엄청 자주 써요. grab a coffee(커피 한잔하다), grab lunch(점심 먹다)도 같은 느낌이에요.",
        examples: [
          { en: "Let me grab my jacket, and I'll be right out.", ko: "재킷만 챙겨서 바로 나갈게." },
          { en: "Let me grab a menu for you.", ko: "메뉴 가져다 드릴게요." },
          { en: "Let me grab a pen so I can write this down.", ko: "이거 적게 펜 좀 가져올게요." },
          { en: "Let me grab the car while you get the bags.", ko: "너 짐 챙기는 동안 내가 차 가져올게." },
          { en: "Let me grab a basket real quick.", ko: "장바구니 좀 얼른 가져올게." }
        ],
        story: {
          en: "Yesterday my friend came over and said, “Let me grab a snack from your fridge.” Ten minutes later, she'd eaten half of my birthday cake. I was saving that for my actual birthday this weekend. She's buying me a new one, and it better have extra frosting.",
          ko: "어제 친구가 놀러 와서 “냉장고에서 간식 좀 꺼내 먹을게.” 하더라. 10분 뒤에 보니 내 생일 케이크를 반이나 먹어 버렸어. 이번 주말 진짜 내 생일 때 먹으려고 아껴 둔 거였는데. 친구가 새로 사 주기로 했는데, 크림 듬뿍 올라간 걸로 사 와야 할 거야."
        }
      },
      {
        id: "c16-e4",
        phrase: "Sorry for ~.",
        ko: "'~해서 미안해요'라는 뜻이에요. for 뒤에 명사나 -ing를 붙여요: Sorry for the wait.(기다리게 해서 죄송해요), Sorry for being late. 가볍게 사과할 때 만능 패턴이에요. 비슷한 표현: Sorry about ~.",
        examples: [
          { en: "Sorry for the wait. Your table is ready.", ko: "기다리게 해서 죄송해요. 자리 준비됐어요." },
          { en: "Sorry for being late. Traffic was crazy.", ko: "늦어서 미안해. 차가 엄청 막혔어." },
          { en: "Sorry for the confusion in my last email.", ko: "지난 메일로 헷갈리게 해서 죄송해요." },
          { en: "Sorry for the noise last night.", ko: "어젯밤에 시끄럽게 해서 죄송해요." },
          { en: "Sorry for the mess, we're restocking right now.", ko: "어수선해서 죄송해요, 지금 물건 채우는 중이에요." }
        ],
        story: {
          en: "Last night I accidentally sent a voice message meant for my best friend to my boss. It was me complaining about my week for, like, three minutes straight. This morning I emailed him, “Sorry for the weird message last night!” and he replied with just a thumbs-up. I still don't know if he listened to it.",
          ko: "어젯밤에 제일 친한 친구한테 보내려던 음성 메시지를 실수로 팀장님한테 보내 버렸어. 한 3분 동안 이번 주 힘들었던 걸 쭉 늘어놓는 내용이었지. 오늘 아침에 “어젯밤에 이상한 메시지 보내서 죄송해요!” 하고 메일 보냈더니 엄지 이모티콘 하나만 왔어. 팀장님이 그걸 들었는지 아직도 모르겠어."
        }
      }
    ],
    extraExpressions: []
  }
);
