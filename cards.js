// ===== LANGUAGE DETECTION =====
var LANG = /^zh/i.test(navigator.language || navigator.userLanguage || 'zh') ? 'zh' : 'en';
function t(obj){ return (typeof obj === 'string') ? obj : (obj[LANG] || obj.en || obj.zh || ''); }

// ===== UI TEXTS =====
var UI = {
  site_name: {zh:'塔罗能量站',en:'Tarot Energy'},
  site_sub: {zh:'用正能量开启每一天',en:'Start every day with positive energy'},
  daily_title: {zh:'每日一签',en:'Daily Tarot'},
  daily_desc: {zh:'每天一张专属塔罗牌<br>爱情·事业·幸运 能量全掌握',en:'Your personal daily tarot card<br>Love · Career · Luck energy revealed'},
  question_title: {zh:'心事求签',en:'Ask the Cards'},
  question_desc: {zh:'写下你的问题，抽一张牌<br>塔罗为你指引方向',en:'Write your question, draw a card<br>Let tarot guide your way'},
  back: {zh:'← 返回',en:'← Back'},
  daily_h1: {zh:'🌅 每日一签',en:'🌅 Daily Tarot'},
  daily_sub: {zh:'今天的宇宙想对你说什么？',en:'What does the universe want to tell you today?'},
  tap_hint: {zh:'✨ 轻触翻牌 ✨',en:'✨ Tap to reveal ✨'},
  love_energy: {zh:'💕 爱情能量',en:'💕 Love'},
  work_energy: {zh:'💼 事业能量',en:'💼 Career'},
  luck_energy: {zh:'🍀 幸运能量',en:'🍀 Luck'},
  lucky_color: {zh:'幸运色',en:'Lucky Color'},
  lucky_num: {zh:'幸运数字',en:'Lucky #'},
  lucky_thing: {zh:'幸运物',en:'Lucky Charm'},
  share_btn: {zh:'📸 保存分享',en:'📸 Save & Share'},
  generating: {zh:'⏳ 生成中...',en:'⏳ Generating...'},
  share_fail: {zh:'生成失败：',en:'Failed: '},
  qr_hint: {zh:'长按识别二维码 · 抽你的每日一签',en:'Scan QR · Draw your daily tarot'},
  question_h1: {zh:'🔮 心事求签',en:'🔮 Ask the Cards'},
  question_sub: {zh:'写下你的问题，让塔罗为你指引方向',en:'Write your question, let tarot guide you'},
  question_ph: {zh:'写下你的心事或问题...',en:'Write your question here...'},
  question_hint: {zh:'比如：我该不该换工作？这段感情值得继续吗？考试能顺利吗？',en:'e.g. Should I change jobs? Is this relationship worth it?'},
  question_tap: {zh:'✨ 心中默念问题，然后翻牌 ✨',en:'✨ Focus on your question, then tap ✨'},
  question_empty: {zh:'请先写下你的问题哦 💭',en:'Please write your question first 💭'},
  ask_again: {zh:'🔮 再问一个问题',en:'🔮 Ask another question'},
  qr_hint_q: {zh:'长按识别 · 问问你的心事',en:'Scan QR · Ask your heart'},
  footer_daily: {zh:'✨ 每日一签 · 用正能量开启每一天',en:'✨ Daily Tarot · Start with positive energy'},
  footer_question: {zh:'🔮 心事求签 · 每张牌都是正能量指引',en:'🔮 Ask the Cards · Every card brings positivity'},
  footer_home: {zh:'✨ 塔罗能量站 · 每张牌都是正能量',en:'✨ Tarot Energy · Every card is positive'},
};

// ===== TAROT CARDS =====
var CARDS = [
  {name:{zh:'愚者',en:'The Fool'},emoji:'🌈',keywords:{zh:['新开始','勇气','纯真'],en:['New Beginnings','Courage','Innocence']},
   msg:{zh:'今天适合迈出那一步。不必想太多，宇宙会接住你的勇敢。每个了不起的旅程，都从第一步开始。',en:'Today is perfect for taking that first step. Don\'t overthink — the universe will catch your bravery. Every amazing journey starts with one step.'},
   wish:{zh:'愿你永远保持孩子般的好奇心',en:'May you always keep a childlike curiosity'}},
  {name:{zh:'魔术师',en:'The Magician'},emoji:'✨',keywords:{zh:['创造力','自信','天赋'],en:['Creativity','Confidence','Talent']},
   msg:{zh:'你拥有把想法变成现实的力量。今天不管做什么，都会特别有灵感。相信自己的直觉，它不会让你失望。',en:'You have the power to turn ideas into reality. Whatever you do today, inspiration will flow. Trust your intuition — it won\'t let you down.'},
   wish:{zh:'愿你的每个创意都闪闪发光',en:'May every idea of yours shine bright'}},
  {name:{zh:'女祭司',en:'The High Priestess'},emoji:'🌙',keywords:{zh:['直觉','智慧','内在'],en:['Intuition','Wisdom','Inner Voice']},
   msg:{zh:'今天适合安静下来，听听内心的声音。你的直觉比你想象的更敏锐。那个隐约浮现的答案，就是对的。',en:'Today is for slowing down and listening to your inner voice. Your intuition is sharper than you think. That answer quietly forming — it\'s the right one.'},
   wish:{zh:'愿你信任自己内心深处的智慧',en:'May you trust the deep wisdom within'}},
  {name:{zh:'女皇',en:'The Empress'},emoji:'🌸',keywords:{zh:['丰盛','美好','温柔'],en:['Abundance','Beauty','Gentleness']},
   msg:{zh:'今天的你散发着温暖的光芒。对自己好一点，享受生活中的美好细节。你值得拥有所有的幸福。',en:'You radiate warmth today. Be kind to yourself and enjoy life\'s beautiful details. You deserve all the happiness.'},
   wish:{zh:'愿你被温柔以待，被世界偏爱',en:'May the world treat you with tenderness and love'}},
  {name:{zh:'皇帝',en:'The Emperor'},emoji:'👑',keywords:{zh:['力量','掌控','稳定'],en:['Strength','Control','Stability']},
   msg:{zh:'你比自己以为的更强大。今天适合做决定、立计划。你有能力掌控自己的人生方向。',en:'You are stronger than you think. Today is perfect for decisions and plans. You have the power to steer your own life.'},
   wish:{zh:'愿你拥有改变一切的勇气和力量',en:'May you have the courage and strength to change everything'}},
  {name:{zh:'教皇',en:'The Hierophant'},emoji:'📿',keywords:{zh:['引导','信念','传承'],en:['Guidance','Faith','Wisdom']},
   msg:{zh:'今天可能会遇到一位好老师或得到宝贵建议。保持谦逊和开放的心态，智慧就在身边。',en:'Today you may meet a great mentor or receive valuable advice. Stay humble and open — wisdom is right beside you.'},
   wish:{zh:'愿你在人生路上遇到好的指引',en:'May you find great guidance on life\'s path'}},
  {name:{zh:'恋人',en:'The Lovers'},emoji:'💕',keywords:{zh:['爱情','和谐','选择'],en:['Love','Harmony','Choice']},
   msg:{zh:'今天的人际关系特别和谐。不管是友情还是爱情，都会感受到温暖的连接。记得向重要的人表达感谢。',en:'Relationships are especially harmonious today. Whether friendship or love, you\'ll feel warm connections. Remember to express gratitude to those who matter.'},
   wish:{zh:'愿你身边都是真心对你好的人',en:'May you be surrounded by people who truly care'}},
  {name:{zh:'战车',en:'The Chariot'},emoji:'🏆',keywords:{zh:['胜利','决心','行动'],en:['Victory','Determination','Action']},
   msg:{zh:'今天的你势不可挡！遇到的困难都是纸老虎。坚定方向，全力以赴，胜利就在前方等你。',en:'You\'re unstoppable today! Every obstacle is a paper tiger. Stay focused, give it your all — victory awaits!'},
   wish:{zh:'愿你所向披靡，心想事成',en:'May you be invincible and achieve your dreams'}},
  {name:{zh:'力量',en:'Strength'},emoji:'🦁',keywords:{zh:['内在力量','温柔','勇气'],en:['Inner Power','Gentleness','Courage']},
   msg:{zh:'真正的力量不是强硬，而是温柔地坚持。今天用耐心和善良去面对挑战，你会发现一切迎刃而解。',en:'True strength isn\'t force — it\'s gentle persistence. Face today\'s challenges with patience and kindness, and everything will work out.'},
   wish:{zh:'愿你外柔内刚，无惧风雨',en:'May you be gentle yet strong, fearless in any storm'}},
  {name:{zh:'隐士',en:'The Hermit'},emoji:'🏮',keywords:{zh:['独处','思考','发现'],en:['Solitude','Reflection','Discovery']},
   msg:{zh:'今天适合给自己一段安静的时光。泡杯茶、读本书、散个步——最好的灵感往往在独处时降临。',en:'Today calls for quiet time. Brew some tea, read a book, take a walk — the best inspiration often comes in solitude.'},
   wish:{zh:'愿你在安静中找到内心的光',en:'May you find your inner light in stillness'}},
  {name:{zh:'命运之轮',en:'Wheel of Fortune'},emoji:'🎡',keywords:{zh:['好运','转变','机遇'],en:['Good Luck','Change','Opportunity']},
   msg:{zh:'运气正在悄悄转向你！今天可能会遇到意想不到的好事。保持积极的心态，好运会被你的笑容吸引。',en:'Luck is quietly turning your way! Unexpected good things may happen today. Stay positive — good fortune is drawn to your smile.'},
   wish:{zh:'愿好运从今天开始眷顾你',en:'May good luck start shining on you from today'}},
  {name:{zh:'正义',en:'Justice'},emoji:'⚖️',keywords:{zh:['公平','真相','平衡'],en:['Fairness','Truth','Balance']},
   msg:{zh:'今天适合理清思路，做出公正的决定。你之前的努力不会白费，该来的回报一定会来。',en:'Today is for clear thinking and fair decisions. Your past efforts won\'t go to waste — the rewards you deserve will come.'},
   wish:{zh:'愿你付出的每一份努力都被看见',en:'May every effort you make be seen and valued'}},
  {name:{zh:'倒吊人',en:'The Hanged Man'},emoji:'🧘',keywords:{zh:['换个角度','放下','顿悟'],en:['New Perspective','Let Go','Epiphany']},
   msg:{zh:'换个角度看问题，你会发现全新的风景。今天如果遇到瓶颈，试着放松一下，答案可能就在意想不到的地方。',en:'See things from a new angle and discover a whole new view. If you hit a wall today, relax — the answer may be where you least expect.'},
   wish:{zh:'愿你拥有随时转换视角的智慧',en:'May you always have the wisdom to shift perspective'}},
  {name:{zh:'死神',en:'Death'},emoji:'🦋',keywords:{zh:['蜕变','新生','告别'],en:['Transformation','Rebirth','Letting Go']},
   msg:{zh:'旧的篇章正在翻页，新的故事即将开始。放下不再适合你的，才能腾出双手拥抱更好的。今天是蜕变的好日子。',en:'An old chapter is ending, a new story begins. Let go of what no longer serves you to embrace something better. Today is perfect for transformation.'},
   wish:{zh:'愿你像蝴蝶一样美丽蜕变',en:'May you transform beautifully like a butterfly'}},
  {name:{zh:'节制',en:'Temperance'},emoji:'🌊',keywords:{zh:['平衡','耐心','流动'],en:['Balance','Patience','Flow']},
   msg:{zh:'今天适合慢下来，找到生活的节奏感。不急不躁，像流水一样自然前行。最好的结果值得等待。',en:'Today is for slowing down and finding your rhythm. Move naturally like flowing water. The best results are worth waiting for.'},
   wish:{zh:'愿你在忙碌中也能保持从容',en:'May you stay calm even in the busiest times'}},
  {name:{zh:'恶魔',en:'The Devil'},emoji:'🔥',keywords:{zh:['突破','释放','觉醒'],en:['Breakthrough','Freedom','Awakening']},
   msg:{zh:'今天适合打破束缚你的旧观念！那些"我不行"的想法，都是纸做的枷锁。勇敢挣脱，你会发现自己自由又强大。',en:'Today, break free from old limiting beliefs! Those "I can\'t" thoughts are chains made of paper. Break free and discover how powerful you truly are.'},
   wish:{zh:'愿你挣脱一切束缚，活出真我',en:'May you break free and live as your true self'}},
  {name:{zh:'塔',en:'The Tower'},emoji:'⚡',keywords:{zh:['突破','重建','真相'],en:['Breakthrough','Rebuild','Truth']},
   msg:{zh:'有时候打破旧的才能建设新的。今天可能会有出乎意料的变化，但别担心——这是宇宙在帮你清理道路，为更好的未来腾出空间。',en:'Sometimes you must break the old to build the new. Unexpected changes may come today, but don\'t worry — the universe is clearing the path for a better future.'},
   wish:{zh:'愿每次风雨过后都是更美的彩虹',en:'May every storm be followed by a more beautiful rainbow'}},
  {name:{zh:'星星',en:'The Star'},emoji:'⭐',keywords:{zh:['希望','治愈','光明'],en:['Hope','Healing','Light']},
   msg:{zh:'你就是夜空中最亮的那颗星。今天会感到特别平静和充满希望。不管之前经历了什么，从现在开始一切都会越来越好。',en:'You are the brightest star in the night sky. Today brings peace and hope. No matter what came before, from now on everything gets better.'},
   wish:{zh:'愿你永远被希望的光芒照亮',en:'May you always be illuminated by the light of hope'}},
  {name:{zh:'月亮',en:'The Moon'},emoji:'🌙',keywords:{zh:['想象力','梦想','灵感'],en:['Imagination','Dreams','Inspiration']},
   msg:{zh:'今天你的想象力和创造力特别强。把那些奇妙的想法记录下来，说不定其中就藏着改变人生的宝藏。',en:'Your imagination and creativity are extra strong today. Write down those wonderful ideas — one of them might be a life-changing treasure.'},
   wish:{zh:'愿你的每个梦想都值得追寻',en:'May every dream of yours be worth chasing'}},
  {name:{zh:'太阳',en:'The Sun'},emoji:'☀️',keywords:{zh:['快乐','活力','成功'],en:['Joy','Vitality','Success']},
   msg:{zh:'今天的你像太阳一样耀眼！做什么都会顺利，身边的人也会被你的好心情感染。尽情享受这美好的一天吧！',en:'You shine like the sun today! Everything goes smoothly and your good mood is contagious. Enjoy this beautiful day to the fullest!'},
   wish:{zh:'愿你每天都像今天一样灿烂',en:'May every day shine as bright as today'}},
  {name:{zh:'审判',en:'Judgement'},emoji:'🔔',keywords:{zh:['觉醒','重生','使命'],en:['Awakening','Rebirth','Purpose']},
   msg:{zh:'你正在迎来人生新阶段！过去的经历都是为了今天的你而准备。勇敢回应内心的召唤，你的使命比你想象的更伟大。',en:'A new life chapter awaits! Everything you\'ve been through prepared you for this moment. Answer your inner calling — your purpose is greater than you imagine.'},
   wish:{zh:'愿你听见内心的声音，活出使命',en:'May you hear your inner voice and live your purpose'}},
  {name:{zh:'世界',en:'The World'},emoji:'🌍',keywords:{zh:['圆满','成就','完整'],en:['Fulfillment','Achievement','Wholeness']},
   msg:{zh:'恭喜！你正在走向一个圆满的时刻。之前的坚持和努力终于开花结果。享受这份成就感，你值得为自己骄傲。',en:'Congratulations! You\'re reaching a moment of fulfillment. Your persistence and effort are finally bearing fruit. Enjoy this achievement — you should be proud!'},
   wish:{zh:'愿你拥有完整而丰盛的人生',en:'May your life be whole and abundant'}},
];

// ===== QUESTION READINGS =====
var Q_READINGS = {};
(function(){
  var data = {
    '愚者':{love:{zh:'这段感情充满新鲜感，勇敢去表达你的心意。',en:'This relationship is full of excitement. Be brave and express your feelings.'},career:{zh:'新的机会正在向你招手，别犹豫了。放手一搏比原地踏步更值得。',en:'New opportunities are calling. Don\'t hesitate — taking a leap is better than standing still.'},study:{zh:'换个学习方法或方向，你会发现全新的天地。',en:'Try a new approach or direction in your studies — you\'ll discover a whole new world.'},relationship:{zh:'放下偏见，用全新的眼光去看待对方。',en:'Let go of assumptions and see the other person with fresh eyes.'},choice:{zh:'听从直觉，选那个让你兴奋的。',en:'Follow your intuition. Choose what excites you.'}},
    '魔术师':{love:{zh:'你有魅力去吸引对的人，展现真实的自己就是最好的告白。',en:'You have the charm to attract the right person. Being authentic is the best confession.'},career:{zh:'你的能力完全够格，是时候展示出来了。',en:'Your abilities are more than enough. It\'s time to show them.'},study:{zh:'你的理解力很强，找到适合的方法就能事半功倍。',en:'You learn fast — find the right method and you\'ll achieve twice the results.'},relationship:{zh:'主动表达善意，你有化解矛盾的能力。',en:'Take initiative in showing kindness. You can resolve conflicts.'},choice:{zh:'你有能力掌控局面，相信自己的判断。',en:'You can handle this. Trust your own judgment.'}},
    '女祭司':{love:{zh:'答案在你内心深处。安静下来，感受那个人给你的真实感觉。',en:'The answer lies deep within. Quiet down and feel what that person truly gives you.'},career:{zh:'不急着做决定，先观察再行动。',en:'Don\'t rush the decision. Observe first, then act.'},study:{zh:'深度思考比盲目刷题更有效。',en:'Deep thinking beats mindless practice every time.'},relationship:{zh:'对方可能有没说出口的话，耐心倾听。',en:'They may have unspoken words. Listen patiently.'},choice:{zh:'等内心平静的时候，答案自然会浮现。',en:'When your mind is calm, the answer will naturally appear.'}},
    '女皇':{love:{zh:'爱自己是吸引爱情的最好方式。你值得被温柔以待。',en:'Loving yourself is the best way to attract love. You deserve tenderness.'},career:{zh:'你的温暖和亲和力是职场上的宝藏。',en:'Your warmth and approachability are treasures in the workplace.'},study:{zh:'享受学习的过程，不要只盯着结果。',en:'Enjoy the learning process, not just the results.'},relationship:{zh:'用关怀和包容去经营关系。',en:'Nurture relationships with care and acceptance.'},choice:{zh:'选让你感到被滋养的那个。',en:'Choose what nourishes your soul.'}},
    '皇帝':{love:{zh:'在感情中也需要适当的原则和底线。',en:'Even in love, you need healthy boundaries.'},career:{zh:'你有领导力，勇敢承担更大的责任。',en:'You have leadership qualities. Take on bigger responsibilities.'},study:{zh:'制定计划并坚持执行，纪律是成功的基石。',en:'Make a plan and stick to it. Discipline is the foundation of success.'},relationship:{zh:'做那个可以依靠的人。',en:'Be someone others can rely on.'},choice:{zh:'果断一点，选好了就全力以赴。',en:'Be decisive. Once you choose, go all in.'}},
    '教皇':{love:{zh:'找一个能和你交流精神世界的人。',en:'Find someone who connects with you on a deeper level.'},career:{zh:'向前辈请教，站在巨人的肩膀上看得更远。',en:'Seek advice from mentors. Stand on the shoulders of giants.'},study:{zh:'找一个好老师或学习伙伴。',en:'Find a great teacher or study partner.'},relationship:{zh:'互相尊重彼此的信念和价值观。',en:'Respect each other\'s beliefs and values.'},choice:{zh:'参考过来人的经验，但最终决定权在你。',en:'Consider others\' experience, but the final choice is yours.'}},
    '恋人':{love:{zh:'这段关系有美好的可能性，用心经营就会开花结果。',en:'This relationship has beautiful potential. Nurture it and it will blossom.'},career:{zh:'选择与你价值观一致的工作环境。',en:'Choose a work environment aligned with your values.'},study:{zh:'找到你真正热爱的方向，热情是最好的老师。',en:'Find what you truly love. Passion is the best teacher.'},relationship:{zh:'坦诚相待，真心换真心。',en:'Be honest and sincere. Authenticity attracts authenticity.'},choice:{zh:'跟着心走。心知道正确的答案。',en:'Follow your heart. It knows the right answer.'}},
    '战车':{love:{zh:'主动出击！喜欢就去表达。',en:'Take action! If you like someone, express it.'},career:{zh:'现在是冲刺的好时机，你的努力一定会有回报。',en:'Now is the time to push forward. Your efforts will pay off.'},study:{zh:'全力以赴，目标就在前方。',en:'Give it everything. Your goal is right ahead.'},relationship:{zh:'有话直说，坦诚的交流更有力。',en:'Speak directly. Honest communication is powerful.'},choice:{zh:'勇敢选那个有挑战的，你有赢的实力。',en:'Boldly choose the challenging path. You have what it takes to win.'}},
    '力量':{love:{zh:'用耐心和温柔去化解感情中的难题。',en:'Use patience and gentleness to resolve relationship challenges.'},career:{zh:'面对压力时保持冷静，内在力量更持久。',en:'Stay calm under pressure. Inner strength lasts longer.'},study:{zh:'遇到难题别急躁，慢慢来反而更快。',en:'Don\'t rush through difficulties. Slow and steady wins.'},relationship:{zh:'温柔地坚持你的立场。',en:'Hold your ground gently but firmly.'},choice:{zh:'不急不躁，用温和的方式坚持选择。',en:'Stay calm and gently persist with your choice.'}},
    '隐士':{love:{zh:'先学会独处，才能在关系中不迷失。',en:'Learn to be alone first, so you won\'t lose yourself in a relationship.'},career:{zh:'远离喧嚣你能产出最好的作品。',en:'Away from the noise, you\'ll produce your best work.'},study:{zh:'安静的环境最适合你现在的状态。',en:'A quiet environment is perfect for your current state.'},relationship:{zh:'给彼此一些空间。',en:'Give each other some space.'},choice:{zh:'找个安静的地方，一个人想想。',en:'Find a quiet place and think it through alone.'}},
    '命运之轮':{love:{zh:'缘分的转盘正在转动，保持开放的心态。',en:'The wheel of fate is turning. Stay open-hearted.'},career:{zh:'运势正在上升，努力即将迎来回报。',en:'Your fortune is rising. Rewards for your efforts are coming.'},study:{zh:'好运开始眷顾你，抓住这波势头。',en:'Luck is on your side. Ride this wave of momentum.'},relationship:{zh:'关系正在往好的方向变化。',en:'The relationship is changing for the better.'},choice:{zh:'时机很好，勇敢做出选择。',en:'The timing is right. Make your choice bravely.'}},
    '正义':{love:{zh:'公平地对待感情，也公平地对待自己。',en:'Be fair in love, and be fair to yourself.'},career:{zh:'你的努力会得到公正的回报。',en:'Your efforts will be justly rewarded.'},study:{zh:'踏实学习一定有收获，不要走捷径。',en:'Steady effort always pays off. No shortcuts.'},relationship:{zh:'以诚待人，种什么因得什么果。',en:'Treat others with sincerity. You reap what you sow.'},choice:{zh:'选对的，而不是选容易的。',en:'Choose what\'s right, not what\'s easy.'}},
    '倒吊人':{love:{zh:'换个角度看你们的关系，你会理解对方。',en:'See your relationship from a new angle — you\'ll understand them better.'},career:{zh:'卡住的时候不如暂停一下，休息也是策略。',en:'When stuck, take a pause. Rest is a strategy too.'},study:{zh:'换个思路，试试完全不同的方法。',en:'Change your approach. Try something completely different.'},relationship:{zh:'试着站在对方的角度想想。',en:'Try seeing things from their perspective.'},choice:{zh:'不一定非要现在决定。换个角度再想想。',en:'You don\'t have to decide now. Think from another angle.'}},
    '死神':{love:{zh:'旧的不去新的不来。放手也是一种勇敢。',en:'Out with the old, in with the new. Letting go is also brave.'},career:{zh:'旧的阶段即将结束，新的篇章开始。',en:'An old phase is ending. A new chapter begins.'},study:{zh:'放弃不适合的方法，拥抱新的学习方式。',en:'Abandon methods that don\'t work. Embrace new ways of learning.'},relationship:{zh:'不适合的关系就优雅地放下。',en:'Gracefully release relationships that no longer serve you.'},choice:{zh:'不要害怕改变。结束一件事，才能开始更好的。',en:'Don\'t fear change. Ending one thing starts something better.'}},
    '节制':{love:{zh:'感情需要平衡，付出和接受都要适度。',en:'Love needs balance. Give and receive in equal measure.'},career:{zh:'工作和生活需要平衡。',en:'Balance work and life.'},study:{zh:'劳逸结合，张弛有度。',en:'Mix work with rest. Balance effort and recovery.'},relationship:{zh:'找到相处的节奏。',en:'Find the right rhythm in your relationship.'},choice:{zh:'不走极端，找一个平衡的中间路线。',en:'Avoid extremes. Find a balanced middle path.'}},
    '恶魔':{love:{zh:'检视这段关系中是否有不健康的依赖。',en:'Examine if there\'s unhealthy dependency in this relationship.'},career:{zh:'打破限制你的旧观念！你完全可以。',en:'Break those limiting beliefs! You absolutely can.'},study:{zh:'别被恐惧束缚，那些"太难了"都是纸老虎。',en:'Don\'t let fear hold you back. "Too hard" is just a paper tiger.'},relationship:{zh:'不舒服的关系就勇敢调整。',en:'Bravely adjust relationships that make you uncomfortable.'},choice:{zh:'选让你获得自由的那个。',en:'Choose what sets you free.'}},
    '塔':{love:{zh:'打破旧的才能迎来更好的。相信过程。',en:'Breaking the old brings something better. Trust the process.'},career:{zh:'突如其来的变化是在帮你清路。',en:'Sudden changes are clearing the path for you.'},study:{zh:'推倒重来比修修补补更高效。',en:'Starting fresh can be more efficient than patching things up.'},relationship:{zh:'冲突不一定是坏事，有些话说开了反而更亲近。',en:'Conflict isn\'t always bad. Honest words can bring you closer.'},choice:{zh:'即使选择带来震荡，也比停滞好。',en:'Even a shaky choice beats standing still.'}},
    '星星':{love:{zh:'满怀希望地去爱。你的真心一定会遇到对的人。',en:'Love with hope. Your sincerity will find the right person.'},career:{zh:'光明就在前方，保持信念。',en:'Brightness lies ahead. Keep the faith.'},study:{zh:'你走在正确的路上，别失去信心。',en:'You\'re on the right path. Don\'t lose faith.'},relationship:{zh:'真诚和善良终会被看见。',en:'Sincerity and kindness will always be noticed.'},choice:{zh:'选那个让你充满希望的。',en:'Choose what fills you with hope.'}},
    '月亮':{love:{zh:'感情中有些模糊的地方需要澄清。',en:'Some unclear parts in your relationship need clarifying.'},career:{zh:'直觉很敏锐，但也要验证。',en:'Your intuition is sharp, but verify it too.'},study:{zh:'现在适合发挥创造力，写作和艺术尤其顺利。',en:'Now is great for creativity. Writing and art flow especially well.'},relationship:{zh:'有些事不要只靠感觉判断，找机会当面聊聊。',en:'Don\'t judge only by feelings. Find time to talk face to face.'},choice:{zh:'现在信息不够清晰，等迷雾散去再决定。',en:'Not enough clarity yet. Wait for the fog to lift before deciding.'}},
    '太阳':{love:{zh:'恋爱运超好！散发你的热情和光芒。',en:'Your love luck is amazing! Radiate your warmth and energy.'},career:{zh:'做什么都顺利，是展示自己的最佳时机。',en:'Everything goes smoothly. It\'s the perfect time to showcase yourself.'},study:{zh:'状态极佳，学什么都能快速吸收。',en:'You\'re in peak form. You\'ll absorb everything quickly.'},relationship:{zh:'你的好心情会感染周围的人。',en:'Your good mood is contagious to everyone around you.'},choice:{zh:'选那个让你最开心的！',en:'Choose what makes you happiest!'}},
    '审判':{love:{zh:'是时候面对感情中一直回避的问题了。',en:'It\'s time to face the issues you\'ve been avoiding in love.'},career:{zh:'倾听内心的召唤，你的使命可能更伟大。',en:'Listen to your inner calling. Your purpose may be greater than you think.'},study:{zh:'回顾总结，查漏补缺，为新阶段做准备。',en:'Review and fill the gaps. Prepare for the next phase.'},relationship:{zh:'有些话该说就说。清理完你会感到轻松。',en:'Say what needs to be said. You\'ll feel lighter after clearing the air.'},choice:{zh:'跟随内心的声音。',en:'Follow your inner voice.'}},
    '世界':{love:{zh:'这段感情正在走向圆满，珍惜眼前人。',en:'This relationship is heading toward fulfillment. Cherish who\'s in front of you.'},career:{zh:'一个阶段即将完美收尾，准备迎接更大的舞台。',en:'A phase is wrapping up perfectly. Prepare for a bigger stage.'},study:{zh:'你即将取得重要的成果，为自己骄傲。',en:'You\'re about to achieve something important. Be proud of yourself.'},relationship:{zh:'关系达到美好的平衡点。',en:'The relationship has reached a beautiful balance.'},choice:{zh:'无论怎么选都会是好结果。',en:'Whatever you choose will lead to a good outcome.'}},
  };
  for(var k in data) Q_READINGS[k] = data[k];
})();

var TOPIC_LABELS = {love:{zh:'💕 感情指引',en:'💕 Love Guidance'},career:{zh:'💼 事业指引',en:'💼 Career Guidance'},study:{zh:'📖 学业指引',en:'📖 Study Guidance'},relationship:{zh:'🤝 人际指引',en:'🤝 Relationship Guidance'},choice:{zh:'🔮 决策指引',en:'🔮 Decision Guidance'}};

function detectTopic(q){
  q = q.toLowerCase();
  if(/爱|喜欢|暗恋|表白|分手|对象|男朋友|女朋友|老公|老婆|恋爱|感情|复合|前任|约会|相亲|结婚|恋人|心动|love|crush|boyfriend|girlfriend|relationship|dating|marriage/.test(q)) return 'love';
  if(/工作|升职|加薪|跳槽|换工作|事业|老板|面试|offer|创业|辞职|职业|同事|项目|job|career|boss|interview|promotion|salary|work|business/.test(q)) return 'career';
  if(/学习|考试|成绩|高考|留学|论文|毕业|读书|专业|上学|研究|备考|复习|GPA|IB|study|exam|grade|school|college|university|homework/.test(q)) return 'study';
  if(/朋友|友情|闺蜜|同学|家人|父母|妈妈|爸爸|婆婆|关系|相处|吵架|矛盾|冷战|friend|family|parent|conflict|argument/.test(q)) return 'relationship';
  return 'choice';
}

var AFFIRMATIONS = [
  {zh:'我值得拥有一切美好的事物',en:'I deserve all the beautiful things in life'},
  {zh:'我每天都在变成更好的自己',en:'I\'m becoming a better version of myself every day'},
  {zh:'我散发的光芒会照亮身边的人',en:'My light illuminates those around me'},
  {zh:'我是被爱的，被需要的，被珍惜的',en:'I am loved, needed, and cherished'},
  {zh:'今天的我比昨天更勇敢',en:'I am braver today than yesterday'},
  {zh:'我拥有把困难变成机会的能力',en:'I have the power to turn challenges into opportunities'},
  {zh:'好运正在赶来的路上',en:'Good luck is on its way to me'},
  {zh:'我配得上所有的幸福和成功',en:'I am worthy of all happiness and success'},
  {zh:'宇宙正在悄悄为我安排最好的',en:'The universe is quietly arranging the best for me'},
  {zh:'我允许自己休息，也允许自己发光',en:'I allow myself to rest, and to shine'},
  {zh:'我相信一切都会在最好的时间发生',en:'I believe everything happens at the perfect time'},
  {zh:'每一天都是全新的开始',en:'Every day is a fresh new start'},
  {zh:'我正在一步步靠近梦想',en:'I\'m getting closer to my dreams step by step'},
  {zh:'我值得被温柔以待',en:'I deserve to be treated with tenderness'},
  {zh:'今天是充满可能性的一天',en:'Today is a day full of possibilities'},
  {zh:'我为自己感到骄傲',en:'I am proud of myself'},
];

var COLORS = [
  {name:{zh:'樱花粉',en:'Cherry Blossom'},icon:'🌸'},{name:{zh:'薰衣草紫',en:'Lavender'},icon:'💜'},
  {name:{zh:'天空蓝',en:'Sky Blue'},icon:'🦋'},{name:{zh:'薄荷绿',en:'Mint Green'},icon:'🌿'},
  {name:{zh:'柠檬黄',en:'Lemon Yellow'},icon:'🍋'},{name:{zh:'珊瑚橘',en:'Coral Orange'},icon:'🧡'},
  {name:{zh:'玫瑰金',en:'Rose Gold'},icon:'🌹'},{name:{zh:'奶茶棕',en:'Milk Tea'},icon:'🧋'},
  {name:{zh:'云朵白',en:'Cloud White'},icon:'☁️'},{name:{zh:'蜜桃粉',en:'Peach Pink'},icon:'🍑'},
];

var THINGS = [
  {name:{zh:'一杯咖啡',en:'A cup of coffee'},icon:'☕'},{name:{zh:'一本好书',en:'A good book'},icon:'📖'},
  {name:{zh:'一首老歌',en:'An old song'},icon:'🎵'},{name:{zh:'一朵鲜花',en:'A fresh flower'},icon:'🌷'},
  {name:{zh:'一颗糖果',en:'A piece of candy'},icon:'🍬'},{name:{zh:'一个拥抱',en:'A warm hug'},icon:'🤗'},
  {name:{zh:'一段散步',en:'A nice walk'},icon:'🚶‍♀️'},{name:{zh:'一缕阳光',en:'A ray of sunshine'},icon:'🌤️'},
  {name:{zh:'一杯奶茶',en:'Bubble tea'},icon:'🧋'},{name:{zh:'一块巧克力',en:'Chocolate'},icon:'🍫'},
];

function getUserId(){var k='tarot_uid';var uid=localStorage.getItem(k);if(!uid){uid=Math.floor(Math.random()*90000+10000).toString();localStorage.setItem(k,uid)}return parseInt(uid)}
function hashSeed(a,b){var h=2166136261;var s=a.toString()+'-'+b.toString();for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);h=h>>>0}return h||1}
function getDaySeed(){var d=new Date();var day=d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();var uid=getUserId();return hashSeed(day,uid)}
function seededRandom(seed){var s=seed%2147483647||1;if(s<0)s+=2147483647;return function(){s=(s*16807+0)%2147483647;return(s-1)/2147483646}}

function createStars(){
  var e=document.getElementById('stars');
  for(var i=0;i<60;i++){var s=document.createElement('div');s.className='star';var z=Math.random()*2.5+1;
    s.style.cssText='width:'+z+'px;height:'+z+'px;left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;--d:'+(2+Math.random()*4)+'s;--delay:'+Math.random()*3+'s';e.appendChild(s)}
}

function generateQRCanvas(text,size){
  var qr=qrcode(0,'M');qr.addData(text);qr.make();
  var count=qr.getModuleCount(),cs=Math.floor(size/count);
  var c=document.createElement('canvas');c.width=cs*count;c.height=cs*count;var ctx=c.getContext('2d');
  ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='#000';
  for(var r=0;r<count;r++)for(var col=0;col<count;col++)if(qr.isDark(r,col))ctx.fillRect(col*cs,r*cs,cs,cs);
  return c;
}

// ===== SHARE MODAL =====
function showShareModal(dataUrl){
  var old=document.getElementById('shareModal');if(old)old.remove();
  var m=document.createElement('div');m.id='shareModal';
  m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.75);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;animation:modalIn .3s ease;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)';
  var style=document.createElement('style');
  style.textContent='@keyframes modalIn{from{opacity:0}to{opacity:1}}@keyframes imgIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}';
  m.appendChild(style);
  var img=document.createElement('img');img.src=dataUrl;
  img.style.cssText='max-width:78%;max-height:68vh;border-radius:12px;box-shadow:0 8px 40px rgba(0,0,0,.4);animation:imgIn .4s ease .1s both';
  m.appendChild(img);
  var tip=document.createElement('div');
  tip.textContent=LANG==='zh'?'👆 长按图片保存到相册':'👆 Long press image to save';
  tip.style.cssText='color:rgba(255,255,255,.6);font-size:.82rem;margin-top:1rem;font-family:inherit';
  m.appendChild(tip);
  var close=document.createElement('div');
  close.textContent='✕';
  close.style.cssText='color:rgba(255,255,255,.5);font-size:1.5rem;margin-top:1.2rem;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.2);cursor:pointer';
  close.onclick=function(){m.style.opacity='0';m.style.transition='opacity .25s';setTimeout(function(){m.remove()},250)};
  m.appendChild(close);
  // tap background to close
  m.addEventListener('click',function(e){if(e.target===m){close.onclick()}});
  document.body.appendChild(m);
}

if(typeof CanvasRenderingContext2D!=='undefined'&&!CanvasRenderingContext2D.prototype.roundRect){
  CanvasRenderingContext2D.prototype.roundRect=function(x,y,w,h,r){
    if(typeof r==='number')r=[r,r,r,r];this.moveTo(x+r[0],y);this.lineTo(x+w-r[1],y);this.arcTo(x+w,y,x+w,y+r[1],r[1]);
    this.lineTo(x+w,y+h-r[2]);this.arcTo(x+w,y+h,x+w-r[2],y+h,r[2]);this.lineTo(x+r[3],y+h);
    this.arcTo(x,y+h,x,y+h-r[3],r[3]);this.lineTo(x,y+r[0]);this.arcTo(x,y,x+r[0],y,r[0]);this.closePath();return this;
  };
}
