// ===== SHARED DATA & UTILS =====
var CARDS = [
  {name:'愚者',en:'The Fool',emoji:'🌈',keywords:['新开始','勇气','纯真'],msg:'今天适合迈出那一步。不必想太多，宇宙会接住你的勇敢。每个了不起的旅程，都从第一步开始。',wish:'愿你永远保持孩子般的好奇心'},
  {name:'魔术师',en:'The Magician',emoji:'✨',keywords:['创造力','自信','天赋'],msg:'你拥有把想法变成现实的力量。今天不管做什么，都会特别有灵感。相信自己的直觉，它不会让你失望。',wish:'愿你的每个创意都闪闪发光'},
  {name:'女祭司',en:'The High Priestess',emoji:'🌙',keywords:['直觉','智慧','内在'],msg:'今天适合安静下来，听听内心的声音。你的直觉比你想象的更敏锐。那个隐约浮现的答案，就是对的。',wish:'愿你信任自己内心深处的智慧'},
  {name:'女皇',en:'The Empress',emoji:'🌸',keywords:['丰盛','美好','温柔'],msg:'今天的你散发着温暖的光芒。对自己好一点，享受生活中的美好细节。你值得拥有所有的幸福。',wish:'愿你被温柔以待，被世界偏爱'},
  {name:'皇帝',en:'The Emperor',emoji:'👑',keywords:['力量','掌控','稳定'],msg:'你比自己以为的更强大。今天适合做决定、立计划。你有能力掌控自己的人生方向。',wish:'愿你拥有改变一切的勇气和力量'},
  {name:'教皇',en:'The Hierophant',emoji:'📿',keywords:['引导','信念','传承'],msg:'今天可能会遇到一位好老师或得到宝贵建议。保持谦逊和开放的心态，智慧就在身边。',wish:'愿你在人生路上遇到好的指引'},
  {name:'恋人',en:'The Lovers',emoji:'💕',keywords:['爱情','和谐','选择'],msg:'今天的人际关系特别和谐。不管是友情还是爱情，都会感受到温暖的连接。记得向重要的人表达感谢。',wish:'愿你身边都是真心对你好的人'},
  {name:'战车',en:'The Chariot',emoji:'🏆',keywords:['胜利','决心','行动'],msg:'今天的你势不可挡！遇到的困难都是纸老虎。坚定方向，全力以赴，胜利就在前方等你。',wish:'愿你所向披靡，心想事成'},
  {name:'力量',en:'Strength',emoji:'🦁',keywords:['内在力量','温柔','勇气'],msg:'真正的力量不是强硬，而是温柔地坚持。今天用耐心和善良去面对挑战，你会发现一切迎刃而解。',wish:'愿你外柔内刚，无惧风雨'},
  {name:'隐士',en:'The Hermit',emoji:'🏮',keywords:['独处','思考','发现'],msg:'今天适合给自己一段安静的时光。泡杯茶、读本书、散个步——最好的灵感往往在独处时降临。',wish:'愿你在安静中找到内心的光'},
  {name:'命运之轮',en:'Wheel of Fortune',emoji:'🎡',keywords:['好运','转变','机遇'],msg:'运气正在悄悄转向你！今天可能会遇到意想不到的好事。保持积极的心态，好运会被你的笑容吸引。',wish:'愿好运从今天开始眷顾你'},
  {name:'正义',en:'Justice',emoji:'⚖️',keywords:['公平','真相','平衡'],msg:'今天适合理清思路，做出公正的决定。你之前的努力不会白费，该来的回报一定会来。',wish:'愿你付出的每一份努力都被看见'},
  {name:'倒吊人',en:'The Hanged Man',emoji:'🧘',keywords:['换个角度','放下','顿悟'],msg:'换个角度看问题，你会发现全新的风景。今天如果遇到瓶颈，试着放松一下，答案可能就在意想不到的地方。',wish:'愿你拥有随时转换视角的智慧'},
  {name:'死神',en:'Death',emoji:'🦋',keywords:['蜕变','新生','告别'],msg:'旧的篇章正在翻页，新的故事即将开始。放下不再适合你的，才能腾出双手拥抱更好的。今天是蜕变的好日子。',wish:'愿你像蝴蝶一样美丽蜕变'},
  {name:'节制',en:'Temperance',emoji:'🌊',keywords:['平衡','耐心','流动'],msg:'今天适合慢下来，找到生活的节奏感。不急不躁，像流水一样自然前行。最好的结果值得等待。',wish:'愿你在忙碌中也能保持从容'},
  {name:'恶魔',en:'The Devil',emoji:'🔥',keywords:['突破','释放','觉醒'],msg:'今天适合打破束缚你的旧观念！那些"我不行"的想法，都是纸做的枷锁。勇敢挣脱，你会发现自己自由又强大。',wish:'愿你挣脱一切束缚，活出真我'},
  {name:'塔',en:'The Tower',emoji:'⚡',keywords:['突破','重建','真相'],msg:'有时候打破旧的才能建设新的。今天可能会有出乎意料的变化，但别担心——这是宇宙在帮你清理道路，为更好的未来腾出空间。',wish:'愿每次风雨过后都是更美的彩虹'},
  {name:'星星',en:'The Star',emoji:'⭐',keywords:['希望','治愈','光明'],msg:'你就是夜空中最亮的那颗星。今天会感到特别平静和充满希望。不管之前经历了什么，从现在开始一切都会越来越好。',wish:'愿你永远被希望的光芒照亮'},
  {name:'月亮',en:'The Moon',emoji:'🌙',keywords:['想象力','梦想','灵感'],msg:'今天你的想象力和创造力特别强。把那些奇妙的想法记录下来，说不定其中就藏着改变人生的宝藏。',wish:'愿你的每个梦想都值得追寻'},
  {name:'太阳',en:'The Sun',emoji:'☀️',keywords:['快乐','活力','成功'],msg:'今天的你像太阳一样耀眼！做什么都会顺利，身边的人也会被你的好心情感染。尽情享受这美好的一天吧！',wish:'愿你每天都像今天一样灿烂'},
  {name:'审判',en:'Judgement',emoji:'🔔',keywords:['觉醒','重生','使命'],msg:'你正在迎来人生新阶段！过去的经历都是为了今天的你而准备。勇敢回应内心的召唤，你的使命比你想象的更伟大。',wish:'愿你听见内心的声音，活出使命'},
  {name:'世界',en:'The World',emoji:'🌍',keywords:['圆满','成就','完整'],msg:'恭喜！你正在走向一个圆满的时刻。之前的坚持和努力终于开花结果。享受这份成就感，你值得为自己骄傲。',wish:'愿你拥有完整而丰盛的人生'},
];

var Q_READINGS = {
  '愚者':{love:'这段感情充满新鲜感，勇敢去表达你的心意。不完美没关系，真心最珍贵。',career:'新的机会正在向你招手，别犹豫了。有时候，放手一搏比原地踏步更值得。',study:'换个学习方法或方向，你会发现全新的天地。保持好奇心是你最大的天赋。',relationship:'放下偏见，用全新的眼光去看待对方。也许你会发现意想不到的惊喜。',choice:'听从直觉，选那个让你兴奋的。人生太短，不要总选"安全"的路。'},
  '魔术师':{love:'你有魅力去吸引对的人，展现真实的自己就是最好的告白。',career:'你的能力完全够格，是时候展示出来了。相信自己能创造奇迹。',study:'你的理解力很强，找到适合的方法就能事半功倍。',relationship:'主动表达善意，你有化解矛盾的能力。',choice:'你有能力掌控局面，相信自己的判断。'},
  '女祭司':{love:'答案在你内心深处。安静下来，感受那个人给你的真实感觉。',career:'不急着做决定，先观察再行动。你的直觉会告诉你真相。',study:'深度思考比盲目刷题更有效。给自己一些独处的学习时间。',relationship:'对方可能有没说出口的话，耐心倾听比急于表态更重要。',choice:'这件事不需要急。等内心平静的时候，答案自然会浮现。'},
  '女皇':{love:'爱自己是吸引爱情的最好方式。你值得被温柔以待。',career:'你的温暖和亲和力是职场上的宝藏。用柔软的力量去影响他人。',study:'享受学习的过程，不要只盯着结果。在美好的环境中效率更高。',relationship:'用关怀和包容去经营关系，你会收获满满的回报。',choice:'选让你感到被滋养的那个，生活需要美好的细节。'},
  '皇帝':{love:'在感情中也需要适当的原则和底线，温柔而坚定。',career:'你有领导力，勇敢承担更大的责任。你比自己以为的更强。',study:'制定计划并坚持执行，纪律是成功的基石。',relationship:'做那个可以依靠的人，但也别忘了表达柔软的一面。',choice:'果断一点，选好了就全力以赴。你有掌控全局的能力。'},
  '教皇':{love:'找一个能和你交流精神世界的人，灵魂的契合比什么都重要。',career:'向前辈请教，接受指导。站在巨人的肩膀上你能看得更远。',study:'找一个好老师或学习伙伴，有人引路会少走很多弯路。',relationship:'互相尊重彼此的信念和价值观，这是长久关系的基础。',choice:'参考过来人的经验，但最终决定权在你自己手里。'},
  '恋人':{love:'这段关系有美好的可能性，用心经营就会开花结果。',career:'选择与你价值观一致的工作环境，快乐工作才能持久。',study:'找到你真正热爱的方向，热情是最好的老师。',relationship:'坦诚相待，真心换真心。这段关系值得你用心投入。',choice:'跟着心走。当头脑犹豫时，心知道正确的答案。'},
  '战车':{love:'主动出击！喜欢就去表达，等待只会让机会溜走。',career:'现在是冲刺的好时机，你的努力一定会有回报。',study:'全力以赴，目标就在前方。你有冲过终点线的实力。',relationship:'有话直说，别犹豫。坦诚的交流比委婉的暗示更有力。',choice:'勇敢选那个有挑战的，你有赢的实力。'},
  '力量':{love:'用耐心和温柔去化解感情中的难题，强硬反而适得其反。',career:'面对压力时保持冷静，内在的力量比外在的强势更持久。',study:'遇到难题别急躁，慢慢来反而更快。持续的努力终会突破。',relationship:'温柔地坚持你的立场，不需要妥协也不需要争吵。',choice:'不急不躁，用温和的方式坚持你的选择。'},
  '隐士':{love:'先学会独处，才能在关系中不迷失。享受一个人的时光。',career:'适合独立思考和深度工作，远离喧嚣你能产出最好的作品。',study:'安静的环境最适合你现在的状态，一个人专注效率最高。',relationship:'给彼此一些空间，距离产生的不只是美，还有思念和珍惜。',choice:'找个安静的地方，一个人想想。答案就在内心深处等你。'},
  '命运之轮':{love:'缘分的转盘正在转动，保持开放的心态，惊喜就在转角。',career:'运势正在上升，之前积累的努力即将迎来回报期。',study:'好运开始眷顾你，抓住这波势头多多努力。',relationship:'关系正在往好的方向变化，耐心等待就好。',choice:'时机很好，勇敢做出选择。宇宙在你这边。'},
  '正义':{love:'公平地对待感情，也公平地对待自己。你值得对等的爱。',career:'你的努力会得到公正的回报，坚持做正确的事。',study:'踏实学习一定有收获，不要走捷径。',relationship:'以诚待人，种什么因得什么果。',choice:'选对的，而不是选容易的。你知道哪个是对的。'},
  '倒吊人':{love:'换个角度看你们的关系，也许你会理解对方为什么那样做。',career:'卡住的时候不如暂停一下，休息也是一种策略。',study:'换个思路，试试完全不同的方法。突破往往来自意想不到的角度。',relationship:'试着站在对方的角度想想，你会有全新的理解。',choice:'不一定非要现在做决定。换个角度再想想，也许第三种选择更好。'},
  '死神':{love:'旧的不去新的不来。如果一段关系真的走到尽头，放手也是一种勇敢。',career:'旧的阶段即将结束，新的篇章即将开始。蜕变的过程虽然不舒服，但终点是美好的。',study:'放弃不适合的方法，拥抱新的学习方式。破茧才能成蝶。',relationship:'有些关系需要更新迭代，不适合的就优雅地放下。',choice:'不要害怕改变。结束一件事，才能开始更好的。'},
  '节制':{love:'感情需要平衡，付出和接受都要适度。不急不躁地经营。',career:'工作和生活需要平衡，别让任何一边失控。',study:'劳逸结合，张弛有度。过度用功反而效率下降。',relationship:'找到相处的节奏，不过分亲密也不过分疏远。',choice:'不走极端，找一个平衡的中间路线。'},
  '恶魔':{love:'检视这段关系中是否有不健康的依赖，真正的爱是自由的。',career:'打破限制你的旧观念！"我不行"只是借口，你完全可以。',study:'别被恐惧束缚，那些"太难了"的想法都是纸老虎。',relationship:'不要被习惯绑架，不舒服的关系就勇敢调整。',choice:'选让你获得自由的那个，而不是让你舒适的那个。'},
  '塔':{love:'虽然现在可能有波折，但打破旧的才能迎来更好的。相信过程。',career:'突如其来的变化其实是在帮你清路。塌掉的是该塌的，留下的才是根基。',study:'旧方法行不通就果断放弃，有时候推倒重来比修修补补更高效。',relationship:'冲突不一定是坏事，有些话说开了反而更亲近。',choice:'即使选择带来震荡，也比停滞不前好。风雨过后是彩虹。'},
  '星星':{love:'满怀希望地去爱。你的真心一定会遇到对的人。',career:'光明就在前方，保持信念继续前行。',study:'你走在正确的路上，不要因为暂时的困难就失去信心。',relationship:'真诚和善良终会被看见，保持你的那颗星星般的心。',choice:'选那个让你充满希望的。有光的地方就是方向。'},
  '月亮':{love:'感情中有些模糊的地方需要澄清，别光靠猜测。',career:'直觉很敏锐，但也要验证。把那些灵感记下来，择日再做决定。',study:'现在状态适合发挥创造力，写作、设计、艺术相关尤其顺利。',relationship:'有些事情不要只靠感觉判断，找机会当面聊聊。',choice:'现在信息不够清晰，等迷雾散去再决定更稳妥。'},
  '太阳':{love:'恋爱运超好！散发你的热情和光芒，爱情自然来找你。',career:'做什么都顺利，是展示自己的最佳时机。',study:'状态极佳，学什么都能快速吸收。',relationship:'你的好心情会感染周围的人，享受这段快乐的时光。',choice:'选那个让你最开心的！快乐就是最好的指南针。'},
  '审判':{love:'是时候面对感情中一直回避的问题了。面对之后你会获得解脱。',career:'倾听内心的召唤，你的使命可能比现在的工作更伟大。',study:'回顾总结过去的学习，查漏补缺，为新阶段做准备。',relationship:'有些话该说就说，有些账该清就清。清理完你会感到轻松。',choice:'跟随内心的声音，你的灵魂知道该走哪条路。'},
  '世界':{love:'这段感情正在走向圆满，珍惜眼前人。',career:'一个阶段即将完美收尾，准备迎接更大的舞台。',study:'你即将取得重要的成果，为自己的坚持感到骄傲。',relationship:'关系达到一个美好的平衡点，享受这份和谐。',choice:'无论怎么选都会是好结果，因为你已经具备了成功的条件。'},
};

var TOPIC_LABELS = {love:'💕 感情指引',career:'💼 事业指引',study:'📖 学业指引',relationship:'🤝 人际指引',choice:'🔮 决策指引'};

function detectTopic(q){
  q = q.toLowerCase();
  if(/爱|喜欢|暗恋|表白|分手|对象|男朋友|女朋友|老公|老婆|恋爱|感情|复合|前任|约会|相亲|结婚|恋人|心动/.test(q)) return 'love';
  if(/工作|升职|加薪|跳槽|换工作|事业|老板|面试|offer|创业|辞职|职业|同事|项目/.test(q)) return 'career';
  if(/学习|考试|成绩|高考|留学|论文|毕业|读书|专业|上学|研究|备考|复习|GPA|IB/.test(q)) return 'study';
  if(/朋友|友情|闺蜜|同学|家人|父母|妈妈|爸爸|婆婆|关系|相处|吵架|矛盾|冷战/.test(q)) return 'relationship';
  return 'choice';
}

var AFFIRMATIONS = [
  '我值得拥有一切美好的事物','我每天都在变成更好的自己','我散发的光芒会照亮身边的人',
  '我是被爱的，被需要的，被珍惜的','今天的我比昨天更勇敢','我拥有把困难变成机会的能力',
  '我的存在本身就是一份礼物','好运正在赶来的路上','我配得上所有的幸福和成功',
  '宇宙正在悄悄为我安排最好的','我允许自己休息，也允许自己发光','我相信一切都会在最好的时间发生',
  '我的温柔是一种了不起的力量','我选择用爱和善意对待这个世界','每一天都是全新的开始',
  '我正在一步步靠近梦想','我的内心有一座取之不尽的宝藏','我值得被温柔以待',
  '今天是充满可能性的一天','我为自己感到骄傲',
];

var COLORS = [
  {name:'樱花粉',icon:'🌸',hex:'#FFB7C5'},{name:'薰衣草紫',icon:'💜',hex:'#B8A9E8'},
  {name:'天空蓝',icon:'🦋',hex:'#87CEEB'},{name:'薄荷绿',icon:'🌿',hex:'#98FB98'},
  {name:'柠檬黄',icon:'🍋',hex:'#FFF44F'},{name:'珊瑚橘',icon:'🧡',hex:'#FF7F50'},
  {name:'玫瑰金',icon:'🌹',hex:'#E8B4B8'},{name:'奶茶棕',icon:'🧋',hex:'#D2B48C'},
  {name:'云朵白',icon:'☁️',hex:'#F0F0F0'},{name:'蜜桃粉',icon:'🍑',hex:'#FFCBA4'},
];

var THINGS = [
  {name:'一杯咖啡',icon:'☕'},{name:'一本好书',icon:'📖'},{name:'一首老歌',icon:'🎵'},
  {name:'一朵鲜花',icon:'🌷'},{name:'一颗糖果',icon:'🍬'},{name:'一个拥抱',icon:'🤗'},
  {name:'一段散步',icon:'🚶‍♀️'},{name:'一片云朵',icon:'☁️'},{name:'一缕阳光',icon:'🌤️'},
  {name:'一杯奶茶',icon:'🧋'},{name:'一张明信片',icon:'💌'},{name:'一块巧克力',icon:'🍫'},
];

function getDaySeed(){var d=new Date();return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate()}
function seededRandom(seed){var s=seed;return function(){s=(s*16807+0)%2147483647;return(s-1)/2147483646}}

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

// roundRect polyfill
if(typeof CanvasRenderingContext2D!=='undefined'&&!CanvasRenderingContext2D.prototype.roundRect){
  CanvasRenderingContext2D.prototype.roundRect=function(x,y,w,h,r){
    if(typeof r==='number')r=[r,r,r,r];this.moveTo(x+r[0],y);this.lineTo(x+w-r[1],y);this.arcTo(x+w,y,x+w,y+r[1],r[1]);
    this.lineTo(x+w,y+h-r[2]);this.arcTo(x+w,y+h,x+w-r[2],y+h,r[2]);this.lineTo(x+r[3],y+h);
    this.arcTo(x,y+h,x,y+h-r[3],r[3]);this.lineTo(x,y+r[0]);this.arcTo(x,y,x+r[0],y,r[0]);this.closePath();return this;
  };
}
