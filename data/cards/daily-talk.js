/* 카테고리: 일상 대화
   카드를 추가하려면 아래 push( ... ) 안 마지막 카드 뒤에 쉼표를 찍고 붙여넣으세요.
   id는 전체 카드에서 가장 큰 번호 다음 번호로 (CLAUDE.md 참고). */
(window.CARD_DATA = window.CARD_DATA || []).push(
  {
    id: 10,
    category: "일상 대화",
    title: "날씨로 스몰토크하기",
    situation: "아침에 엘리베이터에서 같은 층 이웃을 만났어요. 어색하지 않게 날씨 얘기로 가볍게 대화해요.",
    dialogue: [
      { who: "neighbor", en: "Morning! Crazy weather we're having, huh?", ko: "좋은 아침이에요! 날씨 진짜 이상하죠?",
        chunks: "Morning! / Crazy weather we're having, / huh?",
        tips: [{ target: "weather", ko: "th는 혀끝을 이 사이에 대고 울려요. '웨더'와 달라요." },
               { target: "huh?", ko: "맞장구를 바라는 말이라 끝을 올려요." }] },
      { who: "me", en: "I know, right? It was freezing yesterday.", ko: "그러니까요! 어제는 엄청 추웠잖아요.",
        chunks: "I know, right? / It was freezing yesterday.",
        tips: [{ target: "I know, right?", ko: "공감하는 말. right에 힘을 주고 끝을 올려요." },
               { target: "freezing", ko: "z 소리로 울려 '프리-징'처럼." }] },
      { who: "neighbor", en: "And now it's like seventy degrees. I don't even know what to wear.", ko: "근데 지금은 70도(섭씨 약 21도)쯤이에요. 뭘 입어야 할지도 모르겠어요.",
        chunks: "And now it's like seventy degrees. / I don't even know / what‿to wear.",
        soloChunks: [2, 3],
        tips: [{ target: "seventy", ko: "t가 약해져 '세브니'처럼 들려요." },
               { target: "what to", ko: "t가 겹쳐 '와러'처럼 빠르게 이어져요." }] },
      { who: "me", en: "Same. Is it supposed to rain later?", ko: "저도요. 이따 비 온대요?",
        chunks: "Same. / Is‿it supposed to rain later?",
        tips: [{ target: "supposed to", ko: "d와 t가 겹쳐 '써포스투'처럼 한 번에." },
               { target: "later", ko: "t가 굴러 '레이러'처럼 들려요." }] },
      { who: "neighbor", en: "I heard it's gonna pour this afternoon. Grab an umbrella!", ko: "오후에 비가 쏟아진대요. 우산 챙기세요!",
        chunks: "I heard‿it's gonna pour / this afternoon. / Grab‿an‿umbrella!",
        soloChunks: [1, 2],
        tips: [{ target: "heard it's", ko: "d가 it's에 붙어 '허r딧츠'처럼 이어져요." },
               { target: "Grab an umbrella", ko: "끊지 말고 '그래버넘브렐라'처럼 한 번에." }] },
      { who: "me", en: "Good call. Have a good one!", ko: "좋은 생각이에요. 좋은 하루 보내세요!",
        chunks: "Good call. / Have‿a good‿one!",
        tips: [{ target: "Good call", ko: "d는 멈추기만 하고 바로 call로 넘어가요." },
               { target: "good one", ko: "d가 one에 붙어 '구던'처럼 이어져요." }] }
    ],
    expressions: [
      {
        id: "c10-e1",
        phrase: "I know, right?",
        ko: "'그러니까요!', '내 말이!'라는 뜻이에요. 상대 말에 크게 공감할 때 써요. 스몰토크에서 대화를 자연스럽게 이어 주는 최고의 맞장구예요. 비슷한 표현: Totally. / Tell me about it.",
        examples: [
          { en: "I know, right? This place has the best pizza in town.", ko: "그러니까! 여기가 동네에서 피자 제일 맛있어." },
          { en: "I know, right? Mondays should be illegal.", ko: "내 말이! 월요일은 법으로 금지해야 돼." },
          { en: "I know, right? I can't believe they broke up.", ko: "그러니까! 걔네 헤어진 거 진짜 믿기지가 않아." },
          { en: "I know, right? The view from up here is unreal.", ko: "그러니까요! 여기서 보는 경치 말도 안 되죠." },
          { en: "I know, right? Everything's on sale today.", ko: "내 말이! 오늘 전부 세일이야." }
        ],
        story: {
          en: "My roommate came home yesterday and said, “Why is rent so expensive?” I just yelled, “I know, right?” from the kitchen. Then we spent two hours looking at apartments in other cities that we'll never actually move to. It was weirdly fun, though.",
          ko: "어제 룸메이트가 집에 오자마자 “월세가 왜 이렇게 비싸?” 하는 거야. 나는 부엌에서 “내 말이!” 하고 소리쳤지. 그러고는 절대 이사 갈 일 없는 다른 도시 집들을 두 시간 동안 구경했어. 근데 이상하게 재밌더라."
        }
      },
      {
        id: "c10-e2",
        phrase: "supposed to ~",
        ko: "'~하기로 되어 있다', '~라던데'라는 뜻이에요. 날씨 예보나 소문처럼 '그렇다더라'를 말할 때 딱이에요. 약속이나 규칙을 말할 때도 써요. 빨리 말하면 '서포즈투'처럼 붙어서 들려요.",
        examples: [
          { en: "It's supposed to snow this weekend.", ko: "이번 주말에 눈 온대." },
          { en: "We're supposed to submit the report by Friday.", ko: "보고서는 금요일까지 내야 해요." },
          { en: "This place is supposed to have the best tacos in LA.", ko: "여기가 LA에서 타코 제일 맛있는 집이래." },
          { en: "You were supposed to call me last night!", ko: "너 어젯밤에 나한테 전화하기로 했잖아!" },
          { en: "The train was supposed to leave ten minutes ago.", ko: "기차가 10분 전에 출발했어야 하는데." }
        ],
        story: {
          en: "So the weather app said it was supposed to be sunny all day, so I wore my brand-new white sneakers. Guess what happened? Ten minutes after I left the house, it started pouring. My sneakers are now a lovely shade of gray.",
          ko: "날씨 앱에서 하루 종일 맑을 거라길래 새로 산 흰 운동화를 신고 나갔거든. 어떻게 됐게? 집 나서고 10분 만에 비가 쏟아지기 시작했어. 내 운동화는 이제 아주 예쁜 회색이 됐어."
        }
      },
      {
        id: "c10-e3",
        phrase: "Good call.",
        ko: "'좋은 생각이야, 잘 판단했어'라는 뜻이에요. 상대의 제안이나 선택이 괜찮을 때 칭찬처럼 해요. 짧고 자연스러워서 원어민이 정말 자주 써요. 비슷한 표현: Good idea. / Smart move.",
        examples: [
          { en: "Bringing a jacket was a good call. It's freezing up here.", ko: "재킷 가져온 거 잘했다. 여기 엄청 춥네." },
          { en: "Good call on the restaurant, the food was amazing.", ko: "식당 잘 골랐다, 음식 진짜 맛있었어." },
          { en: "Good call, let's push the launch to next week.", ko: "좋은 생각이에요, 출시는 다음 주로 미루죠." },
          { en: "Leaving early was a good call. Traffic was terrible.", ko: "일찍 나온 게 신의 한 수였어. 길이 엄청 막혔거든." },
          { en: "Getting the bigger size was a good call.", ko: "큰 사이즈로 산 거 잘한 선택이었어." }
        ],
        story: {
          en: "Last weekend my friend suggested we leave for the beach at 6 a.m., and I almost killed her. But when we got there, the parking lot was empty and the sunrise was beautiful. By ten, there was literally a two-hour wait just to park. Okay, fine, that was a good call.",
          ko: "지난 주말에 친구가 새벽 6시에 바다로 출발하자고 해서 진짜 한 대 칠 뻔했거든. 근데 도착하니까 주차장은 텅 비어 있고 일출은 너무 예쁜 거야. 10시쯤엔 주차만 하는 데 진짜 두 시간을 기다려야 했어. 그래, 인정. 그건 잘한 판단이었어."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 11,
    category: "일상 대화",
    title: "주말에 뭐 했는지 말하기",
    situation: "월요일 아침, 회사 동료가 주말 잘 보냈냐고 물어봐요. 주말에 한 일을 가볍게 이야기해요.",
    dialogue: [
      { who: "coworker", en: "Hey! How was your weekend? Do anything fun?", ko: "안녕! 주말 어땠어? 재밌는 거 했어?",
        chunks: "Hey! How was‿your weekend? / Do anything fun?",
        tips: [{ target: "was your", ko: "s와 y가 만나 '워져'처럼 붙어 빠르게 지나가요." },
               { target: "Do anything fun?", ko: "Did you가 빠진 말이에요. 끝을 올려 물어봐요." }] },
      { who: "me", en: "It was great! I went hiking with some friends.", ko: "좋았어! 친구들이랑 등산 갔어.",
        chunks: "It was great! / I went hiking with some friends.",
        tips: [{ target: "went hiking", ko: "went의 t는 멈추기만 하고 바로 hiking으로." },
               { target: "friends", ko: "끝 ds는 '즈'처럼 짧게 울려요." }] },
      { who: "coworker", en: "Oh, nice! Where'd you go?", ko: "오, 좋다! 어디로 갔어?",
        chunks: "Oh, nice! / Where'd‿you go?",
        tips: [{ target: "Where'd you", ko: "Where did you를 줄인 말. d와 y가 만나 '웨어쥬'처럼." }] },
      { who: "me", en: "Bukhansan, near Seoul.", ko: "서울 근처 북한산.",
        chunks: "Bukhansan, near Seoul.",
        tips: [{ target: "Seoul", ko: "영어로는 '서울'이 아니라 '소울'처럼 한 음절로 말해요." }] },
      { who: "me", en: "The view from the top was amazing.", ko: "정상에서 본 경치가 끝내줬어.",
        chunks: "The view from the top / was amazing.",
        soloChunks: [1, 2],
        tips: [{ target: "view", ko: "v는 윗니로 아랫입술을 살짝 물어요. '뷰'와 달라요." },
               { target: "amazing", ko: "'메'에 힘을 줘요. 어'메'이징." }] },
      { who: "coworker", en: "So jealous! I just stayed in and binge-watched a show.", ko: "완전 부럽다! 난 그냥 집에서 드라마 몰아 봤어.",
        chunks: "So jealous! / I just stayed‿in / and binge-watched‿a show.",
        soloChunks: [2, 3],
        tips: [{ target: "stayed in", ko: "'집에 있었다'. d가 in에 붙어 '스테이딘'처럼." },
               { target: "binge-watched", ko: "'몰아 봤다'. ed는 t 소리로 짧게 '빈지워치트'." }] },
      { who: "me", en: "Honestly, that sounds pretty nice too.", ko: "솔직히 그것도 꽤 좋은데.",
        chunks: "Honestly, / that sounds pretty nice too.",
        tips: [{ target: "Honestly", ko: "h는 소리 나지 않아요. '아니스틀리'처럼." },
               { target: "pretty", ko: "tt가 굴러 '프리리'처럼 들려요." }] }
    ],
    expressions: [
      {
        id: "c11-e1",
        phrase: "How was your ~?",
        ko: "'~ 어땠어?'라는 뜻이에요. 주말, 여행, 휴가, 면접 등 뭐든 뒤에 붙여서 물어봐요. 대답은 It was great! / It was okay. / It was kind of boring.처럼 짧게 시작하면 돼요. 비슷한 표현: How did ~ go?",
        examples: [
          { en: "How was your trip to Japan?", ko: "일본 여행 어땠어?" },
          { en: "How was your first day at the new job?", ko: "새 회사 첫날 어땠어?" },
          { en: "How was your steak? Was it cooked okay?", ko: "스테이크 어떠셨어요? 잘 익었나요?" },
          { en: "How was your date last night? Tell me everything!", ko: "어젯밤 데이트 어땠어? 다 말해 봐!" },
          { en: "How was your flight? You must be exhausted.", ko: "비행은 어땠어? 엄청 피곤하겠다." }
        ],
        story: {
          en: "My mom called me last night and asked, “How was your week?” I said it was fine, and then she talked for an hour about her new neighbor's dog. I didn't say a single word after that. Honestly, I love those calls, though.",
          ko: "어젯밤에 엄마가 전화해서 “이번 주 어땠어?” 하고 물어보셨거든. 나는 괜찮았다고 했는데, 그 뒤로 엄마가 새 이웃집 강아지 얘기를 한 시간 동안 하셨어. 그 뒤로 나는 한마디도 못 했어. 근데 솔직히 그런 통화가 너무 좋아."
        }
      },
      {
        id: "c11-e2",
        phrase: "I went ~ing.",
        ko: "'~하러 갔어'라는 뜻이에요. go hiking(등산), go shopping(쇼핑), go camping(캠핑)처럼 활동을 말할 때 go 뒤에 -ing를 붙여요. 지난 일이니까 went. went to hiking처럼 to를 넣지 않도록 조심!",
        examples: [
          { en: "I went shopping for a new coat on Saturday.", ko: "토요일에 새 코트 사러 쇼핑 갔어." },
          { en: "I went camping with my coworkers last weekend.", ko: "지난 주말에 회사 동료들이랑 캠핑 갔어." },
          { en: "I went swimming at the hotel pool this morning.", ko: "오늘 아침에 호텔 수영장에서 수영했어." },
          { en: "I went bowling with my friends and totally lost.", ko: "친구들이랑 볼링 치러 갔다가 완전 졌어." },
          { en: "I went running along the river before breakfast.", ko: "아침 먹기 전에 강변 따라 달리기했어." }
        ],
        story: {
          en: "So last Saturday I went skiing for the first time in my life. I spent most of the day on my butt while a five-year-old zoomed past me like a pro. By the end of the day, I could finally make it down the bunny hill without falling. I'm calling that a win.",
          ko: "지난 토요일에 태어나서 처음으로 스키 타러 갔거든. 하루 대부분을 엉덩방아 찧으면서 보냈는데, 다섯 살짜리 꼬마가 프로처럼 내 옆을 쌩 지나가더라. 하루가 끝날 즈음엔 드디어 초보 슬로프를 안 넘어지고 내려왔어. 이 정도면 승리라고 칠게."
        }
      },
      {
        id: "c11-e3",
        phrase: "stay in",
        forms: ["stayed in"],
        ko: "'집에 있다, 안 나가다'라는 뜻이에요. 외출하지 않고 집에서 쉴 때 써요. 반대는 go out(놀러 나가다). 동료가 I just stayed in.이라고 하면 '그냥 집에 있었어'예요.",
        examples: [
          { en: "Let's just stay in and order pizza tonight.", ko: "오늘 밤엔 그냥 집에서 피자 시켜 먹자." },
          { en: "It's raining, so I'm gonna stay in today.", ko: "비 와서 오늘은 집에 있을래." },
          { en: "I'd rather stay in than go to the office party.", ko: "회사 파티 가느니 집에 있는 게 나아." },
          { en: "We decided to stay in on our last night in Paris and pack.", ko: "파리에서 마지막 밤엔 숙소에서 짐 싸기로 했어." },
          { en: "Do you want to go out or stay in for dinner?", ko: "저녁 밖에서 먹을래, 집에서 먹을래?" }
        ],
        story: {
          en: "My friends begged me to go clubbing on Friday, but I told them I wanted to stay in. I put on a face mask, ordered fried chicken, and watched three movies in a row. Then I saw their photos on Instagram and felt zero regret. Best Friday ever.",
          ko: "금요일에 친구들이 클럽 가자고 엄청 졸랐는데, 난 그냥 집에 있고 싶다고 했어. 마스크팩 붙이고 치킨 시켜서 영화 세 편을 연달아 봤지. 그러고 나서 걔네 인스타 사진을 봤는데 후회가 하나도 안 되더라. 최고의 금요일이었어."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 12,
    category: "일상 대화",
    title: "처음 만난 사람과 인사하기",
    situation: "친구 에밀리의 생일 파티에서 처음 보는 사람이 말을 걸어왔어요. 자연스럽게 인사하고 나를 소개해요.",
    dialogue: [
      { who: "stranger", en: "Hey, I don't think we've met. I'm Jake.", ko: "안녕하세요, 처음 뵙는 것 같네요. 저는 제이크예요.",
        chunks: "Hey, / I don't think we've met. / I'm Jake.",
        tips: [{ target: "don't think", ko: "don't의 t는 거의 안 들리고 '돈띵크'처럼." },
               { target: "we've met", ko: "v를 살짝 울리고 바로 met으로 넘어가요." }] },
      { who: "me", en: "Hi, I'm Minji. Nice to meet you.", ko: "안녕하세요, 민지예요. 만나서 반가워요.",
        chunks: "Hi, I'm Minji. / Nice to meet‿you.",
        tips: [{ target: "meet you", ko: "t와 y가 만나 '미츄'처럼 소리 나요." }] },
      { who: "stranger", en: "Nice to meet you too! So, how do you know Emily?", ko: "저도 반가워요! 에밀리랑은 어떻게 아는 사이예요?",
        chunks: "Nice to meet‿you too! / So, how do‿you know Emily?",
        tips: [{ target: "you too", ko: "you에 힘을 줘서 '저도'를 강조해요." },
               { target: "how do you", ko: "do you가 '다야'처럼 뭉개져요." }] },
      { who: "me", en: "We used to work together.", ko: "예전에 같이 일했어요.",
        chunks: "We used to work together.",
        tips: [{ target: "used to", ko: "'예전엔 ~했다'. '유즈드 투'가 아니라 '유스터'처럼." }] },
      { who: "stranger", en: "No way! I went to college with her. Small world!", ko: "말도 안 돼! 전 에밀리랑 대학 같이 다녔어요. 세상 좁네요!",
        chunks: "No way! / I went to college with‿her. / Small world!",
        tips: [{ target: "with her", ko: "h가 약해져 '위더r'처럼 이어져요." },
               { target: "world", ko: "r을 말았다가 l로 끝내요. '월드'보다 '워r얼드'." }] },
      { who: "me", en: "Right? Totally random.", ko: "그러니까요! 완전 우연이네요.",
        chunks: "Right? Totally random.",
        tips: [{ target: "Totally", ko: "가운데 t가 굴러 '토럴리'처럼 들려요." }] },
      { who: "me", en: "So, what do you do?", ko: "그럼 무슨 일 하세요?",
        chunks: "So, what do‿you do?",
        tips: [{ target: "what do you do", ko: "'와러유 두'처럼 빠르게 뭉개지고, 마지막 do에 힘." }] }
    ],
    expressions: [
      {
        id: "c12-e1",
        phrase: "How do you know ~?",
        ko: "'~를 어떻게 아세요?'라는 뜻이에요. 파티에서 처음 만난 사람과 대화를 여는 단골 질문이에요. 대답은 We work together. / We met in college.처럼 하면 돼요. '어떻게 그렇게 잘 알아?'라는 뜻으로도 써요.",
        examples: [
          { en: "How do you know the bride?", ko: "신부랑은 어떻게 아세요?" },
          { en: "How do you know so much about wine?", ko: "와인에 대해 어떻게 그렇게 잘 알아?" },
          { en: "How do you know our manager? Did you two work together before?", ko: "저희 매니저님은 어떻게 아세요? 전에 같이 일하셨어요?" },
          { en: "How do you know about this place? It's not even on Google Maps.", ko: "여기는 어떻게 알았어? 구글 지도에도 안 나오는데." },
          { en: "How do you know my sister?", ko: "우리 언니는 어떻게 알아요?" }
        ],
        story: {
          en: "At my cousin's wedding, this guy sat next to me and asked, “So, how do you know the groom?” I said I was the bride's cousin, and he said, “Oh, I'm the groom's old roommate.” We ended up talking all night and judging everyone's dance moves together. Now we're actually good friends.",
          ko: "사촌 결혼식에서 어떤 남자가 내 옆에 앉더니 “신랑이랑은 어떻게 아세요?” 하고 묻더라. 나는 신부 사촌이라고 했고, 그 사람은 “아, 저는 신랑 예전 룸메이트예요.” 했지. 결국 밤새 수다 떨면서 같이 사람들 춤 실력을 평가했어. 지금은 진짜 친한 친구가 됐어."
        }
      },
      {
        id: "c12-e2",
        phrase: "used to ~",
        ko: "'예전엔 ~했었어(지금은 아니야)'라는 뜻이에요. 과거의 습관이나 상태를 말할 때 써요. We used to work together.는 '예전에 같이 일했어요'. 빨리 말하면 '유스터'처럼 들려요.",
        examples: [
          { en: "I used to live in Boston for work.", ko: "일 때문에 보스턴에 살았었어요." },
          { en: "We used to come to this diner every Sunday.", ko: "우리 예전에 일요일마다 이 식당에 왔었잖아." },
          { en: "She used to be my best friend in middle school.", ko: "걔는 중학교 때 내 단짝이었어." },
          { en: "I used to hate flying, but now I love it.", ko: "예전엔 비행기 타는 게 싫었는데, 지금은 너무 좋아." },
          { en: "This coffee shop used to be a bookstore.", ko: "이 카페 예전엔 서점이었어." }
        ],
        story: {
          en: "So I ran into my old piano teacher at the grocery store yesterday. I used to cry every single lesson because I hated practicing. She remembered me right away and asked, “Are you still playing?” I lied and said yes, and now I feel like I have to buy a piano.",
          ko: "어제 마트에서 옛날 피아노 선생님을 딱 마주쳤어. 나 연습하기 싫어서 레슨 때마다 울었었거든. 선생님이 나를 바로 알아보시고 “아직도 피아노 치니?” 하고 물어보셨어. 그래서 거짓말로 그렇다고 했는데, 이제 진짜 피아노를 사야 할 것 같아."
        }
      },
      {
        id: "c12-e3",
        phrase: "Small world!",
        ko: "'세상 참 좁네요!'라는 뜻이에요. 우연히 아는 사람이 겹치거나 뜻밖의 인연을 알게 됐을 때 써요. 비슷한 표현: What a coincidence!(이런 우연이!)",
        examples: [
          { en: "You went to my high school too? Small world!", ko: "너도 우리 고등학교 나왔어? 세상 좁다!" },
          { en: "My new boss is my neighbor's sister. Small world.", ko: "새로 온 팀장님이 우리 옆집 사람 동생이야. 세상 좁아." },
          { en: "We met a couple from Busan in Iceland. Small world!", ko: "아이슬란드에서 부산에서 온 커플을 만났어. 세상 좁다!" },
          { en: "Our waiter turned out to be my old classmate. Talk about a small world.", ko: "우리 테이블 웨이터가 알고 보니 옛날 반 친구였어. 세상 진짜 좁다니까." },
          { en: "The guy who sold me my car knows my dad. It's a small world.", ko: "나한테 차 판 사람이 우리 아빠를 알더라. 세상 참 좁아." }
        ],
        story: {
          en: "So I was on a flight to New York last month, and the woman next to me was from my tiny hometown. Turns out she went to the same elementary school and even had the same teacher. We kept saying, “Small world!” like twenty times. By the end of the flight, she'd invited me to her daughter's wedding.",
          ko: "지난달에 뉴욕 가는 비행기를 탔는데, 옆자리 아주머니가 우리 작은 고향 출신이었어. 알고 보니 같은 초등학교를 나왔고 담임 선생님까지 같았어. 우리 둘이 “세상 좁다!”를 한 스무 번은 했어. 비행 끝날 때쯤엔 아주머니가 딸 결혼식에 나를 초대하셨어."
        }
      }
    ],
    extraExpressions: []
  },
  {
    id: 17,
    category: "일상 대화",
    title: "친구와 주말 약속 잡기",
    situation: "오랜만에 친구한테서 연락이 왔어요. 이번 주말에 만날 날짜와 갈 곳을 정하려고 해요.",
    dialogue: [
      { who: "friend", en: "Hey! It's been forever. Are you free this weekend?", ko: "야! 진짜 오랜만이다. 이번 주말에 시간 돼?",
        chunks: "Hey! It's been forever. / Are you free this weekend?",
        tips: [{ target: "forever", ko: "'에'에 힘을 줘서 '퍼r에버r'처럼, 진짜 오래됐다는 느낌으로." },
               { target: "Are you", ko: "빠르게 말하면 '아유'가 '아야'처럼 약해져요." }] },
      { who: "me", en: "I think so! What did you have in mind?", ko: "될 것 같아! 뭐 생각해 둔 거 있어?",
        chunks: "I think so! / What did‿you have‿in mind?",
        tips: [{ target: "did you", ko: "d와 y가 만나 '디쥬'처럼 소리 나요." },
               { target: "have in mind", ko: "'생각해 둔 게 있다'. v가 in에 붙어 '해빈 마인드'." }] },
      { who: "friend", en: "There's a new Thai place downtown. Wanna check it out?", ko: "시내에 새로 생긴 태국 음식점이 있는데. 가 볼래?",
        chunks: "There's‿a new Thai place downtown. / Wanna check‿it‿out?",
        tips: [{ target: "Thai", ko: "th지만 t 소리예요. '타이'." },
               { target: "check it out", ko: "끊지 말고 '체키라웃'처럼 한 번에." }] },
      { who: "me", en: "I'm down! How about Saturday around six?", ko: "좋아! 토요일 6시쯤 어때?",
        chunks: "I'm down! / How‿about Saturday around six?",
        tips: [{ target: "I'm down", ko: "'좋아, 나도 할래'. down에 힘을 줘요." },
               { target: "Saturday", ko: "t가 굴러 '쌔러r데이'처럼 들려요." }] },
      { who: "friend", en: "Saturday works. Should I invite Jenny too?", ko: "토요일 좋아. 제니도 부를까?",
        chunks: "Saturday works. / Should‿I invite Jenny too?",
        tips: [{ target: "Should I", ko: "d가 I에 붙어 '슈다이'처럼 이어져요." },
               { target: "works", ko: "r을 말고 끝은 '웍스'처럼 짧게." }] },
      { who: "me", en: "Sure, the more the merrier.", ko: "그래, 많을수록 좋지.",
        chunks: "Sure, the more the merrier.",
        tips: [{ target: "the more the merrier", ko: "'많을수록 좋지'. more와 merrier에 힘을 줘요." }] },
      { who: "me", en: "Let me know if anything changes.", ko: "혹시 뭐 바뀌면 알려 줘.",
        chunks: "Let me know if‿anything changes.",
        tips: [{ target: "Let me know", ko: "let me가 '레미'처럼 줄어요." },
               { target: "if anything", ko: "f가 anything에 붙어 '이패니띵'처럼 이어져요." }] },
      { who: "friend", en: "Will do. Can't wait to catch up!", ko: "그럴게. 그동안 못 한 얘기 빨리 하고 싶다!",
        chunks: "Will do. / Can't wait to catch‿up!",
        tips: [{ target: "Can't wait", ko: "can't의 t는 멈추기만 하고 바로 wait로 '캔웨잇'." },
               { target: "catch up", ko: "ch가 up에 붙어 '캐첩'처럼 이어져요." }] }
    ],
    expressions: [
      {
        id: "c17-e1",
        phrase: "Are you free ~?",
        ko: "'~에 시간 돼?'라는 뜻이에요. 약속 잡을 때 제일 먼저 꺼내는 말이에요. 뒤에 this weekend, tonight, on Friday처럼 시간을 붙여요. 대답: Yeah, I'm free! / Sorry, I'm busy. 비슷한 표현: Do you have time ~?",
        examples: [
          { en: "Are you free for a quick call this afternoon?", ko: "오늘 오후에 잠깐 통화할 시간 돼요?" },
          { en: "Are you free tonight? Let's grab dinner.", ko: "오늘 밤에 시간 돼? 저녁 먹자." },
          { en: "Are you free on Sunday? Mom wants a family lunch.", ko: "일요일에 시간 돼? 엄마가 가족끼리 점심 먹재." },
          { en: "Are you free to show me around when I visit Seoul?", ko: "내가 서울 갈 때 구경시켜 줄 시간 돼?" },
          { en: "Are you free next Tuesday for a fitting?", ko: "다음 주 화요일에 치수 재러 오실 수 있어요?" }
        ],
        story: {
          en: "My friend texted me, “Are you free tonight?” and I got excited, thinking it was a dinner invite. I said yes right away and even put on a nice shirt. Turns out she needed help putting together a bookshelf from IKEA. Three hours and zero dinner later, we finally finished it.",
          ko: "친구가 “오늘 밤에 시간 돼?” 하고 문자를 보냈길래 저녁 먹자는 줄 알고 신났거든. 바로 된다고 하고 예쁜 셔츠까지 입었어. 알고 보니 이케아 책장 조립하는 걸 도와 달라는 거였어. 세 시간 동안 저녁도 못 먹고 겨우 다 만들었어."
        }
      },
      {
        id: "c17-e2",
        phrase: "check ~ out",
        ko: "'~를 (가서) 구경하다, 확인해 보다'라는 뜻이에요. 새로 생긴 가게, 영상, 장소를 '한번 가 보자/봐 봐' 할 때 써요. 대상이 it, this처럼 짧으면 check it out처럼 가운데 넣어요. 호텔 '체크아웃'과는 다른 뜻이에요.",
        examples: [
          { en: "You have to check out this café near my office.", ko: "우리 회사 근처에 있는 이 카페 꼭 가 봐." },
          { en: "Let's check out the night market tonight.", ko: "오늘 밤에 야시장 구경 가자." },
          { en: "Check out this video, it's hilarious.", ko: "이 영상 봐 봐, 완전 웃겨." },
          { en: "Can you check out the new design and tell me what you think?", ko: "새 디자인 한번 보고 어떤지 말해 줄래요?" },
          { en: "I want to check out the sale at the mall.", ko: "쇼핑몰 세일 구경하러 가고 싶어." }
        ],
        story: {
          en: "Last weekend my friend dragged me to check out an escape room everyone was talking about. We were supposed to escape in sixty minutes, but we got stuck in the first room for forty. The staff gave us so many hints that it felt like they solved it for us. We still took a victory photo, though.",
          ko: "지난 주말에 친구가 요즘 다들 얘기하는 방탈출 카페에 가 보자고 나를 끌고 갔어. 60분 안에 탈출해야 하는데, 첫 번째 방에서만 40분을 갇혀 있었어. 직원이 힌트를 너무 많이 줘서 거의 직원이 대신 푼 느낌이었어. 그래도 승리 기념사진은 찍었지."
        }
      },
      {
        id: "c17-e3",
        phrase: "How about ~?",
        ko: "'~ 어때?'라는 뜻이에요. 시간, 장소, 아이디어를 제안할 때 쓰는 만능 패턴이에요. 뒤에 명사나 -ing를 붙여요: How about Friday? / How about getting pizza? 비슷한 표현: What about ~? / Why don't we ~?",
        examples: [
          { en: "How about Italian tonight?", ko: "오늘 저녁 이탈리아 음식 어때?" },
          { en: "How about we push the meeting to three?", ko: "회의를 3시로 미루는 거 어때요?" },
          { en: "How about taking the train instead of driving?", ko: "운전 말고 기차 타는 거 어때?" },
          { en: "How about this one in blue?", ko: "이거 파란색은 어떠세요?" },
          { en: "How about a movie night at my place?", ko: "우리 집에서 영화 보는 거 어때?" }
        ],
        story: {
          en: "My sister and I spent forty minutes deciding what to eat last night. Every time I said, “How about sushi?” she said she wasn't in the mood. Every time she suggested something, I said no too. We ended up eating cereal at 10 p.m., and honestly, it was perfect.",
          ko: "어젯밤에 언니랑 뭘 먹을지 정하는 데만 40분을 썼어. 내가 “초밥 어때?” 할 때마다 언니는 별로 안 당긴대. 언니가 뭘 제안하면 나도 싫다고 했고. 결국 밤 10시에 시리얼을 먹었는데, 솔직히 완벽했어."
        }
      },
      {
        id: "c17-e4",
        phrase: "Let me know if ~.",
        ko: "'~하면 알려 줘'라는 뜻이에요. 약속, 일, 부탁을 마무리할 때 자주 붙이는 말이에요. if 대신 when(~하면 그때)도 많이 써요. 비슷한 표현: Keep me posted.(계속 소식 알려 줘)",
        examples: [
          { en: "Let me know if you need anything else.", ko: "더 필요한 거 있으면 말씀하세요." },
          { en: "Let me know if you're running late.", ko: "늦을 것 같으면 알려 줘." },
          { en: "Let me know if you have any questions about the report.", ko: "보고서 관련해서 궁금한 점 있으면 알려 주세요." },
          { en: "Let me know if the food is too spicy.", ko: "음식이 너무 매우면 말씀해 주세요." },
          { en: "Let me know if you want to share a cab to the airport.", ko: "공항까지 택시 같이 탈 거면 알려 줘." }
        ],
        story: {
          en: "I told my new neighbor, “Let me know if you ever need anything!” just to be nice. The next day, she knocked on my door and asked to borrow my vacuum, my ladder, and some sugar. Now we bake cookies together every Sunday. Best neighbor ever, honestly.",
          ko: "새로 이사 온 이웃한테 그냥 예의상 “필요한 거 있으면 언제든 말해요!” 했거든. 다음 날 그 이웃이 문을 두드리더니 청소기, 사다리, 설탕을 빌려 달래. 지금은 일요일마다 같이 쿠키를 구워. 솔직히 최고의 이웃이야."
        }
      },
      {
        id: "c17-e5",
        phrase: "catch up",
        forms: ["catching up"],
        ko: "'(오랜만에) 근황을 나누다, 밀린 얘기를 하다'라는 뜻이에요. 오래 못 본 친구에게 We should catch up!(얼굴 한번 보자/얘기 좀 하자)처럼 정말 자주 써요. '밀린 걸 따라잡다'라는 뜻도 있어요: catch up on work.",
        examples: [
          { en: "Let's grab coffee and catch up soon!", ko: "조만간 커피 마시면서 근황 얘기하자!" },
          { en: "I need to catch up on emails after my vacation.", ko: "휴가 다녀와서 밀린 메일 처리해야 해." },
          { en: "We spent the whole dinner trying to catch up.", ko: "저녁 내내 밀린 얘기 하느라 바빴어." },
          { en: "I want to catch up on sleep this weekend.", ko: "이번 주말엔 밀린 잠 좀 자고 싶어." },
          { en: "Go ahead, I'll catch up with you at the gate.", ko: "먼저 가, 게이트에서 따라갈게." }
        ],
        story: {
          en: "I ran into my high school best friend at the airport last month, totally by accident. We both had two hours before our flights, so we sat down to catch up. We talked so much that I almost missed my boarding call. Now we video chat every Sunday.",
          ko: "지난달에 공항에서 고등학교 때 단짝을 완전 우연히 만났어. 둘 다 비행기 타기까지 두 시간이 남아서 앉아서 그동안 못 한 얘기를 했지. 얘기를 너무 많이 해서 탑승 안내를 놓칠 뻔했어. 지금은 일요일마다 영상 통화해."
        }
      }
    ],
    extraExpressions: []
  }
);
