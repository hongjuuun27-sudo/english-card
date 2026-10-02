/* 카테고리: 공항·숙소
   카드를 추가하려면 아래 push( ... ) 안 마지막 카드 뒤에 쉼표를 찍고 붙여넣으세요.
   id는 전체 카드에서 가장 큰 번호 다음 번호로 (CLAUDE.md 참고). */
(window.CARD_DATA = window.CARD_DATA || []).push(
  {
    id: 4,
    category: "공항·숙소",
    title: "입국심사 통과하기",
    situation: "미국 공항 입국심사대 앞이에요. 심사관이 방문 목적, 머무는 기간, 지낼 곳을 물어봐요.",
    dialogue: [
      { who: "officer", en: "Hi. Passport, please. What brings you to the States?", ko: "안녕하세요. 여권 주세요. 미국엔 무슨 일로 오셨어요?" },
      { who: "me", en: "I'm here on vacation.", ko: "휴가 왔어요." },
      { who: "officer", en: "How long are you planning on staying?", ko: "얼마나 머무실 계획이에요?" },
      { who: "me", en: "About ten days.", ko: "열흘 정도요." },
      { who: "me", en: "I'm flying back on the 20th.", ko: "20일에 돌아가요." },
      { who: "officer", en: "And where will you be staying?", ko: "어디서 지내실 거예요?" },
      { who: "me", en: "At a hotel in downtown Seattle.", ko: "시애틀 시내에 있는 호텔이요." }
    ],
    expressions: [
      {
        id: "c4-e1",
        phrase: "I'm here on ~.",
        ko: "'~ 때문에 왔어요'라는 뜻으로, 방문 목적을 말할 때 딱이에요. on vacation(휴가), on business(출장) 두 개만 기억해도 입국심사는 끝. 비슷한 표현: I'm here for ~. / I'm visiting ~.",
        examples: [
          { en: "I'm here on business for a conference.", ko: "학회 때문에 출장 왔어요." },
          { en: "I'm here on vacation with my family.", ko: "가족이랑 휴가 왔어요." },
          { en: "I'm here on a work visa, so I have to renew it next year.", ko: "취업 비자로 와 있어서 내년에 갱신해야 해요." },
          { en: "I'm here on my lunch break, so I've got to be quick.", ko: "점심시간에 온 거라 빨리 가야 해요." },
          { en: "I'm here on a first date, so wish me luck.", ko: "나 첫 데이트 하러 왔어, 행운을 빌어 줘." }
        ],
        story: {
          en: "So my first time going through immigration in LA, I was so nervous that my mind went totally blank. The officer asked why I was there, and I just said, “Uh… America?” He laughed and asked again, so I finally pulled myself together and said, “I'm here on vacation.” He stamped my passport and said, “Enjoy your trip,” and honestly, that made my whole day.",
          ko: "LA에서 처음 입국심사 받을 때 너무 긴장해서 머리가 하얘졌거든. 심사관이 왜 왔냐고 묻는데 그냥 “어… 미국?” 이랬어. 심사관이 웃으면서 다시 물어봐서 겨우 정신 차리고 “휴가 왔어요.” 했지. 여권에 도장 찍어 주면서 “즐거운 여행 되세요” 하는데, 솔직히 그 한마디에 하루가 행복했어."
        }
      },
      {
        id: "c4-e2",
        phrase: "planning on ~",
        ko: "'~할 계획이에요/생각이에요'라는 뜻이에요. plan to ~와 같은 뜻인데, 대화에선 planning on ~ing가 정말 자주 들려요. 심사관이 How long are you planning on staying?처럼 빠르게 물어보니 귀에 익혀 두세요.",
        examples: [
          { en: "Are you planning on coming to the party tonight?", ko: "오늘 밤 파티에 올 생각이야?" },
          { en: "We're planning on launching the app next month.", ko: "저희는 다음 달에 앱을 출시할 계획이에요." },
          { en: "How long are you planning on staying in Paris?", ko: "파리에는 얼마나 있을 계획이야?" },
          { en: "I'm planning on ordering the steak tonight.", ko: "오늘 저녁엔 스테이크 시킬 생각이야." },
          { en: "I'm planning on moving out next spring.", ko: "내년 봄에 독립할 생각이야." }
        ],
        story: {
          en: "My cousin came to visit me last month, and I asked how long she was planning on staying. She said, “Like, a week?” She ended up staying for almost a month and totally took over my couch. Honestly, it was kind of fun, though, so I'm not even mad.",
          ko: "지난달에 사촌이 우리 집에 놀러 와서, 얼마나 있을 거냐고 물어봤거든. “음, 일주일?” 이러더라. 결국 거의 한 달을 있었고 우리 집 소파를 완전히 점령했어. 근데 솔직히 꽤 재밌어서 화도 안 나."
        }
      },
      {
        id: "c4-e3",
        phrase: "About ~",
        ko: "'~쯤, 대략 ~'이라는 뜻이에요. 숫자나 시간 앞에 붙이면 딱 맞아떨어지지 않아도 돼서 대답하기 훨씬 편해져요. 비슷한 표현: around ~ / ~ or so",
        examples: [
          { en: "It's about a ten-minute walk from here.", ko: "여기서 걸어서 10분쯤 걸려요." },
          { en: "The wait is about twenty minutes right now.", ko: "지금 대기 시간이 20분 정도예요." },
          { en: "I've been at this company for about three years.", ko: "이 회사 다닌 지 3년쯤 됐어요." },
          { en: "We talked on the phone for about two hours last night.", ko: "어젯밤에 전화로 두 시간 정도 얘기했어." },
          { en: "These shoes were about fifty bucks on sale.", ko: "이 신발 세일해서 50달러 정도였어." }
        ],
        story: {
          en: "Yesterday I tried this new ramen place that everyone's obsessed with. The line was about an hour long, and I almost gave up. But I stayed, and the broth was so good that I'd honestly wait two hours next time. Don't tell my diet.",
          ko: "어제 요즘 다들 난리 난 라멘집에 가 봤거든. 줄이 한 시간쯤 돼서 거의 포기할 뻔했어. 근데 버텼더니 국물이 너무 맛있어서, 솔직히 다음엔 두 시간도 기다릴 수 있을 것 같아. 내 다이어트한텐 비밀이야."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 5,
    category: "공항·숙소",
    title: "호텔 체크인하기",
    situation: "호텔 프런트에 도착했어요. 예약한 이름을 말하고 체크인한 다음, 조식이 몇 시인지도 물어보려고 해요.",
    dialogue: [
      { who: "staff", en: "Hi, welcome in! Checking in?", ko: "안녕하세요, 어서 오세요! 체크인하시나요?" },
      { who: "me", en: "Yes, I have a reservation under Kim.", ko: "네, 김으로 예약했어요." },
      { who: "staff", en: "Perfect. Can I see an ID and the card you booked with?", ko: "좋아요. 신분증이랑 예약하신 카드 좀 보여주시겠어요?" },
      { who: "me", en: "Sure, here you go.", ko: "네, 여기요." },
      { who: "staff", en: "You're all set. You're in room 1204, and here are your keys.", ko: "다 됐습니다. 1204호시고, 여기 키 드릴게요." },
      { who: "me", en: "Thanks! What time is breakfast?", ko: "감사해요! 조식은 몇 시예요?" }
    ],
    expressions: [
      {
        id: "c5-e1",
        phrase: "I have a reservation under ~.",
        ko: "'~ 이름으로 예약했어요'라는 뜻이에요. 호텔·식당·렌터카 어디서든 그대로 써요. 뒤에 성(last name)만 붙이면 돼요. 비슷한 표현: I booked under ~. / The reservation's under ~.",
        examples: [
          { en: "Hi, I have a reservation under Park for two at seven.", ko: "안녕하세요, 7시에 두 명 박으로 예약했어요." },
          { en: "I have a reservation under Lee for a rental car.", ko: "이 이름으로 렌터카 예약했는데요." },
          { en: "I have a reservation under Choi for the 3 p.m. tour.", ko: "오후 3시 투어 최 이름으로 예약했어요." },
          { en: "I have a reservation under my company's name, Hanbit Tech.", ko: "회사 이름인 한빛테크로 예약했어요." },
          { en: "I have a reservation under Jung for a haircut at two.", ko: "2시에 정 이름으로 커트 예약했어요." }
        ],
        story: {
          en: "So last weekend I showed up at this super popular brunch spot and confidently said, “Hi, I have a reservation under Kim.” The host checked the list and said there were, like, five Kims, but none of them were me. Turns out I'd booked it for the next weekend, not that day. We ended up eating hot dogs from a stand across the street, and it was weirdly perfect.",
          ko: "지난 주말에 엄청 유명한 브런치집에 가서 자신 있게 “김으로 예약했어요.” 했거든. 직원이 명단을 보더니 김 씨가 한 다섯 명인데 다 내가 아니래. 알고 보니 그날이 아니라 다음 주말로 예약했더라고. 결국 길 건너 노점에서 핫도그 먹었는데, 이상하게 그게 완벽했어."
        }
      },
      {
        id: "c5-e2",
        phrase: "Here you go.",
        ko: "'여기요/여기 있어요'라는 뜻이에요. 물건을 건넬 때 하는 말로 점원도, 손님도 둘 다 써요. 비슷한 표현: Here it is. / There you go.",
        examples: [
          { en: "Here you go, one large pepperoni.", ko: "여기 있습니다, 페퍼로니 라지 하나요." },
          { en: "Here you go, that's the report you asked for.", ko: "여기요, 말씀하신 보고서예요." },
          { en: "Here you go, I saved you the last slice.", ko: "자, 마지막 조각 남겨 놨어." },
          { en: "Here you go, my passport and boarding pass.", ko: "여기요, 여권이랑 탑승권이에요." },
          { en: "Here you go, keep the change.", ko: "여기요, 잔돈은 괜찮아요." }
        ],
        story: {
          en: "Yesterday the little kid in front of me at the grocery store was, like, fifty cents short for his candy. I handed him two quarters and said, “Here you go, buddy.” He looked at me like I was a superhero and ran off with the biggest smile. Best fifty cents I've ever spent.",
          ko: "어제 마트에서 내 앞에 있던 꼬마가 사탕값이 50센트쯤 모자랐거든. 내가 25센트 동전 두 개를 주면서 “여기 있어, 꼬마야.” 했지. 걔가 나를 슈퍼히어로 보듯이 보더니 활짝 웃으면서 뛰어가더라. 내 인생 최고의 50센트였어."
        }
      },
      {
        id: "c5-e3",
        phrase: "You're all set.",
        ko: "'다 됐어요, 이제 끝났어요'라는 뜻이에요. 체크인·결제·접수가 끝났을 때 직원이 꼭 하는 말이에요. 이 말이 들리면 이제 가도 된다는 뜻! 비슷한 표현: You're good to go.",
        examples: [
          { en: "You're all set, your new phone is ready to go.", ko: "다 됐어요, 새 폰 바로 쓰시면 돼요." },
          { en: "You're all set for tomorrow's presentation.", ko: "내일 발표 준비 다 됐어요." },
          { en: "You're all set, your flight leaves from gate 12.", ko: "다 됐습니다, 비행기는 12번 게이트에서 출발해요." },
          { en: "You're all set, enjoy your meal!", ko: "다 됐어요, 맛있게 드세요!" },
          { en: "Okay, you're all set, see you next week!", ko: "자, 다 됐어요, 다음 주에 봬요!" }
        ],
        story: {
          en: "So I finally went to renew my driver's license, and I was ready for a whole day of pain. But the lady at the counter typed for, like, two minutes and said, “You're all set!” I literally asked her, “Wait, that's it?” I was so happy that I treated myself to a milkshake on the way home.",
          ko: "드디어 운전면허 갱신하러 갔는데, 하루 종일 고생할 각오를 하고 갔거든. 근데 창구 직원이 한 2분 타자 치더니 “다 됐어요!” 하는 거야. 진짜로 “잠깐, 이게 끝이에요?” 하고 물어봤어. 너무 기분 좋아서 집에 오는 길에 나한테 밀크셰이크 하나 사 줬지."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 6,
    category: "공항·숙소",
    title: "방에 문제가 있을 때",
    situation: "호텔 방에 들어왔더니 에어컨이 안 되고, 와이파이도 안 잡히고, 수건도 부족해요. 프런트에 전화했어요.",
    dialogue: [
      { who: "staff", en: "Front desk, this is Mike. How can I help?", ko: "프런트 데스크 마이크입니다. 무엇을 도와드릴까요?" },
      { who: "me", en: "Hi, the AC in my room isn't working.", ko: "안녕하세요, 제 방 에어컨이 안 돼요." },
      { who: "staff", en: "Oh, sorry about that. I'll send someone up right away.", ko: "아, 죄송합니다. 바로 사람 올려 보낼게요." },
      { who: "me", en: "Also, I can't connect to the Wi-Fi.", ko: "그리고 와이파이 연결이 안 돼요." },
      { who: "staff", en: "The password's on the back of your key card. Anything else?", ko: "비밀번호는 키 카드 뒷면에 있어요. 다른 건 없으세요?" },
      { who: "me", en: "Could I get some extra towels, too?", ko: "수건도 좀 더 받을 수 있을까요?" }
    ],
    expressions: [
      {
        id: "c6-e1",
        phrase: "~ isn't working.",
        ko: "'~가 안 돼요/고장 났어요'라는 뜻이에요. 기계나 물건이 제대로 안 될 때 제일 쉽게 쓰는 말이에요. broken(망가진)보다 부드러워요. 비슷한 표현: ~ is broken. / ~ doesn't work.",
        examples: [
          { en: "The microwave in the break room isn't working again.", ko: "탕비실 전자레인지 또 안 돼요." },
          { en: "Sorry, my card isn't working. Can I try another one?", ko: "죄송해요, 제 카드가 안 되네요. 다른 걸로 해 볼게요." },
          { en: "The ticket machine isn't working, so we have to buy them inside.", ko: "발권기가 안 돼서 안에서 사야 해." },
          { en: "My charger isn't working. Can I borrow yours?", ko: "내 충전기가 안 되는데, 네 거 좀 빌려도 돼?" },
          { en: "Excuse me, the sink in the restroom isn't working.", ko: "저기요, 화장실 세면대 물이 안 나와요." }
        ],
        story: {
          en: "So I checked into this cute Airbnb last night, and it was absolutely freezing. I texted the host, “Hi, the heater isn't working,” and she said she'd fix it in the morning. I ended up sleeping in my hoodie, jeans, and two pairs of socks. Honestly, I looked like a burrito.",
          ko: "어젯밤에 아기자기한 에어비앤비에 들어갔는데, 진짜 꽁꽁 얼 정도로 추운 거야. 호스트한테 “안녕하세요, 히터가 안 돼요.” 하고 문자 보냈더니 아침에 고쳐 주겠대. 결국 후드티에 청바지에 양말 두 켤레 신고 잤어. 솔직히 내 모습이 부리토 같았어."
        }
      },
      {
        id: "c6-e2",
        phrase: "I can't connect to ~.",
        ko: "'~에 연결이 안 돼요'라는 뜻이에요. 와이파이, 블루투스, 프린터처럼 '연결'하는 건 다 이걸로 해결돼요. 비슷한 표현: I can't get on the Wi-Fi. / The Wi-Fi isn't working.",
        examples: [
          { en: "I can't connect to the printer from my laptop.", ko: "제 노트북에서 프린터 연결이 안 돼요." },
          { en: "I can't connect to the airport Wi-Fi at all.", ko: "공항 와이파이가 아예 안 잡혀." },
          { en: "I can't connect to your Bluetooth speaker.", ko: "네 블루투스 스피커에 연결이 안 돼." },
          { en: "Excuse me, I can't connect to the café's Wi-Fi.", ko: "저기요, 카페 와이파이 연결이 안 돼요." },
          { en: "I can't connect to the video call, so I'll just call you.", ko: "영상 통화 연결이 안 돼서 그냥 전화할게." }
        ],
        story: {
          en: "Last week I had a job interview on Zoom, and right before it started, nothing worked. I was panicking and emailed the recruiter, “I'm so sorry, I can't connect to the meeting!” Then I realized my laptop was still in airplane mode from my trip. I joined two minutes late and still got the job, so it all worked out.",
          ko: "지난주에 줌으로 면접이 있었는데, 시작 직전에 아무것도 안 되는 거야. 완전 패닉 와서 채용 담당자한테 “정말 죄송해요, 회의 연결이 안 돼요!” 하고 메일 보냈지. 그러고 보니 여행 갔다 와서 노트북이 아직 비행기 모드였더라고. 2분 늦게 들어갔는데 그래도 합격했으니, 결과적으로 다 잘 풀렸어."
        }
      },
      {
        id: "c6-e3",
        phrase: "right away",
        ko: "'바로, 즉시'라는 뜻이에요. 직원이 '바로 해 드릴게요' 할 때 거의 항상 들려요. now보다 부드럽고 친절한 느낌이에요. 비슷한 표현: right now / in a sec(금방)",
        examples: [
          { en: "I'll get that fixed right away.", ko: "그거 바로 고쳐 드릴게요." },
          { en: "Call me right away if your flight gets delayed.", ko: "비행기 지연되면 바로 전화해." },
          { en: "The waiter brought us new forks right away.", ko: "웨이터가 바로 새 포크를 가져다줬어." },
          { en: "I knew right away that we'd be good friends.", ko: "우리가 친해질 거라는 걸 바로 알았어." },
          { en: "They gave me a refund right away, no questions asked.", ko: "아무것도 안 묻고 바로 환불해 주더라." }
        ],
        story: {
          en: "So last night my upstairs neighbor's bathtub overflowed, and water started dripping from my ceiling. I called the building manager, and he said, “I'll be there right away.” He showed up five minutes later in pajamas and slippers, holding a giant bucket. I've never respected a man more.",
          ko: "어젯밤에 윗집 욕조가 넘쳐서 우리 집 천장에서 물이 뚝뚝 떨어지기 시작했어. 관리인한테 전화했더니 “바로 갈게요.” 하더라. 5분 뒤에 잠옷에 슬리퍼 차림으로 커다란 양동이를 들고 나타났어. 그렇게 존경스러운 사람은 처음 봤어."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 14,
    category: "공항·숙소",
    title: "공항 카운터에서 짐 부치기",
    situation: "공항 항공사 카운터에서 체크인해요. 짐을 부치고 창가 자리를 부탁한 다음, 보조배터리를 기내에 들고 타도 되는지 물어보려고 해요.",
    dialogue: [
      { who: "staff", en: "Next, please! Where are you flying today?", ko: "다음 분이요! 오늘 어디로 가세요?" },
      { who: "me", en: "To Chicago. Here's my passport.", ko: "시카고요. 여기 여권이요." },
      { who: "staff", en: "Thanks. Are you checking any bags today?", ko: "감사합니다. 오늘 부치실 짐 있으세요?" },
      { who: "me", en: "Just one. I'd like to check this suitcase.", ko: "하나요. 이 캐리어 부치고 싶어요." },
      { who: "staff", en: "Sure. Go ahead and put it on the scale.", ko: "네. 저울 위에 올려 주세요." },
      { who: "me", en: "Is it possible to get a window seat?", ko: "창가 자리로 받을 수 있을까요?" },
      { who: "staff", en: "Let me see… Yep, I've got one in row 22.", ko: "잠시만요… 네, 22열에 하나 있네요." },
      { who: "me", en: "Awesome. Can I bring this power bank on board?", ko: "좋아요. 이 보조배터리 기내에 가지고 타도 돼요?" },
      { who: "staff", en: "Yes, but it has to stay in your carry-on.", ko: "네, 대신 기내용 가방에 넣어 두셔야 해요." }
    ],
    expressions: [
      {
        id: "c14-e1",
        phrase: "I'd like to ~.",
        ko: "'~하고 싶어요'를 공손하게 말하는 패턴이에요. I want to보다 훨씬 부드러워서 가게·호텔·공항에서 요청할 때 딱이에요. 비슷한 표현: Can I ~? / I was hoping to ~.",
        examples: [
          { en: "I'd like to check in, please.", ko: "체크인하고 싶어요." },
          { en: "I'd like to make a reservation for Friday night.", ko: "금요일 저녁으로 예약하고 싶어요." },
          { en: "I'd like to return this jacket.", ko: "이 재킷 반품하고 싶어요." },
          { en: "I'd like to talk to you about the schedule.", ko: "일정에 대해 얘기 좀 하고 싶어요." },
          { en: "I'd like to propose a toast to the happy couple!", ko: "행복한 두 사람을 위해 건배를 제안하고 싶어요!" }
        ],
        story: {
          en: "Last week I called my bank to close an old account. The guy on the phone asked what he could do for me, and I said, “I'd like to close my account,” super politely. He spent twenty minutes trying to convince me to stay with free coffee mugs. I hung up with no account and, somehow, two mugs on the way.",
          ko: "지난주에 오래된 계좌를 해지하려고 은행에 전화했거든. 상담원이 뭘 도와드릴까요 하길래 아주 공손하게 “계좌를 해지하고 싶어요.” 했지. 그 사람이 공짜 머그잔을 내세우면서 20분 동안 붙잡더라. 결국 계좌는 없어졌는데, 어쩌다 보니 머그잔 두 개가 배송 오는 중이야."
        }
      },
      {
        id: "c14-e2",
        phrase: "Go ahead and ~.",
        ko: "'(그럼) ~하세요'라는 뜻이에요. 직원이 다음 할 일을 안내할 때 정말 자주 쓰는 말이에요. 명령처럼 딱딱하지 않고 '편하게 ~하시면 돼요' 느낌이에요. 그냥 Go ahead.는 '그러세요/먼저 하세요'예요.",
        examples: [
          { en: "Go ahead and have a seat. The doctor will be right with you.", ko: "앉아 계세요. 의사 선생님이 곧 오실 거예요." },
          { en: "Go ahead and start without me. I'm running late.", ko: "나 없이 먼저 시작해. 나 좀 늦어." },
          { en: "Go ahead and order. I'm still deciding.", ko: "먼저 시켜. 난 아직 고르는 중이야." },
          { en: "Go ahead and send me the draft when it's ready.", ko: "초안 준비되면 보내 주세요." },
          { en: "Go ahead and tap your card on the reader.", ko: "카드 리더기에 카드 대 주세요." }
        ],
        story: {
          en: "So I was getting my new ID photo taken, and the lady said, “Go ahead and look at the camera.” I wasn't ready at all, and the flash went off mid-blink. Now my ID photo looks like I just woke up from a hundred-year nap. I have to live with it for ten years.",
          ko: "새 신분증 사진을 찍는데 직원이 “카메라 보세요.” 하더라. 나는 전혀 준비가 안 됐는데, 눈 깜빡이는 순간에 플래시가 터졌어. 이제 내 신분증 사진은 백 년 잠에서 막 깬 사람 같아. 이걸 10년 동안 들고 다녀야 해."
        }
      },
      {
        id: "c14-e3",
        phrase: "Is it possible to ~?",
        ko: "'~할 수 있을까요?'라는 뜻이에요. 안 될 수도 있는 부탁을 조심스럽게 꺼낼 때 좋아요. 자리 변경, 일정 조정, 예외 요청에 딱이에요. 비슷한 표현: Would it be possible to ~?(더 공손)",
        examples: [
          { en: "Is it possible to change my flight to Sunday?", ko: "비행기를 일요일로 바꿀 수 있을까요?" },
          { en: "Is it possible to get the sauce on the side?", ko: "소스를 따로 주실 수 있을까요?" },
          { en: "Is it possible to work from home on Friday?", ko: "금요일에 재택근무해도 될까요?" },
          { en: "Is it possible to get a room with a view?", ko: "전망 좋은 방으로 받을 수 있을까요?" },
          { en: "Is it possible to hold this for me until tomorrow?", ko: "이거 내일까지 맡아 주실 수 있을까요?" }
        ],
        story: {
          en: "At my cousin's wedding, the photographer asked if we had any special requests. My grandma raised her hand and said, “Is it possible to make me look twenty years younger?” Everyone lost it, including the photographer. The photos came out great, though, and she looks amazing in all of them.",
          ko: "사촌 결혼식에서 사진작가가 따로 원하는 거 있냐고 물어봤거든. 우리 할머니가 손을 번쩍 들고 “저 스무 살 어려 보이게 해 줄 수 있어요?” 하시는 거야. 사진작가까지 다 같이 빵 터졌어. 그래도 사진은 진짜 잘 나왔고, 할머니는 모든 사진에서 너무 멋있으셔."
        }
      },
      {
        id: "c14-e4",
        phrase: "Can I bring ~?",
        ko: "'~ 가져가도/데려가도 돼요?'라는 뜻이에요. 기내 반입, 파티에 친구 데려가기, 음식 반입 등을 물을 때 써요. on board(기내에), to the party(파티에)처럼 뒤에 장소를 붙여요. 비슷한 표현: Am I allowed to bring ~?",
        examples: [
          { en: "Can I bring a friend to the party?", ko: "파티에 친구 데려가도 돼?" },
          { en: "Can I bring my own wine to this restaurant?", ko: "이 식당에 와인 가져가도 돼요?" },
          { en: "Can I bring my laptop to the interview?", ko: "면접에 노트북 가져가도 될까요?" },
          { en: "Can I bring this water bottle through security?", ko: "이 물병 가지고 보안 검색대 통과해도 돼요?" },
          { en: "Can I bring my dog inside the store?", ko: "가게 안에 강아지 데리고 들어가도 돼요?" }
        ],
        story: {
          en: "My friend invited me to her birthday dinner, so I texted her, “Can I bring my roommate?” She said sure, but then my roommate showed up with her boyfriend, and he brought his brother. By the end of the night, there were more of my people at the table than hers. She still hasn't let me forget it.",
          ko: "친구가 생일 저녁에 초대해서 “룸메이트 데려가도 돼?” 하고 문자했거든. 괜찮다길래 갔는데, 룸메이트가 남자친구를 데려오고, 그 남자친구는 또 자기 형을 데려왔어. 밤이 끝날 즈음엔 테이블에 친구 쪽 사람보다 내 쪽 사람이 더 많았어. 친구는 아직도 그 얘기를 해."
        }
      }
    ],
    extraExpressions: []
  }
);
