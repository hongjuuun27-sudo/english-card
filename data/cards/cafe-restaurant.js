/* 카테고리: 카페·식당
   카드를 추가하려면 아래 push( ... ) 안 마지막 카드 뒤에 쉼표를 찍고 붙여넣으세요.
   id는 전체 카드에서 가장 큰 번호 다음 번호로 (CLAUDE.md 참고). */
(window.CARD_DATA = window.CARD_DATA || []).push(
  {
    id: 1,
    category: "카페·식당",
    title: "카페에서 주문하기",
    situation: "동네 카페에서 따뜻한 아메리카노를 주문하려고 해요. 가져갈 거고, 직원이 이름도 물어볼 거예요.",
    dialogue: [
      { who: "staff", en: "Hi there! What are we having today?", ko: "안녕하세요! 오늘은 뭘로 드릴까요?" },
      { who: "me", en: "Can I get a medium hot americano, please?", ko: "따뜻한 아메리카노 미디엄으로 주시겠어요?" },
      { who: "staff", en: "Sure thing. For here or to go?", ko: "그럼요. 드시고 가세요, 가져가세요?" },
      { who: "me", en: "To go, please.", ko: "가져갈게요." },
      { who: "staff", en: "Perfect. And can I get a name for the order?", ko: "좋아요. 주문하신 분 성함이 어떻게 되세요?" },
      { who: "me", en: "It's Minji.", ko: "민지예요." },
      { who: "staff", en: "Sorry, how do you spell that?", ko: "죄송한데, 철자가 어떻게 되세요?" },
      { who: "me", en: "M-I-N-J-I.", ko: "M-I-N-J-I요." }
    ],
    expressions: [
      {
        id: "c1-e1",
        phrase: "Can I get ~?",
        ko: "주문할 때 제일 많이 쓰는 말로, '~ 주세요'를 부드럽게 말하는 느낌이에요. 뒤에 please를 붙이면 더 공손해요. 주문뿐 아니라 뭔가 부탁할 때도 두루 써요. 비슷한 표현: I'll have ~. / Could I get ~?",
        examples: [
          { en: "Can I get the check when you get a chance?", ko: "시간 되실 때 계산서 좀 주시겠어요?" },
          { en: "Can I get a window seat, please?", ko: "창가 자리로 주실 수 있나요?" },
          { en: "Can I get a quick update on the project before lunch?", ko: "점심 전에 프로젝트 진행 상황 좀 간단히 들을 수 있을까요?" },
          { en: "Can I get a bite of your sandwich?", ko: "네 샌드위치 한 입만 먹어봐도 돼?" },
          { en: "Can I get a late checkout tomorrow?", ko: "내일 레이트 체크아웃 가능할까요?" }
        ],
        story: {
          en: "So yesterday I walked into this tiny café, and I got super nervous because the line was so long. When it was finally my turn, I just blurted out, “Can I get an iced latte?” and the barista goes, “Sure, what size?” I totally hadn't thought about sizes, so I just pointed at a random cup and laughed it off.",
          ko: "어제 진짜 작은 카페에 들어갔는데, 줄이 너무 길어서 엄청 긴장했거든. 드디어 내 차례가 돼서 그냥 “아이스 라떼 주세요” 하고 불쑥 말했는데, 바리스타가 “네, 사이즈는요?” 하는 거야. 사이즈는 생각도 못 해서, 그냥 아무 컵이나 가리키고 웃어넘겼지."
        }
      },
      {
        id: "c1-e2",
        phrase: "~ to go",
        ko: "'포장해서 가져갈게요'라는 뜻이에요. 음식·음료 이름 뒤에 붙이면 끝. 점원이 For here or to go?(드시고 가세요, 가져가세요?)라고 물으면 To go 한마디로 답하면 돼요. 먹다 남은 음식을 싸 달라고 할 때도 써요. 비슷한 표현: takeout(포장 음식)",
        examples: [
          { en: "Can I get the rest of this to go?", ko: "남은 거 포장해 갈 수 있을까요?" },
          { en: "I'll just grab a salad to go and eat at my desk.", ko: "그냥 샐러드 포장해서 자리에서 먹을게요." },
          { en: "Let's get tacos to go and eat by the river.", ko: "타코 포장해서 강가에서 먹자." },
          { en: "We grabbed two coffees to go before our train left.", ko: "기차 떠나기 전에 커피 두 잔 포장해 왔어." },
          { en: "Is that for here or to go?", ko: "드시고 가세요, 가져가세요?" }
        ],
        story: {
          en: "Okay, so this morning I was running super late, right? I ran into the café and said, “One latte to go, please!” like I was in some movie. Then I realized I'd left my wallet at home, so I had to pay with my phone while the whole line watched me. So embarrassing.",
          ko: "오늘 아침에 나 완전 늦었거든? 카페에 뛰어 들어가서 무슨 영화 주인공처럼 “라떼 한 잔 포장이요!” 했지. 근데 지갑을 집에 두고 온 걸 알아채서, 줄 선 사람들이 다 보는 앞에서 폰으로 결제해야 했어. 진짜 창피했어."
        }
      },
      {
        id: "c1-e3",
        phrase: "Sure thing.",
        ko: "'물론이죠', '그럼요'라는 밝은 대답이에요. 그냥 Sure보다 친근하고 기분 좋은 느낌. 점원이 손님 부탁에 대답할 때 정말 자주 들려요. 비슷한 표현: You got it. / No problem.",
        examples: [
          { en: "Sure thing, I'll send you the file in a minute.", ko: "그럼요, 금방 파일 보내드릴게요." },
          { en: "Sure thing, I'll save you a seat.", ko: "그럼, 네 자리 맡아둘게." },
          { en: "Sure thing, your table will be ready in five minutes.", ko: "물론이죠, 5분 뒤에 테이블 준비돼요." },
          { en: "Sure thing, I'll bring up some extra towels right away.", ko: "물론이죠, 수건 바로 더 가져다드릴게요." },
          { en: "Sure thing, I can pick you up at the airport.", ko: "그럼, 공항으로 데리러 갈게." }
        ],
        story: {
          en: "Last night my roommate texted me asking if I could feed her cat this weekend. I just replied, “Sure thing!” without even checking my calendar. Then I remembered I'd already booked a trip to Busan for that exact weekend. So now I'm frantically looking for a cat sitter, which is so me.",
          ko: "어젯밤에 룸메이트가 이번 주말에 고양이 밥 좀 줄 수 있냐고 문자를 보냈어. 나는 일정도 안 보고 “당연하지!” 하고 답장했지. 그러고 나서야 바로 그 주말에 부산 여행을 이미 예약해 둔 게 생각난 거야. 그래서 지금 정신없이 고양이 돌봐줄 사람 찾는 중이야. 완전 나답지."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 2,
    category: "카페·식당",
    title: "음료가 잘못 나왔을 때",
    situation: "분명 아이스 라떼를 시켰는데, 직원이 내 이름을 부르며 따뜻한 라떼를 내밀어요. 기분 상하지 않게 말하고 싶어요.",
    dialogue: [
      { who: "staff", en: "Medium hot latte for Jin?", ko: "따뜻한 라떼 미디엄, 진 님?" },
      { who: "me", en: "Sorry, I think I ordered an iced latte.", ko: "죄송한데, 저 아이스 라떼 시킨 것 같아요." },
      { who: "staff", en: "Oh shoot, my bad! Lemme remake that real quick.", ko: "아 이런, 제 실수예요! 금방 다시 만들어 드릴게요." },
      { who: "me", en: "No worries, take your time.", ko: "괜찮아요, 천천히 하세요." },
      { who: "staff", en: "Alright, one iced latte for Jin. Sorry about the mix-up!", ko: "자, 진 님 아이스 라떼 나왔어요. 헷갈려서 죄송해요!" },
      { who: "me", en: "All good. Thanks!", ko: "괜찮아요. 감사합니다!" }
    ],
    expressions: [
      {
        id: "c2-e1",
        phrase: "I think I ordered ~.",
        ko: "'제가 ~ 시킨 것 같은데요'라는 뜻이에요. 앞에 I think를 붙이면 따지는 느낌 없이 부드럽게 실수를 짚을 수 있어요. 맨 앞에 Sorry나 Excuse me를 붙이면 더 자연스러워요. 비슷한 표현: I actually ordered ~. / This isn't what I ordered.(조금 더 직접적)",
        examples: [
          { en: "Excuse me, I think I ordered the salad, not the soup.", ko: "저기요, 수프 말고 샐러드 시킨 것 같은데요." },
          { en: "Hi, this is room 512, and I think I ordered breakfast for two.", ko: "안녕하세요, 512호인데요, 아침 2인분 시킨 것 같아서요." },
          { en: "Oops, I think I ordered the wrong size online.", ko: "헐, 온라인에서 사이즈 잘못 주문한 것 같아." },
          { en: "I think I ordered too much food for just the two of us.", ko: "우리 둘이 먹기엔 음식을 너무 많이 시킨 것 같아." },
          { en: "I think I ordered the wrong toner for the office printer.", ko: "사무실 프린터 토너를 잘못 주문한 것 같아요." }
        ],
        story: {
          en: "So yesterday I went to this burger place downtown, and the guy handed me a fish burger. I was like, “Um, sorry, I think I ordered a cheeseburger?” He checked the receipt, and it turned out I was right, so he let me keep the fish burger too. Best mistake ever, honestly.",
          ko: "어제 시내에 있는 버거집에 갔는데, 직원이 피시 버거를 주는 거야. 그래서 “어, 죄송한데 저 치즈버거 시킨 것 같은데요?” 했지. 직원이 영수증을 확인해 보니 내 말이 맞았고, 그래서 피시 버거도 그냥 가져가라고 하더라. 솔직히 인생 최고의 실수였어."
        }
      },
      {
        id: "c2-e2",
        phrase: "My bad.",
        ko: "'아, 내 실수! 미안' 하는 가벼운 사과예요. 큰 잘못보다는 사소한 실수에 써요. 점원이나 친구한테서 자주 들려서 알아듣기만 해도 좋아요. 비슷한 표현: Sorry about that. / That's on me.(그건 내 탓이야)",
        examples: [
          { en: "My bad, I sent you the wrong file.", ko: "죄송해요, 파일을 잘못 보냈네요." },
          { en: "Oh, my bad, is this your seat?", ko: "어, 죄송해요, 여기 그쪽 자리예요?" },
          { en: "My bad, I totally forgot to text you back.", ko: "미안, 답장하는 걸 완전 까먹었어." },
          { en: "My bad, I gave you the wrong change.", ko: "죄송해요, 거스름돈을 잘못 드렸네요." },
          { en: "My bad, I thought this was the line for checkout.", ko: "아 죄송해요, 여기가 계산 줄인 줄 알았어요." }
        ],
        story: {
          en: "Last week I accidentally took my coworker's umbrella home from the office. The next morning she saw me holding it and was like, “Hey, is that mine?” I just laughed and said, “Oh, my bad!” Now she only buys neon pink umbrellas so nobody can grab them by mistake.",
          ko: "지난주에 실수로 회사에서 동료 우산을 집에 들고 갔어. 다음 날 아침에 동료가 내가 그 우산 들고 있는 걸 보더니 “어, 그거 내 거 아니야?” 하는 거야. 나는 그냥 웃으면서 “아, 미안!” 했지. 이제 그 동료는 아무도 헷갈려서 못 가져가게 형광 핑크 우산만 사."
        }
      },
      {
        id: "c2-e3",
        phrase: "No worries.",
        ko: "'괜찮아요, 신경 쓰지 마세요'라는 뜻이에요. 상대가 사과할 때도, 고마워할 때도 둘 다 쓸 수 있어서 정말 편해요. 캐주얼하고 아주 흔해요. 비슷한 표현: No problem. / All good.",
        examples: [
          { en: "No worries, we can push the meeting to tomorrow.", ko: "괜찮아요, 회의는 내일로 미루면 돼요." },
          { en: "No worries, I'll just catch the next bus.", ko: "괜찮아요, 다음 버스 타면 돼요." },
          { en: "No worries, you can pay me back later.", ko: "괜찮아, 나중에 갚아." },
          { en: "No worries, the food was still really good.", ko: "괜찮아요, 음식은 그래도 정말 맛있었어요." },
          { en: "No worries, I found my room key in my bag.", ko: "괜찮아요, 방 키 가방에서 찾았어요." }
        ],
        story: {
          en: "Yesterday my friend showed up forty minutes late to dinner, and she looked super stressed. I just told her, “No worries, I already ordered appetizers!” We ended up talking for, like, three hours, so the late start didn't even matter.",
          ko: "어제 친구가 저녁 약속에 40분이나 늦게 왔는데, 엄청 스트레스받은 얼굴이더라. 그래서 그냥 “괜찮아, 애피타이저 벌써 시켜놨어!” 했지. 결국 한 세 시간은 수다 떨었으니까, 늦게 시작한 건 아무 상관도 없었어."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 3,
    category: "카페·식당",
    title: "식당에서 계산서 요청하기",
    situation: "친구와 식당에서 밥을 다 먹었어요. 직원에게 계산서를 달라고 하고, 각자 카드로 따로 계산하고 싶어요.",
    dialogue: [
      { who: "server", en: "How's everything tasting? Can I get you guys anything else?", ko: "음식은 괜찮으세요? 더 필요한 거 있으세요?" },
      { who: "me", en: "We're good, thanks. Could we get the check?", ko: "괜찮아요, 감사해요. 계산서 좀 주시겠어요?" },
      { who: "server", en: "Absolutely. Is this gonna be all together or separate?", ko: "물론이죠. 한 번에 계산하실 건가요, 따로 하실 건가요?" },
      { who: "me", en: "Separate, please. We'll each pay by card.", ko: "따로요. 각자 카드로 낼게요." },
      { who: "server", en: "No problem. I'll be right back with those.", ko: "알겠습니다. 금방 가져다 드릴게요." },
      { who: "me", en: "Thanks. Everything was delicious!", ko: "감사해요. 다 정말 맛있었어요!" }
    ],
    expressions: [
      {
        id: "c3-e1",
        phrase: "the check",
        ko: "식당의 '계산서'는 미국에서 보통 the check라고 해요. bill도 통하지만 미국에선 check가 훨씬 흔해요. 멀리 있는 직원에게 허공에 사인하는 손짓만 해도 알아들어요. 비슷한 표현: Check, please. / Can we get the bill?",
        examples: [
          { en: "Excuse me, could we get the check, please?", ko: "저기요, 계산서 좀 주시겠어요?" },
          { en: "Let's grab the check and head to the movie.", ko: "계산하고 영화 보러 가자." },
          { en: "My boss always picks up the check at team dinners.", ko: "우리 팀장님은 회식 때 항상 계산하셔." },
          { en: "The check came, and it was way more than we expected.", ko: "계산서가 나왔는데 생각보다 훨씬 많이 나왔어." },
          { en: "Can you split the check three ways?", ko: "계산서를 세 명으로 나눠 주실 수 있어요?" }
        ],
        story: {
          en: "So last Friday I took my parents to this fancy steak place for their anniversary. When the check came, my dad grabbed it super fast and refused to let me pay. We literally fought over it at the table like we were in a comedy show. In the end, I snuck up to the counter and paid while he was in the bathroom.",
          ko: "지난 금요일에 부모님 결혼기념일이라 고급 스테이크집에 모시고 갔거든. 계산서가 나오자마자 아빠가 엄청 빨리 낚아채더니 나보고 절대 못 내게 하시는 거야. 진짜 무슨 코미디 쇼처럼 테이블에서 계산서 가지고 싸웠어. 결국 아빠 화장실 가신 사이에 몰래 카운터 가서 계산했지."
        }
      },
      {
        id: "c3-e2",
        phrase: "separate",
        ko: "'따로따로'라는 뜻이에요. 식당에서 Together or separate?(같이 계산하세요, 따로 하세요?)라고 물으면 Separate, please.는 각자 계산, Together, please.는 한 번에 계산이에요. 비슷한 표현: separate checks(계산서 따로)",
        examples: [
          { en: "Can we get separate checks, please?", ko: "계산서 따로 주실 수 있어요?" },
          { en: "Let's take separate cars so you can leave early.", ko: "너 일찍 갈 수 있게 차 따로 타고 가자." },
          { en: "I try to keep my work and personal emails separate.", ko: "업무 메일이랑 개인 메일은 따로 관리하려고 해요." },
          { en: "Do you want separate bags for these?", ko: "이거 봉투 따로 담아 드릴까요?" },
          { en: "We booked separate rooms for the trip.", ko: "여행 때 방을 따로 잡았어." }
        ],
        story: {
          en: "Okay, so I went out for dinner with, like, eight coworkers last week. When the server asked if we wanted separate checks, everyone said yes at the same time. The poor guy spent twenty minutes figuring out who ordered what. Next time, I'm just gonna suggest we split it evenly.",
          ko: "지난주에 동료 한 여덟 명이랑 저녁 먹으러 갔거든. 직원이 계산서 따로 드릴까요 하니까 다들 동시에 네! 한 거야. 그 불쌍한 직원은 누가 뭘 시켰는지 알아내느라 20분을 썼어. 다음엔 그냥 똑같이 나눠 내자고 해야겠어."
        }
      },
      {
        id: "c3-e3",
        phrase: "be right back",
        ko: "'금방 올게요'라는 뜻이에요. 직원이 뭔가 가지러 갈 때 거의 매번 하는 말이에요. 문자에선 brb로 줄여 쓰기도 해요. 비슷한 표현: Give me a sec. / Back in a minute.",
        examples: [
          { en: "I'll be right back with your drinks.", ko: "음료 금방 가져다 드릴게요." },
          { en: "Hold on, I'll be right back. I left my phone in the car.", ko: "잠깐만, 금방 올게. 폰을 차에 두고 왔어." },
          { en: "I'm grabbing a coffee, be right back!", ko: "커피 좀 가지러 가요, 금방 올게요!" },
          { en: "The manager will be right back to help you.", ko: "매니저가 곧 돌아와서 도와드릴 거예요." },
          { en: "Could you watch my bag? I'll be right back.", ko: "제 가방 좀 봐 주실래요? 금방 올게요." }
        ],
        story: {
          en: "So yesterday I was working on my laptop at a café, and I asked the guy next to me, “Can you watch my stuff? I'll be right back.” Then I ran into an old friend outside and ended up chatting for, like, thirty minutes. When I finally came back, he was still sitting there guarding my laptop like a bodyguard. I felt so bad that I bought him a coffee.",
          ko: "어제 카페에서 노트북으로 일하다가 옆에 있던 남자한테 “제 물건 좀 봐 주실래요? 금방 올게요.” 했거든. 그러고 밖에서 옛날 친구를 만나서 한 30분을 수다 떨어 버린 거야. 겨우 돌아왔더니 그 사람이 경호원처럼 내 노트북을 아직도 지키고 있더라. 너무 미안해서 커피 한 잔 사 드렸어."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 13,
    category: "카페·식당",
    title: "인기 맛집에서 웨이팅하기",
    situation: "주말 아침, 줄이 긴 브런치집에 왔어요. 기다려야 하는지 묻고 대기 명단에 이름을 올린 뒤, 바깥 자리를 부탁하고 싶어요.",
    dialogue: [
      { who: "staff", en: "Hi, welcome in! How many in your party?", ko: "안녕하세요, 어서 오세요! 몇 분이세요?" },
      { who: "me", en: "Just two. Is there a wait right now?", ko: "두 명이요. 지금 기다려야 하나요?" },
      { who: "staff", en: "Yeah, it's about thirty minutes. Want me to put you down?", ko: "네, 30분 정도요. 대기 명단에 올려 드릴까요?" },
      { who: "me", en: "Sure, could you put us down under Kim?", ko: "네, 김으로 올려 주시겠어요?" },
      { who: "staff", en: "Got it. We'll text you when your table's ready.", ko: "알겠습니다. 자리 준비되면 문자 드릴게요." },
      { who: "me", en: "Great. Do you mind if we sit outside?", ko: "좋아요. 혹시 바깥 자리에 앉아도 될까요?" },
      { who: "staff", en: "Not at all. I'll make a note of it.", ko: "물론이죠. 메모해 둘게요." },
      { who: "me", en: "Perfect, thanks so much!", ko: "좋아요, 정말 감사해요!" }
    ],
    expressions: [
      {
        id: "c13-e1",
        phrase: "put ~ down",
        ko: "'(명단에) ~를 올려 두다, 적어 두다'라는 뜻이에요. 식당 대기 명단, 예약, 참가자 명단에 이름을 올릴 때 써요. Put me down for ~는 '~에 나도 끼워 줘/신청할게'예요. 비슷한 표현: sign ~ up",
        examples: [
          { en: "Can you put me down for two tickets?", ko: "저 티켓 두 장으로 올려 주실래요?" },
          { en: "Put me down for the team dinner on Friday.", ko: "금요일 회식에 저도 참석으로 적어 주세요." },
          { en: "I put us down for a table at seven.", ko: "7시에 우리 테이블 예약 걸어 놨어." },
          { en: "Should I put you down as a maybe for the party?", ko: "파티에 너는 '아마도'로 적어 둘까?" },
          { en: "The hotel put us down for a late checkout.", ko: "호텔에서 우리를 레이트 체크아웃으로 적어 줬어." }
        ],
        story: {
          en: "So my friend asked who wanted to join her pottery class, and I said, “Put me down!” without really thinking. Turns out it's every Saturday at 8 a.m. for two months. I've made three very ugly bowls so far. My mom says she loves them, though.",
          ko: "친구가 도자기 수업 같이 들을 사람 있냐길래 별생각 없이 “나 넣어 줘!” 했거든. 알고 보니 두 달 동안 매주 토요일 아침 8시더라. 지금까지 엄청 못생긴 그릇을 세 개 만들었어. 그래도 엄마는 너무 좋대."
        }
      },
      {
        id: "c13-e2",
        phrase: "Do you mind if ~?",
        ko: "'~해도 될까요?'라는 공손한 부탁이에요. 대답이 헷갈리는데, 괜찮다는 대답은 Not at all.(전혀요 = 괜찮아요)이나 Go ahead.예요. 비슷한 표현: Is it okay if ~? / Can I ~?",
        examples: [
          { en: "Do you mind if I sit here?", ko: "여기 앉아도 될까요?" },
          { en: "Do you mind if I leave a little early today?", ko: "오늘 조금 일찍 가도 될까요?" },
          { en: "Do you mind if I open the window?", ko: "창문 좀 열어도 될까요?" },
          { en: "Do you mind if we split the check?", ko: "계산 나눠서 해도 될까요?" },
          { en: "Do you mind if I try this on?", ko: "이거 입어 봐도 될까요?" }
        ],
        story: {
          en: "On the subway yesterday, an older lady asked me, “Do you mind if I sit here?” and pointed at the seat my bag was on. I was so embarrassed that I grabbed my bag and almost spilled my coffee on her. She just laughed and offered me a piece of candy. Honestly, she was way cooler than me.",
          ko: "어제 지하철에서 어떤 할머니가 내 가방이 놓인 자리를 가리키면서 “여기 앉아도 될까요?” 하셨어. 너무 민망해서 가방을 홱 치우다가 할머니한테 커피를 쏟을 뻔했지. 할머니는 그냥 웃으시면서 사탕 하나를 주셨어. 솔직히 나보다 훨씬 멋있으셨어."
        }
      },
      {
        id: "c13-e3",
        phrase: "make a note of ~",
        ko: "'~를 메모해 두다, 기억해 두다'라는 뜻이에요. 직원이 요청 사항을 적어 둘 때 자주 들려요. 나도 '기억해 둘게'라고 할 때 써요. 비슷한 표현: write ~ down / keep ~ in mind",
        examples: [
          { en: "I'll make a note of your allergy for the kitchen.", ko: "주방에 알레르기 있으시다고 메모해 둘게요." },
          { en: "Let me make a note of that before I forget.", ko: "잊어버리기 전에 메모해 둘게요." },
          { en: "Make a note of the hotel address just in case.", ko: "혹시 모르니까 호텔 주소 적어 둬." },
          { en: "I'll make a note of your birthday this time, I promise!", ko: "이번엔 네 생일 꼭 적어 둘게, 약속해!" },
          { en: "We'll make a note of your request for a quiet room.", ko: "조용한 방을 원하신다고 메모해 두겠습니다." }
        ],
        story: {
          en: "My coworker told me she's allergic to peanuts, so I said I'd make a note of it for the team lunch. Then I totally forgot and ordered pad thai for everyone. Luckily, she noticed right away and just ate the spring rolls. Now there's a sticky note on my monitor that says “NO PEANUTS” in giant letters.",
          ko: "동료가 땅콩 알레르기가 있다고 해서 팀 점심 때 기억해 두겠다고 했거든. 그러고는 완전 까먹고 다 같이 팟타이를 시켜 버렸어. 다행히 동료가 바로 알아채서 스프링롤만 먹었어. 이제 내 모니터엔 커다란 글씨로 “땅콩 금지”라고 쓴 포스트잇이 붙어 있어."
        }
      }
    ],
    extraExpressions: []
  }
);
