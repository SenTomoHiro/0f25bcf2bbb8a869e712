(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const F of a.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&e(F)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const A2=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dn=["日","一","二","三","四","五","六"];function g1(u,n){return new Date(u,n+1,0).getDate()}function _n(u,n){return new Date(u,n,1).getDay()}function xn(u,n){return new Date(u.getFullYear(),u.getMonth(),u.getDate()+n)}function fn(u,n){const t=_n(u,n),e=g1(u,n);return[...Array.from({length:t}).fill(null),...Array.from({length:e},(i,a)=>a+1)]}function N0(u,n){return u.getFullYear()===n.getFullYear()&&u.getMonth()===n.getMonth()&&u.getDate()===n.getDate()}function r2(u,n){return{年:n.getFullYear(),月:n.getMonth(),所选日期:new Date(n.getFullYear(),n.getMonth(),n.getDate())}}function yn(u){return`${u.getFullYear()}年${u.getMonth()+1}月${u.getDate()}日`}const R=class{static isLeapYear(u){return u<1600?u%4===0:u%4===0&&u%100!==0||u%400===0}static getDaysOfMonth(u,n){if(u===1582&&n===10)return 21;const t=n-1;let e=R.DAYS_OF_MONTH[t];return t===1&&R.isLeapYear(u)&&e++,e}static getDaysOfYear(u){return u===1582?355:R.isLeapYear(u)?366:365}static getDaysInYear(u,n,t){let e=0;for(let a=1;a<n;a++)e+=R.getDaysOfMonth(u,a);let i=t;if(u===1582&&n===10&&t>=15){if(t>=15)i-=10;else if(t>4)throw new Error(`wrong solar year ${u} month ${n} day ${t}`)}return e+=i,e}static getWeeksOfMonth(u,n,t){return Math.ceil((R.getDaysOfMonth(u,n)+p.fromYmd(u,n,1).getWeek()-t)/7)}static getDaysBetween(u,n,t,e,i,a){if(u==e)return R.getDaysInYear(e,i,a)-R.getDaysInYear(u,n,t);if(u>e){let F=R.getDaysOfYear(e)-R.getDaysInYear(e,i,a);for(let r=e+1;r<u;r++)F+=R.getDaysOfYear(r);return F+=R.getDaysInYear(u,n,t),-F}else{let F=R.getDaysOfYear(u)-R.getDaysInYear(u,n,t);for(let r=u+1;r<e;r++)F+=R.getDaysOfYear(r);return F+=R.getDaysInYear(e,i,a),F}}};let N=R;N.WEEK=["{w.sun}","{w.mon}","{w.tues}","{w.wed}","{w.thur}","{w.fri}","{w.sat}"];N.DAYS_OF_MONTH=[31,28,31,30,31,30,31,31,30,31,30,31];N.XINGZUO=["{xz.aries}","{xz.taurus}","{xz.gemini}","{xz.cancer}","{xz.leo}","{xz.virgo}","{xz.libra}","{xz.scorpio}","{xz.sagittarius}","{xz.capricornus}","{xz.aquarius}","{xz.pisces}"];N.FESTIVAL={"1-1":"{jr.yuanDan}","2-14":"{jr.qingRen}","3-8":"{jr.fuNv}","3-12":"{jr.zhiShu}","3-15":"{jr.xiaoFei}","4-1":"{jr.yuRen}","5-1":"{jr.wuYi}","5-4":"{jr.qingNian}","6-1":"{jr.erTong}","7-1":"{jr.jianDang}","8-1":"{jr.jianJun}","9-10":"{jr.jiaoShi}","10-1":"{jr.guoQing}","10-31":"{jr.wanShengYe}","11-1":"{jr.wanSheng}","12-24":"{jr.pingAn}","12-25":"{jr.shengDan}"};N.OTHER_FESTIVAL={"1-8":["周恩来逝世纪念日"],"1-10":["中国人民警察节"],"1-14":["日记情人节"],"1-21":["列宁逝世纪念日"],"1-26":["国际海关日"],"1-27":["国际大屠杀纪念日"],"2-2":["世界湿地日"],"2-4":["世界抗癌日"],"2-7":["京汉铁路罢工纪念日"],"2-10":["国际气象节"],"2-19":["邓小平逝世纪念日"],"2-20":["世界社会公正日"],"2-21":["国际母语日"],"2-24":["第三世界青年日"],"3-1":["国际海豹日"],"3-3":["世界野生动植物日","全国爱耳日"],"3-5":["周恩来诞辰纪念日","中国青年志愿者服务日"],"3-6":["世界青光眼日"],"3-7":["女生节"],"3-12":["孙中山逝世纪念日"],"3-14":["马克思逝世纪念日","白色情人节"],"3-17":["国际航海日"],"3-18":["全国科技人才活动日","全国爱肝日"],"3-20":["国际幸福日"],"3-21":["世界森林日","世界睡眠日","国际消除种族歧视日"],"3-22":["世界水日"],"3-23":["世界气象日"],"3-24":["世界防治结核病日"],"3-29":["中国黄花岗七十二烈士殉难纪念日"],"4-2":["国际儿童图书日","世界自闭症日"],"4-4":["国际地雷行动日"],"4-7":["世界卫生日"],"4-8":["国际珍稀动物保护日"],"4-12":["世界航天日"],"4-14":["黑色情人节"],"4-15":["全民国家安全教育日"],"4-22":["世界地球日","列宁诞辰纪念日"],"4-23":["世界读书日"],"4-24":["中国航天日"],"4-25":["儿童预防接种宣传日"],"4-26":["世界知识产权日","全国疟疾日"],"4-28":["世界安全生产与健康日"],"4-30":["全国交通安全反思日"],"5-2":["世界金枪鱼日"],"5-3":["世界新闻自由日"],"5-5":["马克思诞辰纪念日"],"5-8":["世界红十字日"],"5-11":["世界肥胖日"],"5-12":["全国防灾减灾日","护士节"],"5-14":["玫瑰情人节"],"5-15":["国际家庭日"],"5-19":["中国旅游日"],"5-20":["网络情人节"],"5-22":["国际生物多样性日"],"5-25":["525心理健康节"],"5-27":["上海解放日"],"5-29":["国际维和人员日"],"5-30":["中国五卅运动纪念日"],"5-31":["世界无烟日"],"6-3":["世界自行车日"],"6-5":["世界环境日"],"6-6":["全国爱眼日"],"6-8":["世界海洋日"],"6-11":["中国人口日"],"6-14":["世界献血日","亲亲情人节"],"6-17":["世界防治荒漠化与干旱日"],"6-20":["世界难民日"],"6-21":["国际瑜伽日"],"6-25":["全国土地日"],"6-26":["国际禁毒日","联合国宪章日"],"7-1":["香港回归纪念日"],"7-6":["国际接吻日","朱德逝世纪念日"],"7-7":["七七事变纪念日"],"7-11":["世界人口日","中国航海日"],"7-14":["银色情人节"],"7-18":["曼德拉国际日"],"7-30":["国际友谊日"],"8-3":["男人节"],"8-5":["恩格斯逝世纪念日"],"8-6":["国际电影节"],"8-8":["全民健身日"],"8-9":["国际土著人日"],"8-12":["国际青年节"],"8-14":["绿色情人节"],"8-19":["世界人道主义日","中国医师节"],"8-22":["邓小平诞辰纪念日"],"8-29":["全国测绘法宣传日"],"9-3":["中国抗日战争胜利纪念日"],"9-5":["中华慈善日"],"9-8":["世界扫盲日"],"9-9":["毛泽东逝世纪念日","全国拒绝酒驾日"],"9-14":["世界清洁地球日","相片情人节"],"9-15":["国际民主日"],"9-16":["国际臭氧层保护日"],"9-17":["世界骑行日"],"9-18":["九一八事变纪念日"],"9-20":["全国爱牙日"],"9-21":["国际和平日"],"9-27":["世界旅游日"],"9-30":["中国烈士纪念日"],"10-1":["国际老年人日"],"10-2":["国际非暴力日"],"10-4":["世界动物日"],"10-11":["国际女童日"],"10-10":["辛亥革命纪念日"],"10-13":["国际减轻自然灾害日","中国少年先锋队诞辰日"],"10-14":["葡萄酒情人节"],"10-16":["世界粮食日"],"10-17":["全国扶贫日"],"10-20":["世界统计日"],"10-24":["世界发展信息日","程序员节"],"10-25":["抗美援朝纪念日"],"11-5":["世界海啸日"],"11-8":["记者节"],"11-9":["全国消防日"],"11-11":["光棍节"],"11-12":["孙中山诞辰纪念日"],"11-14":["电影情人节"],"11-16":["国际宽容日"],"11-17":["国际大学生节"],"11-19":["世界厕所日"],"11-28":["恩格斯诞辰纪念日"],"11-29":["国际声援巴勒斯坦人民日"],"12-1":["世界艾滋病日"],"12-2":["全国交通安全日"],"12-3":["世界残疾人日"],"12-4":["全国法制宣传日"],"12-5":["世界弱能人士日","国际志愿人员日"],"12-7":["国际民航日"],"12-9":["世界足球日","国际反腐败日"],"12-10":["世界人权日"],"12-11":["国际山岳日"],"12-12":["西安事变纪念日"],"12-13":["国家公祭日"],"12-14":["拥抱情人节"],"12-18":["国际移徙者日"],"12-26":["毛泽东诞辰纪念日"]};N.WEEK_FESTIVAL={"3-0-1":"全国中小学生安全教育日","5-2-0":"母亲节","5-3-0":"全国助残日","6-3-0":"父亲节","9-3-6":"全民国防教育日","10-1-1":"世界住房日","11-4-4":"感恩节"};class u0{static fromYmd(n,t,e,i){return new u0(n,t,e,i)}static fromDate(n,t){return u0.fromYmd(n.getFullYear(),n.getMonth()+1,n.getDate(),t)}constructor(n,t,e,i){this._year=n,this._month=t,this._day=e,this._start=i}getYear(){return this._year}getMonth(){return this._month}getDay(){return this._day}getStart(){return this._start}getIndex(){let n=p.fromYmd(this._year,this._month,1).getWeek()-this._start;return n<0&&(n+=7),Math.ceil((this._day+n)/7)}getIndexInYear(){let n=p.fromYmd(this._year,1,1).getWeek()-this._start;return n<0&&(n+=7),Math.ceil((N.getDaysInYear(this._year,this._month,this._day)+n)/7)}next(n,t){const e=this._start;if(n===0)return u0.fromYmd(this._year,this._month,this._day,e);let i=p.fromYmd(this._year,this._month,this._day);if(t){let a=n,F=u0.fromYmd(this._year,this._month,this._day,e),r=this._month;const g=a>0;for(;a!==0;){i=i.next(g?7:-7),F=u0.fromYmd(i.getYear(),i.getMonth(),i.getDay(),e);let E=F.getMonth();if(r!==E){const h=F.getIndex();if(g)if(h===1){const D=F.getFirstDay();F=u0.fromYmd(D.getYear(),D.getMonth(),D.getDay(),e),E=F.getMonth()}else i=p.fromYmd(F.getYear(),F.getMonth(),1),F=u0.fromYmd(i.getYear(),i.getMonth(),i.getDay(),e);else if(N.getWeeksOfMonth(F.getYear(),F.getMonth(),e)===h){const D=F.getFirstDay().next(6);F=u0.fromYmd(D.getYear(),D.getMonth(),D.getDay(),e),E=F.getMonth()}else i=p.fromYmd(F.getYear(),F.getMonth(),N.getDaysOfMonth(F.getYear(),F.getMonth())),F=u0.fromYmd(i.getYear(),i.getMonth(),i.getDay(),e);r=E}a-=g?1:-1}return F}else return i=i.next(n*7),u0.fromYmd(i.getYear(),i.getMonth(),i.getDay(),e)}getFirstDay(){const n=p.fromYmd(this._year,this._month,this._day);let t=n.getWeek()-this._start;return t<0&&(t+=7),n.next(-t)}getFirstDayInMonth(){let n=0;const t=this.getDays();for(let e=0;e<t.length;e++)if(this._month===t[e].getMonth()){n=e;break}return t[n]}getDays(){const n=this.getFirstDay(),t=[];t.push(n);for(let e=1;e<7;e++)t.push(n.next(e));return t}getDaysInMonth(){const n=this.getDays(),t=[];for(let e=0;e<n.length;e++){const i=n[e];this._month===i.getMonth()&&t.push(i)}return t}toString(){return`${this.getYear()}.${this.getMonth()}.${this.getIndex()}`}toFullString(){return`${this.getYear()}年${this.getMonth()}月第${this.getIndex()}周`}}const I=class{static getTimeZhiIndex(u){if(!u)return 0;u.length>5&&(u=u.substring(0,5));let n=1;for(let t=1;t<22;t+=2){if(u>=(t<10?"0":"")+t+":00"&&u<=(t+1<10?"0":"")+(t+1)+":59")return n;n++}return 0}static convertTime(u){return I.ZHI[I.getTimeZhiIndex(u)+1]}static getJiaZiIndex(u){return I.index(u,I.JIA_ZI,0)}static hex(u){let n=u.toString(16);return n.length<2&&(n="0"+n),n.toUpperCase()}static getDayYi(u,n){const t=[],e=I.hex(I.getJiaZiIndex(n)),i=I.hex(I.getJiaZiIndex(u));let a=I.DAY_YI_JI,F=a.indexOf(e+"=");for(;F>-1;){a=a.substring(F+3);let r=a;r.indexOf("=")>-1&&(r=r.substring(0,r.indexOf("=")-2));let g=!1;const E=r.substring(0,r.indexOf(":"));for(let h=0,D=E.length;h<D;h+=2)if(E.substring(h,h+2)==i){g=!0;break}if(g){let h=r.substring(r.indexOf(":")+1);h=h.substring(0,h.indexOf(","));for(let D=0,l=h.length;D<l;D+=2)t.push(I.YI_JI[parseInt(h.substring(D,D+2),16)]);break}F=a.indexOf(e+"=")}return t.length<1&&t.push(I.SHEN_SHA[0]),t}static getDayJi(u,n){const t=[],e=I.hex(I.getJiaZiIndex(n)),i=I.hex(I.getJiaZiIndex(u));let a=I.DAY_YI_JI,F=a.indexOf(e+"=");for(;F>-1;){a=a.substring(F+3);let r=a;r.indexOf("=")>-1&&(r=r.substring(0,r.indexOf("=")-2));let g=!1;const E=r.substring(0,r.indexOf(":"));for(let h=0,D=E.length;h<D;h+=2)if(E.substring(h,h+2)==i){g=!0;break}if(g){const h=r.substring(r.indexOf(",")+1);for(let D=0,l=h.length;D<l;D+=2)t.push(I.YI_JI[parseInt(h.substring(D,D+2),16)]);break}F=a.indexOf(e+"=")}return t.length<1&&t.push(I.SHEN_SHA[0]),t}static getDayJiShen(u,n){const t=[];let e=u-2;e<0&&(e+=12);let i=I.getJiaZiIndex(n).toString(16).toUpperCase();i.length<2&&(i="0"+i);const a=new RegExp(`;${i}(.[^;]*)`,"g").exec(I.DAY_SHEN_SHA[e]);if(a){const F=a[1];for(let r=0,g=F.length;r<g;r+=2){const E=parseInt(F.substring(r,r+2),16);E<60&&t.push(I.SHEN_SHA[E+1])}}return t.length<1&&t.push(I.SHEN_SHA[0]),t}static getDayXiongSha(u,n){const t=[];let e=u-2;e<0&&(e+=12);let i=I.getJiaZiIndex(n).toString(16).toUpperCase();i.length<2&&(i="0"+i);const a=new RegExp(`;${i}(.[^;]*)`,"g").exec(I.DAY_SHEN_SHA[e]);if(a){const F=a[1];for(let r=0,g=F.length;r<g;r+=2){const E=parseInt(F.substring(r,r+2),16);E>=60&&t.push(I.SHEN_SHA[E+1])}}return t.length<1&&t.push(I.SHEN_SHA[0]),t}static getTimeYi(u,n){const t=[],e=I.hex(I.getJiaZiIndex(u)),i=I.hex(I.getJiaZiIndex(n)),a=I.TIME_YI_JI.indexOf(e+i+"=");if(a>-1){let F=I.TIME_YI_JI.substring(a+5);F.indexOf("=")>-1&&(F=F.substring(0,F.indexOf("=")-4));const r=F.substring(0,F.indexOf(","));for(let g=0,E=r.length;g<E;g+=2)t.push(I.YI_JI[parseInt(r.substring(g,g+2),16)])}return t.length<1&&t.push(I.SHEN_SHA[0]),t}static getTimeJi(u,n){const t=[],e=I.hex(I.getJiaZiIndex(u)),i=I.hex(I.getJiaZiIndex(n)),a=I.TIME_YI_JI.indexOf(e+i+"=");if(a>-1){let F=I.TIME_YI_JI.substring(a+5);F.indexOf("=")>-1&&(F=F.substring(0,F.indexOf("=")-4));const r=F.substring(F.indexOf(",")+1);for(let g=0,E=r.length;g<E;g+=2)t.push(I.YI_JI[parseInt(r.substring(g,g+2),16)])}return t.length<1&&t.push(I.SHEN_SHA[0]),t}static getXunIndex(u){const n=I.find(u,I.GAN),t=I.find(u,I.ZHI);let e=n.index-t.index;return e<0&&(e+=12),Math.floor(e/2)}static getXun(u){return I.XUN[I.getXunIndex(u)]}static getXunKong(u){return I.XUN_KONG[I.getXunIndex(u)]}static find(u,n){for(let t=0,e=n.length;t<e;t++){const i=n[t];if(!(i.length<1)&&u.indexOf(i)>-1)return{index:t,value:i}}return null}static index(u,n,t){for(let e=0,i=n.length;e<i;e++)if(n[e]===u)return e+t;return-1}};let s=I;s.BASE_MONTH_ZHI_INDEX=2;s.XUN=["{jz.jiaZi}","{jz.jiaXu}","{jz.jiaShen}","{jz.jiaWu}","{jz.jiaChen}","{jz.jiaYin}"];s.XUN_KONG=["{dz.xu}{dz.hai}","{dz.shen}{dz.you}","{dz.wu}{dz.wei}","{dz.chen}{dz.si}","{dz.yin}{dz.mao}","{dz.zi}{dz.chou}"];s.CHANG_SHENG=["{ds.changSheng}","{ds.muYu}","{ds.guanDai}","{ds.linGuan}","{ds.diWang}","{ds.shuai}","{ds.bing}","{ds.si}","{ds.mu}","{ds.jue}","{ds.tai}","{ds.yang}"];s.MONTH_ZHI=["","{dz.yin}","{dz.mao}","{dz.chen}","{dz.si}","{dz.wu}","{dz.wei}","{dz.shen}","{dz.you}","{dz.xu}","{dz.hai}","{dz.zi}","{dz.chou}"];s.JIE_QI=["{jq.dongZhi}","{jq.xiaoHan}","{jq.daHan}","{jq.liChun}","{jq.yuShui}","{jq.jingZhe}","{jq.chunFen}","{jq.qingMing}","{jq.guYu}","{jq.liXia}","{jq.xiaoMan}","{jq.mangZhong}","{jq.xiaZhi}","{jq.xiaoShu}","{jq.daShu}","{jq.liQiu}","{jq.chuShu}","{jq.baiLu}","{jq.qiuFen}","{jq.hanLu}","{jq.shuangJiang}","{jq.liDong}","{jq.xiaoXue}","{jq.daXue}"];s.JIE_QI_IN_USE=["DA_XUE","{jq.dongZhi}","{jq.xiaoHan}","{jq.daHan}","{jq.liChun}","{jq.yuShui}","{jq.jingZhe}","{jq.chunFen}","{jq.qingMing}","{jq.guYu}","{jq.liXia}","{jq.xiaoMan}","{jq.mangZhong}","{jq.xiaZhi}","{jq.xiaoShu}","{jq.daShu}","{jq.liQiu}","{jq.chuShu}","{jq.baiLu}","{jq.qiuFen}","{jq.hanLu}","{jq.shuangJiang}","{jq.liDong}","{jq.xiaoXue}","{jq.daXue}","DONG_ZHI","XIAO_HAN","DA_HAN","LI_CHUN","YU_SHUI","JING_ZHE"];s.LIU_YAO=["{ly.xianSheng}","{ly.youYin}","{ly.xianFu}","{ly.foMie}","{ly.daAn}","{ly.chiKou}"];s.HOU=["{h.first}","{h.second}","{h.third}"];s.WU_HOU=["{h.qiuYinJie}","{h.miJiao}","{h.shuiQuan}","{h.yanBei}","{h.queShi}","{h.zhiShi}","{h.jiShi}","{h.zhengNiao}","{h.shuiZe}","{h.dongFeng}","{h.zheChongShiZhen}","{h.yuZhi}","{h.taJi}","{h.houYan}","{h.caoMuMengDong}","{h.taoShi}","{h.cangGeng}","{h.yingHua}","{h.xuanNiaoZhi}","{h.leiNai}","{h.shiDian}","{h.tongShi}","{h.tianShu}","{h.hongShi}","{h.pingShi}","{h.mingJiu}","{h.daiSheng}","{h.louGuo}","{h.qiuYinChu}","{h.wangGua}","{h.kuCai}","{h.miCao}","{h.maiQiu}","{h.tangLang}","{h.juShi}","{h.fanShe}","{h.luJia}","{h.tiaoShi}","{h.banXia}","{h.wenFeng}","{h.xiShuai}","{h.yingShi}","{h.fuCao}","{h.tuRun}","{h.daYu}","{h.liangFeng}","{h.baiLu}","{h.hanChan}","{h.yingNai}","{h.tianDi}","{h.heNai}","{h.hongYanLai}","{h.xuanNiaoGui}","{h.qunNiao}","{h.leiShi}","{h.zheChongPiHu}","{h.shuiShiHe}","{h.hongYanLaiBin}","{h.queRu}","{h.juYou}","{h.caiNai}","{h.caoMuHuangLuo}","{h.zheChongXianFu}","{h.shuiShiBing}","{h.diShi}","{h.zhiRu}","{h.hongCang}","{h.tianQi}","{h.biSe}","{h.heDan}","{h.huShi}","{h.liTing}"];s.GAN=["","{tg.jia}","{tg.yi}","{tg.bing}","{tg.ding}","{tg.wu}","{tg.ji}","{tg.geng}","{tg.xin}","{tg.ren}","{tg.gui}"];s.POSITION_XI=["","{bg.gen}","{bg.qian}","{bg.kun}","{bg.li}","{bg.xun}","{bg.gen}","{bg.qian}","{bg.kun}","{bg.li}","{bg.xun}"];s.POSITION_YANG_GUI=["","{bg.kun}","{bg.kun}","{bg.dui}","{bg.qian}","{bg.gen}","{bg.kan}","{bg.li}","{bg.gen}","{bg.zhen}","{bg.xun}"];s.POSITION_YIN_GUI=["","{bg.gen}","{bg.kan}","{bg.qian}","{bg.dui}","{bg.kun}","{bg.kun}","{bg.gen}","{bg.li}","{bg.xun}","{bg.zhen}"];s.POSITION_FU=["","{bg.xun}","{bg.xun}","{bg.zhen}","{bg.zhen}","{bg.kan}","{bg.li}","{bg.kun}","{bg.kun}","{bg.qian}","{bg.dui}"];s.POSITION_FU_2=["","{bg.kan}","{bg.kun}","{bg.qian}","{bg.xun}","{bg.gen}","{bg.kan}","{bg.kun}","{bg.qian}","{bg.xun}","{bg.gen}"];s.POSITION_CAI=["","{bg.gen}","{bg.gen}","{bg.kun}","{bg.kun}","{bg.kan}","{bg.kan}","{bg.zhen}","{bg.zhen}","{bg.li}","{bg.li}"];s.POSITION_TAI_SUI_YEAR=["{bg.kan}","{bg.gen}","{bg.gen}","{bg.zhen}","{bg.xun}","{bg.xun}","{bg.li}","{bg.kun}","{bg.kun}","{bg.dui}","{bg.kan}","{bg.kan}"];s.POSITION_GAN=["{bg.zhen}","{bg.zhen}","{bg.li}","{bg.li}","{ps.center}","{ps.center}","{bg.dui}","{bg.dui}","{bg.kan}","{bg.kan}"];s.POSITION_ZHI=["{bg.kan}","{ps.center}","{bg.zhen}","{bg.zhen}","{ps.center}","{bg.li}","{bg.li}","{ps.center}","{bg.dui}","{bg.dui}","{ps.center}","{bg.kan}"];s.POSITION_TAI_DAY=["{ts.zhan}{ts.men}{ts.dui} {ps.wai}{ps.dongNan}","{ts.dui}{ts.mo}{ts.ce} {ps.wai}{ps.dongNan}","{ts.chu}{ts.zao}{ts.lu} {ps.wai}{ps.zhengNan}","{ts.cangKu}{ts.men} {ps.wai}{ps.zhengNan}","{ts.fang}{ts.chuang}{ts.xi} {ps.wai}{ps.zhengNan}","{ts.zhan}{ts.men}{ts.chuang} {ps.wai}{ps.zhengNan}","{ts.zhan}{ts.dui}{ts.mo} {ps.wai}{ps.zhengNan}","{ts.chu}{ts.zao}{ts.ce} {ps.wai}{ps.xiNan}","{ts.cangKu}{ts.lu} {ps.wai}{ps.xiNan}","{ts.fang}{ts.chuang}{ts.men} {ps.wai}{ps.xiNan}","{ts.zhan}{ts.men}{ts.xi} {ps.wai}{ps.xiNan}","{ts.dui}{ts.mo}{ts.chuang} {ps.wai}{ps.xiNan}","{ts.chu}{ts.zao}{ts.dui} {ps.wai}{ps.xiNan}","{ts.cangKu}{ts.ce} {ps.wai}{ps.zhengXi}","{ts.fang}{ts.chuang}{ts.lu} {ps.wai}{ps.zhengXi}","{ts.zhan}{ts.daMen} {ps.wai}{ps.zhengXi}","{ts.dui}{ts.mo}{ts.xi} {ps.wai}{ps.zhengXi}","{ts.chu}{ts.zao}{ts.chuang} {ps.wai}{ps.zhengXi}","{ts.cangKu}{ts.dui} {ps.wai}{ps.xiBei}","{ts.fang}{ts.chuang}{ts.ce} {ps.wai}{ps.xiBei}","{ts.zhan}{ts.men}{ts.lu} {ps.wai}{ps.xiBei}","{ts.dui}{ts.mo}{ts.men} {ps.wai}{ps.xiBei}","{ts.chu}{ts.zao}{ts.xi} {ps.wai}{ps.xiBei}","{ts.cangKu}{ts.chuang} {ps.wai}{ps.xiBei}","{ts.fang}{ts.chuang}{ts.dui} {ps.wai}{ps.zhengBei}","{ts.zhan}{ts.men}{ts.ce} {ps.wai}{ps.zhengBei}","{ts.dui}{ts.mo}{ts.lu} {ps.wai}{ps.zhengBei}","{ts.chu}{ts.zao}{ts.men} {ps.wai}{ps.zhengBei}","{ts.cangKu}{ts.xi} {ps.wai}{ps.zhengBei}","{ts.zhan}{ts.fang}{ts.chuang} {ps.fangNei}{ps.bei}","{ts.zhan}{ts.men}{ts.dui} {ps.fangNei}{ps.bei}","{ts.dui}{ts.mo}{ts.ce} {ps.fangNei}{ps.bei}","{ts.chu}{ts.zao}{ts.lu} {ps.fangNei}{ps.bei}","{ts.cangKu}{ts.men} {ps.fangNei}{ps.bei}","{ts.fang}{ts.chuang}{ts.xi} {ps.fangNei}{ps.center}","{ts.zhan}{ts.men}{ts.chuang} {ps.fangNei}{ps.center}","{ts.zhan}{ts.dui}{ts.mo} {ps.fangNei}{ps.nan}","{ts.chu}{ts.zao}{ts.ce} {ps.fangNei}{ps.nan}","{ts.cangKu}{ts.lu} {ps.fangNei}{ps.nan}","{ts.fang}{ts.chuang}{ts.men} {ps.fangNei}{ps.xi}","{ts.zhan}{ts.men}{ts.xi} {ps.fangNei}{ps.dong}","{ts.dui}{ts.mo}{ts.chuang} {ps.fangNei}{ps.dong}","{ts.chu}{ts.zao}{ts.dui} {ps.fangNei}{ps.dong}","{ts.cangKu}{ts.ce} {ps.fangNei}{ps.dong}","{ts.fang}{ts.chuang}{ts.lu} {ps.fangNei}{ps.center}","{ts.zhan}{ts.daMen} {ps.wai}{ps.dongBei}","{ts.dui}{ts.mo}{ts.xi} {ps.wai}{ps.dongBei}","{ts.chu}{ts.zao}{ts.chuang} {ps.wai}{ps.dongBei}","{ts.cangKu}{ts.dui} {ps.wai}{ps.dongBei}","{ts.fang}{ts.chuang}{ts.ce} {ps.wai}{ps.dongBei}","{ts.zhan}{ts.men}{ts.lu} {ps.wai}{ps.dongBei}","{ts.dui}{ts.mo}{ts.men} {ps.wai}{ps.zhengDong}","{ts.chu}{ts.zao}{ts.xi} {ps.wai}{ps.zhengDong}","{ts.cangKu}{ts.chuang} {ps.wai}{ps.zhengDong}","{ts.fang}{ts.chuang}{ts.dui} {ps.wai}{ps.zhengDong}","{ts.zhan}{ts.men}{ts.ce} {ps.wai}{ps.zhengDong}","{ts.dui}{ts.mo}{ts.lu} {ps.wai}{ps.dongNan}","{ts.chu}{ts.zao}{ts.men} {ps.wai}{ps.dongNan}","{ts.cangKu}{ts.xi} {ps.wai}{ps.dongNan}","{ts.zhan}{ts.fang}{ts.chuang} {ps.wai}{ps.dongNan}"];s.POSITION_TAI_MONTH=["{ts.zhan}{ts.fang}{ts.chuang}","{ts.zhan}{ts.hu}{ts.win}","{ts.zhan}{ts.men}{ts.tang}","{ts.zhan}{ts.chu}{ts.zao}","{ts.zhan}{ts.fang}{ts.chuang}","{ts.zhan}{ts.chuang}{ts.cang}","{ts.zhan}{ts.dui}{ts.mo}","{ts.zhan}{ts.ce}{ts.hu}","{ts.zhan}{ts.men}{ts.fang}","{ts.zhan}{ts.fang}{ts.chuang}","{ts.zhan}{ts.zao}{ts.lu}","{ts.zhan}{ts.fang}{ts.chuang}"];s.ZHI=["","{dz.zi}","{dz.chou}","{dz.yin}","{dz.mao}","{dz.chen}","{dz.si}","{dz.wu}","{dz.wei}","{dz.shen}","{dz.you}","{dz.xu}","{dz.hai}"];s.ZHI_XING=["","{zx.jian}","{zx.chu}","{zx.man}","{zx.ping}","{zx.ding}","{zx.zhi}","{zx.po}","{zx.wei}","{zx.cheng}","{zx.shou}","{zx.kai}","{zx.bi}"];s.JIA_ZI=["{jz.jiaZi}","{jz.yiChou}","{jz.bingYin}","{jz.dingMao}","{jz.wuChen}","{jz.jiSi}","{jz.gengWu}","{jz.xinWei}","{jz.renShen}","{jz.guiYou}","{jz.jiaXu}","{jz.yiHai}","{jz.bingZi}","{jz.dingChou}","{jz.wuYin}","{jz.jiMao}","{jz.gengChen}","{jz.xinSi}","{jz.renWu}","{jz.guiWei}","{jz.jiaShen}","{jz.yiYou}","{jz.bingXu}","{jz.dingHai}","{jz.wuZi}","{jz.jiChou}","{jz.gengYin}","{jz.xinMao}","{jz.renChen}","{jz.guiSi}","{jz.jiaWu}","{jz.yiWei}","{jz.bingShen}","{jz.dingYou}","{jz.wuXu}","{jz.jiHai}","{jz.gengZi}","{jz.xinChou}","{jz.renYin}","{jz.guiMao}","{jz.jiaChen}","{jz.yiSi}","{jz.bingWu}","{jz.dingWei}","{jz.wuShen}","{jz.jiYou}","{jz.gengXu}","{jz.xinHai}","{jz.renZi}","{jz.guiChou}","{jz.jiaYin}","{jz.yiMao}","{jz.bingChen}","{jz.dingSi}","{jz.wuWu}","{jz.jiWei}","{jz.gengShen}","{jz.xinYou}","{jz.renXu}","{jz.guiHai}"];s.CHANG_SHENG_OFFSET={"{tg.jia}":1,"{tg.bing}":10,"{tg.wu}":10,"{tg.geng}":7,"{tg.ren}":4,"{tg.yi}":6,"{tg.ding}":9,"{tg.ji}":9,"{tg.xin}":0,"{tg.gui}":3};s.TIAN_SHEN=["","{sn.qingLong}","{sn.mingTang}","{sn.tianXing}","{sn.zhuQue}","{sn.jinKui}","{sn.tianDe}","{sn.baiHu}","{sn.yuTang}","{sn.tianLao}","{sn.xuanWu}","{sn.siMing}","{sn.gouChen}"];s.ZHI_TIAN_SHEN_OFFSET={"{dz.zi}":4,"{dz.chou}":2,"{dz.yin}":0,"{dz.mao}":10,"{dz.chen}":8,"{dz.si}":6,"{dz.wu}":4,"{dz.wei}":2,"{dz.shen}":0,"{dz.you}":10,"{dz.xu}":8,"{dz.hai}":6};s.TIAN_SHEN_TYPE={"{sn.qingLong}":"{s.huangDao}","{sn.mingTang}":"{s.huangDao}","{sn.jinKui}":"{s.huangDao}","{sn.tianDe}":"{s.huangDao}","{sn.yuTang}":"{s.huangDao}","{sn.siMing}":"{s.huangDao}","{sn.tianXing}":"{s.heiDao}","{sn.zhuQue}":"{s.heiDao}","{sn.baiHu}":"{s.heiDao}","{sn.tianLao}":"{s.heiDao}","{sn.xuanWu}":"{s.heiDao}","{sn.gouChen}":"{s.heiDao}"};s.TIAN_SHEN_TYPE_LUCK={"{s.huangDao}":"{s.goodLuck}","{s.heiDao}":"{s.badLuck}"};s.LU={"{tg.jia}":"{dz.yin}","{tg.yi}":"{dz.mao}","{tg.bing}":"{dz.si}","{tg.ding}":"{dz.wu}","{tg.wu}":"{dz.si}","{tg.ji}":"{dz.wu}","{tg.geng}":"{dz.shen}","{tg.xin}":"{dz.you}","{tg.ren}":"{dz.hai}","{tg.gui}":"{dz.zi}","{dz.yin}":"{tg.jia}","{dz.mao}":"{tg.yi}","{dz.si}":"{tg.bing},{tg.wu}","{dz.wu}":"{tg.ding},{tg.ji}","{dz.shen}":"{tg.geng}","{dz.you}":"{tg.xin}","{dz.hai}":"{tg.ren}","{dz.zi}":"{tg.gui}"};s.PENGZU_GAN=["","{tg.jia}不开仓财物耗散","{tg.yi}不栽植千株不长","{tg.bing}不修灶必见灾殃","{tg.ding}不剃头头必生疮","{tg.wu}不受田田主不祥","{tg.ji}不破券二比并亡","{tg.geng}不经络织机虚张","{tg.xin}不合酱主人不尝","{tg.ren}不泱水更难提防","{tg.gui}不词讼理弱敌强"];s.PENGZU_ZHI=["","{dz.zi}不问卜自惹祸殃","{dz.chou}不冠带主不还乡","{dz.yin}不祭祀神鬼不尝","{dz.mao}不穿井水泉不香","{dz.chen}不哭泣必主重丧","{dz.si}不远行财物伏藏","{dz.wu}不苫盖屋主更张","{dz.wei}不服药毒气入肠","{dz.shen}不安床鬼祟入房","{dz.you}不会客醉坐颠狂","{dz.xu}不吃犬作怪上床","{dz.hai}不嫁娶不利新郎"];s.NUMBER=["{n.zero}","{n.one}","{n.two}","{n.three}","{n.four}","{n.five}","{n.six}","{n.seven}","{n.eight}","{n.nine}","{n.ten}","{n.eleven}","{n.twelve}"];s.MONTH=["","{m.one}","{m.two}","{m.three}","{m.four}","{m.five}","{m.six}","{m.seven}","{m.eight}","{m.nine}","{m.ten}","{m.eleven}","{m.twelve}"];s.SEASON=["","{od.first}{sz.chun}","{od.second}{sz.chun}","{od.third}{sz.chun}","{od.first}{sz.xia}","{od.second}{sz.xia}","{od.third}{sz.xia}","{od.first}{sz.qiu}","{od.second}{sz.qiu}","{od.third}{sz.qiu}","{od.first}{sz.dong}","{od.second}{sz.dong}","{od.third}{sz.dong}"];s.SHENGXIAO=["","{sx.rat}","{sx.ox}","{sx.tiger}","{sx.rabbit}","{sx.dragon}","{sx.snake}","{sx.horse}","{sx.goat}","{sx.monkey}","{sx.rooster}","{sx.dog}","{sx.pig}"];s.DAY=["","{d.one}","{d.two}","{d.three}","{d.four}","{d.five}","{d.six}","{d.seven}","{d.eight}","{d.nine}","{d.ten}","{d.eleven}","{d.twelve}","{d.thirteen}","{d.fourteen}","{d.fifteen}","{d.sixteen}","{d.seventeen}","{d.eighteen}","{d.nighteen}","{d.twenty}","{d.twentyOne}","{d.twentyTwo}","{d.twentyThree}","{d.twentyFour}","{d.twentyFive}","{d.twentySix}","{d.twentySeven}","{d.twentyEight}","{d.twentyNine}","{d.thirty}"];s.YUE_XIANG=["","{yx.shuo}","{yx.jiShuo}","{yx.eMeiXin}","{yx.eMeiXin}","{yx.eMei}","{yx.xi}","{yx.shangXian}","{yx.shangXian}","{yx.jiuYe}","{yx.night}","{yx.night}","{yx.night}","{yx.jianYingTu}","{yx.xiaoWang}","{yx.wang}","{yx.jiWang}","{yx.liDai}","{yx.juDai}","{yx.qinDai}","{yx.gengDai}","{yx.jianKuiTu}","{yx.xiaXian}","{yx.xiaXian}","{yx.youMing}","{yx.youMing}","{yx.eMeiCan}","{yx.eMeiCan}","{yx.can}","{yx.xiao}","{yx.hui}"];s.XIU={"{dz.shen}1":"{xx.bi}","{dz.shen}2":"{xx.yi}","{dz.shen}3":"{xx.ji}","{dz.shen}4":"{xx.kui}","{dz.shen}5":"{xx.gui}","{dz.shen}6":"{xx.di}","{dz.shen}0":"{xx.xu}","{dz.zi}1":"{xx.bi}","{dz.zi}2":"{xx.yi}","{dz.zi}3":"{xx.ji}","{dz.zi}4":"{xx.kui}","{dz.zi}5":"{xx.gui}","{dz.zi}6":"{xx.di}","{dz.zi}0":"{xx.xu}","{dz.chen}1":"{xx.bi}","{dz.chen}2":"{xx.yi}","{dz.chen}3":"{xx.ji}","{dz.chen}4":"{xx.kui}","{dz.chen}5":"{xx.gui}","{dz.chen}6":"{xx.di}","{dz.chen}0":"{xx.xu}","{dz.si}1":"{xx.wei}","{dz.si}2":"{xx.zi}","{dz.si}3":"{xx.zhen}","{dz.si}4":"{xx.dou}","{dz.si}5":"{xx.lou}","{dz.si}6":"{xx.liu}","{dz.si}0":"{xx.fang}","{dz.you}1":"{xx.wei}","{dz.you}2":"{xx.zi}","{dz.you}3":"{xx.zhen}","{dz.you}4":"{xx.dou}","{dz.you}5":"{xx.lou}","{dz.you}6":"{xx.liu}","{dz.you}0":"{xx.fang}","{dz.chou}1":"{xx.wei}","{dz.chou}2":"{xx.zi}","{dz.chou}3":"{xx.zhen}","{dz.chou}4":"{xx.dou}","{dz.chou}5":"{xx.lou}","{dz.chou}6":"{xx.liu}","{dz.chou}0":"{xx.fang}","{dz.yin}1":"{xx.xin}","{dz.yin}2":"{xx.shi}","{dz.yin}3":"{xx.can}","{dz.yin}4":"{xx.jiao}","{dz.yin}5":"{xx.niu}","{dz.yin}6":"{xx.vei}","{dz.yin}0":"{xx.xing}","{dz.wu}1":"{xx.xin}","{dz.wu}2":"{xx.shi}","{dz.wu}3":"{xx.can}","{dz.wu}4":"{xx.jiao}","{dz.wu}5":"{xx.niu}","{dz.wu}6":"{xx.vei}","{dz.wu}0":"{xx.xing}","{dz.xu}1":"{xx.xin}","{dz.xu}2":"{xx.shi}","{dz.xu}3":"{xx.can}","{dz.xu}4":"{xx.jiao}","{dz.xu}5":"{xx.niu}","{dz.xu}6":"{xx.vei}","{dz.xu}0":"{xx.xing}","{dz.hai}1":"{xx.zhang}","{dz.hai}2":"{xx.tail}","{dz.hai}3":"{xx.qiang}","{dz.hai}4":"{xx.jing}","{dz.hai}5":"{xx.kang}","{dz.hai}6":"{xx.nv}","{dz.hai}0":"{xx.mao}","{dz.mao}1":"{xx.zhang}","{dz.mao}2":"{xx.tail}","{dz.mao}3":"{xx.qiang}","{dz.mao}4":"{xx.jing}","{dz.mao}5":"{xx.kang}","{dz.mao}6":"{xx.nv}","{dz.mao}0":"{xx.mao}","{dz.wei}1":"{xx.zhang}","{dz.wei}2":"{xx.tail}","{dz.wei}3":"{xx.qiang}","{dz.wei}4":"{xx.jing}","{dz.wei}5":"{xx.kang}","{dz.wei}6":"{xx.nv}","{dz.wei}0":"{xx.mao}"};s.XIU_LUCK={"{xx.jiao}":"{s.goodLuck}","{xx.kang}":"{s.badLuck}","{xx.di}":"{s.badLuck}","{xx.fang}":"{s.goodLuck}","{xx.xin}":"{s.badLuck}","{xx.tail}":"{s.goodLuck}","{xx.ji}":"{s.goodLuck}","{xx.dou}":"{s.goodLuck}","{xx.niu}":"{s.badLuck}","{xx.nv}":"{s.badLuck}","{xx.xu}":"{s.badLuck}","{xx.wei}":"{s.badLuck}","{xx.shi}":"{s.goodLuck}","{xx.qiang}":"{s.goodLuck}","{xx.kui}":"{s.badLuck}","{xx.lou}":"{s.goodLuck}","{xx.vei}":"{s.goodLuck}","{xx.mao}":"{s.badLuck}","{xx.bi}":"{s.goodLuck}","{xx.zi}":"{s.badLuck}","{xx.can}":"{s.goodLuck}","{xx.jing}":"{s.goodLuck}","{xx.gui}":"{s.badLuck}","{xx.liu}":"{s.badLuck}","{xx.xing}":"{s.badLuck}","{xx.zhang}":"{s.goodLuck}","{xx.yi}":"{s.badLuck}","{xx.zhen}":"{s.goodLuck}"};s.XIU_SONG={"{xx.jiao}":"角星造作主荣昌，外进田财及女郎，嫁娶婚姻出贵子，文人及第见君王，惟有埋葬不可用，三年之后主瘟疫，起工修筑坟基地，堂前立见主人凶。","{xx.kang}":"亢星造作长房当，十日之中主有殃，田地消磨官失职，接运定是虎狼伤，嫁娶婚姻用此日，儿孙新妇守空房，埋葬若还用此日，当时害祸主重伤。","{xx.di}":"氐星造作主灾凶，费尽田园仓库空，埋葬不可用此日，悬绳吊颈祸重重，若是婚姻离别散，夜招浪子入房中，行船必定遭沉没，更生聋哑子孙穷。","{xx.fang}":"房星造作田园进，钱财牛马遍山岗，更招外处田庄宅，荣华富贵福禄康，埋葬若然用此日，高官进职拜君王，嫁娶嫦娥至月殿，三年抱子至朝堂。","{xx.xin}":"心星造作大为凶，更遭刑讼狱囚中，忤逆官非宅产退，埋葬卒暴死相从，婚姻若是用此日，子死儿亡泪满胸，三年之内连遭祸，事事教君没始终。","{xx.tail}":"尾星造作主天恩，富贵荣华福禄增，招财进宝兴家宅，和合婚姻贵子孙，埋葬若能依此日，男清女正子孙兴，开门放水招田宅，代代公侯远播名。","{xx.ji}":"箕星造作主高强，岁岁年年大吉昌，埋葬修坟大吉利，田蚕牛马遍山岗，开门放水招田宅，箧满金银谷满仓，福荫高官加禄位，六亲丰禄乐安康。","{xx.dou}":"斗星造作主招财，文武官员位鼎台，田宅家财千万进，坟堂修筑贵富来，开门放水招牛马，旺蚕男女主和谐，遇此吉宿来照护，时支福庆永无灾。","{xx.niu}":"牛星造作主灾危，九横三灾不可推，家宅不安人口退，田蚕不利主人衰，嫁娶婚姻皆自损，金银财谷渐无之，若是开门并放水，牛猪羊马亦伤悲。","{xx.nv}":"女星造作损婆娘，兄弟相嫌似虎狼，埋葬生灾逢鬼怪，颠邪疾病主瘟惶，为事遭官财失散，泻利留连不可当，开门放水用此日，全家财散主离乡。","{xx.xu}":"虚星造作主灾殃，男女孤眠不一双，内乱风声无礼节，儿孙媳妇伴人床，开门放水遭灾祸，虎咬蛇伤又卒亡，三三五五连年病，家破人亡不可当。","{xx.wei}":"危星不可造高楼，自遭刑吊见血光，三年孩子遭水厄，后生出外永不还，埋葬若还逢此日，周年百日取高堂，三年两载一悲伤，开门放水到官堂。","{xx.shi}":"室星修造进田牛，儿孙代代近王侯，家贵荣华天上至，寿如彭祖八千秋，开门放水招财帛，和合婚姻生贵儿，埋葬若能依此日，门庭兴旺福无休。","{xx.qiang}":"壁星造作主增财，丝蚕大熟福滔天，奴婢自来人口进，开门放水出英贤，埋葬招财官品进，家中诸事乐陶然，婚姻吉利主贵子，早播名誉著祖鞭。","{xx.kui}":"奎星造作得祯祥，家内荣和大吉昌，若是埋葬阴卒死，当年定主两三伤，看看军令刑伤到，重重官事主瘟惶，开门放水遭灾祸，三年两次损儿郎。","{xx.lou}":"娄星修造起门庭，财旺家和事事兴，外进钱财百日进，一家兄弟播高名，婚姻进益生贵子，玉帛金银箱满盈，放水开门皆吉利，男荣女贵寿康宁。","{xx.vei}":"胃星造作事如何，家贵荣华喜气多，埋葬贵临官禄位，夫妇齐眉永保康，婚姻遇此家富贵，三灾九祸不逢他，从此门前多吉庆，儿孙代代拜金阶。","{xx.mao}":"昴星造作进田牛，埋葬官灾不得休，重丧二日三人死，尽卖田园不记增，开门放水招灾祸，三岁孩儿白了头，婚姻不可逢此日，死别生离是可愁。","{xx.bi}":"毕星造作主光前，买得田园有余钱，埋葬此日添官职，田蚕大熟永丰年，开门放水多吉庆，合家人口得安然，婚姻若得逢此日，生得孩儿福寿全。","{xx.zi}":"觜星造作有徒刑，三年必定主伶丁，埋葬卒死多因此，取定寅年使杀人，三丧不止皆由此，一人药毒二人身，家门田地皆退败，仓库金银化作尘。","{xx.can}":"参星造作旺人家，文星照耀大光华，只因造作田财旺，埋葬招疾哭黄沙，开门放水加官职，房房子孙见田加，婚姻许遁遭刑克，男女朝开幕落花。","{xx.jing}":"井星造作旺蚕田，金榜题名第一光，埋葬须防惊卒死，狂颠风疾入黄泉，开门放水招财帛，牛马猪羊旺莫言，贵人田塘来入宅，儿孙兴旺有余钱。","{xx.gui}":"鬼星起造卒人亡，堂前不见主人郎，埋葬此日官禄至，儿孙代代近君王，开门放水须伤死，嫁娶夫妻不久长，修土筑墙伤产女，手扶双女泪汪汪。","{xx.liu}":"柳星造作主遭官，昼夜偷闭不暂安，埋葬瘟惶多疾病，田园退尽守冬寒，开门放水遭聋瞎，腰驼背曲似弓弯，更有棒刑宜谨慎，妇人随客走盘桓。","{xx.xing}":"星宿日好造新房，进职加官近帝王，不可埋葬并放水，凶星临位女人亡，生离死别无心恋，要自归休别嫁郎，孔子九曲殊难度，放水开门天命伤。","{xx.zhang}":"张星日好造龙轩，年年并见进庄田，埋葬不久升官职，代代为官近帝前，开门放水招财帛，婚姻和合福绵绵，田蚕人满仓库满，百般顺意自安然。","{xx.yi}":"翼星不利架高堂，三年二载见瘟惶，埋葬若还逢此日，子孙必定走他乡，婚姻此日不宜利，归家定是不相当，开门放水家须破，少女恋花贪外郎。","{xx.zhen}":"轸星临水造龙宫，代代为官受皇封，富贵荣华增寿禄，库满仓盈自昌隆，埋葬文昌来照助，宅舍安宁不见凶，更有为官沾帝宠，婚姻龙子入龙宫。"};s.ZHENG={"{xx.jiao}":"{wx.mu}","{xx.jing}":"{wx.mu}","{xx.kui}":"{wx.mu}","{xx.dou}":"{wx.mu}","{xx.kang}":"{wx.jin}","{xx.gui}":"{wx.jin}","{xx.lou}":"{wx.jin}","{xx.niu}":"{wx.jin}","{xx.di}":"{wx.tu}","{xx.liu}":"{wx.tu}","{xx.vei}":"{wx.tu}","{xx.nv}":"{wx.tu}","{xx.fang}":"{wx.ri}","{xx.xing}":"{wx.ri}","{xx.mao}":"{wx.ri}","{xx.xu}":"{wx.ri}","{xx.xin}":"{wx.yue}","{xx.zhang}":"{wx.yue}","{xx.bi}":"{wx.yue}","{xx.wei}":"{wx.yue}","{xx.tail}":"{wx.huo}","{xx.yi}":"{wx.huo}","{xx.zi}":"{wx.huo}","{xx.shi}":"{wx.huo}","{xx.ji}":"{wx.shui}","{xx.zhen}":"{wx.shui}","{xx.can}":"{wx.shui}","{xx.qiang}":"{wx.shui}"};s.ANIMAL={"{xx.jiao}":"{dw.jiao}","{xx.dou}":"{dw.xie}","{xx.kui}":"{dw.lang}","{xx.jing}":"{dw.han}","{xx.kang}":"{dw.long}","{xx.niu}":"{dw.niu}","{xx.lou}":"{dw.gou}","{xx.gui}":"{dw.yang}","{xx.nv}":"{dw.fu}","{xx.di}":"{dw.he}","{xx.vei}":"{dw.zhi}","{xx.liu}":"{dw.zhang}","{xx.fang}":"{dw.tu}","{xx.xu}":"{dw.shu}","{xx.mao}":"{dw.ji}","{xx.xing}":"{dw.ma}","{xx.xin}":"{dw.huLi}","{xx.wei}":"{dw.yan}","{xx.bi}":"{dw.wu}","{xx.zhang}":"{dw.lu}","{xx.tail}":"{dw.hu}","{xx.shi}":"{dw.zhu}","{xx.zi}":"{dw.hou}","{xx.yi}":"{dw.she}","{xx.ji}":"{dw.bao}","{xx.qiang}":"{dw.xu}","{xx.can}":"{dw.yuan}","{xx.zhen}":"{dw.yin}"};s.GONG={"{xx.jiao}":"{ps.dong}","{xx.jing}":"{ps.nan}","{xx.kui}":"{ps.xi}","{xx.dou}":"{ps.bei}","{xx.kang}":"{ps.dong}","{xx.gui}":"{ps.nan}","{xx.lou}":"{ps.xi}","{xx.niu}":"{ps.bei}","{xx.di}":"{ps.dong}","{xx.liu}":"{ps.nan}","{xx.vei}":"{ps.xi}","{xx.nv}":"{ps.bei}","{xx.fang}":"{ps.dong}","{xx.xing}":"{ps.nan}","{xx.mao}":"{ps.xi}","{xx.xu}":"{ps.bei}","{xx.xin}":"{ps.dong}","{xx.zhang}":"{ps.nan}","{xx.bi}":"{ps.xi}","{xx.wei}":"{ps.bei}","{xx.tail}":"{ps.dong}","{xx.yi}":"{ps.nan}","{xx.zi}":"{ps.xi}","{xx.shi}":"{ps.bei}","{xx.ji}":"{ps.dong}","{xx.zhen}":"{ps.nan}","{xx.can}":"{ps.xi}","{xx.qiang}":"{ps.bei}"};s.SHOU={"{ps.dong}":"{sn.qingLong}","{ps.nan}":"{sn.zhuQue}","{ps.xi}":"{sn.baiHu}","{ps.bei}":"{sn.xuanWu}"};s.FESTIVAL={"1-1":"{jr.chunJie}","1-15":"{jr.yuanXiao}","2-2":"{jr.longTou}","5-5":"{jr.duanWu}","7-7":"{jr.qiXi}","8-15":"{jr.zhongQiu}","9-9":"{jr.chongYang}","12-8":"{jr.laBa}"};s.OTHER_FESTIVAL={"1-4":["接神日"],"1-5":["隔开日"],"1-7":["人日"],"1-8":["谷日","顺星节"],"1-9":["天日"],"1-10":["地日"],"1-20":["天穿节"],"1-25":["填仓节"],"1-30":["正月晦"],"2-1":["中和节"],"2-2":["社日节"],"3-3":["上巳节"],"5-20":["分龙节"],"5-25":["会龙节"],"6-6":["天贶节"],"6-24":["观莲节"],"6-25":["五谷母节"],"7-15":["中元节"],"7-22":["财神节"],"7-29":["地藏节"],"8-1":["天灸日"],"10-1":["寒衣节"],"10-10":["十成节"],"10-15":["下元节"],"12-7":["驱傩日"],"12-16":["尾牙"],"12-24":["祭灶日"]};s.CHONG=["{dz.wu}","{dz.wei}","{dz.shen}","{dz.you}","{dz.xu}","{dz.hai}","{dz.zi}","{dz.chou}","{dz.yin}","{dz.mao}","{dz.chen}","{dz.si}"];s.CHONG_GAN=["{tg.wu}","{tg.ji}","{tg.geng}","{tg.xin}","{tg.ren}","{tg.gui}","{tg.jia}","{tg.yi}","{tg.bing}","{tg.ding}"];s.CHONG_GAN_TIE=["{tg.ji}","{tg.wu}","{tg.xin}","{tg.geng}","{tg.gui}","{tg.ren}","{tg.yi}","{tg.jia}","{tg.ding}","{tg.bing}"];s.CHONG_GAN_4=["{tg.geng}","{tg.xin}","{tg.ren}","{tg.gui}","","","{tg.jia}","{tg.yi}","{tg.bing}","{tg.ding}"];s.HE_GAN_5=["{tg.ji}","{tg.geng}","{tg.xin}","{tg.ren}","{tg.gui}","{tg.jia}","{tg.yi}","{tg.bing}","{tg.ding}","{tg.wu}"];s.HE_ZHI_6=["{dz.chou}","{dz.zi}","{dz.hai}","{dz.xu}","{dz.you}","{dz.shen}","{dz.wei}","{dz.wu}","{dz.si}","{dz.chen}","{dz.mao}","{dz.yin}"];s.SHA={"{dz.zi}":"{ps.nan}","{dz.chou}":"{ps.dong}","{dz.yin}":"{ps.bei}","{dz.mao}":"{ps.xi}","{dz.chen}":"{ps.nan}","{dz.si}":"{ps.dong}","{dz.wu}":"{ps.bei}","{dz.wei}":"{ps.xi}","{dz.shen}":"{ps.nan}","{dz.you}":"{ps.dong}","{dz.xu}":"{ps.bei}","{dz.hai}":"{ps.xi}"};s.POSITION_DESC={"{bg.kan}":"{ps.zhengBei}","{bg.gen}":"{ps.dongBei}","{bg.zhen}":"{ps.zhengDong}","{bg.xun}":"{ps.dongNan}","{bg.li}":"{ps.zhengNan}","{bg.kun}":"{ps.xiNan}","{bg.dui}":"{ps.zhengXi}","{bg.qian}":"{ps.xiBei}","{ps.center}":"{ps.zhong}"};s.NAYIN={"{jz.jiaZi}":"{ny.haiZhong}{wx.jin}","{jz.jiaWu}":"{ny.shaZhong}{wx.jin}","{jz.bingYin}":"{ny.luZhong}{wx.huo}","{jz.bingShen}":"{ny.shanXia}{wx.huo}","{jz.wuChen}":"{ny.daLin}{wx.mu}","{jz.wuXu}":"{ny.pingDi}{wx.mu}","{jz.gengWu}":"{ny.luPang}{wx.tu}","{jz.gengZi}":"{ny.biShang}{wx.tu}","{jz.renShen}":"{ny.jianFeng}{wx.jin}","{jz.renYin}":"{ny.jinBo}{wx.jin}","{jz.jiaXu}":"{ny.shanTou}{wx.huo}","{jz.jiaChen}":"{ny.fuDeng}{wx.huo}","{jz.bingZi}":"{ny.jianXia}{wx.shui}","{jz.bingWu}":"{ny.tianHe}{wx.shui}","{jz.wuYin}":"{ny.chengTou}{wx.tu}","{jz.wuShen}":"{ny.daYi}{wx.tu}","{jz.gengChen}":"{ny.baiLa}{wx.jin}","{jz.gengXu}":"{ny.chaiChuan}{wx.jin}","{jz.renWu}":"{ny.yangLiu}{wx.mu}","{jz.renZi}":"{ny.sangZhe}{wx.mu}","{jz.jiaShen}":"{ny.quanZhong}{wx.shui}","{jz.jiaYin}":"{ny.daXi}{wx.shui}","{jz.bingXu}":"{ny.wuShang}{wx.tu}","{jz.bingChen}":"{ny.shaZhong}{wx.tu}","{jz.wuZi}":"{ny.piLi}{wx.huo}","{jz.wuWu}":"{ny.tianShang}{wx.huo}","{jz.gengYin}":"{ny.songBo}{wx.mu}","{jz.gengShen}":"{ny.shiLiu}{wx.mu}","{jz.renChen}":"{ny.changLiu}{wx.shui}","{jz.renXu}":"{ny.daHai}{wx.shui}","{jz.yiChou}":"{ny.haiZhong}{wx.jin}","{jz.yiWei}":"{ny.shaZhong}{wx.jin}","{jz.dingMao}":"{ny.luZhong}{wx.huo}","{jz.dingYou}":"{ny.shanXia}{wx.huo}","{jz.jiSi}":"{ny.daLin}{wx.mu}","{jz.jiHai}":"{ny.pingDi}{wx.mu}","{jz.xinWei}":"{ny.luPang}{wx.tu}","{jz.xinChou}":"{ny.biShang}{wx.tu}","{jz.guiYou}":"{ny.jianFeng}{wx.jin}","{jz.guiMao}":"{ny.jinBo}{wx.jin}","{jz.yiHai}":"{ny.shanTou}{wx.huo}","{jz.yiSi}":"{ny.fuDeng}{wx.huo}","{jz.dingChou}":"{ny.jianXia}{wx.shui}","{jz.dingWei}":"{ny.tianHe}{wx.shui}","{jz.jiMao}":"{ny.chengTou}{wx.tu}","{jz.jiYou}":"{ny.daYi}{wx.tu}","{jz.xinSi}":"{ny.baiLa}{wx.jin}","{jz.xinHai}":"{ny.chaiChuan}{wx.jin}","{jz.guiWei}":"{ny.yangLiu}{wx.mu}","{jz.guiChou}":"{ny.sangZhe}{wx.mu}","{jz.yiYou}":"{ny.quanZhong}{wx.shui}","{jz.yiMao}":"{ny.daXi}{wx.shui}","{jz.dingHai}":"{ny.wuShang}{wx.tu}","{jz.dingSi}":"{ny.shaZhong}{wx.tu}","{jz.jiChou}":"{ny.piLi}{wx.huo}","{jz.jiWei}":"{ny.tianShang}{wx.huo}","{jz.xinMao}":"{ny.songBo}{wx.mu}","{jz.xinYou}":"{ny.shiLiu}{wx.mu}","{jz.guiSi}":"{ny.changLiu}{wx.shui}","{jz.guiHai}":"{ny.daHai}{wx.shui}"};s.WU_XING_GAN={"{tg.jia}":"{wx.mu}","{tg.yi}":"{wx.mu}","{tg.bing}":"{wx.huo}","{tg.ding}":"{wx.huo}","{tg.wu}":"{wx.tu}","{tg.ji}":"{wx.tu}","{tg.geng}":"{wx.jin}","{tg.xin}":"{wx.jin}","{tg.ren}":"{wx.shui}","{tg.gui}":"{wx.shui}"};s.WU_XING_ZHI={"{dz.yin}":"{wx.mu}","{dz.mao}":"{wx.mu}","{dz.si}":"{wx.huo}","{dz.wu}":"{wx.huo}","{dz.chen}":"{wx.tu}","{dz.chou}":"{wx.tu}","{dz.xu}":"{wx.tu}","{dz.wei}":"{wx.tu}","{dz.shen}":"{wx.jin}","{dz.you}":"{wx.jin}","{dz.hai}":"{wx.shui}","{dz.zi}":"{wx.shui}"};s.SHI_SHEN={"{tg.jia}{tg.jia}":"{ss.biJian}","{tg.jia}{tg.yi}":"{ss.jieCai}","{tg.jia}{tg.bing}":"{ss.shiShen}","{tg.jia}{tg.ding}":"{ss.shangGuan}","{tg.jia}{tg.wu}":"{ss.pianCai}","{tg.jia}{tg.ji}":"{ss.zhengCai}","{tg.jia}{tg.geng}":"{ss.qiSha}","{tg.jia}{tg.xin}":"{ss.zhengGuan}","{tg.jia}{tg.ren}":"{ss.pianYin}","{tg.jia}{tg.gui}":"{ss.zhengYin}","{tg.yi}{tg.yi}":"{ss.biJian}","{tg.yi}{tg.jia}":"{ss.jieCai}","{tg.yi}{tg.ding}":"{ss.shiShen}","{tg.yi}{tg.bing}":"{ss.shangGuan}","{tg.yi}{tg.ji}":"{ss.pianCai}","{tg.yi}{tg.wu}":"{ss.zhengCai}","{tg.yi}{tg.xin}":"{ss.qiSha}","{tg.yi}{tg.geng}":"{ss.zhengGuan}","{tg.yi}{tg.gui}":"{ss.pianYin}","{tg.yi}{tg.ren}":"{ss.zhengYin}","{tg.bing}{tg.bing}":"{ss.biJian}","{tg.bing}{tg.ding}":"{ss.jieCai}","{tg.bing}{tg.wu}":"{ss.shiShen}","{tg.bing}{tg.ji}":"{ss.shangGuan}","{tg.bing}{tg.geng}":"{ss.pianCai}","{tg.bing}{tg.xin}":"{ss.zhengCai}","{tg.bing}{tg.ren}":"{ss.qiSha}","{tg.bing}{tg.gui}":"{ss.zhengGuan}","{tg.bing}{tg.jia}":"{ss.pianYin}","{tg.bing}{tg.yi}":"{ss.zhengYin}","{tg.ding}{tg.ding}":"{ss.biJian}","{tg.ding}{tg.bing}":"{ss.jieCai}","{tg.ding}{tg.ji}":"{ss.shiShen}","{tg.ding}{tg.wu}":"{ss.shangGuan}","{tg.ding}{tg.xin}":"{ss.pianCai}","{tg.ding}{tg.geng}":"{ss.zhengCai}","{tg.ding}{tg.gui}":"{ss.qiSha}","{tg.ding}{tg.ren}":"{ss.zhengGuan}","{tg.ding}{tg.yi}":"{ss.pianYin}","{tg.ding}{tg.jia}":"{ss.zhengYin}","{tg.wu}{tg.wu}":"{ss.biJian}","{tg.wu}{tg.ji}":"{ss.jieCai}","{tg.wu}{tg.geng}":"{ss.shiShen}","{tg.wu}{tg.xin}":"{ss.shangGuan}","{tg.wu}{tg.ren}":"{ss.pianCai}","{tg.wu}{tg.gui}":"{ss.zhengCai}","{tg.wu}{tg.jia}":"{ss.qiSha}","{tg.wu}{tg.yi}":"{ss.zhengGuan}","{tg.wu}{tg.bing}":"{ss.pianYin}","{tg.wu}{tg.ding}":"{ss.zhengYin}","{tg.ji}{tg.ji}":"{ss.biJian}","{tg.ji}{tg.wu}":"{ss.jieCai}","{tg.ji}{tg.xin}":"{ss.shiShen}","{tg.ji}{tg.geng}":"{ss.shangGuan}","{tg.ji}{tg.gui}":"{ss.pianCai}","{tg.ji}{tg.ren}":"{ss.zhengCai}","{tg.ji}{tg.yi}":"{ss.qiSha}","{tg.ji}{tg.jia}":"{ss.zhengGuan}","{tg.ji}{tg.ding}":"{ss.pianYin}","{tg.ji}{tg.bing}":"{ss.zhengYin}","{tg.geng}{tg.geng}":"{ss.biJian}","{tg.geng}{tg.xin}":"{ss.jieCai}","{tg.geng}{tg.ren}":"{ss.shiShen}","{tg.geng}{tg.gui}":"{ss.shangGuan}","{tg.geng}{tg.jia}":"{ss.pianCai}","{tg.geng}{tg.yi}":"{ss.zhengCai}","{tg.geng}{tg.bing}":"{ss.qiSha}","{tg.geng}{tg.ding}":"{ss.zhengGuan}","{tg.geng}{tg.wu}":"{ss.pianYin}","{tg.geng}{tg.ji}":"{ss.zhengYin}","{tg.xin}{tg.xin}":"{ss.biJian}","{tg.xin}{tg.geng}":"{ss.jieCai}","{tg.xin}{tg.gui}":"{ss.shiShen}","{tg.xin}{tg.ren}":"{ss.shangGuan}","{tg.xin}{tg.yi}":"{ss.pianCai}","{tg.xin}{tg.jia}":"{ss.zhengCai}","{tg.xin}{tg.ding}":"{ss.qiSha}","{tg.xin}{tg.bing}":"{ss.zhengGuan}","{tg.xin}{tg.ji}":"{ss.pianYin}","{tg.xin}{tg.wu}":"{ss.zhengYin}","{tg.ren}{tg.ren}":"{ss.biJian}","{tg.ren}{tg.gui}":"{ss.jieCai}","{tg.ren}{tg.jia}":"{ss.shiShen}","{tg.ren}{tg.yi}":"{ss.shangGuan}","{tg.ren}{tg.bing}":"{ss.pianCai}","{tg.ren}{tg.ding}":"{ss.zhengCai}","{tg.ren}{tg.wu}":"{ss.qiSha}","{tg.ren}{tg.ji}":"{ss.zhengGuan}","{tg.ren}{tg.geng}":"{ss.pianYin}","{tg.ren}{tg.xin}":"{ss.zhengYin}","{tg.gui}{tg.gui}":"{ss.biJian}","{tg.gui}{tg.ren}":"{ss.jieCai}","{tg.gui}{tg.yi}":"{ss.shiShen}","{tg.gui}{tg.jia}":"{ss.shangGuan}","{tg.gui}{tg.ding}":"{ss.pianCai}","{tg.gui}{tg.bing}":"{ss.zhengCai}","{tg.gui}{tg.ji}":"{ss.qiSha}","{tg.gui}{tg.wu}":"{ss.zhengGuan}","{tg.gui}{tg.xin}":"{ss.pianYin}","{tg.gui}{tg.geng}":"{ss.zhengYin}"};s.ZHI_HIDE_GAN={"{dz.zi}":["{tg.gui}"],"{dz.chou}":["{tg.ji}","{tg.gui}","{tg.xin}"],"{dz.yin}":["{tg.jia}","{tg.bing}","{tg.wu}"],"{dz.mao}":["{tg.yi}"],"{dz.chen}":["{tg.wu}","{tg.yi}","{tg.gui}"],"{dz.si}":["{tg.bing}","{tg.geng}","{tg.wu}"],"{dz.wu}":["{tg.ding}","{tg.ji}"],"{dz.wei}":["{tg.ji}","{tg.ding}","{tg.yi}"],"{dz.shen}":["{tg.geng}","{tg.ren}","{tg.wu}"],"{dz.you}":["{tg.xin}"],"{dz.xu}":["{tg.wu}","{tg.xin}","{tg.ding}"],"{dz.hai}":["{tg.ren}","{tg.jia}"]};s.YI_JI=["{yj.jiSi}","{yj.qiFu}","{yj.qiuSi}","{yj.kaiGuang}","{yj.suHui}","{yj.qiJiao}","{yj.zhaiJiao}","{yj.muYu}","{yj.chouShen}","{yj.zaoMiao}","{yj.siZhao}","{yj.fenXiang}","{yj.xieTu}","{yj.chuHuo}","{yj.diaoKe}","{yj.jiaQu}","{yj.DingHun}","{yj.naCai}","{yj.wenMing}","{yj.naXu}","{yj.guiNing}","{yj.anChuang}","{yj.heZhang}","{yj.guanJi}","{yj.dingMeng}","{yj.jinRenKou}","{yj.caiYi}","{yj.wanMian}","{yj.kaiRong}","{yj.xiuFen}","{yj.qiZuan}","{yj.poTu}","{yj.anZang}","{yj.liBei}","{yj.chengFu}","{yj.chuFu}","{yj.kaiShengFen}","{yj.heShouMu}","{yj.ruLian}","{yj.yiJiu}","{yj.puDu}","{yj.ruZhai}","{yj.anXiang}","{yj.anMen}","{yj.xiuZao}","{yj.qiJi}","{yj.dongTu}","{yj.shangLiang}","{yj.shuZhu}","{yj.kaiJing}","{yj.zuoBei}","{yj.chaiXie}","{yj.poWu}","{yj.huaiYuan}","{yj.buYuan}","{yj.faMuZuoLiang}","{yj.zuoZhao}","{yj.jieChu}","{yj.kaiZhuYan}","{yj.chuanPing}","{yj.gaiWuHeJi}","{yj.kaiCe}","{yj.zaoCang}","{yj.saiXue}","{yj.pingZhi}","{yj.zaoQiao}","{yj.zuoCe}","{yj.zhuDi}","{yj.kaiChi}","{yj.faMu}","{yj.kaiQu}","{yj.jueJing}","{yj.saoShe}","{yj.fangShui}","{yj.zaoWu}","{yj.heJi}","{yj.zaoChuChou}","{yj.xiuMen}","{yj.dingSang}","{yj.zuoLiang}","{yj.xiuShi}","{yj.jiaMa}","{yj.kaiShi}","{yj.guaBian}","{yj.naChai}","{yj.qiuCai}","{yj.kaiCang}","{yj.maiChe}","{yj.zhiChan}","{yj.guYong}","{yj.chuHuoCai}","{yj.anJiXie}","{yj.zaoCheQi}","{yj.jingLuo}","{yj.yunNiang}","{yj.zuoRan}","{yj.guZhu}","{yj.zaoChuan}","{yj.geMi}","{yj.zaiZhong}","{yj.quYu}","{yj.jieWang}","{yj.muYang}","{yj.anDuiWei}","{yj.xiYi}","{yj.ruXue}","{yj.liFa}","{yj.tanBing}","{yj.jianGui}","{yj.chengChuan}","{yj.duShui}","{yj.zhenJiu}","{yj.chuXing}","{yj.yiXi}","{yj.fenJu}","{yj.TiTou}","{yj.zhengShou}","{yj.naChu}","{yj.buZhuo}","{yj.tianLie}","{yj.jiaoNiuMa}","{yj.huiQinYou}","{yj.fuRen}","{yj.qiuYi}","{yj.zhiBing}","{yj.ciSong}","{yj.qiJiDongTu}","{yj.poWuHuaiYuan}","{yj.gaiWu}","{yj.zaoCangKu}","{yj.liQuanJiaoYi}","{yj.jiaoYi}","{yj.liQuan}","{yj.anJi}","{yj.huiYou}","{yj.qiuYiLiaoBing}","{yj.zhuShi}","{yj.yuShi}","{yj.xingSang}","{yj.duanYi}","{yj.guiXiu}","{s.none}"];s.DAY_YI_JI="30=192531010D:838454151A4C200C1E23221D212726,030F522E1F00=2430000C18:8319000776262322200C1E1D,06292C2E1F04=32020E1A26:7917155B0001025D,0F522E38201D=162E3A0A22:790F181113332C2E2D302F1554,7001203810=0E1A263202:79026A17657603,522E201F05=0D19250131:7911192C2E302F00030401060F1571292A75,707C20522F=0C18243000:4F2C2E2B383F443D433663,0F01478A20151D=0E1A320226:3840,0001202B892F=14202C3808:3807504089,8829=0E1A263202:383940,6370018A75202B454F6605=32020E1A26:38394089,0001202B22=16223A0A2E:384C,8A2020=2B3707131F:2C2E5B000739337C38802D44484C2425201F1E272621,5229701535=121E2A3606:2C2E2D2B156343364C,0F4729710D708A20036A1904=0D19250131:5040262789,0F7129033B=202C380814:5040000738,0F7D7C584F012063452B35=1A2632020E:50400089,8813=1A2632020E:69687011180F791966762627201E,0352292E8034=182430000C:291503000D332E53261F2075,0F5238584F450B=000C182430:297170192C2E2D2F2B3E363F4C,0F521563200103470B=131F2B3707:297115030102195283840D332C2E,0F1F5863201D8A02=222E3A0A16:261F1E20232289,52290058363F32=16222E3A0A:261F201E232289,8D39=0D19310125:262322271E201D21,52450F4F09=0D19253101:262322271E202189,1F4526=16222E3A0A:262322271F1E20,712906=0F1B273303:17262322274050,80387C6B2C=0915212D39:1707702C2E71291F20,0F52000106111D15=16222E3A0A:170007386A7448363F261F1E,030F79636F2026=030F1B2733:1784832C2E5B26201F,0F010D2913=182430000C:175447440D15838477656A49,2B2E1F8A202228=101C283404:70504C7889,8803=0D19250131:700F181126151E20001A7919,8D2F=0915212D39:705283845B0D2F71,0F202E4106=3606121E2A:70786289,06802E1F23=1824000C30:70076A363F,292017=202C380814:700718111A302F717566,0F2B2E2026=3B0B17232F:70545283842E71291A7933192A5D5A5040,090C384F45208A1D6B38=212D390915:7039170F45513A2C2E7129242526271F201D,00010352153A=15212D3909:703911170E2C2E2D2F4B15712952633D,092B8A2027=010D192531:702D155483840F63262720,53292F017D4F38442B2E1F4717=16222E3A0A:705C4C39171A4F0E7971295B5248,0F2E1F1D37=1A2632020E:2E260F27201F,523815292F1A22=0E1A260232:64262322271F2021,0F2F293822=2F3B0B1723:161A0F1526271F4C,586103473818=2430000C18:161A7889,292E1F0F386131=17232F3B0B:04795B3F651A5D,0F5201062016=14202C3808:04170F79195D1A637566363F76,01522E8A2039=132B37071F:0470170F191A134C8384662426232227201E,8D08=0D19253101:040370181123220F1326271E2021,29153B=0D19310125:040307177938494C,0F26207017=0E2632021A:0403010218111A17332C2E2D2B15713E6575,45382064291D=142C380820:04033918110F0D2C2E7129332D2B72528384547566,8D1C=1830000C24:040318111A17332C15290D200C7A,4745063835=0F2733031B:040318111A16175B795452848315302F6563395D,387029202E=14202C3808:04031975363F6366,0F5401202C5283842E2F1E=0E1A320226:0403080618111A16332E2F152A09537919702C5445490D75072B,8063203820=182430000C:04067033392C7161262322271E1D210C,8D2F=101C283404:3F4889,881C=2733030F1B:3F74397677658988,0F3847201D=293505111D:3F8B657789,0F2029702E7D35=111D293505:3F8B6589,1F200A=020E1A2632:3F656477,0F2B71292005=111D290535:3F6589,8810=0F1B273303:3F88,2B38200F1C=293505111D:0F83843D363F776424,15462F2C520329712A=0F1B273303:0F17795B54838458,52807C3811=121E2A3606:0F172C2E387129363F7566512D4E4461,01034752203A=172F3B0B23:0F171511793F76584C,0347200C1D20=2D39091521:0F175B3975660745514F2B4825201E211D,010352292E2E=0F1B273303:0F170070792C2E261F,040341232228=05111D2935:0F1700707129385C363F3D1F1E232226,80412B202F14=14202C3808:0F17000728705448757A,522E1F15562F05=30000C1824:0F17000102061979454F3A15477677,241F8A2021=2F3B0B1723:0F17000102060370392E52838453331F,452F2C266A79292B203810=0C18243000:0F170001020E032A70692C2E302F802D2B0D7129474C201F2322,5211183809615D34=1A2632020E:0F171170792F5B1566770001032C2B802D,29387C207134=14202C3808:0F0D33000103452E528384297115752620,63386F7014=15212D3909:0F7045332C2E71201F1D21,4701155229530327=101C283404:0F70161715232238838426271F20,7D035219=121E2A3606:0F705B0004037C5D15653F1F26,522B473809=131F2B0737:0F705215261E20,012E1F25=182430000C:0F707B7C00012F75,52201B=2531010D19:0F706A151E201D528384544466,47010C2E292F2C3820=14202C3808:0F707500261E20,382E1F05=3606121E2A:0F161A17452F0D33712C2E2B5443633F,150170208A0327=0E1A263202:0F150370002E0D3979528384532971331F1E20,477D0D=06121E2A36:0F5B8370000102060403161A494447,386A418A201A=17232F3B0B:0F03700D332C2E2971152F52838463,01004547380C26=101C283404:0F03700D33195284835329711563,01260038206B0E=131F2B3707:0F03706A4F0D332C528384532E29711563,4500750F=131F2B3707:0F0370010239332E2C19528384532971156375262720,8D18=17232F3B0B:0F0370390D332C192E2971637547202322,581528=0E1A263202:0F0302791566046F,29710D722A38528384202E4530=0E1A263202:0F030102392E15634447001F1E,293845200D707538=1E2A360612:0F0300017039712952542D2C302F80380D2A363F3349483E616320,1118150C1F2E20=33030F1B27:0F03000102700D29713963451F0C20,528338542F15806128=121E2A3606:0F030001027039452971150D332C2F6327,2052838403=2C38081420:0F030001022A0D3945297115528384637020,476A382E1F4426=010D192531:0F03390D332C1929711563261D2E2322,382000521118750C706B15=131F2B3707:0F033915666A52261E272048,382E2F6329712C0114=0D19253101:0F52838403700D332C29712E1F27201E2322,1545017505=131F2B3707:0F528400012E7129,092026=3707131F2B:0F528471295B795D2B155333565A446375661F201E272621,00016B0C4113=14202C3808:0F280001363F8B4326232220,2E1F47032F7D35=16222E3A0A:0F0211195465756679,2F384570202B6A10=15212D3909:0F0102700D332C2E2F0319528384531529716345261F2322,8D32=101C283404:0F0102037039330D5284832971152E1F0C,0026206B37=16222E3A0A:0F003854,20521D2106=020E1A2632:0F00175058,5D6B80382E16=1B2733030F:0F00701784831952712C2E1526271F,033806201F=2B3707131F:0F00701A17830E544C5C78,7129632E1F38208A452F16=15212D3909:0F00040370396A742E15444948,458A384F2021=16222E3A0A:0F005B261F20,2E2F1D=2531010D19:0F0003450D3329712C2E2F1575,528A63705A20587D7C12=17232F3B0B:0F00030D70332C2E3952838453542971156375,6B2019=1B2733030F:0F000301020D297115332E1F0C,165220262E=121E2A3606:0F00030102700D332E2C192971155383846375261F1E20,8D1F=33030F1B27:0F00030102700D19297115332C2B535448,2E45208A00=2632020E1A:0F00030102705283842E544779,2920454F754C3836=16222E3A0A:0F0052037029710D332C15,7545584F8A201D2121=121E2A3606:0F00074850,8A2036=0D25310119:0F00071A706A717677492923221E202726,80522E1F39=1E2A360612:0F006A385040740717,1F70631E=212D390915:0F006A1938271779,565A4575522F801F1E632B=121E2A3606:0F00010D0302703352838453297115632E,208A454F2B=0E1A263202:0F000170390D332E2971152F63751F1E20,52846A381F=14202C3808:0F000106387129,2E1F24=14202C3808:0F0001062E7129,522010=0814202C38:0F0001062871292E7C528384032C5C2A15767765,11185D8A206B08=131F2B0737:0F0001067C1F20,522900=202C380814:0F0001020D700339332C192A83842971152E1F0C20262322,065256386110=111D293505:0F000102700D332C2E297115383F631F20,0347562B=14202C3808:0F000102700D332C712E15261F201E,80036A61473831=0C18243000:0F000102700D335283845329711563,38048A7D45202A=14202C3808:0F000102702E15471F1E,294F2B452C2F268011=0D19253101:0F0001022E792D3E75663D19,472063703852292B39=222E3A0A16:0F0001022E154826271F1E203874362322,036312=0D19253101:0F000102032971152C2E19,4720637038522B15=111D293505:0F000102030D70332E3919528384532971152B2F201F0C,8D1B=232F3B0B17:0F000102030D7033528384534529711520,63475814=131F2B3707:0F000102030D332C2E195283845329716375261E2322,8D19=15212D3909:0F00010203700D332C2E1929711552838453637526202322,8D09=111D293505:0F00010203700D332E2F192971152B52838453631F20,8D33=1A2632020E:0F00010203700D332E2F1929711552838453261F201E2322,8D03=2E3A0A1622:0F0001020370332C2E2F1575261F,2971476A458352380C=111D293505:0F0001020370332E2F0D19297115637566302B2C3979,8D08=000C182430:0F000102037039297175261F1D21,454F2E1563410F=17232F3B0B:0F0001020370390D3319297115632E2C752620212322,8D07=3606121E2A:0F0001020370390D332C1929712E157563548384534C,20248A38=16222E3A0A:0F0001020370390D1952838453542971631F0C,152036=14202C3808:0F00010203703915632719792322,80262045297158750F=111D293505:0F00010203528384157033,752971206B452F2B262E05=3404101C28:0F00010206030D7129302F79802D7C2B5C4744,11701D2052843833=111D293505:0F00010206181139702E1F686F6A792D2C304E153375664923221D21,52296B0D800D=15212D3909:0F000102070D70332C2E19528384297115637526201E2322,8D05=2C38081420:0F0001021A175D2C19152E302F7183846379,8A20704F7545410A=131F2B3707:0F001A651707,565A58202E1F476320=121E36062A:0F11707B7C5271291E20,2E1F39=111D293505:0F11700001522E71291F20,2B07=131F2B0737:0F11700001397129,2E2002=111D293505:0F11707129,2E1F2002=131F37072B:0F1152702E2F71291F20,000103=131F37072B:0F1152702E2F71291F20,7A3A=111D293505:0F117B7C2C2E71291F20,520300=111D350529:0F110001702E2F71291F20,0621=101C280434:0F11000170717B,522E1F0A=06121E2A36:0F110001708471292E1F20,03388051561C=121E2A3606:0F1100017B7C702E7129,522B22=2D39091521:0F110039702C2E522F1574487B7C2D4E804B,098A204538612B=05111D2935:0F1118795B65170002195D,52382E8A201E=2531010D19:0F111829711500010370390D332E750C201F,4552832F382B8004=2A3606121E:0F1118175C000301027039450D29332C2E2F15631F,8A582020=31010D1925:0F1118032A0D545283841A802D2C2E2B71296366774744201F26232221,010900150C06=2C38081420:0F11180300706A2E1549466319,292F26806B382B20754506=2E3A0A1622:0F1118528384530001035C702971152B332C2E63201F1E23222621,6B75452D4F802E=111D293505:0F1118060300017B7C792E39767566261F20,7129805136=232F3B0B17:0F111800171A454F514E3A3871157765443D23221E262720,80612E1F1C=212D390915:0F11180003706A4F0D332C2E192971155363751F20262322,524746416128=3B0B17232F:0F111800037039450D2971332C632026,1F2E2B38528327=3B0B17232F:0F11180006032A0D70332E011954838471152C202322,58477D630C=0814202C38:0F1118000106287129705B032C2E302F802D4E2B201F,528458384108=380814202C:0F11180001027039302971542F7526201E,63472E151F583A=1E2A360612:0F1118000102030D70332C2E192971158384535426201E2322,471F1B=1F2B370713:0F1118000102030D70332C2E195283845329711563261F0C20,4745752522=3505111D29:0F1118000102030D70332E2C192971153953631F0C262720,5284612528=390915212D:0F111800010203700D332C2E192971152F4B49471F270C2322,52562B2029=390915212D:0F111800010203391929710D1552838453,2075708A456309410F=0A16222E3A:0F111800010206032A0D097170292D302F1575761320,521F47251D=1F2B370713:0F18000102111A1703154F2C2E382D2F807566,7163708A1F207D2A=05111D2935:0F111800017C5C2C2E7129,527015382021=2B3707131F:0F11185C0370332D152322528384636626271E,2F292C2E1F00010601=2430000C18:0F11185C0001092A0D7014692983847B7C2C2E302F802D2B,06454F208A2E=0D19253101:0F11181200171A7919547638,5215201D09=3A0A16222E:0F1A1716007015713F261F2720,5263587D2B470304=111D293505:0F1A0070153871291F20,7A7629=010D192531:0F181179005B712980152D4E2A0D533358,5270208A11=0814202C38:0F181138171A7975665B52845415,47701F8A2013=121E2A3606:0F181117795B5C007054292A0D690403332D2C2E66632B3D,8A454F3822=121E2A3606:0F1811705200012E71291F20,382A=16222E0A3A:0F1811705200012E71291F20,062B27=14202C0838:0F18117052000171291E20,2E1F27=16222E0A3A:0F18117000012E71291F20,527A06=111D290535:0F1811700001062E2F1F20,712912=14202C3808:0F181100062839707952542C2E302F03565A7566441F1E,0D29802B2029=1824300C00:0F181100012C2E7129,522025=121E2A0636:0F18110001261F20,03522E=0915212D39:0F18110001702C2E7129,6F454F098A2025=030F1B2733:0F18110001702C2E71291F0D2B152F2127,5283162014=16222E3A0A:0F18110001707B7C0D7129,52565A152B2034=17232F3B0B:0F1811000104037115454F7677657B7C392023222726210C,52092E1F27=3707131F2B:0F181100010603797B7C802D302F2B6743441F202322,2952477D2528=14202C0838:0F181100017B7C2E71291F20,036F33=0D19253101:0F18110001027939706954528384685D15565A75201E1D26,29032E11=182430000C:0F1811000102062A0D2C2D804B2B672E2F7129,70471F8A2030=17232F3B0B:0F5C707971292C2E0E032A0D6A804B2D8C2B3348634C,52110915462031=15212D3909:0F5C5B0001032A0D7052842C2E71291F20,1118517D462B=0F1B273303:0F5C111800015B712952841F20,756A251A=2733030F1B:1545332C2E2F84836375662620,0F0003700D71292B1C=0E1A320226:1516291211020056,06382007=000C182430:1551000403706A454F3A3D771F262322271E1D21,382B41522016=17232F3B0B:1500443626271F1E,29710F47380D19520337=182430000C:150001021745512E443D65262322,2B63387C18=192531010D:151A83842627202322,580F7003632E1F297C26=0E1A263202:15391A302F83845475662627201E,0F702E4629004708=3606121E2A:5B000102073911522C302F3A678C363F33490D482425200C1E2322,0F15382E1F6116=1E2A360612:5B71297000010611182A0D39792C2E332D4E80151F202621,52454F3804=2C38081420:5B11180001020328700D332C2E195283847115632F751F2720,290F476630=0C18243000:201E27262322,8902=3404101C28:2A0D11180F52848353037039156358332C2E,3820002628=010D192531:4089,030F565A61206B27=1824300C00:4089,8836=1C28340410:0370833F0F6A5215,010D582E1F202C2F2938=112935051D:03700F,79192C2E2D715275262322271F201D2136=112935051D:0370110F45510D3371290941614C522623222720,8D3B=152D390921:03047039171A533852443D363F,8D11=0F1B273303:030402111A16175B4F3A2B153E0079015D54528483696A51,7006200F05=0F1B270333:03041A174533302F56795B3E808339528454,700F292026=121E2A3606:037B7C2E2F261F20,0F14=1E2A360612:030270170F45513A2C71295283842A0D532D24252623222720,155A382E1F2F=1B2733030F:03027011170D332D2C2E2F716152838454,010F201F2C=121E2A3606:03027039450D332C2F2D2971528384636626202322,581535=212D390915:03020E0F18110D332C2E2D2F4971293E615244756653,8A202531=1B2733030F:030102703945802D2C512B7129092322270C7566,112E528325=2D39091521:030102062C2E543E3D636679,380D19462971001F=293505111D:03111A171538193E3F,0F632C2E70454F200C19=17232F3B0B:031A2B7915656A,0F177001204529710D632E2F02=32020E1A26:033945302F838475262720,297071000F2E1F3810=17232F3B0B:0339332C2E1575201E26,0F520D631F29712A72473826=390915212D:0339332C2E302B66201D1F27,0D2971010015520F6B0E=15212D3909:03392D2E332F211D201F1E27,0F7015380029710D195824=16223A0A2E:036F791E20,522E1F31=1D29350511:5283845B79037B7C802D2C2E4E302F2B38493D4463664C1F2021,0F0D712917=15212D3909:5283845303702971150D2F,388A6A6D0F2012=111D293505:528384530370331929272E2B2F631F1D20,0F156B380E=0D19253101:528384530339454F0D297115332E2F637520,0F00705802=2A3606121E:528384530339332E152C2F58631F20,380D000F2900=283404101C:528384530003010215392C20,1112180F29560D2E1F754511=15212D3909:5283845300031929150D332C2E63,0F217045208A717521=3505111D29:5283845300010670802D2C2E4E155B201F1E232221,380F71296A0E=17232F3B0B:5283845354037029711575262720,631F58000F2E38010D=111D293505:528384000103451915332C2E631F2720,29716A0D0F7019=1D29350511:5283840001032E1570637566302F391F,0F4729712030=16222E3A0A:5283845479036A2627201E,0F380D70297115012F1A=1F2B370713:528384542E03700F111869565A7566631F1E2021,297138000C31=121E2A3606:52838454443D65002C2E15495D1F,0F417D712B38630F=0D19253101:5283845444360F11756415,2C2F29016B472E2B20381D=212D390915:528384545363000103332E15,0F1F197029710D757D2032=121E2A3606:528384546315332C2E2F26201F2322,0F0D45002971756B17=192531010D:52838454754C2971150301022E,0F63206A0938268A4117=1B2733030F:52848353000103297115332E2F19,0F8A514F6A6620754526=1824300C00:528403395B2F1E20,0F012D=0B17232F3B:5254700001020612692D4E584647336375662E1F1E,71290D262037=131F2B3707:525400045B17791A565D754C7866,2E1F207C34=0F2733031B:483F89,8838=232F3B0B17:767779392623222789,152B1F1D200E=0A16222E3A:767789,528300292025=14202C3808:7665261F20,0F291A=222E3A0A16:7665262322271F201E21,0F0029807124=1824000C30:7889,292E1F24=101C283404:8D,8832=1D29350511:63767789,522E0006206B31=131F2B3707:7B7C343589,0F7038=2632020E1A:7B7C343589,520F20=0E1A260232:7B34,8812=1C28340410:02703918110F7919155283756626232227201E,012C2E1F0C29=121E2A3606:020F11161A17454F2C2E2D302F2B38434C,2070016328=1824300C00:02060418110D332C2E415B637566262322271F20,520F23=142038082C:07504089,0F010C=15212D3909:07262723221F40,0F7129523B=2430000C18:0717363F1A2C4F3A67433D8B,71290F0103471A=2531010D19:0704031118528384542D2E4E49201F1E1D2127,292B000C3B=283404101C:073F7765644889,012014=111D293505:074048261F202322,0F71454F1500018008=111D293505:07404826271F1E2089,882C=0D19253101:07565A5283845463756677261F20,010F15296120=2F3B0B1723:07487677393F89,0F2952151F1D30=111D293505:074889,06520F3808=17232F3B0B:074889,883B=131F2B3707:074889,8832=15212D3909:07762623221F1E20,000F1552296B2F2A=0D19253101:0776776A742623221F200C211D1E,11180F2F5206802B0B=04101C2834:0776776564,000F29382011=101C283404:0706397B7C794C636A48,520F7129472026=14202C3808:077C343589,880A=380814202C:076A79040363660F5D363F,52292E1F20382F15560123=16223A0A2E:076A696819,0F2918=222E3A0A16:076A171552847983546578,712970010F2D=182430000C:076A48,45752F29384C0F204F612B30=131F2B3707:076A7626271F1E20,0D0F29382F2E0E=0814202C38:07343589,065238=1C28340410:070039201F0C2789,06030F292F23=101C280434:076564,0F292002=0D19253101:073918111A17332C2E71292322271F1E20481D45548384,38002F702A=1824300C00:7C343589,8801=172F3B0B23:6A79363F65,0F292B7118=1B2733030F:6A170F19,5845754C201F4F382430=1B2733030F:6A170F1963766F,5452201F32=0C18243000:6A0339332C20528384531563,29713801000F0C47806B3B=2A3606121E:77766564000789,0F52201E8A01=202C380814:1F2027260076232289,0F29528339=0F1B330327:3435,8809=0F1B273303:34357B7C,8818=121E2A3606:34357B7C7789,0F291D=232F3B0B17:34357B7C89,0F2021=33030F1B27:34357B7C89,030F27=390915212D:34357B7C89,712917=1D29350511:3435073989,8802=2C38081420:34357C89,0111180F292006=30000C1824:34357C89,71291A=14202C3808:34357C89,8A2036=182430000C:3435000789,8835=232F3B0B17:34350089,0F2025=3707131F2B:34353989,0F2037=0D25310119:343589,0F52202D=0F1B273303:343589,0F7152290D=131F2B3707:343589,8830=121E2A3606:343589,881C=16222E3A0A:343589,8819=131F2B3707:343589,880F=15212D3909:343589,8832=14202C3808:343589,8813=0D19253101:343589,8811=17232F3B0B:343589,881E=142C380820:017018110F1A2E15495247838463462322271F,8D03=0F1B270333:0103040818111A155284262322271E20217A79708330,38472E631B=14202C3808:010670170F0E3A294152838454262322271F201E,2E1815442C=0F1B273303:01067071292C2E1F20,1103150F520A=17232F0B3B:010670181126271F202165,293816=182430000C:0106111839513A2C2E2D2F8C804B4723221F63,7152292037=0F2733031B:010203040618110F3315292A271D200C6339171A712C2E30491E21,7A21=0E1A260232:010206040318110F2E292A27200C70072C302F541F392B49,381512=1A2632020E:010206110F452C2E7129095B5226232227201F0C,58804B036B2B381C=142C380820:01023918112E2D493E52756624262322271F20,8D12=121E2A3606:008354,06462F2E1F27=030F1B2733:00797084831754,0F2E472D4E1F06=0D19250131:0079701811072C2E01060F33152627200C7A1A302F4576631F2B,8052382900=172F3B0B23:00790F072C2E0103047018111A262322271E7A302F5448637545,293815561E=101C340428:007952151E20,0F2E1F33=0F1B273303:007984831A160F1719,632E20471D6B01=152D390921:0079110F0304062A528423222627207A19701A2C2E2F5D83,294513=0F1B273303:0079181A165B332F2B262322271E2021030469702D4E49712930845D,454F05=152139092D:0079192E2F030417332D1552847A5D,4E201F=162E3A0A22:003826232277,632E20523A=0D19310125:0038262389,521513=1C28340410:00384089,0F202E157C07=04101C2834:00384089,152967631F=101C283404:00384740,0F2037=1C28340410:00387765504089,0F157C04=131F37072B:00385476,521F13=16222E3A0A:003854767789,2E1F522010=131F2B3707:003854637519,205D1D1F52151E210F=121E2A3606:003889,52201F1D4733=121E2A3606:003889,881F=212D390915:001D23221E2789,52290F2E1F202B=07131F2B37:002C7080305C784C62,2E1F472001=283404101C:004D64547589,0F292E=131F2B3707:005040,522E1F0F2C2004=3404101C28:005089,032C2E1F33=182430000C:005089,8815=192531010D:00261F23221E201D2189,8D12=131F2B3707:00261F2322271E200C89,8D1E=121E2A3606:0026271E20,2F2E1F33=16222E3A0A:002627241F1E20232289,8D33=14202C3808:002627651E20232289,881B=182430000C:00262789,292C2E1F2B2F2A=07131F2B37:00262322271F1E203F8B65,52290F038002=15212D3909:001779332D2322271E2007760304,38290F1C=1F2B370713:00173883546365756619,466115201F701D47522434=0D25310119:00170F79191A6540,712909387C2015=0E1A263202:00170F332C2E2D2F802952443F26232227201F,15637C383A=132B37071F:00170F7665776489,8D2A=390915212D:00177689,0F52804F2507=2E3A0A1622:00177179546A76,0F52443D1F2D=0915212D39:0070,0F292C2E791F13=131F2B3707:007083624C,0F38202E7D4F45471F7107=380814202C:00704F0D332C2E2D15363F261F20274C,0F2906036F4703=3404101C28:00702C2E164C157126271F1E202425363F,29386A032B0F=0F1B273303:00700F1715262720,472E386309=15212D0939:007022230726,2E17712952302F15=15212D3909:00704889,8834=1C28340410:0070784889,0345201F21=2D39091521:007007482089,2E1F58470B=0D19253101:0070071A010618110F5B52846775,6326202E=16222E3A0A:00701A17794C0F302F715475,2E454F8A20243A=0F1B330327:007018111A1617192E15382627201F656477,4F090A=0F1B273303:002E2F18110F5B3315292A26271F20210C7A70710102393E19,035A37=14202C3808:002E4344793F26271F20,03702C2F292B381A31=0E1A263202:00161A5D454F153826201E27,7D0D2904=152139092D:0004037039180F332D152952262322271F0C533A83,4117804735=1F2B370713:0004037B7C0F79494766754667,80293869208A1E=162E3A0A22:00040301067018111A0F332C15292A261E200C7A7919712F5D52838454,5617454F06=3404101C28:000403110F527079156523221E2027,0129802E1F6B1D=1830000C24:0004031A170F11332C2E302F1571292A657677451949,70201D5218=102834041C:0004031811171A5B332C2E155D52,0D29204504=17233B0B2F:00040318110F1519262322271E2021,52831F3825=3B0B17232F:00046A7966444C7765,010C202F38520F70292E31=14202C3808:003F261F202789,8836=131F2B3707:003F657789,7152290F032B3A=2632020E1A:003F651F0C2027232289,0F292B=16222E3A0A:003F89,8836=212D390915:000F76,032E1F522C292B22=2B3707131F:000F7765,2E1F7C4607=0F1B273303:000F01111A1615292A2627200C2C670279538384543E49,634512=0F1B273303:000F1320,6380382936=0F2733031B:000F1323222627,2E3829031535=0D25310119:00676589,0F200F=0C18243000:00401D232289,71290F47202B=101C283404:0040395089,8803=30000C1824:004023222089,0F291118470D=0A16222E3A:004089,0F5211=1A2632020E:004089,0F0147200B=3A0A16222E:00037039454F0D332971152C4C48,090F476341382E0A=111D293505:00037039041A26271F1E202322,0F2F2C335129452E0D3A3B=222E3A0A16:000370396A450D332F4B154C,0F208A7D41381F2E14=0F1B273303:00030401061A16170F332E71292627200C02696A45514F0D2C2D4E497A,2B0B=0F1B273303:000304111A33152D2E302F71292A5284530770022B,0F6345203B=0F1B330327:00030418111617332E2D2F292A52845407020D302B,090F452001=0F1B273303:000304080618110F1A2E2D0D3371292A2C302F7566010239454E802B,632039=2430000C18:00036A7415384878,45751F20240F522E834F2E=182430000C:000301394F2E154763751F27,0F707A802629710D192035=14202C3808:0003391983845475,2E1F0F6A702971722A0D04=0F1B270333:00483F,6338200F2A=3B0B17232F:00481F2023221E27262189,0F292C2E1B=122A36061E:0076645089,8819=202C380814:0076777566262322271F201E,0F111852290D=101C283404:00763989,0F2036=1E2A360612:00788B89,0671292E25=010D192531:00784C793989,0F29702E1F208A21=31010D1925:0006261F1E201D212322,0F2938111801=2A3606121E:00060403702C2E4C154947443D651F,0D2920=101C283404:0006522E261F20,0F712939=2632020E1A:00060724232227261F2025,520F157929382F22=31010D1925:0006547677,0F5229151F201B=0E1A320226:00061A161718110F292A0C26271F21797001022F49,470D=0814202C38:002876396577261F20,5283290F37=212D390915:0028397976771E232227,0F522E47442027=121E2A3606:006389,8822=101C280434:007B7C3989,881E=1830000C24:007B343589,8805=2E3A0A1622:00021719792B155D5466774962,010611180F292030=14202C3808:00020370454F0D3933192C2E2D156375261F202322,0F7123=0E1A260232:0002070818111A16175B153E445D5452848365647576,2038454F15=182430000C:0007385476771548,52061F2024=2D39091521:0007504089,0F29157030=15212D3909:0007504089,060F71702F2918=15212D3909:0007504089,880B=17232F0B3B:000770171989,0F2E20382F=0B17232F3B:00077089,522E1F8A202C=07131F2B37:000704036939487C4466,0F7011293821=1824000C30:000715547776,521F18=0E2632021A:0007030401021811171A0F2E2322271F1E706749528483,202F293800=0F1B330327:00077663,0F297138202C=0B17232F3B:000776776548,0F1118152E1F2017=121E2A3606:00077665776489,52830F208A14=1A2632020E:00077B7C4834353989,2952203B=2632020E1A:00076A386563,0F7D8A2066454F52754C15=1E2A360612:00076A0F3874485040,06707C2509=3606121E2A:00076A74504089,5229702C7D15=14202C3808:00076A74173926271F1E20,0F7029522B09=000C182430:00076A54196348767765,7920297115528A0D382B16=101C283404:000734357B7C3989,0F528329200C=06121E2A36:0007343589,290F7104=2E3A0A1622:0007343589,0F292F702012=182430000C:0007343589,0F71296B708003=15212D3909:0007343589,7129706300=0D19310125:0007010618111A332D302F15262322271E530270164C,560F712924=0E1A263202:000701020618111A1752848354230C7027,262038292C=111D293505:0007711F204840,010F29153814=17232F3B0B:00076527262322,1552835A201D0F382D=0D19253101:0007363F8B3989,09292C208A0F28=030F1B2733:000739483F66,0F208A2B0A=04101C2834:0007397B7C343589,0106522008=020E1A2632:0007396A48343589,0F203A=283404101C:00073934357B7C89,0F5223=3505111D29:000739343589,032010=0A16222E3A:000739343589,520F2F=111D293505:000739343589,8A200A=15212D0939:00077A7089,8817=17232F3B0B:000789,8D3B=172F3B0B23:000789,8815=1B2733030F:007C343589,881B=212D390915:007C343589,8812=15212D3909:006A79190F6F2627,6B46204538290B=380814202C:006A38075040,0F630141202B454F2D=121E2A3606:006A5040077448,702B2C0F2F292E=0B17232F3B:006A583F232227261F20,0F291547031C=232F3B0B17:006A6F391974,0F2E614447702C292F71201F38521F=31010D1925:0034353989,522E1F2B=0D19253101:00343589,060F5200=2A3606121E:00343589,7129565A01=131F2B3707:00343589,883B=111D350529:00343589,8800=152D390921:000150402627,0F292F2B1E=2733030F1B:00010F17505840,565A80385283846315=101C283404:000103020611187B7C2D4E616439201E0C26,522E474429=101C283404:0001030239450D297115332C2E4C,0F542070528438632C=101C283404:000103392E54837548,19700F58157A20381F=1830000C24:00010670175B71292A152322271E,03637C2B380F=0E1A263202:0001067052842E71291F20,030F38477533=131F2B3707:0001067011185B0D332C2E2D712909262322271F200C,0F5263250C=17232F0B3B:000106040318111A170F33292A26276A201D0C7A71077C1F1E74694F,520A=0D19253101:0001060403232226380F767754,568020152D=111D293505:000106025B75712904032D302F382B2A0D801E20,2E1F0F0C=0D19253101:00010607155B5C26271E2021165D83,38470F2920=16222E3A0A:000106073018110F3329271E0C7A0D75,3826201508=0F1B273303:00010618111A16332C2E2F2D27200C07483A450D,1552843825=0E1A263202:000102261E2027,03476F700F2971382E39=15212D3909:0001027007834878,2E388A201D17=131F2B3707:00010203450D3329152C2E2F5375,0F638A6A1D382D=0E1A263202:000102030D70332C2E29712F534426201F1E,0F38152F=121E2A3606:0001020370450D332C2E2D152971,0F52838A201D1B=1D29350511:0001020370528384631575712D2E4E3E581F1E1D,292C2B452620803A=222E3A0A16:0001020370392F2971152B54754C,458A1F0F20462C=14202C3808:0001020370392F80712B546675201E26,1F58472E152F=16222E3A0A:000102037039714515750D33,201D381F092E0F1103=32020E1A26:000102030F7039453319152E2D2F63751F0C1E20,71290D38472C=16222E3A0A:000102035270392E2D5863,0F381D2B2921201511=131F2B3707:0001020352666A,0F7020262938172F3A=2430000C18:00010203332C2E2F1558631F,0F1920707A2971264627=05111D2935:0001020311180F702E1F7952838468332D6749443E46630C1E1D21,292B2035=1C28340410:000102031118396375664819,1D4138702080291F=232F3B0B17:000102033945332C6375201D21,0F1929710D702D=101C283404:00010203390D3329152C2B751E20,2E1F54475352458316=111D293505:0001020339161745514F2C190F1A152E2D2F304979,8D13=17232F3B0B:00010203396A79637566201D211E,29387D71707A30=101C283404:000102033911170D3319152E2F0947442627201F,8D25=3505111D29:000102031811392E2D19528384543E4463751F20,152F1A290F0D=0E1A263202:0001020626232227201E,0F2E03801F0F=101C283404:0001020617385483,030F47202B6B1B=2733030F1B:000102060F17705283797823221E2027,2E712910=121E2A3606:000102062A397129797B7C2E1F2425,162F5D20262B=182430000C:0001020603691817452C2E2D498344,412B6A09633808=3A0A16222E:0001020603700F7B7C2E1F692D48302F565A586366240C21,2B151A292039=17232F3B0B:000102060717706A33392D2E4E674447482322271E210C,71292B4F2023=33030F1B27:0001020607036A5D397C2163664744,0F4E25208A08=04101C2834:000102060775261F20,71290F70150C=101C283404:00010206111803302F565A802D4E2B881F261E0C,0D0F521B=16222E3A0A:00010206090D5B7952838454685D7B7C443D77656366201F1E,030F47454F24=010D192531:000102071283542627201D210C4C78,29580F2E6352031F01=32020E1A26:00010275261E0C2322,6303706F0F292E1F19=0E2632021A:000102081A158483262322270C1E,700F292E1B=101C283404:00011A1615262322271F1E200C214C,472B0F1124=3707131F2B:00013974150726271F1E200C,0F06520D297170382B4507=17233B0B2F:000118111A16175B154C26271E200C232279302F5D528384547543,0F297C7A03=17232F3B0B:000118111A332C2E2D1571292A2627200C7A1979,387C02=172F3B0B23:000118111A332C2E2D1571292A23222627200C7A791970302F5D5283845456,387C454F1F=0E1A263202:0001081811171A160F1571292A26271E20396476452B0D,632E523813=15212D3909:00211D1E232289,8D16=0E2632021A:006526232227201F,8926=05111D2935:00657689,6B0F5225=16223A0A2E:00654C89,8D03=2A3606121E:006589,2970472008=15212D3909:001A170F5B332E2D7129261E203E5D,1503528306=152139092D:001A170F1379232227761926,71293833=1C28340410:001A1715838444363F261F1E200C2322,0F476B52036338=14202C3808:001A2B5448701938754C,152E20242510=0D19253101:0039504089,8D39=283404101C:003926271E20747677642322480C06,2E1F38=0F1B273303:0039262322271E201D210C0748766465776A,150F382939=202C380814:0039332C2E2D2F152B4644261F1E,0F7019382971637A31=192531010D:0039787989,1F2E2010=101C283404:0039787089,2E1F8A034F206B29=05111D2935:00398B7989,0F200C=131F2B3707:0039077426271F1E20,0F29713852832B632D=14202C3808:0039076A7426271F2048,0F79197029717A382C=0E1A263202:00397C343548,8929=3B0B17232F:003934357B7C89,0F2028=16222E0A3A:0039343589,8D34=16222E3A0A:0039343589,880B=111D293505:0039343589,8805=17233B0B2F:0039343589,882E=101C283404:0039343589,8806=17233B0B2F:00390103040618111A17332C2E262322271E157A7071302F45631F2075,807C2B=0915212D39:00396577647969271E2322,52012E1F2620612D=16222E3A0A:00391A6A15384C4943363F7448,0F0379472B6319=192531010D:00394C786F89,0F2E442035=182430000C:003989,882A=121E2A3606:003989,8816=13191F252B313701070D:003989,8801=0D19310125:003989,880D=0F1B273303:0018112C2E01040607332D292A09270C2322696870302F47023945,382052801C=101C340428:00190F153917701A48,472E1F200334=1F2B370713:00195475667689,5229152E2019=222E3A0A16:004C504089,0F5215470A=3A0A16222E:005C702C2F802B154C78,5A562E1F208A45466319=102834041C:0089,090F1538=131F2B3707:71297C790001062A0F802D,5215705D2F=0E1A263202:7100030170391959152E2D2F2B,0F201F4F75668A3824=030F1B2733:5483846376656419786A,298030201A=2430000C18:5452838479195D00012A0D7B7C2C2E3348156366242526201E,0F71292D=07131F2B37:54528384700001020339482D301571565A363F637566,06292B201F8A29=030F1B2733:54528384036F796A153E65,7129631D=2733030F1B:5452848303152F802C2D,2E1F208A7A700F29710C7D22=33030F1B27:118384155B20272E1F21,0F03380E=0E1A263202:1179302F842627201E,0071292E1F0E=06121E2A36:11177B7C52842C2E5B1F20,060071292F0F0E=101C283404:110F70528475660D7129,012E1F20262A=101C283404:110F03706A795215636626271E,0C012F38062C292B07=020E1A2632:110F0001702C2E7129201F,52060C=0E1A263202:110F00017052792E1F1E,71290D2B2020=293505111D:110F1A6A702C2E1952838453712F6375,45201500011D=101C340428:11037B7C2E2F7129,0F52200B=0E1A263202:11000170792C2E7129,0F52201F01=111D350529:110001527B7C2E75,0F2009=04101C2834:1100010206702D804E2B2620,0F52540D00=131F2B3707:110001392E1F20,0F712932=17232F3B0B:117154528384292C2E302D4E092A0D50407970443D,5680410023=2B3707131F:111879690001020370396A2E2D528384543E637566,0F380D58292000=222E3A0A16:111879076A1A171523221E272024,5229700F1D012E2B0C2F0B=06121E2A36:111817000106702C2E71292A0D33802D302F4E2B44,0F52252029=07131F2B37:11180F000704030D7C684580302F153867534775,70204119=2430000C18:11180F00012A0D70795D7B7C39332D2C2E4E4863664C,064F478A2037=1E2A360612:11180F000152548471702C2E2D4E303348492A156144474C63,8A201F38450618=202C380814:11180F000128032A0D7129302C2E2F2D802B09411F1E20,5284543824=2F3B0B1723:11180F0001020370391952845329712B632E7B7C792D2C8020,385D151E=293505111D:11180F0001020339700D29716375662E1F2620,3815568016=16222E3A0A:11180F000102587B7C5283847971302F804B2B497675,09612E1F201E=232F3B0B17:11180F00010E715229702E79692C2D2B15093954444C66,2F565A806132=131F2B3707:11180F71297052838454792A0D33802D153853201F1E212627,012F56476628=3707131F2B:11180F71297000010604032A0D793969302F33802D636675,201F52565A1E18=1D29350511:11180F5C000102030D332C2E195329711563261F202322,52843A=202C380814:11180370392A0D3329712C2F156375795B5D,450C8A00382E1F20010C=3A0A16222E:11185283847975661271393D692D15565A201E262322,292F060D0C02=30000C1824:111852838470795B302F404533802D152B39201E23221D212726,0F2E1F010D2923=2D39091521:111852838453546319297115030D332B2C,060F8A2E38201F38=0D19253101:111800020D041A796933483E5347446563751F1D212026,010F09150C17=2430000C18:1118000717161A2C2E3371292B56433D6375363F,0F010347208A09=020E1A2632:111800012A0D2C705271292E201F,1538617904=30000C1824:11180001032A0D70795B2C2E302F802D4E152B33714161201F26,520958470A=000C182430:11180001020439332C2E302F2B5844477515634C1F2721,0F520D19267A2971702037=232F3B0B17:111800010206037939695483845D2D2E4E446375661F262120,0F52290D7123=31010D1925:111800010206071979697C67474475664C,0F16298A2014=182430000C:11187129705B79000106032A0D397B6F7C802D2C2B61756627261E0C1D21,0F2E15414732=192531010D:111871545283842979397B7C69152B2A0D33485324251F1D1E26,6B00702F800C201E=1F2B370713:5D0007363F232227261E21,037C0F471F202E=0E1A263202:6526232227201F,880E=111D293505:653989,8806=131F2B3707:363F6526232227201E89,8832=1A2632020E:1A454F548384,881D=121E2A3606:1A38712975,0F201A=0E1A263202:1A162623227954,0001710F290C=0F1B273303:1A16170F13152654,3852204F32=0F1B273303:1A5D453A332C2E2F4B25262322271F201E1D21,000F704723=2F3B0B1723:3950177089,522E1F0F201A=1D29350511:39701117302F713819297566,004551152C2E201D1F34=121E2A3606:393589,881A=15212D3909:393589,882C=182430000C:393589,8825=101C283404:393589,881C=2531010D19:394089,71294709636F7C440D=0D19253101:3948007889,8D38=2430000C18:394889,8811=111D293505:394889,882A=0E1A263202:3907,8807=0D19253101:39343589,8831=101C283404:393489,8801=222E3A0A16:390050404C89,0F528329692018=131F2B3707:39006A26201F,0F520D38580629712B09=380814202C:390001022C2E302F1575804B2D261F20,0D0F0319707D5229717A15=17232F3B0B:3989,8D11=0A16222E3A:181179838454637566,0F5229012007=111D293505:18117915384C,52200E=0C18243000:1811795B032C2E302F802D4163754C27261E1D2120,010D0F29521F29=16222E0A3A:1811795B5466,01202F=192531010D:181179000607040D03302F5283844F3A45512B1533664C47,090F702E208A2B=0B17232F3B:18117900012C2E5B1F20,0F710D52291A=122A36061E:181179190E332C2E2D52637566262322271F20,8D02=0F1B273303:181117332C2E1526232227201F1E3E,38030F522922=142038082C:181170792C2F7129,52201F=121E36062A:18117001061579,71292023=121E2A3606:18117000012C2E7129,522024=3505111D29:18110F3900010203700D3329711563752E1F0C201D,38525D1A=101C283404:18110F197983842E230C271F1E7A70525463,2620291503=111D293505:1811002E1F8384,0F2022=1824000C30:181100012C2E2F1F,0F3821=142038082C:181100012C2E2F1F20,0F5229=14202C3808:181100015B3875,2E2034=15212D3909:181100012A0D2C2E2F2B2D304E447129841F,0F09416138200F=0814202C38:181100012A0D52842953411E20,2E1F0F47152F=131F2B3707:18110001032A0D845B7129302F791533536678,0F208A1F1D33=17232F3B0B:18115452840001712970802D2C2E302F2B2A0D78791F,0F204758610E=0F1B273303:18111A16175B3315262322271F1E201D215D838454433E363F754551,00030F290D=0C18243000:18115C0001702A2C2E2F5283847129795B6375802D154C,1F208A2407=15212D3909:88,262052830D=17232F3B0B:88,8D17=102834041C:88,8D0B=15212D0939:88,8D24=121E2A0636:88,8D09=17232F0B3B:88,8D13=111D293505:1979,3F2F2E45207D37=112935051D:1966583F6589,8831=16222E3A0A:4C4089,880C=0C18243000:4C78,297172380D2A2E0F47484112=16222E3A0A:5C0F1811790070528471291F20,2F0380512514=1C28340410:5C0001020652835B0E03804B2D4E2B752024210C,292E565A36=1A2632020E:5C11180001027170520D2984832B15200C,03802E386333=15212D3909:89,6B34=111D293505:89,8D";s.TIME_YI_JI="0D28=,2C2E2128=,2C2E0110=,2C2E0C1F=,2C2E7A701B1C=,01022308=,01026D003026=,000106037A702D02=,000106037A702802=,000106037A703131=,000106037A70341B=,000106087A701F0E=,000106087A702E15=,000106087A702C2E0E39=,000106087A702C2E0D2B=,881727=,88032D=,88352F=,882B2F=,882125=,882A22=,880C1E=,880220=,88161A=,882018=,883422=,880113=,880B11=,883315=,882915=,881F17=,88150D=,88122E=,88302A=,88262A=,883A28=,880826=,881C2C=,881905=,882303=,880F09=,88050B=,883701=,882D01=,88060C=,882410=,881A12=,882E0E=,88380E=,881010=,883630=,881834=,880E38=,882232=,882C30=,88043A=,881E0A=,880006=,883208=,880A04=,881400=,882808=,883137=,883B35=,882737=,881D39=,88133B=,880933=,88251D=,882F1B=,881B1F=,88111D=,880719=,88391B=,88212D=,7A702C0B15=,7A70551515=,7A70552D00=,7A7D2C2E1334=382C,000106083528=382C,7A70000106080504=382C7A6C55700F197120,00010608223A=380006082C,01026D0D2C=380006082C,01027A70551D30=380006082C0F71295283,01027A703636=380006082C0F71295283,0102416D1226=380006082C7A706C550F297120,0102251C=380006082C7A6C55700F197120,01026D2300=3800010608,2C2E0324=3800010608,7A702C2E082E=3800010608,7A70552C2E3B34=38000106082C,2F8026330C=38000106082C,2F80267A701622=38000106082C7A70556C0F197120,1904=38000106082C7A6C55700F197120,1514=38000106087A70556C0F197120,2C2E3138=38000106087A70556C0F197120,2C2E0B10=38000106087A6C55700F197120,2C2E2B28=387A6C55700F197120,000106082C2E2E16=38082C,000106037A700E3A=38082C,000106037A703708=38082C6C550F197120,000106037A701B20=38082C6C550F197120,000106037A70111C=38082C6C550F197120,000106037A703A2D=2C38,000106082733=2C38,000106081015=2C38020F71295283,000106083817=2C2920,7A700F03=2C2920,616D1839=2C292070556C100F,00010608161B=2C2920020F7100010608,302B=2C2920556C0F1971,7A701E07=2C2920010F,1B1B=2C2920010670100F00,352B=2C292000010206100F70,082B=2C292000010206100F707A,0C21=2C292000010870556C100F7A,0617=2C29206C0F1971,7A70552807=2C29207A70556C0F197100010206,122F=2C29207A706C55100F1971,1017=2C29207A706C55100F1971,2731=2C20,616D0436=2C2070550F,7A7D01022E12=2C200F71295283,01021831=2C20556C0F1971,7A702912=2C20100F52,01026D1D33=2C807138152952,000106080E31=2C80713815295270556C100F,000106083201=2C80713815295270556C100F7A,000106080327=2C80713815295202100F,000106037A702B2B=2C80713815295202100F,000106037A702801=2C80713815295202100F,000106083639=2C80713815295202100F7A7055,00010608341D=2C807138152952556C100F,000106037A701B23=2C807138152952010F6C55,7A70302D=2C8071381529520102100F7A7055,2231=2C8071381529520102100F7A6C55,1F13=2C80713815295200010206100F20,7A70313B=2C8071381529526C550F,000106037A701A15=2C8071381529527A70550F,000106080219=2C8071381529527A70556C0F19,000106082E0D=2C80713815295208556C100F,000106037A70161F=2C80711529525670556C100F,000106083813=2C80711529525670556C100F,000106082D05=2C807115295256020F7A706C55,2237=2C80711529525602100F,000106081F0D=2C80711529525602100F55,000106037A702627=2C8071152952560102100F7A706C,2C33=2C8071152952560102100F7A706C,0939=2C80711529525601100F7A7055,416D021F=2C80711529525600010206100F70,0E37=2C80711529525600010870556C10,2129=2C8071152952566C550F,7A702519=2C8071152952566C550F19,7A702417=2C8071152952566C55100F19,000106037A70043B=2C8071152952566C55100F19,000106037A700C1B=2C8071152952566C55100F19,7A703B31=2C8071152952566C100F19,7A705500010603172D=2C8071152952567A70550F,416D3A2F=2C8071152952567A70556C100F,1901=2C8071152952567A706C55100F19,1119=2C8071152952567A6C55700F19,1C2B=2C80711529525608556C100F,000106037A701403=2C80711529525608556C100F,000106037A70071D=2C80711529525608100F55,000106037A701908=292C20,7A7D01026D2E0F=292C200102100F7A7055,032C=292C20000608,0102071C=292C206C550F1971,000106037A700E33=292C207A70556C000108,0503=2920550F,7A702C2E0721=2920556C100F,7A702C1225=2920000108556C100F,7A702C2E1F11=2900010870556C100F7A,032C201A11=297A70556C100F,032C200E35=297A70556C100F,032C20000A=70556C0F197120,7A7D3A29=70556C100F2C20,000106081C25=70556C100F2C20,000106082805=70556C100F2C20,000106082F20=70556C100F2C20,00010608150C=70556C100F29522002,7A7D000106033314=70556C100F,00010608032C20122A=70556C08,7A7D000106032415=70100F2C715220,000106081A0D=4B0F2C20,000106037A701902=4B0F2C20,000106080E3B=4B0F20,7A702C000106032E17=0F2C09382920,7A7000010603363B=0F2C093829206C55,000106037A70082C=0F29528320,7A2C71707D01026D0718=0F712952832C20,7A7D01021C26=0F712952832C20,7A7D01026D3918=0F712952832C2038000608,01027A70552126=0F712952832C2010,01021330=0F712952832C207A7055,01021118=0F712952832C207A7055,01023524=0F715220,7A70552C2E3419=20556C0F1971,7A702C2E1D31=2000010206100F,7A702C1E05=0270290F2C207A,00010608212C=0270550F,00010608032C200C23=0270550F,00010608032C203706=0270550F20,000106082C2E2520=0270550F20,7A7D000106032E13=0270550F202C807115295256,000106081620=020F29528320,000106087A2C71707D0112=020F2952832055,7A2C71707D000106030F08=020F20,7A7055000106032A23=020F712952832C20,2521=020F712952832C20,000106082F21=020F712952832C20,000106080003=020F712952832C20,7A700432=020F712952832C2038000106086C,7A701E03=020F712952832C2070556C10,000106081623=020F712952832C2001,2236=020F712952832C2001,000B=020F712952832C2001,7A70552C36=020F712952832C20013800,416D341E=020F712952832C20017055,7A7D0E32=020F712952832C200110,7A7D0329=020F712952832C2001107A706C55,262D=020F712952832C20017A7055,1229=020F712952832C2000010608,122D=020F712952832C2000010608,1011=020F712952832C2000010608,0A0B=020F712952832C2000010608,1F0F=020F712952832C2000010870556C,1A0E=020F712952832C206C55,7A703312=020F712952832C2010,000106037A70172A=020F712952832C2010,7A7055000106033B3B=020F712952832C2010,416D000106037A700B12=020F712952832C20106C55,000106037A700615=020F712952832C207A7055,3203=020F712952832C207A7055,201B=020F712952832C207A706C5510,2023=020F712952832C207A6C7055,2A1B=020F7129528320,000106087A702C2629=020F7129528320,7A702C2E3709=020F7129528320,7A702C000106083A24=020F7129528320,7A70552C2E341A=020F712952832038000106087A70,2C2E1C2D=020F712952832001,7A702C2E0611=020F712952832001,7A702C2E021A=020F712952832001,7A7D2C2E3815=020F71295283200100,7A702C2E3024=020F71295283200110,616D2C2E093B=020F71295283206C55,7A702C2E000106030505=020F71295283206C55,7A702C030C1A=020F71295283207A706C55,000106082C2E3705=020F712952837A706C55,032C201F0C=02550F20,000106037A700508=02550F20,000106037A703029=02550F20,000106087A702C2E3027=02550F202C807115295256,000106037A703526=02100F2C29528320,000106037A70150E=02100F2C29528320,00010608380F=02100F2C29528320,000106083527=02100F2C29528320,7A70000106031C27=02100F2C2955528320,000106081227=02100F2C29555283207A706C,00010608060F=02100F2C29555283207A706C,000106081D34=02100F7020,7A7D000106030F02=02100F7055528315,2F8026000106083920=02100F7055528315,2F802600010608212A=02100F7055528315,000106082A20=02100F7055528315,000106083A26=02100F7055528315,000106080439=02100F7055528315,000106080008=02100F7055528315,000106081B21=02100F7055528315,00010608071B=02100F7055528315,000106080D24=02100F7055528315,000106082C2E2C32=02100F7055528315,000106082C2E2B2C=02100F7055528315,00010608032C201402=02100F7055528315,00010608032C20391C=02100F7055528315,7A7D000106031F10=02100F705552831538,2F8026000106082D06=02100F70555283157A,2F802600010608290D=02100F20,7A702C000106032416=02100F20,616D000106037A702C34=02100F20292C,7A70000106031C2A=02100F528315,7A7055000106032234=02100F528315,7A7055000106032A21=02100F55528315,000106037A703313=02100F55528315,000106037A700509=02100F55528315,000106037A702D03=02100F55528315,000106037A700613=02100F55528315,000106037A702235=02100F55528315,000106037A70391D=02100F55528315,000106037A70100F=02100F55528315,000106087A702C111B=02100F55528315,000106087A702C2E2916=02100F55528315,7A2C71707D000106030430=02100F55528315,7A2C71707D000106033B32=02100F55528315,7A2C71707D000106081903=02100F55528315,7A702C2E000106033A27=02100F55528315,7A702C000106030931=02100F55528315,7A702C000106030C1C=02100F55528315,7A70000106032735=02100F555283152C8071,000106037A700B13=02100F555283152C807138,000106037A701517=02100F555283152C807138,000106037A702917=02100F555283156C,000106037A703136=550F522010,7A2C71707D01022A1E=550F715220,7A702C2E1333=550F715220,7A702C2E000106081405=556C,000106087A702C2E0433=556C,7A70000106083B38=556C0F197120,7A702C2E1E01=556C0F19712001,7A702C2E190B=556C000108,7A70230B=556C000108,7A702C2E1A0F=556C0001082C807115295256,7A701830=556C0008,7A2C71707D01023814=556C100F295220,7A2C71707D03082F=556C100F295220,7A702C0C1D=556C100F295220,7A702C2E00010603021D=556C100F295220,7A70000106031121=556C100F2952202C,7A701835=556C100F2952202C80713815,000106037A703B30=556C100F29522002,000106037A70290C=556C100F29522002,7A70000106030930=556C100F2952200238,000106037A702B27=556C100F2952200102,7A702C2E3812=556C08,000106037A701012=556C08,000106037A701621=556C08,7A702C2E000106033209=556C08,7A702C2E000106032021=556C082C807138152952,000106037A700009=556C082C807138152952,000106037A702A1D=807138152952000170100F,032C200A05=807138152952000170100F,032C20273B=8071381529527A706C550F,032C203423=80711529525600010870556C100F,032C201511=80711529525600010870556C100F,032C20183B=80711529525600010870556C100F,032C203311=010F2C80093829206C55,7A702B29=010F2C80093829206C55,7A70616D3A25=010F2C09382920,7A70550825=010F2C093829207A6C5570,201E=010F09382920,7A702C2E352E=010670100F2C71522000,1C28=010670100F7152207A6C55,2C2E2E11=0106100F7152,7A70032C203205=0106100F71526C,7A70032C202A19=0102290F20,7A702C2E2A1F=010270290F2C207A6C55,2413=010270290F2C207A6C55,0437=010270290F2C207A6C55,0935=010270550F,032C201B18=010270550F20,2B24=010270550F20,2F80261906=010270550F20,2C2E2732=010270550F20,2C2E071A=010270550F20,2C2E3700=010270550F20,7A7D1724=010270550F203800,2F80263921=010270550F202C29,416D290F=010270550F202C807138152952,1619=010270550F202C8071381529527A,3207=010270550F202C80711529525600,0829=010270550F2000,060D=010270550F2000,0001=010270550F2000,2736=010270550F207A,1B1E=010270550F207A,2C2E140B=010270550F207A6C,0114=010270550F7A6C,032C202C3B=010270550F7A6C,032C20201F=0102550F20,7A702C1A13=0102550F20,7A702C3637=0102550F20,7A702C280B=0102550F20,7A702C223B=0102550F20,7A702C032D04=0102100F2C29528320,7A701409=0102100F2C29528320,7A70552307=0102100F2C2952832000,0005=0102100F295283,032C207A700A00=0102100F2955528320,7A2C71707D082D=0102100F2955528320,7A702C2E2809=0102100F295552832000,7A702C2E2B2D=0102100F7055528315,021E=0102100F7055528315,0C20=0102100F7055528315,2F80263420=0102100F7055528315,2F80261510=0102100F7055528315,2F80262E10=0102100F7055528315,2F80262806=0102100F7055528315,2F80263134=0102100F7055528315,2F80261D38=0102100F7055528315,2F8026251A=0102100F7055528315,2F80263A2A=0102100F7055528315,2F80267A7D1120=0102100F7055528315,2F80267A7D0824=0102100F7055528315,2C2E1E00=0102100F7055528315,2C2E7A2F1D=0102100F7055528315,032C200A06=0102100F7055528315,7A7D2C2E1C2E=0102100F70555283153800,2F80261832=0102100F70555283153800,2C2E280A=0102100F70555283153800,2C2E320A=0102100F705552831538007A,2738=0102100F705552831538007A6C,2F80260720=0102100F705552831538007A6C,2F8026032B=0102100F70555283152C292000,1907=0102100F70555283152C292000,3703=0102100F70555283152C292000,2739=0102100F70555283152C29207A,251B=0102100F70555283152C29207A,2B25=0102100F70555283152C29207A6C,1331=0102100F70555283152C207A,0D29=0102100F70555283152C80717A,1B1D=0102100F70555283158071,032C200D2D=0102100F705552831500,1725=0102100F705552831500,352D=0102100F705552831500,0C19=0102100F705552831500,150F=0102100F705552831500,3025=0102100F705552831500,0F07=0102100F705552831500,1E09=0102100F705552831500,251F=0102100F705552831500,010C=0102100F705552831500,2F80261A10=0102100F705552831500,2F80261016=0102100F705552831500,2F80260934=0102100F705552831500,2F80262910=0102100F705552831500,2F80267A7D1A14=0102100F705552831500,2C2E2304=0102100F705552831500,7A7D3421=0102100F7055528315002C2920,212F=0102100F7055528315002C807138,111F=0102100F7055528315002C807138,3135=0102100F7055528315008071,032C200828=0102100F7055528315007A6C,2022=0102100F70555283156C,7A7D140A=0102100F70555283156C,7A7D2C2E2127=0102100F70555283157A,1618=0102100F70555283157A,0B0F=0102100F70555283157A,1836=0102100F70555283157A,172E=0102100F70555283157A,2F8026352A=0102100F70555283157A,2F80262B2E=0102100F70555283157A,2F8026082A=0102100F70555283157A,2F80262306=0102100F70555283157A,2F80263702=0102100F70555283157A,2F80262C38=0102100F70555283157A,2F80261E06=0102100F70555283157A,2F80261B1A=0102100F70555283157A,2F8026032A=0102100F70555283157A,2C2E1F14=0102100F70555283157A,2C2E3810=0102100F70555283157A,2C2E262C=0102100F70555283157A29,032C20201A=0102100F70555283157A00,2F80260A02=0102100F70555283157A00,2F80261838=0102100F70555283157A6C,2F80260E34=0102100F70555283157A6C,2F80260438=0102100F70555283157A6C,2C2E2F1A=0102100F70555283157A6C,2C2E2305=0102100F528315,7A70553525=0102100F5283152C8071,7A70550723=0102100F528315807138,7A7055032C200D2A=0102100F55528315,2F80267A2C71707D3316=0102100F55528315,2F80267A2C71707D1224=0102100F55528315,2F80267A2C71707D212E=0102100F55528315,2F80267A700616=0102100F55528315,2F80267A70380C=0102100F55528315,2F80267A700434=0102100F55528315,2F80267A702A18=0102100F55528315,7A2C71707D2628=0102100F55528315,7A2C71707D100C=0102100F55528315,7A2C71707D2F80261729=0102100F55528315,7A701F15=0102100F55528315,7A70240E=0102100F55528315,7A703632=0102100F55528315,7A701339=0102100F55528315,7A700115=0102100F55528315,7A702C2C37=0102100F55528315,7A702C320B=0102100F55528315,7A702C3206=0102100F55528315,7A702C2E2238=0102100F55528315,616D2F80267A2C71707D3816=0102100F555283153800,2F80267A701406=0102100F555283153800,2F80267A700111=0102100F555283152C8071,7A700501=0102100F555283152C8071,7A70370B=0102100F555283152C807138,7A703B37=0102100F555283152C80713800,7A701C2F=0102100F555283152920,7A702C240F=0102100F555283152920,7A702C0A03=0102100F555283152920,7A702C0221=0102100F55528315292000,7A702C2E3317=0102100F55528315292000,7A702C2E3634=0102100F5552831500,2F80267A2C71707D3028=0102100F5552831500,7A2C71707D111A=0102100F5552831500,7A2C71707D071E=0102100F5552831500,7A2C71707D2913=0102100F5552831500,7A702F19=0102100F5552831500,7A702301=0102100F5552831500,7A702C3919=0102100F5552831500,7A702C3B33=0102100F5552831500,7A702C2E0223=0102100F5552831500,7A702C03032F=0102100F55528315006C,7A702C2E262E=0102100F555283156C,2F80267A70032E=0102100F555283156C,7A2C71707D0F0B=0102100F555283156C,7A701D3B=0102100F555283156C,7A702C2E030116=01100F1571292C20,2F80267A703200=01100F1571292C20,7A7055370A=01100F1571292C2000,7A701B22=01100F1571292C2000,7A701E04=01100F1571292C2000,416D1336=01100F1571292C20007A70556C,391A=01100F1571292C20007A6C7055,1C24=01100F1571292C207A7055,2F80260D2E=01100F15712920,7A702C2E2D0A=01100F15712920,7A702C2E2800=01100F15712920027A7055,2C2E251E=01100F157129207A70556C,2C2E1228=01100F157129207A70556C,416D2C2E050A=01100F5220,7A70550000=01100F5220,616D2624=01100F5220,616D2F80267A702804=01100F5220006C,7A70550F06=01100F52207A70556C,2C2E2F1E=01100F52207A70556C,2C2E1014=01100F527A70556C,032C20161E=01100F712920,7A702C2E0A0A=01100F71522C2920,616D161C=0070100F292C20,01020F04=0006100F7020,7A7D01026D183A=0006100F7020,616D0102201C=0006100F20,7A2C71707D01026D1D37=000170100F292C20,2F18=000170100F292C802038,161D=00014B0F,032C201338=00014B0F2C2002,2F80261728=00014B0F20,2C2E0F0A=00014B0F20,7A2C71707D1833=00014B0F20,7A702C1407=00014B0F20,7A702C1401=0001060838,2C2E1123=0001060838,416D032C202019=000106082C38,2C31=000106082C38,391F=000106082C38,2523=000106082C38,7A70416D1C29=000106082C38020F71295283,3811=000106082C38020F71295283,7A700937=000106082C386C550F197120,7A700117=00010252100F29202C7A706C55,1337=00010206700F202C807138152952,3A2E=00010206100F7020,616D0610=00010206100F20,7A2C71707D0328=00010206100F20,7A700F01=00010206100F20,7A702C3310=00010206100F20,7A702C2E3139=0001100F298020,7A702C2625=00010870556C100F2C20,1909=00010870556C100F2C20,391E=00010870556C100F2C20,2124=00010870556C100F2C20,2F80267A7D0F00=00010870556C100F2C2038,2D09=00010870556C100F2C2002,0500=00010870556C100F2C207A,2C39=00010870556C100F2C207A,2518=00010870556C100F2C207A,0B0C=00010870556C100F2C207A,2F80262911=00010870556C100F7A,032C200007=000108556C100F2C2029,7A700A07=000108556C100F2C2029,7A701332=000108556C100F20,2C2E7A70100D=000108556C100F20,7A702C2E2239=000108556C100F20,7A702C2E0A01=000108556C100F20,7A702C2E380D=0001086C100F2C20,7A70551D36=0001086C100F2C20,7A70552F1F=000108100F70552920,010D=000108100F70552920,616D0507=000108100F705529202C80713815,0B0D=000108100F705529202C8071157A,3133=000108100F7055292002,2309=000108100F7055292002,416D0002=000108100F705529207A,2F80263202=000108100F705529207A,2F80263638=000108100F705529207A,2C2E2A1A=000108100F705529207A38,2F80262414=000108100F705529207A6C,2C2E2E14=000108100F552920,7A2C71707D1404=000108100F552920,7A2C71707D0B17=000108100F552920,7A70330D=000108100F552920,7A702C172F=000108100F552920,7A702C2E3707=000108100F5529206C,616D7A702C2E302E=6C55700F197120,2C2E7A7D0C22=6C55700F197120,7A7D01026D1E02=6C550F297120,000106037A703923=6C550F297120,7A702C2E03230A=6C550F1920,7A2C71707D240C=6C550F19200210,7A2C71707D000106031A16=6C550F197120,000106037A701513=6C550F197120,7A703A2B=6C550F197120,7A701837=6C550F197120,7A702F23=6C550F197120,7A702F22=6C550F197120,7A702D07=6C550F197120,7A702C2E3922=6C550F197120,7A700102093A=6C550F197120,7A70000106031B19=6C550F197120,616D7A70071F=6C550F197120,616D7A702C2E212B=6C550F197120,616D7A702C2E000106032734=6C550F197120292C,000106037A700325=6C550F1971200001020610,7A702C122B=6C550F19712008,000106037A702411=6C100F2952,7A7055032C20010E=100F2C29528320,01023704=100F2C29528320,0102363A=100F292C206C55,000106037A702B26=100F2920,7A2C71707D01026D302C=100F7055528315,01021E08=100F7055528315,01022730=100F7055528315,01021512=100F7055528315,010200352C=100F7055528315,7A7D01026D2F1C=100F7055528315,7A7D01026D0222=100F70555283153800,01026D2412=100F70555283157A,01022230=100F70555283157A,0102060E=100F70555283157A6C,01022C3A=100F70555283157A6C,01026D1F12=100F1571292C20,01026D3B36=100F1571292C20,01026D1516=100F1571292C20,000106037A702302=100F1571292C20,000106037A701D32=100F1571292C20,000106082F8026330E=100F1571292C20,000106086D2A1C=100F1571292C20,7A7001026D313A=100F1571292C20,7A7000010603341C=100F1571292C20,416D7A70000106032B2A=100F1571292C2002,000106037A700326=100F1571292C20556C,000106037A70273A=100F1571292C2000,01026D0722=100F1571292C2000,01026D2E0C=100F1571292C206C55,000106037A701408=100F1571292C207A706C55,01022020=100F1571292C207A706C55,000106081726=100F1571292C207A6C7055,0102290E=100F1571292C207A6C7055,000106080932=100F1571292C207A6C7055,000106080D26=100F52,00010608032C20100E=100F5283153800,01027A70550B16=100F5220,2F8026000106081122=100F5220,6D010200133A=100F5220,01026D1F16=100F5220,000106037A703132=100F5220,000106083B3A=100F5220,000106082522=100F5220,00010608190A=100F5220,000106082C2E021C=100F5220,7A70000106030936=100F52202C,01026D3A2C=100F52206C55,01027A701A0C=100F52206C55,000106037A700E30=100F52206C55,000106037A700A08=100F52207A706C55,000106083204=100F52207A6C5570,01026D0B0E=100F55528315,01027A2C71707D0004=100F55528315,7A2C71707D01026D1D3A=100F55528315,7A2C71707D01026D3418=100F5552831500,7A2C71707D0102201D=100F712920,7A702C2E00010608030E36=100F71522C2920,01023635=100F715229,00010608032C20021B=7A70550F2C715220,1900=7A70550F715220,2C2E0A09=7A70556C,00010608172C=7A70556C,00010608032C200B14=7A70556C,00010608032C202914=7A70556C0F197120,2C2E0938=7A70556C0F197120,000106082C2E111E=7A70556C000108,0502=7A70556C000108,2F80260D2F=7A70556C0001082C807138152952,2D0B=7A70556C0001082C807138152952,3633=7A70556C0001082C807115295256,0C18=7A70556C0008,01020218=7A70556C0008,0102302F=7A70556C100F295220,000106082C35=7A70556C100F295220,000106081E0B=7A70556C100F2952202C807115,3130=7A70556C100F29522002,000106080506=7A70556C100F29522001,2C2E330F=7A70556C100F29522001022C8071,010F=7A70556C100F295220010200,0435=7A70556C100F295280713815,032C200614=7A70556C100F295201,032C20122C=7A70556C100F29520102,032C203B39=7A706C550F297120,0F05=7A706C550F297102,032C200D25=7A706C550F19712001,616D2233=7A706C550F19712000010608,2626=7A6C70550F197120,01021A17=7A6C70550F197120,00010608262F=7A6C70550F1971202C29,000106083529=7A6C70550F19712002,616D000106082D08=7A6C70550F197120103800,0102341F=7A6C55700F197120,2C2E172B=082C38,7A7055000106030D27=082C38,7A70000106030827=08556C100F2C20,000106037A702803=08556C100F2C20,000106037A701013=08556C100F2C20,7A7000010603262B=08556C100F2C20,7A7000010603240D=08556C100F2C20,7A70000106033631=08556C100F2C20,7A70000106030431=08556C100F20,7A702C2E000106031D35=08100F552920,000106037A701335=08100F552920,000106037A700612=08100F55292038,000106037A70";s.SHEN_SHA=["{s.none}","{sn.tianEn}","{sn.mingFei}","{sn.muCang}","{sn.buJiang}","{sn.siXiang}","{sn.mingFeiDui}","{sn.wuHe}","{sn.sanHe}","{sn.chuShen}","{sn.yueDe}","{sn.yueKong}","{sn.yueDeHe}","{sn.yueEn}","{sn.shiYin}","{sn.wuFu}","{sn.shengQi}","{sn.jinKui}","{sn.xiangRi}","{sn.yinDe}","{sn.liuHe}","{sn.yiHou}","{sn.qingLong}","{sn.xuShi}","{sn.mingTang}","{sn.wangRi}","{sn.yaoAn}","{sn.guanRi}","{sn.jiQi}","{sn.fuDe}","{sn.liuYi}","{sn.jinTang}","{sn.baoGuang}","{sn.minRi}","{sn.linRi}","{sn.tianMa}","{sn.jingAn}","{sn.puHu}","{sn.yiMa}","{sn.tianHou}","{sn.yangDe}","{sn.tianXi}","{sn.tianYi}","{sn.siMing}","{sn.shengXin}","{sn.yuYu}","{sn.shouRi}","{sn.shiDe}","{sn.jieShen}","{sn.shiYang}","{sn.tianCang}","{sn.tianWu}","{sn.yuTang}","{sn.fuSheng}","{sn.tianDe}","{sn.tianDeHe}","{sn.tianYuan}","{sn.tianShe}","{sn.tianFu}","{sn.yinShen}","{sn.jieChu}","{sn.wuXu}","{sn.wuLi}","{sn.chongRi}","{sn.fuRi}","{sn.xueZhi}","{sn.tianZei}","{sn.tuFu}","{sn.youHuo}","{sn.baiHu}","{sn.xiaoHao}","{sn.zhiSi}","{sn.heKui}","{sn.jieSha}","{sn.yueSha}","{sn.yueJian}","{sn.wangWang}","{sn.daShi}","{sn.daBai}","{sn.xianChi}","{sn.yanDui}","{sn.zhaoYao}","{sn.jiuKan}","{sn.jiuJiao}","{sn.tianGang}","{sn.siShen}","{sn.yueHai}","{sn.siQi}","{sn.yuePo}","{sn.daHao}","{sn.tianLao}","{sn.yuanWu}","{sn.yueYan}","{sn.yueXu}","{sn.guiJi}","{sn.xiaoShi}","{sn.tianXing}","{sn.zhuQue}","{sn.jiuKong}","{sn.tianLi}","{sn.diHuo}","{sn.fourHit}","{sn.daSha}","{sn.gouChen}","{sn.baZhuan}","{sn.zaiSha}","{sn.tianHuo}","{sn.xueJi}","{sn.tuHu}","{sn.yueXing}","{sn.chuShuiLong}","{sn.diNang}","{sn.baFeng}","{sn.siFei}","{sn.siJi}","{sn.siQiong}","{sn.wuMu}","{sn.yinCuo}","{sn.siHao}","{sn.yangCuo}","{sn.guChen}","{sn.xiaoHui}","{sn.daHui}","{sn.baLong}","{sn.qiNiao}","{sn.jiuHu}","{sn.liuShe}","{sn.tianGou}","{sn.xingHen}","{sn.liaoLi}","{sn.suiBo}","{sn.zhuZhen}","{sn.sanSang}","{sn.sanYin}","{sn.yinDaoChongYang}","{sn.yinWei}","{sn.yinYangJiaoPo}","{sn.yinYangJuCuo}","{sn.yinYangJiChong}","{sn.guiKu}","{sn.danYin}","{sn.jueYin}","{sn.chunYang}","{sn.yangCuoYinChong}","{sn.qiFu}","{sn.chengRi}","{sn.guYang}","{sn.jueYang}","{sn.chunYin}","{sn.daTui}","{sn.siLi}","{sn.yangPoYinChong}"];s.DAY_SHEN_SHA=[";000002300F14156869717A3F;01001617495C40413C425D6A;0209000C041831031906054A5E6B4B5F;033500041A1B032C06054C4D4E60;04002D321C1D1E104F50615152;05111F53546C55433C3E;062E200721220D01566E44;070B2333242F45;08360A2526242F080157583D59;091234080162463C3D5A;0A270728292A5B6364653F79;0B0237130E2B4748727A3E66;0C09020C04300F0314150568696D;0D3504031617495C40413C6F425D6A;0E38183119064A5E6B4B5F;0F001A1B032C064C4D4E60;10002D321C1D1E104F50615152;110B00111F53546C55433C3E;12360A002E200721220D015644;13002333456D;142526242F080157583F3D59;15001234080162463C3D5A;16090004270728292A5B636465;17350204130E032B47483E66;1802300F14156869;19031617495C40413C425D6A;1A1831031906054A5E6B4B5F;1B0B1A1B032C06054C4D4E;1C360A2D321C1D1E104F50615152;1D111F53546C55433C3E;1E2E200721220D01563F44;1F23334573;20090C042526242F080157583D;2135041234080162463C3D5A;22270728292A5B636465;2302130E032B47483E66;2402300F0314150568696E;250B031617495C40413C425D6A;26360A18311906054A5E6B4B5F;271A1B2C06054C4D4E60;282D321C1D1E104F506151523F;29111F53546C55433C3E;2A090C042E200721220D015644;2B350423334567;2C2526242F0857583D59;2D001234080162463C3D5A;2E00270728292A5B63646574;2F0B0002130E032B47483E66;30360A0002300F141505686975;31001617495C40413C425D6A676D;3218311906054A5E6B4B3F675F76;331A1B2C06054C4D4E60;34090C042D321C1D1E104F50615152;353504111F53546C55433C6F3E;362E200721220D5644;3723334567;382526242F08015758703D6759;390B123408016246703C3D5A84;3A360A270728292A5B636465;3B02130E2B47483E66;",";00090002272A536C4C4D4E41717A;0100300F3103233C6151523F66;020004180E032406150543405D;03000C041A1D340617054A5E6B4F50;04002D1B555F;050B112526321C2B3C42654B3E60;060A2E2014100547546246;0712070D161F566A;0822192F0148453D44;092C083301575868695B633C3D;0A0937131E495C6459;0B020721282903727A3F3E5A;0C020427032A05536C4C4D4E416D;0D0C04300F03233C6F61515266;0E38180E24061543405D;0F0B001A1D3406174A5E6B4F5078;100A002D1B555F;1100112526321C2B3C42654B3E60;12002E2014100147546246;130012070D161F566A6D;140922192F080148453D44;152C083301575868695B633C3F3D44;160413031E495C6459;17020C0407212829033E5A;1802272A536C4C4D4E41;190B300F3103233C61515266;1A0A180E032406150543405D;1B1A1D340617014A5E6B4F50;1C2D1B555F;1D112526321C2B3C42654B3E60;1E092E2014100147546246;1F12070D161F56736E6A3F;200422192F080148453D44;210C042C083301575868695B633C3D;22131E495C6459;230B0207212829033E5A;240A0227032A05536C4C4D4E41;25300F31233C61515266;26180E2406150543405D;271A1D340617054A5E6B4F50;28092D1B555F;29112526321C2B3C42654B3F3E60;2A042E2014100147546246;2B0C0412070D161F566A67;2C22192F0848453D44;2D0B002C083301575868695B633C3D85;2E0A0013031E495C6459;2F0002072128293E5A;300002272A05536C4C4D4E4175;3100300F31233C6151526E676D66;3209180E2406150543405D;331A1D340617054A5E6B4F503F76;34042D1B555F;350C04112526321C2B3C6F42654B3E60;362E20141047546246;370B12070D161F566A67;380A22192F08014845703D6744;392C083301575868695B63703C3D74;3A131E495C6459;3B02072128293E5A;",";00000207282931032B717A6E5D59;01000314473C5A;020A000427182526300F1D16062A054F506A;03360B00041A1906055562464066;04002D2C154A5E6B6C733F788B;0512111B0E1E17483C3E;060C2E20321C016869655F;0753544960;08350907210D230810015B63564B3D77;091324081F014C4D4E453C423D;0A2203342F57586461515244;0B02032C4341727A3E;0C0A020407282931032B055D6D59;0D360B040314473C6F5A;0E3827182526300F1D16062A4F506A3F;0F001A19065562464066;10000C2D2C154A5E6B6C86;110012111B0E1E17483C3E;123509002E20321C0168696E655F;13005354495C6D60;1407210D230810015B63564B3D7F;1537130324081F014C4D4E453C423D;160A042203342F57586461515244;17360B0204033343413E;1802072829312B5D3F59;190314473C5A;1A0C27182526300F1D16062A054F506A;1B1A1906055562464066;1C35092D2C154A5E6B6C;1D12111B0E1E17483C3E;1E2E20321C016869655F;1F5354495C60;200A0407210D230810015B63564B3D80;21360B04130324081F014C4D4E453C423D;2222342F5758646151523F44;2302033343413E;24020C072829312B055D59;2514473C5A;26120927182526300F1D16062A054F506A;271A1906055562464066;282D2C154A5E6B6C76;2912111B0E1E17483C3E;2A0A042E20321C016869655F;2B360B045354495C6760;2C07210D2308105B63564B3F3D77;2D00130324081F014C4D4E453C423D;2E000C22342F57586461515244;2F00023343413E;3035090002072829312B05755D59;310014473C676D5A;3227182526300F1D16062A054F506A67;331A1906055562464066;340A042D2C154A5E6B6C;35360B0412111B0E1E17483C6F3E;362E20321C6869653F5F;375354495C6760;380C07210D230810015B6356704B3D677774;391324081F014C4D4E45703C423D;3A350922342F57586461515244;3B023343413E;",";000A00220362463C44;010B00072128291D334F50645D;02360002230605534855423F59;03000212300F24060568695A;0400042E27342A495C403C8C;050C04184A5E6B3E66788D76;06091A1B2B15014C4D4E;07352D321C14175B636151526577;0811130E16080147546C433C6A3D5F;0920070D190801563D60;0A0A032C2F104541;0B0B252631031E1F57584B3E;0C362203056246717B3C3F6D44;0D072128291D334F50645D;0E020423065348554259;0F00020C0412300F240668696E5A;1009002E12342A495C403C;113500184A5E6B3E66;12001A1B2B15014C4D4E;13002D321C14175B63615152656D77;140A11130E0316080147546C433C6F6A3D5F;150B20070D03190801563D60;1636032C2F104541733F;17252631031E1F5758727B4B3E;1804220362463C44;190C04072128291D334F50645D;1A09022306055348554259;1B3502120D0F24060568695A;1C2E27342A495C403C;1D184A5E6B3E66;1E0A381A1B2B15014C4D4E;1F0B2D321C14175B63615152657F;20363711130E0316080147546C433C6A3F3D5F;2120070D03190801563D60;2204032C2F104541;230C042526311E1F57584B3E;2409220562463C44;2535072128291D334F50645D;26022306055348554259;270212300F24060568695A;280A2E27342A495C403C6F;290B184A5E6B3E66;2A361A1B2B15014C4D4E3F81;2B2D321C14175B6361515265678074;2C0411130E03160847546C433C6A3D5F;2D000C0420070D190801566E3D60;2E09002C2F104541;2F35002526311E1F57584B3E;300022056246703C44;3100072128291D334F50645D676D;320A02230605534855426759;330B02120D0F2406056869755A;34362E27342A495C403C3F;35184A5E6B3E6676;36041A1B2B154C4D4E81;370C042D321C14175B6361515265677774;380911130E16080147546C433C6A3D675F;393520070D190801563D60;3A2C2F104541;3B2526311E1F5758704B3E87;",";00001D2F10575868694F503C;0100122B1F495C5564;0209000207222829140605655D44;03000216063305474C4D4E51526A4B3F;04000C042E300F193C6159;0504182C43403E5A;06271A1E2A014A5E6B6C5B6342;070B2D1B1366;080A112526321C0815013C3D;0920032308170153546246413D;0A07210D310324565F;0B0E033448453E60;0C091D2F1005575868694F50717B3C6D;0D122B1F495C553F;0E020C04072228291406655D44;0F000204160633474C4D4E51526A4B;10002E300F193C6159;110B00182C43403E5A;120A00271A1E2A014A5E6B6C5B6342;13002D1B13036D66;14112526321C030815013C6F3D;1520032308170153546246413D;160907210D31032456735F;170E344845727B3F3E60;180C041D2F10575868694F503C;1904122B1F495C5564;1A0207222829140605655D44;1B0B0216063305474C4D4E51526A4B;1C0A2E300F193C6159;1D182C43403E5A;1E38271A1E2A014A5E6B6C5B6342;1F2D1B130366;2009112526321C030815013C3D;21202308170153546246413F3D;220C0407210D3103565F;23040E3448453E60;241D2F1005575868694F503C;250B122B1F495C5564;260A0207222829140605655D44;270216063305474C4D4E51526A4B;282E300F193C6F616E59;29182C43403E5A;2A09271A1E2A014A5E6B6C5B63427988;2B372D1B133F6766;2C0C04112526321C0308153C3D;2D0004202308170153546246413D;2E0007210D3124565F;2F0B000E3448453E60;300A001D2F1005575868694F50703C89;3100122B1F495C5564676D;320207222829140605655D6744;330216063305474C4D4E7551526A4B;34092E300F193C6159;35182C43403F3E5A;360904271A1E2A4A5E6B6C5B634278;37042D1B136766;38112526321C0815013C3D67;390B202308170153546246413D;3A0A07210D3124566E5F;3B0E03344845703E60;",";003509001E2F554C4D4E453C51525D5F;010057586C646160;0200020E06100543;0300020721282923061F0565;0400042E2224533C7344;05360B04182526300F34335B633F3E74;060A1A13016246404B59;070C2D2B4A5E6B5A;0827111B0314082A0148413C3D;0920321C310316080148413C3D;0A35090319154754495C42;0B12070D1D2C174F50563E;0C1E2F05554C4D4E45717B3C51525D6D5F;0D57586C646160;0E02040E061043;0F360B0002040721282923061F653F;100A002E2224533C44;11000C182526300F34335B633E;12001A1303016246404B59;13002D032B4A5E6B6D5A;14350927111B0314082A0148413C6F3D;1520321C310316080168696A3D66;1619154754495C426E;1712070D1D2C174F5056727B3E;18041E2F554C4D4E453C51525D5F;19360B0457586C64613F60;1A0A020E06100543;1B020C0721282923061F0565;1C2E2224533C44;1D182526300F34335B633E;1E3509381A1303016246404B59;1F2D032B4A5E6B5A;2027111B14082A0148413C3D;2120321C3116080168696A3D66;22040319154754495C42;23360B0412070D1D2C174F50563F3E;240A1E2F05554C4D4E453C51525D5F;250C57586C646160;26020E06100543;27020721282923061F0565;2835092E2224533C6F44;29182526300F34335B633E;2A1A13016246404B5982;2B2D2B4A5E6B675A76;2C0427111B0314082A48413C3D;2D360B000420321C3116080168696A3F3D66;2E0A0019154754495C42;2F000C12070D1D2C174F50563E;30001E2F05554C4D4E45703C51525D5F;310057586C6461676D608E;323509020E0610054367;33020721282923061F057565;342E2224533C6E44;35182526300F34335B633E7974;3637041A13036246404B5982;37360B042D2B4A5E6B3F675A76;380A27111B14082A0148413C3D67;390C20321C3116080168696A3D66;3A0319154754495C42;3B12070D1D2C174F5056703E;",";0000302007210D341556;01000217455D;020A0025262B2F060557586C5F;030B001406056246603C8F;0436000207282916105B6364656A;0537130E191F47483E;0622300F2C0168693F44;07021E33495C40413C;08090C04184A5E423D59;093504121A1B0308014C4D4E51524B3D5A;0A02272D321C1D232A4F507E61;0B1124535455433E66;0C0A2E2007210D341505566D;0D0B0217455D;0E3625262B2F0657586C;0F00140662463C4260;10000207282916105B6364656A3F79;1100130E191F47483E;1209350C0422300F032C01686944;1335000204031E33495C40413C6D;1418310308014A5E6B3D59;15121A1B0308014C4D4E51524B3D5A;160A02272D321C1D232A4F507E61;170B1124535455433C6F6E3E66;18362E2007210D341556;190217455D;1A25262B060557586C3F5F;1B14060562463C4260;1C09020C0407282916105B6364656A;1D3504130E03191F47483E;1E22300F032C01686944;1F02031E495C40413C;200A183108014A5E6B3D59;210B121A1B08014C4D4E51524B3D5A;223602272D321C1D232A4F507E61;231124535455433C3E66;242E2007210D34150556717C3F;25021745735D;26090C0425262B2F060557586C5F;27350414060562463C4260;280207282916105B6364656A74;29130E03191F47483E;2A0A22300F2C01686944;2B0B021E33495C40413C6F67;2C36381831034A5E6B3D59;2D00121A1B08014C4D4E51524B3D5A;2E0002272D321C1D232A4F507E613F;2F00112453545543727C3C3E66;3009000C042E2007210D34150556;313500020417455D676D;3225262B2F060557586C70675F;331406056246703C426084;340A0207282916105B6364656A;350B130E191F47486E3E;363622300F032C7544;37021E33495C40413C67;38183108014A5E6B3F3D675976;39121A1B08014C4D4E51524B3D5A;3A09020C04272D321C1D232A4F507E61;3B35041124535455433C3E66;",";000A002E27202C2A475462464B;010B0002070D1E5666;02002F06150548456E5D;0300061705575868695B633C;040002130323495C645F;0507212829249060;0609341001534C4D4E415152;070212300F31031F3C61423F;080418220E032B080143403D44;090C041A1D14080833014A5E6B6C4F503D;0A0A022D1B16556A59;0B0B112526321C193C653E5A;0C2E27202C2A05475462464B6D;0D02070D1E5666;0E2F061548455D;0F000617575868695B633C85;10090002371323495C645F;11000721282903243F3E60;12000403341001534C4D4E415152;1300020C0412300F31031F3C61426D;140A18220E032B080143403D44;150B1A1D140833014A5E6B6C4F503D;16022D1B16556A59;17112526321C193C6F653E5A;182E27202C2A475462464B;1902070D1E5666;1A092F06150548455D;1B061705575868695B633C3F79;1C0204130323495C645F;1D0C040721282903243E60;1E0A03341001534C4D4E415152;1F0B0227300F311F3C6142;2018220E2B080143406E3D44;211A1D140833014A5E6B6C4F503D;22022D1B16556A59;23112526321C193C653E5A;24092E27202C2A0547546246717C4B;2502070D1E56733F66;26042F06150548455D;270C04061705575868695B633C;280A02130323495C645F;290B07212829243E60;2A341001534C4D4E415152;2B0212300F311F3C6F614267;2C3818220E032B0843403D44;2D001A1D140833014A5E6B5B4F503D78;2E0900022D1B16556A59;2F00112526321C19727C3C653F3E5A;3000042E27202C2A05475462464B;3100020C04070D1E56676D66;320A2F0615054845705D67;330B061705575868695B63703C74;34021323495C645F;3507212829243E60;36033410534C4D4E41755152;370212300F311F3C614267;380918220E2B080143403D6744;391A1D140833014A5E6B6C4F503F3D76;3A02042D1B16556A59;3B0C04112526321C193C653E5A;",";00002E20391C246869655D59;010002345354495C5A;023509002707210D062A055B6356515277;0300132B06054C4D4E453C66;04000203142F1557586473614B3F;0512161743416A3E;060C072829310319015F;07360B02032C476C3C6E60;080A04182526300F1D1E0810014F503D;09041A081F01556246403D;0A022D224A5E6B4486;0B111B0E2333483C423E;0C35092E20321C24056869655D6D59;0D02345354495C5A;0E2707210D062A5B635651523F77;0F00132B064C4D4E453C66;1000020C03142F15575864614B;11360B001203161743416A3E;120A0004072829310319015F;13000204032C476C3C6D60;14182526300F1D1E0810014F503D;151A081F01556246403D;163509022D224A5E6B44;17111B0E2333483C6F423E;182E20321C246869655D3F59;1902345354495C5A;1A0C2707210D062A055B635651527F;1B360B3713032B06054C4D4E453C66;1C0A020403142F15575864614B;1D041203161743416A3E;1E0728293119015F;1F022C476C3C60;203509182526300F1D1E08104F503D;211A081F01556246403D;22022D224A5E6B3F447891;23111B0E2333483C423E;240C2E20321C24056869717C655D59;25360B021C5354495C6E5A;260A042707210D062A055B6356515280;270413032B06054C4D4E453C66;2802142F15575864614B;2912161743416A3E;2A35090728293119015F;2B022C476C3C6F6760;2C38182526300F1D1E08104F503F3D;2D001A081F01556246403D;2E0002092D224A5E6B4476;2F360B00111B0E233348727C3C423E;300A00042E20321C24056869655D59;31000204345354495C676D5A;322707210D062A055B6356705152677774;33132B06054C4D4E45703C66;34350902142F15575864614B;3512161743416A3E;36072829310319753F5F;37022C476C3C6760;380C182526300F1D1E0810014F503D67;39360B1A081F01556246403D;3A0A02042D224A5E6B44;3B04111B0E2333483C423E;",";00090038041A221B194C4D4E44;0135000C042D321C2C335B6361655D77;02002E11130E1E06054754433C59;03001220070D0605565A;0400272F2A454142;050B252631032357583E66;06360A0324150162463C;07072128291D34174F50644B;080208015348553F3D5F;0902300F2B080168693D60;0A09041410495C403C6F;0B35090418161F4A5E6B6C5152403E;0C1A221B19054C4D4E6D44;0D2D321C2C335B6361655D77;0E2E11130E1E064754433C6E59;0F0B351220070D0306565A;10360A0027032F2A454142;1100252631032357583E66;12000324150162463C3F;1300072128291D34174F50644B6D;1409020408015348553D5F;1535020C04300F2B080168693D60;161410495C403C;1718161F4A5E6B6C51526A3E;181A221B194C4D4E4481;190B0A2E11130E031E06054754433C59;1A360A2E11130E031E06054754433C59;1B1220070D030605565A;1C27032F2A454173423F;1D252631032357583E66;1E090424150162463C;1F350C04072128291D34174F50644B;200208015348553D5F;2102300F2B080168693D60;221410495C403C92;230B18161F4A5E6B6C51526A3E7893;24360A1A221B19054C4D4E44;252D321C2C335B6361655D7F;26372E11130E031E06054754433C3F59;271220070D030605565A;280904272F2A454142;29350C042526312357583E66;2A2415016246703C;2B072128291D34174F50644B67;2C02085348556E3D5F;2D090002300F2B080168693D60;2E360A001410495C403C;2F0018161F4A5E6B6C51526A3E;30001A221B19054C4D4E717D3F4481;31002D321C2C335B6361655D676D8074;3209042E11130E1E06054754433C6F6759;33350C042720070D0605565A;34272F2A454142;35252631235758703E6687;36241562463C;370B072128291D34174F50644B67;38360A023A015348553D675F;3902300F2B08016869753D60;3A1410495C403C3F;3B18161F4A5E6B6C727D51526A3E76;",";0000380C041A23104A5E6B5B63;010004122D1B13241F838A;020A002E11252622321C3406053C5D44;030B00200306330553544641;040007210D312B5659;050E031448453E5A;060E1D162F2A01575868694F503C6A;0719495C556466;0809020728292C081501515242653D;09021E081701474C4D4E3F3D;0A0C04300F3C6F614B5F;0B041843403E60;0C0A1A2310054A5E6B5B636D;0D0B122D1B1303241F838A94;0E2E11252622321C34063C5D44;0F002003063353546C624641;100007210D31032B5659;11000E031448453E5A;120900271D162F2A01575868694F503C6A;130019495C55643F6D66;14020C040728292C081501515242653D;1502041E081701474C4D4E3D;160A300F3C614B5F;170B1843403E60;181A23104A456B5B6378;19122D1B1303241F9583;1A2E11252622321C033406053C5D44;1B200306330553546C6246416E;1C0907210D31032B567359;1D0E1448453F3E5A;1E0C04271D163B2A01575868694F503C6A;1F0419495C556466;200A020728292C081501515242653D;210B021E081701474C4D4E3D;22300F3C614B5F;231843403E60;241A2310054A5E425B63;25122D1B1303241F;26092E11252622321C033406053C5D44;272006330553546C6246413F;280C0407210D312B5659;29040E1448453E5A;2A0A271D162F2A01575868694F50703C6A89;2B0B19495C55646766;2C020728292C0815515242653D;2D00021E081701474C4D4E3D;2E00300F3C614B5F;2F001843403E60;3009001A2310054A5E6B5B63717D7988;310037122D1B13241F3F676D;320C042E11252622321C3406053C6F5D6744;33042006330553546C624641;340A07210D312B5659;350B0E03144845703E5A;36271D162F2A575868694F503C6A;3719495C55646766;38020728292C081501515242653D67;39021E081701474C4D4E756E3D;3A09300F3C614B5F;3B184340727D3F3E60;",";000A003837041A1316624640425D6A5F;01360B00042D194A5E6B4B60;020009111B032C06100548413C;030020321C310310061F056869;0400224754495C7344;05070D1D334F505651523F3E;063509232F01554C4D4E453C59;070C24575864615A;0802270E34082A01433D;09020721282908016E653D66;0A0A042B15536C3C6F;0B360B0412182526300F14175B633E;0C1A13031605624640425D6A6D5F;0D2D03194A5E6B4B60;0E2E111B33061048413C;0F0020321C31031E061F68693F;1035090022034754495C44;11000C070D1D334F505651523E;1200232F01554C4D4E453C59;130024575864616D5A;140A0204270E0F082A01433D;15360B0204072128290801653D66;162B15536C3C;17121825260D0F14175B633E;181A1316624640425D6A5F82;192D03194A5E6B4B3F60;1A35092E111B032C061048413C;1B0C20321C31031E061F056869;1C224754495C44;1D07121D334F505651523E;1E0A04232F01554C4D4E453C59;1F360B0424575864615A;2002270E34082A01433D;2102072128290801653D66;222B15536C3C;2312182526300F14175B633F3E;2435091A13031605624640425D6A5F;250C2D03194A5E6B4B60;262E111B2C06100548413C;2720321C311E061F056869;280A04224746495C44;29360B04070D1D334F505651523E;2A232F01554C4D4E45703C59;2B2457586461675A96;2C02270E34082A433D;2D0002072128290801653F3D66;2E3509002B15536C3C;2F000C12182526300F14175B633E;30001A1316624640717D425D6A5F82;31002D194A5E6B4B676D6076;320A042E111B2C06100548413C6F67;33360B0420321C311E061F0568696E;3422034754495C44;35070D1D334F50567051523E;36232F554C4D4E453C59;3724575864613F675A;38350902270E34082A01433D67;39020C07212829080175653D66;3A2B15536C3C;3B12182526300F14175B63727D3E7974;"];class _0{constructor(n,t,e,i){this._day=_0._ymd(n),this._name=t,this._work=e,this._target=_0._ymd(i)}static _ymd(n){return n.indexOf("-")<0?n.substring(0,4)+"-"+n.substring(4,6)+"-"+n.substring(6):n}getDay(){return this._day}setDay(n){this._day=_0._ymd(n)}getName(){return this._name}setName(n){this._name=n}isWork(){return this._work}setWork(n){this._work=n}getTarget(){return this._target}setTarget(n){this._target=_0._ymd(n)}toString(){return this._day+" "+this._name+(this._work?"调休":"")+" "+this._target}}const m=class{static _padding(u){return(u<10?"0":"")+u}static _findForward(u){const n=m._DATA_IN_USE.indexOf(u);if(n<0)return null;let t=m._DATA_IN_USE.substring(n);const e=t.length%m._SIZE;for(e>0&&(t=t.substring(e));t.indexOf(u)!==0&&t.length>=m._SIZE;)t=t.substring(m._SIZE);return t}static _findBackward(u){const n=m._DATA_IN_USE.lastIndexOf(u);if(n<0)return null;const t=u.length;let e=m._DATA_IN_USE.substring(0,n+t),i=e.length;const a=i%m._SIZE;for(a>0&&(e=e.substring(0,i-a)),i=e.length;i-t!==e.lastIndexOf(u)&&i>=m._SIZE;)e=e.substring(0,i-m._SIZE),i=e.length;return e}static _buildHolidayForward(u){const n=u.substring(0,8),t=m._NAMES_IN_USE[u.charCodeAt(8)-m._ZERO],e=u.charCodeAt(9)===m._ZERO,i=u.substring(10,18);return new _0(n,t,e,i)}static _buildHolidayBackward(u){const n=u.length,t=u.substring(n-18,n-10),e=m._NAMES_IN_USE[u.charCodeAt(n-10)-m._ZERO],i=u.charCodeAt(n-9)===m._ZERO,a=u.substring(n-8);return new _0(t,e,i,a)}static _findHolidaysForward(u){const n=[];let t=m._findForward(u);if(t==null)return n;for(;t.indexOf(u)===0;)n.push(m._buildHolidayForward(t)),t=t.substring(m._SIZE);return n}static _findHolidaysBackward(u){const n=[];let t=m._findBackward(u);if(t==null)return n;let e=t.length;const i=u.length;for(;e-i===t.lastIndexOf(u);)n.push(m._buildHolidayBackward(t)),t=t.substring(0,e-m._SIZE),e=t.length;return n.reverse(),n}static getHoliday(u,n=0,t=0){const e=n==0||t==0?m._findHolidaysForward((u+"").replace(/-/g,"")):m._findHolidaysForward(u+m._padding(n)+m._padding(t));return e.length<1?null:e[0]}static getHolidays(u,n=0){return n==0?m._findHolidaysForward((u+"").replace(/-/g,"")):m._findHolidaysForward(u+m._padding(n))}static getHolidaysByTarget(u,n=0){return n==0?m._findHolidaysBackward((u+"").replace(/-/g,"")):m._findHolidaysBackward(u+m._padding(n))}static _fixNames(u){u&&(m._NAMES_IN_USE=u)}static _fixData(u){if(!u)return;const n=[];for(;u.length>=m._SIZE;){const t=u.substring(0,m._SIZE),e=t.substring(0,8),i=m._TAG_REMOVE==t.substring(8,9),a=m.getHoliday(e);if(!a)i||n.push(t);else{let F=-1;for(let r=0,g=m._NAMES_IN_USE.length;r<g;r++)if(m._NAMES_IN_USE[r]===a.getName()){F=r;break}if(F>-1){const r=e+String.fromCharCode(F+m._ZERO)+(a.isWork()?"0":"1")+a.getTarget().replace(/-/g,"");m._DATA_IN_USE=m._DATA_IN_USE.replace(new RegExp(r,"g"),i?"":t)}}u=u.substring(m._SIZE)}n.length>0&&(m._DATA_IN_USE+=n.join(""))}static fix(u,n){n?(Array.isArray(u)&&m._fixNames(u),m._fixData(n)):Array.isArray(u)?m._fixNames(u):m._fixData(u)}};let A0=m;A0.NAMES=["元旦节","春节","清明节","劳动节","端午节","中秋节","国庆节","国庆中秋","抗战胜利日"];A0.DATA="200112290020020101200112300020020101200201010120020101200201020120020101200201030120020101200202091020020212200202101020020212200202121120020212200202131120020212200202141120020212200202151120020212200202161120020212200202171120020212200202181120020212200204273020020501200204283020020501200205013120020501200205023120020501200205033120020501200205043120020501200205053120020501200205063120020501200205073120020501200209286020021001200209296020021001200210016120021001200210026120021001200210036120021001200210046120021001200210056120021001200210066120021001200210076120021001200301010120030101200302011120030201200302021120030201200302031120030201200302041120030201200302051120030201200302061120030201200302071120030201200302081020030201200302091020030201200304263020030501200304273020030501200305013120030501200305023120030501200305033120030501200305043120030501200305053120030501200305063120030501200305073120030501200309276020031001200309286020031001200310016120031001200310026120031001200310036120031001200310046120031001200310056120031001200310066120031001200310076120031001200401010120040101200401171020040122200401181020040122200401221120040122200401231120040122200401241120040122200401251120040122200401261120040122200401271120040122200401281120040122200405013120040501200405023120040501200405033120040501200405043120040501200405053120040501200405063120040501200405073120040501200405083020040501200405093020040501200410016120041001200410026120041001200410036120041001200410046120041001200410056120041001200410066120041001200410076120041001200410096020041001200410106020041001200501010120050101200501020120050101200501030120050101200502051020050209200502061020050209200502091120050209200502101120050209200502111120050209200502121120050209200502131120050209200502141120050209200502151120050209200504303020050501200505013120050501200505023120050501200505033120050501200505043120050501200505053120050501200505063120050501200505073120050501200505083020050501200510016120051001200510026120051001200510036120051001200510046120051001200510056120051001200510066120051001200510076120051001200510086020051001200510096020051001200512310020060101200601010120060101200601020120060101200601030120060101200601281020060129200601291120060129200601301120060129200601311120060129200602011120060129200602021120060129200602031120060129200602041120060129200602051020060129200604293020060501200604303020060501200605013120060501200605023120060501200605033120060501200605043120060501200605053120060501200605063120060501200605073120060501200609306020061001200610016120061001200610026120061001200610036120061001200610046120061001200610056120061001200610066120061001200610076120061001200610086020061001200612300020070101200612310020070101200701010120070101200701020120070101200701030120070101200702171020070218200702181120070218200702191120070218200702201120070218200702211120070218200702221120070218200702231120070218200702241120070218200702251020070218200704283020070501200704293020070501200705013120070501200705023120070501200705033120070501200705043120070501200705053120070501200705063120070501200705073120070501200709296020071001200709306020071001200710016120071001200710026120071001200710036120071001200710046120071001200710056120071001200710066120071001200710076120071001200712290020080101200712300120080101200712310120080101200801010120080101200802021020080206200802031020080206200802061120080206200802071120080206200802081120080206200802091120080206200802101120080206200802111120080206200802121120080206200804042120080404200804052120080404200804062120080404200805013120080501200805023120080501200805033120080501200805043020080501200806074120080608200806084120080608200806094120080608200809135120080914200809145120080914200809155120080914200809276020081001200809286020081001200809296120081001200809306120081001200810016120081001200810026120081001200810036120081001200810046120081001200810056120081001200901010120090101200901020120090101200901030120090101200901040020090101200901241020090125200901251120090125200901261120090125200901271120090125200901281120090125200901291120090125200901301120090125200901311120090125200902011020090125200904042120090404200904052120090404200904062120090404200905013120090501200905023120090501200905033120090501200905284120090528200905294120090528200905304120090528200905314020090528200909276020091001200910016120091001200910026120091001200910036120091001200910046120091001200910055120091003200910065120091003200910075120091003200910085120091003200910105020091003201001010120100101201001020120100101201001030120100101201002131120100213201002141120100213201002151120100213201002161120100213201002171120100213201002181120100213201002191120100213201002201020100213201002211020100213201004032120100405201004042120100405201004052120100405201005013120100501201005023120100501201005033120100501201006124020100616201006134020100616201006144120100616201006154120100616201006164120100616201009195020100922201009225120100922201009235120100922201009245120100922201009255020100922201009266020101001201010016120101001201010026120101001201010036120101001201010046120101001201010056120101001201010066120101001201010076120101001201010096020101001201101010120110101201101020120110101201101030120110101201101301020110203201102021120110203201102031120110203201102041120110203201102051120110203201102061120110203201102071120110203201102081120110203201102121020110203201104022020110405201104032120110405201104042120110405201104052120110405201104303120110501201105013120110501201105023120110501201106044120110606201106054120110606201106064120110606201109105120110912201109115120110912201109125120110912201110016120111001201110026120111001201110036120111001201110046120111001201110056120111001201110066120111001201110076120111001201110086020111001201110096020111001201112310020120101201201010120120101201201020120120101201201030120120101201201211020120123201201221120120123201201231120120123201201241120120123201201251120120123201201261120120123201201271120120123201201281120120123201201291020120123201203312020120404201204012020120404201204022120120404201204032120120404201204042120120404201204283020120501201204293120120501201204303120120501201205013120120501201205023020120501201206224120120623201206234120120623201206244120120623201209295020120930201209305120120930201210016120121001201210026120121001201210036120121001201210046120121001201210056120121001201210066120121001201210076120121001201210086020121001201301010120130101201301020120130101201301030120130101201301050020130101201301060020130101201302091120130210201302101120130210201302111120130210201302121120130210201302131120130210201302141120130210201302151120130210201302161020130210201302171020130210201304042120130404201304052120130404201304062120130404201304273020130501201304283020130501201304293120130501201304303120130501201305013120130501201306084020130612201306094020130612201306104120130612201306114120130612201306124120130612201309195120130919201309205120130919201309215120130919201309225020130919201309296020131001201310016120131001201310026120131001201310036120131001201310046120131001201310056120131001201310066120131001201310076120131001201401010120140101201401261020140131201401311120140131201402011120140131201402021120140131201402031120140131201402041120140131201402051120140131201402061120140131201402081020140131201404052120140405201404062120140405201404072120140405201405013120140501201405023120140501201405033120140501201405043020140501201405314120140602201406014120140602201406024120140602201409065120140908201409075120140908201409085120140908201409286020141001201410016120141001201410026120141001201410036120141001201410046120141004201410056120141001201410066120141001201410076120141001201410116020141001201501010120150101201501020120150101201501030120150101201501040020150101201502151020150219201502181120150219201502191120150219201502201120150219201502211120150219201502221120150219201502231120150219201502241120150219201502281020150219201504042120150405201504052120150405201504062120150405201505013120150501201505023120150501201505033120150501201506204120150620201506214120150620201506224120150620201509038120150903201509048120150903201509058120150903201509068020150903201509265120150927201509275120150927201510016120151001201510026120151001201510036120151001201510046120151004201510056120151001201510066120151001201510076120151001201510106020151001201601010120160101201601020120160101201601030120160101201602061020160208201602071120160208201602081120160208201602091120160208201602101120160208201602111120160208201602121120160208201602131120160208201602141020160208201604022120160404201604032120160404201604042120160404201604303120160501201605013120160501201605023120160501201606094120160609201606104120160609201606114120160609201606124020160609201609155120160915201609165120160915201609175120160915201609185020160915201610016120161001201610026120161001201610036120161001201610046120161001201610056120161001201610066120161001201610076120161001201610086020161001201610096020161001201612310120170101201701010120170101201701020120170101201701221020170128201701271120170128201701281120170128201701291120170128201701301120170128201701311120170128201702011120170128201702021120170128201702041020170128201704012020170404201704022120170404201704032120170404201704042120170404201704293120170501201704303120170501201705013120170501201705274020170530201705284120170530201705294120170530201705304120170530201709306020171001201710016120171001201710026120171001201710036120171001201710045120171004201710056120171001201710066120171001201710076120171001201710086120171001201712300120180101201712310120180101201801010120180101201802111020180216201802151120180216201802161120180216201802171120180216201802181120180216201802191120180216201802201120180216201802211120180216201802241020180216201804052120180405201804062120180405201804072120180405201804082020180405201804283020180501201804293120180501201804303120180501201805013120180501201806164120180618201806174120180618201806184120180618201809225120180924201809235120180924201809245120180924201809296020181001201809306020181001201810016120181001201810026120181001201810036120181001201810046120181001201810056120181001201810066120181001201810076120181001201812290020190101201812300120190101201812310120190101201901010120190101201902021020190205201902031020190205201902041120190205201902051120190205201902061120190205201902071120190205201902081120190205201902091120190205201902101120190205201904052120190405201904062120190405201904072120190405201904283020190501201905013120190501201905023120190501201905033120190501201905043120190501201905053020190501201906074120190607201906084120190607201906094120190607201909135120190913201909145120190913201909155120190913201909296020191001201910016120191001201910026120191001201910036120191001201910046120191001201910056120191001201910066120191001201910076120191001201910126020191001202001010120200101202001191020200125202001241120200125202001251120200125202001261120200125202001271120200125202001281120200125202001291120200125202001301120200125202001311120200125202002011120200125202002021120200125202004042120200404202004052120200404202004062120200404202004263020200501202005013120200501202005023120200501202005033120200501202005043120200501202005053120200501202005093020200501202006254120200625202006264120200625202006274120200625202006284020200625202009277020201001202010017120201001202010026120201001202010036120201001202010046120201001202010056120201001202010066120201001202010076120201001202010086120201001202010106020201001202101010120210101202101020120210101202101030120210101202102071020210212202102111120210212202102121120210212202102131120210212202102141120210212202102151120210212202102161120210212202102171120210212202102201020210212202104032120210404202104042120210404202104052120210404202104253020210501202105013120210501202105023120210501202105033120210501202105043120210501202105053120210501202105083020210501202106124120210614202106134120210614202106144120210614202109185020210921202109195120210921202109205120210921202109215120210921202109266020211001202110016120211001202110026120211001202110036120211001202110046120211001202110056120211001202110066120211001202110076120211001202110096020211001202201010120220101202201020120220101202201030120220101202201291020220201202201301020220201202201311120220201202202011120220201202202021120220201202202031120220201202202041120220201202202051120220201202202061120220201202204022020220405202204032120220405202204042120220405202204052120220405202204243020220501202204303120220501202205013120220501202205023120220501202205033120220501202205043120220501202205073020220501202206034120220603202206044120220603202206054120220603202209105120220910202209115120220910202209125120220910202210016120221001202210026120221001202210036120221001202210046120221001202210056120221001202210066120221001202210076120221001202210086020221001202210096020221001202212310120230101202301010120230101202301020120230101202301211120230122202301221120230122202301231120230122202301241120230122202301251120230122202301261120230122202301271120230122202301281020230122202301291020230122202304052120230405202304233020230501202304293120230501202304303120230501202305013120230501202305023120230501202305033120230501202305063020230501202306224120230622202306234120230622202306244120230622202306254020230622202309295120230929202309306120231001202310016120231001202310026120231001202310036120231001202310046120231001202310056120231001202310066120231001202310076020231001202310086020231001202312300120240101202312310120240101202401010120240101202402041020240210202402101120240210202402111120240210202402121120240210202402131120240210202402141120240210202402151120240210202402161120240210202402171120240210202402181020240210202404042120240404202404052120240404202404062120240404202404072020240404202404283020240501202405013120240501202405023120240501202405033120240501202405043120240501202405053120240501202405113020240501202406084120240610202406094120240610202406104120240610202409145020240917202409155120240917202409165120240917202409175120240917202409296020241001202410016120241001202410026120241001202410036120241001202410046120241001202410056120241001202410066120241001202410076120241001202410126020241001202501010120250101202501261020250129202501281120250129202501291120250129202501301120250129202501311120250129202502011120250129202502021120250129202502031120250129202502041120250129202502081020250129202504042120250404202504052120250404202504062120250404202504273020250501202505013120250501202505023120250501202505033120250501202505043120250501202505053120250501202505314120250531202506014120250531202506024120250531202509287020251001202510017120251001202510027120251001202510037120251001202510047120251001202510057120251001202510067120251001202510077120251001202510087120251001202510117020251001202601010120260101202601020120260101202601030120260101202601040020260101202602141020260217202602151120260217202602161120260217202602171120260217202602181120260217202602191120260217202602201120260217202602211120260217202602221120260217202602231120260217202602281020260217202604042120260405202604052120260405202604062120260405202605013120260501202605023120260501202605033120260501202605043120260501202605053120260501202605093020260501202606194120260619202606204120260619202606214120260619202609206020261001202609255120260925202609265120260925202609275120260925202610016120261001202610026120261001202610036120261001202610046120261001202610056120261001202610066120261001202610076120261001202610106020261001";A0._SIZE=18;A0._ZERO=48;A0._TAG_REMOVE="~";A0._NAMES_IN_USE=m.NAMES;A0._DATA_IN_USE=m.DATA;class t2{constructor(n,t){let e=!1,i=!1;for(let a=0,F=s.JIE_QI.length;a<F;a++)if(s.JIE_QI[a]===n){a%2==0?i=!0:e=!0;break}this._name=n,this._solar=t,this._jie=e,this._qi=i}getName(){return this._name}getSolar(){return this._solar}setName(n){this._name=n}setSolar(n){this._solar=n}isJie(){return this._jie}isQi(){return this._qi}toString(){return this.getName()}}class jn{constructor(n,t){this._liuNian=n,this._index=t}getIndex(){return this._index}getMonthInChinese(){return s.MONTH[this._index+1]}getGanZhi(){const n=s.find(this._liuNian.getGanZhi(),s.GAN).index-1,t=[2,4,6,8,0][n%5],e=s.GAN[(this._index+t)%10+1],i=s.ZHI[(this._index+s.BASE_MONTH_ZHI_INDEX)%12+1];return e+i}getXun(){return s.getXun(this.getGanZhi())}getXunKong(){return s.getXunKong(this.getGanZhi())}}class A{constructor(n,t=""){this._name=n,this._remark=t}getName(){return this._name}getRemark(){return this._remark}toString(){return this._name}toFullString(){const n=[this._name];return this._remark&&n.push("["+this._remark+"]"),n.join("")}}class v{}v.SAN_HUI=["1-7","7-7","10-15"];v.SAN_YUAN=["1-15","7-15","10-15"];v.WU_LA=["1-1","5-5","7-7","10-1","12-8"];v.AN_WU=["{dz.wei}","{dz.xu}","{dz.chen}","{dz.yin}","{dz.wu}","{dz.zi}","{dz.you}","{dz.shen}","{dz.si}","{dz.hai}","{dz.mao}","{dz.chou}"];v.BA_HUI={"{jz.bingWu}":"天会","{jz.renWu}":"地会","{jz.renZi}":"人会","{jz.gengWu}":"日会","{jz.gengShen}":"月会","{jz.xinYou}":"星辰会","{jz.jiaChen}":"五行会","{jz.jiaXu}":"四时会"};v.BA_JIE={"{jq.liChun}":"东北方度仙上圣天尊同梵炁始青天君下降","{jq.chunFen}":"东方玉宝星上天尊同青帝九炁天君下降","{jq.liXia}":"东南方好生度命天尊同梵炁始丹天君下降","{jq.xiaZhi}":"南方玄真万福天尊同赤帝三炁天君下降","{jq.liQiu}":"西南方太灵虚皇天尊同梵炁始素天君下降","{jq.qiuFen}":"西方太妙至极天尊同白帝七炁天君下降","{jq.liDong}":"西北方无量太华天尊同梵炁始玄天君下降","{jq.dongZhi}":"北方玄上玉宸天尊同黑帝五炁天君下降"};v.FESTIVAL={"1-1":[new A("天腊之辰","天腊，此日五帝会于东方九炁青天")],"1-3":[new A("郝真人圣诞"),new A("孙真人圣诞")],"1-5":[new A("孙祖清静元君诞")],"1-7":[new A("举迁赏会","此日上元赐福，天官同地水二官考校罪福")],"1-9":[new A("玉皇上帝圣诞")],"1-13":[new A("关圣帝君飞升")],"1-15":[new A("上元天官圣诞"),new A("老祖天师圣诞")],"1-19":[new A("长春邱真人(邱处机)圣诞")],"1-28":[new A("许真君(许逊天师)圣诞")],"2-1":[new A("勾陈天皇大帝圣诞"),new A("长春刘真人(刘渊然)圣诞")],"2-2":[new A("土地正神诞"),new A("姜太公圣诞")],"2-3":[new A("文昌梓潼帝君圣诞")],"2-6":[new A("东华帝君圣诞")],"2-13":[new A("度人无量葛真君圣诞")],"2-15":[new A("太清道德天尊(太上老君)圣诞")],"2-19":[new A("慈航真人圣诞")],"3-1":[new A("谭祖(谭处端)长真真人圣诞")],"3-3":[new A("玄天上帝圣诞")],"3-6":[new A("眼光娘娘圣诞")],"3-15":[new A("天师张大真人圣诞"),new A("财神赵公元帅圣诞")],"3-16":[new A("三茅真君得道之辰"),new A("中岳大帝圣诞")],"3-18":[new A("王祖(王处一)玉阳真人圣诞"),new A("后土娘娘圣诞")],"3-19":[new A("太阳星君圣诞")],"3-20":[new A("子孙娘娘圣诞")],"3-23":[new A("天后妈祖圣诞")],"3-26":[new A("鬼谷先师诞")],"3-28":[new A("东岳大帝圣诞")],"4-1":[new A("长生谭真君成道之辰")],"4-10":[new A("何仙姑圣诞")],"4-14":[new A("吕祖纯阳祖师圣诞")],"4-15":[new A("钟离祖师圣诞")],"4-18":[new A("北极紫微大帝圣诞"),new A("泰山圣母碧霞元君诞"),new A("华佗神医先师诞")],"4-20":[new A("眼光圣母娘娘诞")],"4-28":[new A("神农先帝诞")],"5-1":[new A("南极长生大帝圣诞")],"5-5":[new A("地腊之辰","地腊，此日五帝会于南方三炁丹天"),new A("南方雷祖圣诞"),new A("地祗温元帅圣诞"),new A("雷霆邓天君圣诞")],"5-11":[new A("城隍爷圣诞")],"5-13":[new A("关圣帝君降神"),new A("关平太子圣诞")],"5-18":[new A("张天师圣诞")],"5-20":[new A("马祖丹阳真人圣诞")],"5-29":[new A("紫青白祖师圣诞")],"6-1":[new A("南斗星君下降")],"6-2":[new A("南斗星君下降")],"6-3":[new A("南斗星君下降")],"6-4":[new A("南斗星君下降")],"6-5":[new A("南斗星君下降")],"6-6":[new A("南斗星君下降")],"6-10":[new A("刘海蟾祖师圣诞")],"6-15":[new A("灵官王天君圣诞")],"6-19":[new A("慈航(观音)成道日")],"6-23":[new A("火神圣诞")],"6-24":[new A("南极大帝中方雷祖圣诞"),new A("关圣帝君圣诞")],"6-26":[new A("二郎真君圣诞")],"7-7":[new A("道德腊之辰","道德腊，此日五帝会于西方七炁素天"),new A("庆生中会","此日中元赦罪，地官同天水二官考校罪福")],"7-12":[new A("西方雷祖圣诞")],"7-15":[new A("中元地官大帝圣诞")],"7-18":[new A("王母娘娘圣诞")],"7-20":[new A("刘祖(刘处玄)长生真人圣诞")],"7-22":[new A("财帛星君文财神增福相公李诡祖圣诞")],"7-26":[new A("张三丰祖师圣诞")],"8-1":[new A("许真君飞升日")],"8-3":[new A("九天司命灶君诞")],"8-5":[new A("北方雷祖圣诞")],"8-10":[new A("北岳大帝诞辰")],"8-15":[new A("太阴星君诞")],"9-1":[new A("北斗九皇降世之辰")],"9-2":[new A("北斗九皇降世之辰")],"9-3":[new A("北斗九皇降世之辰")],"9-4":[new A("北斗九皇降世之辰")],"9-5":[new A("北斗九皇降世之辰")],"9-6":[new A("北斗九皇降世之辰")],"9-7":[new A("北斗九皇降世之辰")],"9-8":[new A("北斗九皇降世之辰")],"9-9":[new A("北斗九皇降世之辰"),new A("斗姥元君圣诞"),new A("重阳帝君圣诞"),new A("玄天上帝飞升"),new A("酆都大帝圣诞")],"9-22":[new A("增福财神诞")],"9-23":[new A("萨翁真君圣诞")],"9-28":[new A("五显灵官马元帅圣诞")],"10-1":[new A("民岁腊之辰","民岁腊，此日五帝会于北方五炁黑天"),new A("东皇大帝圣诞")],"10-3":[new A("三茅应化真君圣诞")],"10-6":[new A("天曹诸司五岳五帝圣诞")],"10-15":[new A("下元水官大帝圣诞"),new A("建生大会","此日下元解厄，水官同天地二官考校罪福")],"10-18":[new A("地母娘娘圣诞")],"10-19":[new A("长春邱真君飞升")],"10-20":[new A("虚靖天师(即三十代天师弘悟张真人)诞")],"11-6":[new A("西岳大帝圣诞")],"11-9":[new A("湘子韩祖圣诞")],"11-11":[new A("太乙救苦天尊圣诞")],"11-26":[new A("北方五道圣诞")],"12-8":[new A("王侯腊之辰","王侯腊，此日五帝会于上方玄都玉京")],"12-16":[new A("南岳大帝圣诞"),new A("福德正神诞")],"12-20":[new A("鲁班先师圣诞")],"12-21":[new A("天猷上帝圣诞")],"12-22":[new A("重阳祖师圣诞")],"12-23":[new A("祭灶王","最适宜谢旧年太岁，开启拜新年太岁")],"12-25":[new A("玉帝巡天"),new A("天神下降")],"12-29":[new A("清静孙真君(孙不二)成道")]};class C{constructor(n,t="",e=!1,i=""){this._name=n,this._result=t||"",this._everyMonth=e,this._remark=i}getName(){return this._name}getResult(){return this._result}isEveryMonth(){return this._everyMonth}getRemark(){return this._remark}toString(){return this._name}toFullString(){const n=[this._name];return this._result&&n.push(this._result),this._remark&&n.push(this._remark),n.join(" ")}}const o=class{static getXiu(u,n){return o.XIU_27[(o.XIU_OFFSET[Math.abs(u)-1]+n-1)%o.XIU_27.length]}};let b=o;b.DAY_ZHAI_GUAN_YIN=["1-8","2-7","2-9","2-19","3-3","3-6","3-13","4-22","5-3","5-17","6-16","6-18","6-19","6-23","7-13","8-16","9-19","9-23","10-2","11-19","11-24","12-25"];b.XIU_27=["{xx.jiao}","{xx.kang}","{xx.di}","{xx.fang}","{xx.xin}","{xx.tail}","{xx.ji}","{xx.dou}","{xx.nv}","{xx.xu}","{xx.wei}","{xx.shi}","{xx.qiang}","{xx.kui}","{xx.lou}","{xx.vei}","{xx.mao}","{xx.bi}","{xx.zi}","{xx.can}","{xx.jing}","{xx.gui}","{xx.liu}","{xx.xing}","{xx.zhang}","{xx.yi}","{xx.zhen}"];b.XIU_OFFSET=[11,13,15,17,19,21,24,0,2,4,7,9];b._DJ="犯者夺纪";b._JS="犯者减寿";b._SS="犯者损寿";b._XL="犯者削禄夺纪";b._JW="犯者三年内夫妇俱亡";b._Y=new C("杨公忌");b._T=new C("四天王巡行","",!0);b._D=new C("斗降",o._DJ,!0);b._S=new C("月朔",o._DJ,!0);b._W=new C("月望",o._DJ,!0);b._H=new C("月晦",o._JS,!0);b._L=new C("雷斋日",o._JS,!0);b._J=new C("九毒日","犯者夭亡，奇祸不测");b._R=new C("人神在阴","犯者得病",!0,"宜先一日即戒");b._M=new C("司命奏事",o._JS,!0,"如月小，即戒廿九");b._HH=new C("月晦",o._JS,!0,"如月小，即戒廿九");b.FESTIVAL={"1-1":[new C("天腊，玉帝校世人神气禄命",o._XL),o._S],"1-3":[new C("万神都会",o._DJ),o._D],"1-5":[new C("五虚忌")],"1-6":[new C("六耗忌"),o._L],"1-7":[new C("上会日",o._SS)],"1-8":[new C("五殿阎罗天子诞",o._DJ),o._T],"1-9":[new C("玉皇上帝诞",o._DJ)],"1-13":[o._Y],"1-14":[new C("三元降",o._JS),o._T],"1-15":[new C("三元降",o._JS),new C("上元神会",o._DJ),o._W,o._T],"1-16":[new C("三元降",o._JS)],"1-19":[new C("长春真人诞")],"1-23":[new C("三尸神奏事"),o._T],"1-25":[o._H,new C("天地仓开日","犯者损寿，子带疾")],"1-27":[o._D],"1-28":[o._R],"1-29":[o._T],"1-30":[o._HH,o._M,o._T],"2-1":[new C("一殿秦广王诞",o._DJ),o._S],"2-2":[new C("万神都会",o._DJ),new C("福德土地正神诞","犯者得祸")],"2-3":[new C("文昌帝君诞",o._XL),o._D],"2-6":[new C("东华帝君诞"),o._L],"2-8":[new C("释迦牟尼佛出家",o._DJ),new C("三殿宋帝王诞",o._DJ),new C("张大帝诞",o._DJ),o._T],"2-11":[o._Y],"2-14":[o._T],"2-15":[new C("释迦牟尼佛涅槃",o._XL),new C("太上老君诞",o._XL),new C("月望",o._XL,!0),o._T],"2-17":[new C("东方杜将军诞")],"2-18":[new C("四殿五官王诞",o._XL),new C("至圣先师孔子讳辰",o._XL)],"2-19":[new C("观音大士诞",o._DJ)],"2-21":[new C("普贤菩萨诞")],"2-23":[o._T],"2-25":[o._H],"2-27":[o._D],"2-28":[o._R],"2-29":[o._T],"2-30":[o._HH,o._M,o._T],"3-1":[new C("二殿楚江王诞",o._DJ),o._S],"3-3":[new C("玄天上帝诞",o._DJ),o._D],"3-6":[o._L],"3-8":[new C("六殿卞城王诞",o._DJ),o._T],"3-9":[new C("牛鬼神出","犯者产恶胎"),o._Y],"3-12":[new C("中央五道诞")],"3-14":[o._T],"3-15":[new C("昊天上帝诞",o._DJ),new C("玄坛诞",o._DJ),o._W,o._T],"3-16":[new C("准提菩萨诞",o._DJ)],"3-19":[new C("中岳大帝诞"),new C("后土娘娘诞"),new C("三茅降")],"3-20":[new C("天地仓开日",o._SS),new C("子孙娘娘诞")],"3-23":[o._T],"3-25":[o._H],"3-27":[new C("七殿泰山王诞"),o._D],"3-28":[o._R,new C("苍颉至圣先师诞",o._XL),new C("东岳大帝诞")],"3-29":[o._T],"3-30":[o._HH,o._M,o._T],"4-1":[new C("八殿都市王诞",o._DJ),o._S],"4-3":[o._D],"4-4":[new C("万神善会","犯者失瘼夭胎"),new C("文殊菩萨诞")],"4-6":[o._L],"4-7":[new C("南斗、北斗、西斗同降",o._JS),o._Y],"4-8":[new C("释迦牟尼佛诞",o._DJ),new C("万神善会","犯者失瘼夭胎"),new C("善恶童子降","犯者血死"),new C("九殿平等王诞"),o._T],"4-14":[new C("纯阳祖师诞",o._JS),o._T],"4-15":[o._W,new C("钟离祖师诞"),o._T],"4-16":[new C("天地仓开日",o._SS)],"4-17":[new C("十殿转轮王诞",o._DJ)],"4-18":[new C("天地仓开日",o._SS),new C("紫徽大帝诞",o._SS)],"4-20":[new C("眼光圣母诞")],"4-23":[o._T],"4-25":[o._H],"4-27":[o._D],"4-28":[o._R],"4-29":[o._T],"4-30":[o._HH,o._M,o._T],"5-1":[new C("南极长生大帝诞",o._DJ),o._S],"5-3":[o._D],"5-5":[new C("地腊",o._XL),new C("五帝校定生人官爵",o._XL),o._J,o._Y],"5-6":[o._J,o._L],"5-7":[o._J],"5-8":[new C("南方五道诞"),o._T],"5-11":[new C("天地仓开日",o._SS),new C("天下都城隍诞")],"5-12":[new C("炳灵公诞")],"5-13":[new C("关圣降",o._XL)],"5-14":[new C("夜子时为天地交泰",o._JW),o._T],"5-15":[o._W,o._J,o._T],"5-16":[new C("九毒日",o._JW),new C("天地元气造化万物之辰",o._JW)],"5-17":[o._J],"5-18":[new C("张天师诞")],"5-22":[new C("孝娥神诞",o._DJ)],"5-23":[o._T],"5-25":[o._J,o._H],"5-26":[o._J],"5-27":[o._J,o._D],"5-28":[o._R],"5-29":[o._T],"5-30":[o._HH,o._M,o._T],"6-1":[o._S],"6-3":[new C("韦驮菩萨圣诞"),o._D,o._Y],"6-5":[new C("南赡部洲转大轮",o._SS)],"6-6":[new C("天地仓开日",o._SS),o._L],"6-8":[o._T],"6-10":[new C("金粟如来诞")],"6-14":[o._T],"6-15":[o._W,o._T],"6-19":[new C("观世音菩萨成道",o._DJ)],"6-23":[new C("南方火神诞","犯者遭回禄"),o._T],"6-24":[new C("雷祖诞",o._XL),new C("关帝诞",o._XL)],"6-25":[o._H],"6-27":[o._D],"6-28":[o._R],"6-29":[o._T],"6-30":[o._HH,o._M,o._T],"7-1":[o._S,o._Y],"7-3":[o._D],"7-5":[new C("中会日",o._SS,!1,"一作初七")],"7-6":[o._L],"7-7":[new C("道德腊",o._XL),new C("五帝校生人善恶",o._XL),new C("魁星诞",o._XL)],"7-8":[o._T],"7-10":[new C("阴毒日","",!1,"大忌")],"7-12":[new C("长真谭真人诞")],"7-13":[new C("大势至菩萨诞",o._JS)],"7-14":[new C("三元降",o._JS),o._T],"7-15":[o._W,new C("三元降",o._DJ),new C("地官校籍",o._DJ),o._T],"7-16":[new C("三元降",o._JS)],"7-18":[new C("西王母诞",o._DJ)],"7-19":[new C("太岁诞",o._DJ)],"7-22":[new C("增福财神诞",o._XL)],"7-23":[o._T],"7-25":[o._H],"7-27":[o._D],"7-28":[o._R],"7-29":[o._Y,o._T],"7-30":[new C("地藏菩萨诞",o._DJ),o._HH,o._M,o._T],"8-1":[o._S,new C("许真君诞")],"8-3":[o._D,new C("北斗诞",o._XL),new C("司命灶君诞","犯者遭回禄")],"8-5":[new C("雷声大帝诞",o._DJ)],"8-6":[o._L],"8-8":[o._T],"8-10":[new C("北斗大帝诞")],"8-12":[new C("西方五道诞")],"8-14":[o._T],"8-15":[o._W,new C("太明朝元","犯者暴亡",!1,"宜焚香守夜"),o._T],"8-16":[new C("天曹掠刷真君降","犯者贫夭")],"8-18":[new C("天人兴福之辰","",!1,"宜斋戒，存想吉事")],"8-23":[new C("汉恒候张显王诞"),o._T],"8-24":[new C("灶君夫人诞")],"8-25":[o._H],"8-27":[o._D,new C("至圣先师孔子诞",o._XL),o._Y],"8-28":[o._R,new C("四天会事")],"8-29":[o._T],"8-30":[new C("诸神考校","犯者夺算"),o._HH,o._M,o._T],"9-1":[o._S,new C("南斗诞",o._XL),new C("北斗九星降世",o._DJ,!1,"此九日俱宜斋戒")],"9-3":[o._D,new C("五瘟神诞")],"9-6":[o._L],"9-8":[o._T],"9-9":[new C("斗母诞",o._XL),new C("酆都大帝诞"),new C("玄天上帝飞升")],"9-10":[new C("斗母降",o._DJ)],"9-11":[new C("宜戒")],"9-13":[new C("孟婆尊神诞")],"9-14":[o._T],"9-15":[o._W,o._T],"9-17":[new C("金龙四大王诞","犯者遭水厄")],"9-19":[new C("日宫月宫会合",o._JS),new C("观世音菩萨诞",o._JS)],"9-23":[o._T],"9-25":[o._H,o._Y],"9-27":[o._D],"9-28":[o._R],"9-29":[o._T],"9-30":[new C("药师琉璃光佛诞","犯者危疾"),o._HH,o._M,o._T],"10-1":[o._S,new C("民岁腊",o._DJ),new C("四天王降","犯者一年内死")],"10-3":[o._D,new C("三茅诞")],"10-5":[new C("下会日",o._JS),new C("达摩祖师诞",o._JS)],"10-6":[o._L,new C("天曹考察",o._DJ)],"10-8":[new C("佛涅槃日","",!1,"大忌色欲"),o._T],"10-10":[new C("四天王降","犯者一年内死")],"10-11":[new C("宜戒")],"10-14":[new C("三元降",o._JS),o._T],"10-15":[o._W,new C("三元降",o._DJ),new C("下元水府校籍",o._DJ),o._T],"10-16":[new C("三元降",o._JS),o._T],"10-23":[o._Y,o._T],"10-25":[o._H],"10-27":[o._D,new C("北极紫徽大帝降")],"10-28":[o._R],"10-29":[o._T],"10-30":[o._HH,o._M,o._T],"11-1":[o._S],"11-3":[o._D],"11-4":[new C("至圣先师孔子诞",o._XL)],"11-6":[new C("西岳大帝诞")],"11-8":[o._T],"11-11":[new C("天地仓开日",o._DJ),new C("太乙救苦天尊诞",o._DJ)],"11-14":[o._T],"11-15":[new C("月望","上半夜犯男死 下半夜犯女死"),new C("四天王巡行","上半夜犯男死 下半夜犯女死")],"11-17":[new C("阿弥陀佛诞")],"11-19":[new C("太阳日宫诞","犯者得奇祸")],"11-21":[o._Y],"11-23":[new C("张仙诞","犯者绝嗣"),o._T],"11-25":[new C("掠刷大夫降","犯者遭大凶"),o._H],"11-26":[new C("北方五道诞")],"11-27":[o._D],"11-28":[o._R],"11-29":[o._T],"11-30":[o._HH,o._M,o._T],"12-1":[o._S],"12-3":[o._D],"12-6":[new C("天地仓开日",o._JS),o._L],"12-7":[new C("掠刷大夫降","犯者得恶疾")],"12-8":[new C("王侯腊",o._DJ),new C("释迦如来成佛之辰"),o._T,new C("初旬内戊日，亦名王侯腊",o._DJ)],"12-12":[new C("太素三元君朝真")],"12-14":[o._T],"12-15":[o._W,o._T],"12-16":[new C("南岳大帝诞")],"12-19":[o._Y],"12-20":[new C("天地交道","犯者促寿")],"12-21":[new C("天猷上帝诞")],"12-23":[new C("五岳诞降"),o._T],"12-24":[new C("司今朝天奏人善恶","犯者得大祸")],"12-25":[new C("三清玉帝同降，考察善恶","犯者得奇祸"),o._H],"12-27":[o._D],"12-28":[o._R],"12-29":[new C("华严菩萨诞"),o._T],"12-30":[new C("诸神下降，察访善恶","犯者男女俱亡")]};b.OTHER_FESTIVAL={"1-1":["弥勒菩萨圣诞"],"1-6":["定光佛圣诞"],"2-8":["释迦牟尼佛出家"],"2-15":["释迦牟尼佛涅槃"],"2-19":["观世音菩萨圣诞"],"2-21":["普贤菩萨圣诞"],"3-16":["准提菩萨圣诞"],"4-4":["文殊菩萨圣诞"],"4-8":["释迦牟尼佛圣诞"],"4-15":["佛吉祥日"],"4-28":["药王菩萨圣诞"],"5-13":["伽蓝菩萨圣诞"],"6-3":["韦驮菩萨圣诞"],"6-19":["观音菩萨成道"],"7-13":["大势至菩萨圣诞"],"7-15":["佛欢喜日"],"7-24":["龙树菩萨圣诞"],"7-30":["地藏菩萨圣诞"],"8-15":["月光菩萨圣诞"],"8-22":["燃灯佛圣诞"],"9-9":["摩利支天菩萨圣诞"],"9-19":["观世音菩萨出家"],"9-30":["药师琉璃光佛圣诞"],"10-5":["达摩祖师圣诞"],"10-20":["文殊菩萨出家"],"11-17":["阿弥陀佛圣诞"],"11-19":["日光菩萨圣诞"],"12-8":["释迦牟尼佛成道"],"12-23":["监斋菩萨圣诞"],"12-29":["华严菩萨圣诞"]};class P{}P.NUMBER=["{n.one}","{n.two}","{n.three}","{n.four}","{n.five}","{n.six}","{n.seven}","{n.eight}","{n.nine}"];P.WU_XING=["{wx.shui}","{wx.tu}","{wx.mu}","{wx.mu}","{wx.tu}","{wx.jin}","{wx.jin}","{wx.tu}","{wx.huo}"];P.POSITION=["{bg.kan}","{bg.kun}","{bg.zhen}","{bg.xun}","{ps.center}","{bg.qian}","{bg.dui}","{bg.gen}","{bg.li}"];P.LUCK_XUAN_KONG=["{s.goodLuck}","{s.badLuck}","{s.badLuck}","{s.goodLuck}","{s.badLuck}","{s.goodLuck}","{s.badLuck}","{s.goodLuck}","{s.goodLuck}"];P.YIN_YANG_QI_MEN=["{s.yang}","{s.yin}","{s.yang}","{s.yang}","{s.yang}","{s.yin}","{s.yin}","{s.yang}","{s.yin}"];P.COLOR=["{s.white}","{s.black}","{s.blue}","{s.green}","{s.yellow}","{s.white}","{s.red}","{s.white}","{s.purple}"];const j=class{static updateArray(u){const n=j._ARRAYS[u],t=j._OBJ_ARRAYS[u],e=Object.keys(n);for(let i=0,a=e.length;i<a;i++){const F=e[i],r=n[F];for(let g=0,E=r.length;g<E;g++)t[F][g]=r[g].replace(/{(.[^}]*)}/g,(h,D)=>j.getMessage(D))}}static updateStringDictionary(u){const n=j._DICT_STRING[u],t=j._OBJ_STRING[u],e=Object.keys(n);for(let i=0,a=e.length;i<a;i++){const F=e[i],r=n[F],g=Object.keys(r);for(let E=0,h=g.length;E<h;E++){const D=g[E],l=D.replace(/{(.[^}]*)}/g,(c,x)=>j.getMessage(x));t[F][l]=r[D].replace(/{(.[^}]*)}/g,(c,x)=>j.getMessage(x))}}}static updateNumberDictionary(u){const n=j._DICT_NUMBER[u],t=j._OBJ_NUMBER[u],e=Object.keys(n);for(let i=0,a=e.length;i<a;i++){const F=e[i],r=n[F],g=Object.keys(r);for(let E=0,h=g.length;E<h;E++){const D=g[E],l=D.replace(/{(.[^}]*)}/g,(c,x)=>j.getMessage(x));t[F][l]=r[D]}}}static updateArrayDictionary(u){const n=j._DICT_ARRAY[u],t=j._OBJ_ARRAY[u],e=Object.keys(n);for(let i=0,a=e.length;i<a;i++){const F=e[i],r=n[F],g=Object.keys(r);for(let E=0,h=g.length;E<h;E++){const D=g[E],l=D.replace(/{(.[^}]*)}/g,(x,y)=>j.getMessage(y)),c=r[D];for(let x=0,y=c.length;x<y;x++)c[x]=c[x].replace(/{(.[^}]*)}/g,(f,_)=>j.getMessage(_));t[F][l]=c}}}static update(){let u=Object.keys(j._ARRAYS);for(let n=0,t=u.length;n<t;n++)j.updateArray(u[n]);u=Object.keys(j._DICT_STRING);for(let n=0,t=u.length;n<t;n++)j.updateStringDictionary(u[n]);u=Object.keys(j._DICT_NUMBER);for(let n=0,t=u.length;n<t;n++)j.updateNumberDictionary(u[n]);u=Object.keys(j._DICT_ARRAY);for(let n=0,t=u.length;n<t;n++)j.updateArrayDictionary(u[n])}static setMessages(u,n){if(!n)return;j._MESSAGES[u]||(j._MESSAGES[u]={});const t=Object.keys(n);for(let e=0,i=t.length;e<i;e++){const a=t[e];j._MESSAGES[u][a]=n[a]}j.update()}static getMessage(u){let n=j._MESSAGES[j._LANG][u];return n==null&&(n=j._MESSAGES[j._DEFAULT_LANG][u]),n==null&&(n=u),n}static setLanguage(u){j._MESSAGES[u]&&(j._LANG=u,j.update())}static getLanguage(){return j._LANG}static initArray(u){const n=j._ARRAYS[u],t=j._OBJ_ARRAYS[u],e=Object.keys(n);for(let i=0,a=e.length;i<a;i++){const F=e[i];n[F].length=0;const r=t[F];for(let g=0,E=r.length;g<E;g++)n[F].push(r[g])}}static initArrayDictionary(u){const n=j._DICT_ARRAY[u],t=j._OBJ_ARRAY[u],e=Object.keys(n);for(let i=0,a=e.length;i<a;i++){const F=e[i],r=t[F],g=Object.keys(r);for(let E=0,h=g.length;E<h;E++){const D=g[E];n[F][D]=r[D]}}}static initStringDictionary(u){const n=j._DICT_STRING[u],t=j._OBJ_STRING[u],e=Object.keys(n);for(let i=0,a=e.length;i<a;i++){const F=e[i],r=t[F],g=Object.keys(r);for(let E=0,h=g.length;E<h;E++){const D=g[E];n[F][D]=r[D]}}}static initNumberDictionary(u){const n=j._DICT_NUMBER[u],t=j._OBJ_NUMBER[u],e=Object.keys(n);for(let i=0,a=e.length;i<a;i++){const F=e[i],r=t[F],g=Object.keys(r);for(let E=0,h=g.length;E<h;E++){const D=g[E];n[F][D]=r[D]}}}static init(){if(j._INIT)return;j._INIT=!0;let u=Object.keys(j._ARRAYS);for(let n=0,t=u.length;n<t;n++)j.initArray(u[n]);u=Object.keys(j._DICT_STRING);for(let n=0,t=u.length;n<t;n++)j.initStringDictionary(u[n]);u=Object.keys(j._DICT_NUMBER);for(let n=0,t=u.length;n<t;n++)j.initNumberDictionary(u[n]);u=Object.keys(j._DICT_ARRAY);for(let n=0,t=u.length;n<t;n++)j.initArrayDictionary(u[n]);j.setLanguage(j._DEFAULT_LANG)}};let d=j;d._DEFAULT_LANG="chs";d._INIT=!1;d._MESSAGES={chs:{"tg.jia":"甲","tg.yi":"乙","tg.bing":"丙","tg.ding":"丁","tg.wu":"戊","tg.ji":"己","tg.geng":"庚","tg.xin":"辛","tg.ren":"壬","tg.gui":"癸","dz.zi":"子","dz.chou":"丑","dz.yin":"寅","dz.mao":"卯","dz.chen":"辰","dz.si":"巳","dz.wu":"午","dz.wei":"未","dz.shen":"申","dz.you":"酉","dz.xu":"戌","dz.hai":"亥","zx.jian":"建","zx.chu":"除","zx.man":"满","zx.ping":"平","zx.ding":"定","zx.zhi":"执","zx.po":"破","zx.wei":"危","zx.cheng":"成","zx.shou":"收","zx.kai":"开","zx.bi":"闭","jz.jiaZi":"甲子","jz.yiChou":"乙丑","jz.bingYin":"丙寅","jz.dingMao":"丁卯","jz.wuChen":"戊辰","jz.jiSi":"己巳","jz.gengWu":"庚午","jz.xinWei":"辛未","jz.renShen":"壬申","jz.guiYou":"癸酉","jz.jiaXu":"甲戌","jz.yiHai":"乙亥","jz.bingZi":"丙子","jz.dingChou":"丁丑","jz.wuYin":"戊寅","jz.jiMao":"己卯","jz.gengChen":"庚辰","jz.xinSi":"辛巳","jz.renWu":"壬午","jz.guiWei":"癸未","jz.jiaShen":"甲申","jz.yiYou":"乙酉","jz.bingXu":"丙戌","jz.dingHai":"丁亥","jz.wuZi":"戊子","jz.jiChou":"己丑","jz.gengYin":"庚寅","jz.xinMao":"辛卯","jz.renChen":"壬辰","jz.guiSi":"癸巳","jz.jiaWu":"甲午","jz.yiWei":"乙未","jz.bingShen":"丙申","jz.dingYou":"丁酉","jz.wuXu":"戊戌","jz.jiHai":"己亥","jz.gengZi":"庚子","jz.xinChou":"辛丑","jz.renYin":"壬寅","jz.guiMao":"癸卯","jz.jiaChen":"甲辰","jz.yiSi":"乙巳","jz.bingWu":"丙午","jz.dingWei":"丁未","jz.wuShen":"戊申","jz.jiYou":"己酉","jz.gengXu":"庚戌","jz.xinHai":"辛亥","jz.renZi":"壬子","jz.guiChou":"癸丑","jz.jiaYin":"甲寅","jz.yiMao":"乙卯","jz.bingChen":"丙辰","jz.dingSi":"丁巳","jz.wuWu":"戊午","jz.jiWei":"己未","jz.gengShen":"庚申","jz.xinYou":"辛酉","jz.renXu":"壬戌","jz.guiHai":"癸亥","sx.rat":"鼠","sx.ox":"牛","sx.tiger":"虎","sx.rabbit":"兔","sx.dragon":"龙","sx.snake":"蛇","sx.horse":"马","sx.goat":"羊","sx.monkey":"猴","sx.rooster":"鸡","sx.dog":"狗","sx.pig":"猪","dw.long":"龙","dw.niu":"牛","dw.gou":"狗","dw.yang":"羊","dw.tu":"兔","dw.shu":"鼠","dw.ji":"鸡","dw.ma":"马","dw.hu":"虎","dw.zhu":"猪","dw.hou":"猴","dw.she":"蛇","dw.huLi":"狐","dw.yan":"燕","dw.bao":"豹","dw.yuan":"猿","dw.yin":"蚓","dw.lu":"鹿","dw.wu":"乌","dw.jiao":"蛟","dw.lang":"狼","dw.fu":"蝠","dw.zhang":"獐","dw.xu":"獝","dw.xie":"獬","dw.han":"犴","dw.he":"貉","dw.zhi":"彘","wx.jin":"金","wx.mu":"木","wx.shui":"水","wx.huo":"火","wx.tu":"土","wx.ri":"日","wx.yue":"月","n.zero":"〇","n.one":"一","n.two":"二","n.three":"三","n.four":"四","n.five":"五","n.six":"六","n.seven":"七","n.eight":"八","n.nine":"九","n.ten":"十","n.eleven":"十一","n.twelve":"十二","d.one":"初一","d.two":"初二","d.three":"初三","d.four":"初四","d.five":"初五","d.six":"初六","d.seven":"初七","d.eight":"初八","d.nine":"初九","d.ten":"初十","d.eleven":"十一","d.twelve":"十二","d.thirteen":"十三","d.fourteen":"十四","d.fifteen":"十五","d.sixteen":"十六","d.seventeen":"十七","d.eighteen":"十八","d.nighteen":"十九","d.twenty":"二十","d.twentyOne":"廿一","d.twentyTwo":"廿二","d.twentyThree":"廿三","d.twentyFour":"廿四","d.twentyFive":"廿五","d.twentySix":"廿六","d.twentySeven":"廿七","d.twentyEight":"廿八","d.twentyNine":"廿九","d.thirty":"三十","m.one":"正","m.two":"二","m.three":"三","m.four":"四","m.five":"五","m.six":"六","m.seven":"七","m.eight":"八","m.nine":"九","m.ten":"十","m.eleven":"冬","m.twelve":"腊","w.sun":"日","w.mon":"一","w.tues":"二","w.wed":"三","w.thur":"四","w.fri":"五","w.sat":"六","xz.aries":"白羊","xz.taurus":"金牛","xz.gemini":"双子","xz.cancer":"巨蟹","xz.leo":"狮子","xz.virgo":"处女","xz.libra":"天秤","xz.scorpio":"天蝎","xz.sagittarius":"射手","xz.capricornus":"摩羯","xz.aquarius":"水瓶","xz.pisces":"双鱼","bg.qian":"乾","bg.kun":"坤","bg.zhen":"震","bg.xun":"巽","bg.kan":"坎","bg.li":"离","bg.gen":"艮","bg.dui":"兑","ps.center":"中","ps.dong":"东","ps.nan":"南","ps.xi":"西","ps.bei":"北","ps.zhong":"中宫","ps.zhengDong":"正东","ps.zhengNan":"正南","ps.zhengXi":"正西","ps.zhengBei":"正北","ps.dongBei":"东北","ps.dongNan":"东南","ps.xiBei":"西北","ps.xiNan":"西南","ps.wai":"外","ps.fangNei":"房内","jq.dongZhi":"冬至","jq.xiaoHan":"小寒","jq.daHan":"大寒","jq.liChun":"立春","jq.yuShui":"雨水","jq.jingZhe":"惊蛰","jq.chunFen":"春分","jq.qingMing":"清明","jq.guYu":"谷雨","jq.liXia":"立夏","jq.xiaoMan":"小满","jq.mangZhong":"芒种","jq.xiaZhi":"夏至","jq.xiaoShu":"小暑","jq.daShu":"大暑","jq.liQiu":"立秋","jq.chuShu":"处暑","jq.baiLu":"白露","jq.qiuFen":"秋分","jq.hanLu":"寒露","jq.shuangJiang":"霜降","jq.liDong":"立冬","jq.xiaoXue":"小雪","jq.daXue":"大雪","sn.qingLong":"青龙","sn.baiHu":"白虎","sn.zhuQue":"朱雀","sn.xuanWu":"玄武","sn.mingTang":"明堂","sn.tianXing":"天刑","sn.tianDe":"天德","sn.jinKui":"金匮","sn.yuTang":"玉堂","sn.siMing":"司命","sn.tianLao":"天牢","sn.gouChen":"勾陈","sn.tianEn":"天恩","sn.muCang":"母仓","sn.shiYang":"时阳","sn.shengQi":"生气","sn.yiHou":"益后","sn.zaiSha":"灾煞","sn.tianHuo":"天火","sn.siJi":"四忌","sn.baLong":"八龙","sn.fuRi":"复日","sn.xuShi":"续世","sn.yueSha":"月煞","sn.yueXu":"月虚","sn.xueZhi":"血支","sn.tianZei":"天贼","sn.wuXu":"五虚","sn.tuFu":"土符","sn.guiJi":"归忌","sn.xueJi":"血忌","sn.yueDe":"月德","sn.yueEn":"月恩","sn.siXiang":"四相","sn.wangRi":"王日","sn.tianCang":"天仓","sn.buJiang":"不将","sn.wuHe":"五合","sn.mingFeiDui":"鸣吠对","sn.yueJian":"月建","sn.xiaoShi":"小时","sn.tuHu":"土府","sn.wangWang":"往亡","sn.yaoAn":"要安","sn.siShen":"死神","sn.tianMa":"天马","sn.jiuHu":"九虎","sn.qiNiao":"七鸟","sn.liuShe":"六蛇","sn.guanRi":"官日","sn.jiQi":"吉期","sn.yuYu":"玉宇","sn.daShi":"大时","sn.daBai":"大败","sn.xianChi":"咸池","sn.shouRi":"守日","sn.tianWu":"天巫","sn.fuDe":"福德","sn.liuYi":"六仪","sn.jinTang":"金堂","sn.yanDui":"厌对","sn.zhaoYao":"招摇","sn.jiuKong":"九空","sn.jiuKan":"九坎","sn.jiuJiao":"九焦","sn.xiangRi":"相日","sn.baoGuang":"宝光","sn.tianGang":"天罡","sn.yueXing":"月刑","sn.yueHai":"月害","sn.youHuo":"游祸","sn.chongRi":"重日","sn.shiDe":"时德","sn.minRi":"民日","sn.sanHe":"三合","sn.linRi":"临日","sn.shiYin":"时阴","sn.mingFei":"鸣吠","sn.siQi":"死气","sn.diNang":"地囊","sn.yueDeHe":"月德合","sn.jingAn":"敬安","sn.puHu":"普护","sn.jieShen":"解神","sn.xiaoHao":"小耗","sn.tianDeHe":"天德合","sn.yueKong":"月空","sn.yiMa":"驿马","sn.tianHou":"天后","sn.chuShen":"除神","sn.yuePo":"月破","sn.daHao":"大耗","sn.wuLi":"五离","sn.yinDe":"阴德","sn.fuSheng":"福生","sn.tianLi":"天吏","sn.zhiSi":"致死","sn.yuanWu":"元武","sn.yangDe":"阳德","sn.tianXi":"天喜","sn.tianYi":"天医","sn.yueYan":"月厌","sn.diHuo":"地火","sn.fourHit":"四击","sn.daSha":"大煞","sn.daHui":"大会","sn.tianYuan":"天愿","sn.liuHe":"六合","sn.wuFu":"五富","sn.shengXin":"圣心","sn.heKui":"河魁","sn.jieSha":"劫煞","sn.siQiong":"四穷","sn.chuShuiLong":"触水龙","sn.baFeng":"八风","sn.tianShe":"天赦","sn.wuMu":"五墓","sn.baZhuan":"八专","sn.yinCuo":"阴错","sn.siHao":"四耗","sn.yangCuo":"阳错","sn.siFei":"四废","sn.sanYin":"三阴","sn.xiaoHui":"小会","sn.yinDaoChongYang":"阴道冲阳","sn.danYin":"单阴","sn.guChen":"孤辰","sn.yinWei":"阴位","sn.xingHen":"行狠","sn.liaoLi":"了戾","sn.jueYin":"绝阴","sn.chunYang":"纯阳","sn.suiBo":"岁薄","sn.yinYangJiaoPo":"阴阳交破","sn.yinYangJuCuo":"阴阳俱错","sn.yinYangJiChong":"阴阳击冲","sn.zhuZhen":"逐阵","sn.yangCuoYinChong":"阳错阴冲","sn.qiFu":"七符","sn.tianGou":"天狗","sn.chengRi":"成日","sn.tianFu":"天符","sn.guYang":"孤阳","sn.jueYang":"绝阳","sn.chunYin":"纯阴","sn.yinShen":"阴神","sn.jieChu":"解除","sn.yangPoYinChong":"阳破阴冲","ss.biJian":"比肩","ss.jieCai":"劫财","ss.shiShen":"食神","ss.shangGuan":"伤官","ss.pianCai":"偏财","ss.zhengCai":"正财","ss.qiSha":"七杀","ss.zhengGuan":"正官","ss.pianYin":"偏印","ss.zhengYin":"正印","s.none":"无","s.huangDao":"黄道","s.heiDao":"黑道","s.goodLuck":"吉","s.badLuck":"凶","s.yin":"阴","s.yang":"阳","s.white":"白","s.black":"黑","s.blue":"碧","s.green":"绿","s.yellow":"黄","s.red":"赤","s.purple":"紫","jr.chuXi":"除夕","jr.chunJie":"春节","jr.yuanXiao":"元宵节","jr.longTou":"龙头节","jr.duanWu":"端午节","jr.qiXi":"七夕节","jr.zhongQiu":"中秋节","jr.chongYang":"重阳节","jr.laBa":"腊八节","jr.yuanDan":"元旦节","jr.qingRen":"情人节","jr.fuNv":"妇女节","jr.zhiShu":"植树节","jr.xiaoFei":"消费者权益日","jr.wuYi":"劳动节","jr.qingNian":"青年节","jr.erTong":"儿童节","jr.yuRen":"愚人节","jr.jianDang":"建党节","jr.jianJun":"建军节","jr.jiaoShi":"教师节","jr.guoQing":"国庆节","jr.wanShengYe":"万圣节前夜","jr.wanSheng":"万圣节","jr.pingAn":"平安夜","jr.shengDan":"圣诞节","ds.changSheng":"长生","ds.muYu":"沐浴","ds.guanDai":"冠带","ds.linGuan":"临官","ds.diWang":"帝旺","ds.shuai":"衰","ds.bing":"病","ds.si":"死","ds.mu":"墓","ds.jue":"绝","ds.tai":"胎","ds.yang":"养","h.first":"初候","h.second":"二候","h.third":"三候","h.qiuYinJie":"蚯蚓结","h.miJiao":"麋角解","h.shuiQuan":"水泉动","h.yanBei":"雁北乡","h.queShi":"鹊始巢","h.zhiShi":"雉始雊","h.jiShi":"鸡始乳","h.zhengNiao":"征鸟厉疾","h.shuiZe":"水泽腹坚","h.dongFeng":"东风解冻","h.zheChongShiZhen":"蛰虫始振","h.yuZhi":"鱼陟负冰","h.taJi":"獭祭鱼","h.houYan":"候雁北","h.caoMuMengDong":"草木萌动","h.taoShi":"桃始华","h.cangGeng":"仓庚鸣","h.yingHua":"鹰化为鸠","h.xuanNiaoZhi":"玄鸟至","h.leiNai":"雷乃发声","h.shiDian":"始电","h.tongShi":"桐始华","h.tianShu":"田鼠化为鴽","h.hongShi":"虹始见","h.pingShi":"萍始生","h.mingJiu":"鸣鸠拂其羽","h.daiSheng":"戴胜降于桑","h.louGuo":"蝼蝈鸣","h.qiuYinChu":"蚯蚓出","h.wangGua":"王瓜生","h.kuCai":"苦菜秀","h.miCao":"靡草死","h.maiQiu":"麦秋至","h.tangLang":"螳螂生","h.juShi":"鵙始鸣","h.fanShe":"反舌无声","h.luJia":"鹿角解","h.tiaoShi":"蜩始鸣","h.banXia":"半夏生","h.wenFeng":"温风至","h.xiShuai":"蟋蟀居壁","h.yingShi":"鹰始挚","h.fuCao":"腐草为萤","h.tuRun":"土润溽暑","h.daYu":"大雨行时","h.liangFeng":"凉风至","h.baiLu":"白露降","h.hanChan":"寒蝉鸣","h.yingNai":"鹰乃祭鸟","h.tianDi":"天地始肃","h.heNai":"禾乃登","h.hongYanLai":"鸿雁来","h.xuanNiaoGui":"玄鸟归","h.qunNiao":"群鸟养羞","h.leiShi":"雷始收声","h.zheChongPiHu":"蛰虫坯户","h.shuiShiHe":"水始涸","h.hongYanLaiBin":"鸿雁来宾","h.queRu":"雀入大水为蛤","h.juYou":"菊有黄花","h.caiNai":"豺乃祭兽","h.caoMuHuangLuo":"草木黄落","h.zheChongXianFu":"蛰虫咸俯","h.shuiShiBing":"水始冰","h.diShi":"地始冻","h.zhiRu":"雉入大水为蜃","h.hongCang":"虹藏不见","h.tianQi":"天气上升地气下降","h.biSe":"闭塞而成冬","h.heDan":"鹖鴠不鸣","h.huShi":"虎始交","h.liTing":"荔挺出","ts.zhan":"占","ts.hu":"户","ts.win":"窗","ts.fang":"房","ts.chuang":"床","ts.lu":"炉","ts.zao":"灶","ts.dui":"碓","ts.mo":"磨","ts.xi":"栖","ts.chu":"厨","ts.ce":"厕","ts.cang":"仓","ts.cangKu":"仓库","ts.daMen":"大门","ts.men":"门","ts.tang":"堂","ly.xianSheng":"先胜","ly.xianFu":"先负","ly.youYin":"友引","ly.foMie":"佛灭","ly.daAn":"大安","ly.chiKou":"赤口","yj.jiSi":"祭祀","yj.qiFu":"祈福","yj.qiuSi":"求嗣","yj.kaiGuang":"开光","yj.suHui":"塑绘","yj.qiJiao":"齐醮","yj.zhaiJiao":"斋醮","yj.muYu":"沐浴","yj.chouShen":"酬神","yj.zaoMiao":"造庙","yj.siZhao":"祀灶","yj.fenXiang":"焚香","yj.xieTu":"谢土","yj.chuHuo":"出火","yj.diaoKe":"雕刻","yj.jiaQu":"嫁娶","yj.DingHun":"订婚","yj.naCai":"纳采","yj.wenMing":"问名","yj.naXu":"纳婿","yj.guiNing":"归宁","yj.anChuang":"安床","yj.heZhang":"合帐","yj.guanJi":"冠笄","yj.dingMeng":"订盟","yj.jinRenKou":"进人口","yj.caiYi":"裁衣","yj.wanMian":"挽面","yj.kaiRong":"开容","yj.xiuFen":"修坟","yj.qiZuan":"启钻","yj.poTu":"破土","yj.anZang":"安葬","yj.liBei":"立碑","yj.chengFu":"成服","yj.chuFu":"除服","yj.kaiShengFen":"开生坟","yj.heShouMu":"合寿木","yj.ruLian":"入殓","yj.yiJiu":"移柩","yj.puDu":"普渡","yj.ruZhai":"入宅","yj.anXiang":"安香","yj.anMen":"安门","yj.xiuZao":"修造","yj.qiJi":"起基","yj.dongTu":"动土","yj.shangLiang":"上梁","yj.shuZhu":"竖柱","yj.kaiJing":"开井开池","yj.zuoBei":"作陂放水","yj.chaiXie":"拆卸","yj.poWu":"破屋","yj.huaiYuan":"坏垣","yj.buYuan":"补垣","yj.faMuZuoLiang":"伐木做梁","yj.zuoZhao":"作灶","yj.jieChu":"解除","yj.kaiZhuYan":"开柱眼","yj.chuanPing":"穿屏扇架","yj.gaiWuHeJi":"盖屋合脊","yj.kaiCe":"开厕","yj.zaoCang":"造仓","yj.saiXue":"塞穴","yj.pingZhi":"平治道涂","yj.zaoQiao":"造桥","yj.zuoCe":"作厕","yj.zhuDi":"筑堤","yj.kaiChi":"开池","yj.faMu":"伐木","yj.kaiQu":"开渠","yj.jueJing":"掘井","yj.saoShe":"扫舍","yj.fangShui":"放水","yj.zaoWu":"造屋","yj.heJi":"合脊","yj.zaoChuChou":"造畜稠","yj.xiuMen":"修门","yj.dingSang":"定磉","yj.zuoLiang":"作梁","yj.xiuShi":"修饰垣墙","yj.jiaMa":"架马","yj.kaiShi":"开市","yj.guaBian":"挂匾","yj.naChai":"纳财","yj.qiuCai":"求财","yj.kaiCang":"开仓","yj.maiChe":"买车","yj.zhiChan":"置产","yj.guYong":"雇佣","yj.chuHuoCai":"出货财","yj.anJiXie":"安机械","yj.zaoCheQi":"造车器","yj.jingLuo":"经络","yj.yunNiang":"酝酿","yj.zuoRan":"作染","yj.guZhu":"鼓铸","yj.zaoChuan":"造船","yj.geMi":"割蜜","yj.zaiZhong":"栽种","yj.quYu":"取渔","yj.jieWang":"结网","yj.muYang":"牧养","yj.anDuiWei":"安碓磑","yj.xiYi":"习艺","yj.ruXue":"入学","yj.liFa":"理发","yj.tanBing":"探病","yj.jianGui":"见贵","yj.chengChuan":"乘船","yj.duShui":"渡水","yj.zhenJiu":"针灸","yj.chuXing":"出行","yj.yiXi":"移徙","yj.fenJu":"分居","yj.TiTou":"剃头","yj.zhengShou":"整手足甲","yj.naChu":"纳畜","yj.buZhuo":"捕捉","yj.tianLie":"畋猎","yj.jiaoNiuMa":"教牛马","yj.huiQinYou":"会亲友","yj.fuRen":"赴任","yj.qiuYi":"求医","yj.zhiBing":"治病","yj.ciSong":"词讼","yj.qiJiDongTu":"起基动土","yj.poWuHuaiYuan":"破屋坏垣","yj.gaiWu":"盖屋","yj.zaoCangKu":"造仓库","yj.liQuanJiaoYi":"立券交易","yj.jiaoYi":"交易","yj.liQuan":"立券","yj.anJi":"安机","yj.huiYou":"会友","yj.qiuYiLiaoBing":"求医疗病","yj.zhuShi":"诸事不宜","yj.yuShi":"馀事勿取","yj.xingSang":"行丧","yj.duanYi":"断蚁","yj.guiXiu":"归岫","xx.bi":"毕","xx.yi":"翼","xx.ji":"箕","xx.kui":"奎","xx.gui":"鬼","xx.di":"氐","xx.xu":"虚","xx.wei":"危","xx.zi":"觜","xx.zhen":"轸","xx.dou":"斗","xx.lou":"娄","xx.liu":"柳","xx.fang":"房","xx.xin":"心","xx.shi":"室","xx.can":"参","xx.jiao":"角","xx.niu":"牛","xx.vei":"胃","xx.xing":"星","xx.zhang":"张","xx.tail":"尾","xx.qiang":"壁","xx.jing":"井","xx.kang":"亢","xx.nv":"女","xx.mao":"昴","sz.chun":"春","sz.xia":"夏","sz.qiu":"秋","sz.dong":"冬","od.first":"孟","od.second":"仲","od.third":"季","yx.shuo":"朔","yx.jiShuo":"既朔","yx.eMeiXin":"蛾眉新","yx.eMei":"蛾眉","yx.xi":"夕","yx.shangXian":"上弦","yx.jiuYe":"九夜","yx.night":"宵","yx.jianYingTu":"渐盈凸","yx.xiaoWang":"小望","yx.wang":"望","yx.jiWang":"既望","yx.liDai":"立待","yx.juDai":"居待","yx.qinDai":"寝待","yx.gengDai":"更待","yx.jianKuiTu":"渐亏凸","yx.xiaXian":"下弦","yx.youMing":"有明","yx.eMeiCan":"蛾眉残","yx.can":"残","yx.xiao":"晓","yx.hui":"晦","ny.sangZhe":"桑柘","ny.baiLa":"白蜡","ny.yangLiu":"杨柳","ny.jinBo":"金箔","ny.haiZhong":"海中","ny.daHai":"大海","ny.shaZhong":"沙中","ny.luZhong":"炉中","ny.shanXia":"山下","ny.daLin":"大林","ny.pingDi":"平地","ny.luPang":"路旁","ny.biShang":"壁上","ny.jianFeng":"剑锋","ny.shanTou":"山头","ny.fuDeng":"覆灯","ny.jianXia":"涧下","ny.tianHe":"天河","ny.chengTou":"城头","ny.daYi":"大驿","ny.chaiChuan":"钗钏","ny.quanZhong":"泉中","ny.daXi":"大溪","ny.wuShang":"屋上","ny.piLi":"霹雳","ny.tianShang":"天上","ny.songBo":"松柏","ny.shiLiu":"石榴","ny.changLiu":"长流"},en:{"tg.jia":"Jia","tg.yi":"Yi","tg.bing":"Bing","tg.ding":"Ding","tg.wu":"Wu","tg.ji":"Ji","tg.geng":"Geng","tg.xin":"Xin","tg.ren":"Ren","tg.gui":"Gui","dz.zi":"Zi","dz.chou":"Chou","dz.yin":"Yin","dz.mao":"Mao","dz.chen":"Chen","dz.si":"Si","dz.wu":"Wu","dz.wei":"Wei","dz.shen":"Shen","dz.you":"You","dz.xu":"Xu","dz.hai":"Hai","zx.jian":"Build","zx.chu":"Remove","zx.man":"Full","zx.ping":"Flat","zx.ding":"Stable","zx.zhi":"Hold","zx.po":"Break","zx.wei":"Danger","zx.cheng":"Complete","zx.shou":"Collect","zx.kai":"Open","zx.bi":"Close","jz.jiaZi":"JiaZi","jz.yiChou":"YiChou","jz.bingYin":"BingYin","jz.dingMao":"DingMao","jz.wuChen":"WuChen","jz.jiSi":"JiSi","jz.gengWu":"GengWu","jz.xinWei":"XinWei","jz.renShen":"RenShen","jz.guiYou":"GuiYou","jz.jiaXu":"JiaXu","jz.yiHai":"YiHai","jz.bingZi":"BingZi","jz.dingChou":"DingChou","jz.wuYin":"WuYin","jz.jiMao":"JiMao","jz.gengChen":"GengChen","jz.xinSi":"XinSi","jz.renWu":"RenWu","jz.guiWei":"GuiWei","jz.jiaShen":"JiaShen","jz.yiYou":"YiYou","jz.bingXu":"BingXu","jz.dingHai":"DingHai","jz.wuZi":"WuZi","jz.jiChou":"JiChou","jz.gengYin":"GengYin","jz.xinMao":"XinMao","jz.renChen":"RenChen","jz.guiSi":"GuiSi","jz.jiaWu":"JiaWu","jz.yiWei":"YiWei","jz.bingShen":"BingShen","jz.dingYou":"DingYou","jz.wuXu":"WuXu","jz.jiHai":"JiHai","jz.gengZi":"GengZi","jz.xinChou":"XinChou","jz.renYin":"RenYin","jz.guiMao":"GuiMao","jz.jiaChen":"JiaChen","jz.yiSi":"YiSi","jz.bingWu":"BingWu","jz.dingWei":"DingWei","jz.wuShen":"WuShen","jz.jiYou":"JiYou","jz.gengXu":"GengXu","jz.xinHai":"XinHai","jz.renZi":"RenZi","jz.guiChou":"GuiChou","jz.jiaYin":"JiaYin","jz.yiMao":"YiMao","jz.bingChen":"BingChen","jz.dingSi":"DingSi","jz.wuWu":"WuWu","jz.jiWei":"JiWei","jz.gengShen":"GengShen","jz.xinYou":"XinYou","jz.renXu":"RenXu","jz.guiHai":"GuiHai","sx.rat":"Rat","sx.ox":"Ox","sx.tiger":"Tiger","sx.rabbit":"Rabbit","sx.dragon":"Dragon","sx.snake":"Snake","sx.horse":"Horse","sx.goat":"Goat","sx.monkey":"Monkey","sx.rooster":"Rooster","sx.dog":"Dog","sx.pig":"Pig","dw.long":"Dragon","dw.niu":"Ox","dw.gou":"Dog","dw.yang":"Goat","dw.tu":"Rabbit","dw.shu":"Rat","dw.ji":"Rooster","dw.ma":"Horse","dw.hu":"Tiger","dw.zhu":"Pig","dw.hou":"Monkey","dw.she":"Snake","dw.huLi":"Fox","dw.yan":"Swallow","dw.bao":"Leopard","dw.yuan":"Ape","dw.yin":"Earthworm","dw.lu":"Deer","dw.wu":"Crow","dw.lang":"Wolf","dw.fu":"Bat","wx.jin":"Metal","wx.mu":"Wood","wx.shui":"Water","wx.huo":"Fire","wx.tu":"Earth","wx.ri":"Sun","wx.yue":"Moon","n.zero":"0","n.one":"1","n.two":"2","n.three":"3","n.four":"4","n.five":"5","n.six":"6","n.seven":"7","n.eight":"8","n.nine":"9","n.ten":"10","n.eleven":"11","n.twelve":"12","w.sun":"Sunday","w.mon":"Monday","w.tues":"Tuesday","w.wed":"Wednesday","w.thur":"Thursday","w.fri":"Friday","w.sat":"Saturday","xz.aries":"Aries","xz.taurus":"Taurus","xz.gemini":"Gemini","xz.cancer":"Cancer","xz.leo":"Leo","xz.virgo":"Virgo","xz.libra":"Libra","xz.scorpio":"Scorpio","xz.sagittarius":"Sagittarius","xz.capricornus":"Capricornus","xz.aquarius":"Aquarius","xz.pisces":"Pisces","bg.qian":"Qian","bg.kun":"Kun","bg.zhen":"Zhen","bg.xun":"Xun","bg.kan":"Kan","bg.li":"Li","bg.gen":"Gen","bg.dui":"Dui","ps.center":"Center","ps.dong":"East","ps.nan":"South","ps.xi":"West","ps.bei":"North","ps.zhong":"Center","ps.zhengDong":"East","ps.zhengNan":"South","ps.zhengXi":"West","ps.zhengBei":"North","ps.dongBei":"Northeast","ps.dongNan":"Southeast","ps.xiBei":"Northwest","ps.xiNan":"Southwest","jq.dongZhi":"Winter Solstice","jq.xiaoHan":"Lesser Cold","jq.daHan":"Great Cold","jq.liChun":"Spring Beginning","jq.yuShui":"Rain Water","jq.jingZhe":"Awakening from Hibernation","jq.chunFen":"Spring Equinox","jq.qingMing":"Fresh Green","jq.guYu":"Grain Rain","jq.liXia":"Beginning of Summer","jq.xiaoMan":"Lesser Fullness","jq.mangZhong":"Grain in Ear","jq.xiaZhi":"Summer Solstice","jq.xiaoShu":"Lesser Heat","jq.daShu":"Greater Heat","jq.liQiu":"Beginning of Autumn","jq.chuShu":"End of Heat","jq.baiLu":"White Dew","jq.qiuFen":"Autumnal Equinox","jq.hanLu":"Cold Dew","jq.shuangJiang":"First Frost","jq.liDong":"Beginning of Winter","jq.xiaoXue":"Light Snow","jq.daXue":"Heavy Snow","sn.qingLong":"Azure Dragon","sn.baiHu":"White Tiger","sn.zhuQue":"Rosefinch","sn.xuanWu":"Black Tortoise","sn.tianEn":"Serene Grace","sn.siShen":"Death","sn.tianMa":"Pegasus","sn.baLong":"Eight Dragon","sn.jiuHu":"Nine Tiger","sn.qiNiao":"Seven Bird","sn.liuShe":"Six Snake","s.none":"None","s.goodLuck":"Good luck","s.badLuck":"Bad luck","s.yin":"Yin","s.yang":"Yang","s.white":"White","s.black":"Black","s.blue":"Blue","s.green":"Green","s.yellow":"Yellow","s.red":"Red","s.purple":"Purple","jr.chuXi":"Chinese New Year's Eve","jr.chunJie":"Luna New Year","jr.yuanXiao":"Lantern Festival","jr.duanWu":"Dragon Boat Festival","jr.qiXi":"Begging Festival","jr.zhongQiu":"Mid-Autumn Festival","jr.laBa":"Laba Festival","jr.yuanDan":"New Year's Day","jr.qingRen":"Valentine's Day","jr.fuNv":"Women's Day","jr.xiaoFei":"Consumer Rights Day","jr.zhiShu":"Arbor Day","jr.wuYi":"International Worker's Day","jr.erTong":"Children's Day","jr.qingNian":"Youth Day","jr.yuRen":"April Fools' Day","jr.jianDang":"Party's Day","jr.jianJun":"Army Day","jr.jiaoShi":"Teachers' Day","jr.guoQing":"National Day","jr.wanShengYe":"All Saints' Eve","jr.wanSheng":"All Saints' Day","jr.pingAn":"Christmas Eve","jr.shengDan":"Christmas Day","ts.zhan":"At","ts.hu":"Household","ts.zao":"Cooker","ts.dui":"Pestle","ts.xi":"Habitat","ts.win":"Window","ts.fang":"Room","ts.chuang":"Bed","ts.lu":"Stove","ts.mo":"Mill","ts.chu":"Kitchen","ts.ce":"Toilet","ts.cang":"Depot","ts.cangKu":"Depot","ts.daMen":"Gate","ts.men":"Door","ts.tang":"Hall","ly.xianSheng":"Win first","ly.xianFu":"Lose first","ly.youYin":"Friend's referral","ly.foMie":"Buddhism's demise","ly.daAn":"Great safety","ly.chiKou":"Chikagoro","yj.jiSi":"Sacrifice","yj.qiFu":"Pray","yj.qiuSi":"Seek heirs","yj.kaiGuang":"Consecretion","yj.suHui":"Paint sculptural","yj.qiJiao":"Build altar","yj.zhaiJiao":"Taoist rites","yj.muYu":"Bathing","yj.chouShen":"Reward gods","yj.zaoMiao":"Build temple","yj.siZhao":"Offer kitchen god","yj.fenXiang":"Burn incense","yj.xieTu":"Earth gratitude","yj.chuHuo":"Expel the flame","yj.diaoKe":"Carving","yj.jiaQu":"Marriage","yj.DingHun":"Engagement","yj.naCai":"Proposing","yj.wenMing":"Ask name","yj.naXu":"Uxorilocal marriage","yj.guiNing":"Visit parents","yj.anChuang":"Bed placing","yj.heZhang":"Make up accounts","yj.guanJi":"Crowning adulthood","yj.dingMeng":"Make alliance","yj.jinRenKou":"Adopt","yj.caiYi":"Dressmaking","yj.wanMian":"Cosmeticsurgery","yj.kaiRong":"Open face","yj.xiuFen":"Grave repair","yj.qiZuan":"Open coffin","yj.poTu":"Break earth","yj.anZang":"Burial","yj.liBei":"Tombstone erecting","yj.chengFu":"Formation of clothes","yj.chuFu":"Mourning clothes removal","yj.kaiShengFen":"Open grave","yj.heShouMu":"Make coffin","yj.ruLian":"Body placing","yj.yiJiu":"Move coffin","yj.puDu":"Save soul","yj.ruZhai":"Enter house","yj.anXiang":"Incenst placement","yj.anMen":"Door placing","yj.xiuZao":"Repair","yj.qiJi":"Digging","yj.dongTu":"Break ground","yj.shangLiang":"Beam placing","yj.shuZhu":"Erecting pillars","yj.kaiJing":"Open pond and well","yj.zuoBei":"Make pond and fill water","yj.chaiXie":"Smash house","yj.poWu":"Break house","yj.huaiYuan":"Demolish","yj.buYuan":"Mending","yj.faMuZuoLiang":"Make beams","yj.zuoZhao":"Make stove","yj.jieChu":"Removal","yj.kaiZhuYan":"Build beam","yj.chuanPing":"Build door","yj.gaiWuHeJi":"Cover house","yj.kaiCe":"Open toilet","yj.zaoCang":"Build depot","yj.saiXue":"Block nest","yj.pingZhi":"Repair roads","yj.zaoQiao":"Build bridge","yj.zuoCe":"Build toilet","yj.zhuDi":"Fill","yj.kaiChi":"Open pond","yj.faMu":"Lumbering","yj.kaiQu":"Canalization","yj.jueJing":"Dig well","yj.saoShe":"Sweep house","yj.fangShui":"Drainage","yj.zaoWu":"Build house","yj.heJi":"Close ridge","yj.zaoChuChou":"Livestock thickening","yj.xiuMen":"Repair door","yj.dingSang":"Fix stone","yj.zuoLiang":"Beam construction","yj.xiuShi":"Decorate wall","yj.jiaMa":"Erect horse","yj.kaiShi":"Opening","yj.guaBian":"Hang plaque","yj.naChai":"Accept wealth","yj.qiuCai":"Seek wealth","yj.kaiCang":"Open depot","yj.maiChe":"Buy car","yj.zhiChan":"Buy property","yj.guYong":"Hire","yj.chuHuoCai":"Delivery","yj.anJiXie":"Build machine","yj.zaoCheQi":"Build car","yj.jingLuo":"Build loom","yj.yunNiang":"Brew","yj.zuoRan":"Dye","yj.guZhu":"Cast","yj.zaoChuan":"Build boat","yj.geMi":"Harvest honey","yj.zaiZhong":"Farming","yj.quYu":"Fishing","yj.jieWang":"Netting","yj.muYang":"Graze","yj.anDuiWei":"Build rub","yj.xiYi":"Learn","yj.ruXue":"Enter school","yj.liFa":"Haircut","yj.tanBing":"Visiting","yj.jianGui":"Meet noble","yj.chengChuan":"Ride boat","yj.duShui":"Cross water","yj.zhenJiu":"Acupuncture","yj.chuXing":"Travel","yj.yiXi":"Move","yj.fenJu":"Live apart","yj.TiTou":"Shave","yj.zhengShou":"Manicure","yj.naChu":"Feed livestock","yj.buZhuo":"Catch","yj.tianLie":"Hunt","yj.jiaoNiuMa":"Train horse","yj.huiQinYou":"Meet friends","yj.fuRen":"Go post","yj.qiuYi":"See doctor","yj.zhiBing":"Treat","yj.ciSong":"Litigation","yj.qiJiDongTu":"Lay foundation","yj.poWuHuaiYuan":"Demolish","yj.gaiWu":"Build house","yj.zaoCangKu":"Build depot","yj.liQuanJiaoYi":"Covenant trade","yj.jiaoYi":"Trade","yj.liQuan":"Covenant","yj.anJi":"Install machine","yj.huiYou":"Meet friends","yj.qiuYiLiaoBing":"Seek treatment","yj.zhuShi":"Everything Sucks","yj.yuShi":"Do nothing else","yj.xingSang":"Funeral","yj.duanYi":"Block ant hole","yj.guiXiu":"Place beam","xx.bi":"Finish","xx.yi":"Wing","xx.ji":"Sieve","xx.kui":"Qui","xx.gui":"Ghost","xx.di":"Foundation","xx.xu":"Virtual","xx.wei":"Danger","xx.zi":"Mouth","xx.zhen":"Cross-bar","xx.dou":"Fight","xx.lou":"Weak","xx.liu":"Willow","xx.fang":"House","xx.xin":"Heart","xx.shi":"Room","xx.can":"Join","xx.jiao":"Horn","xx.niu":"Ox","xx.vei":"Stomach","xx.xing":"Star","xx.zhang":"Chang","xx.tail":"Tail","xx.qiang":"Wall","xx.jing":"Well","xx.kang":"Kang","xx.nv":"Female","xx.mao":"Mao","sz.chun":"Spring","sz.xia":"Summer","sz.qiu":"Autumn","sz.dong":"Winter","yx.shuo":"New","yx.eMeiXin":"New waxing","yx.eMei":"Waxing","yx.xi":"Evening","yx.shangXian":"First quarter","yx.jiuYe":"Nine night","yx.night":"Night","yx.jianYingTu":"Gibbous","yx.xiaoWang":"Little full","yx.wang":"Full","yx.jianKuiTu":"Disseminating","yx.xiaXian":"Third quarter","yx.eMeiCan":"Waning waxing","yx.can":"Waning","yx.xiao":"Daybreak","yx.hui":"Obscure","ny.sangZhe":"Cudrania","ny.baiLa":"Wax","ny.yangLiu":"Willow","ny.jinBo":"Foil","ny.haiZhong":"Sea","ny.daHai":"Ocean","ny.shaZhong":"Sand","ny.luZhong":"Stove","ny.shanXia":"Piedmont","ny.daLin":"Forest","ny.pingDi":"Land","ny.luPang":"Roadside","ny.biShang":"Wall","ny.jianFeng":"Blade","ny.shanTou":"Hilltop","ny.fuDeng":"Light","ny.jianXia":"Valleyn","ny.tianHe":"River","ny.chengTou":"City","ny.daYi":"Post","ny.chaiChuan":"Ornaments","ny.quanZhong":"Spring","ny.daXi":"Stream","ny.wuShang":"Roof","ny.piLi":"Thunderbolt","ny.tianShang":"Sky","ny.songBo":"Coniferin","ny.shiLiu":"Pomegranate","ny.changLiu":"Flows"}};d._OBJ_STRING={LunarUtil:{TIAN_SHEN_TYPE:s.TIAN_SHEN_TYPE,TIAN_SHEN_TYPE_LUCK:s.TIAN_SHEN_TYPE_LUCK,XIU_LUCK:s.XIU_LUCK,LU:s.LU,XIU:s.XIU,SHA:s.SHA,POSITION_DESC:s.POSITION_DESC,NAYIN:s.NAYIN,WU_XING_GAN:s.WU_XING_GAN,WU_XING_ZHI:s.WU_XING_ZHI,SHOU:s.SHOU,GONG:s.GONG,FESTIVAL:s.FESTIVAL,ZHENG:s.ZHENG,ANIMAL:s.ANIMAL,SHI_SHEN:s.SHI_SHEN,XIU_SONG:s.XIU_SONG},SolarUtil:{FESTIVAL:N.FESTIVAL},TaoUtil:{BA_HUI:v.BA_HUI,BA_JIE:v.BA_JIE}};d._DICT_STRING={LunarUtil:{TIAN_SHEN_TYPE:{},TIAN_SHEN_TYPE_LUCK:{},XIU_LUCK:{},LU:{},XIU:{},SHA:{},POSITION_DESC:{},NAYIN:{},WU_XING_GAN:{},WU_XING_ZHI:{},SHOU:{},GONG:{},FESTIVAL:{},ZHENG:{},ANIMAL:{},SHI_SHEN:{},XIU_SONG:{}},SolarUtil:{FESTIVAL:{}},TaoUtil:{BA_HUI:{},BA_JIE:{}}};d._DICT_NUMBER={LunarUtil:{ZHI_TIAN_SHEN_OFFSET:{},CHANG_SHENG_OFFSET:{}}};d._OBJ_NUMBER={LunarUtil:{ZHI_TIAN_SHEN_OFFSET:s.ZHI_TIAN_SHEN_OFFSET,CHANG_SHENG_OFFSET:s.CHANG_SHENG_OFFSET}};d._DICT_ARRAY={LunarUtil:{ZHI_HIDE_GAN:{}}};d._OBJ_ARRAY={LunarUtil:{ZHI_HIDE_GAN:s.ZHI_HIDE_GAN}};d._ARRAYS={LunarUtil:{GAN:[],ZHI:[],JIA_ZI:[],ZHI_XING:[],XUN:[],XUN_KONG:[],CHONG:[],CHONG_GAN:[],CHONG_GAN_TIE:[],HE_GAN_5:[],HE_ZHI_6:[],SHENGXIAO:[],NUMBER:[],POSITION_XI:[],POSITION_YANG_GUI:[],POSITION_YIN_GUI:[],POSITION_FU:[],POSITION_FU_2:[],POSITION_CAI:[],POSITION_TAI_SUI_YEAR:[],POSITION_GAN:[],POSITION_ZHI:[],JIE_QI:[],JIE_QI_IN_USE:[],TIAN_SHEN:[],SHEN_SHA:[],PENGZU_GAN:[],PENGZU_ZHI:[],MONTH_ZHI:[],CHANG_SHENG:[],HOU:[],WU_HOU:[],POSITION_TAI_DAY:[],POSITION_TAI_MONTH:[],YI_JI:[],LIU_YAO:[],MONTH:[],SEASON:[],DAY:[],YUE_XIANG:[]},SolarUtil:{WEEK:[],XINGZUO:[]},TaoUtil:{AN_WU:[]},FotoUtil:{XIU_27:[]},NineStarUtil:{NUMBER:[],WU_XING:[],POSITION:[],LUCK_XUAN_KONG:[],YIN_YANG_QI_MEN:[],COLOR:[]}};d._OBJ_ARRAYS={LunarUtil:{GAN:s.GAN,ZHI:s.ZHI,JIA_ZI:s.JIA_ZI,ZHI_XING:s.ZHI_XING,XUN:s.XUN,XUN_KONG:s.XUN_KONG,CHONG:s.CHONG,CHONG_GAN:s.CHONG_GAN,CHONG_GAN_TIE:s.CHONG_GAN_TIE,HE_GAN_5:s.HE_GAN_5,HE_ZHI_6:s.HE_ZHI_6,SHENGXIAO:s.SHENGXIAO,NUMBER:s.NUMBER,POSITION_XI:s.POSITION_XI,POSITION_YANG_GUI:s.POSITION_YANG_GUI,POSITION_YIN_GUI:s.POSITION_YIN_GUI,POSITION_FU:s.POSITION_FU,POSITION_FU_2:s.POSITION_FU_2,POSITION_CAI:s.POSITION_CAI,POSITION_TAI_SUI_YEAR:s.POSITION_TAI_SUI_YEAR,POSITION_GAN:s.POSITION_GAN,POSITION_ZHI:s.POSITION_ZHI,JIE_QI:s.JIE_QI,JIE_QI_IN_USE:s.JIE_QI_IN_USE,TIAN_SHEN:s.TIAN_SHEN,SHEN_SHA:s.SHEN_SHA,PENGZU_GAN:s.PENGZU_GAN,PENGZU_ZHI:s.PENGZU_ZHI,MONTH_ZHI:s.MONTH_ZHI,CHANG_SHENG:s.CHANG_SHENG,HOU:s.HOU,WU_HOU:s.WU_HOU,POSITION_TAI_DAY:s.POSITION_TAI_DAY,POSITION_TAI_MONTH:s.POSITION_TAI_MONTH,YI_JI:s.YI_JI,LIU_YAO:s.LIU_YAO,MONTH:s.MONTH,SEASON:s.SEASON,DAY:s.DAY,YUE_XIANG:s.YUE_XIANG},SolarUtil:{WEEK:N.WEEK,XINGZUO:N.XINGZUO},TaoUtil:{AN_WU:v.AN_WU},FotoUtil:{XIU_27:b.XIU_27},NineStarUtil:{NUMBER:P.NUMBER,WU_XING:P.WU_XING,POSITION:P.POSITION,LUCK_XUAN_KONG:P.LUCK_XUAN_KONG,YIN_YANG_QI_MEN:P.YIN_YANG_QI_MEN,COLOR:P.COLOR}};class In{constructor(n,t){this._year=n.getStartYear()+t,this._age=n.getStartAge()+t,this._index=t,this._daYun=n,this._lunar=n.getLunar()}getYear(){return this._year}getAge(){return this._age}getIndex(){return this._index}getLunar(){return this._lunar}getGanZhi(){let n=s.getJiaZiIndex(this._lunar.getJieQiTable()[d.getMessage("jq.liChun")].getLunar().getYearInGanZhiExact())+this._index;return this._daYun.getIndex()>0&&(n+=this._daYun.getStartAge()-1),n%=s.JIA_ZI.length,s.JIA_ZI[n]}getXun(){return s.getXun(this.getGanZhi())}getXunKong(){return s.getXunKong(this.getGanZhi())}getLiuYue(){const n=[];for(let t=0;t<12;t++)n.push(new jn(this,t));return n}}class mn{constructor(n,t,e){this._year=n.getStartYear()+t,this._age=n.getStartAge()+t,this._index=t,this._daYun=n,this._lunar=n.getLunar(),this._forward=e}getYear(){return this._year}getAge(){return this._age}getIndex(){return this._index}getGanZhi(){let n=s.getJiaZiIndex(this._lunar.getTimeInGanZhi()),t=this._index+1;this._daYun.getIndex()>0&&(t+=this._daYun.getStartAge()-1),n+=this._forward?t:-t;const e=s.JIA_ZI.length;for(;n<0;)n+=e;return n%=e,s.JIA_ZI[n]}getXun(){return s.getXun(this.getGanZhi())}getXunKong(){return s.getXunKong(this.getGanZhi())}}class Sn{constructor(n,t){const e=n.getLunar(),i=e.getSolar().getYear(),a=n.getStartSolar().getYear();let F=i,r=1,g=a-1,E=a-i;t>=1&&(F=a+(t-1)*10,r=F-i+1,g=F+9,E=r+9),this._startYear=F,this._endYear=g,this._startAge=r,this._endAge=E,this._index=t,this._yun=n,this._lunar=e}getStartYear(){return this._startYear}getEndYear(){return this._endYear}getStartAge(){return this._startAge}getEndAge(){return this._endAge}getIndex(){return this._index}getLunar(){return this._lunar}getGanZhi(){if(this._index<1)return"";let n=s.getJiaZiIndex(this._lunar.getMonthInGanZhiExact());n+=this._yun.isForward()?this._index:-this._index;const t=s.JIA_ZI.length;return n>=t&&(n-=t),n<0&&(n+=t),s.JIA_ZI[n]}getXun(){return s.getXun(this.getGanZhi())}getXunKong(){return s.getXunKong(this.getGanZhi())}getLiuNian(n=10){this._index<1&&(n=this._endYear-this._startYear+1);const t=[];for(let e=0;e<n;e++)t.push(new In(this,e));return t}getXiaoYun(n=10){this._index<1&&(n=this._endYear-this._startYear+1);const t=[];for(let e=0;e<n;e++)t.push(new mn(this,e,this._yun.isForward()));return t}}class wn{constructor(n,t,e=1){this._gender=t,this._lunar=n;const i=n.getYearGanIndexExact()%2===0,a=t===1,F=i&&a||!i&&!a;this._forward=F;const r=n.getPrevJie(),g=n.getNextJie(),E=n.getSolar(),h=F?E:r.getSolar(),D=F?g.getSolar():E;let l=0;if(e===2){let c=D.subtractMinute(h);const x=Math.floor(c/4320);c-=x*4320;const y=Math.floor(c/360);c-=y*360;const f=Math.floor(c/12);c-=f*12,l=c*2,this._startYear=x,this._startMonth=y,this._startDay=f}else{const c=D.getHour()==23?11:s.getTimeZhiIndex(D.toYmdHms().substring(11,16)),x=h.getHour()==23?11:s.getTimeZhiIndex(h.toYmdHms().substring(11,16));let y=c-x,f=D.subtract(h);y<0&&(y+=12,f--);const _=Math.floor(y*10/30),S=f*4+_;this._startDay=y*10-_*30;const z=Math.floor(S/12);this._startMonth=S-z*12,this._startYear=z}this._startHour=l}getGender(){return this._gender}getStartYear(){return this._startYear}getStartMonth(){return this._startMonth}getStartDay(){return this._startDay}getStartHour(){return this._startHour}isForward(){return this._forward}getLunar(){return this._lunar}getStartSolar(){let n=this._lunar.getSolar();return n=n.nextYear(this._startYear),n=n.nextMonth(this._startMonth),n=n.next(this._startDay),n.nextHour(this._startHour)}getDaYun(n=10){const t=[];for(let e=0;e<n;e++)t.push(new Sn(this,e));return t}}class b2{constructor(n){this._sect=2,this._lunar=n}static fromLunar(n){return new b2(n)}getSect(){return this._sect}setSect(n){this._sect=n==1?1:2}getDayGanIndex(){return this._sect===2?this._lunar.getDayGanIndexExact2():this._lunar.getDayGanIndexExact()}getDayZhiIndex(){return this._sect===2?this._lunar.getDayZhiIndexExact2():this._lunar.getDayZhiIndexExact()}getYear(){return this._lunar.getYearInGanZhiExact()}getYearGan(){return this._lunar.getYearGanExact()}getYearZhi(){return this._lunar.getYearZhiExact()}getYearHideGan(){const n=s.ZHI_HIDE_GAN[this.getYearZhi()];return n||[]}getYearWuXing(){const n=s.WU_XING_GAN[this.getYearGan()],t=s.WU_XING_ZHI[this.getYearZhi()];return n&&t?n+t:""}getYearNaYin(){const n=s.NAYIN[this.getYear()];return n||""}getYearShiShenGan(){const n=s.SHI_SHEN[this.getDayGan()+this.getYearGan()];return n||""}getYearShiShenZhi(){const n=this.getDayGan(),t=s.ZHI_HIDE_GAN[this.getYearZhi()],e=[];if(t)for(let i=0,a=t.length;i<a;i++){const F=s.SHI_SHEN[n+t[i]];F&&e.push(F)}return e}getDiShi(n){const t=s.CHANG_SHENG_OFFSET[this.getDayGan()];if(t==null)return"";let e=t+(this.getDayGanIndex()%2==0?n:-n);return e>=12&&(e-=12),e<0&&(e+=12),s.CHANG_SHENG[e]}getYearDiShi(){return this.getDiShi(this._lunar.getYearZhiIndexExact())}getYearXun(){return this._lunar.getYearXunExact()}getYearXunKong(){return this._lunar.getYearXunKongExact()}getMonth(){return this._lunar.getMonthInGanZhiExact()}getMonthGan(){return this._lunar.getMonthGanExact()}getMonthZhi(){return this._lunar.getMonthZhiExact()}getMonthHideGan(){const n=s.ZHI_HIDE_GAN[this.getMonthZhi()];return n||[]}getMonthWuXing(){const n=s.WU_XING_GAN[this.getMonthGan()],t=s.WU_XING_ZHI[this.getMonthZhi()];return n&&t?n+t:""}getMonthNaYin(){const n=s.NAYIN[this.getMonth()];return n||""}getMonthShiShenGan(){const n=s.SHI_SHEN[this.getDayGan()+this.getMonthGan()];return n||""}getMonthShiShenZhi(){const n=this.getDayGan(),t=s.ZHI_HIDE_GAN[this.getMonthZhi()],e=[];if(t)for(let i=0,a=t.length;i<a;i++){const F=s.SHI_SHEN[n+t[i]];F&&e.push(F)}return e}getMonthDiShi(){return this.getDiShi(this._lunar.getMonthZhiIndexExact())}getMonthXun(){return this._lunar.getMonthXunExact()}getMonthXunKong(){return this._lunar.getMonthXunKongExact()}getDay(){return this._sect===2?this._lunar.getDayInGanZhiExact2():this._lunar.getDayInGanZhiExact()}getDayGan(){return this._sect===2?this._lunar.getDayGanExact2():this._lunar.getDayGanExact()}getDayZhi(){return this._sect===2?this._lunar.getDayZhiExact2():this._lunar.getDayZhiExact()}getDayHideGan(){const n=s.ZHI_HIDE_GAN[this.getDayZhi()];return n||[]}getDayWuXing(){const n=s.WU_XING_GAN[this.getDayGan()],t=s.WU_XING_ZHI[this.getDayZhi()];return n&&t?n+t:""}getDayNaYin(){const n=s.NAYIN[this.getDay()];return n||""}getDayShiShenGan(){return"日主"}getDayShiShenZhi(){const n=this.getDayGan(),t=s.ZHI_HIDE_GAN[this.getDayZhi()],e=[];if(t)for(let i=0,a=t.length;i<a;i++){const F=s.SHI_SHEN[n+t[i]];F&&e.push(F)}return e}getDayDiShi(){return this.getDiShi(this.getDayZhiIndex())}getDayXun(){return this._sect===2?this._lunar.getDayXunExact2():this._lunar.getDayXunExact()}getDayXunKong(){return this._sect===2?this._lunar.getDayXunKongExact2():this._lunar.getDayXunKongExact()}getTime(){return this._lunar.getTimeInGanZhi()}getTimeGan(){return this._lunar.getTimeGan()}getTimeZhi(){return this._lunar.getTimeZhi()}getTimeHideGan(){const n=s.ZHI_HIDE_GAN[this.getTimeZhi()];return n||[]}getTimeWuXing(){const n=s.WU_XING_GAN[this._lunar.getTimeGan()],t=s.WU_XING_ZHI[this._lunar.getTimeZhi()];return n&&t?n+t:""}getTimeNaYin(){const n=s.NAYIN[this.getTime()];return n||""}getTimeShiShenGan(){const n=s.SHI_SHEN[this.getDayGan()+this.getTimeGan()];return n||""}getTimeShiShenZhi(){const n=this.getDayGan(),t=s.ZHI_HIDE_GAN[this.getTimeZhi()],e=[];if(t)for(let i=0,a=t.length;i<a;i++){const F=s.SHI_SHEN[n+t[i]];F&&e.push(F)}return e}getTimeDiShi(){return this.getDiShi(this._lunar.getTimeZhiIndex())}getTimeXun(){return this._lunar.getTimeXun()}getTimeXunKong(){return this._lunar.getTimeXunKong()}getTaiYuan(){let n=this._lunar.getMonthGanIndexExact()+1;n>=10&&(n-=10);let t=this._lunar.getMonthZhiIndexExact()+3;return t>=12&&(t-=12),s.GAN[n+1]+s.ZHI[t+1]}getTaiYuanNaYin(){const n=s.NAYIN[this.getTaiYuan()];return n||""}getTaiXi(){const n=this._sect==2?this._lunar.getDayGanIndexExact2():this._lunar.getDayGanIndexExact(),t=this._sect==2?this._lunar.getDayZhiIndexExact2():this._lunar.getDayZhiIndexExact();return s.HE_GAN_5[n]+s.HE_ZHI_6[t]}getTaiXiNaYin(){const n=s.NAYIN[this.getTaiXi()];return n||""}getMingGong(){const n=s.find(this.getMonthZhi(),s.MONTH_ZHI).index,t=s.find(this.getTimeZhi(),s.MONTH_ZHI).index;let e=n+t;e=(e>=14?26:14)-e;let i=(this._lunar.getYearGanIndexExact()+1)*2+e;for(;i>10;)i-=10;return s.GAN[i]+s.MONTH_ZHI[e]}getMingGongNaYin(){const n=s.NAYIN[this.getMingGong()];return n||""}getShenGong(){const n=s.find(this.getMonthZhi(),s.MONTH_ZHI).index,t=s.find(this.getTimeZhi(),s.ZHI).index;let e=n+t;e>12&&(e-=12);let i=(this._lunar.getYearGanIndexExact()+1)*2+e;for(;i>10;)i-=10;return s.GAN[i]+s.MONTH_ZHI[e]}getShenGongNaYin(){const n=s.NAYIN[this.getShenGong()];return n||""}getLunar(){return this._lunar}getYun(n,t=1){return new wn(this._lunar,n,t)}toString(){return this.getYear()+" "+this.getMonth()+" "+this.getDay()+" "+this.getTime()}}const o0=class{static fromIndex(u){return new o0(u)}constructor(u){this._index=u}getNumber(){return P.NUMBER[this._index]}getColor(){return P.COLOR[this._index]}getWuXing(){return P.WU_XING[this._index]}getPosition(){return P.POSITION[this._index]}getPositionDesc(){const u=s.POSITION_DESC[this.getPosition()];return u||""}getNameInXuanKong(){return o0.NAME_XUAN_KONG[this._index]}getNameInBeiDou(){return o0.NAME_BEI_DOU[this._index]}getNameInQiMen(){return o0.NAME_QI_MEN[this._index]}getNameInTaiYi(){return o0.NAME_TAI_YI[this._index]}getLuckInQiMen(){return o0.LUCK_QI_MEN[this._index]}getLuckInXuanKong(){return P.LUCK_XUAN_KONG[this._index]}getYinYangInQiMen(){return P.YIN_YANG_QI_MEN[this._index]}getTypeInTaiYi(){return o0.TYPE_TAI_YI[this._index]}getBaMenInQiMen(){return o0.BA_MEN_QI_MEN[this._index]}getSongInTaiYi(){return o0.SONG_TAI_YI[this._index]}getIndex(){return this._index}toString(){return this.getNumber()+this.getColor()+this.getWuXing()+this.getNameInBeiDou()}toFullString(){let u=this.getNumber();return u+=this.getColor(),u+=this.getWuXing(),u+=" ",u+=this.getPosition(),u+="(",u+=this.getPositionDesc(),u+=") ",u+=this.getNameInBeiDou(),u+=" 玄空[",u+=this.getNameInXuanKong(),u+=" ",u+=this.getLuckInXuanKong(),u+="] 奇门[",u+=this.getNameInQiMen(),u+=" ",u+=this.getLuckInQiMen(),this.getBaMenInQiMen().length>0&&(u+=" ",u+=this.getBaMenInQiMen(),u+="门"),u+=" ",u+=this.getYinYangInQiMen(),u+="] 太乙[",u+=this.getNameInTaiYi(),u+=" ",u+=this.getTypeInTaiYi(),u+="]",u}};let K=o0;K.NAME_BEI_DOU=["天枢","天璇","天玑","天权","玉衡","开阳","摇光","洞明","隐元"];K.NAME_XUAN_KONG=["贪狼","巨门","禄存","文曲","廉贞","武曲","破军","左辅","右弼"];K.NAME_QI_MEN=["天蓬","天芮","天冲","天辅","天禽","天心","天柱","天任","天英"];K.BA_MEN_QI_MEN=["休","死","伤","杜","","开","惊","生","景"];K.NAME_TAI_YI=["太乙","摄提","轩辕","招摇","天符","青龙","咸池","太阴","天乙"];K.TYPE_TAI_YI=["吉神","凶神","安神","安神","凶神","吉神","凶神","吉神","吉神"];K.SONG_TAI_YI=["门中太乙明，星官号贪狼，赌彩财喜旺，婚姻大吉昌，出入无阻挡，参谒见贤良，此行三五里，黑衣别阴阳。","门前见摄提，百事必忧疑，相生犹自可，相克祸必临，死门并相会，老妇哭悲啼，求谋并吉事，尽皆不相宜，只可藏隐遁，若动伤身疾。","出入会轩辕，凡事必缠牵，相生全不美，相克更忧煎，远行多不利，博彩尽输钱，九天玄女法，句句不虚言。","招摇号木星，当之事莫行，相克行人阻，阴人口舌迎，梦寐多惊惧，屋响斧自鸣，阴阳消息理，万法弗违情。","五鬼为天符，当门阴女谋，相克无好事，行路阻中途，走失难寻觅，道逢有尼姑，此星当门值，万事有灾除。","神光跃青龙，财气喜重重，投入有酒食，赌彩最兴隆，更逢相生旺，休言克破凶，见贵安营寨，万事总吉同。","吾将为咸池，当之尽不宜，出入多不利，相克有灾情，赌彩全输尽，求财空手回，仙人真妙语，愚人莫与知，动用虚惊退，反复逆风吹。","坐临太阴星，百祸不相侵，求谋悉成就，知交有觅寻，回风归来路，恐有殃伏起，密语中记取，慎乎莫轻行。","迎来天乙星，相逢百事兴，运用和合庆，茶酒喜相迎，求谋并嫁娶，好合有天成，祸福如神验，吉凶甚分明。"];K.LUCK_QI_MEN=["大凶","大凶","小吉","大吉","大吉","大吉","小凶","小吉","小凶"];class pn{constructor(n,t){this._name=n,this._index=t}getName(){return this._name}setName(n){this._name=n}getIndex(){return this._index}setIndex(n){this._index=n}toString(){return this.getName()}toFullString(){return this.getName()+"第"+this.getIndex()+"天"}}class e2{constructor(n,t){this._name=n,this._index=t}getName(){return this._name}setName(n){this._name=n}getIndex(){return this._index}setIndex(n){this._index=n}toString(){return this.getName()}toFullString(){return this.getName()+"第"+this.getIndex()+"天"}}class o2{static fromYm(n,t){return n0.fromYear(n).getMonth(t)}constructor(n,t,e,i,a){this._year=n,this._month=t,this._dayCount=e,this._firstJulianDay=i,this._index=a,this._zhiIndex=(Math.abs(t)-1+s.BASE_MONTH_ZHI_INDEX)%12}getYear(){return this._year}getMonth(){return this._month}getIndex(){return this._index}getGanIndex(){const n=(n0.fromYear(this._year).getGanIndex()+1)%5*2;return(Math.abs(this._month)-1+n)%10}getZhiIndex(){return this._zhiIndex}getGan(){return s.GAN[this.getGanIndex()+1]}getZhi(){return s.ZHI[this._zhiIndex+1]}getGanZhi(){return this.getGan()+this.getZhi()}isLeap(){return this._month<0}getDayCount(){return this._dayCount}getFirstJulianDay(){return this._firstJulianDay}getPositionXi(){return s.POSITION_XI[this.getGanIndex()+1]}getPositionXiDesc(){return s.POSITION_DESC[this.getPositionXi()]}getPositionYangGui(){return s.POSITION_YANG_GUI[this.getGanIndex()+1]}getPositionYangGuiDesc(){return s.POSITION_DESC[this.getPositionYangGui()]}getPositionYinGui(){return s.POSITION_YIN_GUI[this.getGanIndex()+1]}getPositionYinGuiDesc(){return s.POSITION_DESC[this.getPositionYinGui()]}getPositionFu(n=2){return(n==1?s.POSITION_FU:s.POSITION_FU_2)[this.getGanIndex()+1]}getPositionFuDesc(n=2){return s.POSITION_DESC[this.getPositionFu(n)]}getPositionCai(){return s.POSITION_CAI[this.getGanIndex()+1]}getPositionCaiDesc(){return s.POSITION_DESC[this.getPositionCai()]}getPositionTaiSui(){switch(Math.abs(this._month)){case 1:case 5:case 9:return"艮";case 3:case 7:case 11:return"坤";case 4:case 8:case 12:return"巽"}return s.POSITION_GAN[p.fromJulianDay(this.getFirstJulianDay()).getLunar().getMonthGanIndex()]}getPositionTaiSuiDesc(){return s.POSITION_DESC[this.getPositionTaiSui()]}getNineStar(){const n=n0.fromYear(this._year).getZhiIndex()%3,e=(13+Math.abs(this._month))%12;let i=27-n*3;e<s.BASE_MONTH_ZHI_INDEX&&(i-=3);const a=(i-e)%9;return K.fromIndex(a)}toString(){return`${this.getYear()}年${this.isLeap()?"闰":""}${s.MONTH[Math.abs(this.getMonth())]}月(${this.getDayCount()})天`}next(n){if(n==0)return o2.fromYm(this._year,this._month);{let t=Math.abs(n),e=this._year,i=e,a=this._month,F=0,r=n0.fromYear(e).getMonths();if(n>0){for(;;){const g=r.length;for(let D=0;D<g;D++){const l=r[D];if(l.getYear()===i&&l.getMonth()===a){F=D;break}}const E=g-F-1;if(t<E)break;t-=E;const h=r[g-1];i=h.getYear(),a=h.getMonth(),e++,r=n0.fromYear(e).getMonths()}return r[F+t]}else{for(;;){const g=r.length;for(let h=0;h<g;h++){const D=r[h];if(D.getYear()===i&&D.getMonth()===a){F=h;break}}if(t<=F)break;t-=F;const E=r[0];i=E.getYear(),a=E.getMonth(),e--,r=n0.fromYear(e).getMonths()}return r[F-t]}}}}const B=class{static decode(u){const n="0000000000",t=n+n;return u=u.replace(/J/g,"00"),u=u.replace(/I/g,"000"),u=u.replace(/H/g,"0000"),u=u.replace(/G/g,"00000"),u=u.replace(/t/g,"02"),u=u.replace(/s/g,"002"),u=u.replace(/r/g,"0002"),u=u.replace(/q/g,"00002"),u=u.replace(/p/g,"000002"),u=u.replace(/o/g,"0000002"),u=u.replace(/n/g,"00000002"),u=u.replace(/m/g,"000000002"),u=u.replace(/l/g,"0000000002"),u=u.replace(/k/g,"01"),u=u.replace(/j/g,"0101"),u=u.replace(/i/g,"001"),u=u.replace(/h/g,"001001"),u=u.replace(/g/g,"0001"),u=u.replace(/f/g,"00001"),u=u.replace(/e/g,"000001"),u=u.replace(/d/g,"0000001"),u=u.replace(/c/g,"00000001"),u=u.replace(/b/g,"000000001"),u=u.replace(/a/g,"0000000001"),u=u.replace(/A/g,t+t+t),u=u.replace(/B/g,t+t+n),u=u.replace(/C/g,t+t),u=u.replace(/D/g,t+n),u=u.replace(/E/g,t),u=u.replace(/F/g,n),u}static nutationLon2(u){let n=-1.742*u;const t=u*u;let e=0;for(let i=0,a=B.NUT_B.length;i<a;i+=5)e+=(B.NUT_B[i+3]+n)*Math.sin(B.NUT_B[i]+B.NUT_B[i+1]*u+B.NUT_B[i+2]*t),n=0;return e/100/B.SECOND_PER_RAD}static eLon(u,n){u/=10;let t=0,e=1;const i=1,a=B.XL0[i+1]-B.XL0[i];for(let r=0;r<6;r++,e*=u){const g=Math.floor(B.XL0[i+r]),E=Math.floor(B.XL0[i+1+r]),h=E-g;if(h==0)continue;let D=0;n<0?D=E:(D=Math.floor(3*n*h/a+.5+g),r!=0&&(D+=3),D>E&&(D=E));let l=0;for(let c=g;c<D;c+=3)l+=B.XL0[c]*Math.cos(B.XL0[c+1]+u*B.XL0[c+2]);t+=l*e}t/=B.XL0[0];const F=u*u;return t+=(-.0728-2.7702*u-1.1019*F-.0996*F*u)/B.SECOND_PER_RAD,t}static mLon(u,n){const t=B.XL1,e=t[0].length;let i=1,a=0,F=u*u,r=F*u,g=r*u;const E=g*u,h=u-10;a+=(3.81034409+8399.684730072*u-3319e-8*F+311e-10*r-2033e-13*g)*B.SECOND_PER_RAD,a+=5028.792262*u+1.1124406*F+7699e-8*r-23479e-9*g-178e-10*E,h>0&&(a+=-.866+1.43*h+.054*h*h),F/=1e4,r/=1e8,g/=1e8,n*=6,n<0&&(n=e);for(let D=0,l=t.length;D<l;D++,i*=u){const c=t[D],x=c.length;let y=Math.floor(n*x/e+.5);D>0&&(y+=6),y>=x&&(y=x);let f=0;for(let _=0;_<y;_+=6)f+=c[_]*Math.cos(c[_+1]+u*c[_+2]+F*c[_+3]+r*c[_+4]+g*c[_+5]);a+=f*i}return a/=B.SECOND_PER_RAD,a}static gxcSunLon(u){const n=u*u,t=-.043126+628.301955*u-2732e-9*n;return-20.49552*(1+(.016708634-42037e-9*u-1267e-10*n)*Math.cos(t))/B.SECOND_PER_RAD}static ev(u){const n=628.307585*u;return 628.332+21*Math.sin(1.527+n)+.44*Math.sin(1.48+n*2)+.129*Math.sin(5.82+n)*u+55e-5*Math.sin(4.21+n)*u*u}static saLon(u,n){return B.eLon(u,n)+B.nutationLon2(u)+B.gxcSunLon(u)+Math.PI}static dtExt(u,n){const t=(u-1820)/100;return-20+n*t*t}static dtCalc(u){const n=B.DT_AT.length,t=B.DT_AT[n-2],e=B.DT_AT[n-1];if(u>=t)return u>t+100?B.dtExt(u,31):B.dtExt(u,31)-(B.dtExt(t,31)-e)*(t+100-u)/100;let i=0;for(;i<n&&!(u<B.DT_AT[i+5]);i+=5);const a=(u-B.DT_AT[i])/(B.DT_AT[i+5]-B.DT_AT[i])*10,F=a*a,r=F*a;return B.DT_AT[i+1]+B.DT_AT[i+2]*a+B.DT_AT[i+3]*F+B.DT_AT[i+4]*r}static dtT(u){return B.dtCalc(u/365.2425+2e3)/B.SECOND_PER_DAY}static mv(u){let n=8399.71-914*Math.sin(.7848+8328.691425*u+1523e-7*u*u);return n-=179*Math.sin(2.543+15542.7543*u)+160*Math.sin(.1874+7214.0629*u)+62*Math.sin(3.14+16657.3828*u)+34*Math.sin(4.827+16866.9323*u)+22*Math.sin(4.9+23871.4457*u)+12*Math.sin(2.59+14914.4523*u)+7*Math.sin(.23+6585.7609*u)+5*Math.sin(.9+25195.624*u)+5*Math.sin(2.32-7700.3895*u)+5*Math.sin(3.88+8956.9934*u)+5*Math.sin(.49+7771.3771*u),n}static saLonT(u){let n=628.3319653318,t=(u-1.75347-Math.PI)/n;return n=B.ev(t),t+=(u-B.saLon(t,10))/n,n=B.ev(t),t+=(u-B.saLon(t,-1))/n,t}static msaLon(u,n,t){return B.mLon(u,n)+-34e-7-(B.eLon(u,t)+B.gxcSunLon(u)+Math.PI)}static msaLonT(u){let n=7771.37714500204,t=(u+1.08472)/n;return t+=(u-B.msaLon(t,3,3))/n,n=B.mv(t)-B.ev(t),t+=(u-B.msaLon(t,20,10))/n,t+=(u-B.msaLon(t,-1,60))/n,t}static saLonT2(u){const n=628.3319653318;let t=(u-1.75347-Math.PI)/n;return t-=(5297e-9*t*t+.0334166*Math.cos(4.669257+628.307585*t)+2061e-7*Math.cos(2.67823+628.307585*t)*t)/n,t+=(u-B.eLon(t,8)-Math.PI+(20.5+17.2*Math.sin(2.1824-33.75705*t))/B.SECOND_PER_RAD)/n,t}static msaLonT2(u){let n=7771.37714500204,t=(u+1.08472)/n,e=t*t;t-=(-3309e-8*e+.10976*Math.cos(.784758+8328.6914246*t+152292e-9*e)+.02224*Math.cos(.1874+7214.0628654*t-21848e-8*e)-.03342*Math.cos(4.669257+628.307585*t))/n,e=t*t;const i=B.mLon(t,20)-(4.8950632+628.3319653318*t+5297e-9*e+.0334166*Math.cos(4.669257+628.307585*t)+2061e-7*Math.cos(2.67823+628.307585*t)*t+349e-6*Math.cos(4.6261+1256.61517*t)-20.5/B.SECOND_PER_RAD);return n=7771.38-914*Math.sin(.7848+8328.691425*t+1523e-7*e)-179*Math.sin(2.543+15542.7543*t)-160*Math.sin(.1874+7214.0629*t),t+=(u-i)/n,t}static qiHigh(u){let n=B.saLonT2(u)*36525;n=n-B.dtT(n)+B.ONE_THIRD;const t=(n+.5)%1*B.SECOND_PER_DAY;return(t<1200||t>B.SECOND_PER_DAY-1200)&&(n=B.saLonT(u)*36525-B.dtT(n)+B.ONE_THIRD),n}static shuoHigh(u){let n=B.msaLonT2(u)*36525;n=n-B.dtT(n)+B.ONE_THIRD;const t=(n+.5)%1*B.SECOND_PER_DAY;return(t<1800||t>B.SECOND_PER_DAY-1800)&&(n=B.msaLonT(u)*36525-B.dtT(n)+B.ONE_THIRD),n}static qiLow(u){const n=628.3319653318;let t=(u-4.895062166)/n;t-=(53*t*t+334116*Math.cos(4.67+628.307585*t)+2061*Math.cos(2.678+628.3076*t)*t)/n/1e7;const e=4895062166e-2+6283319653318e-3*t+53*t*t+334166*Math.cos(4.669257+628.307585*t)+3489*Math.cos(4.6261+1256.61517*t)+2060.6*Math.cos(2.67823+628.307585*t)*t-994-834*Math.sin(2.1824-33.75705*t);return t-=(e/1e7-u)/628.332+(32*(t+1.8)*(t+1.8)-20)/B.SECOND_PER_DAY/36525,t*36525+B.ONE_THIRD}static shuoLow(u){const n=7771.37714500204;let t=(u+1.08472)/n;return t-=(-331e-7*t*t+.10976*Math.cos(.785+8328.6914*t)+.02224*Math.cos(.187+7214.0629*t)-.03342*Math.cos(4.669+628.3076*t))/n+(32*(t+1.8)*(t+1.8)-20)/B.SECOND_PER_DAY/36525,t*36525+B.ONE_THIRD}static calcShuo(u){const n=B.SHUO_KB.length;let t=0;const e=14;u+=p.J2000;const i=B.SHUO_KB[0]-e,a=B.SHUO_KB[n-1]-e,F=2436935;if(u<i||u>=F)t=Math.floor(B.shuoHigh(Math.floor((u+e-2451551)/29.5306)*Math.PI*2)+.5);else if(u>=i&&u<a){let r=0;for(;r<n&&!(u+e<B.SHUO_KB[r+2]);r+=2);t=B.SHUO_KB[r]+B.SHUO_KB[r+1]*Math.floor((u+e-B.SHUO_KB[r])/B.SHUO_KB[r+1]),t=Math.floor(t+.5),t==1683460&&t++,t-=p.J2000}else if(u>=a&&u<F){t=Math.floor(B.shuoLow(Math.floor((u+e-2451551)/29.5306)*Math.PI*2)+.5);const r=Math.floor((u-a)/29.5306),g=B.SB.substring(r,r+1);g=="1"?t+=1:g=="2"&&(t-=1)}return t}static calcQi(u){const n=B.QI_KB.length;let t=0;const e=7;u+=p.J2000;const i=B.QI_KB[0]-e,a=B.QI_KB[n-1]-e,F=2436935;if(u<i||u>=F)t=Math.floor(B.qiHigh(Math.floor((u+e-2451259)/365.2422*24)*Math.PI/12)+.5);else if(u>=i&&u<a){let r=0;for(;r<n&&!(u+e<B.QI_KB[r+2]);r+=2);t=B.QI_KB[r]+B.QI_KB[r+1]*Math.floor((u+e-B.QI_KB[r])/B.QI_KB[r+1]),t=Math.floor(t+.5),t==1683460&&t++,t-=p.J2000}else if(u>=a&&u<F){t=Math.floor(B.qiLow(Math.floor((u+e-2451259)/365.2422*24)*Math.PI/12)+.5);const r=Math.floor((u-a)/365.2422*24),g=B.QB.substring(r,r+1);g=="1"?t+=1:g=="2"&&(t-=1)}return t}static qiAccurate(u){const n=B.saLonT(u)*36525;return n-B.dtT(n)+B.ONE_THIRD}static qiAccurate2(u){const n=Math.PI/12,t=Math.floor((u+293)/365.2422*24)*n,e=B.qiAccurate(t);return e-u>5?B.qiAccurate(t-n):e-u<-5?B.qiAccurate(t+n):e}};let U=B;U.ONE_THIRD=1/3;U.SECOND_PER_DAY=86400;U.SECOND_PER_RAD=648e3/Math.PI;U.NUT_B=[2.1824,-33.75705,36e-6,-1720,920,3.5069,1256.66393,11e-6,-132,57,1.3375,16799.4182,-51e-6,-23,10,4.3649,-67.5141,72e-6,21,-9,.04,-628.302,0,-14,0,2.36,8328.691,0,7,0,3.46,1884.966,0,-5,2,5.44,16833.175,0,-4,2,3.69,25128.11,0,-3,0,3.55,628.362,0,2,0];U.DT_AT=[-4e3,108371.7,-13036.8,392,0,-500,17201,-627.82,16.17,-.3413,-150,12200.6,-346.41,5.403,-.1593,150,9113.8,-328.13,-1.647,.0377,500,5707.5,-391.41,.915,.3145,900,2203.4,-283.45,13.034,-.1778,1300,490.1,-57.35,2.085,-.0072,1600,120,-9.81,-1.532,.1403,1700,10.2,-.91,.51,-.037,1800,13.4,-.72,.202,-.0193,1830,7.8,-1.81,.416,-.0247,1860,8.3,-.13,-.406,.0292,1880,-5.4,.32,-.183,.0173,1900,-2.3,2.06,.169,-.0135,1920,21.2,1.69,-.304,.0167,1940,24.2,1.22,-.064,.0031,1960,33.2,.51,.231,-.0109,1980,51,1.29,-.026,.0032,2e3,63.87,.1,0,0,2005,64.7,.21,0,0,2012,66.8,.22,0,0,2016,68.1024,.5456,-.0542,-.001172,2020,69.3612,.0422,-.0502,.006216,2024,69.1752,-.0335,-.0048,811e-6,2028,69.0206,-.0275,.0055,-14e-6,2032,68.9981,.0163,.0054,6e-6,2036,69.1498,.0599,.0053,26e-6,2040,69.4751,.1035,.0051,46e-6,2044,69.9737,.1469,.005,66e-6,2048,70.6451,.1903,.0049,85e-6,2050,71.0457];U.XL0=[1e10,20,578,920,1100,1124,1136,1148,1217,1226,1229,1229,1229,1229,1937,2363,2618,2633,2660,2666,17534704567,0,0,334165646,4.669256804,6283.075849991,3489428,4.6261024,12566.1517,349706,2.744118,5753.384885,341757,2.828866,3.523118,313590,3.62767,77713.771468,267622,4.418084,7860.419392,234269,6.135162,3930.209696,132429,.742464,11506.76977,127317,2.037097,529.690965,119917,1.109629,1577.343542,99025,5.23268,5884.92685,90186,2.04505,26.29832,85722,3.50849,398.149,77979,1.17883,5223.69392,75314,2.53339,5507.55324,50526,4.58293,18849.22755,49238,4.20507,775.52261,35666,2.91954,.06731,31709,5.84902,11790.62909,28413,1.89869,796.29801,27104,.31489,10977.0788,24281,.34481,5486.77784,20616,4.80647,2544.31442,20539,1.86948,5573.1428,20226,2.45768,6069.77675,15552,.83306,213.2991,13221,3.41118,2942.46342,12618,1.08303,20.7754,11513,.64545,.98032,10285,.636,4694.00295,10190,.97569,15720.83878,10172,4.2668,7.11355,9921,6.2099,2146.1654,9761,.681,155.4204,8580,5.9832,161000.6857,8513,1.2987,6275.9623,8471,3.6708,71430.6956,7964,1.8079,17260.1547,7876,3.037,12036.4607,7465,1.7551,5088.6288,7387,3.5032,3154.6871,7355,4.6793,801.8209,6963,.833,9437.7629,6245,3.9776,8827.3903,6115,1.8184,7084.8968,5696,2.7843,6286.599,5612,4.3869,14143.4952,5558,3.4701,6279.5527,5199,.1891,12139.5535,5161,1.3328,1748.0164,5115,.2831,5856.4777,4900,.4874,1194.447,4104,5.3682,8429.2413,4094,2.3985,19651.0485,3920,6.1683,10447.3878,3677,6.0413,10213.2855,3660,2.5696,1059.3819,3595,1.7088,2352.8662,3557,1.776,6812.7668,3329,.5931,17789.8456,3041,.4429,83996.8473,3005,2.7398,1349.8674,2535,3.1647,4690.4798,2474,.2148,3.5904,2366,.4847,8031.0923,2357,2.0653,3340.6124,2282,5.222,4705.7323,2189,5.5559,553.5694,2142,1.4256,16730.4637,2109,4.1483,951.7184,2030,.3713,283.8593,1992,5.2221,12168.0027,1986,5.7747,6309.3742,1912,3.8222,23581.2582,1889,5.3863,149854.4001,1790,2.2149,13367.9726,1748,4.5605,135.0651,1622,5.9884,11769.8537,1508,4.1957,6256.7775,1442,4.1932,242.7286,1435,3.7236,38.0277,1397,4.4014,6681.2249,1362,1.8893,7632.9433,1250,1.1305,5.5229,1205,2.6223,955.5997,1200,1.0035,632.7837,1129,.1774,4164.312,1083,.3273,103.0928,1052,.9387,11926.2544,1050,5.3591,1592.596,1033,6.1998,6438.4962,1001,6.0291,5746.2713,980,.999,11371.705,980,5.244,27511.468,938,2.624,5760.498,923,.483,522.577,922,4.571,4292.331,905,5.337,6386.169,862,4.165,7058.598,841,3.299,7234.794,836,4.539,25132.303,813,6.112,4732.031,812,6.271,426.598,801,5.821,28.449,787,.996,5643.179,776,2.957,23013.54,769,3.121,7238.676,758,3.974,11499.656,735,4.386,316.392,731,.607,11513.883,719,3.998,74.782,706,.323,263.084,676,5.911,90955.552,663,3.665,17298.182,653,5.791,18073.705,630,4.717,6836.645,615,1.458,233141.314,612,1.075,19804.827,596,3.321,6283.009,596,2.876,6283.143,555,2.452,12352.853,541,5.392,419.485,531,.382,31441.678,519,4.065,6208.294,513,2.361,10973.556,494,5.737,9917.697,450,3.272,11015.106,449,3.653,206.186,447,2.064,7079.374,435,4.423,5216.58,421,1.906,245.832,413,.921,3738.761,402,.84,20.355,387,1.826,11856.219,379,2.344,3.881,374,2.954,3128.389,370,5.031,536.805,365,1.018,16200.773,365,1.083,88860.057,352,5.978,3894.182,352,2.056,244287.6,351,3.713,6290.189,340,1.106,14712.317,339,.978,8635.942,339,3.202,5120.601,333,.837,6496.375,325,3.479,6133.513,316,5.089,21228.392,316,1.328,10873.986,309,3.646,10.637,303,1.802,35371.887,296,3.397,9225.539,288,6.026,154717.61,281,2.585,14314.168,262,3.856,266.607,262,2.579,22483.849,257,1.561,23543.231,255,3.949,1990.745,251,3.744,10575.407,240,1.161,10984.192,238,.106,7.046,236,4.272,6040.347,234,3.577,10969.965,211,3.714,65147.62,210,.754,13521.751,207,4.228,5650.292,202,.814,170.673,201,4.629,6037.244,200,.381,6172.87,199,3.933,6206.81,199,5.197,6262.3,197,1.046,18209.33,195,1.07,5230.807,195,4.869,36.028,194,4.313,6244.943,192,1.229,709.933,192,5.595,6282.096,192,.602,6284.056,189,3.744,23.878,188,1.904,15.252,188,.867,22003.915,182,3.681,15110.466,181,.491,1.484,179,3.222,39302.097,179,1.259,12559.038,62833196674749,0,0,20605886,2.67823456,6283.07584999,430343,2.635127,12566.1517,42526,1.59047,3.52312,11926,5.79557,26.29832,10898,2.96618,1577.34354,9348,2.5921,18849.2275,7212,1.1385,529.691,6777,1.8747,398.149,6733,4.4092,5507.5532,5903,2.888,5223.6939,5598,2.1747,155.4204,4541,.398,796.298,3637,.4662,775.5226,2896,2.6471,7.1135,2084,5.3414,.9803,1910,1.8463,5486.7778,1851,4.9686,213.2991,1729,2.9912,6275.9623,1623,.0322,2544.3144,1583,1.4305,2146.1654,1462,1.2053,10977.0788,1246,2.8343,1748.0164,1188,3.258,5088.6288,1181,5.2738,1194.447,1151,2.075,4694.003,1064,.7661,553.5694,997,1.303,6286.599,972,4.239,1349.867,945,2.7,242.729,858,5.645,951.718,758,5.301,2352.866,639,2.65,9437.763,610,4.666,4690.48,583,1.766,1059.382,531,.909,3154.687,522,5.661,71430.696,520,1.854,801.821,504,1.425,6438.496,433,.241,6812.767,426,.774,10447.388,413,5.24,7084.897,374,2.001,8031.092,356,2.429,14143.495,350,4.8,6279.553,337,.888,12036.461,337,3.862,1592.596,325,3.4,7632.943,322,.616,8429.241,318,3.188,4705.732,297,6.07,4292.331,295,1.431,5746.271,290,2.325,20.355,275,.935,5760.498,270,4.804,7234.794,253,6.223,6836.645,228,5.003,17789.846,225,5.672,11499.656,215,5.202,11513.883,208,3.955,10213.286,208,2.268,522.577,206,2.224,5856.478,206,2.55,25132.303,203,.91,6256.778,189,.532,3340.612,188,4.735,83996.847,179,1.474,4164.312,178,3.025,5.523,177,3.026,5753.385,159,4.637,3.286,157,6.124,5216.58,155,3.077,6681.225,154,4.2,13367.973,143,1.191,3894.182,138,3.093,135.065,136,4.245,426.598,134,5.765,6040.347,128,3.085,5643.179,127,2.092,6290.189,125,3.077,11926.254,125,3.445,536.805,114,3.244,12168.003,112,2.318,16730.464,111,3.901,11506.77,111,5.32,23.878,105,3.75,7860.419,103,2.447,1990.745,96,.82,3.88,96,4.08,6127.66,91,5.42,206.19,91,.42,7079.37,88,5.17,11790.63,81,.34,9917.7,80,3.89,10973.56,78,2.4,1589.07,78,2.58,11371.7,77,3.98,955.6,77,3.36,36.03,76,1.3,103.09,75,5.18,10969.97,75,4.96,6496.37,73,5.21,38.03,72,2.65,6309.37,70,5.61,3738.76,69,2.6,3496.03,69,.39,15.25,69,2.78,20.78,65,1.13,7058.6,64,4.28,28.45,61,5.63,10984.19,60,.73,419.48,60,5.28,10575.41,58,5.55,17298.18,58,3.19,4732.03,5291887,0,0,871984,1.072097,6283.07585,30913,.86729,12566.1517,2734,.053,3.5231,1633,5.1883,26.2983,1575,3.6846,155.4204,954,.757,18849.228,894,2.057,77713.771,695,.827,775.523,506,4.663,1577.344,406,1.031,7.114,381,3.441,5573.143,346,5.141,796.298,317,6.053,5507.553,302,1.192,242.729,289,6.117,529.691,271,.306,398.149,254,2.28,553.569,237,4.381,5223.694,208,3.754,.98,168,.902,951.718,153,5.759,1349.867,145,4.364,1748.016,134,3.721,1194.447,125,2.948,6438.496,122,2.973,2146.165,110,1.271,161000.686,104,.604,3154.687,100,5.986,6286.599,92,4.8,5088.63,89,5.23,7084.9,83,3.31,213.3,76,3.42,5486.78,71,6.19,4690.48,68,3.43,4694,65,1.6,2544.31,64,1.98,801.82,61,2.48,10977.08,50,1.44,6836.65,49,2.34,1592.6,46,1.31,4292.33,46,3.81,149854.4,43,.04,7234.79,40,4.94,7632.94,39,1.57,71430.7,38,3.17,6309.37,35,.99,6040.35,35,.67,1059.38,31,3.18,2352.87,31,3.55,8031.09,30,1.92,10447.39,30,2.52,6127.66,28,4.42,9437.76,28,2.71,3894.18,27,.67,25132.3,26,5.27,6812.77,25,.55,6279.55,23,1.38,4705.73,22,.64,6256.78,20,6.07,640.88,28923,5.84384,6283.07585,3496,0,0,1682,5.4877,12566.1517,296,5.196,155.42,129,4.722,3.523,71,5.3,18849.23,64,5.97,242.73,40,3.79,553.57,11408,3.14159,0,772,4.134,6283.076,77,3.84,12566.15,42,.42,155.42,88,3.14,0,17,2.77,6283.08,5,2.01,155.42,3,2.21,12566.15,27962,3.1987,84334.66158,10164,5.42249,5507.55324,8045,3.8801,5223.6939,4381,3.7044,2352.8662,3193,4.0003,1577.3435,2272,3.9847,1047.7473,1814,4.9837,6283.0758,1639,3.5646,5856.4777,1444,3.7028,9437.7629,1430,3.4112,10213.2855,1125,4.8282,14143.4952,1090,2.0857,6812.7668,1037,4.0566,71092.8814,971,3.473,4694.003,915,1.142,6620.89,878,4.44,5753.385,837,4.993,7084.897,770,5.554,167621.576,719,3.602,529.691,692,4.326,6275.962,558,4.41,7860.419,529,2.484,4705.732,521,6.25,18073.705,903,3.897,5507.553,618,1.73,5223.694,380,5.244,2352.866,166,1.627,84334.662,10001398880,0,0,167069963,3.098463508,6283.075849991,1395602,3.0552461,12566.1517,308372,5.198467,77713.771468,162846,1.173877,5753.384885,157557,2.846852,7860.419392,92480,5.45292,11506.76977,54244,4.56409,3930.2097,47211,3.661,5884.92685,34598,.96369,5507.55324,32878,5.89984,5223.69392,30678,.29867,5573.1428,24319,4.2735,11790.62909,21183,5.84715,1577.34354,18575,5.02194,10977.0788,17484,3.01194,18849.22755,10984,5.05511,5486.77784,9832,.8868,6069.7768,8650,5.6896,15720.8388,8583,1.2708,161000.6857,6490,.2725,17260.1547,6292,.9218,529.691,5706,2.0137,83996.8473,5574,5.2416,71430.6956,4938,3.245,2544.3144,4696,2.5781,775.5226,4466,5.5372,9437.7629,4252,6.0111,6275.9623,3897,5.3607,4694.003,3825,2.3926,8827.3903,3749,.8295,19651.0485,3696,4.9011,12139.5535,3566,1.6747,12036.4607,3454,1.8427,2942.4634,3319,.2437,7084.8968,3192,.1837,5088.6288,3185,1.7778,398.149,2846,1.2134,6286.599,2779,1.8993,6279.5527,2628,4.589,10447.3878,2460,3.7866,8429.2413,2393,4.996,5856.4777,2359,.2687,796.298,2329,2.8078,14143.4952,2210,1.95,3154.6871,2035,4.6527,2146.1654,1951,5.3823,2352.8662,1883,.6731,149854.4001,1833,2.2535,23581.2582,1796,.1987,6812.7668,1731,6.152,16730.4637,1717,4.4332,10213.2855,1619,5.2316,17789.8456,1381,5.1896,8031.0923,1364,3.6852,4705.7323,1314,.6529,13367.9726,1041,4.3329,11769.8537,1017,1.5939,4690.4798,998,4.201,6309.374,966,3.676,27511.468,874,6.064,1748.016,779,3.674,12168.003,771,.312,7632.943,756,2.626,6256.778,746,5.648,11926.254,693,2.924,6681.225,680,1.423,23013.54,674,.563,3340.612,663,5.661,11371.705,659,3.136,801.821,648,2.65,19804.827,615,3.029,233141.314,612,5.134,1194.447,563,4.341,90955.552,552,2.091,17298.182,534,5.1,31441.678,531,2.407,11499.656,523,4.624,6438.496,513,5.324,11513.883,477,.256,11856.219,461,1.722,7234.794,458,3.766,6386.169,458,4.466,5746.271,423,1.055,5760.498,422,1.557,7238.676,415,2.599,7058.598,401,3.03,1059.382,397,1.201,1349.867,379,4.907,4164.312,360,5.707,5643.179,352,3.626,244287.6,348,.761,10973.556,342,3.001,4292.331,336,4.546,4732.031,334,3.138,6836.645,324,4.164,9917.697,316,1.691,11015.106,307,.238,35371.887,298,1.306,6283.143,298,1.75,6283.009,293,5.738,16200.773,286,5.928,14712.317,281,3.515,21228.392,280,5.663,8635.942,277,.513,26.298,268,4.207,18073.705,266,.9,12352.853,260,2.962,25132.303,255,2.477,6208.294,242,2.8,709.933,231,1.054,22483.849,229,1.07,14314.168,216,1.314,154717.61,215,6.038,10873.986,200,.561,7079.374,198,2.614,951.718,197,4.369,167283.762,186,2.861,5216.58,183,1.66,39302.097,183,5.912,3738.761,175,2.145,6290.189,173,2.168,10575.407,171,3.702,1592.596,171,1.343,3128.389,164,5.55,6496.375,164,5.856,10984.192,161,1.998,10969.965,161,1.909,6133.513,157,4.955,25158.602,154,6.216,23543.231,153,5.357,13521.751,150,5.77,18209.33,150,5.439,155.42,139,1.778,9225.539,139,1.626,5120.601,128,2.46,13916.019,123,.717,143571.324,122,2.654,88860.057,121,4.414,3894.182,121,1.192,3.523,120,4.03,553.569,119,1.513,17654.781,117,3.117,14945.316,113,2.698,6040.347,110,3.085,43232.307,109,.998,955.6,108,2.939,17256.632,107,5.285,65147.62,103,.139,11712.955,103,5.85,213.299,102,3.046,6037.244,101,2.842,8662.24,100,3.626,6262.3,98,2.36,6206.81,98,5.11,6172.87,98,2,15110.47,97,2.67,5650.29,97,2.75,6244.94,96,4.02,6282.1,96,5.31,6284.06,92,.1,29088.81,85,3.26,20426.57,84,2.6,28766.92,81,3.58,10177.26,80,5.81,5230.81,78,2.53,16496.36,77,4.06,6127.66,73,.04,5481.25,72,5.96,12559.04,72,5.92,4136.91,71,5.49,22003.91,70,3.41,7.11,69,.62,11403.68,69,3.9,1589.07,69,1.96,12416.59,69,4.51,426.6,67,1.61,11087.29,66,4.5,47162.52,66,5.08,283.86,66,4.32,16858.48,65,1.04,6062.66,64,1.59,18319.54,63,5.7,45892.73,63,4.6,66567.49,63,3.82,13517.87,62,2.62,11190.38,61,1.54,33019.02,60,5.58,10344.3,60,5.38,316428.23,60,5.78,632.78,59,6.12,9623.69,57,.16,17267.27,57,3.86,6076.89,57,1.98,7668.64,56,4.78,20199.09,55,4.56,18875.53,55,3.51,17253.04,54,3.07,226858.24,54,4.83,18422.63,53,5.02,12132.44,52,3.63,5333.9,52,.97,155427.54,51,3.36,20597.24,50,.99,11609.86,50,2.21,1990.75,48,1.62,12146.67,48,1.17,12569.67,47,4.62,5436.99,47,1.81,12562.63,47,.59,21954.16,47,.76,7342.46,46,.27,4590.91,46,3.77,156137.48,45,5.66,10454.5,44,5.84,3496.03,43,.24,17996.03,41,5.93,51092.73,41,4.21,12592.45,40,5.14,1551.05,40,5.28,15671.08,39,3.69,18052.93,39,4.94,24356.78,38,2.72,11933.37,38,5.23,7477.52,38,4.99,9779.11,37,3.7,9388.01,37,4.44,4535.06,36,2.16,28237.23,36,2.54,242.73,36,.22,5429.88,35,6.15,19800.95,35,2.92,36949.23,34,5.63,2379.16,34,5.73,16460.33,34,5.11,5849.36,33,6.19,6268.85,10301861,1.1074897,6283.07584999,172124,1.064423,12566.1517,70222,3.14159,0,3235,1.0217,18849.2275,3080,2.8435,5507.5532,2497,1.3191,5223.6939,1849,1.4243,1577.3435,1008,5.9138,10977.0788,865,1.42,6275.962,863,.271,5486.778,507,1.686,5088.629,499,6.014,6286.599,467,5.987,529.691,440,.518,4694.003,410,1.084,9437.763,387,4.75,2544.314,375,5.071,796.298,352,.023,83996.847,344,.949,71430.696,341,5.412,775.523,322,6.156,2146.165,286,5.484,10447.388,284,3.42,2352.866,255,6.132,6438.496,252,.243,398.149,243,3.092,4690.48,225,3.689,7084.897,220,4.952,6812.767,219,.42,8031.092,209,1.282,1748.016,193,5.314,8429.241,185,1.82,7632.943,175,3.229,6279.553,173,1.537,4705.732,158,4.097,11499.656,158,5.539,3154.687,150,3.633,11513.883,148,3.222,7234.794,147,3.653,1194.447,144,.817,14143.495,135,6.151,5746.271,134,4.644,6836.645,128,2.693,1349.867,123,5.65,5760.498,118,2.577,13367.973,113,3.357,17789.846,110,4.497,4292.331,108,5.828,12036.461,102,5.621,6256.778,99,1.14,1059.38,98,.66,5856.48,93,2.32,10213.29,92,.77,16730.46,88,1.5,11926.25,86,1.42,5753.38,85,.66,155.42,81,1.64,6681.22,80,4.11,951.72,66,4.55,5216.58,65,.98,25132.3,64,4.19,6040.35,64,.52,6290.19,63,1.51,5643.18,59,6.18,4164.31,57,2.3,10973.56,55,2.32,11506.77,55,2.2,1592.6,55,5.27,3340.61,54,5.54,553.57,53,5.04,9917.7,53,.92,11371.7,52,3.98,17298.18,52,3.6,10969.97,49,5.91,3894.18,49,2.51,6127.66,48,1.67,12168,46,.31,801.82,42,3.7,10575.41,42,4.05,10984.19,40,2.17,7860.42,40,4.17,26.3,38,5.82,7058.6,37,3.39,6496.37,36,1.08,6309.37,36,5.34,7079.37,34,3.62,11790.63,32,.32,16200.77,31,4.24,3738.76,29,4.55,11856.22,29,1.26,8635.94,27,3.45,5884.93,26,5.08,10177.26,26,5.38,21228.39,24,2.26,11712.96,24,1.05,242.73,24,5.59,6069.78,23,3.63,6284.06,23,1.64,4732.03,22,3.46,213.3,21,1.05,3496.03,21,3.92,13916.02,21,4.01,5230.81,20,5.16,12352.85,20,.69,1990.75,19,2.73,6062.66,19,5.01,11015.11,18,6.04,6283.01,18,2.85,7238.68,18,5.6,6283.14,18,5.16,17253.04,18,2.54,14314.17,17,1.58,7.11,17,.98,3930.21,17,4.75,17267.27,16,2.19,6076.89,16,2.19,18073.7,16,6.12,3.52,16,4.61,9623.69,16,3.4,16496.36,15,.19,9779.11,15,5.3,13517.87,15,4.26,3128.39,15,.81,709.93,14,.5,25158.6,14,4.38,4136.91,13,.98,65147.62,13,3.31,154717.61,13,2.11,1589.07,13,1.92,22483.85,12,6.03,9225.54,12,1.53,12559.04,12,5.82,6282.1,12,5.61,5642.2,12,2.38,167283.76,12,.39,12132.44,12,3.98,4686.89,12,5.81,12569.67,12,.56,5849.36,11,.45,6172.87,11,5.8,16858.48,11,6.22,12146.67,11,2.27,5429.88,435939,5.784551,6283.07585,12363,5.57935,12566.1517,1234,3.1416,0,879,3.628,77713.771,569,1.87,5573.143,330,5.47,18849.228,147,4.48,5507.553,110,2.842,161000.686,101,2.815,5223.694,85,3.11,1577.34,65,5.47,775.52,61,1.38,6438.5,50,4.42,6286.6,47,3.66,7084.9,46,5.39,149854.4,42,.9,10977.08,40,3.2,5088.63,35,1.81,5486.78,32,5.35,3154.69,30,3.52,796.3,29,4.62,4690.48,28,1.84,4694,27,3.14,71430.7,27,6.17,6836.65,26,1.42,2146.17,25,2.81,1748.02,24,2.18,155.42,23,4.76,7234.79,21,3.38,7632.94,21,.22,4705.73,20,4.22,1349.87,20,2.01,1194.45,20,4.58,529.69,19,1.59,6309.37,18,5.7,6040.35,18,6.03,4292.33,17,2.9,9437.76,17,2,8031.09,17,5.78,83996.85,16,.05,2544.31,15,.95,6127.66,14,.36,10447.39,14,1.48,2352.87,13,.77,553.57,13,5.48,951.72,13,5.27,6279.55,13,3.76,6812.77,11,5.41,6256.78,10,.68,1592.6,10,4.95,398.15,10,1.15,3894.18,10,5.2,244287.6,10,1.94,11856.22,9,5.39,25132.3,8,6.18,1059.38,8,.69,8429.24,8,5.85,242.73,7,5.26,14143.5,7,.52,801.82,6,2.24,8635.94,6,4,13367.97,6,2.77,90955.55,6,5.17,7058.6,5,1.46,233141.31,5,4.13,7860.42,5,3.91,26.3,5,3.89,12036.46,5,5.58,6290.19,5,5.54,1990.75,5,.83,11506.77,5,6.22,6681.22,4,5.26,10575.41,4,1.91,7477.52,4,.43,10213.29,4,1.09,709.93,4,5.09,11015.11,4,4.22,88860.06,4,3.57,7079.37,4,1.98,6284.06,4,3.93,10973.56,4,6.18,9917.7,4,.36,10177.26,4,2.75,3738.76,4,3.33,5643.18,4,5.36,25158.6,14459,4.27319,6283.07585,673,3.917,12566.152,77,0,0,25,3.73,18849.23,4,2.8,6286.6,386,2.564,6283.076,31,2.27,12566.15,5,3.44,5573.14,2,2.05,18849.23,1,2.06,77713.77,1,4.41,161000.69,1,3.82,149854.4,1,4.08,6127.66,1,5.26,6438.5,9,1.22,6283.08,1,.66,12566.15];U.XL1=[[22639.586,.78475822,8328.691424623,1.5229241,25.0719,-.123598,4586.438,.1873974,7214.06286536,-2.184756,-18.86,.0828,2369.914,2.542952,15542.75428998,-.661832,6.212,-.0408,769.026,3.140313,16657.38284925,3.04585,50.144,-.2472,666.418,1.527671,628.30195521,-.02664,.062,-.0054,411.596,4.826607,16866.932315,-1.28012,-1.07,-.0059,211.656,4.115028,-1114.6285593,-3.70768,-43.93,.2064,205.436,.230523,6585.7609101,-2.15812,-18.92,.0882,191.956,4.898507,23871.4457146,.86109,31.28,-.164,164.729,2.586078,14914.4523348,-.6352,6.15,-.035,147.321,5.4553,-7700.3894694,-1.5496,-25.01,.118,124.988,.48608,7771.377145,-.3309,3.11,-.02,109.38,3.88323,8956.9933798,1.4963,25.13,-.129,55.177,5.57033,-1324.178025,.6183,7.3,-.035,45.1,.89898,25195.62374,.2428,24,-.129,39.533,3.81213,-8538.24089,2.803,26.1,-.118,38.43,4.30115,22756.817155,-2.8466,-12.6,.042,36.124,5.49587,24986.074274,4.5688,75.2,-.371,30.773,1.94559,14428.125731,-4.3695,-37.7,.166,28.397,3.28586,7842.364821,-2.2114,-18.8,.077,24.358,5.64142,16171.056245,-.6885,6.3,-.046,18.585,4.41371,-557.31428,-1.8538,-22,.1,17.954,3.58454,8399.6791,-.3576,3.2,-.03,14.53,4.9416,23243.143759,.888,31.2,-.16,14.38,.9709,32200.137139,2.384,56.4,-.29,14.251,5.7641,-2.3012,1.523,25.1,-.12,13.899,.3735,31085.50858,-1.324,12.4,-.08,13.194,1.7595,-9443.319984,-5.231,-69,.33,9.679,3.0997,-16029.080894,-3.072,-50.1,.24,9.366,.3016,24080.99518,-3.465,-19.9,.08,8.606,4.1582,-1742.930514,-3.681,-44,.21,8.453,2.8416,16100.06857,1.192,28.2,-.14,8.05,2.6292,14286.15038,-.609,6.1,-.03,7.63,6.2388,17285.684804,3.019,50.2,-.25,7.447,1.4845,1256.60391,-.053,.1,-.01,7.371,.2736,5957.458955,-2.131,-19,.09,7.063,5.6715,33.757047,-.308,-3.6,.02,6.383,4.7843,7004.5134,2.141,32.4,-.16,5.742,2.6572,32409.686605,-1.942,5,-.05,4.374,4.3443,22128.5152,-2.82,-13,.05,3.998,3.2545,33524.31516,1.766,49,-.25,3.21,2.2443,14985.44001,-2.516,-16,.06,2.915,1.7138,24499.74767,.834,31,-.17,2.732,1.9887,13799.82378,-4.343,-38,.17,2.568,5.4122,-7072.08751,-1.576,-25,.11,2.521,3.2427,8470.66678,-2.238,-19,.07,2.489,4.0719,-486.3266,-3.734,-44,.2,2.146,5.6135,-1952.47998,.645,7,-.03,1.978,2.7291,39414.2,.199,37,-.21,1.934,1.5682,33314.7657,6.092,100,-.5,1.871,.4166,30457.20662,-1.297,12,-.1,1.753,2.0582,-8886.0057,-3.38,-47,.2,1.437,2.386,-695.87607,.59,7,0,1.373,3.026,-209.54947,4.33,51,-.2,1.262,5.94,16728.37052,1.17,28,-.1,1.224,6.172,6656.74859,-4.04,-41,.2,1.187,5.873,6099.43431,-5.89,-63,.3,1.177,1.014,31571.83518,2.41,56,-.3,1.162,3.84,9585.29534,1.47,25,-.1,1.143,5.639,8364.73984,-2.18,-19,.1,1.078,1.229,70.98768,-1.88,-22,.1,1.059,3.326,40528.82856,3.91,81,-.4,.99,5.013,40738.37803,-.42,30,-.2,.948,5.687,-17772.01141,-6.75,-94,.5,.876,.298,-.35232,0,0,0,.822,2.994,393.02097,0,0,0,.788,1.836,8326.39022,3.05,50,-.2,.752,4.985,22614.8418,.91,31,-.2,.74,2.875,8330.99262,0,0,0,.669,.744,-24357.77232,-4.6,-75,.4,.644,1.314,8393.12577,-2.18,-19,.1,.639,5.888,575.33849,0,0,0,.635,1.116,23385.11911,-2.87,-13,0,.584,5.197,24428.75999,2.71,53,-.3,.583,3.513,-9095.55517,.95,4,0,.572,6.059,29970.88002,-5.03,-32,.1,.565,2.96,.32863,1.52,25,-.1,.561,4.001,-17981.56087,-2.43,-43,.2,.557,.529,7143.07519,-.3,3,0,.546,2.311,25614.37623,4.54,75,-.4,.536,4.229,15752.30376,-4.99,-45,.2,.493,3.316,-8294.9344,-1.83,-29,.1,.491,1.744,8362.4485,1.21,21,-.1,.478,1.803,-10071.6219,-5.2,-69,.3,.454,.857,15333.2048,3.66,57,-.3,.445,2.071,8311.7707,-2.18,-19,.1,.426,.345,23452.6932,-3.44,-20,.1,.42,4.941,33733.8646,-2.56,-2,0,.413,1.642,17495.2343,-1.31,-1,0,.404,1.458,23314.1314,-.99,9,-.1,.395,2.132,38299.5714,-3.51,-6,0,.382,2.7,31781.3846,-1.92,5,0,.375,4.827,6376.2114,2.17,32,-.2,.361,3.867,16833.1753,-.97,3,0,.358,5.044,15056.4277,-4.4,-38,.2,.35,5.157,-8257.7037,-3.4,-47,.2,.344,4.233,157.7344,0,0,0,.34,2.672,13657.8484,-.58,6,0,.329,5.61,41853.0066,3.29,74,-.4,.325,5.895,-39.8149,0,0,0,.309,4.387,21500.2132,-2.79,-13,.1,.302,1.278,786.0419,0,0,0,.302,5.341,-24567.3218,-.27,-24,.1,.301,1.045,5889.8848,-1.57,-12,0,.294,4.201,-2371.2325,-3.65,-44,.2,.293,3.704,21642.1886,-6.55,-57,.2,.29,4.069,32828.4391,2.36,56,-.3,.289,3.472,31713.8105,-1.35,12,-.1,.285,5.407,-33.7814,.31,4,0,.283,5.998,-16.9207,-3.71,-44,.2,.283,2.772,38785.898,.23,37,-.2,.274,5.343,15613.742,-2.54,-16,.1,.263,3.997,25823.9257,.22,24,-.1,.254,.6,24638.3095,-1.61,2,0,.253,1.344,6447.1991,.29,10,-.1,.25,.887,141.9754,-3.76,-44,.2,.247,.317,5329.157,-2.1,-19,.1,.245,.141,36.0484,-3.71,-44,.2,.231,2.287,14357.1381,-2.49,-16,.1,.227,5.158,2.6298,0,0,0,.219,5.085,47742.8914,1.72,63,-.3,.211,2.145,6638.7244,-2.18,-19,.1,.201,4.415,39623.7495,-4.13,-14,0,.194,2.091,588.4927,0,0,0,.193,3.057,-15400.7789,-3.1,-50,0,.186,5.598,16799.3582,-.72,6,0,.185,3.886,1150.677,0,0,0,.183,1.619,7178.0144,1.52,25,0,.181,2.635,8328.3391,1.52,25,0,.181,2.077,8329.0437,1.52,25,0,.179,3.215,-9652.8694,-.9,-18,0,.176,1.716,-8815.018,-5.26,-69,0,.175,5.673,550.7553,0,0,0,.17,2.06,31295.058,-5.6,-39,0,.167,1.239,7211.7617,-.7,6,0,.165,4.499,14967.4158,-.7,6,0,.164,3.595,15540.4531,.9,31,0,.164,4.237,522.3694,0,0,0,.163,4.633,15545.0555,-2.2,-19,0,.161,.478,6428.0209,-2.2,-19,0,.158,2.03,13171.5218,-4.3,-38,0,.157,2.28,7216.3641,-3.7,-44,0,.154,5.65,7935.6705,1.5,25,0,.152,.46,29828.9047,-1.3,12,0,.151,1.19,-.7113,0,0,0,.15,1.42,23942.4334,-1,9,0,.144,2.75,7753.3529,1.5,25,0,.137,2.08,7213.7105,-2.2,-19,0,.137,1.44,7214.4152,-2.2,-19,0,.136,4.46,-1185.6162,-1.8,-22,0,.136,3.03,8000.1048,-2.2,-19,0,.134,2.83,14756.7124,-.7,6,0,.131,5.05,6821.0419,-2.2,-19,0,.128,5.99,-17214.6971,-4.9,-72,0,.127,5.35,8721.7124,1.5,25,0,.126,4.49,46628.2629,-2,19,0,.125,5.94,7149.6285,1.5,25,0,.124,1.09,49067.0695,1.1,55,0,.121,2.88,15471.7666,1.2,28,0,.111,3.92,41643.4571,7.6,125,-1,.11,1.96,8904.0299,1.5,25,0,.106,3.3,-18.0489,-2.2,-19,0,.105,2.3,-4.931,1.5,25,0,.104,2.22,-6.559,-1.9,-22,0,.101,1.44,1884.9059,-.1,0,0,.1,5.92,5471.1324,-5.9,-63,0,.099,1.12,15149.7333,-.7,6,0,.096,4.73,15508.9972,-.4,10,0,.095,5.18,7230.9835,1.5,25,0,.093,3.37,39900.5266,3.9,81,0,.092,2.01,25057.0619,2.7,53,0,.092,1.21,-79.6298,0,0,0,.092,1.65,-26310.2523,-4,-68,0,.091,1.01,42062.5561,-1,23,0,.09,6.1,29342.5781,-5,-32,0,.09,4.43,15542.402,-.7,6,0,.09,3.8,15543.1066,-.7,6,0,.089,4.15,6063.3859,-2.2,-19,0,.086,4.03,52.9691,0,0,0,.085,.49,47952.4409,-2.6,11,0,.085,1.6,7632.8154,2.1,32,0,.084,.22,14392.0773,-.7,6,0,.083,6.22,6028.4466,-4,-41,0,.083,.63,-7909.9389,2.8,26,0,.083,5.2,-77.5523,0,0,0,.082,2.74,8786.1467,-2.2,-19,0,.08,2.43,9166.5428,-2.8,-26,0,.08,3.7,-25405.1732,4.1,27,0,.078,5.68,48857.52,5.4,106,-1,.077,1.85,8315.5735,-2.2,-19,0,.075,5.46,-18191.1103,1.9,8,0,.075,1.41,-16238.6304,1.3,1,0,.074,5.06,40110.0761,-.4,30,0,.072,2.1,64.4343,-3.7,-44,0,.071,2.17,37671.2695,-3.5,-6,0,.069,1.71,16693.4313,-.7,6,0,.069,3.33,-26100.7028,-8.3,-119,1,.068,1.09,8329.4028,1.5,25,0,.068,3.62,8327.9801,1.5,25,0,.068,2.41,16833.1509,-1,3,0,.067,3.4,24709.2971,-3.5,-20,0,.067,1.65,8346.7156,-.3,3,0,.066,2.61,22547.2677,1.5,39,0,.066,3.5,15576.5113,-1,3,0,.065,5.76,33037.9886,-2,5,0,.065,4.58,8322.1325,-.3,3,0,.065,6.2,17913.9868,3,50,0,.065,1.5,22685.8295,-1,9,0,.065,2.37,7180.3058,-1.9,-15,0,.064,1.06,30943.5332,2.4,56,0,.064,1.89,8288.8765,1.5,25,0,.064,4.7,6.0335,.3,4,0,.063,2.83,8368.5063,1.5,25,0,.063,5.66,-2580.7819,.7,7,0,.062,3.78,7056.3285,-2.2,-19,0,.061,1.49,8294.91,1.8,29,0,.061,.12,-10281.1714,-.9,-18,0,.061,3.06,-8362.4729,-1.2,-21,0,.061,4.43,8170.9571,1.5,25,0,.059,5.78,-13.1179,-3.7,-44,0,.059,5.97,6625.5702,-2.2,-19,0,.058,5.01,-.508,-.3,0,0,.058,2.73,7161.0938,-2.2,-19,0,.057,.19,7214.0629,-2.2,-19,0,.057,4,22199.5029,-4.7,-35,0,.057,5.38,8119.142,5.8,76,0,.056,1.07,7542.6495,1.5,25,0,.056,.28,8486.4258,1.5,25,0,.054,4.19,16655.0816,4.6,75,0,.053,.72,7267.032,-2.2,-19,0,.053,3.12,12.6192,.6,7,0,.052,2.99,-32896.013,-1.8,-49,0,.052,3.46,1097.708,0,0,0,.051,5.37,-6443.786,-1.6,-25,0,.051,1.35,7789.401,-2.2,-19,0,.051,5.83,40042.502,.2,38,0,.051,3.63,9114.733,1.5,25,0,.05,1.51,8504.484,-2.5,-22,0,.05,5.23,16659.684,1.5,25,0,.05,1.15,7247.82,-2.5,-23,0,.047,.25,-1290.421,.3,0,0,.047,4.67,-32686.464,-6.1,-100,0,.047,3.49,548.678,0,0,0,.047,2.37,6663.308,-2.2,-19,0,.046,.98,1572.084,0,0,0,.046,2.04,14954.262,-.7,6,0,.046,3.72,6691.693,-2.2,-19,0,.045,6.19,-235.287,0,0,0,.044,2.96,32967.001,-.1,27,0,.044,3.82,-1671.943,-5.6,-66,0,.043,5.82,1179.063,0,0,0,.043,.07,34152.617,1.7,49,0,.043,3.71,6514.773,-.3,0,0,.043,5.62,15.732,-2.5,-23,0,.043,5.8,8351.233,-2.2,-19,0,.042,.27,7740.199,1.5,25,0,.042,6.14,15385.02,-.7,6,0,.042,6.13,7285.051,-4.1,-41,0,.041,1.27,32757.451,4.2,78,0,.041,4.46,8275.722,1.5,25,0,.04,.23,8381.661,1.5,25,0,.04,5.87,-766.864,2.5,29,0,.04,1.66,254.431,0,0,0,.04,.4,9027.981,-.4,0,0,.04,2.96,7777.936,1.5,25,0,.039,4.67,33943.068,6.1,100,0,.039,3.52,8326.062,1.5,25,0,.039,3.75,21013.887,-6.5,-57,0,.039,5.6,606.978,0,0,0,.039,1.19,8331.321,1.5,25,0,.039,2.84,7211.433,-2.2,-19,0,.038,.67,7216.693,-2.2,-19,0,.038,6.22,25161.867,.6,28,0,.038,4.4,7806.322,1.5,25,0,.038,4.16,9179.168,-2.2,-19,0,.037,4.73,14991.999,-.7,6,0,.036,.35,67.514,-.6,-7,0,.036,3.7,25266.611,-1.6,0,0,.036,5.39,16328.796,-.7,6,0,.035,1.44,7174.248,-2.2,-19,0,.035,5,15684.73,-4.4,-38,0,.035,.39,-15.419,-2.2,-19,0,.035,6.07,15020.385,-.7,6,0,.034,6.01,7371.797,-2.2,-19,0,.034,.96,-16623.626,-3.4,-54,0,.033,6.24,9479.368,1.5,25,0,.033,3.21,23661.896,5.2,82,0,.033,4.06,8311.418,-2.2,-19,0,.033,2.4,1965.105,0,0,0,.033,5.17,15489.785,-.7,6,0,.033,5.03,21986.54,.9,31,0,.033,4.1,16691.14,2.7,46,0,.033,5.13,47114.589,1.7,63,0,.033,4.45,8917.184,1.5,25,0,.033,4.23,2.078,0,0,0,.032,2.33,75.251,1.5,25,0,.032,2.1,7253.878,-2.2,-19,0,.032,3.11,-.224,1.5,25,0,.032,4.43,16640.462,-.7,6,0,.032,5.68,8328.363,0,0,0,.031,5.32,8329.02,3,50,0,.031,3.7,16118.093,-.7,6,0,.03,3.67,16721.817,-.7,6,0,.03,5.27,-1881.492,-1.2,-15,0,.03,5.72,8157.839,-2.2,-19,0,.029,5.73,-18400.313,-6.7,-94,0,.029,2.76,16,-2.2,-19,0,.029,1.75,8879.447,1.5,25,0,.029,.32,8851.061,1.5,25,0,.029,.9,14704.903,3.7,57,0,.028,2.9,15595.723,-.7,6,0,.028,5.88,16864.631,.2,24,0,.028,.63,16869.234,-2.8,-26,0,.028,4.04,-18609.863,-2.4,-43,0,.027,5.83,6727.736,-5.9,-63,0,.027,6.12,418.752,4.3,51,0,.027,.14,41157.131,3.9,81,0,.026,3.8,15.542,0,0,0,.026,1.68,50181.698,4.8,99,-1,.026,.32,315.469,0,0,0,.025,5.67,19.188,.3,0,0,.025,3.16,62.133,-2.2,-19,0,.025,3.76,15502.939,-.7,6,0,.025,4.53,45999.961,-2,19,0,.024,3.21,837.851,-4.4,-51,0,.024,2.82,38157.596,.3,37,0,.024,5.21,15540.124,-.7,6,0,.024,.26,14218.576,0,13,0,.024,3.01,15545.384,-.7,6,0,.024,1.16,-17424.247,-.6,-21,0,.023,2.34,-67.574,.6,7,0,.023,2.44,18.024,-1.9,-22,0,.023,3.7,469.4,0,0,0,.023,.72,7136.511,-2.2,-19,0,.023,4.5,15582.569,-.7,6,0,.023,2.8,-16586.395,-4.9,-72,0,.023,1.51,80.182,0,0,0,.023,1.09,5261.583,-1.5,-12,0,.023,.56,54956.954,-.5,44,0,.023,4.01,8550.86,-2.2,-19,0,.023,4.46,38995.448,-4.1,-14,0,.023,3.82,2358.126,0,0,0,.022,3.77,32271.125,.5,34,0,.022,.82,15935.775,-.7,6,0,.022,1.07,24013.421,-2.9,-13,0,.022,.4,8940.078,-2.2,-19,0,.022,2.06,15700.489,-.7,6,0,.022,4.27,15124.002,-5,-45,0,.021,1.16,56071.583,3.2,88,0,.021,5.58,9572.189,-2.2,-19,0,.02,1.7,-17.273,-3.7,-44,0,.02,3.05,214.617,0,0,0,.02,4.41,8391.048,-2.2,-19,0,.02,5.95,23869.145,2.4,56,0,.02,.42,40947.927,-4.7,-21,0,.019,1.39,5818.897,.3,10,0,.019,.71,23873.747,-.7,6,0,.019,2.81,7291.615,-2.2,-19,0,.019,5.09,8428.018,-2.2,-19,0,.019,4.14,6518.187,-1.6,-12,0,.019,3.85,21.33,0,0,0,.018,.66,14445.046,-.7,6,0,.018,1.65,.966,-4,-48,0,.018,5.64,-17143.709,-6.8,-94,0,.018,6.01,7736.432,-2.2,-19,0,.018,2.74,31153.083,-1.9,5,0,.018,4.58,6116.355,-2.2,-19,0,.018,2.28,46.401,.3,0,0,.018,3.8,10213.597,1.4,25,0,.018,2.84,56281.132,-1.1,36,0,.018,3.53,8249.062,1.5,25,0,.017,4.43,20871.911,-3,-13,0,.017,4.44,627.596,0,0,0,.017,1.85,628.308,0,0,0,.017,1.19,8408.321,2,25,0,.017,1.95,7214.056,-2,-19,0,.017,1.57,7214.07,-2,-19,0,.017,1.65,13870.811,-6,-60,0,.017,.3,22.542,-4,-44,0,.017,2.62,-119.445,0,0,0,.016,4.87,5747.909,2,32,0,.016,4.45,14339.108,-1,6,0,.016,1.83,41366.68,0,30,0,.016,4.53,16309.618,-3,-23,0,.016,2.54,15542.754,-1,6,0,.016,6.05,1203.646,0,0,0,.015,5.2,2751.147,0,0,0,.015,1.8,-10699.924,-5,-69,0,.015,.4,22824.391,-3,-20,0,.015,2.1,30666.756,-6,-39,0,.015,2.1,6010.417,-2,-19,0,.015,.7,-23729.47,-5,-75,0,.015,1.4,14363.691,-1,6,0,.015,5.8,16900.689,-2,0,0,.015,5.2,23800.458,3,53,0,.015,5.3,6035,-2,-19,0,.015,1.2,8251.139,2,25,0,.015,3.6,-8.86,0,0,0,.015,.8,882.739,0,0,0,.015,3,1021.329,0,0,0,.015,.6,23296.107,1,31,0,.014,5.4,7227.181,2,25,0,.014,.1,7213.352,-2,-19,0,.014,4,15506.706,3,50,0,.014,3.4,7214.774,-2,-19,0,.014,4.6,6665.385,-2,-19,0,.014,.1,-8.636,-2,-22,0,.014,3.1,15465.202,-1,6,0,.014,4.9,508.863,0,0,0,.014,3.5,8406.244,2,25,0,.014,1.3,13313.497,-8,-82,0,.014,2.8,49276.619,-3,0,0,.014,.1,30528.194,-3,-10,0,.013,1.7,25128.05,1,31,0,.013,2.9,14128.405,-1,6,0,.013,3.4,57395.761,3,80,0,.013,2.7,13029.546,-1,6,0,.013,3.9,7802.556,-2,-19,0,.013,1.6,8258.802,-2,-19,0,.013,2.2,8417.709,-2,-19,0,.013,.7,9965.21,-2,-19,0,.013,3.4,50391.247,0,48,0,.013,3,7134.433,-2,-19,0,.013,2.9,30599.182,-5,-31,0,.013,3.6,-9723.857,1,0,0,.013,4.8,7607.084,-2,-19,0,.012,.8,23837.689,1,35,0,.012,3.6,4.409,-4,-44,0,.012,5,16657.031,3,50,0,.012,4.4,16657.735,3,50,0,.012,1.1,15578.803,-4,-38,0,.012,6,-11.49,0,0,0,.012,1.9,8164.398,0,0,0,.012,2.4,31852.372,-4,-17,0,.012,2.4,6607.085,-2,-19,0,.012,4.2,8359.87,0,0,0,.012,.5,5799.713,-2,-19,0,.012,2.7,7220.622,0,0,0,.012,4.3,-139.72,0,0,0,.012,2.3,13728.836,-2,-16,0,.011,3.6,14912.146,1,31,0,.011,4.7,14916.748,-2,-19,0],[1.6768,4.66926,628.301955,-.0266,.1,-.005,.51642,3.3721,6585.76091,-2.158,-18.9,.09,.41383,5.7277,14914.452335,-.635,6.2,-.04,.37115,3.9695,7700.389469,1.55,25,-.12,.2756,.7416,8956.99338,1.496,25.1,-.13,.24599,4.2253,-2.3012,1.523,25.1,-.12,.07118,.1443,7842.36482,-2.211,-19,.08,.06128,2.4998,16171.05625,-.688,6,0,.04516,.443,8399.6791,-.36,3,0,.04048,5.771,14286.15038,-.61,6,0,.03747,4.626,1256.60391,-.05,0,0,.03707,3.415,5957.45895,-2.13,-19,.1,.03649,1.8,23243.14376,.89,31,-.2,.02438,.042,16029.08089,3.07,50,-.2,.02165,1.017,-1742.93051,-3.68,-44,.2,.01923,3.097,17285.6848,3.02,50,-.3,.01692,1.28,.3286,1.52,25,-.1,.01361,.298,8326.3902,3.05,50,-.2,.01293,4.013,7072.0875,1.58,25,-.1,.01276,4.413,8330.9926,0,0,0,.0127,.101,8470.6668,-2.24,-19,.1,.01097,1.203,22128.5152,-2.82,-13,0,.01088,2.545,15542.7543,-.66,6,0,.00835,.19,7214.0629,-2.18,-19,.1,.00734,4.855,24499.7477,.83,31,-.2,.00686,5.13,13799.8238,-4.34,-38,.2,.00631,.93,-486.3266,-3.73,-44,0,.00585,.699,9585.2953,1.5,25,0,.00566,4.073,8328.3391,1.5,25,0,.00566,.638,8329.0437,1.5,25,0,.00539,2.472,-1952.48,.6,7,0,.00509,2.88,-.7113,0,0,0,.00469,3.56,30457.2066,-1.3,12,0,.00387,.78,-.3523,0,0,0,.00378,1.84,22614.8418,.9,31,0,.00362,5.53,-695.8761,.6,7,0,.00317,2.8,16728.3705,1.2,28,0,.00303,6.07,157.7344,0,0,0,.003,2.53,33.757,-.3,-4,0,.00295,4.16,31571.8352,2.4,56,0,.00289,5.98,7211.7617,-.7,6,0,.00285,2.06,15540.4531,.9,31,0,.00283,2.65,2.6298,0,0,0,.00282,6.17,15545.0555,-2.2,-19,0,.00278,1.23,-39.8149,0,0,0,.00272,3.82,7216.3641,-3.7,-44,0,.0027,4.37,70.9877,-1.9,-22,0,.00256,5.81,13657.8484,-.6,6,0,.00244,5.64,-.2237,1.5,25,0,.0024,2.96,8311.7707,-2.2,-19,0,.00239,.87,-33.7814,.3,4,0,.00216,2.31,15.9995,-2.2,-19,0,.00186,3.46,5329.157,-2.1,-19,0,.00169,2.4,24357.772,4.6,75,0,.00161,5.8,8329.403,1.5,25,0,.00161,5.2,8327.98,1.5,25,0,.0016,4.26,23385.119,-2.9,-13,0,.00156,1.26,550.755,0,0,0,.00155,1.25,21500.213,-2.8,-13,0,.00152,.6,-16.921,-3.7,-44,0,.0015,2.71,-79.63,0,0,0,.0015,5.29,15.542,0,0,0,.00148,1.06,-2371.232,-3.7,-44,0,.00141,.77,8328.691,1.5,25,0,.00141,3.67,7143.075,-.3,0,0,.00138,5.45,25614.376,4.5,75,0,.00129,4.9,23871.446,.9,31,0,.00126,4.03,141.975,-3.8,-44,0,.00124,6.01,522.369,0,0,0,.0012,4.94,-10071.622,-5.2,-69,0,.00118,5.07,-15.419,-2.2,-19,0,.00107,3.49,23452.693,-3.4,-20,0,.00104,4.78,17495.234,-1.3,0,0,.00103,1.44,-18.049,-2.2,-19,0,.00102,5.63,15542.402,-.7,6,0,.00102,2.59,15543.107,-.7,6,0,.001,4.11,-6.559,-1.9,-22,0,97e-5,.08,15400.779,3.1,50,0,96e-5,5.84,31781.385,-1.9,5,0,94e-5,1.08,8328.363,0,0,0,94e-5,2.46,16799.358,-.7,6,0,94e-5,1.69,6376.211,2.2,32,0,93e-5,3.64,8329.02,3,50,0,93e-5,2.65,16655.082,4.6,75,0,9e-4,1.9,15056.428,-4.4,-38,0,89e-5,1.59,52.969,0,0,0,88e-5,2.02,-8257.704,-3.4,-47,0,88e-5,3.02,7213.711,-2.2,-19,0,87e-5,.5,7214.415,-2.2,-19,0,87e-5,.49,16659.684,1.5,25,0,82e-5,5.64,-4.931,1.5,25,0,79e-5,5.17,13171.522,-4.3,-38,0,76e-5,3.6,29828.905,-1.3,12,0,76e-5,4.08,24567.322,.3,24,0,76e-5,4.58,1884.906,-.1,0,0,73e-5,.33,31713.811,-1.4,12,0,73e-5,.93,32828.439,2.4,56,0,71e-5,5.91,38785.898,.2,37,0,69e-5,2.2,15613.742,-2.5,-16,0,66e-5,3.87,15.732,-2.5,-23,0,66e-5,.86,25823.926,.2,24,0,65e-5,2.52,8170.957,1.5,25,0,63e-5,.18,8322.132,-.3,0,0,6e-4,5.84,8326.062,1.5,25,0,6e-4,5.15,8331.321,1.5,25,0,6e-4,2.18,8486.426,1.5,25,0,58e-5,2.3,-1.731,-4,-44,0,58e-5,5.43,14357.138,-2,-16,0,57e-5,3.09,8294.91,2,29,0,57e-5,4.67,-8362.473,-1,-21,0,56e-5,4.15,16833.151,-1,0,0,54e-5,1.93,7056.329,-2,-19,0,54e-5,5.27,8315.574,-2,-19,0,52e-5,5.6,8311.418,-2,-19,0,52e-5,2.7,-77.552,0,0,0,51e-5,4.3,7230.984,2,25,0,5e-4,.4,-.508,0,0,0,49e-5,5.4,7211.433,-2,-19,0,49e-5,4.4,7216.693,-2,-19,0,49e-5,4.3,16864.631,0,24,0,49e-5,2.2,16869.234,-3,-26,0,47e-5,6.1,627.596,0,0,0,47e-5,5,12.619,1,7,0,45e-5,4.9,-8815.018,-5,-69,0,44e-5,1.6,62.133,-2,-19,0,42e-5,2.9,-13.118,-4,-44,0,42e-5,4.1,-119.445,0,0,0,41e-5,4.3,22756.817,-3,-13,0,41e-5,3.6,8288.877,2,25,0,4e-4,.5,6663.308,-2,-19,0,4e-4,1.1,8368.506,2,25,0,39e-5,4.1,6443.786,2,25,0,39e-5,3.1,16657.383,3,50,0,38e-5,.1,16657.031,3,50,0,38e-5,3,16657.735,3,50,0,38e-5,4.6,23942.433,-1,9,0,37e-5,4.3,15385.02,-1,6,0,37e-5,5,548.678,0,0,0,36e-5,1.8,7213.352,-2,-19,0,36e-5,1.7,7214.774,-2,-19,0,35e-5,1.1,7777.936,2,25,0,35e-5,1.6,-8.86,0,0,0,35e-5,4.4,23869.145,2,56,0,35e-5,2,6691.693,-2,-19,0,34e-5,1.3,-1185.616,-2,-22,0,34e-5,2.2,23873.747,-1,6,0,33e-5,2,-235.287,0,0,0,33e-5,3.1,17913.987,3,50,0,33e-5,1,8351.233,-2,-19,0],[.00487,4.6693,628.30196,-.027,0,-.01,.00228,2.6746,-2.3012,1.523,25,-.12,.0015,3.372,6585.76091,-2.16,-19,.1,.0012,5.728,14914.45233,-.64,6,0,.00108,3.969,7700.38947,1.55,25,-.1,8e-4,.742,8956.99338,1.5,25,-.1,254e-6,6.002,.3286,1.52,25,-.1,21e-5,.144,7842.3648,-2.21,-19,0,18e-5,2.5,16171.0562,-.7,6,0,13e-5,.44,8399.6791,-.4,3,0,126e-6,5.03,8326.3902,3,50,0,12e-5,5.77,14286.1504,-.6,6,0,118e-6,5.96,8330.9926,0,0,0,11e-5,1.8,23243.1438,.9,31,0,11e-5,3.42,5957.459,-2.1,-19,0,11e-5,4.63,1256.6039,-.1,0,0,99e-6,4.7,-.7113,0,0,0,7e-5,.04,16029.0809,3.1,50,0,7e-5,5.14,8328.3391,1.5,25,0,7e-5,5.85,8329.0437,1.5,25,0,6e-5,1.02,-1742.9305,-3.7,-44,0,6e-5,3.1,17285.6848,3,50,0,54e-6,5.69,-.352,0,0,0,43e-6,.52,15.542,0,0,0,41e-6,2.03,2.63,0,0,0,4e-5,.1,8470.667,-2.2,-19,0,4e-5,4.01,7072.088,1.6,25,0,36e-6,2.93,-8.86,-.3,0,0,3e-5,1.2,22128.515,-2.8,-13,0,3e-5,2.54,15542.754,-.7,6,0,27e-6,4.43,7211.762,-.7,6,0,26e-6,.51,15540.453,.9,31,0,26e-6,1.44,15545.055,-2.2,-19,0,25e-6,5.37,7216.364,-3.7,-44,0],[12e-6,1.041,-2.3012,1.52,25,-.1,17e-7,.31,-.711,0,0,0]];U.QI_KB=[1640650479938e-6,15.218425,1642476703182e-6,15.21874996,1683430515601e-6,15.218750011,1752157640664e-6,15.218749978,1807675003759e-6,15.218620279,1883627765182e-6,15.218612292,19073691281e-4,15.218449176,1936603140413e-6,15.218425,193914552418e-5,15.218466998,19471807983e-4,15.218524844,1964362041824e-6,15.218533526,1987372340971e-6,15.218513908,1999653819126e-6,15.218530782,2007445469786e-6,15.218535181,2021324917146e-6,15.218526248,2047257232342e-6,15.218519654,2070282898213e-6,15.218425,207320487285e-5,15.218515221,2080144500926e-6,15.218530782,2086703688963e-6,15.218523776,2110033182763e-6,15.218425,2111190300888e-6,15.218425,2113731271005e-6,15.218515671,2120670840263e-6,15.218425,2123973309063e-6,15.218425,2125068997336e-6,15.218477932,2136026312633e-6,15.218472436,2156099495538e-6,15.218425,2159021324663e-6,15.218425,2162308575254e-6,15.218461742,2178485706538e-6,15.218425,2178759662849e-6,15.218445786,21853340208e-4,15.218425,2187525481425e-6,15.218425,2188621191481e-6,15.218437494,232214776e-2];U.QB=B.decode("FrcFs22AFsckF2tsDtFqEtF1posFdFgiFseFtmelpsEfhkF2anmelpFlF1ikrotcnEqEq2FfqmcDsrFor22FgFrcgDscFs22FgEeFtE2sfFs22sCoEsaF2tsD1FpeE2eFsssEciFsFnmelpFcFhkF2tcnEqEpFgkrotcnEqrEtFermcDsrE222FgBmcmr22DaEfnaF222sD1FpeForeF2tssEfiFpEoeFssD1iFstEqFppDgFstcnEqEpFg11FscnEqrAoAF2ClAEsDmDtCtBaDlAFbAEpAAAAAD2FgBiBqoBbnBaBoAAAAAAAEgDqAdBqAFrBaBoACdAAf1AACgAAAeBbCamDgEifAE2AABa1C1BgFdiAAACoCeE1ADiEifDaAEqAAFe1AcFbcAAAAAF1iFaAAACpACmFmAAAAAAAACrDaAAADG0");U.SHUO_KB=[1457698231017e-6,29.53067166,1546082512234e-6,29.53085106,16406407353e-4,29.5306,1642472151543e-6,29.53085439,16834305093e-4,29.53086148,1752148041079e-6,29.53085097,1807665420323e-6,29.53059851,18836181141e-4,29.5306,19073607047e-4,29.5306,19365962249e-4,29.5306,19391356753e-4,29.5306,1947168];U.SB=B.decode("EqoFscDcrFpmEsF2DfFideFelFpFfFfFiaipqti1ksttikptikqckstekqttgkqttgkqteksttikptikq2fjstgjqttjkqttgkqtekstfkptikq2tijstgjiFkirFsAeACoFsiDaDiADc1AFbBfgdfikijFifegF1FhaikgFag1E2btaieeibggiffdeigFfqDfaiBkF1kEaikhkigeidhhdiegcFfakF1ggkidbiaedksaFffckekidhhdhdikcikiakicjF1deedFhFccgicdekgiFbiaikcfi1kbFibefgEgFdcFkFeFkdcfkF1kfkcickEiFkDacFiEfbiaejcFfffkhkdgkaiei1ehigikhdFikfckF1dhhdikcfgjikhfjicjicgiehdikcikggcifgiejF1jkieFhegikggcikFegiegkfjebhigikggcikdgkaFkijcfkcikfkcifikiggkaeeigefkcdfcfkhkdgkegieidhijcFfakhfgeidieidiegikhfkfckfcjbdehdikggikgkfkicjicjF1dbidikFiggcifgiejkiegkigcdiegfggcikdbgfgefjF1kfegikggcikdgFkeeijcfkcikfkekcikdgkabhkFikaffcfkhkdgkegbiaekfkiakicjhfgqdq2fkiakgkfkhfkfcjiekgFebicggbedF1jikejbbbiakgbgkacgiejkijjgigfiakggfggcibFifjefjF1kfekdgjcibFeFkijcfkfhkfkeaieigekgbhkfikidfcjeaibgekgdkiffiffkiakF1jhbakgdki1dj1ikfkicjicjieeFkgdkicggkighdF1jfgkgfgbdkicggfggkidFkiekgijkeigfiskiggfaidheigF1jekijcikickiggkidhhdbgcfkFikikhkigeidieFikggikhkffaffijhidhhakgdkhkijF1kiakF1kfheakgdkifiggkigicjiejkieedikgdfcggkigieeiejfgkgkigbgikicggkiaideeijkefjeijikhkiggkiaidheigcikaikffikijgkiahi1hhdikgjfifaakekighie1hiaikggikhkffakicjhiahaikggikhkijF1kfejfeFhidikggiffiggkigicjiekgieeigikggiffiggkidheigkgfjkeigiegikifiggkidhedeijcfkFikikhkiggkidhh1ehigcikaffkhkiggkidhh1hhigikekfiFkFikcidhh1hitcikggikhkfkicjicghiediaikggikhkijbjfejfeFhaikggifikiggkigiejkikgkgieeigikggiffiggkigieeigekijcijikggifikiggkideedeijkefkfckikhkiggkidhh1ehijcikaffkhkiggkidhh1hhigikhkikFikfckcidhh1hiaikgjikhfjicjicgiehdikcikggifikigiejfejkieFhegikggifikiggfghigkfjeijkhigikggifikiggkigieeijcijcikfksikifikiggkidehdeijcfdckikhkiggkhghh1ehijikifffffkhsFngErD1pAfBoDd1BlEtFqA2AqoEpDqElAEsEeB2BmADlDkqBtC1FnEpDqnEmFsFsAFnllBbFmDsDiCtDmAB2BmtCgpEplCpAEiBiEoFqFtEqsDcCnFtADnFlEgdkEgmEtEsCtDmADqFtAFrAtEcCqAE1BoFqC1F1DrFtBmFtAC2ACnFaoCgADcADcCcFfoFtDlAFgmFqBq2bpEoAEmkqnEeCtAE1bAEqgDfFfCrgEcBrACfAAABqAAB1AAClEnFeCtCgAADqDoBmtAAACbFiAAADsEtBqAB2FsDqpFqEmFsCeDtFlCeDtoEpClEqAAFrAFoCgFmFsFqEnAEcCqFeCtFtEnAEeFtAAEkFnErAABbFkADnAAeCtFeAfBoAEpFtAABtFqAApDcCGJ");const s0=class{static fromYear(u){let n;return!s0._CACHE_YEAR||s0._CACHE_YEAR.getYear()!=u?(n=new s0(u),s0._CACHE_YEAR=n):n=s0._CACHE_YEAR,n}constructor(u){this._year=u,this._months=[],this._jieQiJulianDays=[];const n=u-4;let t=n%10,e=n%12;t<0&&(t+=10),e<0&&(e+=12),this._ganIndex=t,this._zhiIndex=e,this.compute()}compute(){const u=[],n=[],t=[],e=[];let i,a;const F=this._year;let r=Math.floor((F-2e3)*365.2422+180),g=Math.floor((r-355+183)/365.2422)*365.2422+355;for(U.calcQi(g)>r&&(g-=365.2422),i=0;i<26;i++)u.push(U.calcQi(g+15.2184*i));for(i=0,a=s.JIE_QI_IN_USE.length;i<a;i++)i===0?r=U.qiAccurate2(u[0]-15.2184):i<=26?r=U.qiAccurate2(u[i-1]):r=U.qiAccurate2(u[25]+15.2184*(i-26)),this._jieQiJulianDays.push(r+p.J2000);for(g=U.calcShuo(u[0]),g>u[0]&&(g-=29.53),i=0;i<16;i++)n.push(U.calcShuo(g+29.5306*i));for(i=0;i<15;i++)t.push(Math.floor(n[i+1]-n[i])),e.push(i);const E=F-1;let h=16;if(s0._LEAP_11.indexOf(F)>-1)h=13;else if(s0._LEAP_12.indexOf(F)>-1)h=14;else if(n[13]<=u[24]){for(i=1;n[i+1]>u[2*i]&&i<13;)i++;h=i}for(a=h;a<15;a++)e[a]-=1;const D=[11,12,1,2,3,4,5,6,7,8,9,10];let l=-1,c=-1,x=E;for(i=0;i<15;i++){const y=n[i]+p.J2000,f=e[i];let _=D[f%12];1724360<=y&&y<1729794||1807724<=y&&y<1808699?_=D[(f+1)%12]:(y==1729794||y==1808699)&&(_=12),l==-1&&(l=_,c=_),_<l&&(x+=1,c=1),l=_,i==h?_=-_:(y==1729794||y==1808699)&&(_=-11),this._months.push(new o2(x,_,t[i],n[i]+p.J2000,c)),c++}}getYear(){return this._year}getGanIndex(){return this._ganIndex}getZhiIndex(){return this._zhiIndex}getGan(){return s.GAN[this._ganIndex+1]}getZhi(){return s.ZHI[this._zhiIndex+1]}getGanZhi(){return this.getGan()+this.getZhi()}getJieQiJulianDays(){return this._jieQiJulianDays}getDayCount(){let u=0;for(let n=0,t=this._months.length;n<t;n++){const e=this._months[n];e.getYear()==this._year&&(u+=e.getDayCount())}return u}getMonths(){return this._months}getMonthsInYear(){const u=[];for(let n=0,t=this._months.length;n<t;n++){const e=this._months[n];e.getYear()==this._year&&u.push(e)}return u}getMonth(u){for(let n=0,t=this._months.length;n<t;n++){const e=this._months[n];if(e.getYear()==this._year&&e.getMonth()==u)return e}return null}getLeapMonth(){for(let u=0,n=this._months.length;u<n;u++){const t=this._months[u];if(t.getYear()==this._year&&t.isLeap())return Math.abs(t.getMonth())}return 0}toString(){return`${this.getYear()}`}toFullString(){return`${this.getYear()}年`}_getZaoByGan(u,n){const t=this.getMonth(1);if(t==null)return"";let e=u-p.fromJulianDay(t.getFirstJulianDay()).getLunar().getDayGanIndex();return e<0&&(e+=10),n.replace("几",s.NUMBER[e+1])}_getZaoByZhi(u,n){const t=this.getMonth(1);if(t==null)return"";let e=u-p.fromJulianDay(t.getFirstJulianDay()).getLunar().getDayZhiIndex();return e<0&&(e+=12),n.replace("几",s.NUMBER[e+1])}getTouLiang(){return this._getZaoByZhi(0,"几鼠偷粮")}getCaoZi(){return this._getZaoByZhi(0,"草子几分")}getGengTian(){return this._getZaoByZhi(1,"几牛耕田")}getHuaShou(){return this._getZaoByZhi(3,"花收几分")}getZhiShui(){return this._getZaoByZhi(4,"几龙治水")}getTuoGu(){return this._getZaoByZhi(6,"几马驮谷")}getQiangMi(){return this._getZaoByZhi(9,"几鸡抢米")}getKanCan(){return this._getZaoByZhi(9,"几姑看蚕")}getGongZhu(){return this._getZaoByZhi(11,"几屠共猪")}getJiaTian(){return this._getZaoByGan(0,"甲田几分")}getFenBing(){return this._getZaoByGan(2,"几人分饼")}getDeJin(){return this._getZaoByGan(7,"几日得金")}getRenBing(){return this._getZaoByGan(2,this._getZaoByZhi(2,"几人几丙"))}getRenChu(){return this._getZaoByGan(3,this._getZaoByZhi(2,"几人几锄"))}getYuan(){return s0.YUAN[Math.floor((this._year+2696)/60)%3]+"元"}getYun(){return s0.YUN[Math.floor((this._year+2696)/20)%9]+"运"}getNineStar(){const u=s.getJiaZiIndex(this.getGanZhi())+1;let t=(62+Math.floor(this._year+2696)/60%3*3-u)%9;return t==0&&(t=9),K.fromIndex(t-1)}getPositionXi(){return s.POSITION_XI[this._ganIndex+1]}getPositionXiDesc(){return s.POSITION_DESC[this.getPositionXi()]}getPositionYangGui(){return s.POSITION_YANG_GUI[this._ganIndex+1]}getPositionYangGuiDesc(){return s.POSITION_DESC[this.getPositionYangGui()]}getPositionYinGui(){return s.POSITION_YIN_GUI[this._ganIndex+1]}getPositionYinGuiDesc(){return s.POSITION_DESC[this.getPositionYinGui()]}getPositionFu(u=2){return(u==1?s.POSITION_FU:s.POSITION_FU_2)[this._ganIndex+1]}getPositionFuDesc(u=2){return s.POSITION_DESC[this.getPositionFu(u)]}getPositionCai(){return s.POSITION_CAI[this._ganIndex+1]}getPositionCaiDesc(){return s.POSITION_DESC[this.getPositionCai()]}getPositionTaiSui(){return s.POSITION_TAI_SUI_YEAR[this._zhiIndex]}getPositionTaiSuiDesc(){return s.POSITION_DESC[this.getPositionTaiSui()]}next(u){return s0.fromYear(this._year+u)}};let n0=s0;n0.YUAN=["下","上","中"];n0.YUN=["七","八","九","一","二","三","四","五","六"];n0._LEAP_11=[75,94,170,265,322,398,469,553,583,610,678,735,754,773,849,887,936,1050,1069,1126,1145,1164,1183,1259,1278,1308,1373,1403,1441,1460,1498,1555,1593,1612,1631,1642,2033,2128,2147,2242,2614,2728,2910,3062,3244,3339,3616,3711,3730,3825,4007,4159,4197,4322,4341,4379,4417,4531,4599,4694,4713,4789,4808,4971,5085,5104,5161,5180,5199,5294,5305,5476,5677,5696,5772,5791,5848,5886,6049,6068,6144,6163,6258,6402,6440,6497,6516,6630,6641,6660,6679,6736,6774,6850,6869,6899,6918,6994,7013,7032,7051,7070,7089,7108,7127,7146,7222,7271,7290,7309,7366,7385,7404,7442,7461,7480,7491,7499,7594,7624,7643,7662,7681,7719,7738,7814,7863,7882,7901,7939,7958,7977,7996,8034,8053,8072,8091,8121,8159,8186,8216,8235,8254,8273,8311,8330,8341,8349,8368,8444,8463,8474,8493,8531,8569,8588,8626,8664,8683,8694,8702,8713,8721,8751,8789,8808,8816,8827,8846,8884,8903,8922,8941,8971,9036,9066,9085,9104,9123,9142,9161,9180,9199,9218,9256,9294,9313,9324,9343,9362,9381,9419,9438,9476,9514,9533,9544,9552,9563,9571,9582,9601,9639,9658,9666,9677,9696,9734,9753,9772,9791,9802,9821,9886,9897,9916,9935,9954,9973,9992];n0._LEAP_12=[37,56,113,132,151,189,208,227,246,284,303,341,360,379,417,436,458,477,496,515,534,572,591,629,648,667,697,716,792,811,830,868,906,925,944,963,982,1001,1020,1039,1058,1088,1153,1202,1221,1240,1297,1335,1392,1411,1422,1430,1517,1525,1536,1574,3358,3472,3806,3988,4751,4941,5066,5123,5275,5343,5438,5457,5495,5533,5552,5715,5810,5829,5905,5924,6421,6535,6793,6812,6888,6907,7002,7184,7260,7279,7374,7556,7746,7757,7776,7833,7852,7871,7966,8015,8110,8129,8148,8224,8243,8338,8406,8425,8482,8501,8520,8558,8596,8607,8615,8645,8740,8778,8835,8865,8930,8960,8979,8998,9017,9055,9074,9093,9112,9150,9188,9237,9275,9332,9351,9370,9408,9427,9446,9457,9465,9495,9560,9590,9628,9647,9685,9715,9742,9780,9810,9818,9829,9848,9867,9905,9924,9943,9962,1e4];n0._CACHE_YEAR=null;class L0{static fromYmdHms(n,t,e,i,a,F){return new L0(n,t,e,i,a,F)}constructor(n,t,e,i,a,F){this._lunar=Z.fromYmdHms(n,t,e,i,a,F),this._zhiIndex=s.getTimeZhiIndex([(i<10?"0":"")+i,(a<10?"0":"")+a].join(":")),this._ganIndex=(this._lunar.getDayGanIndexExact()%5*2+this._zhiIndex)%10}getGanIndex(){return this._ganIndex}getZhiIndex(){return this._zhiIndex}getGan(){return s.GAN[this._ganIndex+1]}getZhi(){return s.ZHI[this._zhiIndex+1]}getGanZhi(){return this.getGan()+this.getZhi()}getShengXiao(){return s.SHENGXIAO[this._zhiIndex+1]}getPositionXi(){return s.POSITION_XI[this._ganIndex+1]}getPositionXiDesc(){return s.POSITION_DESC[this.getPositionXi()]}getPositionYangGui(){return s.POSITION_YANG_GUI[this._ganIndex+1]}getPositionYangGuiDesc(){return s.POSITION_DESC[this.getPositionYangGui()]}getPositionYinGui(){return s.POSITION_YIN_GUI[this._ganIndex+1]}getPositionYinGuiDesc(){return s.POSITION_DESC[this.getPositionYinGui()]}getPositionFu(n=2){return(n===1?s.POSITION_FU:s.POSITION_FU_2)[this._ganIndex+1]}getPositionFuDesc(n=2){return s.POSITION_DESC[this.getPositionFu(n)]}getPositionCai(){return s.POSITION_CAI[this._ganIndex+1]}getPositionCaiDesc(){return s.POSITION_DESC[this.getPositionCai()]}getNaYin(){return s.NAYIN[this.getGanZhi()]}getTianShen(){return s.TIAN_SHEN[(this._zhiIndex+s.ZHI_TIAN_SHEN_OFFSET[this._lunar.getDayZhiExact()])%12+1]}getTianShenType(){return s.TIAN_SHEN_TYPE[this.getTianShen()]}getTianShenLuck(){return s.TIAN_SHEN_TYPE_LUCK[this.getTianShenType()]}getChong(){return s.CHONG[this._zhiIndex]}getSha(){return s.SHA[this.getZhi()]}getChongShengXiao(){const n=this.getChong();for(let t=0,e=s.ZHI.length;t<e;t++)if(s.ZHI[t]===n)return s.SHENGXIAO[t];return""}getChongDesc(){return"("+this.getChongGan()+this.getChong()+")"+this.getChongShengXiao()}getChongGan(){return s.CHONG_GAN[this._ganIndex]}getChongGanTie(){return s.CHONG_GAN_TIE[this._ganIndex]}getYi(){return s.getTimeYi(this._lunar.getDayInGanZhiExact(),this.getGanZhi())}getJi(){return s.getTimeJi(this._lunar.getDayInGanZhiExact(),this.getGanZhi())}getNineStar(){const n=this._lunar.getSolar().toYmd(),t=this._lunar.getJieQiTable();let e=!1;n>=t[d.getMessage("jq.dongZhi")].toYmd()&&n<t[d.getMessage("jq.xiaZhi")].toYmd()&&(e=!0);const a=(e?[0,3,6]:[8,5,2])[this._lunar.getDayZhiIndex()%3],F=e?a+this._zhiIndex:a+9-this._zhiIndex;return K.fromIndex(F%9)}getXun(){return s.getXun(this.getGanZhi())}getXunKong(){return s.getXunKong(this.getGanZhi())}getMinHm(){let n=this._lunar.getHour();return n<1?"00:00":n>22?"23:00":(n%2===0&&(n-=1),(n<10?"0":"")+n+":00")}getMaxHm(){let n=this._lunar.getHour();return n<1?"00:59":n>22?"23:59":(n%2!==0&&(n+=1),(n<10?"0":"")+n+":59")}toString(){return this.getGanZhi()}}const I0=class{constructor(u){this._lunar=u}static fromLunar(u){return new I0(u)}static fromYmdHms(u,n,t,e,i,a){return I0.fromLunar(Z.fromYmdHms(u+I0.DEAD_YEAR-1,n,t,e,i,a))}static fromYmd(u,n,t){return I0.fromYmdHms(u,n,t,0,0,0)}getLunar(){return this._lunar}getYear(){const u=this._lunar.getSolar().getYear();let n=u-I0.DEAD_YEAR;return u===this._lunar.getYear()&&n++,n}getMonth(){return this._lunar.getMonth()}getDay(){return this._lunar.getDay()}getYearInChinese(){const u=this.getYear()+"";let n="";const t=48;for(let e=0,i=u.length;e<i;e++)n+=s.NUMBER[u.charCodeAt(e)-t];return n}getMonthInChinese(){return this._lunar.getMonthInChinese()}getDayInChinese(){return this._lunar.getDayInChinese()}getFestivals(){const u=b.FESTIVAL[this.getMonth()+"-"+this.getDay()];return u||[]}getOtherFestivals(){const u=[],n=b.OTHER_FESTIVAL[this.getMonth()+"-"+this.getDay()];return n&&n.forEach(t=>{u.push(t)}),u}isMonthZhai(){const u=this.getMonth();return u===1||u===5||u===9}isDayYangGong(){const u=this.getFestivals();for(let n=0,t=u.length;n<t;n++)if(u[n].getName()==="杨公忌")return!0;return!1}isDayZhaiShuoWang(){const u=this.getDay();return u===1||u===15}isDayZhaiSix(){const u=this.getDay();if(u===8||u===14||u===15||u===23||u===29||u===30)return!0;if(u===28){const n=o2.fromYm(this._lunar.getYear(),this.getMonth());if(n!=null&&n.getDayCount()!==30)return!0}return!1}isDayZhaiTen(){const u=this.getDay();return u===1||u===8||u===14||u===15||u===18||u===23||u===24||u===28||u===29||u===30}isDayZhaiGuanYin(){const u=this.getMonth()+"-"+this.getDay();for(let n=0,t=b.DAY_ZHAI_GUAN_YIN.length;n<t;n++)if(u===b.DAY_ZHAI_GUAN_YIN[n])return!0;return!1}getXiu(){return b.getXiu(this.getMonth(),this.getDay())}getXiuLuck(){return s.XIU_LUCK[this.getXiu()]}getXiuSong(){return s.XIU_SONG[this.getXiu()]}getZheng(){return s.ZHENG[this.getXiu()]}getAnimal(){return s.ANIMAL[this.getXiu()]}getGong(){return s.GONG[this.getXiu()]}getShou(){return s.SHOU[this.getGong()]}toString(){return this.getYearInChinese()+"年"+this.getMonthInChinese()+"月"+this.getDayInChinese()}toFullString(){let u=this.toString();const n=this.getFestivals();for(let t=0,e=n.length;t<e;t++)u+=" ("+n[t]+")";return u}};let E1=I0;E1.DEAD_YEAR=-543;const m0=class{constructor(u){this._lunar=u}static fromLunar(u){return new m0(u)}static fromYmdHms(u,n,t,e,i,a){return m0.fromLunar(Z.fromYmdHms(u+m0.BIRTH_YEAR,n,t,e,i,a))}static fromYmd(u,n,t){return m0.fromYmdHms(u,n,t,0,0,0)}getLunar(){return this._lunar}getYear(){return this._lunar.getYear()-m0.BIRTH_YEAR}getMonth(){return this._lunar.getMonth()}getDay(){return this._lunar.getDay()}getYearInChinese(){const u=this.getYear()+"";let n="";const t=48;for(let e=0,i=u.length;e<i;e++)n+=s.NUMBER[u.charCodeAt(e)-t];return n}getMonthInChinese(){return this._lunar.getMonthInChinese()}getDayInChinese(){return this._lunar.getDayInChinese()}getFestivals(){const u=[],n=v.FESTIVAL[this.getMonth()+"-"+this.getDay()];n&&n.forEach(i=>{u.push(i)});const t=this._lunar.getJieQi();d.getMessage("jq.dongZhi")===t?u.push(new A("元始天尊圣诞")):d.getMessage("jq.xiaZhi")===t&&u.push(new A("灵宝天尊圣诞"));let e=v.BA_JIE[t];return e&&u.push(new A(e)),e=v.BA_HUI[this._lunar.getDayInGanZhi()],e&&u.push(new A(e)),u}_isDayIn(u){const n=this.getMonth()+"-"+this.getDay();for(let t=0,e=u.length;t<e;t++)if(n===u[t])return!0;return!1}isDaySanHui(){return this._isDayIn(v.SAN_HUI)}isDaySanYuan(){return this._isDayIn(v.SAN_YUAN)}isDayBaJie(){return!!v.BA_JIE[this._lunar.getJieQi()]}isDayWuLa(){return this._isDayIn(v.WU_LA)}isDayBaHui(){return!!v.BA_HUI[this._lunar.getDayInGanZhi()]}isDayMingWu(){return d.getMessage("tg.wu")===this._lunar.getDayGan()}isDayAnWu(){return this._lunar.getDayZhi()===v.AN_WU[Math.abs(this.getMonth())-1]}isDayWu(){return this.isDayMingWu()||this.isDayAnWu()}isDayTianShe(){let u=!1;const n=this._lunar.getMonthZhi(),t=this._lunar.getDayInGanZhi();return[d.getMessage("dz.yin"),d.getMessage("dz.mao"),d.getMessage("dz.chen")].join(",").indexOf(n)>-1?d.getMessage("jz.wuYin")===t&&(u=!0):[d.getMessage("dz.si"),d.getMessage("dz.wu"),d.getMessage("dz.wei")].join(",").indexOf(n)>-1?d.getMessage("jz.jiaWu")===t&&(u=!0):[d.getMessage("dz.shen"),d.getMessage("dz.you"),d.getMessage("dz.xu")].join(",").indexOf(n)>-1?d.getMessage("jz.wuShen")===t&&(u=!0):[d.getMessage("dz.hai"),d.getMessage("dz.zi"),d.getMessage("dz.chou")].join(",").indexOf(n)>-1&&d.getMessage("jz.jiaZi")===t&&(u=!0),u}toString(){return this.getYearInChinese()+"年"+this.getMonthInChinese()+"月"+this.getDayInChinese()}toFullString(){return"道歷"+this.getYearInChinese()+"年，天運"+this._lunar.getYearInGanZhi()+"年，"+this._lunar.getMonthInGanZhi()+"月，"+this._lunar.getDayInGanZhi()+"日。"+this.getMonthInChinese()+"月"+this.getDayInChinese()+"日，"+this._lunar.getTimeZhi()+"時。"}};let h1=m0;h1.BIRTH_YEAR=-2697;class Z{static fromYmd(n,t,e){return Z.fromYmdHms(n,t,e,0,0,0)}static fromYmdHms(n,t,e,i,a,F){let r=n0.fromYear(n);const g=r.getMonth(t);if(g==null)throw new Error(`wrong lunar year ${n} month ${t}`);if(e<1)throw new Error("lunar day must bigger than 0");const E=g.getDayCount();if(e>E)throw new Error(`only ${E} days in lunar year ${n} month ${t}`);const h=p.fromJulianDay(g.getFirstJulianDay()+e-1),D=p.fromYmdHms(h.getYear(),h.getMonth(),h.getDay(),i,a,F);return h.getYear()!==n&&(r=n0.fromYear(h.getYear())),new Z(n,t,e,i,a,F,D,r)}static fromSolar(n){let t=0,e=0,i=0;const a=n0.fromYear(n.getYear()),F=a.getMonths();for(let r=0,g=F.length;r<g;r++){const E=F[r],h=n.subtract(p.fromJulianDay(E.getFirstJulianDay()));if(h<E.getDayCount()){t=E.getYear(),e=E.getMonth(),i=h+1;break}}return new Z(t,e,i,n.getHour(),n.getMinute(),n.getSecond(),n,a)}static fromDate(n){return Z.fromSolar(p.fromDate(n))}static _computeJieQi(n,t){const e=t.getJieQiJulianDays();for(let i=0,a=s.JIE_QI_IN_USE.length;i<a;i++){const F=s.JIE_QI_IN_USE[i];n.jieQiList.push(F),n.jieQi[F]=p.fromJulianDay(e[i])}}static _computeYear(n,t,e){const i=e-4;let a=i%10,F=i%12;a<0&&(a+=10),F<0&&(F+=12);let r=a,g=F,E=a,h=F;const D=t.getYear(),l=t.toYmd(),c=t.toYmdHms();let x=n.jieQi[d.getMessage("jq.liChun")];x.getYear()!=D&&(x=n.jieQi.LI_CHUN);const y=x.toYmd(),f=x.toYmdHms();e===D?(l<y&&(r--,g--),c<f&&(E--,h--)):e<D&&(l>=y&&(r++,g++),c>=f&&(E++,h++)),n.yearGanIndex=a,n.yearZhiIndex=F,n.yearGanIndexByLiChun=(r<0?r+10:r)%10,n.yearZhiIndexByLiChun=(g<0?g+12:g)%12,n.yearGanIndexExact=(E<0?E+10:E)%10,n.yearZhiIndexExact=(h<0?h+12:h)%12}static _computeMonth(n,t){let e=null,i=null;const a=t.toYmd(),F=t.toYmdHms(),r=s.JIE_QI_IN_USE.length;let g=-3;for(let h=0;h<r;h+=2){i=n.jieQi[s.JIE_QI_IN_USE[h]];const D=e==null?a:e.toYmd();if(a>=D&&a<i.toYmd())break;e=i,g++}let E=((n.yearGanIndexByLiChun+(g<0?1:0))%5+1)*2%10;n.monthGanIndex=((g<0?g+10:g)+E)%10,n.monthZhiIndex=((g<0?g+12:g)+s.BASE_MONTH_ZHI_INDEX)%12,e=null,g=-3;for(let h=0;h<r;h+=2){i=n.jieQi[s.JIE_QI_IN_USE[h]];const D=e==null?F:e.toYmdHms();if(F>=D&&F<i.toYmdHms())break;e=i,g++}E=((n.yearGanIndexExact+(g<0?1:0))%5+1)*2%10,n.monthGanIndexExact=((g<0?g+10:g)+E)%10,n.monthZhiIndexExact=((g<0?g+12:g)+s.BASE_MONTH_ZHI_INDEX)%12}static _computeDay(n,t,e,i){const a=p.fromYmdHms(t.getYear(),t.getMonth(),t.getDay(),12,0,0),F=Math.floor(a.getJulianDay())-11,r=F%10,g=F%12;n.dayGanIndex=r,n.dayZhiIndex=g;let E=r,h=g;n.dayGanIndexExact2=E,n.dayZhiIndexExact2=h;const D=(e<10?"0":"")+e+":"+(i<10?"0":"")+i;D>="23:00"&&D<="23:59"&&(E++,E>=10&&(E-=10),h++,h>=12&&(h-=12)),n.dayGanIndexExact=E,n.dayZhiIndexExact=h}static _computeTime(n,t,e){const i=s.getTimeZhiIndex((t<10?"0":"")+t+":"+(e<10?"0":"")+e);n.timeZhiIndex=i,n.timeGanIndex=(n.dayGanIndexExact%5*2+i)%10}static _computeWeek(n,t){n.weekIndex=t.getWeek()}static _compute(n,t,e,i,a){const F={timeGanIndex:0,timeZhiIndex:0,dayGanIndex:0,dayZhiIndex:0,dayGanIndexExact:0,dayZhiIndexExact:0,dayGanIndexExact2:0,dayZhiIndexExact2:0,monthGanIndex:0,monthZhiIndex:0,monthGanIndexExact:0,monthZhiIndexExact:0,yearGanIndex:0,yearZhiIndex:0,yearGanIndexByLiChun:0,yearZhiIndexByLiChun:0,yearGanIndexExact:0,yearZhiIndexExact:0,weekIndex:0,jieQi:{},jieQiList:[]};return Z._computeJieQi(F,a),Z._computeYear(F,i,n),Z._computeMonth(F,i),Z._computeDay(F,i,t,e),Z._computeTime(F,t,e),Z._computeWeek(F,i),F}constructor(n,t,e,i,a,F,r,g){const E=Z._compute(n,i,a,r,g);this._year=n,this._month=t,this._day=e,this._hour=i,this._minute=a,this._second=F,this._timeGanIndex=E.timeGanIndex,this._timeZhiIndex=E.timeZhiIndex,this._dayGanIndex=E.dayGanIndex,this._dayZhiIndex=E.dayZhiIndex,this._dayGanIndexExact=E.dayGanIndexExact,this._dayZhiIndexExact=E.dayZhiIndexExact,this._dayGanIndexExact2=E.dayGanIndexExact2,this._dayZhiIndexExact2=E.dayZhiIndexExact2,this._monthGanIndex=E.monthGanIndex,this._monthZhiIndex=E.monthZhiIndex,this._monthGanIndexExact=E.monthGanIndexExact,this._monthZhiIndexExact=E.monthZhiIndexExact,this._yearGanIndex=E.yearGanIndex,this._yearZhiIndex=E.yearZhiIndex,this._yearGanIndexByLiChun=E.yearGanIndexByLiChun,this._yearZhiIndexByLiChun=E.yearZhiIndexByLiChun,this._yearGanIndexExact=E.yearGanIndexExact,this._yearZhiIndexExact=E.yearZhiIndexExact,this._weekIndex=E.weekIndex,this._jieQi=E.jieQi,this._jieQiList=E.jieQiList,this._solar=r,this._eightChar=new b2(this),this._lang=d.getLanguage()}getYear(){return this._year}getMonth(){return this._month}getDay(){return this._day}getHour(){return this._hour}getMinute(){return this._minute}getSecond(){return this._second}getTimeGanIndex(){return this._timeGanIndex}getTimeZhiIndex(){return this._timeZhiIndex}getDayGanIndex(){return this._dayGanIndex}getDayZhiIndex(){return this._dayZhiIndex}getMonthGanIndex(){return this._monthGanIndex}getMonthZhiIndex(){return this._monthZhiIndex}getYearGanIndex(){return this._yearGanIndex}getYearZhiIndex(){return this._yearZhiIndex}getYearGanIndexByLiChun(){return this._yearGanIndexByLiChun}getYearZhiIndexByLiChun(){return this._yearZhiIndexByLiChun}getDayGanIndexExact(){return this._dayGanIndexExact}getDayZhiIndexExact(){return this._dayZhiIndexExact}getDayGanIndexExact2(){return this._dayGanIndexExact2}getDayZhiIndexExact2(){return this._dayZhiIndexExact2}getMonthGanIndexExact(){return this._monthGanIndexExact}getMonthZhiIndexExact(){return this._monthZhiIndexExact}getYearGanIndexExact(){return this._yearGanIndexExact}getYearZhiIndexExact(){return this._yearZhiIndexExact}getGan(){return this.getYearGan()}getZhi(){return this.getYearZhi()}getYearGan(){return s.GAN[this._yearGanIndex+1]}getYearGanByLiChun(){return s.GAN[this._yearGanIndexByLiChun+1]}getYearGanExact(){return s.GAN[this._yearGanIndexExact+1]}getYearZhi(){return s.ZHI[this._yearZhiIndex+1]}getYearZhiByLiChun(){return s.ZHI[this._yearZhiIndexByLiChun+1]}getYearZhiExact(){return s.ZHI[this._yearZhiIndexExact+1]}getYearInGanZhi(){return this.getYearGan()+this.getYearZhi()}getYearInGanZhiByLiChun(){return this.getYearGanByLiChun()+this.getYearZhiByLiChun()}getYearInGanZhiExact(){return this.getYearGanExact()+this.getYearZhiExact()}getMonthGan(){return s.GAN[this._monthGanIndex+1]}getMonthGanExact(){return s.GAN[this._monthGanIndexExact+1]}getMonthZhi(){return s.ZHI[this._monthZhiIndex+1]}getMonthZhiExact(){return s.ZHI[this._monthZhiIndexExact+1]}getMonthInGanZhi(){return this.getMonthGan()+this.getMonthZhi()}getMonthInGanZhiExact(){return this.getMonthGanExact()+this.getMonthZhiExact()}getDayGan(){return s.GAN[this._dayGanIndex+1]}getDayGanExact(){return s.GAN[this._dayGanIndexExact+1]}getDayGanExact2(){return s.GAN[this._dayGanIndexExact2+1]}getDayZhi(){return s.ZHI[this._dayZhiIndex+1]}getDayZhiExact(){return s.ZHI[this._dayZhiIndexExact+1]}getDayZhiExact2(){return s.ZHI[this._dayZhiIndexExact2+1]}getDayInGanZhi(){return this.getDayGan()+this.getDayZhi()}getDayInGanZhiExact(){return this.getDayGanExact()+this.getDayZhiExact()}getDayInGanZhiExact2(){return this.getDayGanExact2()+this.getDayZhiExact2()}getTimeGan(){return s.GAN[this._timeGanIndex+1]}getTimeZhi(){return s.ZHI[this._timeZhiIndex+1]}getTimeInGanZhi(){return this.getTimeGan()+this.getTimeZhi()}getShengxiao(){return this.getYearShengXiao()}getYearShengXiao(){return s.SHENGXIAO[this._yearZhiIndex+1]}getYearShengXiaoByLiChun(){return s.SHENGXIAO[this._yearZhiIndexByLiChun+1]}getYearShengXiaoExact(){return s.SHENGXIAO[this._yearZhiIndexExact+1]}getMonthShengXiao(){return s.SHENGXIAO[this._monthZhiIndex+1]}getMonthShengXiaoExact(){return s.SHENGXIAO[this._monthZhiIndexExact+1]}getDayShengXiao(){return s.SHENGXIAO[this._dayZhiIndex+1]}getTimeShengXiao(){return s.SHENGXIAO[this._timeZhiIndex+1]}getYearInChinese(){const n=this._year+"";let t="";const e=48;for(let i=0,a=n.length;i<a;i++){const F=n.charCodeAt(i);t+=s.NUMBER[F-e]}return t}getMonthInChinese(){return(this._month<0?"闰":"")+s.MONTH[Math.abs(this._month)]}getDayInChinese(){return s.DAY[this._day]}getPengZuGan(){return s.PENGZU_GAN[this._dayGanIndex+1]}getPengZuZhi(){return s.PENGZU_ZHI[this._dayZhiIndex+1]}getPositionXi(){return this.getDayPositionXi()}getPositionXiDesc(){return this.getDayPositionXiDesc()}getPositionYangGui(){return this.getDayPositionYangGui()}getPositionYangGuiDesc(){return this.getDayPositionYangGuiDesc()}getPositionYinGui(){return this.getDayPositionYinGui()}getPositionYinGuiDesc(){return this.getDayPositionYinGuiDesc()}getPositionFu(){return this.getDayPositionFu()}getPositionFuDesc(){return this.getDayPositionFuDesc()}getPositionCai(){return this.getDayPositionCai()}getPositionCaiDesc(){return this.getDayPositionCaiDesc()}getDayPositionXi(){return s.POSITION_XI[this._dayGanIndex+1]}getDayPositionXiDesc(){const n=s.POSITION_DESC[this.getDayPositionXi()];return n||""}getDayPositionYangGui(){return s.POSITION_YANG_GUI[this._dayGanIndex+1]}getDayPositionYangGuiDesc(){const n=s.POSITION_DESC[this.getDayPositionYangGui()];return n||""}getDayPositionYinGui(){return s.POSITION_YIN_GUI[this._dayGanIndex+1]}getDayPositionYinGuiDesc(){const n=s.POSITION_DESC[this.getDayPositionYinGui()];return n||""}getDayPositionFu(n=2){return(n===1?s.POSITION_FU:s.POSITION_FU_2)[this._dayGanIndex+1]}getDayPositionFuDesc(n=2){const t=s.POSITION_DESC[this.getDayPositionFu(n)];return t||""}getDayPositionCai(){return s.POSITION_CAI[this._dayGanIndex+1]}getDayPositionCaiDesc(){const n=s.POSITION_DESC[this.getDayPositionCai()];return n||""}getTimePositionXi(){return s.POSITION_XI[this._timeGanIndex+1]}getTimePositionXiDesc(){const n=s.POSITION_DESC[this.getTimePositionXi()];return n||""}getTimePositionYangGui(){return s.POSITION_YANG_GUI[this._timeGanIndex+1]}getTimePositionYangGuiDesc(){const n=s.POSITION_DESC[this.getTimePositionYangGui()];return n||""}getTimePositionYinGui(){return s.POSITION_YIN_GUI[this._timeGanIndex+1]}getTimePositionYinGuiDesc(){const n=s.POSITION_DESC[this.getTimePositionYinGui()];return n||""}getTimePositionFu(n=2){return(n===1?s.POSITION_FU:s.POSITION_FU_2)[this._timeGanIndex+1]}getTimePositionFuDesc(n=2){const t=s.POSITION_DESC[this.getTimePositionFu(n)];return t||""}getTimePositionCai(){return s.POSITION_CAI[this._timeGanIndex+1]}getTimePositionCaiDesc(){const n=s.POSITION_DESC[this.getTimePositionCai()];return n||""}getYearPositionTaiSui(n=2){let t=this._yearZhiIndexByLiChun;switch(n){case 1:t=this._yearZhiIndex;break;case 3:t=this._yearZhiIndexExact;break}return s.POSITION_TAI_SUI_YEAR[t]}getYearPositionTaiSuiDesc(n=2){return s.POSITION_DESC[this.getYearPositionTaiSui(n)]}getMonthPositionTaiSui(n=2){let t=this._monthZhiIndex,e=this._monthGanIndex;n===3&&(t=this._monthZhiIndexExact,e=this._monthGanIndexExact);let i=t-s.BASE_MONTH_ZHI_INDEX;return i<0&&(i+=12),[d.getMessage("bg.gen"),s.POSITION_GAN[e],d.getMessage("bg.kun"),d.getMessage("bg.xun")][i%4]}getMonthPositionTaiSuiDesc(n=2){return s.POSITION_DESC[this.getMonthPositionTaiSui(n)]}getDayPositionTaiSui(n=2){let t=this.getDayInGanZhiExact2(),e=this._yearZhiIndexByLiChun;switch(n){case 1:t=this.getDayInGanZhi(),e=this._yearZhiIndex;break;case 3:t=this.getDayInGanZhi(),e=this._yearZhiIndexExact;break}return[d.getMessage("jz.jiaZi"),d.getMessage("jz.yiChou"),d.getMessage("jz.bingYin"),d.getMessage("jz.dingMao"),d.getMessage("jz.wuChen"),d.getMessage("jz.jiSi")].join(",").indexOf(t)>-1?d.getMessage("bg.zhen"):[d.getMessage("jz.bingZi"),d.getMessage("jz.dingChou"),d.getMessage("jz.wuYin"),d.getMessage("jz.jiMao"),d.getMessage("jz.gengChen"),d.getMessage("jz.xinSi")].join(",").indexOf(t)>-1?d.getMessage("bg.li"):[d.getMessage("jz.wuZi"),d.getMessage("jz.jiChou"),d.getMessage("jz.gengYin"),d.getMessage("jz.xinMao"),d.getMessage("jz.renChen"),d.getMessage("jz.guiSi")].join(",").indexOf(t)>-1?d.getMessage("ps.center"):[d.getMessage("jz.gengZi"),d.getMessage("jz.xinChou"),d.getMessage("jz.renYin"),d.getMessage("jz.guiMao"),d.getMessage("jz.jiaChen"),d.getMessage("jz.yiSi")].join(",").indexOf(t)>-1?d.getMessage("bg.dui"):[d.getMessage("jz.renZi"),d.getMessage("jz.guiChou"),d.getMessage("jz.jiaYin"),d.getMessage("jz.yiMao"),d.getMessage("jz.bingChen"),d.getMessage("jz.dingSi")].join(",").indexOf(t)>-1?d.getMessage("bg.kan"):s.POSITION_TAI_SUI_YEAR[e]}getDayPositionTaiSuiDesc(n=2){return s.POSITION_DESC[this.getDayPositionTaiSui(n)]}getChong(){return this.getDayChong()}getChongGan(){return this.getDayChongGan()}getChongGanTie(){return this.getDayChongGanTie()}getChongShengXiao(){return this.getDayChongShengXiao()}getChongDesc(){return this.getDayChongDesc()}getSha(){return this.getDaySha()}getDayChong(){return s.CHONG[this._dayZhiIndex]}getDayChongGan(){return s.CHONG_GAN[this._dayGanIndex]}getDayChongGanTie(){return s.CHONG_GAN_TIE[this._dayGanIndex]}getDayChongShengXiao(){const n=this.getChong();for(let t=0,e=s.ZHI.length;t<e;t++)if(s.ZHI[t]===n)return s.SHENGXIAO[t];return""}getDayChongDesc(){return"("+this.getDayChongGan()+this.getDayChong()+")"+this.getDayChongShengXiao()}getDaySha(){const n=s.SHA[this.getDayZhi()];return n||""}getTimeChong(){return s.CHONG[this._timeZhiIndex]}getTimeChongGan(){return s.CHONG_GAN[this._timeGanIndex]}getTimeChongGanTie(){return s.CHONG_GAN_TIE[this._timeGanIndex]}getTimeChongShengXiao(){const n=this.getTimeChong();for(let t=0,e=s.ZHI.length;t<e;t++)if(s.ZHI[t]===n)return s.SHENGXIAO[t];return""}getTimeChongDesc(){return"("+this.getTimeChongGan()+this.getTimeChong()+")"+this.getTimeChongShengXiao()}getTimeSha(){const n=s.SHA[this.getTimeZhi()];return n||""}getYearNaYin(){const n=s.NAYIN[this.getYearInGanZhi()];return n||""}getMonthNaYin(){const n=s.NAYIN[this.getMonthInGanZhi()];return n||""}getDayNaYin(){const n=s.NAYIN[this.getDayInGanZhi()];return n||""}getTimeNaYin(){const n=s.NAYIN[this.getTimeInGanZhi()];return n||""}getSeason(){return s.SEASON[Math.abs(this._month)]}static _convertJieQi(n){let t=n;return t==="DONG_ZHI"?t=d.getMessage("jq.dongZhi"):t==="DA_HAN"?t=d.getMessage("jq.daHan"):t==="XIAO_HAN"?t=d.getMessage("jq.xiaoHan"):t==="LI_CHUN"?t=d.getMessage("jq.liChun"):t==="DA_XUE"?t=d.getMessage("jq.daXue"):t==="YU_SHUI"?t=d.getMessage("jq.yuShui"):t==="JING_ZHE"&&(t=d.getMessage("jq.jingZhe")),t}checkLang(){const n=d.getLanguage();if(this._lang!=n){for(let t=0,e=s.JIE_QI_IN_USE.length;t<e;t++){const i=s.JIE_QI_IN_USE[t],a=this._jieQiList[t],F=this._jieQi[a];this._jieQiList[t]=i,this._jieQi[i]=F}this._lang=n}}getJie(){for(let n=0,t=s.JIE_QI_IN_USE.length;n<t;n+=2){const e=s.JIE_QI_IN_USE[n],i=this.getJieQiSolar(e);if(i&&i.getYear()===this._solar.getYear()&&i.getMonth()===this._solar.getMonth()&&i.getDay()===this._solar.getDay())return Z._convertJieQi(e)}return""}getQi(){for(let n=1,t=s.JIE_QI_IN_USE.length;n<t;n+=2){const e=s.JIE_QI_IN_USE[n],i=this.getJieQiSolar(e);if(i&&i.getYear()===this._solar.getYear()&&i.getMonth()===this._solar.getMonth()&&i.getDay()===this._solar.getDay())return Z._convertJieQi(e)}return""}getJieQi(){let n="";const t=Object.keys(this._jieQi);for(let e=0,i=t.length;e<i;e++){const a=t[e],F=this._jieQi[a];if(F.getYear()==this._solar.getYear()&&F.getMonth()==this._solar.getMonth()&&F.getDay()==this._solar.getDay()){n=a;break}}return Z._convertJieQi(n)}getWeek(){return this._weekIndex}getWeekInChinese(){return N.WEEK[this.getWeek()]}getXiu(){const n=s.XIU[this.getDayZhi()+this.getWeek()];return n||""}getXiuLuck(){const n=s.XIU_LUCK[this.getXiu()];return n||""}getXiuSong(){const n=s.XIU_SONG[this.getXiu()];return n||""}getZheng(){const n=s.ZHENG[this.getXiu()];return n||""}getAnimal(){const n=s.ANIMAL[this.getXiu()];return n||""}getGong(){const n=s.GONG[this.getXiu()];return n||""}getShou(){const n=s.SHOU[this.getGong()];return n||""}getFestivals(){const n=[],t=s.FESTIVAL[this._month+"-"+this._day];return t&&n.push(t),Math.abs(this._month)==12&&this._day>=29&&this._year!=this.next(1).getYear()&&n.push(d.getMessage("jr.chuXi")),n}getOtherFestivals(){const n=[],t=s.OTHER_FESTIVAL[this._month+"-"+this._day];t&&t.forEach(F=>{n.push(F)});let e=this.getJieQiSolar(d.getMessage("jq.qingMing"));const i=this._solar.toYmd();i===e.next(-1).toYmd()&&n.push("寒食节"),e=this.getJieQiSolar(d.getMessage("jq.liChun"));let a=4-e.getLunar().getDayGanIndex();return a<0&&(a+=10),i===e.next(a+40).toYmd()&&n.push("春社"),e=this.getJieQiSolar(d.getMessage("jq.liQiu")),a=4-e.getLunar().getDayGanIndex(),a<0&&(a+=10),i===e.next(a+40).toYmd()&&n.push("秋社"),n}getBaZi(){const n=this.getEightChar(),t=[];return t.push(n.getYear()),t.push(n.getMonth()),t.push(n.getDay()),t.push(n.getTime()),t}getBaZiWuXing(){const n=this.getEightChar(),t=[];return t.push(n.getYearWuXing()),t.push(n.getMonthWuXing()),t.push(n.getDayWuXing()),t.push(n.getTimeWuXing()),t}getBaZiNaYin(){const n=this.getEightChar(),t=[];return t.push(n.getYearNaYin()),t.push(n.getMonthNaYin()),t.push(n.getDayNaYin()),t.push(n.getTimeNaYin()),t}getBaZiShiShenGan(){const n=this.getEightChar(),t=[];return t.push(n.getYearShiShenGan()),t.push(n.getMonthShiShenGan()),t.push(n.getDayShiShenGan()),t.push(n.getTimeShiShenGan()),t}getBaZiShiShenZhi(){const n=this.getEightChar(),t=[];return t.push(n.getYearShiShenZhi()[0]),t.push(n.getMonthShiShenZhi()[0]),t.push(n.getDayShiShenZhi()[0]),t.push(n.getTimeShiShenZhi()[0]),t}getBaZiShiShenYearZhi(){return this.getEightChar().getYearShiShenZhi()}getBaZiShiShenMonthZhi(){return this.getEightChar().getMonthShiShenZhi()}getBaZiShiShenDayZhi(){return this.getEightChar().getDayShiShenZhi()}getBaZiShiShenTimeZhi(){return this.getEightChar().getTimeShiShenZhi()}getZhiXing(){let n=this._dayZhiIndex-this._monthZhiIndex;return n<0&&(n+=12),s.ZHI_XING[n+1]}getDayTianShen(){const n=this.getMonthZhi(),t=s.ZHI_TIAN_SHEN_OFFSET[n];return t==null?"":s.TIAN_SHEN[(this._dayZhiIndex+t)%12+1]}getTimeTianShen(){const n=this.getDayZhiExact(),t=s.ZHI_TIAN_SHEN_OFFSET[n];return t==null?"":s.TIAN_SHEN[(this._timeZhiIndex+t)%12+1]}getDayTianShenType(){const n=s.TIAN_SHEN_TYPE[this.getDayTianShen()];return n||""}getTimeTianShenType(){const n=s.TIAN_SHEN_TYPE[this.getTimeTianShen()];return n||""}getDayTianShenLuck(){const n=s.TIAN_SHEN_TYPE_LUCK[this.getDayTianShenType()];return n||""}getTimeTianShenLuck(){const n=s.TIAN_SHEN_TYPE_LUCK[this.getTimeTianShenType()];return n||""}getDayPositionTai(){return s.POSITION_TAI_DAY[s.getJiaZiIndex(this.getDayInGanZhi())]}getMonthPositionTai(){const n=this._month;return n<0?"":s.POSITION_TAI_MONTH[n-1]}getDayYi(n=1){return s.getDayYi(n==2?this.getMonthInGanZhiExact():this.getMonthInGanZhi(),this.getDayInGanZhi())}getDayJi(n=1){return s.getDayJi(n==2?this.getMonthInGanZhiExact():this.getMonthInGanZhi(),this.getDayInGanZhi())}getDayJiShen(){return s.getDayJiShen(this.getMonthZhiIndex(),this.getDayInGanZhi())}getDayXiongSha(){return s.getDayXiongSha(this.getMonthZhiIndex(),this.getDayInGanZhi())}getTimeYi(){return s.getTimeYi(this.getDayInGanZhiExact(),this.getTimeInGanZhi())}getTimeJi(){return s.getTimeJi(this.getDayInGanZhiExact(),this.getTimeInGanZhi())}getYueXiang(){return s.YUE_XIANG[this._day]}_getYearNineStar(n){const t=s.getJiaZiIndex(n)+1,e=s.getJiaZiIndex(this.getYearInGanZhi())+1;let i=t-e;i>1?i-=60:i<-1&&(i+=60);let F=(62+Math.floor((this._year+i+2696)/60)%3*3-t)%9;return F===0&&(F=9),K.fromIndex(F-1)}getYearNineStar(n=2){switch(n){case 1:return this._getYearNineStar(this.getYearInGanZhi());case 3:return this._getYearNineStar(this.getYearInGanZhiExact())}return this._getYearNineStar(this.getYearInGanZhiByLiChun())}getMonthNineStar(n=2){let t=this._yearZhiIndexByLiChun,e=this._monthZhiIndex;switch(n){case 1:t=this._yearZhiIndex,e=this._monthZhiIndex;break;case 3:t=this._yearZhiIndexExact,e=this._monthZhiIndexExact;break}let i=27-t%3*3;return e<s.BASE_MONTH_ZHI_INDEX&&(i-=3),K.fromIndex((i-e)%9)}getJieQiSolar(n){return this.checkLang(),this._jieQi[n]}getDayNineStar(){const n=this._solar.toYmd(),t=this.getJieQiSolar(d.getMessage("jq.dongZhi")),e=this.getJieQiSolar("DONG_ZHI"),i=this.getJieQiSolar(d.getMessage("jq.xiaZhi")),a=s.getJiaZiIndex(t.getLunar().getDayInGanZhi()),F=s.getJiaZiIndex(e.getLunar().getDayInGanZhi()),r=s.getJiaZiIndex(i.getLunar().getDayInGanZhi()),g=t.next(a>29?60-a:-a),E=e.next(F>29?60-F:-F),h=i.next(r>29?60-r:-r),D=g.toYmd(),l=E.toYmd(),c=h.toYmd();let x=0;return n>=D&&n<c?x=this._solar.subtract(g)%9:n>=c&&n<l?x=8-this._solar.subtract(h)%9:n>=l?x=this._solar.subtract(E)%9:n<D&&(x=(8+g.subtract(this._solar))%9),K.fromIndex(x)}getTimeNineStar(){const n=this._solar.toYmd();let t=!1;(n>=this.getJieQiSolar(d.getMessage("jq.dongZhi")).toYmd()&&n<this.getJieQiSolar(d.getMessage("jq.xiaZhi")).toYmd()||n>=this.getJieQiSolar("DONG_ZHI").toYmd())&&(t=!0);const i=(t?[0,3,6]:[8,5,2])[this.getDayZhiIndex()%3],a=t?i+this._timeZhiIndex:i+9-this._timeZhiIndex;return K.fromIndex(a%9)}getSolar(){return this._solar}getJieQiTable(){return this.checkLang(),this._jieQi}getJieQiList(){return this._jieQiList}getNextJie(n=!1){const t=[];for(let e=0,i=s.JIE_QI_IN_USE.length/2;e<i;e++)t.push(s.JIE_QI_IN_USE[e*2]);return this.getNearJieQi(!0,t,n)}getPrevJie(n=!1){const t=[];for(let e=0,i=s.JIE_QI_IN_USE.length/2;e<i;e++)t.push(s.JIE_QI_IN_USE[e*2]);return this.getNearJieQi(!1,t,n)}getNextQi(n=!1){const t=[];for(let e=0,i=s.JIE_QI_IN_USE.length/2;e<i;e++)t.push(s.JIE_QI_IN_USE[e*2+1]);return this.getNearJieQi(!0,t,n)}getPrevQi(n=!1){const t=[];for(let e=0,i=s.JIE_QI_IN_USE.length/2;e<i;e++)t.push(s.JIE_QI_IN_USE[e*2+1]);return this.getNearJieQi(!1,t,n)}getNextJieQi(n=!1){return this.getNearJieQi(!0,[],n)}getPrevJieQi(n=!1){return this.getNearJieQi(!1,[],n)}getNearJieQi(n,t,e){let i="",a=null;const F={};let r=!1;if(t)for(let h=0,D=t.length;h<D;h++)F[t[h]]=!0,r=!0;const g=e?this._solar.toYmd():this._solar.toYmdHms(),E=Object.keys(this._jieQi);for(let h=0,D=E.length;h<D;h++){const l=E[h],c=this._jieQi[l],x=Z._convertJieQi(l);if(r&&!F[x])continue;const y=e?c.toYmd():c.toYmdHms();if(n){if(y<=g)continue;if(a==null)i=x,a=c;else{const f=e?a.toYmd():a.toYmdHms();y<f&&(i=x,a=c)}}else{if(y>g)continue;if(a==null)i=x,a=c;else{const f=e?a.toYmd():a.toYmdHms();y>f&&(i=x,a=c)}}}return new t2(i,a)}getCurrentJieQi(){const n=Object.keys(this._jieQi);for(let t=0,e=n.length;t<e;t++){const i=n[t],a=this._jieQi[i];if(a.getYear()==this._solar.getYear()&&a.getMonth()==this._solar.getMonth()&&a.getDay()==this._solar.getDay())return new t2(Z._convertJieQi(i),a)}return null}getCurrentJie(){for(let n=0,t=s.JIE_QI_IN_USE.length;n<t;n+=2){const e=s.JIE_QI_IN_USE[n],i=this.getJieQiSolar(e);if(i&&i.getYear()===this._solar.getYear()&&i.getMonth()===this._solar.getMonth()&&i.getDay()===this._solar.getDay())return new t2(Z._convertJieQi(e),i)}return null}getCurrentQi(){for(let n=1,t=s.JIE_QI_IN_USE.length;n<t;n+=2){const e=s.JIE_QI_IN_USE[n],i=this.getJieQiSolar(e);if(i&&i.getYear()===this._solar.getYear()&&i.getMonth()===this._solar.getMonth()&&i.getDay()===this._solar.getDay())return new t2(Z._convertJieQi(e),i)}return null}getEightChar(){return this._eightChar}next(n){return this._solar.next(n).getLunar()}getYearXun(){return s.getXun(this.getYearInGanZhi())}getMonthXun(){return s.getXun(this.getMonthInGanZhi())}getDayXun(){return s.getXun(this.getDayInGanZhi())}getTimeXun(){return s.getXun(this.getTimeInGanZhi())}getYearXunByLiChun(){return s.getXun(this.getYearInGanZhiByLiChun())}getYearXunExact(){return s.getXun(this.getYearInGanZhiExact())}getMonthXunExact(){return s.getXun(this.getMonthInGanZhiExact())}getDayXunExact(){return s.getXun(this.getDayInGanZhiExact())}getDayXunExact2(){return s.getXun(this.getDayInGanZhiExact2())}getYearXunKong(){return s.getXunKong(this.getYearInGanZhi())}getMonthXunKong(){return s.getXunKong(this.getMonthInGanZhi())}getDayXunKong(){return s.getXunKong(this.getDayInGanZhi())}getTimeXunKong(){return s.getXunKong(this.getTimeInGanZhi())}getYearXunKongByLiChun(){return s.getXunKong(this.getYearInGanZhiByLiChun())}getYearXunKongExact(){return s.getXunKong(this.getYearInGanZhiExact())}getMonthXunKongExact(){return s.getXunKong(this.getMonthInGanZhiExact())}getDayXunKongExact(){return s.getXunKong(this.getDayInGanZhiExact())}getDayXunKongExact2(){return s.getXunKong(this.getDayInGanZhiExact2())}toString(){return this.getYearInChinese()+"年"+this.getMonthInChinese()+"月"+this.getDayInChinese()}toFullString(){let n=this.toString();n+=" "+this.getYearInGanZhi()+"("+this.getYearShengXiao()+")年",n+=" "+this.getMonthInGanZhi()+"("+this.getMonthShengXiao()+")月",n+=" "+this.getDayInGanZhi()+"("+this.getDayShengXiao()+")日",n+=" "+this.getTimeZhi()+"("+this.getTimeShengXiao()+")时",n+=" 纳音["+this.getYearNaYin()+" "+this.getMonthNaYin()+" "+this.getDayNaYin()+" "+this.getTimeNaYin()+"]",n+=" 星期"+this.getWeekInChinese(),this.getFestivals().forEach(e=>{n+=" ("+e+")"}),this.getOtherFestivals().forEach(e=>{n+=" ("+e+")"});const t=this.getJieQi();return t.length>0&&(n+=" ["+t+"]"),n+=" "+this.getGong()+"方"+this.getShou(),n+=" 星宿["+this.getXiu()+this.getZheng()+this.getAnimal()+"]("+this.getXiuLuck()+")",n+=" 彭祖百忌["+this.getPengZuGan()+" "+this.getPengZuZhi()+"]",n+=" 喜神方位["+this.getDayPositionXi()+"]("+this.getDayPositionXiDesc()+")",n+=" 阳贵神方位["+this.getDayPositionYangGui()+"]("+this.getDayPositionYangGuiDesc()+")",n+=" 阴贵神方位["+this.getDayPositionYinGui()+"]("+this.getDayPositionYinGuiDesc()+")",n+=" 福神方位["+this.getDayPositionFu()+"]("+this.getDayPositionFuDesc()+")",n+=" 财神方位["+this.getDayPositionCai()+"]("+this.getDayPositionCaiDesc()+")",n+=" 冲["+this.getDayChongDesc()+"]",n+=" 煞["+this.getDaySha()+"]",n}getShuJiu(){const n=p.fromYmd(this._solar.getYear(),this._solar.getMonth(),this._solar.getDay());let t=this.getJieQiSolar("DONG_ZHI"),e=p.fromYmd(t.getYear(),t.getMonth(),t.getDay());n.isBefore(e)&&(t=this.getJieQiSolar(d.getMessage("jq.dongZhi")),e=p.fromYmd(t.getYear(),t.getMonth(),t.getDay()));const i=p.fromYmd(t.getYear(),t.getMonth(),t.getDay()).next(81);if(n.isBefore(e)||!n.isBefore(i))return null;const a=n.subtract(e);return new pn(s.NUMBER[Math.floor(a/9)+1]+"九",a%9+1)}getFu(){const n=p.fromYmd(this._solar.getYear(),this._solar.getMonth(),this._solar.getDay()),t=this.getJieQiSolar(d.getMessage("jq.xiaZhi")),e=this.getJieQiSolar(d.getMessage("jq.liQiu"));let i=p.fromYmd(t.getYear(),t.getMonth(),t.getDay()),a=6-t.getLunar().getDayGanIndex();if(a<0&&(a+=10),a+=20,i=i.next(a),n.isBefore(i))return null;let F=n.subtract(i);if(F<10)return new e2("初伏",F+1);if(i=i.next(10),F=n.subtract(i),F<10)return new e2("中伏",F+1);i=i.next(10);const r=p.fromYmd(e.getYear(),e.getMonth(),e.getDay());if(F=n.subtract(i),r.isAfter(i)){if(F<10)return new e2("中伏",F+11);i=i.next(10),F=n.subtract(i)}return F<10?new e2("末伏",F+1):null}getLiuYao(){return s.LIU_YAO[(Math.abs(this._month)+this._day-2)%6]}getWuHou(){const n=this.getPrevJieQi(!0),t=s.find(n.getName(),s.JIE_QI);let e=Math.floor(this._solar.subtract(n.getSolar())/5);return e>2&&(e=2),s.WU_HOU[(t.index*3+e)%s.WU_HOU.length]}getHou(){const n=this.getPrevJieQi(!0),t=this._solar.subtract(n.getSolar()),e=s.HOU.length-1;let i=Math.floor(t/5);return i>e&&(i=e),n.getName()+" "+s.HOU[i]}getDayLu(){const n=s.LU[this.getDayGan()],t=s.LU[this.getDayZhi()];let e=n+"命互禄";return t&&(e+=" "+t+"命进禄"),e}getTime(){return L0.fromYmdHms(this._year,this._month,this._day,this._hour,this._minute,this._second)}getTimes(){const n=[];n.push(L0.fromYmdHms(this._year,this._month,this._day,0,0,0));for(let t=0;t<12;t++)n.push(L0.fromYmdHms(this._year,this._month,this._day,(t+1)*2-1,0,0));return n}getFoto(){return E1.fromLunar(this)}getTao(){return h1.fromLunar(this)}}class v0{static fromYm(n,t){return new v0(n,t)}static fromDate(n){return v0.fromYm(n.getFullYear(),n.getMonth()+1)}constructor(n,t){this._year=n,this._month=t}getYear(){return this._year}getMonth(){return this._month}next(n){const t=n<0?-1:1;let e=Math.abs(n),i=this._year+Math.floor(e/12)*t;return e=this._month+e%12*t,e>12?(e-=12,i++):e<1&&(e+=12,i--),v0.fromYm(i,e)}getDays(){const n=[],t=p.fromYmd(this._year,this._month,1);n.push(t);const e=N.getDaysOfMonth(this._year,this._month);for(let i=1;i<e;i++)n.push(t.next(i));return n}getWeeks(n){const t=[];let e=u0.fromYmd(this._year,this._month,1,n);for(;;){t.push(e),e=e.next(1,!1);const i=e.getFirstDay();if(i.getYear()>this._year||i.getMonth()>this._month)break}return t}toString(){return`${this.getYear()}-${this.getMonth()}`}toFullString(){return`${this.getYear()}年${this.getMonth()}月`}}const a0=class{static fromYmd(u,n,t){return a0.fromYmdHms(u,n,t,0,0,0)}static fromYmdHms(u,n,t,e,i,a){return new a0(u,n,t,e,i,a)}static fromDate(u){return a0.fromYmdHms(u.getFullYear(),u.getMonth()+1,u.getDate(),u.getHours(),u.getMinutes(),u.getSeconds())}static fromJulianDay(u){let n=Math.floor(u+.5),t=u+.5-n;if(n>=2299161){const E=Math.floor((n-186721625e-2)/36524.25);n+=1+E-Math.floor(E/4)}n+=1524;let e=Math.floor((n-122.1)/365.25);n-=Math.floor(365.25*e);let i=Math.floor(n/30.601);n-=Math.floor(30.601*i);let a=n;i>13?(i-=13,e-=4715):(i-=1,e-=4716),t*=24;let F=Math.floor(t);t-=F,t*=60;let r=Math.floor(t);t-=r,t*=60;let g=Math.round(t);return g>59&&(g-=60,r++),r>59&&(r-=60,F++),F>23&&(F-=24,a+=1),a0.fromYmdHms(e,i,a,F,r,g)}static fromBaZi(u,n,t,e,i=2,a=1900){i=i==1?1:2;const F=[];let r=s.index(n.substring(1),s.ZHI,-1)-2;if(r<0&&(r+=12),((s.index(u.substring(0,1),s.GAN,-1)+1)*2+r)%10!==s.index(n.substring(0,1),s.GAN,-1))return F;let g=s.getJiaZiIndex(u)-57;g<0&&(g+=60),g++,r*=2;const E=s.index(e.substring(1),s.ZHI,-1)*2;let h=[E];E==0&&i==2&&(h=[0,23]);const D=a-1,l=new Date().getFullYear();for(;g<=l;){if(g>=D){const c=Z.fromYmd(g,1,1),x=c.getJieQiList();let f=c.getJieQiTable()[x[4+r]];if(f.getYear()>=a){let _=s.getJiaZiIndex(t)-s.getJiaZiIndex(f.getLunar().getDayInGanZhiExact2());_<0&&(_+=60),_>0&&(f=f.next(_)),h.forEach(S=>{let z=0,G=0;_==0&&S===f.getHour()&&(z=f.getMinute(),G=f.getSecond());let H=a0.fromYmdHms(f.getYear(),f.getMonth(),f.getDay(),S,z,G);_===30&&(H=H.nextHour(-1));const O=H.getLunar(),w=i===2?O.getDayInGanZhiExact2():O.getDayInGanZhiExact();O.getYearInGanZhiExact()===u&&O.getMonthInGanZhiExact()===n&&w===t&&O.getTimeInGanZhi()===e&&F.push(H)})}}g+=60}return F}constructor(u,n,t,e,i,a){if(u===1582&&n===10&&t>4&&t<15)throw new Error(`wrong solar year ${u} month ${n} day ${t}`);if(n<1||n>12)throw new Error(`wrong month ${n}`);if(t<1||t>31)throw new Error(`wrong day ${t}`);if(e<0||e>23)throw new Error(`wrong hour ${e}`);if(i<0||i>59)throw new Error(`wrong minute ${i}`);if(a<0||a>59)throw new Error(`wrong second ${a}`);this._year=u,this._month=n,this._day=t,this._hour=e,this._minute=i,this._second=a}getYear(){return this._year}getMonth(){return this._month}getDay(){return this._day}getHour(){return this._hour}getMinute(){return this._minute}getSecond(){return this._second}getWeek(){return(Math.floor(this.getJulianDay()+.5)+7000001)%7}getWeekInChinese(){return N.WEEK[this.getWeek()]}getSolarWeek(u){return u0.fromYmd(this._year,this._month,this._day,u)}isLeapYear(){return N.isLeapYear(this._year)}getFestivals(){const u=[];let n=N.FESTIVAL[this._month+"-"+this._day];n&&u.push(n);const t=Math.ceil(this._day/7),e=this.getWeek();return n=N.WEEK_FESTIVAL[this._month+"-"+t+"-"+e],n&&u.push(n),this._day+7>N.getDaysOfMonth(this._year,this._month)&&(n=N.WEEK_FESTIVAL[this._month+"-0-"+e],n&&u.push(n)),u}getOtherFestivals(){const u=[],n=N.OTHER_FESTIVAL[this._month+"-"+this._day];return n&&n.forEach(t=>{u.push(t)}),u}getXingzuo(){return this.getXingZuo()}getXingZuo(){let u=11;const n=this._month*100+this._day;return n>=321&&n<=419?u=0:n>=420&&n<=520?u=1:n>=521&&n<=621?u=2:n>=622&&n<=722?u=3:n>=723&&n<=822?u=4:n>=823&&n<=922?u=5:n>=923&&n<=1023?u=6:n>=1024&&n<=1122?u=7:n>=1123&&n<=1221?u=8:n>=1222||n<=119?u=9:n<=218&&(u=10),N.XINGZUO[u]}getSalaryRate(){if(this._month===1&&this._day===1||this._month===5&&this._day===1||this._month===10&&this._day>=1&&this._day<=3)return 3;const u=this.getLunar();if(u.getMonth()===1&&u.getDay()>=1&&u.getDay()<=3||u.getMonth()===5&&u.getDay()===5||u.getMonth()===8&&u.getDay()===15||u.getJieQi()==="清明")return 3;const n=A0.getHoliday(this._year,this._month,this._day);if(n){if(!n.isWork())return 2}else{const t=this.getWeek();if(t===6||t===0)return 2}return 1}toYmd(){let u=this._year+"";for(;u.length<4;)u="0"+u;return[u,(this._month<10?"0":"")+this._month,(this._day<10?"0":"")+this._day].join("-")}toYmdHms(){return this.toYmd()+" "+[(this._hour<10?"0":"")+this._hour,(this._minute<10?"0":"")+this._minute,(this._second<10?"0":"")+this._second].join(":")}toString(){return this.toYmd()}toFullString(){let u=this.toYmdHms();return this.isLeapYear()&&(u+=" 闰年"),u+=" 星期"+this.getWeekInChinese(),this.getFestivals().forEach(t=>{u+=" ("+t+")"}),u+=" "+this.getXingZuo()+"座",u}nextYear(u){const n=this._year+u,t=this._month;let e=this._day;return n===1582&&t===10?e>4&&e<15&&(e+=10):t===2&&e>28&&(N.isLeapYear(n)||(e=28)),a0.fromYmdHms(n,t,e,this._hour,this._minute,this._second)}nextMonth(u){const n=v0.fromYm(this._year,this._month).next(u),t=n.getYear(),e=n.getMonth();let i=this._day;if(t===1582&&e===10)i>4&&i<15&&(i+=10);else{const a=N.getDaysOfMonth(t,e);i>a&&(i=a)}return a0.fromYmdHms(t,e,i,this._hour,this._minute,this._second)}nextDay(u){let n=this._year,t=this._month,e=this._day;if(n===1582&&t===10&&e>4&&(e-=10),u>0){e+=u;let i=N.getDaysOfMonth(n,t);for(;e>i;)e-=i,t++,t>12&&(t=1,n++),i=N.getDaysOfMonth(n,t)}else if(u<0){for(;e+u<=0;)t--,t<1&&(t=12,n--),e+=N.getDaysOfMonth(n,t);e+=u}return n===1582&&t===10&&e>4&&(e+=10),a0.fromYmdHms(n,t,e,this._hour,this._minute,this._second)}next(u,n=!1){if(n){let t=a0.fromYmdHms(this._year,this._month,this._day,this._hour,this._minute,this._second);if(u!==0){let e=Math.abs(u);const i=u<1?-1:1;for(;e>0;){t=t.next(i);let a=!0;const F=A0.getHoliday(t.getYear(),t.getMonth(),t.getDay());if(F)a=F.isWork();else{const r=t.getWeek();(r===0||r===6)&&(a=!1)}a&&(e-=1)}}return t}else return this.nextDay(u)}nextHour(u){const n=this._hour+u,t=n<0?-1:1;let e=Math.abs(n),i=Math.floor(e/24)*t;e=e%24*t,e<0&&(e+=24,i--);const a=this.next(i);return a0.fromYmdHms(a.getYear(),a.getMonth(),a.getDay(),e,a.getMinute(),a.getSecond())}getLunar(){return Z.fromSolar(this)}getJulianDay(){let u=this._year,n=this._month;const t=this._day+((this._second/60+this._minute)/60+this._hour)/24;let e=0,i=!1;return u*372+n*31+Math.floor(t)>=588829&&(i=!0),n<=2&&(n+=12,u--),i&&(e=Math.floor(u/100),e=2-e+Math.floor(e/4)),Math.floor(365.25*(u+4716))+Math.floor(30.6001*(n+1))+t+e-1524.5}isBefore(u){return this._year>u.getYear()?!1:this._year<u.getYear()?!0:this._month>u.getMonth()?!1:this._month<u.getMonth()?!0:this._day>u.getDay()?!1:this._day<u.getDay()?!0:this._hour>u.getHour()?!1:this._hour<u.getHour()?!0:this._minute>u.getMinute()?!1:this._minute<u.getMinute()?!0:this._second<u.getSecond()}isAfter(u){return this._year>u.getYear()?!0:this._year<u.getYear()?!1:this._month>u.getMonth()?!0:this._month<u.getMonth()?!1:this._day>u.getDay()?!0:this._day<u.getDay()?!1:this._hour>u.getHour()?!0:this._hour<u.getHour()?!1:this._minute>u.getMinute()?!0:this._minute<u.getMinute()?!1:this._second>u.getSecond()}subtract(u){return N.getDaysBetween(u.getYear(),u.getMonth(),u.getDay(),this._year,this._month,this._day)}subtractMinute(u){let n=this.subtract(u);const t=this._hour*60+this._minute,e=u.getHour()*60+u.getMinute();let i=t-e;return i<0&&(i+=1440,n--),i+=n*1440,i}};let p=a0;p.J2000=2451545;d.init();function C1(u,n,t,e=12,i=0,a=0){return{年:u,月:n,日:t,时:e,分:i,秒:a}}function D1(u){return p.fromYmdHms(u.年,u.月,u.日,u.时,u.分,u.秒)}function zn(u){return{年:u.getYear(),月:u.getMonth(),日:u.getDay(),时:u.getHour(),分:u.getMinute(),秒:u.getSecond()}}function r0(u,n){const t=[u.年,u.月,u.日,u.时,u.分,u.秒],e=[n.年,n.月,n.日,n.时,n.分,n.秒];for(let i=0;i<t.length;i+=1){const a=t[i]-e[i];if(a!==0)return a}return 0}function A1(u,n){return u.年===n.年&&u.月===n.月&&u.日===n.日}function Y0(u){return`${String(u.时).padStart(2,"0")}:${String(u.分).padStart(2,"0")}`}function k0(u=new Date){const n=new Date(u.getTime()+288e5);return{年:n.getUTCFullYear(),月:n.getUTCMonth()+1,日:n.getUTCDate(),时:n.getUTCHours(),分:n.getUTCMinutes(),秒:n.getUTCSeconds()}}function C0(u,n){const t=new Date(Date.UTC(u.年,u.月-1,u.日,u.时,u.分,u.秒)+Math.round(n)*1e3);return{年:t.getUTCFullYear(),月:t.getUTCMonth()+1,日:t.getUTCDate(),时:t.getUTCHours(),分:t.getUTCMinutes(),秒:t.getUTCSeconds()}}function J0(u,n=!1){const t=`${u.年}-${String(u.月).padStart(2,"0")}-${String(u.日).padStart(2,"0")}`,e=Y0(u);return`${t} ${e}${n?`:${String(u.秒).padStart(2,"0")}`:""}`}const Nn=["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],Yn={XIAO_HAN:"小寒",DA_HAN:"大寒",LI_CHUN:"立春",YU_SHUI:"雨水",JING_ZHE:"惊蛰",CHUN_FEN:"春分",QING_MING:"清明",GU_YU:"谷雨",LI_XIA:"立夏",XIAO_MAN:"小满",MANG_ZHONG:"芒种",XIA_ZHI:"夏至",XIAO_SHU:"小暑",DA_SHU:"大暑",LI_QIU:"立秋",CHU_SHU:"处暑",BAI_LU:"白露",QIU_FEN:"秋分",HAN_LU:"寒露",SHUANG_JIANG:"霜降",LI_DONG:"立冬",XIAO_XUE:"小雪",DA_XUE:"大雪",DONG_ZHI:"冬至"},P2={小寒:"丑",大寒:void 0,立春:"寅",雨水:void 0,惊蛰:"卯",春分:void 0,清明:"辰",谷雨:void 0,立夏:"巳",小满:void 0,芒种:"午",夏至:void 0,小暑:"未",大暑:void 0,立秋:"申",处暑:void 0,白露:"酉",秋分:void 0,寒露:"戌",霜降:void 0,立冬:"亥",小雪:void 0,大雪:"子",冬至:void 0},q2=new Map;function Mn(u){return Nn.includes(u)?u:Yn[u]??null}function g2(u){const n=q2.get(u);if(n)return n.map(i=>({...i}));const t=D1({年:u,月:6,日:15,时:12,分:0,秒:0}).getLunar().getJieQiTable(),e=Object.entries(t).map(([i,a])=>{const F=Mn(i);return!F||a.getYear()!==u?null:{名称:F,...zn(a)}}).filter(i=>i!==null).filter((i,a,F)=>F.findIndex(r=>r.名称===i.名称)===a).sort((i,a)=>r0(i,a));return q2.set(u,e),e.map(i=>({...i}))}function D0(u,n){const t=g2(u).find(e=>e.名称===n);if(!t)throw new Error(`无法取得 ${u} 年${n}交节时刻`);return t}function bn(u){return g2(u.年).find(n=>A1(n,u))??null}function Tn(u){const n=[u.年-1,u.年].flatMap(g2).filter(t=>P2[t.名称]!==void 0).filter(t=>r0(t,u)<=0).sort((t,e)=>r0(e,t))[0];if(!n)throw new Error("无法确定当前节气月");return{月建:P2[n.名称],边界节气:n.名称,交节时刻:n}}const q=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],M=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];function W0(u,n){return(u%n+n)%n}const Gn=Date.UTC(2e3,0,7),Zn=864e5;function c1(u){const n=D0(u.年,"立春"),t=r0(u,n)>=0?u.年:u.年-1;return`${q[W0(t-4,10)]}${M[W0(t-4,12)]}`}function B1(u,n=c1(u)){const{月建:t}=Tn(u),e=q.indexOf(n[0]),i=M.indexOf(t),a=e%5*2+2,F=W0(i-M.indexOf("寅"),12);return{月柱:`${q[W0(a+F,10)]}${t}`,月建:t}}function O0(u){const n=u,t=Math.floor((Date.UTC(n.年,n.月-1,n.日)-Gn)/Zn),e=W0(t,60),i=M[e%12];return{日柱:`${q[e%10]}${i}`,日支:i}}function T2(u){const n=c1(u),{月柱:t,月建:e}=B1(u,n),{日柱:i,日支:a}=O0(u);return{年柱:n,月柱:t,日柱:i,日支:a,月建:e}}const G2=`# 传统节日本地规则
# 数据来源：lunar-typescript 1.8.6（6tail/lunar-typescript，MIT）
# 固定日期保持上游的分类与顺序；闰月不匹配固定节日。
# 动态规则：除夕为农历十二月最后一日；寒食为清明前一日；春社、秋社为立春、立秋后的第五个戊日。

# 常用传统节日
正月初一：春节
正月十五：元宵节
二月初二：龙头节
五月初五：端午节
七月初七：七夕节
八月十五：中秋节
九月初九：重阳节
十二月初八：腊八节

# 其他传统民俗节日
正月初四：接神日
正月初五：隔开日
正月初七：人日
正月初八：谷日、顺星节
正月初九：天日
正月初十：地日
正月二十：天穿节
正月廿五：填仓节
正月三十：正月晦
二月初一：中和节
二月初二：社日节
三月初三：上巳节
四月十五：佛吉祥日（卫塞节）
五月二十：分龙节
五月廿五：会龙节
六月初六：天贶节
六月廿四：观莲节
六月廿五：五谷母节
七月十五：中元节
七月廿二：财神节
七月廿九：地藏节
八月初一：天灸日
十月初一：寒衣节
十月初八：民俗涅槃日（放生日）
十月初十：十成节
十月十五：下元节
十二月初七：驱傩日
十二月十六：尾牙
十二月廿四：祭灶日
`,Hn=new Map([["正月",1],["一月",1],["二月",2],["三月",3],["四月",4],["五月",5],["六月",6],["七月",7],["八月",8],["九月",9],["十月",10],["十一月",11],["冬月",11],["十二月",12],["腊月",12]]),kn=new Map(["初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"].map((u,n)=>[u,n+1]));function On(u=G2){let n=null;const t=[];return u.split(/\r?\n/u).forEach((e,i)=>{const a=e.trim();if(a==="# 常用传统节日"){n="常用传统节日";return}if(a==="# 其他传统民俗节日"){n="其他传统民俗节日";return}if(!a||a.startsWith("#"))return;if(!n)throw new Error(`传统节日.txt 第 ${i+1} 行缺少分类标题`);const F=a.match(/^((?:正|一|二|三|四|五|六|七|八|九|十|十一|十二|冬|腊)月)(初一|初二|初三|初四|初五|初六|初七|初八|初九|初十|十一|十二|十三|十四|十五|十六|十七|十八|十九|二十|廿一|廿二|廿三|廿四|廿五|廿六|廿七|廿八|廿九|三十)[：:](.+)$/u);if(!F)throw new Error(`传统节日.txt 第 ${i+1} 行格式无法识别：${a}`);const r=Hn.get(F[1]),g=kn.get(F[2]),E=F[3].split(/[、，,]/u).map(h=>h.trim()).filter(Boolean);if(!r||!g||E.length===0)throw new Error(`传统节日.txt 第 ${i+1} 行内容不完整：${a}`);t.push({分类:n,月:r,日:g,名称:E})}),t}const $n=On();function c2(u,n){return A1(u,n)}function W2(u){const n=O0(u).日柱[0];let t=q.indexOf("戊")-q.indexOf(n);return t<0&&(t+=10),C0(u,(t+40)*86400)}function Xn(u,n,t){const e=[],i=[];if(!n.是否闰月)for(const F of $n){if(F.月!==n.月||F.日!==n.日)continue;(F.分类==="常用传统节日"?e:i).push(...F.名称)}n.月===12&&n.日>=29&&n.年!==t.年&&e.push("除夕");const a=D0(u.年,"清明");return c2(u,C0(a,-86400))&&i.push("寒食节"),c2(u,W2(D0(u.年,"立春")))&&i.push("春社"),c2(u,W2(D0(u.年,"立秋")))&&i.push("秋社"),{常用传统节日:e,其他传统民俗节日:i,全部:[...new Set([...e,...i])]}}function f0(u){const n=D1(u).getLunar(),t=n.getMonth()<0,e=`${n.getMonthInChinese()}月`,i=n.getDayInChinese();return{年:n.getYear(),月:Math.abs(n.getMonth()),日:n.getDay(),是否闰月:t,月名:e,日名:i,显示:`${e}${i}`}}function Ln(u){return Xn(u,f0(u),f0(C0(u,86400)))}function l1(u){return Ln(u).全部}const d1=["匹配名称","神像","宝诰标题","宝诰出处","宝诰版本说明"],vn=["简介出处","参校来源"],Jn=[...d1,...vn],B2=new Map([["正月",1],["一月",1],["二月",2],["三月",3],["四月",4],["五月",5],["六月",6],["七月",7],["八月",8],["九月",9],["十月",10],["十一月",11],["冬月",11],["十二月",12],["腊月",12]]),l2=new Map(["初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"].map((u,n)=>[u,n+1]));function _1(u,n){return u.slice(0,n).split(/\r?\n/u).length}function Un(u,n){return u.match(new RegExp(`^${n}：(.*)$`,"mu"))?.[1].trim()??null}function X0(u,n){return u.match(new RegExp(`^${n}：(.*)$`,"mu"))?.[1].trim()??null}function S2(u,n,t){const e=u.match(new RegExp(`^【${n}】[ \\t]*\\r?\\n([\\s\\S]*?)^【${t}】[ \\t]*$`,"mu"));return e?e[1].replace(/^(?:[ \t]*\r?\n)+/u,"").replace(/(?:\r?\n[ \t]*)+$/u,""):null}function Pn(u){return u.split("；").map(n=>n.trim()).filter(Boolean)}function qn(u){const n=[...l2.keys()].join("|"),t=[...B2.keys()].sort((g,E)=>E.length-g.length).join("|"),e=u.match(new RegExp(`^农历(${t})(${n})(?:至(?:(${t}))?(${n}))?$`,"u"));if(!e)return null;const i=B2.get(e[1]),a=l2.get(e[2]),F=e[3]?B2.get(e[3]):i,r=e[4]?l2.get(e[4]):a;return!i||!a||!F||!r||i!==F||a>r?null:{原文:u,月:i,起始日:a,结束日:r}}function x1(u,n,t,e,i){const a=X0(t,"日期"),F=X0(t,"名称"),r=X0(t,"类型"),g=X0(t,"详情人物")??"",E=S2(t,"纪念简介开始","纪念简介结束")??"",h=X0(t,"纪念简介出处")??"",D=_1(n,e);if(!a||!F||!r)return i.push({文件名:u,行号:D,信息:"纪念事件必须完整填写日期、名称和类型"}),null;const l=qn(a);return l?{日期:l,名称:F,类型:r,详情人物名称:g,纪念简介:E,纪念简介出处:h}:(i.push({文件名:u,行号:D,信息:`纪念事件日期格式无法解析：${a}`}),null)}function Wn(u,n,t,e,i){const a=[],F=/^【纪念事件】[ \t]*\r?\n([\s\S]*?)^【纪念结束】[ \t]*$/gmu;let r;for(;(r=F.exec(t))!==null;){const g=x1(u,n,r[1],e+r.index,i);g&&a.push(g)}return a}function Rn(u){return!!(u.神像||u.宝诰||u.简介)}function Z2(u){return!!(u.事件.纪念简介||u.人物&&Rn(u.人物))}function Qn(u,n){const t={文件名:u,人物:[],独立纪念事件:[],错误:[]},e=/^【人物：([^】\r\n]+)】[ \t]*\r?\n([\s\S]*?)^【人物结束】[ \t]*$/gmu,i=new Map,a=new Map;let F;for(;(F=e.exec(n))!==null;){const _=F[1].trim(),S=F[2],z=_1(n,F.index),G=i.get(_);if(G!==void 0){t.错误.push({文件名:u,行号:z,信息:`人物主名称“${_}”重复，首次出现在第 ${G} 行`});continue}i.set(_,z);const H=Object.fromEntries(Jn.map(X=>[X,Un(S,X)]));for(const X of d1)H[X]===null&&t.错误.push({文件名:u,行号:z,信息:`人物“${_}”缺少“${X}”字段`});const O=S2(S,"宝诰开始","宝诰结束"),w=S2(S,"简介开始","简介结束");O===null&&t.错误.push({文件名:u,行号:z,信息:`人物“${_}”缺少完整宝诰区块`}),w===null&&t.错误.push({文件名:u,行号:z,信息:`人物“${_}”缺少完整简介区块`});const J={主名称:_,匹配名称:Pn(H.匹配名称??""),纪念事件:Wn(u,n,S,F.index,t.错误),神像:H.神像??"",宝诰标题:H.宝诰标题??"",宝诰出处:H.宝诰出处??"",宝诰版本说明:H.宝诰版本说明??"",宝诰:O??"",简介:w??"",简介出处:H.简介出处??"",参校来源:H.参校来源??""},i0=[...new Set([J.主名称,...J.匹配名称])];for(const X of i0){const L=a.get(X);L&&L.主名称!==_?t.错误.push({文件名:u,行号:z,信息:`匹配名称“${X}”同时属于“${L.主名称}”与“${_}”（首次出现在第 ${L.行号} 行）`}):a.set(X,{主名称:_,行号:z})}t.人物.push(J)}const r=/^【独立纪念事件】[ \t]*\r?\n([\s\S]*?)^【独立纪念结束】[ \t]*$/gmu;for(;(F=r.exec(n))!==null;){const _=x1(u,n,F[1],F.index,t.错误);_&&t.独立纪念事件.push(_)}const g=n.match(/^【人物：/gmu)?.length??0,E=n.match(/^【人物结束】[ \t]*$/gmu)?.length??0,h=n.match(/^【纪念事件】[ \t]*$/gmu)?.length??0,D=n.match(/^【纪念结束】[ \t]*$/gmu)?.length??0,l=n.match(/^【独立纪念事件】[ \t]*$/gmu)?.length??0,c=n.match(/^【独立纪念结束】[ \t]*$/gmu)?.length??0;g===0&&t.错误.push({文件名:u,行号:1,信息:"未找到任何人物区块"}),(g!==t.人物.length||E!==g)&&t.错误.push({文件名:u,行号:1,信息:"存在未闭合或格式不正确的人物区块"});const x=t.人物.reduce((_,S)=>_+S.纪念事件.length,0);(h!==D||h!==x)&&t.错误.push({文件名:u,行号:1,信息:"存在未归属人物或格式不正确的纪念事件块"}),(l!==c||l!==t.独立纪念事件.length)&&t.错误.push({文件名:u,行号:1,信息:"存在格式不正确的独立纪念事件块"});const y=new Map,f=[...t.人物.flatMap(_=>_.纪念事件.map(S=>({事件:S,归属:_.主名称}))),...t.独立纪念事件.map(_=>({事件:_,归属:"独立纪念"}))];for(const{事件:_,归属:S}of f){const z=`${_.日期.原文}\0${_.名称}\0${_.类型}`,G=y.get(z);G?t.错误.push({文件名:u,行号:1,信息:`纪念事件“${_.名称}”重复出现在“${G}”与“${S}”`}):y.set(z,S),_.详情人物名称&&!i.has(_.详情人物名称)&&t.错误.push({文件名:u,行号:1,信息:`纪念事件“${_.名称}”引用了不存在的人物“${_.详情人物名称}”`})}for(const _ of f1(t))Z2(_)||t.错误.push({文件名:u,行号:1,信息:`纪念事件“${_.事件.日期.原文} ${_.名称}”缺少神像、宝诰、人物简介或纪念简介`});return t}function f1(u){if(!u)return[];const n=new Map(u.人物.map(t=>[t.主名称,t]));return[...u.人物.flatMap(t=>t.纪念事件.map(e=>({名称:e.名称,类型:e.类型,人物:e.详情人物名称?n.get(e.详情人物名称)??null:t,事件:e}))),...u.独立纪念事件.map(t=>({名称:t.名称,类型:t.类型,人物:t.详情人物名称?n.get(t.详情人物名称)??null:null,事件:t}))]}function y1(u,n){if(!u||n.是否闰月)return[];const t=e=>e.日期.月===n.月&&n.日>=e.日期.起始日&&n.日<=e.日期.结束日;return f1(u).filter(e=>t(e.事件))}const Kn="《太上北斗二十八章经》",d2="《太上玄灵北斗本命延生真经注》",Vn={正月:1,二月:2,三月:3,四月:4,五月:5,六月:6,七月:7,八月:8,九月:9,十月:10,十一月:11,十二月:12};function j1(u){const n={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9};return u==="初十"||u==="十"?10:u==="二十"?20:u==="三十"?30:u.startsWith("初")?n[u.slice(1)]??null:u.startsWith("十")?10+(n[u.slice(1)]??0):u.startsWith("廿")?20+(n[u.slice(1)]??0):null}function h0(u,n,t,e){return{文件名:u,行号:n,原文:t,信息:e}}function R2(u,n,t){const e={};if(!u)return t.push(h0(n,0,"","缺少配置文件")),e;t.push(...u.错误);for(const i of u.规则){const a=Vn[i.条件];if(!a)continue;const F=i.内容.split("、").map(j1);if(F.some(r=>r===null)){t.push(h0(n,i.行号,i.原文,"包含无法识别的农历日期"));continue}e[a]=F}return Object.keys(e).length!==12&&t.push(h0(n,0,"","必须完整配置十二个月")),e}function I1(u){const n=[],t="斗降日-太上北斗二十八章经.txt",e="斗降日-北斗本命延生真经注.txt",i="本命星官.txt",a=u.find(f=>f.文件名===t),F=u.find(f=>f.文件名===e),r=u.find(f=>f.文件名===i),g=R2(a,t,n),E=R2(F,e,n),h=F?.规则.find(f=>f.条件==="每月"),D=F?.规则.find(f=>f.条件==="干支日"),l=F?.规则.find(f=>f.条件==="闰月"),c=h?.内容.split("、").map(j1)??[],x=D?.内容.split("、").filter(Boolean)??[];(c.some(f=>f===null)||c.length!==2)&&n.push(h0(e,h?.行号??0,h?.原文??"","每月规则必须配置初三、廿七")),x.join("、")!=="甲子、庚申"&&n.push(h0(e,D?.行号??0,D?.原文??"","干支日必须配置甲子、庚申")),l?.内容!=="从前月"&&n.push(h0(e,l?.行号??0,l?.原文??"","必须明确配置“闰月从前月”"));const y={};if(!r)n.push(h0(i,0,"","缺少配置文件"));else{n.push(...r.错误);for(const f of r.规则){const _=[...f.条件];if(_.some(S=>!M.includes(S))){n.push(h0(i,f.行号,f.原文,"包含无效地支"));continue}for(const S of _)y[S]=f.内容}}return Object.keys(y).length!==12&&n.push(h0(i,0,"","必须完整覆盖十二出生年支")),n.length>0?{配置:null,错误:n}:{配置:{二十八章经:g,真经注:E,真经注每月:c,真经注干支日:x,出生年支本命星官:y},错误:[]}}function Q2(u){return`${u.月名}${u.日名}`}function m1(u,n,t){const e=t;if(!u)return{斗降日:{命中:!1,名称:"无",依据:[],来源显示:""},本命下日:`${e}年生人`,本命星官:"配置错误"};const i=[];!n.是否闰月&&u.二十八章经[n.月]?.includes(n.日)&&i.push({来源:Kn,规则:Q2(n)}),u.真经注[n.月]?.includes(n.日)&&i.push({来源:d2,规则:`${n.是否闰月?"闰月从前月·":""}${Q2(n)}`}),u.真经注每月.includes(n.日)&&i.push({来源:d2,规则:`每月${n.日名}`}),u.真经注干支日.includes(t)&&i.push({来源:d2,规则:`${t}日`});const F=[...new Set(i.map(g=>g.来源))].join("、"),r=e[1];return{斗降日:{命中:i.length>0,名称:i.length>0?"北斗下降":"无",依据:i,来源显示:F},本命下日:`${e}年生人`,本命星官:u.出生年支本命星官[r]}}function n5(u){return u.日===1?u.月名:u.日名}function u5(u,n,t=[]){const e=[...u,...n,...t],i=e.length<=3?e:e.slice(0,2);return{显示事件:i,其余事件数:Math.max(0,e.length-i.length)}}function t5(u,n,t,e){return Array.from({length:g1(u,n)},(i,a)=>{const F=a+1,r=C1(u,n+1,F),g=f0(r),E=l1(r),h=y1(t,g).map(y=>y.名称),D=O0(r).日柱,c=m1(e??null,g,D).斗降日.命中?["斗降"]:[],x=u5(E,h,c);return{公历日:F,农历:g,农历摘要:n5(g),传统节日:E,神圣纪念:h,斗降:c,...x}})}const e5={enableHighAccuracy:!1,timeout:1e4,maximumAge:3e5},i5={enableHighAccuracy:!0,timeout:15e3,maximumAge:0};function s5(){return typeof navigator>"u"?void 0:navigator.geolocation}function a5(){return typeof window>"u"||window.isSecureContext}function F5(u){return u===1||u===2||u===3?u:null}function r5(u){return u===1?"已拒绝":u===2?"不可用":u===3?"超时":"未知错误"}function o5(u,n){typeof console>"u"||console.warn("[定位诊断] GeolocationPositionError",{code:u.code,message:u.message??"",attempt:n})}function S1(){const u=typeof window<"u",n=typeof navigator<"u";return{HTTPS:!u||window.isSecureContext&&window.location.protocol==="https:",支持定位:n&&!!navigator.geolocation,页面可见:typeof document>"u"||document.visibilityState==="visible"}}function g5(u=s5(),n=a5()){return n?u?new Promise(t=>{let e=!1;const i=F=>{e||(e=!0,t(F))},a=(F,r)=>{try{u.getCurrentPosition(({coords:g})=>{if(!Number.isFinite(g.longitude)||g.longitude<-180||g.longitude>180||!Number.isFinite(g.latitude)||g.latitude<-90||g.latitude>90){i({成功:!1,原因:"坐标无效",错误码:null,尝试次数:F});return}i({成功:!0,经度:g.longitude,纬度:g.latitude,精度米:Number.isFinite(g.accuracy)?g.accuracy:0,尝试次数:F})},g=>{if(o5(g,F),F===1&&(g.code===2||g.code===3)){a(2,i5);return}i({成功:!1,原因:r5(g.code),错误码:F5(g.code),尝试次数:F})},r)}catch{i({成功:!1,原因:"未知错误",错误码:null,尝试次数:F})}};a(1,e5)}):Promise.resolve({成功:!1,原因:"不支持",错误码:null,尝试次数:0}):Promise.resolve({成功:!1,原因:"非安全连接",错误码:null,尝试次数:0})}function w1(u){switch(u){case"已拒绝":return"Safari未允许定位。请检查iPhone 设置 → 隐私与安全性 → 定位服务，以及当前网站的位置权限。";case"不可用":return"Safari暂时无法取得位置，已自动重试；请保持页面可见后重新获取。";case"超时":return"定位超时，已自动重试；请保持页面可见后重新获取。";case"不支持":return"当前浏览器不支持定位。";case"非安全连接":return"当前页面不是安全连接，无法使用定位。";default:return"暂时无法取得位置，请重新获取。"}}const p1=`# 季罗睺日
# 格式：季节：罗睺日
# 季节边界按立春、立夏、立秋、立冬。

春季：乙卯日
夏季：丙午日
秋季：庚申日
冬季：辛酉日
`,z1=`# 年罗睺日
# 格式：年支：罗睺日
# 本文件只负责“年罗睺日”。
# 戌年年罗睺日按“丁未日”执行；“辛未日”属于另一条“逐年杀风水师日”规则，两条规则独立生效。

子年：癸酉日
丑年：甲戌日
寅年：丁亥日
卯年：甲子日
辰年：乙丑日
巳年：甲寅日
午年：丁卯日
未年：甲辰日
申年：己巳日
酉年：甲午日
戌年：丁未日
亥年：甲申日
`,N1=`# 北斗下界游行之日
# 来源：徐道龄集注《太上玄灵北斗本命延生真经注》。
# 本来源明确“闰月从前月”。

正月：廿五、廿六
二月：初二、初七、廿三、廿六
三月：廿六
四月：十七、廿七
五月：初五、十三、二十
六月：初四、初八
七月：初四、廿四
八月：初三、十一、十九、廿七
九月：初三、十八
十月：初十、廿六
十一月：初一、初九、十七、廿五
十二月：二十

每月：初三、廿七
干支日：甲子、庚申
闰月：从前月
`,Y1=`# 斗降日固定农历日期
# 来源：《太上北斗二十八章经》“逐季逐月下降”一段。
# 原文未在本段明确闰月规则，故闰月不擅自套用本表。

正月：廿五、廿六
二月：初三、初七
三月：廿三、廿六
四月：十七、廿七
五月：初五、十三、二十
六月：初四、初八
七月：初四、廿四
八月：十一、十九、廿七
九月：初三、十八
十月：初十、廿六
十一月：初一、初九、十七、廿五
十二月：二十
`,H2=`# 十二天神日吉凶
# 来源：《钦定协纪辨方书》卷七“黄黑道十二神”。
# 规则：天罡加月建，按节气月起十二神；同组月份的青龙起日相同。

寅申月：子日
卯酉月：寅日
辰戌月：辰日
巳亥月：午日
子午月：申日
丑未月：戌日

值神：青龙、明堂、天刑、朱雀、金匮、天德、白虎、玉堂、天牢、玄武、司命、勾陈
吉：青龙、明堂、金匮、天德、玉堂、司命
凶：天刑、朱雀、白虎、天牢、玄武、勾陈
`,k2=`# 日宜忌用事规则
# 主来源：《钦定协纪辨方书》卷十一“通书选择六十事”。
# 月建、月破、月厌、月刑、月害、劫煞、灾煞、月煞均按项目节气月在具体交节时刻切换。
# 仅输出当前已自主计算且单侧明确命中的事项；宜忌并见而无明确制化依据时保守不下结论。
# 月规则格式：月支：月建、月破、月厌、月刑、月害、劫煞、灾煞、月煞所临日支。

寅月：月建寅、月破申、月厌戌、月刑巳、月害巳、劫煞亥、灾煞子、月煞丑
卯月：月建卯、月破酉、月厌酉、月刑子、月害辰、劫煞申、灾煞酉、月煞戌
辰月：月建辰、月破戌、月厌申、月刑辰、月害卯、劫煞巳、灾煞午、月煞未
巳月：月建巳、月破亥、月厌未、月刑申、月害寅、劫煞寅、灾煞卯、月煞辰
午月：月建午、月破子、月厌午、月刑午、月害丑、劫煞亥、灾煞子、月煞丑
未月：月建未、月破丑、月厌巳、月刑丑、月害子、劫煞申、灾煞酉、月煞戌
申月：月建申、月破寅、月厌辰、月刑寅、月害亥、劫煞巳、灾煞午、月煞未
酉月：月建酉、月破卯、月厌卯、月刑酉、月害戌、劫煞寅、灾煞卯、月煞辰
戌月：月建戌、月破辰、月厌寅、月刑未、月害酉、劫煞亥、灾煞子、月煞丑
亥月：月建亥、月破巳、月厌丑、月刑亥、月害申、劫煞申、灾煞酉、月煞戌
子月：月建子、月破午、月厌子、月刑卯、月害未、劫煞巳、灾煞午、月煞未
丑月：月建丑、月破未、月厌亥、月刑戌、月害午、劫煞寅、灾煞卯、月煞辰

# 以下完整保存卷十一用事宜神、忌神表。

祭祀宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、天巫、开日、普护、福生、圣心、益后、续世
祭祀忌：天狗、寅日
祈福宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、天巫、开日、普护、福生、圣心、益后、续世
祈福忌：月建、月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、游祸、天吏、四废
求嗣宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、开日、益后、续世
求嗣忌：月建、月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、游祸、天吏、四废
上册受封宜：天德、月德、天德合、月德合、天赦、天愿、临日、福德、开日
上册受封忌：月建、月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、往亡
上表章宜：天德、月德、天德合、月德合、月空、天赦、天愿、临日、福德、开日、解神
上表章忌：月建、月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、往亡
袭爵受封宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、王日、建日、吉期、天喜、开日、官日、守日、相日
袭爵受封忌：月破、平日、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废
会亲友宜：天德、月德、天德合、月德合、天恩、天赦、天愿、月恩、四相、时德、王日、民日、三合、福德、天喜、开日、六合、五合
会亲友忌：月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、五离、酉日
入学宜：成日、开日
入学忌：无
冠带宜：定日
冠带忌：月破、平日、收日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、丑日
出行宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、王日、驿马、天马、建日、吉期、天喜、开日
出行忌：月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、天贼、四废、五墓、往亡、巳日、旬空、路空
上官赴任宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、王日、官日、守日、相日、临日、建日、吉期、天喜、开日
上官赴任忌：月破、平日、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、往亡
临政亲民宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、王日、官日、守日、相日、临日、建日、吉期、天喜、开日、六仪
临政亲民忌：月破、平日、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、往亡
结婚姻宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、民日、三合、天喜、六合、五合
结婚姻忌：月建、月破、平日、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、四忌、四穷、五墓、五离、八专
纳采问名宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、民日、三合、天喜
纳采问名忌：月建、月破、平日、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、四忌、四穷、五墓、五离、八专
嫁娶宜：天德、月德、天德合、月德合、天赦、天愿、三合、天喜、六合、不将
嫁娶忌：月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、厌对、大时、天吏、四废、四忌、四穷、五墓、往亡、八专、亥日
进人口宜：天愿、民日、三合、满日、收日、六合、天仓
进人口忌：月破、平日、死神、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、四穷、五墓、九空、往亡
移徙宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、民日、驿马、天马、成日、开日
移徙忌：月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、归忌、往亡
远回宜：无
远回忌：月厌、归忌
安床宜：危日
安床忌：月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、申日
解除宜：天德、月德、天德合、月德合、天赦、月恩、四相、时德、除日、开日、解神、除神
解除忌：月建、平日、死神、收日、劫煞、灾煞、月煞、月刑、月厌、大时、游祸、天吏、死气、四废、五墓
沐浴宜：除日、解神、除神、亥日、子日
沐浴忌：伏日、社日
剃头宜：除日、解神、除神
剃头忌：月建、月破、劫煞、灾煞、月煞、月刑、月厌、丁日、每月十二日、每月十五日
整手足甲宜：除日、解神、除神
整手足甲忌：月建、月破、劫煞、灾煞、月煞、月刑、月厌、每月一日、每月六日、每月十五日、每月十九日、每月二十一日、每月二十三日
求医治病宜：天德、月德、天德合、月德合、天赦、月恩、四相、时德、天后、除日、破日、天医、开日、解神、除神
求医治病忌：月建、平日、死神、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、游祸、天吏、死气、四废、五墓、往亡、未日、每月十五日、朔日、弦日、望日
疗目宜：无
疗目忌：闭日
针刺宜：无
针刺忌：血支、血忌
裁衣宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、王日、三合、满日、开日、复日
裁衣忌：月破、平日、收日、劫煞、灾煞、月煞、月刑、月厌、四废
筑堤防宜：成日、闭日
筑堤防忌：土府、月破、平日、收日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、土符、地囊、土王用事后
修造动土宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、三合、开日
修造动土忌：月建、土府、月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、土符、地囊、土王用事后
竖柱上梁宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、三合、开日
竖柱上梁忌：月建、月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓
修仓库宜：天德、月德、天德合、月德合、天赦、天愿、三合、满日、收日、母仓、六合、五富、天仓、四相、时德、开日
修仓库忌：月建、土府、月破、大耗、平日、劫煞、灾煞、月煞、月虚、月刑、月害、月厌、大时、天吏、小耗、天贼、四耗、四废、四穷、五虚、九空、土符、地囊、土王用事后
鼓铸宜：无
鼓铸忌：月破、平日、收日、劫煞、灾煞、月煞、月刑、月厌、四废、九焦
苫盖宜：无
苫盖忌：天火、午日
经络宜：天愿、三合、满日、六合、五富
经络忌：月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、庚日
酝酿宜：天愿、三合、六合、五富
酝酿忌：月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、辛日
开市宜：天愿、民日、满日、成日、开日、五富
开市忌：月破、大耗、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、小耗、四耗、四废、四穷、五墓、九空
立券宜：天愿、民日、三合、满日、六合、五富、五合
立券忌：月破、大耗、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、小耗、四耗、四废、四穷、五墓、九空、五离
交易宜：天愿、民日、三合、满日、六合、五富、五合
交易忌：月破、大耗、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、小耗、四耗、四废、四穷、五墓、九空、五离
纳财宜：母仓、天愿、月恩、四相、时德、民日、三合、满日、收日、六合、五富、天仓
纳财忌：月破、大耗、平日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、小耗、四耗、四废、四穷、九空
开仓库宜：月恩、四相、时德、满日、五富
开仓库忌：月建、月破、大耗、平日、收日、闭日、劫煞、灾煞、月煞、月虚、月刑、月害、月厌、大时、天吏、小耗、天贼、四耗、四废、四穷、五虚、九空、甲日
出货财宜：月恩、四相、时德、满日、五富
出货财忌：月建、月破、大耗、平日、收日、闭日、劫煞、灾煞、月煞、月虚、月刑、月害、月厌、大时、天吏、小耗、天贼、四耗、四废、四穷、五虚、九空、甲日
修置产室宜：开日
修置产室忌：月建、土府、月破、平日、死神、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、死气、四废、五墓、土符、地囊、土王用事后
开渠穿井宜：开日
开渠穿井忌：土府、月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、四废、土符、地囊、土王用事后、壬日、卯日
安碓硙宜：三合、开日
安碓硙忌：土府、月破、劫煞、灾煞、月煞、月刑、月厌、四废、土符、地囊、土王用事后
补垣塞穴宜：满日、闭日
补垣塞穴忌：月破、劫煞、灾煞、月煞、月刑、月厌、四废、九坎、土府、土符、地囊、土王用事后
扫舍宇宜：除日、除神
扫舍宇忌：无
修饰垣墙宜：平日
修饰垣墙忌：土府、月破、劫煞、灾煞、月煞、月刑、月厌、四废、土符、地囊、土王用事后
平治道涂宜：平日
平治道涂忌：土府、月厌、土符、地囊、土王用事后
破屋坏垣宜：月破
破屋坏垣忌：月建、土府、劫煞、灾煞、月煞、月刑、月厌、土符、地囊、土王用事后
伐木宜：立冬后立春前、危日、午日、申日
伐木忌：月建、月破、月厌、生气
捕捉宜：执日、收日
捕捉忌：往亡
畋猎宜：霜降后立春前、执日、危日、收日
畋猎忌：天德、月德、天德合、月德合、天赦、生气、往亡
取鱼宜：雨水后立夏前、执日、危日、收日
取鱼忌：天德、月德、天德合、月德合、天赦、生气、招摇、咸池、八风、九坎、往亡、触水龙
乘船渡水宜：无
乘船渡水忌：招摇、咸池、八风、九坎、触水龙
栽种宜：天德、月德、天德合、月德合、天赦、母仓、天愿、月恩、四相、时德、民日、开日、五富
栽种忌：月建、土府、月破、平日、死神、劫煞、灾煞、月煞、月刑、月厌、地火、大时、天吏、死气、四废、五墓、九焦、土符、地囊、乙日、土王用事后
牧养宜：天德、月德、天德合、月德合、天赦、母仓、天愿、月恩、四相、时德、民日、开日、五富
牧养忌：月破、平日、死神、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、五墓
纳畜宜：天德、月德、天德合、月德合、天赦、母仓、天愿、民日、三合、收日、六合、五富、天仓
纳畜忌：月破、平日、死神、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、五墓
破土宜：鸣吠、鸣吠对
破土忌：月建、土府、月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、五墓、土符、地囊、复日、重日、土王用事后
安葬宜：天德、月德、天德合、月德合、天赦、天愿、六合、鸣吠
安葬忌：月建、月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、四忌、四穷、五墓、复日、重日
启攒宜：鸣吠对
启攒忌：月建、月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、五墓、复日、重日
`,M1=`# 时辰吉凶
# 来源规则：《玉匣记·诸日起吉时歌》
# 本配置用于十二时辰值神与基础吉凶判断。

# 青龙起时
寅日、申日：子时
卯日、酉日：寅时
辰日、戌日：辰时
巳日、亥日：午时
子日、午日：申时
丑日、未日：戌时

# 十二值神顺序
值神：青龙、明堂、天刑、朱雀、金匮、天德、白虎、玉堂、天牢、玄武、司命、勾陈

# 吉凶
吉：青龙、明堂、金匮、天德、玉堂、司命
凶：天刑、朱雀、白虎、天牢、玄武、勾陈
`,b1=`# 时辰宜忌
# 主来源：《钦定协纪辨方书》卷十一“用事”，简体字按项目格式统一。
# 说明：完整保存通书六十事；只有当前时辰实际命中且资料可直接对应的条件才会显示。
# “无”表示原条目没有单列这一侧，不代表脱离其他规则后当然吉利。

祭祀宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、天巫、开日、普护、福生、圣心、益后、续世
祭祀忌：天狗、寅日
祈福宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、天巫、开日、普护、福生、圣心、益后、续世
祈福忌：月建、月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、游祸、天吏、四废
求嗣宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、开日、益后、续世
求嗣忌：月建、月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、游祸、天吏、四废
上册受封宜：天德、月德、天德合、月德合、天赦、天愿、临日、福德、开日
上册受封忌：月建、月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、往亡
上表章宜：天德、月德、天德合、月德合、月空、天赦、天愿、临日、福德、开日、解神
上表章忌：月建、月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、往亡
袭爵受封宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、王日、建日、吉期、天喜、开日、官日、守日、相日
袭爵受封忌：月破、平日、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废
会亲友宜：天德、月德、天德合、月德合、天恩、天赦、天愿、月恩、四相、时德、王日、民日、三合、福德、天喜、开日、六合、五合
会亲友忌：月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、五离、酉日
入学宜：成日、开日
入学忌：无
冠带宜：定日
冠带忌：月破、平日、收日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、丑日
出行宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、王日、驿马、天马、建日、吉期、天喜、开日
出行忌：月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、天贼、四废、五墓、往亡、巳日、旬空、路空
上官赴任宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、王日、官日、守日、相日、临日、建日、吉期、天喜、开日
上官赴任忌：月破、平日、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、往亡
临政亲民宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、王日、官日、守日、相日、临日、建日、吉期、天喜、开日、六仪
临政亲民忌：月破、平日、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、往亡
结婚姻宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、民日、三合、天喜、六合、五合
结婚姻忌：月建、月破、平日、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、四忌、四穷、五墓、五离、八专
纳采问名宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、民日、三合、天喜
纳采问名忌：月建、月破、平日、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、四忌、四穷、五墓、五离、八专
嫁娶宜：天德、月德、天德合、月德合、天赦、天愿、三合、天喜、六合、不将
嫁娶忌：月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、厌对、大时、天吏、四废、四忌、四穷、五墓、往亡、八专、亥日
进人口宜：天愿、民日、三合、满日、收日、六合、天仓
进人口忌：月破、平日、死神、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、四穷、五墓、九空、往亡
移徙宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、民日、驿马、天马、成日、开日
移徙忌：月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、归忌、往亡
远回宜：无
远回忌：月厌、归忌
安床宜：危日
安床忌：月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、申日
解除宜：天德、月德、天德合、月德合、天赦、月恩、四相、时德、除日、开日、解神、除神
解除忌：月建、平日、死神、收日、劫煞、灾煞、月煞、月刑、月厌、大时、游祸、天吏、死气、四废、五墓
沐浴宜：除日、解神、除神、亥日、子日
沐浴忌：伏日、社日
剃头宜：除日、解神、除神
剃头忌：月建、月破、劫煞、灾煞、月煞、月刑、月厌、丁日、每月十二日、每月十五日
整手足甲宜：除日、解神、除神
整手足甲忌：月建、月破、劫煞、灾煞、月煞、月刑、月厌、每月一日、每月六日、每月十五日、每月十九日、每月二十一日、每月二十三日
求医治病宜：天德、月德、天德合、月德合、天赦、月恩、四相、时德、天后、除日、破日、天医、开日、解神、除神
求医治病忌：月建、平日、死神、收日、满日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、游祸、天吏、死气、四废、五墓、往亡、未日、每月十五日、朔日、弦日、望日
疗目宜：无
疗目忌：闭日
针刺宜：无
针刺忌：血支、血忌
裁衣宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、王日、三合、满日、开日、复日
裁衣忌：月破、平日、收日、劫煞、灾煞、月煞、月刑、月厌、四废
筑堤防宜：成日、闭日
筑堤防忌：土府、月破、平日、收日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、土符、地囊、土王用事后
修造动土宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、三合、开日
修造动土忌：月建、土府、月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓、土符、地囊、土王用事后
竖柱上梁宜：天德、月德、天德合、月德合、天赦、天愿、月恩、四相、时德、三合、开日
竖柱上梁忌：月建、月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、大时、天吏、四废、五墓
修仓库宜：天德、月德、天德合、月德合、天赦、天愿、三合、满日、收日、母仓、六合、五富、天仓、四相、时德、开日
修仓库忌：月建、土府、月破、大耗、平日、劫煞、灾煞、月煞、月虚、月刑、月害、月厌、大时、天吏、小耗、天贼、四耗、四废、四穷、五虚、九空、土符、地囊、土王用事后
鼓铸宜：无
鼓铸忌：月破、平日、收日、劫煞、灾煞、月煞、月刑、月厌、四废、九焦
苫盖宜：无
苫盖忌：天火、午日
经络宜：天愿、三合、满日、六合、五富
经络忌：月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、庚日
酝酿宜：天愿、三合、六合、五富
酝酿忌：月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、辛日
开市宜：天愿、民日、满日、成日、开日、五富
开市忌：月破、大耗、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、小耗、四耗、四废、四穷、五墓、九空
立券宜：天愿、民日、三合、满日、六合、五富、五合
立券忌：月破、大耗、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、小耗、四耗、四废、四穷、五墓、九空、五离
交易宜：天愿、民日、三合、满日、六合、五富、五合
交易忌：月破、大耗、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、小耗、四耗、四废、四穷、五墓、九空、五离
纳财宜：母仓、天愿、月恩、四相、时德、民日、三合、满日、收日、六合、五富、天仓
纳财忌：月破、大耗、平日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、小耗、四耗、四废、四穷、九空
开仓库宜：月恩、四相、时德、满日、五富
开仓库忌：月建、月破、大耗、平日、收日、闭日、劫煞、灾煞、月煞、月虚、月刑、月害、月厌、大时、天吏、小耗、天贼、四耗、四废、四穷、五虚、九空、甲日
出货财宜：月恩、四相、时德、满日、五富
出货财忌：月建、月破、大耗、平日、收日、闭日、劫煞、灾煞、月煞、月虚、月刑、月害、月厌、大时、天吏、小耗、天贼、四耗、四废、四穷、五虚、九空、甲日
修置产室宜：开日
修置产室忌：月建、土府、月破、平日、死神、收日、闭日、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、死气、四废、五墓、土符、地囊、土王用事后
开渠穿井宜：开日
开渠穿井忌：土府、月破、平日、收日、闭日、劫煞、灾煞、月煞、月刑、月厌、四废、土符、地囊、土王用事后、壬日、卯日
安碓硙宜：三合、开日
安碓硙忌：土府、月破、劫煞、灾煞、月煞、月刑、月厌、四废、土符、地囊、土王用事后
补垣塞穴宜：满日、闭日
补垣塞穴忌：月破、劫煞、灾煞、月煞、月刑、月厌、四废、九坎、土府、土符、地囊、土王用事后
扫舍宇宜：除日、除神
扫舍宇忌：无
修饰垣墙宜：平日
修饰垣墙忌：土府、月破、劫煞、灾煞、月煞、月刑、月厌、四废、土符、地囊、土王用事后
平治道涂宜：平日
平治道涂忌：土府、月厌、土符、地囊、土王用事后
破屋坏垣宜：月破
破屋坏垣忌：月建、土府、劫煞、灾煞、月煞、月刑、月厌、土符、地囊、土王用事后
伐木宜：立冬后立春前、危日、午日、申日
伐木忌：月建、月破、月厌、生气
捕捉宜：执日、收日
捕捉忌：往亡
畋猎宜：霜降后立春前、执日、危日、收日
畋猎忌：天德、月德、天德合、月德合、天赦、生气、往亡
取鱼宜：雨水后立夏前、执日、危日、收日
取鱼忌：天德、月德、天德合、月德合、天赦、生气、招摇、咸池、八风、九坎、往亡、触水龙
乘船渡水宜：无
乘船渡水忌：招摇、咸池、八风、九坎、触水龙
栽种宜：天德、月德、天德合、月德合、天赦、母仓、天愿、月恩、四相、时德、民日、开日、五富
栽种忌：月建、土府、月破、平日、死神、劫煞、灾煞、月煞、月刑、月厌、地火、大时、天吏、死气、四废、五墓、九焦、土符、地囊、乙日、土王用事后
牧养宜：天德、月德、天德合、月德合、天赦、母仓、天愿、月恩、四相、时德、民日、开日、五富
牧养忌：月破、平日、死神、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、五墓
纳畜宜：天德、月德、天德合、月德合、天赦、母仓、天愿、民日、三合、收日、六合、五富、天仓
纳畜忌：月破、平日、死神、劫煞、灾煞、月煞、月刑、月害、月厌、大时、天吏、四废、五墓
破土宜：鸣吠、鸣吠对
破土忌：月建、土府、月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、五墓、土符、地囊、复日、重日、土王用事后
安葬宜：天德、月德、天德合、月德合、天赦、天愿、六合、鸣吠
安葬忌：月建、月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、四忌、四穷、五墓、复日、重日
启攒宜：鸣吠对
启攒忌：月建、月破、平日、收日、劫煞、灾煞、月煞、月刑、月害、月厌、四废、五墓、复日、重日
`,T1=`# 时辰神煞
# 主来源：《钦定协纪辨方书》卷七、卷三十二
# 说明：日柱仍在00:00换日；夜子、早子分别随各自日柱计算。

# 日时关系
六冲：子午、丑未、寅申、卯酉、辰戌、巳亥
六合：子丑、寅亥、卯戌、辰酉、巳申、午未
六害：子未、丑午、寅巳、卯辰、申亥、酉戌
相刑：子刑卯、卯刑子、寅刑巳、巳刑申、申刑寅、丑刑戌、戌刑未、未刑丑
自刑：辰、午、酉、亥

# 贵人、喜神、日禄
天乙贵人·甲戊庚日：丑时、未时
天乙贵人·乙己日：子时、申时
天乙贵人·丙丁日：亥时、酉时
天乙贵人·壬癸日：卯时、巳时
天乙贵人·辛日：寅时、午时

天官贵人·甲日：酉时
天官贵人·乙日：申时
天官贵人·丙日：子时
天官贵人·丁日：亥时
天官贵人·戊日：卯时
天官贵人·己日：寅时
天官贵人·庚日：午时
天官贵人·辛日：巳时
天官贵人·壬日：丑时、未时
天官贵人·癸日：辰时、戌时

福星贵人·甲日：寅时
福星贵人·乙日：丑时、亥时
福星贵人·丙日：子时、戌时
福星贵人·丁日：酉时
福星贵人·戊日：申时
福星贵人·己日：未时
福星贵人·庚日：午时
福星贵人·辛日：巳时
福星贵人·壬日：辰时
福星贵人·癸日：卯时

喜神·甲己日：寅时
喜神·乙庚日：戌时
喜神·丙辛日：申时
喜神·丁壬日：午时
喜神·戊癸日：辰时

日禄·甲日：寅时
日禄·乙日：卯时
日禄·丙戊日：巳时
日禄·丁己日：午时
日禄·庚日：申时
日禄·辛日：酉时
日禄·壬日：亥时
日禄·癸日：子时

日马·申子辰日：寅时
日马·寅午戌日：申时
日马·巳酉丑日：亥时
日马·亥卯未日：巳时

# 凶煞
五不遇：甲日庚午时、乙日辛巳时、丙日壬辰时、丁日癸卯时、戊日甲寅时、己日乙丑时、庚日丙子时、辛日丁酉时、壬日戊申时、癸日己未时
旬空·甲子旬：戌时、亥时
旬空·甲戌旬：申时、酉时
旬空·甲申旬：午时、未时
旬空·甲午旬：辰时、巳时
旬空·甲辰旬：寅时、卯时
旬空·甲寅旬：子时、丑时
路空·甲己日：申时、酉时
路空·乙庚日：午时、未时
路空·丙辛日：辰时、巳时
路空·丁壬日：寅时、卯时
路空·戊癸日：子时、丑时、戌时、亥时
`,G1=`# 月罗睺日
# 本规则按农历月份。
# 格式：农历月：日支

正月：亥日
二月：子日
三月：丑日
四月：寅日
五月：卯日
六月：辰日
七月：巳日
八月：午日
九月：未日
十月：申日
十一月：酉日
十二月：戌日
`,Z1=`# 七元本命星官
# 来源：《太上玄灵北斗本命延生真经注》。
# 映射键是出生年份的地支，不是出生日支，也不是另行按当天日支解释。
# 页面先由当天日干支确定同干支的“XX年生人”，再取该出生年支映射星官。

子：北斗第一阳明贪狼太星君
丑亥：北斗第二阴精巨门元星君
寅戌：北斗第三真人禄存贞星君
卯酉：北斗第四玄冥文曲纽星君
辰申：北斗第五丹元廉贞罡星君
巳未：北斗第六北极武曲纪星君
午：北斗第七天关破军关星君
`,H1=`# 杀师时
# 格式：日支：时支
# 所有时辰统一使用系统最终时辰：定位成功优先真太阳时，定位失败使用北京时间。

子日：丑时、午时
丑日：巳时、亥时
寅日：寅时、午时
卯日：辰时、戌时
辰日：巳时、丑时
巳日：辰时、戌时
午日：卯时、申时
未日：午时、辰时
申日：戌时、丑时
酉日：子时、午时
戌日：卯时、午时
亥日：辰时、卯时
`,O2=`# 数据名称：现代黄历时辰宜忌
# 数据来源：lunar-typescript 1.8.6 时辰宜忌数据
# 上游说明：数据源自2345历史黄历数据
# 使用范围：仅用于“现代黄历宜忌体系”的时辰宜忌
# 不用于：日宜忌、日吉凶、古籍神煞等
# 上游项目：6tail/lunar-typescript
# 许可：MIT

甲子日 子时：宜：祈福、订婚、嫁娶、开市、安葬；忌：造船、乘船
甲子日 丑时：宜：祈福、求嗣、出行、求财、嫁娶、安葬、祭祀；忌：无
甲子日 寅时：宜：祭祀、祈福、酬神、订婚、嫁娶、出行、求财、入宅、安葬、赴任；忌：上梁、盖屋、入殓
甲子日 卯时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬；忌：赴任、出行
甲子日 辰时：宜：订婚、嫁娶、求财、开市、交易、安床；忌：赴任、修造、移徙、出行、词讼、祈福、求嗣、乘船
甲子日 巳时：宜：祈福、求嗣、订婚、嫁娶、入宅、开市、交易；忌：开光、修造、安葬、赴任、出行
甲子日 午时：宜：无；忌：诸事不宜
甲子日 未时：宜：祭祀、祈福、酬神、求财、见贵、订婚、嫁娶、修造、安葬、入宅；忌：赴任、出行
甲子日 申时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神
甲子日 酉时：宜：求财、见贵、酬神、修造、盖屋、移徙、作灶、安床、入宅、开市；忌：祭祀、祈福、斋醮、开光、赴任、出行
甲子日 戌时：宜：出行、求财、见贵、嫁娶、进人口、移徙、安葬；忌：赴任、词讼
甲子日 亥时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祈福；忌：赴任、出行、求财
乙丑日 子时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：上梁、盖屋、入殓
乙丑日 丑时：宜：祭祀、祈福、酬神、订婚、嫁娶、出行、求财、入宅、安葬；忌：造船、乘船
乙丑日 寅时：宜：订婚、嫁娶、修造、入宅、开市、交易、安葬；忌：祈福、求嗣
乙丑日 卯时：宜：赴任、出行、求财、见贵、订婚、嫁娶、入宅、开市、安葬、祈福、求嗣、祭祀；忌：无
乙丑日 辰时：宜：无；忌：修造、动土
乙丑日 巳时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、修造、盖屋、移徙；忌：赴任、出行
乙丑日 午时：宜：求嗣、嫁娶、入宅、开市、交易、安葬、求财；忌：赴任、修造、移徙、出行、词讼、祭祀、祈福、斋醮、开光
乙丑日 未时：宜：无；忌：诸事不宜
乙丑日 申时：宜：祈福、求嗣、出行、求财、嫁娶、赴任、见贵；忌：开光、修造、安葬
乙丑日 酉时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行、修造
乙丑日 戌时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、修造、安葬；忌：上梁、盖屋、入殓、赴任、出行
乙丑日 亥时：宜：祭祀、祈福、求嗣、开市、订婚、嫁娶、入宅、安葬、修造、赴任、出行、见贵、求财；忌：无
丙寅日 子时：宜：赴任、出行、求财、见贵、祭祀、酬神；忌：祈福、求嗣
丙寅日 丑时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、赴任、出行、求财、见贵、嫁娶、进人口；忌：祭祀、祈福、斋醮、酬神
丙寅日 寅时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬、祈福；忌：赴任、词讼、修造、动土
丙寅日 卯时：宜：赴任、出行、求财、嫁娶、修造、移徙、开市、安葬；忌：无
丙寅日 辰时：宜：订婚、嫁娶、开市、安葬；忌：赴任、出行、祭祀、祈福、斋醮、开光
丙寅日 巳时：宜：求财、见贵、订婚、嫁娶、入宅、开市、安葬；忌：赴任、出行、祭祀、祈福、斋醮、开光
丙寅日 午时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：无
丙寅日 未时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、祭祀、祈福、求嗣、斋醮、订婚、嫁娶、出行；忌：无
丙寅日 申时：宜：无；忌：诸事不宜
丙寅日 酉时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、入宅、安葬、祭祀；忌：赴任、出行、修造、动土
丙寅日 戌时：宜：订婚、嫁娶、出行、求财、开市、交易、安床、作灶、祭祀；忌：祈福、求嗣、乘船
丙寅日 亥时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、祭祀；忌：赴任、出行、修造、开光
丁卯日 子时：宜：作灶、祭祀、祈福、斋醮、酬神；忌：赴任、出行、修造、动土
丁卯日 丑时：宜：见贵、求财、嫁娶、进人口、移徙、安葬、祭祀、祈福、求嗣、斋醮、订婚；忌：赴任、出行、修造
丁卯日 寅时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬、求财、见贵；忌：祭祀、祈福、斋醮、开光、赴任、出行
丁卯日 卯时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、求嗣、订婚、嫁娶；忌：祭祀、祈福、斋醮、开光、赴任、出行
丁卯日 辰时：宜：祭祀、祈福、求嗣、斋醮、订婚、嫁娶、安葬；忌：赴任、出行
丁卯日 巳时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祈福、订婚、赴任、出行、见贵、求财；忌：无
丁卯日 午时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：修造、动土
丁卯日 未时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、修造、入宅、安葬、祭祀；忌：无
丁卯日 申时：宜：入宅、修造、安葬、祭祀、斋醮、酬神；忌：祈福、求嗣
丁卯日 酉时：宜：无；忌：诸事不宜
丁卯日 戌时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、见贵；忌：赴任、修造、移徙、出行、词讼
丁卯日 亥时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、祭祀、见贵；忌：赴任、出行、修造、动土
戊辰日 子时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、修造、移徙、出行、词讼、祭祀、祈福、斋醮、开光
戊辰日 丑时：宜：酬神、求财、见贵、订婚、嫁娶、安葬；忌：赴任、出行、修造、动土、祭祀、祈福、斋醮、开光
戊辰日 寅时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、作灶、祭祀、祈福、斋醮、酬神、见贵；忌：赴任、出行
戊辰日 卯时：宜：求财、见贵；忌：赴任、出行、祭祀、祈福、斋醮、酬神
戊辰日 辰时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：上梁、盖屋、入殓、赴任、出行
戊辰日 巳时：宜：赴任、出行、求财、见贵、订婚、嫁娶、入宅、开市、盖屋、移徙、作灶、安床；忌：开光、修造、安葬
戊辰日 午时：宜：修造、安葬、出行、求财、嫁娶；忌：赴任、词讼、祈福、求嗣
戊辰日 未时：宜：祈福、求嗣、出行、入宅、嫁娶、修造、安葬、赴任、见贵、求财；忌：无
戊辰日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任、见贵；忌：修造、动土
戊辰日 酉时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神
戊辰日 戌时：宜：无；忌：诸事不宜
戊辰日 亥时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、见贵、求财、订婚、嫁娶、进人口；忌：祭祀、祈福、斋醮、开光、赴任、出行
己巳日 子时：宜：祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、修造、安葬、赴任；忌：无
己巳日 丑时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、修造、盖屋、移徙；忌：赴任、出行
己巳日 寅时：宜：赴任、出行、求财、见贵、祭祀、祈福、酬神；忌：上梁、盖屋、入殓
己巳日 卯时：宜：入宅、安葬、求财、嫁娶；忌：赴任、出行、修造、动土
己巳日 辰时：宜：作灶、修造、赴任、见贵、求财、出行、嫁娶、进人口、移徙、安葬；忌：祭祀、祈福、斋醮、酬神
己巳日 巳时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬、见贵、求财；忌：赴任、出行、修造、开光
己巳日 午时：宜：赴任、出行、求财、见贵、订婚、嫁娶、入宅、开市、安葬、祈福；忌：修造、动土
己巳日 未时：宜：祭祀、祈福、酬神、订婚、嫁娶、出行、求财、入宅、安葬、修造、盖屋、移徙、作灶、安床；忌：无
己巳日 申时：宜：求嗣、求财、嫁娶、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
己巳日 酉时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、开光、赴任、出行
己巳日 戌时：宜：祈福、订婚、嫁娶、开市、安葬；忌：赴任、出行、求财
己巳日 亥时：宜：无；忌：诸事不宜
庚午日 子时：宜：无；忌：诸事不宜
庚午日 丑时：宜：祈福、求嗣、出行、求财、嫁娶、安葬、祭祀；忌：无
庚午日 寅时：宜：订婚、嫁娶、出行、求财、开市、交易、安床、赴任、见贵；忌：祈福、求嗣
庚午日 卯时：宜：求嗣、订婚、嫁娶、修造、入宅、求财、开市、交易、安葬、赴任、出行、见贵；忌：祭祀、祈福、斋醮、酬神
庚午日 辰时：宜：祭祀、祈福、求嗣、斋醮、订婚、嫁娶、安葬；忌：赴任、修造、移徙、出行、词讼
庚午日 巳时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬、祈福；忌：赴任、出行、修造、动土
庚午日 午时：宜：酬神、订婚、嫁娶、求财、入宅、安葬、作灶；忌：祭祀、祈福、斋醮、开光、赴任、出行
庚午日 未时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、开光、赴任、出行
庚午日 申时：宜：赴任、出行、求财、见贵、订婚、嫁娶、入宅、开市、祈福；忌：开光、修造、安葬
庚午日 酉时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、赴任、出行、求财；忌：无
庚午日 戌时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：上梁、盖屋、入殓、赴任、出行
庚午日 亥时：宜：修造、入宅、安葬、见贵、嫁娶、进人口、移徙；忌：赴任、出行、求财
辛未日 子时：宜：嫁娶、移徙、入宅、开市、交易、修造、安葬；忌：赴任、词讼、祈福、求嗣
辛未日 丑时：宜：无；忌：诸事不宜
辛未日 寅时：宜：祈福、求嗣、出行、求财、嫁娶、安葬；忌：修造、动土
辛未日 卯时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神
辛未日 辰时：宜：入宅、修造、安葬、见贵、求财、嫁娶、进人口、移徙；忌：祭祀、祈福、斋醮、开光、赴任、出行
辛未日 巳时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、酬神、订婚、嫁娶、求财；忌：祭祀、祈福、斋醮、开光、赴任、出行
辛未日 午时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、祭祀；忌：赴任、修造、移徙、出行、词讼
辛未日 未时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：造船、乘船、赴任、出行、修造、动土
辛未日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、作灶、祭祀、赴任、见贵；忌：上梁、盖屋、入殓
辛未日 酉时：宜：入宅、安葬、求财、见贵、订婚、嫁娶；忌：赴任、出行、修造
辛未日 戌时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬、祭祀；忌：祈福、求嗣、乘船
辛未日 亥时：宜：祈福、求嗣、订婚、嫁娶、开市、交易、安床、盖屋、移徙、作灶；忌：赴任、出行、求财、开光、修造、安葬
壬申日 子时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：修造、动土
壬申日 丑时：宜：祈福、嫁娶、修造、造庙、作灶、入宅、安葬、赴任、见贵、求财、出行；忌：无
壬申日 寅时：宜：无；忌：诸事不宜
壬申日 卯时：宜：酬神、求财、见贵、订婚、嫁娶、修造、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
壬申日 辰时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀、赴任、见贵；忌：无
壬申日 巳时：宜：祈福、求嗣、出行、求财、嫁娶、安葬、祭祀；忌：无
壬申日 午时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：上梁、盖屋、入殓
壬申日 未时：宜：修造、入宅、安葬、祭祀、祈福、求嗣、斋醮、订婚、嫁娶、出行、赴任；忌：无
壬申日 申时：宜：嫁娶、入宅、开市、交易、安葬；忌：赴任、修造、移徙、出行、词讼、祈福、求嗣、乘船
壬申日 酉时：宜：祈福、求嗣、订婚、嫁娶、入宅、求财、开市、交易、安葬；忌：赴任、出行、修造、动土
壬申日 戌时：宜：作灶、祭祀、祈福、斋醮、酬神；忌：赴任、出行、求财、修造、动土
壬申日 亥时：宜：求财、见贵、订婚、嫁娶、入宅、开市、安葬；忌：赴任、出行、修造
癸酉日 子时：宜：求财、见贵、订婚、嫁娶、入宅、开市、安葬、求嗣、作灶；忌：祭祀、祈福、斋醮、开光、赴任、出行
癸酉日 丑时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行、修造、祭祀、祈福、斋醮、开光
癸酉日 寅时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬、赴任、见贵、出行、求财；忌：祭祀、祈福、斋醮、酬神
癸酉日 卯时：宜：无；忌：诸事不宜
癸酉日 辰时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：上梁、盖屋、入殓
癸酉日 巳时：宜：祈福、求嗣、出行、求财、嫁娶；忌：开光、修造、安葬
癸酉日 午时：宜：订婚、嫁娶、开市、安葬、修造；忌：祈福、求嗣、乘船
癸酉日 未时：宜：祭祀、祈福、斋醮、酬神、修造、作灶、见贵、求财、嫁娶、进人口、移徙、安葬；忌：赴任、出行
癸酉日 申时：宜：赴任、出行、求财、见贵、嫁娶、进人口、移徙、安葬；忌：祭祀、祈福、斋醮、酬神、修造、动土
癸酉日 酉时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、祈福、订婚、嫁娶、赴任、出行、求财；忌：造桥、乘船
癸酉日 戌时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：赴任、出行、祭祀、祈福、斋醮、开光
癸酉日 亥时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬、见贵、求财；忌：赴任、出行、修造、动土、祭祀、祈福、斋醮、开光
甲戌日 子时：宜：祈福、求嗣、订婚、嫁娶、入宅、求财、开市、交易、安葬；忌：赴任、修造、移徙、出行、词讼
甲戌日 丑时：宜：祭祀、祈福、酬神、求财、见贵、订婚、嫁娶、安葬；忌：赴任、出行、修造、动土
甲戌日 寅时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任、祭祀；忌：上梁、盖屋、入殓
甲戌日 卯时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、入宅、安葬；忌：赴任、出行、修造
甲戌日 辰时：宜：无；忌：诸事不宜
甲戌日 巳时：宜：盖屋、移徙、作灶、安床、入宅、开市、祭祀、祈福、出行、订婚、嫁娶；忌：开光、修造、安葬
甲戌日 午时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：赴任、词讼、修造、动土
甲戌日 未时：宜：祭祀、祈福、酬神、求财、见贵、订婚、嫁娶、修造、安葬、入宅；忌：赴任、出行
甲戌日 申时：宜：订婚、嫁娶、开市、安葬、赴任、出行、见贵、求财；忌：祭祀、祈福、斋醮、酬神
甲戌日 酉时：宜：赴任、出行、求财、见贵；忌：祭祀、祈福、斋醮、酬神
甲戌日 戌时：宜：祈福、订婚、嫁娶、移徙、开市、修造、入宅、安葬；忌：造船、乘船
甲戌日 亥时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祭祀、祈福、斋醮、酬神；忌：无
乙亥日 子时：宜：祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、修造、安葬、赴任；忌：上梁、盖屋、入殓
乙亥日 丑时：宜：祭祀、祈福、酬神、订婚、嫁娶、出行、求财、入宅、安葬、修造、盖屋、移徙、安床、赴任；忌：无
乙亥日 寅时：宜：订婚、嫁娶、求财、开市、交易、安床；忌：祈福、求嗣、赴任、修造、移徙、出行、词讼
乙亥日 卯时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：无
乙亥日 辰时：宜：作灶、祭祀、祈福、斋醮、酬神、赴任、见贵、求财、出行、嫁娶、进人口、移徙、安葬；忌：修造、动土
乙亥日 巳时：宜：无；忌：诸事不宜
乙亥日 午时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、订婚、见贵、求财；忌：祭祀、祈福、斋醮、开光、赴任、出行
乙亥日 未时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床、修造、盖屋、移徙、作灶；忌：祭祀、祈福、斋醮、开光、赴任、出行
乙亥日 申时：宜：赴任、出行、求财、见贵；忌：祭祀、祈福、斋醮、酬神、开光、修造、安葬
乙亥日 酉时：宜：无；忌：赴任、出行、求财
乙亥日 戌时：宜：订婚、嫁娶、开市、安葬；忌：上梁、盖屋、入殓、祭祀、祈福、斋醮、酬神
乙亥日 亥时：宜：祭祀、祈福、酬神、订婚、嫁娶、求财、入宅、安葬；忌：赴任、出行
丙子日 子时：宜：赴任、出行、求财、见贵、祭祀、酬神；忌：祈福、求嗣
丙子日 丑时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：无
丙子日 寅时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬、赴任、出行、见贵、求财；忌：祭祀、祈福、斋醮、酬神、修造、动土
丙子日 卯时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、见贵、求财、订婚、嫁娶、进人口；忌：赴任、出行
丙子日 辰时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行、祭祀、祈福、斋醮、开光
丙子日 巳时：宜：求财、见贵、订婚、嫁娶、入宅、开市、安葬；忌：赴任、出行、修造、动土、祭祀、祈福、斋醮、开光
丙子日 午时：宜：无；忌：诸事不宜
丙子日 未时：宜：无；忌：修造、动土、赴任、出行
丙子日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓
丙子日 酉时：宜：修造、入宅、安葬、祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、赴任；忌：无
丙子日 戌时：宜：见贵、求财、出行、嫁娶、进人口、移徙、安葬；忌：赴任、词讼、祈福、求嗣、乘船
丙子日 亥时：宜：求嗣、出行、求财、嫁娶；忌：祭祀、祈福、斋醮、酬神、开光、修造、安葬
丁丑日 子时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神、修造、动土
丁丑日 丑时：宜：赴任、出行、见贵、求财、嫁娶、进人口、移徙、安葬、祈福；忌：造船、乘船
丁丑日 寅时：宜：订婚、嫁娶、开市；忌：祭祀、祈福、斋醮、酬神、开光、修造、安葬
丁丑日 卯时：宜：酬神、修造、作灶；忌：赴任、出行、祭祀、祈福、斋醮、开光
丁丑日 辰时：宜：无；忌：修造、动土
丁丑日 巳时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、修造、盖屋、移徙、赴任；忌：无
丁丑日 午时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：上梁、盖屋、入殓、赴任、修造、移徙、出行、词讼
丁丑日 未时：宜：无；忌：诸事不宜
丁丑日 申时：宜：作灶、祭祀、斋醮、酬神、修造；忌：祈福、求嗣、赴任、出行、求财
丁丑日 酉时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：无
丁丑日 戌时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、安葬；忌：赴任、出行、修造、动土
丁丑日 亥时：宜：赴任、出行、求财、见贵、祭祀、祈福、酬神、修造、盖屋、移徙、作灶、安床、入宅、开市；忌：无
戊寅日 子时：宜：订婚、嫁娶、开市、安葬、见贵、求财；忌：祭祀、祈福、斋醮、开光、赴任、出行
戊寅日 丑时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、出行、求财、见贵、订婚、嫁娶；忌：祭祀、祈福、斋醮、酬神
戊寅日 寅时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祈福、订婚；忌：赴任、词讼
戊寅日 卯时：宜：入宅、修造、安葬、赴任、出行、求财、见贵、祭祀、祈福、酬神；忌：无
戊寅日 辰时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任、见贵；忌：上梁、盖屋、入殓
戊寅日 巳时：宜：入宅、赴任、出行、求财、见贵、订婚、嫁娶；忌：开光、修造、安葬
戊寅日 午时：宜：订婚、嫁娶、移徙、开市、修造、入宅、安葬；忌：祈福、求嗣
戊寅日 未时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、祭祀、祈福、酬神、出行、求财、见贵、订婚；忌：无
戊寅日 申时：宜：无；忌：诸事不宜
戊寅日 酉时：宜：无；忌：祭祀、祈福、斋醮、酬神、赴任、出行、修造、动土
戊寅日 戌时：宜：作灶、酬神、修造；忌：祭祀、祈福、斋醮、开光、赴任、出行
戊寅日 亥时：宜：合脊、嫁娶、安葬；忌：赴任、出行、修造、祭祀、祈福、斋醮、开光
己卯日 子时：宜：祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、修造、安葬、作灶；忌：无
己卯日 丑时：宜：祭祀、祈福、求嗣、斋醮、订婚、嫁娶、安葬；忌：赴任、出行、修造
己卯日 寅时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓、祭祀、祈福、斋醮、酬神
己卯日 卯时：宜：修造、入宅、安葬；忌：造船、乘船
己卯日 辰时：宜：祭祀、斋醮、订婚、嫁娶、出行、安葬；忌：赴任、词讼、祈福、求嗣、乘船
己卯日 巳时：宜：赴任、出行、见贵、求财、嫁娶、入宅、移徙、求嗣；忌：开光、修造、安葬
己卯日 午时：宜：祈福、订婚、嫁娶、开市、安葬、赴任、出行、求财、见贵；忌：修造、动土
己卯日 未时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：无
己卯日 申时：宜：求嗣、嫁娶、安葬；忌：赴任、出行、求财、祭祀、祈福、斋醮、开光
己卯日 酉时：宜：无；忌：诸事不宜
己卯日 戌时：宜：祭祀、祈福、合脊、嫁娶、安葬；忌：赴任、修造、移徙、出行、词讼
己卯日 亥时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、见贵；忌：赴任、出行
庚辰日 子时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、修造、移徙、出行、词讼、上梁、盖屋、入殓
庚辰日 丑时：宜：祭祀、祈福、酬神、求财、见贵、订婚、嫁娶、安葬；忌：赴任、出行、修造、动土
庚辰日 寅时：宜：订婚、嫁娶、开市、交易、安床、作灶、祭祀；忌：祈福、求嗣、赴任、出行、求财
庚辰日 卯时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神、赴任、出行、修造
庚辰日 辰时：宜：无；忌：诸事不宜
庚辰日 巳时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祭祀、祈福、斋醮、酬神；忌：无
庚辰日 午时：宜：求财、见贵、酬神；忌：祭祀、祈福、斋醮、开光、赴任、出行
庚辰日 未时：宜：酬神、求财、见贵、订婚、嫁娶、修造、安葬；忌：赴任、出行、祭祀、祈福、斋醮、开光
庚辰日 申时：宜：祈福、订婚、嫁娶、开市、赴任、出行、求财、见贵；忌：开光、修造、安葬
庚辰日 酉时：宜：修造、作灶、求嗣、嫁娶、移徙、入宅、开市、交易；忌：祭祀、祈福、斋醮、酬神
庚辰日 戌时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：上梁、盖屋、入殓
庚辰日 亥时：宜：修造、入宅、安葬、赴任、出行、见贵、求财、订婚、嫁娶、进人口、移徙；忌：无
辛巳日 子时：宜：嫁娶、移徙、入宅、开市、交易、修造、安葬、赴任、出行、求财；忌：祈福、求嗣
辛巳日 丑时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、赴任、见贵、求财、出行、嫁娶、进人口；忌：无
辛巳日 寅时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、祭祀；忌：赴任、修造、移徙、出行、词讼
辛巳日 卯时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神、赴任、出行、修造、动土
辛巳日 辰时：宜：作灶、酬神、修造、见贵、求财、嫁娶、进人口、移徙、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
辛巳日 巳时：宜：无；忌：诸事不宜
辛巳日 午时：宜：赴任、出行、求财、见贵、祭祀、祈福、酬神；忌：无
辛巳日 未时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀、修造、盖屋、移徙、作灶；忌：无
辛巳日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓、赴任、词讼
辛巳日 酉时：宜：求财、见贵、订婚、嫁娶、入宅、开市、安葬、修造；忌：赴任、出行
辛巳日 戌时：宜：订婚、嫁娶、开市、安葬；忌：乘船、祈福、求嗣、祭祀
辛巳日 亥时：宜：祭祀、祈福、斋醮、酬神、作灶；忌：造桥、乘船、开光、修造、安葬
壬午日 子时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：上梁、盖屋、入殓、赴任、修造、移徙、出行、词讼
壬午日 丑时：宜：入宅、安葬、祭祀、祈福、酬神、求财、见贵、订婚、嫁娶；忌：赴任、出行、修造、动土
壬午日 寅时：宜：作灶、祭祀、斋醮、酬神、修造、赴任、出行、见贵、求财、嫁娶、入宅、移徙、安葬；忌：祈福、求嗣
壬午日 卯时：宜：求嗣、订婚、嫁娶、修造、入宅、求财、开市、交易、安葬、赴任、出行、见贵；忌：祭祀、祈福、斋醮、酬神
壬午日 辰时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、安葬、赴任、出行、求财、见贵；忌：造桥、乘船、修造、动土
壬午日 巳时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祭祀、祈福、斋醮、酬神；忌：无
壬午日 午时：宜：出行、求财、见贵、酬神；忌：赴任、词讼、祭祀、祈福、斋醮、开光
壬午日 未时：宜：见贵、求财、嫁娶、进人口、移徙、安葬、酬神；忌：祭祀、祈福、斋醮、开光、赴任、出行
壬午日 申时：宜：赴任、出行、求财、见贵、订婚、嫁娶、入宅、开市、祈福、求嗣；忌：开光、修造、安葬
壬午日 酉时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祭祀、祈福、斋醮、酬神；忌：无
壬午日 戌时：宜：无；忌：诸事不宜
壬午日 亥时：宜：修造、入宅、安葬、赴任、出行、见贵、求财、订婚、嫁娶、进人口、移徙；忌：无
癸未日 子时：宜：嫁娶、移徙、入宅、开市、交易、修造、安葬、赴任、出行、求财；忌：祈福、求嗣
癸未日 丑时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、修造、安葬、赴任；忌：无
癸未日 寅时：宜：祭祀、祈福、酬神、求财、见贵、订婚、嫁娶、安葬；忌：修造、动土、赴任、出行
癸未日 卯时：宜：求财、嫁娶、移徙、开市、安葬；忌：赴任、出行、修造、动土、祭祀、祈福、斋醮、酬神
癸未日 辰时：宜：作灶、修造；忌：祭祀、祈福、斋醮、酬神
癸未日 巳时：宜：酬神、订婚、嫁娶、求财、入宅、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
癸未日 午时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、修造、安葬、祭祀、赴任、出行、求财、见贵；忌：无
癸未日 未时：宜：祭祀、祈福、求嗣、斋醮、出行、嫁娶、安葬、修造、盖屋、移徙、作灶、安床、入宅、开市；忌：无
癸未日 申时：宜：祭祀、祈福、合脊、嫁娶、修造、安葬、求嗣；忌：上梁、盖屋、入殓
癸未日 酉时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行
癸未日 戌时：宜：订婚、嫁娶、开市、安葬；忌：祈福、求嗣、乘船
癸未日 亥时：宜：无；忌：诸事不宜
甲申日 子时：宜：无；忌：诸事不宜
甲申日 丑时：宜：祭祀、祈福、斋醮、酬神、作灶；忌：修造、动土
甲申日 寅时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神、开光、修造、安葬
甲申日 卯时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、酬神、求财、见贵、订婚、嫁娶；忌：祭祀、祈福、斋醮、开光、赴任、出行
甲申日 辰时：宜：祭祀、祈福、酬神、订婚、嫁娶、求财、入宅、安葬；忌：赴任、修造、移徙、出行、词讼
甲申日 巳时：宜：求财、见贵；忌：祭祀、祈福、斋醮、酬神、赴任、出行、修造、动土
甲申日 午时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、作灶、祭祀；忌：上梁、盖屋、入殓、赴任、出行
甲申日 未时：宜：祭祀、祈福、合脊、嫁娶、安葬；忌：赴任、出行、修造
甲申日 申时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬、赴任、出行、见贵、求财；忌：祈福、求嗣
甲申日 酉时：宜：祈福、求嗣、订婚、嫁娶、修造、入宅、开市、交易、安葬；忌：赴任、出行、求财
甲申日 戌时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、见贵；忌：赴任、词讼、修造、动土
甲申日 亥时：宜：祈福、求嗣、出行、求财、嫁娶、安葬、赴任、见贵；忌：无
乙酉日 子时：宜：出行、求财、见贵、订婚、嫁娶、入宅、开市、安葬、求嗣；忌：赴任、词讼、祭祀、祈福、斋醮、开光
乙酉日 丑时：宜：无；忌：诸事不宜
乙酉日 寅时：宜：求嗣、订婚、嫁娶、修造、入宅、开市、交易、安葬；忌：祭祀、祈福、斋醮、酬神
乙酉日 卯时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：无
乙酉日 辰时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓
乙酉日 巳时：宜：盖屋、移徙、安床、入宅、开市、开仓、祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶；忌：开光、修造、安葬
乙酉日 午时：宜：订婚、嫁娶、出行、求财、开市、交易、安床；忌：祈福、求嗣、祭祀
乙酉日 未时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：赴任、出行
乙酉日 申时：宜：作灶、祭祀、祈福、斋醮、酬神、赴任、出行、求财、见贵、嫁娶、进人口、移徙、安葬；忌：修造、动土
乙酉日 酉时：宜：无；忌：赴任、出行、求财
乙酉日 戌时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
乙酉日 亥时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床、修造、盖屋、移徙、作灶；忌：祭祀、祈福、斋醮、开光、赴任、出行
丙戌日 子时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：无
丙戌日 丑时：宜：祈福、求嗣、出行、求财、嫁娶、安葬、修造、盖屋、移徙、作灶、安床、入宅、开市、赴任；忌：无
丙戌日 寅时：宜：无；忌：诸事不宜
丙戌日 卯时：宜：修造、入宅、安葬、求嗣、嫁娶、移徙、祭祀、祈福、斋醮、酬神；忌：无
丙戌日 辰时：宜：祭祀、出行、订婚、嫁娶、入宅、修造、安葬；忌：祈福、求嗣
丙戌日 巳时：宜：祭祀、祈福、合脊、嫁娶；忌：开光、修造、安葬
丙戌日 午时：宜：祈福、订婚、嫁娶、移徙、入宅、安葬；忌：赴任、出行、修造、动土
丙戌日 未时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、出行、求财、见贵、订婚、嫁娶；忌：祭祀、祈福、斋醮、酬神
丙戌日 申时：宜：求嗣、嫁娶、入宅、开市、交易、安葬；忌：祭祀、祈福、斋醮、酬神、赴任、修造、移徙、出行、词讼
丙戌日 酉时：宜：求财、见贵、酬神；忌：赴任、出行、修造、动土、祭祀、祈福、斋醮、开光
丙戌日 戌时：宜：作灶、祭祀、祈福、斋醮、酬神、修造、赴任、出行、求财、见贵、嫁娶、进人口、移徙、安葬；忌：无
丙戌日 亥时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祈福；忌：无
丁亥日 子时：宜：祈福、求嗣、出行、求财、嫁娶、安葬、作灶、祭祀；忌：上梁、盖屋、入殓
丁亥日 丑时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：无
丁亥日 寅时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬、赴任、见贵、出行、求财；忌：祈福、求嗣
丁亥日 卯时：宜：无；忌：诸事不宜
丁亥日 辰时：宜：祭祀、祈福、合脊、嫁娶、安葬；忌：修造、动土
丁亥日 巳时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行
丁亥日 午时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、订婚；忌：赴任、出行、求财、祭祀、祈福、斋醮、开光
丁亥日 未时：宜：酬神、修造、作灶；忌：赴任、出行、求财、祭祀、祈福、斋醮、开光
丁亥日 申时：宜：赴任、出行、求财、见贵；忌：祭祀、祈福、斋醮、酬神、开光、修造、安葬
丁亥日 酉时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、赴任、出行、求财、嫁娶；忌：造桥、乘船
丁亥日 戌时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：上梁、盖屋、入殓
丁亥日 亥时：宜：祭祀、祈福、酬神、订婚、嫁娶、求财、入宅、安葬；忌：赴任、出行、修造、动土
戊子日 子时：宜：求财、见贵、祭祀、酬神；忌：赴任、修造、移徙、出行、词讼、祈福、求嗣
戊子日 丑时：宜：修造、安葬、求财、见贵、嫁娶、进人口、移徙；忌：赴任、出行
戊子日 寅时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、作灶、祭祀；忌：修造、动土
戊子日 卯时：宜：祭祀、祈福、合脊、嫁娶、安葬；忌：赴任、出行、修造
戊子日 辰时：宜：无；忌：诸事不宜
戊子日 巳时：宜：求财、见贵、订婚、嫁娶、入宅、开市、安葬、修造、盖屋、移徙、作灶、安床；忌：祭祀、祈福、斋醮、开光、赴任、出行
戊子日 午时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：无
戊子日 未时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：赴任、出行
戊子日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任、见贵；忌：上梁、盖屋、入殓
戊子日 酉时：宜：修造、入宅、安葬、出行、求财、见贵、订婚、嫁娶；忌：祭祀、祈福、斋醮、酬神
戊子日 戌时：宜：祭祀、斋醮、订婚、嫁娶、出行、安葬；忌：造船、乘船、祈福、求嗣
戊子日 亥时：宜：盖屋、移徙、安床、入宅、开市、开仓、祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶；忌：开光、修造、安葬
己丑日 子时：宜：赴任、出行、求财、嫁娶、移徙、开市、安葬；忌：修造、动土
己丑日 丑时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、赴任、出行、见贵、求财、订婚、嫁娶、进人口；忌：无
己丑日 寅时：宜：合脊、嫁娶、修造、安葬；忌：祭祀、祈福、斋醮、酬神
己丑日 卯时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行、修造、动土、祭祀、祈福、斋醮、开光
己丑日 辰时：宜：作灶、祭祀、祈福、斋醮、酬神、修造、赴任、见贵、求财、出行、嫁娶、进人口、移徙、安葬；忌：无
己丑日 巳时：宜：无；忌：诸事不宜
己丑日 午时：宜：祈福、求嗣、出行、求财、嫁娶、安葬；忌：修造、动土
己丑日 未时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、修造、入宅、安葬、祭祀；忌：无
己丑日 申时：宜：入宅、修造、安葬；忌：赴任、词讼、祈福、求嗣、乘船
己丑日 酉时：宜：祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、修造、安葬；忌：无
己丑日 戌时：宜：订婚、嫁娶、开市、安葬；忌：祭祀、祈福、斋醮、酬神、修造、动土
己丑日 亥时：宜：求财、见贵、祭祀、祈福、酬神；忌：赴任、出行
庚寅日 子时：宜：订婚、嫁娶、开市、安葬、见贵、求财；忌：祭祀、祈福、斋醮、开光、赴任、出行
庚寅日 丑时：宜：合脊、嫁娶、修造、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
庚寅日 寅时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、见贵、求财；忌：赴任、出行
庚寅日 卯时：宜：求财、见贵、祭祀、祈福、酬神、修造、盖屋、移徙、安床、入宅、开市、开仓；忌：赴任、出行
庚寅日 辰时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：上梁、盖屋、入殓
庚寅日 巳时：宜：入宅、赴任、出行、求财、见贵、订婚、嫁娶；忌：开光、修造、安葬
庚寅日 午时：宜：无；忌：诸事不宜
庚寅日 未时：宜：祈福、求嗣、求财、嫁娶、安葬；忌：赴任、出行、修造
庚寅日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：修造、动土
庚寅日 酉时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、赴任、出行、求财、嫁娶；忌：祭祀、祈福、斋醮、酬神
庚寅日 戌时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
庚寅日 亥时：宜：赴任、见贵、出行、求财、嫁娶、进人口、移徙、安葬；忌：祭祀、祈福、斋醮、酬神
辛卯日 子时：宜：祈福、求嗣、出行、求财、嫁娶、安葬；忌：无
辛卯日 丑时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：造船、乘船、赴任、出行
辛卯日 寅时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：上梁、盖屋、入殓
辛卯日 卯时：宜：修造、入宅、安葬、祈福、斋醮、出行、订婚、嫁娶、祭祀；忌：无
辛卯日 辰时：宜：无；忌：祈福、求嗣
辛卯日 巳时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、盖屋、移徙；忌：开光、修造、安葬
辛卯日 午时：宜：祈福、求嗣、出行、求财、嫁娶、安葬、赴任；忌：修造、动土
辛卯日 未时：宜：无；忌：诸事不宜
辛卯日 申时：宜：作灶、酬神、修造、见贵、求财、嫁娶、进人口、移徙、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
辛卯日 酉时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神
辛卯日 戌时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、修造、安葬、祭祀；忌：赴任、出行
辛卯日 亥时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、祈福、嫁娶、见贵、求财；忌：赴任、出行
壬辰日 子时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、修造、安葬、赴任、出行、求财；忌：上梁、盖屋、入殓
壬辰日 丑时：宜：出行、求财、见贵、订婚、嫁娶、修造、安葬；忌：祭祀、祈福、斋醮、酬神
壬辰日 寅时：宜：嫁娶、移徙、入宅、开市、交易、修造、安葬；忌：赴任、词讼、祈福、求嗣、乘船
壬辰日 卯时：宜：求嗣、订婚、嫁娶、修造、入宅、求财、开市、交易、安葬；忌：祭祀、祈福、斋醮、酬神
壬辰日 辰时：宜：祈福、斋醮、出行、订婚、嫁娶、移徙、开市、安葬、赴任、见贵、求财；忌：修造、动土
壬辰日 巳时：宜：祭祀、祈福、斋醮、酬神、修造、作灶、求嗣、嫁娶、移徙、入宅、开市、交易；忌：无
壬辰日 午时：宜：求嗣、订婚、嫁娶、开市、交易、安床；忌：赴任、出行、求财、祭祀、祈福、斋醮、开光
壬辰日 未时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、酬神、求财、见贵、订婚、嫁娶；忌：祭祀、祈福、斋醮、开光、赴任、出行
壬辰日 申时：宜：无；忌：诸事不宜
壬辰日 酉时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬、祈福；忌：赴任、出行、修造、动土
壬辰日 戌时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、作灶、祭祀；忌：上梁、盖屋、入殓
壬辰日 亥时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、入宅、安葬；忌：赴任、出行、修造
癸巳日 子时：宜：作灶、祭祀、斋醮、酬神、修造、嫁娶、移徙、入宅、开市、交易；忌：祈福、求嗣、赴任、出行
癸巳日 丑时：宜：安葬、祭祀、祈福、求嗣、斋醮、订婚、嫁娶；忌：赴任、出行、修造
癸巳日 寅时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬；忌：祭祀、祈福、斋醮、酬神、上梁、盖屋、入殓
癸巳日 卯时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市；忌：祭祀、祈福、斋醮、酬神
癸巳日 辰时：宜：求嗣、订婚、嫁娶、出行、安葬；忌：赴任、词讼、祭祀、祈福、斋醮、开光
癸巳日 巳时：宜：酬神、订婚、嫁娶、求财、入宅、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
癸巳日 午时：宜：祭祀、祈福、酬神、见贵、订婚、嫁娶、修造、安葬；忌：赴任、出行、求财
癸巳日 未时：宜：祭祀、祈福、出行、订婚、嫁娶、入宅、修造、安葬；忌：无
癸巳日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓
癸巳日 酉时：宜：无；忌：诸事不宜
癸巳日 戌时：宜：订婚、嫁娶、求财、开市、交易、安床；忌：赴任、修造、移徙、出行、词讼、祈福、求嗣、乘船
癸巳日 亥时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、见贵；忌：赴任、出行、修造、动土、开光
甲午日 子时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：修造、动土、赴任
甲午日 丑时：宜：求财、见贵、嫁娶、进人口、移徙、安葬、祈福；忌：赴任、出行、修造、动土
甲午日 寅时：宜：见贵、求财、嫁娶、入宅、移徙、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
甲午日 卯时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、出行、求财、见贵、订婚；忌：祭祀、祈福、斋醮、酬神
甲午日 辰时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、修造、安葬、祭祀；忌：造桥、乘船
甲午日 巳时：宜：求嗣、出行、入宅、嫁娶、修造、安葬、赴任；忌：祭祀、祈福、斋醮、酬神
甲午日 午时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：上梁、盖屋、入殓
甲午日 未时：宜：修造、入宅、安葬、祈福、嫁娶；忌：无
甲午日 申时：宜：订婚、嫁娶、出行、求财、开市、交易、安床；忌：祈福、求嗣
甲午日 酉时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：无
甲午日 戌时：宜：无；忌：诸事不宜
甲午日 亥时：宜：赴任、出行、求财、见贵、订婚、嫁娶、入宅、开市、安葬、修造、盖屋、移徙、安床；忌：无
乙未日 子时：宜：求嗣、求财、嫁娶、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
乙未日 丑时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、求嗣、订婚、嫁娶、求财；忌：祭祀、祈福、斋醮、开光、赴任、出行
乙未日 寅时：宜：无；忌：祭祀、祈福、斋醮、酬神、赴任、出行
乙未日 卯时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祭祀、祈福、酬神、出行、求财、见贵；忌：无
乙未日 辰时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、作灶；忌：上梁、盖屋、入殓、祭祀、祈福、斋醮、酬神
乙未日 巳时：宜：入宅、祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、赴任；忌：开光、修造、安葬
乙未日 午时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬；忌：祈福、求嗣、乘船
乙未日 未时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、祭祀、祈福、求嗣、斋醮、订婚、嫁娶、安葬；忌：赴任、出行
乙未日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：修造、动土
乙未日 酉时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行
乙未日 戌时：宜：订婚、嫁娶、开市、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
乙未日 亥时：宜：无；忌：诸事不宜
丙申日 子时：宜：无；忌：诸事不宜
丙申日 丑时：宜：祭祀、祈福、斋醮、酬神、修造、作灶；忌：无
丙申日 寅时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任、祭祀；忌：上梁、盖屋、入殓
丙申日 卯时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、赴任、出行、见贵、求财、订婚；忌：无
丙申日 辰时：宜：祭祀、斋醮、订婚、嫁娶、安葬；忌：赴任、修造、移徙、出行、词讼、祈福、求嗣、乘船
丙申日 巳时：宜：订婚、嫁娶、移徙、入宅、安葬；忌：赴任、出行、修造、动土、祭祀、祈福、斋醮、酬神、开光
丙申日 午时：宜：祈福、嫁娶、造庙、作灶、入宅、安葬；忌：赴任、出行、修造、动土
丙申日 未时：宜：祈福、求嗣、求财、嫁娶、安葬；忌：赴任、出行、修造
丙申日 申时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬、赴任、出行、见贵、求财；忌：祭祀、祈福、斋醮、酬神
丙申日 酉时：宜：求财、见贵、酬神、修造、盖屋、移徙、作灶、安床、入宅、开市；忌：祭祀、祈福、斋醮、开光、赴任、出行
丙申日 戌时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、见贵；忌：赴任、词讼
丙申日 亥时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、赴任、见贵、出行、求财；忌：无
丁酉日 子时：宜：祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、修造、安葬；忌：上梁、盖屋、入殓、赴任、词讼
丁酉日 丑时：宜：无；忌：诸事不宜
丁酉日 寅时：宜：嫁娶、移徙、入宅、开市、交易、修造、安葬、订婚；忌：祈福、求嗣
丁酉日 卯时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：无
丁酉日 辰时：宜：无；忌：修造、动土
丁酉日 巳时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、见贵、求财、嫁娶；忌：赴任、出行
丁酉日 午时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神
丁酉日 未时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：造船、乘船、赴任、出行、修造、动土、祭祀、祈福、斋醮、开光
丁酉日 申时：宜：求嗣、出行、求财、嫁娶；忌：祭祀、祈福、斋醮、酬神、开光、修造、安葬
丁酉日 酉时：宜：无；忌：赴任、出行、修造
丁酉日 戌时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：上梁、盖屋、入殓、赴任、出行
丁酉日 亥时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀、修造、盖屋、移徙、作灶；忌：无
戊戌日 子时：宜：订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：祈福、求嗣
戊戌日 丑时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、祈福、求嗣、订婚、嫁娶、赴任、见贵、求财；忌：无
戊戌日 寅时：宜：无；忌：诸事不宜
戊戌日 卯时：宜：赴任、出行、见贵、求财、嫁娶、进人口、移徙、安葬、祭祀、祈福、斋醮、酬神；忌：无
戊戌日 辰时：宜：求嗣、订婚、嫁娶、开市、交易、安床；忌：赴任、出行、求财、祭祀、祈福、斋醮、开光
戊戌日 巳时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、开光、赴任、出行
戊戌日 午时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祈福；忌：无
戊戌日 未时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、求嗣、订婚、嫁娶；忌：祭祀、祈福、斋醮、酬神
戊戌日 申时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：造船、乘船、上梁、盖屋、入殓、赴任、修造、移徙、出行、词讼
戊戌日 酉时：宜：祭祀、祈福、酬神、求财、见贵、订婚、嫁娶、安葬；忌：赴任、出行、修造、动土
戊戌日 戌时：宜：作灶、祭祀、斋醮、酬神、修造；忌：祈福、求嗣、乘船
戊戌日 亥时：宜：祈福、求嗣、求财、嫁娶、安葬；忌：赴任、出行、修造、开光
己亥日 子时：宜：作灶、祭祀、祈福、斋醮、酬神；忌：修造、动土
己亥日 丑时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、祭祀；忌：赴任、出行、修造
己亥日 寅时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
己亥日 卯时：宜：无；忌：诸事不宜
己亥日 辰时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：赴任、词讼
己亥日 巳时：宜：祈福、求嗣、订婚、嫁娶、开市、交易、安床；忌：赴任、出行、求财
己亥日 午时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：上梁、盖屋、入殓
己亥日 未时：宜：祈福、求嗣、订婚、嫁娶、修造、入宅、开市、交易、安葬、祭祀；忌：无
己亥日 申时：宜：无；忌：祈福、求嗣、乘船、祭祀
己亥日 酉时：宜：祭祀、祈福、酬神、订婚、嫁娶、出行、求财、入宅、安葬、求嗣；忌：造桥、乘船
己亥日 戌时：宜：见贵、求财、嫁娶、进人口、安葬；忌：赴任、修造、移徙、出行、词讼
己亥日 亥时：宜：求财、见贵、祭祀、祈福、酬神；忌：赴任、出行、修造、动土
庚子日 子时：宜：见贵、求财、嫁娶、进人口、安葬、求嗣、订婚；忌：赴任、修造、移徙、出行、词讼、祭祀、祈福、斋醮、开光
庚子日 丑时：宜：酬神、求财、见贵、订婚、嫁娶、修造、安葬；忌：赴任、出行、祭祀、祈福、斋醮、开光
庚子日 寅时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行
庚子日 卯时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、入宅、安葬；忌：赴任、出行、修造
庚子日 辰时：宜：无；忌：诸事不宜
庚子日 巳时：宜：见贵、订婚、嫁娶、入宅、开市；忌：赴任、出行、求财、开光、修造、安葬
庚子日 午时：宜：订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：祈福、求嗣
庚子日 未时：宜：祈福、求嗣、出行、入宅、嫁娶、修造、安葬、赴任、见贵、求财；忌：无
庚子日 申时：宜：祭祀、祈福、酬神、订婚、嫁娶、出行、求财、入宅、安葬、赴任、见贵；忌：修造、动土
庚子日 酉时：宜：出行、订婚、嫁娶、修造、移徙、开市、安葬；忌：祭祀、祈福、斋醮、酬神
庚子日 戌时：宜：求嗣、订婚、嫁娶、安葬；忌：造船、乘船、祭祀、祈福、斋醮、开光、赴任、出行
庚子日 亥时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、见贵、求财、订婚、嫁娶、进人口；忌：祭祀、祈福、斋醮、开光、赴任、出行
辛丑日 子时：宜：祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、修造、安葬、赴任；忌：无
辛丑日 丑时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、见贵、求财、嫁娶、进人口；忌：赴任、出行
辛丑日 寅时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓
辛丑日 卯时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、修造、入宅、安葬、赴任；忌：无
辛丑日 辰时：宜：作灶、祭祀、斋醮、酬神、修造、赴任、见贵、求财、出行、嫁娶、进人口、移徙、安葬；忌：祈福、求嗣、乘船
辛丑日 巳时：宜：无；忌：诸事不宜
辛丑日 午时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、安葬、赴任、出行、求财、见贵；忌：修造、动土
辛丑日 未时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：无
辛丑日 申时：宜：求嗣、出行、求财、嫁娶、安葬；忌：赴任、词讼、祭祀、祈福、斋醮、开光
辛丑日 酉时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬；忌：祭祀、祈福、斋醮、酬神
辛丑日 戌时：宜：订婚、嫁娶、开市、安葬；忌：祭祀、祈福、斋醮、酬神
辛丑日 亥时：宜：祭祀、祈福、斋醮、酬神、修造、作灶；忌：赴任、出行、造桥、乘船
壬寅日 子时：宜：祈福、订婚、嫁娶、开市、安葬；忌：造船、乘船、上梁、盖屋、入殓、赴任、出行
壬寅日 丑时：宜：祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、修造、安葬；忌：无
壬寅日 寅时：宜：赴任、见贵、出行、求财、嫁娶、进人口、移徙、安葬；忌：祈福、求嗣
壬寅日 卯时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、祈福、求嗣、订婚、嫁娶、赴任、出行、见贵；忌：无
壬寅日 辰时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、修造、移徙、出行、词讼
壬寅日 巳时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬；忌：赴任、出行、修造、动土
壬寅日 午时：宜：无；忌：诸事不宜
壬寅日 未时：宜：酬神、求财、见贵、订婚、嫁娶、修造、安葬；忌：赴任、出行、祭祀、祈福、斋醮、开光
壬寅日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任、入宅；忌：开光、修造、安葬
壬寅日 酉时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祈福、赴任、出行、求财；忌：无
壬寅日 戌时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、见贵；忌：上梁、盖屋、入殓、赴任、出行
壬寅日 亥时：宜：赴任、见贵、出行、求财、嫁娶、进人口、移徙、安葬、修造、入宅；忌：祭祀、祈福、斋醮、酬神
癸卯日 子时：宜：订婚、嫁娶、出行、求财、开市、交易、安床；忌：祈福、求嗣
癸卯日 丑时：宜：修造、安葬；忌：造船、乘船
癸卯日 寅时：宜：祈福、求嗣、出行、求财、嫁娶、安葬；忌：修造、动土
癸卯日 卯时：宜：修造、作灶；忌：祭祀、祈福、斋醮、酬神
癸卯日 辰时：宜：见贵、求财、嫁娶、进人口、移徙、安葬、入宅、修造；忌：祭祀、祈福、斋醮、开光、赴任、出行
癸卯日 巳时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床、修造、盖屋、移徙；忌：祭祀、祈福、斋醮、开光、赴任、出行
癸卯日 午时：宜：祈福、求嗣、出行、求财、嫁娶、安葬、赴任；忌：无
癸卯日 未时：宜：无；忌：诸事不宜
癸卯日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、作灶、祭祀、赴任、见贵；忌：上梁、盖屋、入殓
癸卯日 酉时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、修造、入宅、安葬、赴任；忌：无
癸卯日 戌时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬、祭祀；忌：祈福、求嗣、乘船
癸卯日 亥时：宜：盖屋、移徙、作灶、安床、入宅、开市、赴任、出行、见贵、求财、嫁娶；忌：开光、修造、安葬
甲辰日 子时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、安葬、求嗣、赴任、出行、求财；忌：修造、动土
甲辰日 丑时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、求嗣、订婚、嫁娶；忌：祭祀、祈福、斋醮、酬神
甲辰日 寅时：宜：无；忌：祭祀、祈福、斋醮、开光、赴任、出行
甲辰日 卯时：宜：酬神、求财、见贵、订婚、嫁娶、修造、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
甲辰日 辰时：宜：祈福、订婚、嫁娶、开市、安葬、祭祀、见贵；忌：赴任、出行、求财
甲辰日 巳时：宜：出行、求财、见贵、订婚、嫁娶、修造、安葬；忌：祭祀、祈福、斋醮、酬神
甲辰日 午时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓
甲辰日 未时：宜：修造、入宅、安葬、赴任、出行、求财、见贵、嫁娶、进人口、移徙、祭祀、祈福、求嗣、斋醮；忌：无
甲辰日 申时：宜：无；忌：诸事不宜
甲辰日 酉时：宜：祈福、求嗣、订婚、嫁娶、入宅、求财、开市、交易、安葬、祭祀；忌：赴任、出行、修造、动土
甲辰日 戌时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、作灶、祭祀；忌：修造、动土
甲辰日 亥时：宜：祈福、求嗣、求财、嫁娶、安葬；忌：赴任、出行、修造
乙巳日 子时：宜：求财、见贵、订婚、嫁娶、入宅、开市、安葬、求嗣；忌：赴任、出行、祭祀、祈福、斋醮、开光
乙巳日 丑时：宜：求嗣、订婚、嫁娶、安葬；忌：赴任、出行、修造、祭祀、祈福、斋醮、开光
乙巳日 寅时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬、赴任、见贵、出行、求财；忌：祭祀、祈福、斋醮、酬神
乙巳日 卯时：宜：祈福、求嗣、出行、求财、嫁娶、安葬、修造、盖屋、移徙、作灶、安床、入宅、开市；忌：无
乙巳日 辰时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：上梁、盖屋、入殓、赴任、词讼
乙巳日 巳时：宜：祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、赴任；忌：开光、修造、安葬
乙巳日 午时：宜：修造、安葬、订婚、嫁娶、开市；忌：祈福、求嗣、乘船
乙巳日 未时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、祭祀；忌：赴任、出行
乙巳日 申时：宜：赴任、出行、求财、见贵、嫁娶、进人口、移徙、安葬；忌：修造、动土
乙巳日 酉时：宜：无；忌：诸事不宜
乙巳日 戌时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、修造、移徙、出行、词讼、祭祀、祈福、斋醮、开光
乙巳日 亥时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床、见贵；忌：祭祀、祈福、斋醮、开光、赴任、出行
丙午日 子时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、修造、移徙、出行、词讼
丙午日 丑时：宜：祈福、求嗣、入宅、嫁娶、安葬；忌：赴任、出行、修造、动土
丙午日 寅时：宜：祭祀、祈福、酬神、订婚、嫁娶、出行、求财、入宅、安葬、赴任、作灶；忌：上梁、盖屋、入殓
丙午日 卯时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬；忌：祭祀、祈福、斋醮、酬神、赴任、出行、修造
丙午日 辰时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬；忌：赴任、出行、祈福、求嗣、乘船
丙午日 巳时：宜：盖屋、移徙、作灶、安床、入宅、开市、祭祀、祈福、出行、订婚、嫁娶；忌：开光、修造、安葬
丙午日 午时：宜：求财、嫁娶、移徙、开市、安葬；忌：赴任、出行、修造、动土
丙午日 未时：宜：祈福、求嗣、出行、入宅、嫁娶、修造、安葬、赴任、见贵、求财；忌：无
丙午日 申时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神
丙午日 酉时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、开光、赴任、出行
丙午日 戌时：宜：无；忌：诸事不宜
丙午日 亥时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬；忌：无
丁未日 子时：宜：祈福、求嗣、出行、求财、嫁娶、安葬；忌：上梁、盖屋、入殓
丁未日 丑时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、修造、入宅、安葬、赴任、见贵；忌：无
丁未日 寅时：宜：订婚、嫁娶、入宅、安葬；忌：赴任、修造、移徙、出行、词讼、祈福、求嗣、乘船
丁未日 卯时：宜：求财、见贵、订婚、嫁娶、入宅、开市、安葬、祈福、求嗣；忌：赴任、出行、修造、动土
丁未日 辰时：宜：作灶、赴任、见贵、求财、出行、嫁娶、进人口、移徙、安葬；忌：祭祀、祈福、斋醮、酬神、修造、动土
丁未日 巳时：宜：祈福、嫁娶、修造、盖屋、造庙、作灶、入宅、安葬、见贵、求财；忌：赴任、出行、造船、乘船
丁未日 午时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬、求嗣；忌：祭祀、祈福、斋醮、开光、赴任、出行
丁未日 未时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、求嗣、订婚、嫁娶；忌：祭祀、祈福、斋醮、开光、赴任、出行
丁未日 申时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神、开光、修造、安葬
丁未日 酉时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：无
丁未日 戌时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：上梁、盖屋、入殓
丁未日 亥时：宜：无；忌：诸事不宜
戊申日 子时：宜：无；忌：诸事不宜
戊申日 丑时：宜：祭祀、祈福、斋醮、酬神、修造、作灶；忌：无
戊申日 寅时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神、修造、动土
戊申日 卯时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、祈福、求嗣、订婚、嫁娶、赴任、出行、见贵；忌：无
戊申日 辰时：宜：求嗣、订婚、嫁娶、安葬、入宅、修造；忌：赴任、出行、祭祀、祈福、斋醮、开光
戊申日 巳时：宜：赴任、出行、求财、见贵、订婚、嫁娶、入宅、开市、安葬；忌：祭祀、祈福、斋醮、酬神
戊申日 午时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祈福、作灶、祭祀；忌：造桥、乘船
戊申日 未时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行、修造
戊申日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：上梁、盖屋、入殓
戊申日 酉时：宜：祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、修造、安葬、赴任；忌：无
戊申日 戌时：宜：订婚、嫁娶、出行、求财、开市、交易、安床、赴任、见贵；忌：祈福、求嗣、乘船
戊申日 亥时：宜：祈福、求嗣、出行、求财、嫁娶、赴任、见贵；忌：开光、修造、安葬
己酉日 子时：宜：无；忌：赴任、词讼、修造、动土
己酉日 丑时：宜：无；忌：诸事不宜
己酉日 寅时：宜：无；忌：祭祀、祈福、斋醮、开光、赴任、出行
己酉日 卯时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、开光、赴任、出行
己酉日 辰时：宜：祈福、求嗣、订婚、嫁娶、修造、入宅、开市、交易、安葬；忌：赴任、出行
己酉日 巳时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、求嗣、嫁娶、赴任、出行、见贵、求财；忌：无
己酉日 午时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：上梁、盖屋、入殓、祭祀、祈福、斋醮、酬神
己酉日 未时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：赴任、出行、修造、动土
己酉日 申时：宜：赴任、见贵、出行、求财、嫁娶、进人口、移徙、安葬、订婚、作灶、祭祀；忌：祈福、求嗣
己酉日 酉时：宜：祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、修造、安葬、求嗣；忌：无
己酉日 戌时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、安葬；忌：赴任、出行、修造、动土
己酉日 亥时：宜：赴任、出行、求财、见贵、祭祀、祈福、酬神、修造、盖屋、移徙、作灶、安床、入宅、开市；忌：无
庚戌日 子时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬、见贵、求财；忌：祭祀、祈福、斋醮、开光、赴任、出行
庚戌日 丑时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、酬神、求财、见贵、订婚、嫁娶；忌：祭祀、祈福、斋醮、开光、赴任、出行
庚戌日 寅时：宜：无；忌：诸事不宜
庚戌日 卯时：宜：入宅、修造、安葬、祈福、求嗣、订婚、嫁娶、赴任、出行、求财；忌：无
庚戌日 辰时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓
庚戌日 巳时：宜：祈福、斋醮、订婚、嫁娶、移徙、开市；忌：赴任、出行、开光、修造、安葬
庚戌日 午时：宜：修造、安葬、嫁娶、移徙、入宅、开市、交易；忌：祈福、求嗣
庚戌日 未时：宜：求嗣、出行、求财、嫁娶、安葬、修造、盖屋、移徙、安床、入宅、开市、开仓；忌：祭祀、祈福、斋醮、酬神
庚戌日 申时：宜：祭祀、祈福、酬神、订婚、嫁娶、求财、入宅、安葬；忌：赴任、修造、移徙、出行、词讼
庚戌日 酉时：宜：无；忌：祭祀、祈福、斋醮、酬神、赴任、出行、修造、动土
庚戌日 戌时：宜：作灶、酬神、修造；忌：祭祀、祈福、斋醮、开光、赴任、出行
庚戌日 亥时：宜：嫁娶、修造、造庙、作灶、入宅、安葬；忌：赴任、出行、祭祀、祈福、斋醮、开光
辛亥日 子时：宜：祭祀、祈福、出行、订婚、嫁娶、入宅、修造、盖屋、安葬、作灶；忌：无
辛亥日 丑时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、祭祀；忌：赴任、出行
辛亥日 寅时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任、见贵；忌：修造、动土
辛亥日 卯时：宜：无；忌：诸事不宜
辛亥日 辰时：宜：订婚、嫁娶、出行、求财、开市、交易、安床；忌：赴任、词讼、祈福、求嗣、乘船
辛亥日 巳时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：开光、修造、安葬
辛亥日 午时：宜：祈福、订婚、嫁娶、开市、安葬、赴任、出行、求财、见贵；忌：修造、动土
辛亥日 未时：宜：祭祀、祈福、酬神、订婚、嫁娶、出行、求财、入宅、安葬；忌：无
辛亥日 申时：宜：出行、求财、见贵、订婚、嫁娶、修造、安葬；忌：祭祀、祈福、斋醮、酬神
辛亥日 酉时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬；忌：祭祀、祈福、斋醮、酬神
辛亥日 戌时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：赴任、出行
辛亥日 亥时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：赴任、出行
壬子日 子时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬、祈福、订婚；忌：造船、乘船、修造、动土
壬子日 丑时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：无
壬子日 寅时：宜：无；忌：祭祀、祈福、斋醮、开光、赴任、出行
壬子日 卯时：宜：求嗣、求财、嫁娶、安葬、修造、盖屋、移徙、安床、入宅、开市、开仓；忌：祭祀、祈福、斋醮、开光、赴任、出行
壬子日 辰时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、祭祀；忌：赴任、修造、移徙、出行、词讼
壬子日 巳时：宜：求嗣、求财、嫁娶、安葬；忌：祭祀、祈福、斋醮、酬神、赴任、出行、修造、动土
壬子日 午时：宜：无；忌：诸事不宜
壬子日 未时：宜：修造、入宅、安葬、求财、见贵、嫁娶、进人口、移徙；忌：赴任、出行
壬子日 申时：宜：订婚、嫁娶、出行、求财、开市、交易、安床；忌：祈福、求嗣
壬子日 酉时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、祈福、求嗣、订婚、嫁娶、赴任、出行、求财；忌：无
壬子日 戌时：宜：见贵、求财、出行、嫁娶、进人口、移徙、安葬；忌：修造、动土、赴任、词讼
壬子日 亥时：宜：赴任、出行、求财、见贵、订婚、嫁娶、入宅、开市、安葬；忌：祭祀、祈福、斋醮、酬神
癸丑日 子时：宜：赴任、出行、求财、见贵、订婚、嫁娶、入宅、开市、安葬、求嗣；忌：祭祀、祈福、斋醮、酬神
癸丑日 丑时：宜：无；忌：祭祀、祈福、斋醮、开光、赴任、出行
癸丑日 寅时：宜：订婚、嫁娶、开市、安葬；忌：祭祀、祈福、斋醮、酬神
癸丑日 卯时：宜：祭祀、祈福、酬神、订婚、嫁娶、出行、求财、入宅、安葬、求嗣；忌：无
癸丑日 辰时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓
癸丑日 巳时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀、盖屋、移徙；忌：开光、修造、安葬
癸丑日 午时：宜：求财、嫁娶、开市、安葬、订婚；忌：赴任、修造、移徙、出行、词讼、祈福、求嗣
癸丑日 未时：宜：无；忌：诸事不宜
癸丑日 申时：宜：作灶、祭祀、祈福、斋醮、酬神、赴任、出行、求财、见贵、嫁娶、进人口、移徙、安葬；忌：修造、动土
癸丑日 酉时：宜：祭祀、祈福、订婚、嫁娶、入宅、盖屋、安葬；忌：赴任、出行、修造
癸丑日 戌时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬；忌：赴任、出行、祭祀、祈福、斋醮、开光
癸丑日 亥时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、见贵、求财、嫁娶；忌：祭祀、祈福、斋醮、开光、赴任、出行
甲寅日 子时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、修造、安葬；忌：赴任、出行、求财
甲寅日 丑时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、出行、求财、见贵、订婚、嫁娶、赴任；忌：祭祀、祈福、斋醮、酬神
甲寅日 寅时：宜：祭祀、祈福、酬神、订婚、嫁娶、出行、求财、入宅、安葬、赴任；忌：上梁、盖屋、入殓
甲寅日 卯时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、赴任、出行、求财；忌：无
甲寅日 辰时：宜：订婚、嫁娶、开市、安葬、赴任、见贵、求财、出行；忌：祈福、求嗣、乘船
甲寅日 巳时：宜：祈福、斋醮、订婚、嫁娶、移徙、开市、见贵；忌：赴任、出行、开光、修造、安葬
甲寅日 午时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行、修造、动土
甲寅日 未时：宜：祈福、求嗣、出行、求财、嫁娶、安葬、修造、盖屋、移徙、安床、入宅、开市、开仓、祭祀；忌：无
甲寅日 申时：宜：无；忌：诸事不宜
甲寅日 酉时：宜：求财、见贵、酬神；忌：赴任、出行、修造、动土、祭祀、祈福、斋醮、开光
甲寅日 戌时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、作灶、祭祀、赴任；忌：无
甲寅日 亥时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行、修造
乙卯日 子时：宜：作灶、祭祀、祈福、斋醮、酬神、修造；忌：上梁、盖屋、入殓、赴任、出行
乙卯日 丑时：宜：祭祀、祈福、酬神、订婚、嫁娶、求财、入宅、安葬；忌：赴任、出行、修造
乙卯日 寅时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬；忌：祭祀、祈福、斋醮、酬神、乘船
乙卯日 卯时：宜：赴任、出行、求财、见贵、订婚、嫁娶、入宅、开市、安葬、祈福、求嗣、修造、盖屋、移徙；忌：无
乙卯日 辰时：宜：祭祀、祈福、求嗣、斋醮、订婚、嫁娶、安葬；忌：赴任、出行、修造、动土
乙卯日 巳时：宜：祈福、嫁娶、修造、盖屋、造庙、作灶、入宅、安葬、见贵、求财；忌：赴任、出行
乙卯日 午时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、订婚；忌：祭祀、祈福、斋醮、开光、赴任、出行
乙卯日 未时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、开光、赴任、出行
乙卯日 申时：宜：出行、求财、见贵、订婚、嫁娶；忌：祭祀、祈福、斋醮、酬神、开光、修造、安葬
乙卯日 酉时：宜：无；忌：诸事不宜
乙卯日 戌时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：上梁、盖屋、入殓、赴任、修造、移徙、出行、词讼
乙卯日 亥时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、入宅、安葬、祭祀；忌：赴任、出行、修造、动土
丙辰日 子时：宜：订婚、嫁娶、求财、开市、交易、安床、祭祀；忌：赴任、修造、移徙、出行、词讼、祈福、求嗣
丙辰日 丑时：宜：安葬、求财、见贵、嫁娶、进人口、移徙；忌：赴任、出行、修造、动土
丙辰日 寅时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬、作灶、祭祀、祈福、斋醮、酬神、赴任、出行；忌：修造、动土
丙辰日 卯时：宜：无；忌：祭祀、祈福、斋醮、酬神、赴任、出行
丙辰日 辰时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬；忌：造桥、乘船、赴任、出行、祭祀、祈福、斋醮、开光
丙辰日 巳时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、求财、见贵、订婚、嫁娶；忌：祭祀、祈福、斋醮、开光、赴任、出行
丙辰日 午时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、祈福、出行、求财；忌：赴任、词讼
丙辰日 未时：宜：赴任、见贵、求财、出行、嫁娶、进人口、移徙、安葬；忌：修造、动土
丙辰日 申时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓
丙辰日 酉时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀、修造、入宅、安葬；忌：无
丙辰日 戌时：宜：无；忌：诸事不宜
丙辰日 亥时：宜：盖屋、移徙、安床、入宅、开市、开仓、祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶；忌：开光、修造、安葬
丁巳日 子时：宜：嫁娶、移徙、开市、安葬；忌：赴任、出行、求财、修造、动土
丁巳日 丑时：宜：祈福、求嗣、订婚、嫁娶、开市、交易、安床、修造、盖屋、移徙；忌：赴任、出行、求财
丁巳日 寅时：宜：求嗣、订婚、嫁娶、修造、入宅、开市、交易、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
丁巳日 卯时：宜：求嗣、订婚、嫁娶、修造、入宅、开市、交易、安葬；忌：赴任、出行、祭祀、祈福、斋醮、开光
丁巳日 辰时：宜：作灶、修造；忌：赴任、出行、祭祀、祈福、斋醮、酬神
丁巳日 巳时：宜：赴任、见贵、出行、求财、嫁娶、进人口、移徙、安葬、求嗣；忌：造船、乘船、祭祀、祈福、斋醮、酬神
丁巳日 午时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：上梁、盖屋、入殓
丁巳日 未时：宜：修造、入宅、安葬、祭祀、祈福、求嗣、斋醮、订婚、嫁娶、出行；忌：无
丁巳日 申时：宜：订婚、嫁娶、出行、求财、开市、交易、安床；忌：赴任、词讼、祈福、求嗣、乘船
丁巳日 酉时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、祭祀；忌：无
丁巳日 戌时：宜：祈福、斋醮、出行、订婚、嫁娶、修造、移徙、开市、安葬、祭祀；忌：无
丁巳日 亥时：宜：无；忌：诸事不宜
戊午日 子时：宜：无；忌：诸事不宜
戊午日 丑时：宜：酬神、求财、见贵、订婚、嫁娶、修造、安葬；忌：赴任、出行、祭祀、祈福、斋醮、开光
戊午日 寅时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行
戊午日 卯时：宜：赴任、出行、求财、见贵、祭祀、祈福、酬神、修造、盖屋、移徙、安床、入宅、开市、开仓；忌：无
戊午日 辰时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、祭祀；忌：上梁、盖屋、入殓、赴任、修造、移徙、出行、词讼
戊午日 巳时：宜：订婚、嫁娶、移徙、开市、入宅；忌：祭祀、祈福、斋醮、酬神、开光、修造、安葬
戊午日 午时：宜：作灶、祭祀、斋醮、酬神、修造、嫁娶、移徙、入宅、开市、交易；忌：祈福、求嗣、造桥、乘船
戊午日 未时：宜：祈福、求嗣、求财、嫁娶、安葬；忌：赴任、出行、修造
戊午日 申时：宜：祭祀、祈福、酬神、订婚、嫁娶、出行、求财、入宅、安葬、赴任；忌：修造、动土
戊午日 酉时：宜：修造、盖屋、移徙、作灶、安床、入宅、开市、求嗣、订婚、嫁娶、赴任、出行、求财；忌：祭祀、祈福、斋醮、酬神
戊午日 戌时：宜：订婚、嫁娶、入宅、修造、安葬、见贵、求财；忌：祭祀、祈福、斋醮、开光、赴任、出行
戊午日 亥时：宜：嫁娶、修造、造庙、作灶、入宅、安葬、见贵、求财；忌：祭祀、祈福、斋醮、开光、赴任、出行
己未日 子时：宜：祈福、求嗣、出行、求财、嫁娶、安葬；忌：赴任、词讼
己未日 丑时：宜：无；忌：诸事不宜
己未日 寅时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：上梁、盖屋、入殓
己未日 卯时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、修造、入宅、安葬、祭祀；忌：无
己未日 辰时：宜：订婚、嫁娶、修造、入宅、开市、交易、安葬；忌：祈福、求嗣
己未日 巳时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、赴任、出行、见贵、求财；忌：开光、修造、安葬
己未日 午时：宜：求嗣、出行、求财、嫁娶、安葬；忌：祭祀、祈福、斋醮、酬神、修造、动土
己未日 未时：宜：祭祀、祈福、酬神、订婚、嫁娶、求财、入宅、安葬、见贵；忌：造船、乘船、赴任、出行、修造、动土
己未日 申时：宜：作灶、酬神、修造、见贵、求财、嫁娶、进人口、移徙、安葬；忌：祭祀、祈福、斋醮、开光、赴任、出行
己未日 酉时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬；忌：赴任、出行、修造、祭祀、祈福、斋醮、酬神
己未日 戌时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、修造、安葬、祭祀；忌：赴任、出行
己未日 亥时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、修造、盖屋、移徙、作灶；忌：赴任、出行
庚申日 子时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：上梁、盖屋、入殓、赴任、出行
庚申日 丑时：宜：祭祀、祈福、酬神、见贵、订婚、嫁娶、修造、安葬；忌：赴任、出行、求财
庚申日 寅时：宜：无；忌：诸事不宜
庚申日 卯时：宜：求嗣、订婚、嫁娶、修造、入宅、开市、交易、安葬；忌：祭祀、祈福、斋醮、酬神
庚申日 辰时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床、赴任；忌：修造、动土
庚申日 巳时：宜：祭祀、祈福、斋醮、酬神、修造、作灶、求嗣、嫁娶、移徙、入宅、开市、交易；忌：赴任、出行
庚申日 午时：宜：求财、见贵、酬神；忌：祭祀、祈福、斋醮、开光、赴任、出行
庚申日 未时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、出行、求财、见贵、订婚、嫁娶；忌：祭祀、祈福、斋醮、酬神
庚申日 申时：宜：求财、见贵、订婚、嫁娶、入宅、开市、安葬；忌：赴任、修造、移徙、出行、词讼、开光
庚申日 酉时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬、祈福、祭祀；忌：赴任、出行、修造、动土
庚申日 戌时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、作灶、祭祀；忌：上梁、盖屋、入殓、赴任、出行
庚申日 亥时：宜：修造、入宅、安葬；忌：赴任、出行
辛酉日 子时：宜：嫁娶、移徙、入宅、开市、交易、修造、安葬、作灶、祭祀、斋醮、酬神；忌：祈福、求嗣、赴任、出行、求财
辛酉日 丑时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、祭祀；忌：赴任、出行、修造
辛酉日 寅时：宜：祈福、订婚、嫁娶、安床、移徙、入宅、修造、安葬、祭祀、赴任、见贵、出行、求财；忌：无
辛酉日 卯时：宜：无；忌：诸事不宜
辛酉日 辰时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：赴任、词讼、祭祀、祈福、斋醮、开光
辛酉日 巳时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、开光、赴任、出行
辛酉日 午时：宜：祭祀、祈福、酬神、出行、求财、见贵、订婚、嫁娶、修造、安葬；忌：无
辛酉日 未时：宜：祭祀、祈福、斋醮、酬神、修造、作灶；忌：无
辛酉日 申时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓、祭祀、祈福、斋醮、酬神
辛酉日 酉时：宜：祈福、求嗣、出行、求财、嫁娶、安葬、修造、入宅；忌：造桥、乘船
辛酉日 戌时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：赴任、出行、祈福、求嗣
辛酉日 亥时：宜：见贵、求财、嫁娶、入宅、移徙、安葬；忌：赴任、出行、修造、动土、开光
壬戌日 子时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、安葬；忌：赴任、出行、求财、修造、动土
壬戌日 丑时：宜：祈福、嫁娶、修造、造庙、作灶、入宅、安葬；忌：赴任、出行、求财
壬戌日 寅时：宜：求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：祭祀、祈福、斋醮、酬神
壬戌日 卯时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、出行、修造、祭祀、祈福、斋醮、开光
壬戌日 辰时：宜：无；忌：诸事不宜
壬戌日 巳时：宜：出行、求财、见贵、订婚、嫁娶、修造、安葬；忌：祭祀、祈福、斋醮、酬神
壬戌日 午时：宜：祈福、求嗣、订婚、嫁娶、出行、求财、开市、交易、安床；忌：上梁、盖屋、入殓、赴任、词讼
壬戌日 未时：宜：见贵、求财、嫁娶、进人口、移徙、安葬；忌：赴任、出行
壬戌日 申时：宜：订婚、嫁娶、开市、安葬、见贵、求财；忌：祈福、求嗣、赴任、出行
壬戌日 酉时：宜：修造、作灶；忌：祭祀、祈福、斋醮、酬神
壬戌日 戌时：宜：祭祀、祈福、求嗣、斋醮、订婚、嫁娶、出行、安葬；忌：造船、乘船
壬戌日 亥时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、赴任、出行、求财、见贵、订婚、嫁娶；忌：无
癸亥日 子时：宜：求财、见贵、订婚、嫁娶、入宅、开市、安葬、求嗣；忌：祭祀、祈福、斋醮、开光、赴任、出行
癸亥日 丑时：宜：修造、盖屋、移徙、安床、入宅、开市、开仓、见贵、订婚、嫁娶、进人口；忌：赴任、出行、求财、祭祀、祈福、斋醮、开光
癸亥日 寅时：宜：求嗣、订婚、嫁娶、求财、开市、交易、安床；忌：赴任、修造、移徙、出行、词讼、祭祀、祈福、斋醮、酬神
癸亥日 卯时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、祭祀；忌：赴任、出行、修造、动土
癸亥日 辰时：宜：作灶、祭祀、祈福、斋醮、酬神、修造；忌：上梁、盖屋、入殓
癸亥日 巳时：宜：无；忌：诸事不宜
癸亥日 午时：宜：订婚、嫁娶、安床、移徙、入宅、修造、安葬；忌：祈福、求嗣、乘船
癸亥日 未时：宜：祈福、求嗣、订婚、嫁娶、求财、开市、交易、安床、修造、盖屋、移徙、作灶、祭祀；忌：赴任、出行
癸亥日 申时：宜：求财、见贵、嫁娶、进人口、移徙、安葬；忌：赴任、出行、修造、动土
癸亥日 酉时：宜：赴任、出行、见贵、求财、嫁娶、入宅、移徙、安葬；忌：无
癸亥日 戌时：宜：订婚、嫁娶、开市、安葬；忌：祭祀、祈福、斋醮、酬神
癸亥日 亥时：宜：求嗣、嫁娶、移徙、入宅、开市、交易、修造、安葬、订婚；忌：造桥、乘船、祭祀、祈福、斋醮、开光、赴任、出行
`,k1=`# 神圣纪念与神仙资料
# 本文件是神圣纪念日期、人物映射、神像、宝诰、宝诰出处与简介的唯一正式数据源。
# 传统节日由《传统节日.txt》独立维护，不得混入本文件。
# 人物可以拥有多个【纪念事件】；无明确人物归属的宗教纪念使用【独立纪念事件】。
# 人物资料与纪念事件可分别提供详情；神像、宝诰、人物简介、纪念简介按非空内容显示。
# 纪念事件可用“详情人物”绑定既有人物，也可只写事件自身的“纪念简介”；所有正式神圣纪念均须有详情。
# 匹配名称使用中文分号“；”分隔，仅用于同神异名和名称识别。
# 宝诰版本说明只作维护信息，不在前台展示。

【人物：祖天师张道陵】
匹配名称：祖天师；张道陵；正一靖应真君
【纪念事件】
日期：农历正月十五
名称：正一靖应真君圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历正月十五
名称：祖天师诞辰
类型：诞辰
【纪念结束】

神像：
宝诰标题：祖天师宝诰
宝诰出处：《太上玄门正一日诵早课·祖天师宝诰》
宝诰版本说明：采用“泰玄上相，扶教三天……”版本。
【宝诰开始】
志心皈命礼。泰玄上相，扶教三天。鹤鸣山上得真传，龙虎玄坛留妙诀。三洞法箓，诸品灵文。一千二百之官军，匡扶正教。二十四品秘箓，普度后人。都功玉印，官服群履。居都省而常侍上帝，掌三界而度下民。雌雄二剑，诛斩妖精。致雨作晴，轰雷掣电。如是立坛而布化，助国兴邦以安民。功成行满，白日飞升。祖师三天扶教。辅玄体道，大法天师。祖一洞玄，显佑真君。六合无穷，高明上帝，大圣降魔护道天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：虚靖天师张继先】
匹配名称：虚靖天师；张继先
【纪念事件】
日期：农历十月二十
名称：虚靖天师圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：虚靖天师宝诰
宝诰出处：《诸师真诰·虚靖天师宝诰》
宝诰版本说明：采用2A：“白雪丹霄，黄芽旧积……”体系。
【宝诰开始】
志心皈命礼。白雪丹霄，黄芽旧积，文章星斗，老君授三五飞步之玄机，玉局箓符，汉祖传正一斩邪之妙旨，惟名登于紫府，常掌握乎雷霆，伐疵疠于青城，灭怪妖于下界，巍巍荡荡，妙妙玄玄，作太极而生两仪，聚三华而朝五炁，随机格物，闲邪存诚，大悲大愿，大圣大慈，祖师地祇教主，三十代天师，虚靖宏悟，妙道张真君，天宫内相，文华无极真人，碧霄演教天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：湛然天师张彦頨】
匹配名称：湛然天师；张彦頨
【纪念事件】
日期：农历五月十八
名称：湛然天师圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠独立专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
第四十八代天师，号湛然。当前只显示简介，后续如取得可靠专属宝诰可直接补入本人物块。
【简介结束】
【人物结束】


【人物：玄天上帝】
匹配名称：玄天上帝；真武大帝；佑圣真君
【纪念事件】
日期：农历正月十五
名称：佑圣真君圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历三月初三
名称：北极真武玄天上帝圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历九月初九
名称：玄天上帝飞升
类型：飞升
【纪念结束】

神像：
宝诰标题：玄天宝诰
宝诰出处：《太上玄门正一日诵早课·玄天宝诰》
宝诰版本说明：采用3A，固定“九天游奕使，佐天罡北极”。
【宝诰开始】
志心皈命礼。混元六天，传法教主。修真悟道，济度群迷。普为众生，消除灾障。八十二化，三教祖师。大慈大悲，救苦救难。三元都总管，九天游奕使。佐天罡北极，右垣大将军。镇天助顺，真武灵应。福德衍庆，仁慈正烈。协运真君，治世福神。玉虚师相，玄天上帝，金阙化身，荡魔天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：太乙救苦天尊】
匹配名称：太乙救苦天尊；青玄九阳上帝
【纪念事件】
日期：农历十一月十一
名称：太乙救苦天尊圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：太乙救苦宝诰
宝诰出处：《宝诰大全·太乙宝诰》
宝诰版本说明：采用4A主体，结尾固定“青玄九阳上帝”。
【宝诰开始】
志心皈命礼。青华长乐界，东极妙严宫。七宝芳骞林，九色莲花座。万真环拱内。百亿瑞光中，玉清灵宝尊，应化玄元始。浩劫垂慈济，大千甘露门。妙道真身，紫金瑞相，随机赴感，誓愿无边。大圣大慈，大悲大愿。十方化号，普渡众生。亿亿劫中，度人无量。寻声赴感，太乙救苦天尊，青玄九阳上帝。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：王灵官】
匹配名称：王灵官；灵官王天君；王天君
【纪念事件】
日期：农历六月十五
名称：王灵官圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：灵官宝诰
宝诰出处：《太上玄门正一日诵早课·灵官宝诰》
宝诰版本说明：采用5B，结尾采用“太乙雷神应化天尊”。
【宝诰开始】
志心皈命礼。先天主将，一炁神君。都天纠罚大灵官，三界无私猛吏将。金睛朱发，号三五火车雷公。凤嘴银牙，统百万貔貅神将。飞腾云雾，号令雷霆。降雨开晴，驱邪治病。观过错于一十二年，受命玉帝。积功勋于百千万种，誓佐祖师。至刚至勇，济死济生。方方阐教，处处开坛。豁落猛吏，三五火车。太乙雷神应化天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：斗姥元君】
匹配名称：斗姥元君；斗母元君；圆明道姥天尊
【纪念事件】
日期：农历九月初九
名称：斗母元君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：斗姥宝诰
宝诰出处：《太上玄门正一日诵早课·斗姥宝诰》
宝诰版本说明：采用6A短诰。
【宝诰开始】
志心皈命礼。西天竺国，大智光中。真空妙相法王师，无上玄元天母主。金光烁处，日月潜辉。宝杵旋时，鬼神失色。显灵踪于尘世，卫圣驾于阎浮。众生有难若称名，大士寻声来救苦。大悲大愿，大圣大慈。圣德巨光天后，摩利支天大圣，圆明道姥天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：三官大帝】
匹配名称：三官大帝；三官

神像：
宝诰标题：三官宝诰
宝诰出处：《宝诰大全·三官宝诰》
宝诰版本说明：采用7B。
【宝诰开始】
志心皈命礼。唯三圣人，乃一太极，普受浩劫家之命，鼎膺无量品之褒，紫微清虚洞阴，总领功过，赐福赦罪解厄，普济存亡，道冠诸天，恩覃三界，大悲大愿，大圣大慈，三元三品，三官大帝，三官九府，应感天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：上元天官】
匹配名称：上元天官；天官大帝；天官
【纪念事件】
日期：农历正月十五
名称：上元天官圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：天官宝诰
宝诰出处：三官科仪所载《天官宝诰》
宝诰版本说明：采用稳定通行本。
【宝诰开始】
志心皈命礼。玄都元阳，紫微宫中。部三十六曹，偕九千万众。考较大千世界之内，录籍十方国土之中。福被万灵，主众生善恶之籍。恩覃三界，致诸仙升降之司。除无妄之灾，解释宿殃。脱生死之趣，救拔幽苦。群生是赖，蠢动咸康。大悲大愿，大圣大慈。上元九炁赐福天官，曜灵元阳大帝紫微帝君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：中元地官】
匹配名称：中元地官；地官大帝；地官
【纪念事件】
日期：农历七月十五
名称：中元地官圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：地官宝诰
宝诰出处：《宝诰大全·中元地官大帝宝诰》
宝诰版本说明：采用稳定通行本。
【宝诰开始】
志心皈命礼。青灵洞阳，北都宫中。部四十二曹，偕九千万众。主管三界十方九地，掌握五岳八极四维。吐纳阴阳，核男女善恶青黑之籍；慈育天地，考众生录籍祸福之名。法源浩大而能离九幽，浩劫垂光而能消万罪。群生父母，存没沾恩。大悲大愿，大圣大慈。中元七炁赦罪地官，洞灵青虚大帝，青灵帝君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：下元水官】
匹配名称：下元水官；水官大帝；水官
【纪念事件】
日期：农历十月十五
名称：下元水官圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：水官宝诰
宝诰出处：《宝诰大全·下元水官大帝宝诰》
宝诰版本说明：采用稳定通行本。
【宝诰开始】
志心皈命礼。旸谷洞元，青灵宫中。部四十二曹，偕九千万众，掌管江河水帝万灵之事。水灾大会，劫数之期。正一法王，掌长夜死魂鬼神之籍；无为教主，录众生功过罪福之由。上解天灾，度业满之灵；下济幽扃，分人鬼之道。存亡俱泰，力济无穷。大悲大愿，大圣大慈。下元五炁解厄水官，金灵洞阴大帝，旸谷帝君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：东岳大帝】
匹配名称：东岳大帝；东岳天齐仁圣大帝
【纪念事件】
日期：农历三月廿八
名称：东岳大帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：东岳宝诰
宝诰出处：《元始天尊说东岳化身济生度死拔罪解冤保命玄范诰咒妙经·东岳宝诰》
宝诰版本说明：采用8A古经长诰系。
【宝诰开始】
志心皈命礼。赫赫玄英之祖，金轮绍海之宗。弥仙母梦日光生，紫府圣人东华弟。昔建功于长白，始受封于羲皇。初号泰华真人，汉明泰山元帅，唐会崇恩圣帝，圣朝敕字上主。位镇坤维，功参乾造。仁以德仁，回阳手于掌上；圣心益圣，丽日月于天中。五岳称赞于东方，三界独尊于中界。仰奉行于大道，俯纠察于阴司。掌人间善恶之权，握天下死生之柄。惩奸恶而狱分三十六署，司吉凶而案判七十二曹。行善者注生天堂，沉迷者寻声救度。示慈尊垂慈之相，开众生生化之门。福与天齐，功高无量。大悲大愿，大圣大慈。中界至尊，东岳圣帝，慈光救苦，威权自在天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：三茅真君】
匹配名称：三茅真君；三茅
【纪念事件】
日期：农历三月十八
名称：三茅真君圣得道
类型：宗教纪念
【纪念结束】

【纪念事件】
日期：农历十月初三
名称：三茅应化真君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：三茅真君宝诰
宝诰出处：《宝诰大全·三茅真君诰》
宝诰版本说明：采用9A。
【宝诰开始】
志心皈命礼。天人道德，仙圣真师。孝弟通于神明，恩泽被于家国。隐恒山而悟道，栖勾曲以升天。主岱宗衡霍之山，职赤城华阳之洞。劫运阴阳而统斡，雷霆水泽以兼司。接二弟之英姿，授登真之秘诀。咸领神仙之籍，共膺玉册之荣。德普幽明，仁沾普率。随机赴感，誓愿洪深。太元妙道冲虚圣佑真应真君，地仙上真定录右禁至道冲静德佑妙应真君。地仙至真三官保命微妙冲惠仁佑神应真君，九天司命上卿，三茅应化，保生天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：葛仙翁葛玄】
匹配名称：葛仙翁；葛玄；葛孝先真人
【纪念事件】
日期：农历四月初八
名称：葛孝先真人葛玄圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：葛仙翁宝诰
宝诰出处：《宝诰大全·葛仙翁宝诰》
宝诰版本说明：采用10A。注意：二月十三“葛真君”不是葛玄，而是中元护正真君葛雍。
【宝诰开始】
志心皈命礼。天台得道，合宅成真，昔受东华，复传西蜀，诏命玉京金阙，位证太极仙班，慈怜拯拔于沈沦，恩念普资于苦爽，葛天氏遗风显著，勾漏令凡砂俱存，括苍任游，罗浮乃止，倐闲玉笋，修理金书，大悲大愿，大圣大慈，太上玉京，东吴太极左公仙翁，雷霆玄省，天机内相，玉虚紫灵，普化玄静，常道冲应，孚佑真君，垂恩广教，慈悲大帝，度人无量天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：许天师】
匹配名称：许天师；许真君；许逊；许旌阳；净明祖师

【纪念事件】
日期：农历正月廿八
名称：许天师圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历八月初一
名称：许天师得道飞升日
类型：得道飞升日
【纪念结束】

神像：
宝诰标题：许天师宝诰
宝诰出处：太乙观道讯《八月初一，许天师得道飞升日！斩妖除魔广布忠孝，举家拔宅飞升的祖师！》
宝诰版本说明：按用户指定文章所载“许天师宝诰”全文录入，采用“九州都仙太使”“天枢伏魔上相”“掌九天司籍”“太乙定命”等原文异文。
【宝诰开始】
志心皈命礼。混元始祖，一炁分真。多劫之前，积修至道。勤苦备悉，经纬逾深。万法千门，罔不斯历。救灾拔难，除害荡妖。功济生灵，名高玉籍。众真推仰，宜有甄升。大悲大愿，大孝大仁。九州都仙太使，高明大使，雷霆泰省，天枢伏魔上相，至道玄应，神功妙济，掌九天司籍，太乙定命，注生真君，三天按察都检校，普天奏议大夫天医大帝，历劫度人祖师，净明普化天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：萨祖萨守坚】
匹配名称：萨祖；萨守坚；萨翁真君；萨真人
【纪念事件】
日期：农历九月廿三
名称：萨真人圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：萨祖宝诰
宝诰出处：《宝诰大全·萨祖宝诰》
宝诰版本说明：采用12B，保留“萨翁真君、玄风永振天尊”。
【宝诰开始】
志心皈命礼。派流西蜀，迹显龙兴。施财合药济群生，积行累功修至道。授铁师之教旨，掌玉府之雷书。身披百衲伏魔衣，手执五明降鬼扇。代天宣化，咒枣书符。运风雷于咫尺之间，剪妖魔于斗罡之下。道参太极，位列仙班。松筠野鹤任纵横，遐迩孤云常自在。方方阐教，为万法之宗师，处处开坛，作后人之模范。都天宗主，一元无上萨翁真君，玄风永振天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：九天应元雷声普化天尊】
匹配名称：九天应元雷声普化天尊；雷祖；普化天尊
【纪念事件】
日期：农历六月廿四
名称：九天应元雷声普化天尊雷祖圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：雷祖宝诰
宝诰出处：《诸师真诰·雷祖宝诰》
宝诰版本说明：采用13B，固定“以智慧力而伏诸魔”“运行三界”“趺九凤”。六月二十四为雷祖圣诞。
【宝诰开始】
志心皈命礼。九天应元府，无上玉清王。化形而满十方，谈道而趺九凤。三十六天之上，阅宝笈，考琼书；千五百劫之先，位正真，权大化。手举金光如意，宣说玉枢宝经。不顺化作微尘，发号疾如风火。以清净心，而弘大愿；以智慧力，而伏诸魔。总司五雷，运行三界。群生父，万灵师，大圣大慈、至皇至道、九天应元雷声普化天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：吕祖吕洞宾】
匹配名称：吕祖；吕洞宾；纯阳祖师
【纪念事件】
日期：农历四月十四
名称：吕纯阳祖师圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：吕祖宝诰
宝诰出处：《宝诰大全·孚佑上帝纯阳吕祖诰》
宝诰版本说明：采用14B：“黄粱梦觉”“有感必孚”“黄鹄溪头”“存芝象于丹崖”“纯阳演政”。
【宝诰开始】
志心皈命礼。玉清内相，金阙选仙，化身为三教之师，掌法判五雷之令，黄粱梦觉，忘世上之功名，宝剑光辉，扫人间之妖怪，四生六道，有感必孚，三界十方，无求不应，黄鹄溪头留圣迹，玉虚殿内炼丹砂，存芝象于丹崖，显仙迹于云洞，衍法门之香火，作玄嗣之梯航，大圣大慈，大仁大孝，开山启教，元应祖师，天雷上相，灵宝真人，纯阳演政，警化孚佑帝君，兴行妙道天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：文昌帝君】
匹配名称：文昌帝君；梓潼帝君
【纪念事件】
日期：农历二月初三
名称：文昌梓潼帝君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：文昌帝君宝诰
宝诰出处：《正统道藏·玄真灵应宝签》所载《文昌帝君宝诰》
宝诰版本说明：采用15A。
【宝诰开始】
志心皈命礼。不骄帝境。玉真庆宫。现九十八化之行藏。显亿千万种之神异。飞鸾开化于在在，如意救劫以生生。至孝至仁，功存乎儒道释教。不骄不乐，职尽乎天地水官。功德难量。威灵莫测。大悲大愿。大圣大慈。九天辅元。开化主宰。司禄职贡举真君。七曲灵应，保德弘仁大帝。谈经演教。消劫行化。更生永命天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：关圣帝君】
匹配名称：关圣帝君；关帝；关圣；关羽
【纪念事件】
日期：农历五月十三
名称：关圣帝君降神
类型：降神
【纪念结束】

【纪念事件】
日期：农历五月十三
名称：关帝磨刀日
类型：宗教纪念
【纪念结束】

【纪念事件】
日期：农历六月廿四
名称：关圣帝君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：关圣帝君宝诰
宝诰出处：《宝诰大全·关圣帝君宝诰》
宝诰版本说明：采用16A。圣诞固定六月二十四。
【宝诰开始】
志心皈命礼。太上神威，英文雄武。精忠大义，高节清廉。协运皇图，德崇演正。掌上中下界之权，管天地人才之柄。上司三十六天星辰云汉，下辖七十二地冥垒幽酆。秉注人身功德延寿丹书，执定生死罪过夺命黑籍。考察诸天诸神，监制群仙群职。德圆妙果，无量度人。万灵万圣，至上至尊。忠孝祖师，伏魔大帝，关圣帝君。大悲大愿，大圣大慈。贞元显应，昭明翊汉天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：玉皇上帝】
匹配名称：玉皇上帝；玉皇大帝；玉皇大天尊
【纪念事件】
日期：农历正月初九
名称：玉皇上帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：玉皇宝诰
宝诰出处：《宝诰大全·弥罗宝诰》
宝诰版本说明：采用17A短诰：“太上弥罗无上天……”结尾“玉皇大天尊，玄穹高上帝”。
【宝诰开始】
志心皈命礼。太上弥罗无上天，妙有玄真境。渺渺紫金阙，太微玉清宫。无极无上圣，廓落豁光明。寂寂浩无宗，玄范总十方。湛寂真常道，恢漠大神通。玉皇大天尊，玄穹高上帝。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：天上圣母妈祖】
匹配名称：天上圣母；妈祖；天后；天妃娘娘；辅斗元君
【纪念事件】
日期：农历三月廿三
名称：天妃娘娘圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：天上圣母宝诰
宝诰出处：《天上圣母慈济真经·天上圣母宝诰》
宝诰版本说明：采用18B。
【宝诰开始】
志心皈命礼。坤舆合撰，嵩岳钟灵。降生于兜率仙宫，正位泉源水府。嘘风吸雨，统江淮河海之宗。佑国庇民，济西北东南之险。闽海证果，湄屿生辉。大悲大愿，大孝大仁。敕封护国庇民，明著妙灵，昭应弘仁普济天后，天上圣母，辅斗元君大天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：财神赵公明】
匹配名称：赵公明；玄坛财神；赵元帅
【纪念事件】
日期：农历三月十五
名称：玄坛赵元帅圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：玄坛财神宝诰
宝诰出处：玄坛财神科仪所载《玄坛财神宝诰》
宝诰版本说明：采用19A。
【宝诰开始】
志心皈命礼。位列玄坛，金轮如意。黑虎吼时，天下妖魔皆丧胆；金鞭起处，世间邪魅悉潜形。受命玉帝，管理财源。统帅雷部，号令瘟火。赏善罚恶，至公至正。大悲大愿，大圣大慈。巡查坛院，玄坛赵天君，掌理天下财源，督财府中大元帅，玄化财神天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：东华帝君】
匹配名称：东华帝君；东王木公；木公
【纪念事件】
日期：农历二月初六
名称：东华帝君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：东华木公诰
宝诰出处：《宝诰大全·东华木公诰》
宝诰版本说明：采用20A。圣诞固定二月初六。
【宝诰开始】
志心皈命礼。清微大道，无极神君，元始之化炁分真，紫府之潜龙勿用，称帝于方诸之山，职掌天阶仙籍，立阙于碧海之上，道称化育群生，三宫有管辖之司，八帝为无为之座，届期登台，南顾宛尔，紫气东来，湛寂真静，诞迪玄功，无上之君，群真之祖，大悲大愿，大圣大慈，东华大司命，少阳帝主，王公木父天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：勾陈上宫天皇大帝】
匹配名称：勾陈上宫天皇大帝；勾陈大帝；天皇大帝
【纪念事件】
日期：农历二月初二
名称：勾陈上宫天皇大帝神诞
类型：神诞
【纪念结束】

神像：
宝诰标题：勾陈宝诰
宝诰出处：《宝诰大全·天皇宝诰》
宝诰版本说明：采用21A，结尾“勾陈上宫，天皇大帝”。
【宝诰开始】
志心皈命礼。紫微宸极，勾陈天宫。九光宝苑之中，五炁玄都之上。体元皇，而佐司玄化；总两极，而共理三才。主持兵革之权衡，广推大德；统御星辰之躔次，毋失常经。上象巍峨，真元恢漠。大悲大愿、大圣大慈、勾陈上宫天皇上帝。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：长春祖师丘处机】
匹配名称：丘处机；邱处机；长春祖师；长春真人丘处机；长春邱真人
【纪念事件】
日期：农历正月十九
名称：长春邱真人圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：长春祖师宝诰
宝诰出处：《宝诰大全·和惠大帝邱祖诰》
宝诰版本说明：采用22A。
【宝诰开始】
志心皈命礼。宁海从真，龙门启派，修苦行于三千，立玄纲于百世，嘉谟入诰，尽觉后之金针，遗集垂科，乃通玄之玉液，长阳消阴，生水济火，道高重于金元，仙迹留于蜀陇，卓哉仙品，伟矣洪仁，大悲大愿，大圣大慈，三天翼教，承先启后宗师，接引大使，虎符领道大夫，雷霆行省，通明上相，宣德行化真君，通权达变，和惠大帝，全真演教天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：长春真人刘渊然】
匹配名称：刘渊然；刘真人；长春真人刘渊然
【纪念事件】
日期：农历二月初一
名称：长春刘真人圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：刘祖宝诰
宝诰出处：云南龙泉观刘祖科仪所载《刘祖宝诰》
宝诰版本说明：采用23A。
【宝诰开始】
志心皈命礼。明代真仙，皇卿宰辅。悟玄元一炁，就金阙华峰。六根清净，宿慧忆七世之身；三田宝贵，脱劫超九重之先。功济生民，泽流后世。降魔护道，驻裔宗于龙泉；祷雨祈晴，受敕封于贝阙。派分南北，为神仙之领袖；登传天云，作道院之玄宗。名列金阙，职备斗宫。大悲大愿，大圣大慈。福国佑民真宰，神仙大梵真人，玄功广法天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：土地正神】
匹配名称：土地正神；福德正神；土地爷
【纪念事件】
日期：农历二月初二
名称：土地正神圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历十二月十六
名称：福德正神圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：土地宝诰
宝诰出处：道门土地科仪所载《土地宝诰》
宝诰版本说明：采用24C：“童颜鹤发，福寿遐龄……”体系。
【宝诰开始】
志心皈命礼。童颜鹤发，福寿遐龄。道骨仙风，至仁长者。受三界之敕旨，传雷霆之命令。居逍遥境界，乐窈窕洞天。头戴平顶金冠，手持化龙杵杖。身受蓝袍，映耀日月；足踏秀履，常登祥云。左边盼右边视，方方拥护；前伏龙后伏虎，处处降吉。为国为民终有益，祈恩祈福亦通灵。兴道德则难名难思，为神明而有灵有应。祛邪扶正，降吉化凶。大悲大愿，大圣大慈。中央镇位真官，通灵夫子，土地大道神祇。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：姜太公】
匹配名称：姜太公；姜尚；姜子牙

神像：
宝诰标题：姜太公宝诰
宝诰出处：道门科仪所载《姜太公宝诰》
宝诰版本说明：采用25A。
【宝诰开始】
志心皈命礼。商庚下降，周康飞升。六韬奇谋显武略，七君易辅出良臣。出将入相、广成千秋伟业；伐罪吊民、流芳万古功勋。万仁太师、大周开立尚书望；百家宗祖、侯齐昭烈武成王。运筹帷幄欺风后；燮理阴阳胜彭祖。千古帝师仅一人；百代王佐无二真。大愿大圣、大功大德，天枢尚书省，太师平章事、韬略教主、宠元霄难天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：太上老君】
匹配名称：太上老君；道德天尊；混元皇帝；西子帝君
【纪念事件】
日期：农历正月十五
名称：混元皇帝圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历正月十五
名称：西子帝君圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历二月十五
名称：太上老君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：太清宝诰
宝诰出处：《宝诰大全·太清宝诰》
宝诰版本说明：采用26A。
【宝诰开始】
志心皈命礼。随方设教，历劫度人。为皇者师，帝者师，王者师，假名易号；立天之道，地之道，人之道，隐圣显凡。总千二百之官君，包万亿重之梵炁。化行今古，著道德凡五千言；主握阴阳，命雷霆用九五数。大悲大愿、大圣大慈、太上老君道德天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：元始天尊】
匹配名称：元始天尊；玉清元始天尊

神像：
宝诰标题：玉清宝诰
宝诰出处：《宝诰大全·玉清宝诰》
宝诰版本说明：采用27A，固定“开明三景，化生诸天”；结尾“大罗玉清，虚无自然，至真妙道，元始天尊”。
【宝诰开始】
志心皈命礼。三界之上，梵炁弥罗。上极无上，天中之天。郁罗萧台，玉山上京。渺渺金阙，森罗净泓。玄元一炁，混沌之先。宝珠之中，玄之又玄。开明三景，化生诸天。亿万天真，无鞅数众。旋斗历箕，回度五常。巍巍大范，万道之宗。大罗玉清、虚无自然、至真妙道元始天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：灵宝天尊】
匹配名称：灵宝天尊；玉宸道君

神像：
宝诰标题：上清宝诰
宝诰出处：《宝诰大全·上清宝诰》
宝诰版本说明：采用28A。
【宝诰开始】
志心皈命礼。居上清境，号灵宝君。祖劫化生，九万九千余梵炁；赤书焕发，六百六十八真文。因混沌赤文而开九霄，纪元洞玉历而分五劫。天经地纬，巍乎造化之宗；枢阴机阳，卓尔雷霆之祖。大悲大愿、大圣大慈、玉宸道君灵宝天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：西王母】
匹配名称：西王母；西王金母；瑶池金母；王母娘娘
【纪念事件】
日期：农历七月十八
名称：王母娘娘圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：西王母宝诰
宝诰出处：《宝诰大全·西王金母宝诰》
宝诰版本说明：采用29A。
【宝诰开始】
志心皈命礼。天池开泰，无极圣母，龙华盛会宴瑶池，万灵统御传教旨。诸仙献寿，列圣称觞，天威咫尺，功高德重，代燮全衡，仙主道宗。三千侍女，奏笙簧之天乐。百岁蟠桃，开金碧之灵园。救众生之苦难，洒甘露于尘寰。大悲大愿，大圣大慈，无极瑶池大圣西王金母天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：张三丰祖师】
匹配名称：张三丰；三丰祖师

神像：
宝诰标题：张三丰宝诰
宝诰出处：《张三丰先生全集》所载《张三丰宝诰》
宝诰版本说明：采用30B（宝诰二，武当开教型）。
【宝诰开始】
志心皈命礼。始青一炁，教阐十方。积功勋于大明，度众生于廛市。遇火龙而细参至道，入武当而调养谷神。混俗和光，经纬五载；入山面壁，考验九年。大廷朝驾显飞升，名山古洞留仙迹。方方开化，处处设坛。演金科流传万世，证金丹度尽后学。大悲大愿。大慈大仁。至灵至圣。至公至明。群真一元。始祖广慈普度真君。通微显化天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：后土皇地祇】
匹配名称：后土皇地祇；后土娘娘；后土
【纪念事件】
日期：农历三月十八
名称：后土娘娘圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：后土宝诰
宝诰出处：《宝诰大全·后土宝诰》
宝诰版本说明：采用31B：“主执阴阳之柄”“流形品物”“山川咸仗”。
【宝诰开始】
志心皈命礼。九华玉阙，七宝皇房。承天禀命之期，主执阴阳之柄。道推尊而含弘光大，德数蓄于柔顺利贞。效法昊天，根本育坤元之美。流形品物，生成施母道之仁。岳渎是依，山川咸仗。大悲大愿，大圣大慈。承天效法，后土皇地祇。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：中天紫微北极大帝】
匹配名称：紫微大帝；中天紫微北极大帝；北极紫微大帝
【纪念事件】
日期：农历四月十八
名称：紫微大帝圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历十月廿七
名称：中天紫微北极大帝下降
类型：下降
【纪念结束】

神像：
宝诰标题：星主宝诰
宝诰出处：《宝诰大全·星主宝诰》
宝诰版本说明：采用32A：“法号金轮炽盛”“璇玑玉衡齐七政”。四月十八圣诞；十月二十七为下降。
【宝诰开始】
志心皈命礼。大罗天阙，紫微星宫。尊居北极之高，位正中天之上，法号金轮炽盛，道称玉斗玄尊。璇玑玉衡，齐七政；总天经地，纬日月。星宿约，四时行，黄道紫垣，万象宗师，诸天统御。大悲大愿、大圣大慈、万星教主、无极元皇、中天紫微北极大帝。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：药王孙思邈】
匹配名称：孙思邈；药王；药王孙真人
【纪念事件】
日期：农历四月廿八
名称：药王孙真人圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：药王宝诰
宝诰出处：《宝诰大全·药王宝诰》
宝诰版本说明：采用33B神虎炼丹型。
【宝诰开始】
志心皈命礼。百家门上炼丹成，神虎巡风游世界。身穿龙袍，脚腾火轮。凡民有难来相请，护助弟子救万民。千处有请千处应，万处有请万处灵。屋宅化做黄金殿，病人化作天生人。吃药有效，用药有灵。消除灾障，治邪亡魂。二把老龙当眼看，唐朝香火救凡民。起死回生如反掌，灵丹救济世间人。炼灵丹，治妙药，传海上之仙方，引龙宫之妙诀。大悲大愿，大圣大慈。唐朝医祖，济世高隍天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：都城隍】
匹配名称：都城隍；城隍
【纪念事件】
日期：农历五月十一
名称：都城隍圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：城隍宝诰
宝诰出处：《宝诰大全·城隍宝诰》
宝诰版本说明：采用34A。
【宝诰开始】
志心皈命礼。社稷古公，天下正神。铨福国显忠之行，禀赏善罚恶之仁。都邑之主，诸郡侍从。所隶十三布政，案判一十八司。庙社万年，恩扶亿劫。设作福作威之柄，造注生注死之权。运神力以护郢川，遇阴兵而驱夷寇。至灵至圣，乃正乃公，护国保宁佑圣王威灵公感应尊神。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：九天东厨司命灶王府君】
匹配名称：灶君；灶王；灶王府君；九天东厨司命
【纪念事件】
日期：农历八月初三
名称：灶君圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历十二月廿四
名称：司命灶君上天朝
类型：上天
【纪念结束】

神像：
宝诰标题：灶王宝诰
宝诰出处：《太上灵宝补谢灶王经》所载《灶王宝诰》
宝诰版本说明：采用35A。
【宝诰开始】
志心皈命礼。位司喉舌，经理庖厨。录人间功过之因，依期上奏。体天地生成之化，覆佑下民。驱不正之鬼神，扫尘中之疵疠。一家吉庆，合宅昌荣。朝夕承匡扶之仁，庚申察是非之目。雍雍瑞相，赫赫灵祇。大悲大愿，大圣大慈。九天司命太乙元皇，定福奏善天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：地司太岁殷元帅】
匹配名称：殷太岁；殷元帅；地司太岁
【纪念事件】
日期：农历七月十九
名称：殷太岁圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：地司太岁宝诰
宝诰出处：地司荡凶科仪所载《地司太岁宝诰》
宝诰版本说明：采用36A。
【宝诰开始】
志心皈命礼。尊居斗口，职掌荡凶。为上天六十甲子真官，作下土十二岁神主宰。腾腾煞炁，上凌五云；赫赫威仪，遍周三界。金铃响处，魑魅魍魉尽潜藏；宝戟旋持，疫疠瘟癀皆远遁。统诸部禁忌神煞，威镇乾坤；运无上神通法身，功行宇宙。察万方之皈仰，总五德之权衡。何灾不灭，何厄不蠲。大英大烈，至威至灵。地司荡凶院，都雷杀伐主帅，殷大天君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：二郎真君】
匹配名称：二郎真君；二郎神；清源妙道真君
【纪念事件】
日期：农历六月廿六
名称：二郎真君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：二郎真君宝诰
宝诰出处：道门科仪所载《二郎真君宝诰》
宝诰版本说明：采用37A。
【宝诰开始】
志心皈命礼。圣德巍巍，神功浩浩。显应忉利之上，徽济方隅之中。御黄袍而赞襄，禅五帝而驾白龙。迅察人间，体入自然。融融喜动，眷风威示；法相赳赳，怒凛秋霜。帽形三山，镇永劫之魔障；太名哮犬，逐间出之秽气。兼总三十六部雷雨，系五谷之丰歉。独全玄功七十二变化，有无成万世之化育。手执三尖刀，一百二十斤。左童子以旋乾，右将军以转坤。捍冰雹以卫嘉禾，御凶殃以福生民。大无外而作高诸天，小无内而职司户牖。法力无测，阴泽莫穷。大悲大愿，大圣大慈。清源妙道崇宁护国真君，白马万天左丞相，道济鸿钧天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：五显华光大帝马元帅】
匹配名称：马元帅；华光大帝；五显灵官；五显华光大帝；马天君
【纪念事件】
日期：农历九月廿八
名称：五显灵官圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历九月廿八
名称：马元帅圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：马元帅宝诰
宝诰出处：《宝诰大全·马元帅宝诰》
宝诰版本说明：采用38A。马元帅／华光大帝／五显灵官统一此人物资料。
【宝诰开始】
志心皈命礼。斗口魁神，璿玑上将，三头磊落，应三台照耀之形，九目辉华，印九斗光华之象，秉西灵之金气，足蹈白蛇，戴南极之威灵，背飞丹乌，寄化冲天风火院，专司北极号天罡，宝剑珠铃，挥霍妖魔皆绝灭，帝锺法印，行持神鬼悉皈依，随梓橦而主文衡，辅紫微而司禄命，大悲大愿，大圣大威，高上神霄，玉清尊王，混元主法元帅，玉府司命真君，光明华藏，寂道真皇，南极火犀大仙，北帝都天罡，横天威烈神王，摄魔雷令大神，掌管雷霆都司，考召捉命大将，掌管云雷雨电，纠察三界邪魔，天下都提辖，正一灵官马天君，太乙雷声不动天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：增福财神李诡祖】
匹配名称：增福财神；李诡祖；财帛星君
【纪念事件】
日期：农历七月廿二
名称：增福财神成道日
类型：成道
【纪念结束】

【纪念事件】
日期：农历九月十七
名称：增福财神圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：财帛星君宝诰
宝诰出处：增福财神科仪所载《财帛星君宝诰》
宝诰版本说明：采用40A。
【宝诰开始】
志心皈命礼。金星下凡，为官清廉爱民。隐居修行，成仙五松山下。降伏水妖，为民除害。阴阳两界都为神，保佑吉祥并如意。职掌天下金银财帛，统管世间一切财宝。校籍世上之人钱财多寡，主宰千家万户富有贫穷。招财进宝，都天致富。赐福世人，所求如愿。大悲大愿，大圣大慈。福善平施，司财之神，增福相公，财帛星君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：井泉龙王】
匹配名称：井泉龙王
【纪念事件】
日期：农历六月十三
名称：井泉龙王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：无可靠专属宝诰；与四海龙王分开。六月十三为井泉龙王圣诞。
【宝诰开始】

【宝诰结束】
【简介开始】
传统井泉水神，主井泉水脉与地方水域护佑。
【简介结束】
【人物结束】


【人物：四海龙王】
匹配名称：四海龙王；龙王
【纪念事件】
日期：农历三月初三
名称：四海龙王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：龙王宝诰
宝诰出处：《宝诰大全·龙王宝诰》
宝诰版本说明：采用泛称《龙王宝诰》。三月初三为四海龙王圣诞。
【宝诰开始】
志心皈命礼。海灌为宫，瑶岛接祉。天潢之苗裔，苍茫之令辟，职秉三天，敕旨统驭百灵；心同天母，慈仁周全万类。波涛恬静，不教泛溢于江河；鳞介潜沉，未许滔翻而荼毒。浩浩纳指南之车，渊渊沛义安之泽。神功普遍，巨德覃敷。大悲大愿，大圣大慈。九海全部英烈，贵胄神王，通达无碍天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：地祇温元帅温琼】
匹配名称：温元帅；温琼；地祇温元帅
【纪念事件】
日期：农历五月初五
名称：地祗温元帅圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：温元帅宝诰
宝诰出处：《宝诰大全·温天君宝诰》
宝诰版本说明：采用42A。
【宝诰开始】
志心皈命礼。天庭上将，地府正神。道妙同人，斑竹村中施惠泽；德隆舍己，黄金阙内锡恩波。顶戴琼花，天门出入；手持环锏，霄汉无拘。掌九幽急取人案之典，膺五岳神宗将首之班。正炁荧煌，威灵赫奕。大英大烈，大德大仁。玉皇殿前左亢金，翊灵昭武温都统。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：炳灵公】
匹配名称：炳灵公；东岳上殿太子
【纪念事件】
日期：农历五月十二
名称：炳灵公圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：炳灵公宝诰
宝诰出处：东岳科仪所载《炳灵公宝诰》
宝诰版本说明：采用43A，固定“降祥”。
【宝诰开始】
志心皈命礼。灵分三炁，质托九阳。木火相生，乃化成于本始；乾坤配位，育秀气于灵根。体性炎炎，降福降祥降福祉；正心耿耿，广文广武广仁慈。遵父威权，体天行道。大悲大愿，大孝大仁。东岳上殿太子，至圣炳灵仁惠王尊神。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：刘海蟾祖师】
匹配名称：刘海蟾；海蟾祖师
【纪念事件】
日期：农历六月初十
名称：刘海蟾帝君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：刘海蟾宝诰
宝诰出处：《宝诰大全·海蟾帝君刘祖诰》
宝诰版本说明：采用44A。
【宝诰开始】
志心皈命礼。燕山名相，辽左才人，身处富贵之场，性好清虚之道，云房点化以危机，感悟潜身而解组，三百口之火宅俱抛，十万家之门兵尽屏，修真于武夷山中，显化于王屋岭上，济度洪深，玄功广博，大悲大愿，大圣大慈，海阳嗣派，九天扶正帝君，启南兴教天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：南极长生大帝】
匹配名称：南极长生大帝；长生大帝
【纪念事件】
日期：农历五月初一
名称：南极长生大帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：南极宝诰
宝诰出处：《宝诰大全·南极宝诰》
宝诰版本说明：采用45A。
【宝诰开始】
志心皈命礼。高上神霄府，凝神焕照宫。会元始祖炁以分真；应妙道虚无而开化。位乎九霄之上，统理诸天；总乎十极之中，宰制万化。宣金符而垂光济苦，施惠泽而覆育兆民。恩溥乾元，仁敷浩劫。大悲大愿、大圣大慈、玉清真王、南极长生大帝、统天元圣天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：正阳钟离祖师】
匹配名称：钟离祖师；钟离权；正阳祖师
【纪念事件】
日期：农历四月十五
名称：钟离祖师圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：钟离祖师宝诰
宝诰出处：《宝诰大全·正阳帝君钟离老祖诰》
宝诰版本说明：采用46A：“渡”“赐”“宏愿”。
【宝诰开始】
志心皈命礼。黄芽得道，白雪成真，配水火于一炁之中，运阴阳于三华之顶，无无虚寂，渺渺凝玄，胎息刀圭，孰悟本来之体，婴儿姹女，谁知灵府之台，渡众生于欲海之波，赐蕊珠于云霄之表，宏愿不穷，好生常念，大悲大愿，大圣大慈，正阳继派，终南洞天帝主，飞行救劫天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：丹阳真人马钰】
匹配名称：马钰；丹阳真人；丹阳马真人
【纪念事件】
日期：农历五月二十
名称：丹阳马真人圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历十二月廿二
名称：丹阳真人成道
类型：成道
【纪念结束】

神像：
宝诰标题：丹阳马祖宝诰
宝诰出处：《宝诰大全·丹阳马祖宝诰》
宝诰版本说明：采用47A。
【宝诰开始】
志心皈命礼。伏波苗裔，阆苑飞仙，领袖诸真，为重阳之高弟，精融丹液，开后学之津梁，梳三髻以示，誓不忘师，战千魔以能，备臻大道，惟一点丹田，暖拥遂三千，薄海神周济度，无穷灵奇莫罄，大悲大愿，大圣大慈，全真领教，丹阳抱一上仙，无为普化天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：重阳帝君王重阳】
匹配名称：王重阳；重阳帝君；重阳祖师
【纪念事件】
日期：农历九月初九
名称：重阳帝君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：重阳祖师宝诰
宝诰出处：《宝诰大全·重阳祖师宝诰》
宝诰版本说明：采用48A。日历圣诞保留九月初九。
【宝诰开始】
志心皈命礼。北宗后殿，仙籍名贤。轻财好施，任强恣取。感孔孟之不惑不动，四十以之自方；乐烟霞之弃室弃家，三洞从之是式。自提携得钟吕，乃妙悟会阴阳。甘河镇内，心传秘语五篇；东极云中，瑞现金莲七朵。视富若浮云，以道为至宝。四世之续音，七真之始祖。大悲大愿，大圣大慈。重阳广教，兴玄育德帝君，飞雨妙化天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：酆都大帝】
匹配名称：酆都大帝；北阴酆都大帝
【纪念事件】
日期：农历九月初九
名称：酆都大帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：酆都宝诰
宝诰出处：《宝诰大全·酆都大帝宝诰》
宝诰版本说明：采用49A短本。
【宝诰开始】
志心皈命礼。北阴都府，纠讨伦宫。职领幽阴，权司考掠。别人间之私曲，辨尘世之贤愚。斩绝贪悭，消除爱欲。化顽归善，使恶回仁。大悲大愿，大圣大慈。洞阴元滋天君，北阴酆都神威大帝。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：北极天猷大元帅】
匹配名称：天猷上帝；天猷大元帅；北极天猷大元帅
【纪念事件】
日期：农历十二月廿一
名称：天猷上帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：天猷宝诰
宝诰出处：《太上九天延祥涤厄四圣妙经·天猷宝诰》
宝诰版本说明：采用50A。
【宝诰开始】
志心皈命礼。妙有天中，通明殿右。领天罡之次帅，列下土之诸侯。悯凡庸迷谬以丧真，仰圣相大光而作序。赞演诸天之隐韵，述敷大梵之仙章。俯怜崇奉之诚，大赐护持之力。云随步发，海逐身流。大悲大愿，大圣大慈。通天祈祐，延祥涤厄，滋育身命。北极天猷大元帅，普化天帝，证果冲和应善天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：中岳嵩山大帝】
匹配名称：中岳大帝；中岳嵩山大帝
【纪念事件】
日期：农历三月十八
名称：中岳大帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：中岳宝诰
宝诰出处：五岳科仪所载《中岳宝诰》
宝诰版本说明：采用51A。
【宝诰开始】
志心皈命礼。中天尊帝，四岳朝天。立五方之命脉，活万古之生民。根通坤顶，本白干灵。镇八隅之灾星，赐四维之福庆。大仁大圣，大愿大悲，掌管五土，中岳中天，大宁崇圣帝，太虚浩荡，司算真君，黄天中主天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：南岳衡山大帝】
匹配名称：南岳大帝；南岳衡山大帝
【纪念事件】
日期：农历十二月十六
名称：南岳大帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：南岳宝诰
宝诰出处：五岳科仪所载《南岳宝诰》
宝诰版本说明：采用52A。
【宝诰开始】
志心皈命礼。南衡宗圣，洞朗高天。起列翠之环围，动太阳之夜映。度人苦难，叠铺上步之桥梁；接众昏迷，长发远明之斗宿。暗幽靓觉，近远归心。削除死薄纪生篇，消灭罪根登福籍。仰瞻斯在，钦念即从。大悲大愿，大圣大慈。掌握福禄寿纪，南岳司天大化昭圣帝。洞明虚廓，司案真君，受炼更生天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：西岳华山大帝】
匹配名称：西岳大帝；西岳华山大帝
【纪念事件】
日期：农历十一月初六
名称：西岳大帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：西岳宝诰
宝诰出处：五岳科仪所载《西岳宝诰》
宝诰版本说明：采用53A。
【宝诰开始】
志心皈命礼。西华妙境，上品天宫。受瑶池之真传，敷玉皇之宝笈。飞身得道，乃感成丹。证果金干，方登华岳。救灾扶难，应物应人。凡有希求，增龄益福。大悲大愿，大圣大慈。掌管寿算，西岳金天，大利顺圣帝，太无虚极，司梵真君，华林纪算天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：北岳恒山大帝】
匹配名称：北岳大帝；北岳恒山大帝
【纪念事件】
日期：农历八月初十
名称：北岳大帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：北岳宝诰
宝诰出处：五岳科仪所载《北岳宝诰》
宝诰版本说明：采用54A。
【宝诰开始】
志心皈命礼。北方太极，本一元灵。镇恒峰之艮土，受玉帝之褒封。朔单洞府，虚气一根。环围有九幽之山，配对是南方之岳。太阳下映，癸子初经。大灵大应，救难救灾。掌管丹台，北岳安天，大贞元圣帝，太旻虚广，司箓真君，无上最胜天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：碧霞元君】
匹配名称：碧霞元君；泰山顶上娘娘；顶上娘娘
【纪念事件】
日期：农历四月十八
名称：泰山顶上娘娘圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：碧霞元君宝诰
宝诰出处：《元始天尊说碧霞元君护国庇民普济保生妙经·碧霞元君宝诰》
宝诰版本说明：采用55A。
【宝诰开始】
志心皈命礼。泰山顶上，东岳内宫。曩时现玉女之身，根本即帝真之质。膺九炁而垂慈示相，冠百灵而智慧圆融。行满十方，功周亿劫。位镇天仙之号，策显碧霞之封。统岳府之神兵，掌人间之善恶。巡声赴感，护国安民。大圣大慈，至孝至仁。天仙玉女，广灵慈惠。恭顺溥济，保生真人。护国庇民，弘德碧霞元君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：刘猛将】
匹配名称：刘猛将
【纪念事件】
日期：农历正月十三
名称：刘猛将军圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
传统驱蝗护农神。历史原型存在不同说法，简介不得强行统一为单一历史人物。
【简介结束】
【人物结束】


【人物：九天卫房圣母】
匹配名称：子孙娘娘；九天卫房圣母；卫房圣母
【纪念事件】
日期：农历三月二十
名称：子孙娘娘圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：九天卫房圣母宝诰
宝诰出处：九天监生司科仪所载《九天卫房圣母宝诰》
宝诰版本说明：采用57A。
【宝诰开始】
志心皈命礼。东岳子孙案，九天监生司。结秀成胎，禀两仪之造化。送生保产，乃二圣之纲维。燮理阴阳，散行痘疹。九天称庆，一视同仁。大悲大愿，大圣大慈。普济普度，九天监生明素真君。多男多女，九天卫房圣母元君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：岳府朱太尉】
匹配名称：朱太尉；岳府朱太尉；追魂朱太尉
【纪念事件】
日期：农历五月初七
名称：朱太尉圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
东岳岳府神将，古道经称“追魂朱太尉”。
【简介结束】
【人物结束】


【人物：南方火德荧惑星君】
匹配名称：火神；南方火神；火德星君；南方火德荧惑星君
【纪念事件】
日期：农历六月廿三
名称：火神圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：火德星君宝诰
宝诰出处：《宝诰大全·火德星君宝诰》
宝诰版本说明：采用59A。
【宝诰开始】
志心皈命礼。四元四品，考较火官。运扶乾健，德合离明。居太阳丹天之中，统左府注生之籍。盛德在火，炎帝持衡。功参佐于三元，气运行于四月。驾赤龙而行南陆，照明荧惑之宫；烛朱陵而显丹台，焕赫文昌之府。辉辉朗耀，炳炳照临。大悲大愿、大圣大慈、赤皇上品三炁火官炎帝真君、洞阳大帝南丹纪寿天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：玉阙灵济真君徐知谔】
匹配名称：灵济真君；徐知谔；玉阙灵济真君
【纪念事件】
日期：农历七月十五
名称：玉阙灵济真君徐知谔圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠独立宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
南唐徐氏兄弟之一，七月十五对应徐知谔，属玉阙灵济真君体系。
【简介结束】
【人物结束】


【人物：金阙洪恩真君徐知证】
匹配名称：洪恩真君；徐知证；金阙洪恩真君
【纪念事件】
日期：农历九月十七
名称：金阙洪恩真君徐知证圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠独立宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
南唐徐氏兄弟之一，九月十七对应徐知证，属金阙洪恩真君体系。
【简介结束】
【人物结束】


【人物：太古真人郝大通】
匹配名称：郝真人；郝大通；太古真人
【纪念事件】
日期：农历正月初三
名称：郝真人圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：郝祖宝诰
宝诰出处：《宝诰大全·太古真人郝祖诰》
宝诰版本说明：采用61A。
【宝诰开始】
志心皈命礼。静穆修真，澄虚悟道，少精周易，隐迹卜筮之中，长遇重阳，猛省回头之示，穷年静坐以为功，而水火之颠倒早就，对人不语以为养，而虎龙之会合已成，缘秘语之能参，乃累功之克证，高风自在，遗范无边，大悲大愿，大圣大慈，全真翼教，广宁恬然上仙，太古澄悟天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：江东神石固】
匹配名称：江东神；石固
【纪念事件】
日期：农历正月初八
名称：江东神圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
赣地传统神祇，地方志称石固，后世有护境显应信仰。
【简介结束】
【人物结束】


【人物：门神户尉】
匹配名称：门神；门丞户尉；门神户尉
【纪念事件】
日期：农历正月十五
名称：门神户尉圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：门神宝诰
宝诰出处：《宝诰大全·门神宝诰》
宝诰版本说明：采用63A。
【宝诰开始】
志心皈命礼。位居出入之道，职司护宅之权。金鞭银锏，驱堂中不正之鬼神。义胆忠心，荫宅内老幼之男女。仰承上帝，护卫下民。恩庇合第，德泽闾阎。门丞户尉，神之最灵。除凶降吉，祛恶灭邪。守卫门户，永镇门庭。神威镇宅将军。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：潮神曹仕宁】
匹配名称：曹大将军；曹仕宁；平浪侯；卷帘使
【纪念事件】
日期：农历二月初四
名称：曹大将军圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
南宋以来江浙潮神传统中的曹大将军，地方志记名曹仕宁，并有平浪侯、卷帘使等称号。
【简介结束】
【人物结束】


【人物：祠山大帝张渤】
匹配名称：张大帝；祠山大帝；张渤；昌福真君
【纪念事件】
日期：农历二月初八
名称：祠山张大帝（昌福真君）圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
祠山张渤，字伯奇，传统治水神。正式圣诞采用二月初八；简介可注明另有二月十一出生记载。
【简介结束】
【人物结束】


【人物：精忠岳元帅岳飞】
匹配名称：岳元帅；岳飞；精忠岳元帅
【纪念事件】
日期：农历二月十五
名称：精忠岳元帅圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：岳元帅宝诰
宝诰出处：《宝诰大全·岳元帅宝诰》
宝诰版本说明：采用71A。
【宝诰开始】
志心归命礼。三峰挺耸，手执沥泉神枪；五部齐眉，身披雪花银铠。御前元帅，殿内将军。上司九天雄兵神将，下掌五狱罪鬼亡魂。三界有求皆显化，万方号令尽施行。忠心贯日，为万世臣道之规，孝行可风，作千古子职之训。显神威于金陵城，千秋勿替，著功绩于朱仙镇，百世长存。座下三十二将，破贼除奸，身随五百儿郎，擒妖获怪。群生载德，万姓钦崇。至刚至勇，至孝至仁，治世祖师，伏魔上将。精忠武穆王，义勇大巡察。救民正直称少保，护国无私号鄂王。大悲大愿，大圣大慈，玉帝殿前，兼理右相道德元君，无量普济妙法大天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：东方杜将军】
匹配名称：东方杜将军；杜将军
【纪念事件】
日期：农历二月廿七
名称：东方杜将军圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：身份未有足够可靠资料唯一确定，无专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
传统神诞名录所载神将。正式圣诞采用二月二十七；不编造姓名和生平。
【简介结束】
【人物结束】


【人物：水母】
匹配名称：水母；敷化水母
【纪念事件】
日期：农历二月廿一
名称：水母圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠全国通用专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
传统水神称号；晋祠传统以晋源水神解释，并有敷化水母之封号。不同地区水母信仰存在差异。正式圣诞采用二月二十一。
【简介结束】
【人物结束】


【人物：玄天圣父明真大帝】
匹配名称：玄天圣父；明真大帝；启元隆庆天君明真大帝
【纪念事件】
日期：农历二月廿五
名称：玄天圣父明真帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
玄天上帝圣父，净乐国王，后受封启元隆庆天君明真大帝。
【简介结束】
【人物结束】


【人物：眼光圣母惠照明目元君】
匹配名称：眼光娘娘；眼光圣母娘娘；眼光圣母；惠照明目元君
【纪念事件】
日期：农历三月初六
名称：眼光圣母娘娘圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：眼光圣母宝诰
宝诰出处：眼光圣母科仪所载《眼光圣母宝诰》
宝诰版本说明：采用75A。圣诞只保留三月初六。
【宝诰开始】
志心皈命礼。大罗天上，先天神女。妙相庄严，金身妙有。升腾云霞，祥云冉冉。光明满月上仙容，清静太虚现人间。德配阴阳，福育天地三界。人间万灵枢机，开人间兴盛神光。清静宇宙，降福消灾。三界称庆，无贪无偏。救苦救难，普济普度，大悲大愿，大圣大慈，东岳天仙宫，光明两极元君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：张老相公张夏】
匹配名称：张老相公；张夏
【纪念事件】
日期：农历三月初六
名称：张老相公圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
北宋治水人物张夏，后世在江浙形成张老相公水利神信仰。
【简介结束】
【人物结束】


【人物：中央都道大神】
匹配名称：中央五道；中央都道大神
【纪念事件】
日期：农历三月十二
名称：中央五道圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
五道大神体系的中央神位，负责冥路与关津引导。
【简介结束】
【人物结束】


【人物：雷霆驱魔大将军雷万春】
匹配名称：雷霆驱魔大将军；雷万春
【纪念事件】
日期：农历三月十五
名称：雷霆驱魔大将军圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
唐代睢阳守城将领雷万春，后世神化为雷霆驱魔大将军。
【简介结束】
【人物结束】


【人物：山神】
匹配名称：山神
【纪念事件】
日期：农历三月十六
名称：山神圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无全国通用可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
传统山岳守护神职的泛称，不强行指定某一历史人物或具体名山。
【简介结束】
【人物结束】


【人物：玉阳真人王处一】
匹配名称：玉阳真人；王处一；王祖
【纪念事件】
日期：农历三月十八
名称：玉阳真人圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：王祖宝诰
宝诰出处：《宝诰大全·玉阳真人王祖诰》
宝诰版本说明：采用80A，固定“道力监凝”。
【宝诰开始】
志心皈命礼。天姿纯粹，道力监凝，奉母而依至教，结伴而事重阳，识旧泉于荒芜之间，群沾井惠，施铁鞭于当路之石，共乐通衢，独立危崖九载，跻身乐境三天，形影疗病，谟诰称嘉，大悲大愿，大圣大慈，全真洪教，玉阳卓荦上仙，辅玄度物天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：昊天上帝】
匹配名称：昊天大帝；昊天上帝
【纪念事件】
日期：农历三月十五
名称：昊天大帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：昊天宝诰
宝诰出处：玉皇科仪所载《昊天宝诰》
宝诰版本说明：采用81A，独立于玉皇上帝建档。
【宝诰开始】
志心皈命礼。玉光境内，宝盖会中。感上帝开利益之门，为众生兴方便之意。周流沙界，受真经而五品以诵持；亲奉玉音，敕三界十方而覆护。以孝养恭敬而为本，则自在逍遥而无疑。叠叠歌词，巍巍功德。大悲大愿，大圣大慈。经筵启问，昊天上帝。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：仓颉至圣先师】
匹配名称：仓颉；苍颉；仓颉至圣先师；苍颉至圣先师
【纪念事件】
日期：农历三月廿八
名称：苍颉至圣先师圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：仓颉至圣先师宝诰
宝诰出处：道门科仪所载《仓颉至圣先师宝诰》
宝诰版本说明：采用82A。
【宝诰开始】
志心皈命礼。文明光显，书契宏开。继朱襄而造六书，万世免结绳之苦；并沮诵以为二史，三皇垂纲纪之模。观奎星兮圜曲，四目通神；察乌迹与龟文，一元启秘。明敏本自天生，图书乃为神授。依类象形，阐尽先天之奥；龙潜鬼哭，泄残太极之精。佐黄帝以立圣功，统天庾而裕民食。大悲大愿，大圣大慈。至圣先师，史皇上帝，敷文启教天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：水府萧公萧天任】
匹配名称：萧公；萧天任；水府萧公
【纪念事件】
日期：农历四月初一
名称：萧公圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
水府信仰中的萧天任，传统有水府灵通广济显应真人等尊号。
【简介结束】
【人物结束】


【人物：狄梁公狄仁杰】
匹配名称：狄梁公；狄仁杰
【纪念事件】
日期：农历四月初四
名称：狄梁公圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
唐代名臣狄仁杰，后世有忠良辅国等祭祀传统。
【简介结束】
【人物结束】


【人物：文始真人尹喜】
匹配名称：天尹真人；三天无上尊尹真人；尹喜；文始真人
【纪念事件】
日期：农历四月初八
名称：三天无上尊尹真人（文始真人尹喜）圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无采用的可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
关尹尹喜，文始真人。正式圣诞采用四月初八。
【简介结束】
【人物结束】


【人物：钟山蒋公蒋子文】
匹配名称：钟山蒋公；蒋子文；蒋公
【纪念事件】
日期：农历四月廿六
名称：钟山蒋公圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
汉末秣陵尉蒋子文，后世形成钟山蒋公、蒋帝信仰。
【简介结束】
【人物结束】


【人物：雷霆邓天君邓伯温】
匹配名称：邓天君；邓伯温；欻火律令大神
【纪念事件】
日期：农历五月初五
名称：雷霆邓天君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：邓天君诰
宝诰出处：《诸师真诰·邓天君诰》
宝诰版本说明：采用87A。
【宝诰开始】
志心皈命礼。高上神霄玉清真王，南极长生朱陵大帝，太阳九龙皇君，南昌上宫受炼真人，至真霹雳大仙，玄都九疑九夷蓬莱沧水使者，上清三境都元帅、九天采访使应元保运妙化真君，欻火律令大神、光妙横天演真大元帅、掌行风催雨诛邪破庙祛诸潭洞、总统三元八十一天雷霆都总管炎帝天君、元始祖劫一炁分真太一雷声普化天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：南方横道大神】
匹配名称：南方五道；南方横道大神
【纪念事件】
日期：农历五月初八
名称：南方五道圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
五道大神体系的南方神位。
【简介结束】
【人物结束】


【人物：许威显王许远】
匹配名称：许威显王；许远
【纪念事件】
日期：农历五月廿九
名称：许威显王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠个人专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
唐代睢阳守将许远，后世奉为威显王。
【简介结束】
【人物结束】


【人物：崔府君】
匹配名称：崔府君
【纪念事件】
日期：农历六月初六
名称：崔府君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：崔府君宝诰
宝诰出处：道教之音整理本《崔府君宝诰》
宝诰版本说明：采用90A稳定通行本。
【宝诰开始】
志心皈命礼。监察一十八狱，辅佐十殿阎王。神兵鬼卒听令于殿前，牛头马面镇护于左右。速报现报，分善恶于两途；阳曹阴曹，秉生死之权操。注宰官将相之功勋，以恩报德；断生老病死之苦趣，种因得果。人鬼精邪之异类，胎卵湿化之生灵。事事悉归于案掾，般般合属于冥官。者对无停，诠量不息。大容大量，至仁至惠。冥府阴曹，掌生死簿判官，护国王爷崔府君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：杨泗将军】
匹配名称：杨四将军；杨泗将军
【纪念事件】
日期：农历六月初六
名称：杨四将军圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：杨泗将军宝诰
宝诰出处：道门科仪所载《杨泗将军宝诰》
宝诰版本说明：采用91A。人物原型保留诸说，不强定单一历史人物。
【宝诰开始】
志心皈命礼。先天育化，少年得道。洞渊水国，息风浪以利舟车。三天门中，敕符令驱瘟治煞。金甲白袍，斧钺高挥。斩蛟灭怪，神威妙应。圣迹屡显洞庭，威灵流布川鄂。无祷不应，德庇生民。大圣大慈，至义至勇。紫云台上，斩龙得道。灵源通济，杨泗将军。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：天枢左相真君文天祥】
匹配名称：天枢左相真君；文天祥；文丞相
【纪念事件】
日期：农历六月廿九
名称：天枢左相真君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠个人专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
南宋文天祥。原配置如出现“天枢左相莫君”，应校正为“天枢左相真君”。
【简介结束】
【人物结束】


【人物：长真真人谭处端】
匹配名称：长真真人；谭真人；谭处端
【纪念事件】
日期：农历三月初一
名称：长真真人谭处端圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：谭祖宝诰
宝诰出处：《宝诰大全·谭祖宝诰》
宝诰版本说明：采用93A，固定“忍辱炼无明之火”。圣诞采用三月初一。
【宝诰开始】
志心皈命礼。金莲种异，玉叶兆祥，幼称不溺不焚，长著克修克证，忍辱炼无明之火，共识慈祥，阳神现古庙之中，群钦道力，书龟书蛇，能使火不为殃，占斗占星，更令水来知备，大悲大愿，大圣大慈，全真嗣教，长真凝神上仙，玄德崇教天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：长生真人刘处玄】
匹配名称：长生真人；刘处玄；长生刘真人
【纪念事件】
日期：农历七月十二
名称：长生真人刘处玄圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：长生真人刘祖诰
宝诰出处：《宝诰大全·长生真人刘祖诰》
宝诰版本说明：采用稳定通行本。圣诞采用七月十二。
【宝诰开始】
志心皈命礼。孝友传家，善良迈种，生兆红霞入梦之祥，瑞显紫气盘山之异，掷伞腾空，莫测来踪去迹，度人已毙，堪称起死回生，现海市于生醮之交，放阳神于驸马之狱，神通累累，道范超超，大悲大愿，大圣大慈，全真广教，长生体道上仙，崇修蕴德天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：值年太岁】
匹配名称：值年太岁

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：不采用统一宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
六十甲子太岁中的当年轮值太岁。当前先保留体系简介，不扩张为六十套独立人物资料。
【简介结束】
【人物结束】


【人物：普庵祖师】
匹配名称：普庵祖师；普庵禅师；普庵大德古佛
【纪念事件】
日期：农历七月廿一
名称：普庵祖师圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：普庵宝诰
宝诰出处：《普庵密旨·普庵宝诰》
宝诰版本说明：采用95A。圣诞固定七月二十一。
【宝诰开始】
志心皈命礼。普光明殿，大德禅师。活人歌里现金身，得道丛中成正觉。救苦救难，作三世之医王；非色非空，灿一轮之孤月。大悲大愿，大圣大慈。南泉万法教主，普庵大德古佛。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：上元道化真君唐宏】
匹配名称：上元道化真君；唐宏
【纪念事件】
日期：农历七月廿一
名称：上元道化真君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠个人专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
吴客三真君之一，唐宏，宋代封上元道化真君。
【简介结束】
【人物结束】


【人物：中元护正真君葛雍】
匹配名称：中元护正真君；葛雍；葛真君；二月十三葛真君
【纪念事件】
日期：农历二月十三
名称：中元护正真君葛雍圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠个人专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
吴客三真君之一，葛雍，字文度，二月十三圣诞。
【简介结束】
【人物结束】


【人物：下元定志真君周武】
匹配名称：下元定志真君；周武；下元定志周真君
【纪念事件】
日期：农历十月初一
名称：下元定志周真君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠个人专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
吴客三真君之一，周武。
【简介结束】
【人物结束】


【人物：天枢上相真君诸葛亮】
匹配名称：天枢上相真君；诸葛亮；孔明
【纪念事件】
日期：农历七月廿三
名称：天枢上相真君圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：天枢上相宝诰
宝诰出处：道门科仪所载《天枢上相宝诰》
宝诰版本说明：采用97A。
【宝诰开始】
志心皈命礼。南阳蕴秀，西蜀标勋，才兼管乐，智越瑜懿，出将入相，驱兵将追奔逐电，和吴拒魏，运谟谋布雾呼风，感三顾之恩，三分鼎祚，报六尺之孤，六出祁山，七从七擒，无思不服，八门八阵，有胆皆惊，两表千言，丹心映日，秋风五丈，浩气凌空，纬武经文，至忠至孝，大悲大愿，大圣大慈，九天玉辅司命，益算保劫，昌运天枢，上相真君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：龙树菩萨】
匹配名称：龙树菩萨；龙树
【纪念事件】
日期：农历七月廿四
名称：龙树王菩萨圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
印度大乘佛教重要祖师，中观学派奠基人物之一。
【简介结束】
【人物结束】


【人物：北方雷祖】
匹配名称：北方雷祖
【纪念事件】
日期：农历八月初五
名称：北方雷祖圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：无可靠唯一专属宝诰；不得与六月二十四九天应元雷声普化天尊合并。
【宝诰开始】

【宝诰结束】
【简介开始】
后世道历所载北方雷祖神位，具体神格谱系目前无足够早期文献唯一确定。八月初五为其圣诞。
【简介结束】
【人物结束】


【人物：雷声天帝】
匹配名称：雷声天帝
【纪念事件】
日期：农历八月初五
名称：雷声天帝下降
类型：下降
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰，不等同九天应元雷声普化天尊。
【宝诰开始】

【宝诰结束】
【简介开始】
古籍明确记八月初五“雷声天帝下降”，具体神格不强行等同其他雷祖或雷帝。
【简介结束】
【人物结束】


【人物：西方直道大神】
匹配名称：西方五道；西方直道大神
【纪念事件】
日期：农历八月十二
名称：西方五道圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
五道大神体系的西方神位。
【简介结束】
【人物结束】


【人物：北方遏道大神】
匹配名称：北方五道；北方遏道大神
【纪念事件】
日期：农历十一月廿六
名称：北方五道圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
五道大神体系的北方神位。
【简介结束】
【人物结束】


【人物：酒仙刘伶】
匹配名称：酒仙；刘伶
【纪念事件】
日期：农历八月十八
名称：酒仙圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无采用的可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
竹林七贤之一刘伶，后世酒业与酒仙信仰常奉祀。
【简介结束】
【人物结束】


【人物：燃灯古佛】
匹配名称：燃灯佛；定光佛；燃灯古佛；定光如来
【纪念事件】
日期：农历正月初六
名称：定光佛圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历八月廿二
名称：燃灯佛圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
过去佛，又称定光如来。正月初六“定光佛圣诞”和八月二十二“燃灯佛圣诞”统一指向本人物资料。
【简介结束】
【人物结束】


【人物：伏魔副将张显王张飞】
匹配名称：伏魔副将张显王；张显王；张飞；张翼德
【纪念事件】
日期：农历八月廿三
名称：伏魔副将张显王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠个人专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
三国蜀汉名将张飞，后世进入关帝神系并有伏魔副将等神职称号。
【简介结束】
【人物结束】


【人物：五瘟使者】
匹配名称：五瘟；五瘟使者
【纪念事件】
日期：农历九月初三
名称：五瘟圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无采用的统一宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
五部五瘟使者群体资料。传统常列春瘟张元伯、夏瘟刘元达、秋瘟赵公明、冬瘟钟仕贵、中瘟总管史文业；此处秋瘟赵公明不得与财神赵公明资料直接合并。
【简介结束】
【人物结束】


【人物：东岳蒿里相公】
匹配名称：蒿里；蒿里相公；东岳蒿里相公
【纪念事件】
日期：农历九月初九
名称：蒿里圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
东岳冥府体系中的蒿里相公，古籍仅能可靠确认其为赵姓相公，不擅自补全姓名。
【简介结束】
【人物结束】


【人物：梅葛二仙翁】
匹配名称：梅葛二仙翁；梅葛仙翁
【纪念事件】
日期：农历九月初九
名称：梅葛二仙翁圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无采用的统一宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
传统染业祖师群体。梅仙翁一般指梅福；葛仙翁存在葛玄、葛洪两说，简介保留差异。
【简介结束】
【人物结束】


【人物：机神】
匹配名称：机神
【纪念事件】
日期：农历九月十六
名称：机神圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠全国统一宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
传统丝织机业祖师神，各地有伯余、张衡、褚载等奉祀传统，不强行统一为一人。
【简介结束】
【人物结束】


【人物：金龙四大王谢绪】
匹配名称：金龙四大王；谢绪
【纪念事件】
日期：农历九月十七
名称：金龙四大王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
南宋遗民谢绪，后世形成护漕治河的金龙四大王信仰；“四大王”中的“四”与排行传统有关。
【简介结束】
【人物结束】


【人物：药师琉璃光如来】
匹配名称：药师佛；药师琉璃光王佛；药师琉璃光如来
【纪念事件】
日期：农历九月三十
名称：药师琉璃光王佛圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
东方净琉璃世界教主，汉传佛教药师法门本尊。
【简介结束】
【人物结束】


【人物：东皇大帝】
匹配名称：东皇大帝
【纪念事件】
日期：农历十月初一
名称：东皇大帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠独立专属宝诰；不强行等同东皇太一。
【宝诰开始】

【宝诰结束】
【简介开始】
传统道教神诞体系所载东皇大帝，现阶段保留独立人物名与简介。
【简介结束】
【人物结束】


【人物：痘神刘使者】
匹配名称：痘神刘使者；刘使者
【纪念事件】
日期：农历十月十五
名称：痘神刘使者圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰；不得擅自等同五瘟刘元达。
【宝诰开始】

【宝诰结束】
【简介开始】
传统痘神体系中的刘使者，具体历史身份不强行确定。
【简介结束】
【人物结束】


【人物：大成至圣先师孔子】
匹配名称：孔子；至圣先师；大成至圣先师；文宣王
【纪念事件】
日期：农历八月廿七
名称：大成至圣先师孔子圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：至圣先师宝诰
宝诰出处：《宝诰大全·至圣先师宝诰》
宝诰版本说明：采用稳定通行本。圣诞采用八月二十七。
【宝诰开始】
志心皈命礼。昔降生于周末，应祷尼灵；今主宰于皇朝，维持正教。德参太极，道集大成。为百世之儒圣，作生民之教师。毋固毋必，毋我毋人。删诗定书，系易执礼。在在应《春秋》之化，方方持孝义之经。大悲大愿，大圣大慈。万世师表，至圣先师，大成夫子文宣王，兴儒治世大天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：日光菩萨】
匹配名称：日光菩萨；日光遍照菩萨
【纪念事件】
日期：农历十一月十九
名称：日光菩萨圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
药师琉璃光如来左胁侍，与月光菩萨并称。十一月十九为圣诞；原“日光天子”名称应校正。
【简介结束】
【人物结束】


【人物：文昌应化张仙】
匹配名称：张仙；文昌应化张仙
【纪念事件】
日期：农历十一月廿三
名称：张仙圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：文昌应化张仙宝诰
宝诰出处：《关帝明圣经全集》所载《文昌应化张仙宝诰》
宝诰版本说明：采用115A；人物原型诸说并存，不强定单一历史身份。
【宝诰开始】
志心归命礼。桂香内殿，文昌左宫。七十二化之法身，百千万劫之运数。育嗣天下，演教人间。金弹竹弓随身带，孤辰寡宿灭形踪。扶小子而卫通关，荫闺房而护产难。聪明日益，痘疹减消。难育者祈之必育，难全者祷之便痊。大悲大愿，大圣大慈。九天辅元开化灵应张仙大帝，七曲毓圣天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：巧圣仙师鲁班】
匹配名称：鲁班；鲁班仙师；巧圣仙师
【纪念事件】
日期：农历六月十三
名称：鲁班仙师圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：巧圣仙师宝诰
宝诰出处：《宝诰大全·巧圣仙师宝诰》
宝诰版本说明：采用稳定通行本。圣诞固定六月十三，不保留腊月二十。
【宝诰开始】
志心皈命礼。神工鬼斧，独具匠心。立规矩而校方圆，定准绳而测直平。创锯刨大兴土木，精彤琢高屋建瓴。艺冠华夏，巧夺天工。大辂椎轮，功盖古今。至智至慧，至巧至灵。巧圣仙师，辅国大师，鲁班祖师。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：十殿冥王】
匹配名称：十殿冥王；十殿阎君

神像：
宝诰标题：十殿冥王宝诰
宝诰出处：《宝诰大全·十殿冥王宝诰》
宝诰版本说明：采用总诰；同时十位阎君各保留个人宝诰。十殿次序按《地府十王拔度仪》，第八平等王、第九都市王。
【宝诰开始】
志心皈命礼。东岳阿衡，北都酆应。掌管善恶，掌握死生。正气堂堂，亲跻一律；圣心耿耿，恩怨两忘。明明孽镜高悬，黑黑阴形环列。任强梁而莫展，纵奸佞以难施。福善而生天堂，福遥以沉地狱。报应明显，因果昭彰。六道仰恩，四生哀命。大悲大愿，大圣大慈。冥府十王，慈仁真君，冰心铁面天尊。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：一殿秦广王】
匹配名称：秦广王；一殿秦广王
【纪念事件】
日期：农历二月初一
名称：一殿秦广王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：秦广王宝诰
宝诰出处：《地府十王拔度仪·秦广王宝诰》
宝诰版本说明：采用个人宝诰；身份与宫名按《地府十王拔度仪》校正。
【宝诰开始】
志心皈命礼。玄冥宫内，玉宝凝神。应妙有开明于震旦，遍威光布令于风雷。慈悲教主，仁寿宗师。恩覃九有，德泽浩劫。大悲大愿，大圣大慈。秦广大王，太素妙广真君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：二殿楚江王】
匹配名称：楚江王；二殿楚江王
【纪念事件】
日期：农历三月初一
名称：二殿楚江王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：楚江王宝诰
宝诰出处：《地府十王拔度仪·楚江王宝诰》
宝诰版本说明：采用个人宝诰；身份与宫名按《地府十王拔度仪》校正。
【宝诰开始】
志心皈命礼。普明宫内，玄真郁元。承丹景发挥于明离，布慈风威镇于火翳。洞烛法界，消除热恼。冶魂朱陶，摄魂晏景。大悲大愿，大圣大慈。楚江大王，阴德定休真君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：三殿宋帝王】
匹配名称：宋帝王；三殿宋帝王
【纪念事件】
日期：农历二月初八
名称：三殿宋帝王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：宋帝王宝诰
宝诰出处：《地府十王拔度仪·宋帝王宝诰》
宝诰版本说明：采用个人宝诰；身份与宫名按《地府十王拔度仪》校正。
【宝诰开始】
志心皈命礼。纣绝宫内，太妙流光。应少昊配位于兑阙，施惠泽遍极于金刚。毓义含精，肃严白帝。拯提幽趣，苏滞飞骞。大悲大愿，大圣大慈。宋帝大王，洞明普静真君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：四殿五官王】
匹配名称：五官王；四殿五官王
【纪念事件】
日期：农历二月十八
名称：四殿五官王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：五官王宝诰
宝诰出处：《地府十王拔度仪·五官王宝诰》
宝诰版本说明：采用个人宝诰；身份与宫名按《地府十王拔度仪》校正。
【宝诰开始】
志心皈命礼。太和宫内，玄上凝真。妙元精御运于坎位，流爱日宣布于溟冷。道体渊源，德恩冲粹。济度沉迷，超离苦海。大悲大愿，大圣大慈。五官大王，玄德五灵真君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：五殿阎罗王】
匹配名称：阎罗王；五殿阎罗王；五殿阎罗天子
【纪念事件】
日期：农历正月初八
名称：五殿阎罗天子圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：阎罗王宝诰
宝诰出处：《地府十王拔度仪·阎罗王宝诰》
宝诰版本说明：采用个人宝诰；身份与宫名按《地府十王拔度仪》校正。
【宝诰开始】
志心皈命礼。讨伦宫内，度仙含灵。结真精育元于艮位，鼓明庶敷泽于镬汤。仁慈广扇，德惠庞弘。统摄玄曹，威提虎禁。大悲大愿，大圣大慈。阎罗大王，最胜耀明真君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：六殿卞城王】
匹配名称：卞城王；六殿卞城王
【纪念事件】
日期：农历三月初八
名称：六殿卞城王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：卞城王宝诰
宝诰出处：《地府十王拔度仪·卞城王宝诰》
宝诰版本说明：采用个人宝诰；身份与宫名按《地府十王拔度仪》校正。
【宝诰开始】
志心皈命礼。明晨宫内，好生含真。体元皇司化于巽隅，布慈风发祥于铜柱。济死济生，无等无伦。开明幽壤，豁苏迷途。大悲大愿，大圣大慈。卞城大王，宝肃昭成真君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：七殿泰山王】
匹配名称：泰山王；七殿泰山王
【纪念事件】
日期：农历三月廿七
名称：七殿泰山王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：泰山王宝诰
宝诰出处：《地府十王拔度仪·泰山王宝诰》
宝诰版本说明：采用个人宝诰；身份与宫名按《地府十王拔度仪》校正。
【宝诰开始】
志心归命礼。神华宫内，太虚结真。承素皇化景于坤元，降慈光御运于屠割。元范恢漠，真精纯粹。泰及长夜，慧烛寒庭。大悲大愿，大圣大慈。泰山大王，神变万灵真君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：八殿平等王】
匹配名称：平等王；八殿平等王
【纪念事件】
日期：农历四月初一
名称：八殿平等王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：平等王宝诰
宝诰出处：《地府十王拔度仪·平等王宝诰》
宝诰版本说明：采用个人宝诰；八殿固定平等王。
【宝诰开始】
志心皈命礼。七非宫内，无量含元。体六位行健于成乾，施法雨资始于火车。真元教主，度人圣师。遏爽夜台，拯迷契道。大悲大愿，大圣大慈。平等大王，无上证度真君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：九殿都市王】
匹配名称：都市王；九殿都市王
【纪念事件】
日期：农历四月初八
名称：九殿都市王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：都市王宝诰
宝诰出处：《地府十王拔度仪·都市王宝诰》
宝诰版本说明：采用个人宝诰；九殿固定都市王。
【宝诰开始】
志心皈命礼。碧真宫内，玉虚化灵。接赤皇统系于青汉，分紫极垂庥于普掠。德元真全，道炁罗浮。援魄结胎，陶魂离爱。大悲大愿，大圣大慈。都市大王，飞魔衍庆真君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：十殿转轮王】
匹配名称：转轮王；十殿转轮王
【纪念事件】
日期：农历四月十七
名称：十殿转轮王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：转轮王宝诰
宝诰出处：《地府十王拔度仪·转轮王宝诰》
宝诰版本说明：采用个人宝诰；身份与宫名按《地府十王拔度仪》校正。
【宝诰开始】
志心皈命礼。肃英宫内，真皇结精。体厚载赞化于元中，凝冲和普惠于无间。招提品类，宰御群伦。枢机四生，注化六道。大悲大愿，大圣大慈。转轮大王，五华威灵真君。
【宝诰结束】
【简介开始】

【简介结束】
【人物结束】


【人物：苏门真人孙登】
匹配名称：孙真人；孙登；苏门真人
【纪念事件】
日期：农历正月初三
名称：苏门真人孙登圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无可靠专属宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
苏门真人孙登。正月初三“孙真人”应指孙登，不得与药王孙思邈合并。
【简介结束】
【人物结束】


【人物：弥勒菩萨】
匹配名称：弥勒佛；弥勒菩萨
【纪念事件】
日期：农历正月初一
名称：弥勒佛圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
简介出处：《佛说弥勒下生成佛经》
【宝诰开始】

【宝诰结束】
【简介开始】
弥勒是佛教菩萨，经典中记为未来于此世界成佛者。汉传佛教常以宽容、欢喜的形象表达其慈心与愿行。
【简介结束】
【人物结束】


【人物：观世音菩萨】
匹配名称：观音；观音菩萨；观世音菩萨；慈航真人
【纪念事件】
日期：农历二月十九
名称：慈航真人圣诞
类型：圣诞
【纪念结束】

【纪念事件】
日期：农历六月十九
名称：慈航真人成道
类型：成道
【纪念结束】

【纪念事件】
日期：农历九月十九
名称：慈航真人功德圆满升天
类型：宗教纪念
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
简介出处：《妙法莲华经·观世音菩萨普门品》
【宝诰开始】

【宝诰结束】
【简介开始】
观世音菩萨以观察众生音声、随缘救苦的慈悲愿行著称，是汉传佛教广泛信奉的菩萨。不同经典与地域传统对其示现形象有多种表述。
【简介结束】
【人物结束】


【人物：普贤菩萨】
匹配名称：普贤菩萨；普贤
【纪念事件】
日期：农历二月廿一
名称：普贤菩萨圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
简介出处：《大方广佛华严经·普贤行愿品》
【宝诰开始】

【宝诰结束】
【简介开始】
普贤菩萨在大乘佛教中表征广大行愿，与文殊菩萨并为释迦牟尼佛的重要胁侍。相关传统尤其重视将发愿落实为日常修行。
【简介结束】
【人物结束】


【人物：准提菩萨】
匹配名称：准提菩萨；准提
【纪念事件】
日期：农历三月十六
名称：准提菩萨圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
简介出处：《佛说七俱胝佛母准提大明陀罗尼经》
【宝诰开始】

【宝诰结束】
【简介开始】
准提菩萨见于汉译密教经典，相关法门以准提陀罗尼及其仪轨为核心。不同传承对尊名、形象与归属的说明略有差异。
【简介结束】
【人物结束】


【人物：文殊菩萨】
匹配名称：文殊菩萨；文殊
【纪念事件】
日期：农历四月初四
名称：文殊菩萨圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
简介出处：《大方广佛华严经》
【宝诰开始】

【宝诰结束】
【简介开始】
文殊菩萨在大乘佛教中表征般若智慧，常与普贤菩萨同为释迦牟尼佛胁侍。汉传佛教传统以五台山为其重要道场。
【简介结束】
【人物结束】


【人物：释迦牟尼佛】
匹配名称：释迦牟尼佛；释迦如来；释迦佛；释迦文佛
【纪念事件】
日期：农历二月初八
名称：释迦文佛出家
类型：出家
【纪念结束】

【纪念事件】
日期：农历四月初八
名称：释迦文佛圣诞
类型：圣诞
【纪念结束】


【纪念事件】
日期：农历十二月初八
名称：释迦牟尼佛成道日
类型：成道
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
简介出处：《长阿含经》；《过去现在因果经》
【宝诰开始】

【宝诰结束】
【简介开始】
释迦牟尼佛是佛教创始者，生于古印度，经典记载其出家修行、成道并说法教化。不同佛教传统对若干纪念日期的安排并不完全相同。
【简介结束】
【人物结束】


【人物：大势至菩萨】
匹配名称：大势至菩萨；大势至
【纪念事件】
日期：农历七月十三
名称：大势至菩萨圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
简介出处：《佛说观无量寿佛经》；《大佛顶首楞严经·大势至菩萨念佛圆通章》
【宝诰开始】

【宝诰结束】
【简介开始】
大势至菩萨在净土信仰中与观世音菩萨同为阿弥陀佛胁侍，经典以其摄念佛人、归于净土的愿行作说明。
【简介结束】
【人物结束】


【人物：地藏菩萨】
匹配名称：地藏菩萨；地藏王菩萨；地藏王
【纪念事件】
日期：农历七月三十
名称：地藏王菩萨圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
简介出处：《地藏菩萨本愿经》
【宝诰开始】

【宝诰结束】
【简介开始】
地藏菩萨以救拔苦难众生、护念幽冥的宏愿著称。汉传佛教相关信仰主要依据《地藏菩萨本愿经》等经典形成。
【简介结束】
【人物结束】


【人物：达摩祖师】
匹配名称：达摩祖师；菩提达摩；达摩
【纪念事件】
日期：农历十月初五
名称：达摩祖师圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教祖师，不使用道教宝诰。
简介出处：《洛阳伽蓝记》；《续高僧传》
【宝诰开始】

【宝诰结束】
【简介开始】
菩提达摩是中国禅宗传统尊奉的初祖。其生平在不同史传中有差异，较早记载可见于《洛阳伽蓝记》与《续高僧传》。
【简介结束】
【人物结束】


【人物：阿弥陀佛】
匹配名称：阿弥陀佛；无量寿佛
【纪念事件】
日期：农历十一月十七
名称：阿弥陀佛圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
简介出处：《佛说无量寿经》；《佛说阿弥陀经》
【宝诰开始】

【宝诰结束】
【简介开始】
阿弥陀佛是西方极乐世界教主，净土经典以其本愿与接引众生往生极乐的教义为核心。汉传佛教常与观世音、大势至合称西方三圣。
【简介结束】
【人物结束】


【人物：九莲菩萨】
匹配名称：九莲菩萨；大慈至圣九莲菩萨
【纪念事件】
日期：农历十一月十九
名称：大慈至圣九莲菩萨圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：不采用道教宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
后世九莲菩萨信仰与明慈圣皇太后李氏神化传统有关，简介保留这一历史背景。
【简介结束】
【人物结束】


【人物：华严菩萨】
匹配名称：华严菩萨
【纪念事件】
日期：农历十二月廿九
名称：华严菩萨圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：佛教人物，不使用道教宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
正式人物名保持“华严菩萨”。经典有华严菩萨名号，后世另有澄观、正顺等化现传统，不强行指定唯一历史人物。
【简介结束】
【人物结束】


【人物：马神】
匹配名称：马神
【纪念事件】
日期：农历六月廿三
名称：马神圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无统一可靠宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
传统马神泛称，各地存在马祖、先牧、马社、马步等不同神格，不强行统一。
【简介结束】
【人物结束】


【人物：张英济王张巡】
匹配名称：张英济王；张巡
【纪念事件】
日期：农历十二月初八
名称：张英济王圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：暂无采用的可靠个人宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
唐代忠臣张巡，后世有英济王等祭祀封号。
【简介结束】
【人物结束】


【人物：天曹诸司五岳五帝】
匹配名称：天曹诸司五岳五帝；五岳五帝
【纪念事件】
日期：农历十月初六
名称：天曹诸司五岳五帝圣诞
类型：圣诞
【纪念结束】

神像：
宝诰标题：
宝诰出处：
宝诰版本说明：群体纪念，不另造统一宝诰。
【宝诰开始】

【宝诰结束】
【简介开始】
群体纪念资料；具体五岳帝君分别指向东岳、中岳、南岳、西岳、北岳既有人物资料。
【简介结束】
【人物结束】


【人物：太阳星君】
匹配名称：太阳星君；太阳帝君；日宫太阳；郁仪帝君
神像：
宝诰标题：太阳帝君诰
宝诰出处：《宝诰大全·太阳帝君诰》
宝诰版本说明：采用《宝诰大全》太阳帝君诰，参校同书太阳星君宝诰；修正电子转录中的明显形近字。
简介出处：《宝诰大全·太阳帝君诰》
参校来源：《宝诰大全·太阳星君宝诰》
【宝诰开始】
志心皈命礼。大罗天上，朱景宫中。尊居十极之高，体乾出治；位正三才之上，御德行权。寒肃暑炎，平六气而咸宁万国；旦明宵晦，驾六龙而统治十华。司善恶予夺之柄，照临赫奕；定功过显微之迹，感应昭彰。号令雷霆，迅除邪祟。大悲大愿，大圣大慈。日宫太阳，郁仪帝君，威光布德如来，慈辉朱日天尊。
【宝诰结束】
【简介开始】
太阳星君是道教星辰信仰中的日宫尊神，相关宝诰又称“太阳帝君诰”。“升殿之辰”是传统宗教纪日对太阳星君升临殿府的纪念语，不等同于世俗生日。
【简介结束】
【人物结束】


【人物：太阴星君】
匹配名称：太阴星君；太阴皇君；月府太阴；结璘皇君
神像：
宝诰标题：太阴皇君诰
宝诰出处：《宝诰大全·太阴皇君诰》
宝诰版本说明：采用《宝诰大全》太阴皇君诰，保留“朓朒”等月相用语。
简介出处：《宝诰大全·太阴皇君诰》
参校来源：《宝诰大全·太阴星君宝诰》
【宝诰开始】
志心皈命礼。大罗天上，七宝苑中。秉金水之精华，姿容绰约；本坤仪之柔顺，瑞相端严。开玉烛之神光，家沾清泽；炼紫房之灵药，人锡长年。虽朓朒而真体罔亏，任满盈而明辉不溢。考核诸仙之升降，主持司禄之权衡。命玉妃而滋甘露，催开万谷春容；咨青女而降玄霜，收敛千仓秋实。化被人天，恩敷三界。大悲大愿，大圣大慈。月府太阴，结璘皇君，宝光幽照如来，妙果素月天尊。
【宝诰结束】
【简介开始】
太阴星君是道教星辰信仰中的月府尊神，相关宝诰又称“太阴皇君诰”。“朝元之辰”用于纪念太阴星君朝礼本元、会合元炁的传统宗教纪日语义。
【简介结束】
【人物结束】


【人物：北斗九皇】
匹配名称：北斗九皇；北斗九皇星君；中天大圣北斗九皇；北斗星君
神像：
宝诰标题：北斗宝诰
宝诰出处：《宝诰大全·北斗宝诰》
宝诰版本说明：采用《宝诰大全》北斗宝诰；本资料只服务神圣纪念详情，不替代斗降日算法配置。
简介出处：《太上玄灵北斗本命延生真经》；《宝诰大全·北斗宝诰》
参校来源：《太上玄灵北斗本命延生真经》
【宝诰开始】
志心皈命礼。开明三景，回度五常。为造化之枢机，作人神之主宰。宣威三界，统御万灵。判人间善恶之期，司阴府是非之目。能解一切罪，摄伏诸魔精。大悲大愿，大圣大慈。中天大圣北斗九皇赐福星君。
【宝诰结束】
【简介开始】
北斗九皇是道教北斗信仰中的九位尊神合称，北斗经典常以其主掌本命、禄算与善恶考校作说明。这里的人物资料用于九皇降世等神圣纪念，不改变项目另行维护的北斗斗降日规则。
【简介结束】
【人物结束】


【人物：南斗六司延寿星君】
匹配名称：南斗六司延寿星君；南斗六司；南斗星君；南斗
神像：
宝诰标题：南斗宝诰
宝诰出处：《宝诰大全·南斗宝诰》
宝诰版本说明：采用《宝诰大全》南斗宝诰。
简介出处：《太上说南斗六司延寿度人妙经》；《宝诰大全·南斗宝诰》
参校来源：《太上说南斗六司延寿度人妙经》
【宝诰开始】
志心皈命礼。斗临箕尾，旋六曜以经天；位正丑宫，总七星而御世。同阳德辉华于两极，运阴精覆育于群伦。巍巍赤帝以分形，赫赫丹灵而变体。陶熔品汇，当万物相应于离宫；鼓铸生成，保亿劫无穷之天运。大悲大愿，大圣大慈。南斗六司，延寿星君。
【宝诰结束】
【简介开始】
南斗六司延寿星君是道教南斗信仰中的六司尊神合称，南斗经典以其分司延寿、度厄等职掌作说明。“南斗下降”是传统宗教纪日对南斗诸司降临考校的纪念语。
【简介结束】
【人物结束】


# 无人物归属的神圣／宗教纪念

【独立纪念事件】
日期：农历正月初一
名称：天腊之辰
类型：宗教纪念
详情人物：
纪念简介出处：《赤松子章历》卷二“五腊日”条
【纪念简介开始】
天腊是道教五腊之首，日期为正月初一。传统道教资料把五腊视为适宜修斋、祭祀先祖的纪日，天腊标志岁首一腊。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历正月初八至十五
名称：显大神通降魔
类型：宗教纪念
详情人物：
纪念简介出处：传统神圣降诞日资料所载正月纪日
【纪念简介开始】
这是一组自正月初八至十五的传统宗教修持纪日。旧有纪日资料强调在此期间持斋、修持及降魔功德；其中功德说法属于宗教文本的劝修表达，不作为现代可验证的量化结论。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历二月初一
名称：太阳升殿之辰
类型：升殿
详情人物：太阳星君
纪念简介出处：传统神圣降诞日资料所载二月纪日
【纪念简介开始】
“升殿之辰”用于纪念太阳星君升临日宫殿府。此处保留传统纪日名称，表达的是宗教仪式与星辰信仰语义，并非另立一位神祇。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历三月初三
名称：轩辕黄帝圣诞
类型：圣诞
详情人物：
纪念简介出处：传统神圣降诞日资料；黄帝祭祀传统
【纪念简介开始】
轩辕黄帝是中国古代传说中的人文始祖，道教传统亦尊其为修道与治世圣王。三月初三圣诞属于相关宫观与民间礼敬传统；不同地方纪日或有差异。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历四月廿六
名称：神农先帝圣诞
类型：圣诞
详情人物：
纪念简介出处：传统神圣降诞日资料；炎帝神农祭祀传统
【纪念简介开始】
神农先帝即传统所尊的炎帝神农氏，常与农耕、医药和尝百草传说相联系。四月廿六为相关神圣纪日资料所载圣诞。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历五月初五
名称：地腊之辰
类型：宗教纪念
详情人物：
纪念简介出处：《赤松子章历》卷二“五腊日”条
【纪念简介开始】
地腊是道教五腊中的第二腊，日期为五月初五。传统资料强调此日修斋、祭祀先祖，并以地气生养、万类滋荣为纪念语义。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历五月十六
名称：天地主炁及造化万物之辰
类型：宗教纪念
详情人物：
纪念简介出处：传统神圣降诞日资料所载五月纪日
【纪念简介开始】
这是传统宗教纪日中关于天地本元之炁与万物化生的纪念语。它强调对天地生化的礼敬，不指向某一位具体神祇，因此不另配专属宝诰。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历六月初四
名称：南瞻部洲转大法轮
类型：宗教纪念
详情人物：
纪念简介出处：传统神圣降诞日资料所载六月纪日
【纪念简介开始】
“南瞻部洲转大法轮”是传统宗教纪日所载的佛教语汇，纪念佛法在南瞻部洲宣说与流布。此条客观保留原有纪日性质，不改写为某一尊佛的圣诞。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历六月初六
名称：虎爷圣诞
类型：圣诞
详情人物：
纪念简介出处：地方宫庙虎爷信仰传统
【纪念简介开始】
虎爷是华人民间与宫庙信仰中的虎形护法神，常见于保生大帝、土地神或王爷等神祇座下。各地传承对其来历与纪日解释不尽相同。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历六月十五
名称：辛元帅神诞
类型：神诞
详情人物：
纪念简介出处：传统神圣降诞日资料；雷部神将传统
【纪念简介开始】
辛元帅见于道教雷部神将体系，传统资料记载六月十五为其神诞。现有资料不足以稳定对应单一传记人物，故只说明神将身份，不编造生平或专属宝诰。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历七月初七
名称：道德腊之辰
类型：宗教纪念
详情人物：
纪念简介出处：《赤松子章历》卷二“五腊日”条
【纪念简介开始】
道德腊是道教五腊中的第三腊，日期为七月初七。传统资料把它列为修斋、谢过、祭祀先祖的纪日，并强调道德修持。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历八月十五
名称：太阴朝元之辰
类型：朝元
详情人物：太阴星君
纪念简介出处：传统神圣降诞日资料所载八月纪日
【纪念简介开始】
“朝元之辰”用于纪念太阴星君朝礼本元、会合元炁。它与同日传统节日“中秋节”分属不同栏目，两项文化事实可以同时显示。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历八月廿三
名称：赤松黄大仙师宝诞
类型：宝诞
详情人物：
纪念简介出处：黄大仙宫观祭祀传统
【纪念简介开始】
赤松黄大仙师宝诞是黄大仙信仰中的纪念日。黄大仙的历史原型与传说在不同地域传承中有多种说法，此处不强行统一，只保留正式纪名与日期。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历九月初一
名称：南斗下降之辰
类型：下降
详情人物：南斗六司延寿星君
纪念简介出处：传统神圣降诞日资料所载九月纪日
【纪念简介开始】
此日纪念南斗六司下降。传统道教纪日以“下降”表达星君降临、考校与施化的宗教语义，与南斗诸司的人物资料共用同一份《南斗宝诰》。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历九月初一至初九
名称：北斗九皇降世之辰
类型：降世
详情人物：北斗九皇
纪念简介出处：北斗九皇信仰与传统九皇会纪日
【纪念简介开始】
九月初一至初九为北斗九皇降世的连续纪念期。这里的“降世之辰”表达九皇信仰中的九日礼斗纪念语义，不与项目独立计算的北斗斗降日合并。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历十月初一
名称：民岁腊之辰
类型：宗教纪念
详情人物：
纪念简介出处：《赤松子章历》卷二“五腊日”条
【纪念简介开始】
民岁腊是道教五腊中的第四腊，日期为十月初一。传统资料把它列为修斋、谢过、祭祀先祖并检点岁中行持的纪日。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历十一月廿三
名称：南斗下降
类型：下降
详情人物：南斗六司延寿星君
纪念简介出处：传统神圣降诞日资料所载十一月纪日
【纪念简介开始】
此日为另一条南斗下降纪念。它与九月初一的“南斗下降之辰”同属南斗六司信仰，但日期各自保留，不因共用人物资料与《南斗宝诰》而合并。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历十二月初一
名称：念经一卷胜常日
类型：宗教纪念
详情人物：
纪念简介出处：传统神圣降诞日资料所载十二月纪日
【纪念简介开始】
这是传统宗教纪日中的诵经功德日，强调在特定日期诵经、持斋和修持。所谓“胜常日”属于宗教文本的劝修表达，不应理解为现代可验证的客观功德倍数。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历十二月初八
名称：侯王腊之辰
类型：宗教纪念
详情人物：
纪念简介出处：《赤松子章历》卷二“五腊日”条
【纪念简介开始】
侯王腊是道教五腊中的第五腊，日期为十二月初八。传统资料将此日列为修斋、谢过、祭祀先祖的纪日；它与同日“腊八节”分属神圣纪念和传统节日两个栏目。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历十二月廿五
名称：天神下降
类型：下降
详情人物：
纪念简介出处：传统神圣降诞日资料所载十二月纪日
【纪念简介开始】
“天神下降”是传统宗教纪日对诸天神圣降临、巡察的概括性记载，并不专指某一位神祇。详情仅说明这一纪日语义，不另造人物或宝诰。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历十二月廿九
名称：清静真人成道
类型：成道
详情人物：
纪念简介出处：传统神圣降诞日资料所载十二月纪日
【纪念简介开始】
清静真人成道是传统神圣降诞日资料所载纪念。现有资料不足以把此尊号稳定对应到唯一历史人物，故保留古籍所载名称、日期与成道纪念性质。
【纪念简介结束】
【独立纪念结束】

【独立纪念事件】
日期：农历十二月三十
名称：诸佛下界探访善恶
类型：宗教纪念
详情人物：
纪念简介出处：传统神圣降诞日资料所载十二月纪日
【纪念简介开始】
这是传统宗教纪日资料对岁末诸佛下界、察访善恶的概括性记载，强调岁终反省、持斋与行善。它不是某一位具体佛的圣诞，也不绑定单一佛菩萨资料。
【纪念简介结束】
【独立纪念结束】
`,O1=`# 逐年杀风水师日，各干支杀风水师方
# 格式：年支：杀风水师日；方位
# 本规则与“年罗睺日”是两套独立规则，可在同一年分别命中。
# 戌年：年罗睺日为丁未日；逐年杀风水师日为辛未日。

子年：癸酉日；癸干酉支方
丑年：甲戌日；甲干戌支方
寅年：丁亥日；丁干亥支方
卯年：甲子日；甲干子支方
辰年：乙丑日；乙干丑支方
巳年：甲寅日；甲干寅支方
午年：丁卯日；丁干卯支方
未年：甲辰日；甲干辰支方
申年：己巳日；己干巳支方
酉年：甲午日；甲干午支方
戌年：辛未日；辛干未支方
亥年：甲申日；甲干申支方
`,$1=`# 逐月杀风水师日
# 本规则按农历月份。
# 格式：农历月：日支

正月：申日
二月：酉日
三月：戌日
四月：亥日
五月：子日
六月：丑日
七月：寅日
八月：卯日
九月：辰日
十月：巳日
十一月：午日
十二月：未日
`,X1=`# 逐月杀风水师时
# 本规则按农历月份。
# 所有时辰统一使用系统最终时辰。
# 十月按“无此规则”处理，不视为配置缺失。

正月：卯时
二月：申时
三月：辰时
四月：辰时
五月：子时
六月：寅时
七月：酉时
八月：巳时
九月：巳时
十月：无
十一月：未时
十二月：未时
`,L1=`# 造葬杀风水师时
# 格式：日支：时支
# 所有时辰统一使用系统最终时辰。

子日：丑时、卯时
丑日：寅时、巳时、申时
寅日：寅时、午时
卯日：辰时、午时
辰日：子时、戌时
巳日：巳时、午时、戌时
午日：戌时
未日：辰时、戌时
申日：未时、戌时
酉日：子时
戌日：寅时
亥日：子时、寅时、戌时
`,v1=`# 阴阳宅禁日
# 本规则按农历月日。
# 格式：农历日期：事件

正月十三：阴阳宅禁日
三月初九：阴阳宅禁日
六月初二：阴阳宅禁日
九月初六：阴阳宅禁日
十二月初二：阴阳宅禁日
`;function $2(u,n){const t={文件名:u,规则:[],错误:[]};return n.split(/\r?\n/u).forEach((e,i)=>{const a=i+1,F=e.trim();if(!F||F.startsWith("#"))return;const r=F.indexOf("："),g=F.indexOf(":"),E=[r,g].filter(c=>c>=0),h=E.length>0?Math.min(...E):-1;if(h<0){t.错误.push({文件名:u,行号:a,原文:e,信息:"缺少冒号分隔符"});return}const D=F.slice(0,h).trim(),l=F.slice(h+1).trim();if(!D||!l){t.错误.push({文件名:u,行号:a,原文:e,信息:"冒号两侧都必须有内容"});return}t.规则.push({条件:D,内容:l,行号:a,原文:e})}),t}function E5(){return Object.entries(Object.assign({"../../配置/传统节日.txt":G2,"../../配置/季罗睺日.txt":p1,"../../配置/年罗睺日.txt":z1,"../../配置/斗降日-北斗本命延生真经注.txt":N1,"../../配置/斗降日-太上北斗二十八章经.txt":Y1,"../../配置/日吉凶.txt":H2,"../../配置/日宜忌.txt":k2,"../../配置/时辰吉凶.txt":M1,"../../配置/时辰宜忌.txt":b1,"../../配置/时辰神煞.txt":T1,"../../配置/月罗睺日.txt":G1,"../../配置/本命星官.txt":Z1,"../../配置/杀师时.txt":H1,"../../配置/现代时辰宜忌.txt":O2,"../../配置/神圣纪念与神仙资料.txt":k1,"../../配置/逐年杀风水师日.txt":O1,"../../配置/逐月杀风水师日.txt":$1,"../../配置/逐月杀风水师时.txt":X1,"../../配置/造葬杀风水师时.txt":L1,"../../配置/阴阳宅禁日.txt":v1})).filter(([n])=>!n.endsWith("/神圣纪念与神仙资料.txt")).map(([n,t])=>{const e=n.split("/").pop()??n;return $2(e,t)}).sort((n,t)=>n.文件名.localeCompare(t.文件名,"zh-CN"))}function h5(u){return Object.entries(Object.assign({"../../配置/传统节日.txt":G2,"../../配置/季罗睺日.txt":p1,"../../配置/年罗睺日.txt":z1,"../../配置/斗降日-北斗本命延生真经注.txt":N1,"../../配置/斗降日-太上北斗二十八章经.txt":Y1,"../../配置/日吉凶.txt":H2,"../../配置/日宜忌.txt":k2,"../../配置/时辰吉凶.txt":M1,"../../配置/时辰宜忌.txt":b1,"../../配置/时辰神煞.txt":T1,"../../配置/月罗睺日.txt":G1,"../../配置/本命星官.txt":Z1,"../../配置/杀师时.txt":H1,"../../配置/现代时辰宜忌.txt":O2,"../../配置/神圣纪念与神仙资料.txt":k1,"../../配置/逐年杀风水师日.txt":O1,"../../配置/逐月杀风水师日.txt":$1,"../../配置/逐月杀风水师时.txt":X1,"../../配置/造葬杀风水师时.txt":L1,"../../配置/阴阳宅禁日.txt":v1})).find(([t])=>t.endsWith(`/${u}`))?.[1]}const C5=["建","除","满","平","定","执","破","危","成","收","开","闭"];function J1(u,n){const t=M.indexOf(u),e=M.indexOf(n);return C5[(e-t+12)%12]}function D5(u,n){return(u%n+n)%n}function A5(u=H2){const n=$2("日吉凶.txt",u);if(n.错误.length>0)throw new Error(n.错误.map(h=>h.信息).join("；"));const t={},e=n.规则.find(h=>h.条件==="值神"),i=n.规则.find(h=>h.条件==="吉"),a=n.规则.find(h=>h.条件==="凶"),F=h=>h.split("、").map(D=>D.trim()).filter(Boolean);for(const h of n.规则){const D=h.条件.match(/^([子丑寅卯辰巳午未申酉戌亥]+)月$/u);if(!D)continue;const l=h.内容.match(/^([子丑寅卯辰巳午未申酉戌亥])日$/u)?.[1];if(!l)throw new Error(`日吉凶配置无法识别“${h.原文}”`);for(const c of[...D[1]])t[c]=l}const r=F(e?.内容??""),g=new Set(F(i?.内容??"")),E=new Set(F(a?.内容??""));if(Object.keys(t).length!==12||r.length!==12||g.size!==6||E.size!==6)throw new Error("日吉凶配置不完整");if(r.some(h=>!g.has(h)&&!E.has(h)))throw new Error("日吉凶值神缺少吉凶分类");return{青龙起日:t,值神:r,吉神:g}}const c5=A5();function B5(u,n=c5){const t=B1(u).月建,e=O0(u).日支,i=n.青龙起日[t],a=n.值神[D5(M.indexOf(e)-M.indexOf(i),12)],F=n.吉神.has(a);return{天神:a,类型:F?"黄道":"黑道",吉凶:F?"吉":"凶"}}const U1="现代黄历宜忌体系";function K2(u){return u==="无"?[]:u.split("、").map(n=>n.trim()).filter(Boolean)}function l5(u=O2){const n=new Map;u.split(/\r?\n/u).forEach((i,a)=>{const F=i.trim();if(!F||F.startsWith("#"))return;const r=F.match(/^([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])日 ([子丑寅卯辰巳午未申酉戌亥])时：宜：(.+?)；忌：(.+)$/u);if(!r)throw new Error(`现代时辰宜忌第${a+1}行无法识别：${i}`);const g=`${r[1]}-${r[2]}`;if(n.has(g))throw new Error(`现代时辰宜忌重复配置：${g}`);n.set(g,{时宜:K2(r[3]),时忌:K2(r[4])})});const e=Array.from({length:60},(i,a)=>`${q[a%10]}${M[a%12]}`).flatMap(i=>M.map(a=>`${i}-${a}`)).filter(i=>!n.has(i));if(n.size!==720||e.length>0)throw new Error(`现代时辰宜忌配置不完整：已有${n.size}组，缺少${e.slice(0,5).join("、")||"未知组合"}`);return{组合数:n.size,查询(i,a){const F=n.get(`${i}-${a}`);if(!F)throw new Error(`现代时辰宜忌不存在：${i}日${a}时`);return{时宜:[...F.时宜],时忌:[...F.时忌],来源:U1}}}}const d5=l5(),_5=["天乙贵人","天官贵人","福星贵人","喜神","日禄","日马"],x5=new Set(["八风","八专","闭日","不将","成日","丑日","除日","除神","触水龙","大耗","大时","地火","地囊","丁日","定日","伏日","福德","福生","复日","庚日","官日","归忌","亥日","吉期","甲日","建日","劫煞","解神","九焦","九坎","九空","开日","立冬后立春前","临日","六合","六仪","路空","满日","卯日","每月二十三日","每月二十一日","每月六日","每月十二日","每月十九日","每月十五日","每月一日","民日","鸣吠","鸣吠对","母仓","平日","破日","普护","壬日","三合","社日","申日","生气","圣心","时德","收日","守日","霜降后立春前","朔日","死气","死神","巳日","四废","四耗","四忌","四穷","四相","天仓","天德","天德合","天恩","天狗","天后","天火","天吏","天马","天赦","天巫","天喜","天医","天愿","天贼","土符","土府","土王用事后","王日","往亡","望日","危日","未日","五富","五合","五离","五墓","五虚","午日","弦日","咸池","相日","小耗","辛日","续世","血忌","血支","旬空","厌对","乙日","驿马","益后","寅日","游祸","酉日","雨水后立夏前","月德","月德合","月恩","月害","月建","月空","月破","月煞","月刑","月虚","月厌","灾煞","招摇","执日","重日","子日"]);function E2(u){return u==="无"?[]:u.split(/[、,，]/u).map(n=>n.trim()).filter(Boolean)}function Y(u,n,t){return{文件名:u,行号:n?.行号??0,原文:n?.原文??"",信息:t}}function y0(){return q.reduce((u,n)=>(u[n]=[],u),{})}function f5(){return M.reduce((u,n)=>(u[n]=[],u),{})}function y5(u,n){const t=q.reduce((i,a)=>(i[a]="",i),{});if(!u)return t;for(const i of E2(u.内容)){const a=i.match(/^([甲乙丙丁戊己庚辛壬癸])日([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])时$/u);if(!a){n.push(Y("时辰神煞.txt",u,`无法识别五不遇定局“${i}”`));continue}const F=a[1];t[F]&&n.push(Y("时辰神煞.txt",u,`“${F}日”重复配置五不遇`)),t[F]=a[2]}const e=q.filter(i=>!t[i]);return e.length>0&&n.push(Y("时辰神煞.txt",u,`五不遇缺少${e.join("、")}日定局`)),t}function i2(u,n){const t=E2(u.内容).map(e=>e.replace(/时$/u,""));return t.some(e=>!M.includes(e))||new Set(t).size!==t.length?(n.push(Y("时辰神煞.txt",u,"时支列表包含无效或重复内容")),[]):t}function s2(u,n,t){const e=new Set;for(const i of E2(u.内容)){const a=n?i.match(/^([子丑寅卯辰巳午未申酉戌亥])刑([子丑寅卯辰巳午未申酉戌亥])$/u):i.match(/^([子丑寅卯辰巳午未申酉戌亥])([子丑寅卯辰巳午未申酉戌亥])$/u);if(!a){t.push(Y("时辰神煞.txt",u,`无法识别“${i}”`));continue}const F=n?`${a[1]}${a[2]}`:[a[1],a[2]].sort().join("");e.has(F)&&t.push(Y("时辰神煞.txt",u,`“${i}”重复配置`)),e.add(F)}return e}function j5(u,n,t,e,i){const a=[...n];if(a.length===0||a.some(F=>!q.includes(F))){i.push(Y("时辰神煞.txt",e,"日干条件无效"));return}for(const F of a)u[F].length>0&&i.push(Y("时辰神煞.txt",e,`“${F}日”重复配置`)),u[F]=t}function I5(u){if(!u)return{配置:null,错误:[Y("时辰神煞.txt",null,"缺少配置文件")]};const n=[...u.错误],t=u.规则.map(w=>w.原文).join(`
`);/[戍]/u.test(t)&&n.push(Y("时辰神煞.txt",null,"发现地支“戍”，应为“戌”")),/[已]/u.test(t)&&n.push(Y("时辰神煞.txt",null,"发现天干“已”，应为“己”"));const e=w=>{const J=u.规则.filter(i0=>i0.条件===w);return J.length!==1&&n.push(Y("时辰神煞.txt",J[1]??null,`“${w}”必须且只能配置一次`)),J[0]},i=e("六冲"),a=e("六合"),F=e("六害"),r=e("相刑"),g=e("自刑"),E=e("五不遇"),h=y5(E,n),D=y0(),l=y0(),c=y0(),x=y0(),y=y0(),f=f5(),_=y0(),S={},z=new Set(["六冲","六合","六害","相刑","自刑","五不遇"]);for(const w of u.规则){if(z.has(w.条件))continue;const J=w.条件.match(/^(天乙贵人|天官贵人|福星贵人|喜神|日禄|路空)·([甲乙丙丁戊己庚辛壬癸]+)日$/u);if(J){const c0={天乙贵人:D,天官贵人:l,福星贵人:c,喜神:x,日禄:y,路空:_}[J[1]];j5(c0,J[2],i2(w,n),w,n);continue}const i0=w.条件.match(/^日马·([子丑寅卯辰巳午未申酉戌亥]+)日$/u);if(i0){for(const L of[...i0[1]])f[L].length>0&&n.push(Y("时辰神煞.txt",w,`“${L}日”重复配置日马`)),f[L]=i2(w,n);continue}const X=w.条件.match(/^旬空·(甲[子戌申午辰寅])旬$/u);if(X){S[X[1]]&&n.push(Y("时辰神煞.txt",w,`“${X[1]}旬”重复配置`)),S[X[1]]=i2(w,n);continue}n.push(Y("时辰神煞.txt",w,`未知规则“${w.条件}”`))}for(const[w,J]of Object.entries({天乙贵人:D,天官贵人:l,福星贵人:c,喜神:x,日禄:y,路空:_})){const i0=q.filter(X=>J[X].length===0);i0.length>0&&n.push(Y("时辰神煞.txt",null,`${w}缺少${i0.join("、")}日`))}const G=M.filter(w=>f[w].length===0);if(G.length>0&&n.push(Y("时辰神煞.txt",null,`日马缺少${G.join("、")}日`)),["甲子","甲戌","甲申","甲午","甲辰","甲寅"].some(w=>!S[w])&&n.push(Y("时辰神煞.txt",null,"旬空必须完整配置六旬")),n.length>0||!i||!a||!F||!r||!g)return{配置:null,错误:n};const O=new Set(i2({...g,内容:g.内容.split(/[、,，]/u).map(w=>`${w}时`).join("、")},n));return{配置:{六冲:s2(i,!1,n),六合:s2(a,!1,n),六害:s2(F,!1,n),相刑:s2(r,!0,n),自刑:O,天乙贵人:D,天官贵人:l,福星贵人:c,喜神:x,日禄:y,日马:f,旬空:S,路空:_,五不遇:h},错误:n}}function P1(u,n="时辰宜忌.txt"){if(!u)return{配置:null,错误:[Y(n,null,"缺少配置文件")]};const t=[...u.错误],e=new Map;for(const i of u.规则){i.原文.includes("戍")&&t.push(Y(n,i,"发现地支“戍”，应为“戌”")),i.原文.includes("已日")&&t.push(Y(n,i,"发现天干“已”，应为“己”"));const a=i.条件.match(/^(.+?)(宜|忌)$/u);if(!a){t.push(Y(n,i,"事项必须以“宜”或“忌”结尾"));continue}const F=a[1],r=a[2],g=E2(i.内容);new Set(g).size!==g.length&&t.push(Y(n,i,`“${F}${r}”存在重复条件`));const E=g.filter(D=>!x5.has(D));E.length>0&&t.push(Y(n,i,`未知条件：${E.join("、")}`));const h=e.get(F)??{};h[r]&&t.push(Y(n,i,`“${F}${r}”重复配置`)),h[r]=g,e.set(F,h)}for(const[i,a]of e){(!a.宜||!a.忌)&&t.push(Y(n,null,`“${i}”必须同时配置宜、忌，允许内容写“无”`));const F=(a.宜??[]).filter(r=>(a.忌??[]).includes(r));F.length>0&&t.push(Y(n,null,`“${i}”宜忌重复：${F.join("、")}`))}return e.size<60&&t.push(Y(n,null,`通书六十事配置不足，当前仅${e.size}项`)),t.length>0?{配置:null,错误:t}:{配置:[...e].map(([i,a])=>({名称:i,宜:a.宜??[],忌:a.忌??[]})),错误:[]}}function m5(u){const n=I5(u.find(i=>i.文件名==="时辰神煞.txt")),t=P1(u.find(i=>i.文件名==="时辰宜忌.txt")),e=[...n.错误,...t.错误];return!n.配置||!t.配置||e.length>0?{配置:null,错误:e}:{配置:{神煞:n.配置,用事:t.配置},错误:[]}}function _2(u,n){return[u,n].sort().join("")}function S5(u){const n=q.indexOf(u[0]),t=M.indexOf(u[1]);if(n<0||t<0)return null;const e=Array.from({length:60},(a,F)=>`${q[F%10]}${M[F%12]}`),i=e.indexOf(u);return i<0?null:e[Math.floor(i/10)*10]}function w5(u,n,t,e){const i=new Set(e.filter(E=>E==="旬空"||E==="路空")),a=[],F=[],r=[],g=[];for(const E of u){const h=E.宜.some(l=>i.has(l)),D=E.忌.some(l=>i.has(l));h&&D?(r.push(E.名称),g.push(E.名称)):h?a.push(E.名称):D?F.push(E.名称):g.push(E.名称)}return{时宜:a,时忌:F,冲突:r,未判定用事:g}}function p5(u,n,t,e,i){const a=t[1],r=/^[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥]$/u.test(n)&&M.includes(a)?d5.查询(n,a):{时宜:[],时忌:[],来源:U1},g={日时关系:[],吉神:[],凶煞:[],时宜:[],时忌:[],现代时宜:r.时宜,现代时忌:r.时忌,现代来源:r.来源,冲突:[],未判定用事:[],依据:"详细规则配置不可用"};if(!u)return g;const E=n[0],h=n[1],D=t[0],l=t[1];if(!q.includes(E)||!M.includes(h)||!q.includes(D)||!M.includes(l))return g;const c=u.神煞,x=[];h===l&&x.push("日建"),c.六冲.has(_2(h,l))&&x.push("日破"),c.六合.has(_2(h,l))&&x.push("日合"),c.六害.has(_2(h,l))&&x.push("日害"),(c.相刑.has(`${h}${l}`)||h===l&&c.自刑.has(h))&&x.push("日刑");const y=[];for(const G of _5)(G==="日马"?c.日马[h]:c[G][E]).includes(l)&&y.push(G);const f=[];c.五不遇[E]===t&&f.push("五不遇");const _=S5(n);_&&c.旬空[_]?.includes(l)&&f.push("旬空"),c.路空[E].includes(l)&&f.push("路空");const S=w5(u.用事,x,y,f),z=e==="配置错误"||i==="—"?"《钦定协纪辨方书》卷七、卷十一、卷三十二":"《玉匣记·诸日起吉时歌》；《钦定协纪辨方书》卷七、卷十一、卷三十二";return{日时关系:x,吉神:y,凶煞:f,时宜:S.时宜,时忌:S.时忌,现代时宜:r.时宜,现代时忌:r.时忌,现代来源:r.来源,冲突:S.冲突,未判定用事:S.未判定用事,依据:`${z}；项目中文配置保守用时结论`}}const q1=["月建","月破","月厌","月刑","月害","劫煞","灾煞","月煞"];function z5(u=k2){const n=$2("日宜忌.txt",u);if(n.错误.length>0)throw new Error(n.错误.map(i=>i.信息).join("；"));const t={};for(const i of n.规则){const a=i.条件.match(/^([子丑寅卯辰巳午未申酉戌亥])月$/u);if(!a)continue;const F={};for(const r of i.内容.split("、")){const g=r.match(/^(月建|月破|月厌|月刑|月害|劫煞|灾煞|月煞)([子丑寅卯辰巳午未申酉戌亥])$/u);if(!g)throw new Error(`日宜忌配置无法识别“${r}”`);F[g[1]]=g[2]}if(q1.some(r=>!F[r]))throw new Error(`日宜忌缺少${a[1]}月条件`);t[a[1]]=F}const e=P1({...n,规则:n.规则.filter(i=>/(?:宜|忌)$/u.test(i.条件))},"日宜忌.txt");if(Object.keys(t).length!==12||!e.配置||e.错误.length>0)throw new Error(["日宜忌配置不完整",...e.错误.map(i=>i.信息)].join("；"));return{月级条件:t,用事:e.配置}}const N5=z5(),Y5={子:"丑",丑:"子",寅:"亥",亥:"寅",卯:"戌",戌:"卯",辰:"酉",酉:"辰",巳:"申",申:"巳",午:"未",未:"午"},M5=[["寅","午","戌"],["巳","酉","丑"],["申","子","辰"],["亥","卯","未"]],b5={1:"每月一日",6:"每月六日",12:"每月十二日",15:"每月十五日",19:"每月十九日",21:"每月二十一日",23:"每月二十三日"};function V2(u,n,t){const e=D0(u.年,n),i=r0(u,e)>=0?e:D0(u.年-1,n);return r0(u,i)>=0&&r0(u,D0(i.年+1,t))<0}function T5(u,n){const t=T2(u),e=t.日柱[0],i=t.日支,a=f0(u),F=new Set([`${J1(t.月建,i)}日`,`${e}日`,`${i}日`]);for(const D of q1)n.月级条件[t.月建][D]===i&&F.add(D);Y5[t.月建]===i&&F.add("六合"),M5.find(D=>D.includes(t.月建))?.includes(i)&&i!==t.月建&&F.add("三合");const g=b5[a.日];g&&F.add(g),a.日===1&&F.add("朔日"),a.日===15&&F.add("望日"),[7,8,22,23].includes(a.日)&&F.add("弦日"),V2(u,"立冬","立春")&&F.add("立冬后立春前"),V2(u,"霜降","立春")&&F.add("霜降后立春前");const E=D0(u.年,"雨水"),h=D0(u.年,"立夏");return r0(u,E)>=0&&r0(u,h)<0&&F.add("雨水后立夏前"),F}function G5(u,n=N5){const t=T5(u,n),e=[],i=[],a=[];for(const r of n.用事){const g=r.宜.some(h=>t.has(h)),E=r.忌.some(h=>t.has(h));g&&E?a.push(r.名称):g?e.push(r.名称):E&&i.push(r.名称)}const F=n.用事.length;return{宜:e,忌:i,冲突:a,命中条件:[...t],支持事项数:F,诸事不宜:e.length===0&&i.length===F,诸事皆宜:i.length===0&&e.length===F}}function W1({年柱:u,月柱:n,日柱:t,时柱:e}){return`${u}年　${n}月　${t}日　${e}时`}function Z5(u){return u%4===0&&(u%100!==0||u%400===0)}function H5(u){const n=Date.UTC(u.年,0,1),t=Date.UTC(u.年,u.月-1,u.日);return Math.floor((t-n)/864e5)+1}function k5(u){const n=Z5(u.年)?366:365,t=u.时+u.分/60+u.秒/3600,e=2*Math.PI*(H5(u)-1+(t-12)/24)/n;return 229.18*(75e-6+.001868*Math.cos(e)-.032077*Math.sin(e)-.014615*Math.cos(2*e)-.040849*Math.sin(2*e))}function O5(u){if(!Number.isFinite(u)||u<-180||u>180)throw new RangeError("经度必须是 -180 到 180 之间的有效数字");return(u-120)*4}function h2(u,n){const t=O5(n),e=k5(u),i=t+e;return{北京时间:u,真太阳时:C0(u,i*60),经度修正分钟:t,均时差分钟:e,总修正分钟:i}}function $5(u){const n=u.时*3600+u.分*60+u.秒,t=Math.floor((n+3600)%86400/7200);return M[t]}function R1(u,n){const t=q.indexOf(u[0]),e=M.indexOf(n);if(t<0||e<0)throw new Error("无法根据无效干支计算时柱");const i=t%5*2;return`${q[(i+e)%10]}${n}`}function Q1(u,n){const t=n===null?null:h2(u,n),e=t?.真太阳时??u,i=e,{日柱:a,日支:F}=O0(e),r=$5(e);return{北京时间:u,真太阳时:t?.真太阳时??null,最终时间:e,日柱计算时间:i,计算依据:t?"真太阳时":"北京时间（未取得定位）",经度修正分钟:t?.经度修正分钟??null,均时差分钟:t?.均时差分钟??null,总修正分钟:t?.总修正分钟??null,时支:r,时柱:R1(a,r),日柱:a,日支:F}}const K1=["青龙","明堂","天刑","朱雀","金匮","天德","白虎","玉堂","天牢","玄武","司命","勾陈"];function V1(u){return u.split(/[、,，]/u).map(n=>n.trim()).filter(Boolean)}function l0(u,n){return{文件名:"时辰吉凶.txt",行号:u?.行号??0,原文:u?.原文??"",信息:n}}function x2(u,n,t){if(!u)return t.push(l0(null,`缺少“${n}”配置`)),[];const e=V1(u.内容);return e.filter(a=>!K1.includes(a)).length>0||new Set(e).size!==e.length?(t.push(l0(u,`“${n}”包含无效或重复值神`)),[]):e}function X5(u){if(!u)return{配置:null,错误:[l0(null,"缺少配置文件")]};const n=[...u.错误],t={},e=new Set(["值神","吉","凶"]);for(const E of u.规则.filter(h=>!e.has(h.条件))){const h=E.内容.replace(/时$/u,""),D=V1(E.条件).map(l=>l.replace(/日$/u,""));if(!M.includes(h)||D.length===0||D.some(l=>!M.includes(l))){n.push(l0(E,"青龙起时必须使用有效的日支与时支"));continue}for(const l of D)t[l]?n.push(l0(E,`“${l}日”重复配置`)):t[l]=h}const i=M.filter(E=>!t[E]);i.length>0&&n.push(l0(null,`缺少${i.join("、")}日的青龙起时`));const a=x2(u.规则.find(E=>E.条件==="值神"),"值神",n),F=x2(u.规则.find(E=>E.条件==="吉"),"吉",n),r=x2(u.规则.find(E=>E.条件==="凶"),"凶",n);if(a.length!==12||new Set(a).size!==12){const E=u.规则.find(h=>h.条件==="值神")??null;n.push(l0(E,"值神顺序必须完整包含十二值神"))}const g=[...F,...r];return(F.length!==6||r.length!==6||new Set(g).size!==12||K1.some(E=>!g.includes(E)))&&n.push(l0(null,"吉凶分组必须各含六神并完整覆盖十二值神")),n.length>0?{配置:null,错误:n}:{配置:{青龙起时:t,值神顺序:a,吉神:F,凶神:r},错误:[]}}function L5(u,n,t){if(!u)return{值神:"配置错误",吉凶:"—"};const e=M.indexOf(u.青龙起时[n]),i=M.indexOf(t),a=u.值神顺序[(i-e+12)%12];return{值神:a,吉凶:u.吉神.includes(a)?"吉":"凶"}}const v5=["","正月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];function J5(u,n){return u.find(t=>t.文件名===n)}function U5(u){return u.内容==="无"?[]:u.内容.split(/[、,，]/u).map(n=>n.trim().replace(/时$/u,"")).filter(Boolean)}function f2(u,n,t,e,i){const a=J5(u,t);if(!a||a.错误.length>0)return{名称:n,状态:"配置错误",说明:"配置未能正常读取"};const F=a.规则.find(E=>E.条件===e);if(!F)return{名称:n,状态:"配置错误",说明:`缺少“${e}”规则`};if(F.内容==="无")return{名称:n,状态:"无规则",说明:`${e} · 无此规则`};const r=U5(F),g=r.includes(i);return{名称:n,状态:g?"命中":"未命中",说明:`${e} · 忌${r.join("、")}时 · ${i}时${g?"命中":"未命中"}`}}function nn(u,n,t,e){const i=v5[e];return[f2(u,"杀师时","杀师时.txt",`${n}日`,t),f2(u,"造葬杀风水师时","造葬杀风水师时.txt",`${n}日`,t),i?f2(u,"逐月杀风水师时","逐月杀风水师时.txt",i,t):{名称:"逐月杀风水师时",状态:"配置错误",说明:"农历月份无效"}]}const P5=["","正月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],n1={立春:"春季",立夏:"夏季",立秋:"秋季",立冬:"冬季"},q5=["年","季","月","日"];function un(u,n){return u.find(t=>t.文件名===n)}function j0(u,n,t){const e=un(u,n);return!e||e.错误.length>0?null:e.规则.find(i=>i.条件===t)??null}function W5(u,n){const t=un(u,n);return!!(t&&t.错误.length===0)}function w2(u,n,t=""){return{名称:u,层级:n,状态:"配置错误",条件:t,禁忌值:"",展示文本:`${u} · 配置未能正常读取`,说明:"配置未能正常读取"}}function a2(u,n,t,e,i){if(!t)return w2(u,n,i);const a=t.内容===e;return{名称:u,层级:n,状态:a?"命中":"未命中",条件:i,禁忌值:t.内容,展示文本:`${u} · ${i}忌${t.内容}`,说明:`${t.内容}${a?"命中":"未命中"}`}}function R5(u){const n=[u.年-1,u.年].flatMap(g2).filter(t=>Object.hasOwn(n1,t.名称)).filter(t=>r0(t,u)<=0).sort((t,e)=>r0(e,t))[0];if(!n)throw new Error("无法确定罗睺季节");return n1[n.名称]}function Q5(u){const n=u.filter(a=>a.状态==="命中"),t=q5.filter(a=>n.some(F=>F.层级===a)),e=u.some(a=>a.状态==="配置错误"),i=[...new Set(n.map(a=>a.展示文本))];return{命中:n,犯忌层级:t,当日状态:e?"规则配置异常":i.length===0?"当日宜":i.join(`
`)}}function tn(u,n){const t=f0(n),{年柱:e,日柱:i}=T2(n),a=`${e[1]}年`,F=P5[t.月],r=`${i[1]}日`,g=R5(n),E=a2("年罗睺日","年",j0(u,"年罗睺日.txt",a),`${i}日`,a),h=a2("季罗睺日","季",j0(u,"季罗睺日.txt",g),`${i}日`,g),D=a2("月罗睺日","月",j0(u,"月罗睺日.txt",F),r,F),l="阴阳宅禁日.txt",c=`${F}${t.日名}`,x=W5(u,l),y=x&&!!j0(u,l,c),f=x?{名称:"阴阳宅禁日",层级:"日",状态:y?"命中":"未命中",条件:c,禁忌值:c,展示文本:`阴阳宅禁日 · ${c}`,说明:`${c}${y?"命中":"未命中"}`}:w2("阴阳宅禁日","日",c),_=j0(u,"逐年杀风水师日.txt",a),[S="",z=""]=_?.内容.split(/[；;]/u).map(J=>J.trim())??[],G=!!_&&S===`${i}日`,H=_?{名称:"逐年杀风水师日",层级:"年",状态:G?"命中":"未命中",条件:a,禁忌值:S,展示文本:`逐年杀风水师日 · ${a}忌${S}${z?` · ${z}`:""}`,说明:`${S}${G?"命中":"未命中"}`,...G&&z?{方位:z}:{}}:w2("逐年杀风水师日","年",a),O=a2("逐月杀风水师日","月",j0(u,"逐月杀风水师日.txt",F),r,F),w=[E,h,D,f,H,O];return{规则:w,...Q5(w)}}const u1=6e4;function S0(u){return Date.UTC(u.年,u.月-1,u.日,u.时,u.分,u.秒)}function p2(u){const n=new Date(u);return{年:n.getUTCFullYear(),月:n.getUTCMonth()+1,日:n.getUTCDate(),时:n.getUTCHours(),分:n.getUTCMinutes(),秒:n.getUTCSeconds()}}function K5(u){return p2(Math.round(S0(u)/u1)*u1)}function t1(u){return{年:u.年,月:u.月,日:u.日,时:0,分:0,秒:0}}function V5(u,n){const t=S0(u);let e=t-1560*60*1e3,i=t+1560*60*1e3;for(let a=0;a<56&&i-e>1e3;a+=1){const F=Math.floor((e+i)/2e3)*1e3,r=h2(p2(F),n).真太阳时;S0(r)<t?e=F+1e3:i=F}return p2(i)}function nu(u){const n=u.时>=23?t1(C0(u,3600)):t1(u);return[C0(n,-3600),n,...Array.from({length:12},(t,e)=>C0(n,(e*2+1)*60*60))]}function uu(u,n,t,e,i=null,a=[]){const F=n==="真太阳时"&&t!==null?"真太阳时":"北京时间",r=F==="真太阳时"?h2(u,t).真太阳时:u,g=nu(r),E=g.map(c=>K5(F==="真太阳时"?V5(c,t):c)),h=["子","子",...M.slice(1)],D=S0(u),l=h.map((c,x)=>{const y=E[x],f=E[x+1],_=C0(f,-60),S=C0(g[x],x<2?1800:3600),{日柱:z,日支:G}=O0(S),H=f0(S).月,O=L5(e,G,c),w=R1(z,c);return{键:x===0?"夜子":x===1?"早子":c,名称:x===0?"夜子":x===1?"早子":`${c}时`,时支:c,时间范围:`${Y0(y)}～${Y0(_)}`,开始北京时间:y,结束北京时间:_,日柱:z,时柱:w,值神:O.值神,吉凶:O.吉凶,详情:p5(i,z,w,O.值神,O.吉凶),风水禁忌:nn(a,G,c,H),当日风水禁忌:tn(a,S),当前:D>=S0(y)&&D<S0(f)}});return{时间依据:F,项目:[{时支:"子",名称:"子时",时段:l.slice(0,2),当前:l.slice(0,2).some(c=>c.当前)},...M.slice(1).map((c,x)=>{const y=l[x+2];return{时支:c,名称:`${c}时`,时段:[y],当前:y.当前}})]}}function en(u){const n=f0(u),t=bn(u),e=T2(u);return{农历:n,节气:t,年柱:e.年柱,月柱:e.月柱,日柱:e.日柱,月建:e.月建,值星:J1(e.月建,e.日支),日吉凶:B5(u),每日宜忌:G5(u),时柱:null,计算时刻:u}}function sn(u){const n=X5(u.find(e=>e.文件名==="时辰吉凶.txt")),t=m5(u);return{时辰吉凶:n.配置,详细时辰:t.配置,错误:[...n.错误,...t.错误]}}function tu(u,n,t,e,i=sn(e),a=I1(e).配置){const F=n==="真太阳时"&&t!==null?"真太阳时":"北京时间",r=t===null?null:h2(u,t),g=Q1(u,F==="真太阳时"?t:null),E=en(g.最终时间),h=m1(a,E.农历,E.日柱),D=tn(e,g.最终时间),l=W1({年柱:E.年柱,月柱:E.月柱,日柱:E.日柱,时柱:g.时柱}),c=uu(u,F,t,i.时辰吉凶,i.详细时辰,e),y=c.项目.flatMap(f=>f.时段).find(f=>f.当前)?.风水禁忌??nn(e,g.日支,g.时支,E.农历.月);return{时间依据:F,真太阳时结果:r,最终:g,历法结果:E,四柱:l,北斗:h,日级风水禁忌:D,时辰规则:y,十二时辰:c,时辰配置错误:i.错误}}function Q0(u){return{模式:"实时",时间:Y0(u)}}function eu(u,n){return u.模式==="实时"?Q0(n):u}function iu(u){return 6e4-(u%6e4+6e4)%6e4}function su(u,n=Date.now){let t=!1,e=null;const i=()=>{!t||e!==null||(e=setTimeout(()=>{e=null;const a=n();u(a),i()},iu(n())))};return{启动(){t||(t=!0,i())},停止(){t=!1,e!==null&&clearTimeout(e),e=null},是否运行(){return t}}}const Q={最小日期:"1900-01-01",最大日期:"2100-12-31"};function au(u,n){const t=u.match(/^(\d{4})-(\d{2})-(\d{2})$/u),e=n.match(/^(\d{2}):(\d{2})$/u);if(!t||!e)return null;const[i,a,F,r,g]=[t[1],t[2],t[3],e[1],e[2]].map(Number),E=new Date(Date.UTC(i,a-1,F,r,g));return E.getUTCFullYear()!==i||E.getUTCMonth()+1!==a||E.getUTCDate()!==F||E.getUTCHours()!==r||E.getUTCMinutes()!==g?null:{年:i,月:a,日:F,时:r,分:g,秒:0}}function Fu(u,n,t){if(n==="真太阳时"&&t===null)throw new Error("真太阳时查询缺少出生地经度");const e=Q1(u,n==="真太阳时"?t:null),i=en(e.最终时间),a=W1({年柱:i.年柱,月柱:i.月柱,日柱:i.日柱,时柱:e.时柱});return{输入北京时间:u,最终时间:e.最终时间,时间依据:n,经度:n==="真太阳时"?t:null,年柱:i.年柱,月柱:i.月柱,日柱:i.日柱,时柱:e.时柱,四柱:a,八字:`${i.年柱}　${i.月柱}　${i.日柱}　${e.时柱}`}}function ru(u,n,t,e){if(!/^\d{4}-\d{2}-\d{2}$/u.test(u)||!/^\d{2}:\d{2}$/u.test(n))return{成功:!1,提示:"请继续输入完整的公历日期和时间"};if(u<Q.最小日期||u>Q.最大日期)return{成功:!1,提示:`当前历法计算支持范围为 ${Q.最小日期} 至 ${Q.最大日期}`};const i=au(u,n);if(!i)return{成功:!1,提示:"请输入有效的公历日期和时间"};if(t==="真太阳时"&&e===null)return{成功:!1,提示:"请输入出生地经度，或使用当前定位"};try{return{成功:!0,结果:Fu(i,t,e)}}catch{return{成功:!1,提示:`当前历法计算支持范围为 ${Q.最小日期} 至 ${Q.最大日期}`}}}function ou(u){return u.时间依据==="北京时间"?[`输入北京时间：${J0(u.输入北京时间)}`]:[`输入北京时间：${J0(u.输入北京时间)}`,`出生地经度：${u.经度?.toFixed(2)}°E`,`真太阳时：${J0(u.最终时间)}`]}function gu(u){const n=u.宜.length===0&&u.忌.length>0;return{日宜:u.诸事皆宜?["诸事皆宜"]:[...u.宜],日忌:u.诸事不宜||n?["诸事不宜"]:[...u.忌]}}function Eu(u,n){return(n?u.find(t=>t.键===n):void 0)??u.find(t=>t.当前)??u[0]}function hu(u,n){return n?null:u}function Cu(){return null}function Du(u){return new Date(u.年,u.月-1,u.日)}function Au(u,n,t,e){const i=Du(e),a=!N0(n,i),F=N0(u,n),r=t.模式==="实时";return{今天:i,所选日期:r&&F?i:u,时间查询:eu(t,e),需要渲染:r||a}}function X2(u){return`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}`}function L2(u,n,t){const e=u.match(/^(\d{4})-(\d{2})-(\d{2})$/u);if(!e||u<n||u>t)return null;const[i,a,F]=[e[1],e[2],e[3]].map(Number),r=new Date(i,a-1,F);return r.getFullYear()===i&&r.getMonth()===a-1&&r.getDate()===F?r:null}function cu(u,n,t,e){const i=xn(u,n);return L2(X2(i),t,e)}function Bu(u,n,t,e){const i=new Date(u.getFullYear(),u.getMonth()+n,1),a=new Date(i.getFullYear(),i.getMonth()+1,0).getDate(),F=new Date(i.getFullYear(),i.getMonth(),Math.min(u.getDate(),a));return L2(X2(F),t,e)}const an="traditional-calendar-theme";function Fn(u){return u==="system"||u==="light"||u==="dark"}function lu(u){try{const t=u?.getItem(an)??null??void 0;return Fn(t)?t:"system"}catch{return"system"}}function e1(u,n){return u==="system"?n?"dark":"light":u}function du(u){let n=lu(u.存储),t=e1(n,u.媒体查询.matches),e=!1;const i=()=>{t=e1(n,u.媒体查询.matches),u.根元素.dataset.themePreference=n,u.根元素.dataset.theme=t,u.更新主题色?.(t)},a=()=>{n==="system"&&i()},F=()=>{n==="system"&&!e?(u.媒体查询.addEventListener("change",a),e=!0):n!=="system"&&e&&(u.媒体查询.removeEventListener("change",a),e=!1)};return F(),i(),{get 偏好(){return n},get 实际主题(){return t},设置偏好(r){n=r;try{u.存储?.setItem(an,r)}catch{}F(),i()},销毁(){e&&u.媒体查询.removeEventListener("change",a),e=!1}}}function _u(){const u=document.querySelector('meta[name="theme-color"]');return du({根元素:document.documentElement,媒体查询:window.matchMedia("(prefers-color-scheme: dark)"),存储:window.localStorage,更新主题色:n=>u?.setAttribute("content",n==="dark"?"#120b08":"#eadcc1")})}const rn=document.querySelector("#app");if(!rn)throw new Error("页面初始化失败：找不到应用容器");const $=rn,F2=_u();function K0(u=k0()){return new Date(u.年,u.月-1,u.日)}const w0=k0();let E0=K0(w0),k=r2({年:E0.getFullYear(),月:E0.getMonth()},E0),d0=Q0(w0),e0="北京时间",R0=null,g0="未定位",p0="尚未定位，当前使用北京时间",V={环境:S1(),状态:"未请求",错误类型:null,错误码:null,纬度:null,经度:null,精度米:null,尝试次数:0},F0=null,M0=`${w0.年}-${String(w0.月).padStart(2,"0")}-${String(w0.日).padStart(2,"0")}`,b0=Y0(w0),U0="北京时间",T0="",P0=!1,x0="",$0=null,V0=!1,n2=!1,t0=null,on=0;const G0=E5(),Z0=Qn("神圣纪念与神仙资料.txt",h5("神圣纪念与神仙资料.txt")??""),xu=sn(G0),y2=I1(G0),fu=Z0.人物.reduce((u,n)=>u+n.纪念事件.length,0)+Z0.独立纪念事件.length,yu=G0.reduce((u,n)=>u+n.规则.length,0)+Z0.人物.length+fu,ju=G0.reduce((u,n)=>u+n.错误.length,0)+Z0.错误.length;let z2=null,gn=[];function En(){return V={环境:S1(),状态:"请求中",错误类型:null,错误码:null,纬度:null,经度:null,精度米:null,尝试次数:0},g5()}function hn(u){if(u.成功){V={...V,状态:"成功",错误类型:null,错误码:null,纬度:u.纬度,经度:u.经度,精度米:u.精度米,尝试次数:u.尝试次数};return}V={...V,状态:"失败",错误类型:u.原因,错误码:u.错误码,纬度:null,经度:null,精度米:null,尝试次数:u.尝试次数}}function H0(){$0=null,V0=!1,n2=!1}function C2(u){const n=k0();E0=K0(n),k=r2(k,u),d0=Q0(n),F0=null,H0(),W()}function i1(u){const n=cu(k.所选日期,u,Q.最小日期,Q.最大日期);n&&C2(n)}function N2(u){const n=Bu(k.所选日期,u,Q.最小日期,Q.最大日期);if(!n)return;C2(n);const t=$.querySelector("[data-month-calendar]");!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(t.classList.add(u>0?"is-month-transition-next":"is-month-transition-previous"),window.setTimeout(()=>t.classList.remove("is-month-transition-next","is-month-transition-previous"),180))}function Y2(){const u=k0();E0=K0(u),k=r2(k,E0),d0=Q0(u),F0=null,H0(),W()}function v2(u,n){if(!u){n==="原生选择"?Y2():(H0(),W());return}const t=L2(u,Q.最小日期,Q.最大日期);if(!t){H0(),W();return}N0(t,K0())?Y2():C2(t)}async function s1(u){if(g0==="定位中")return!1;const n=En();g0="定位中",p0="正在获取本机位置…",W();const t=await n;return hn(t),t.成功?(R0=t.经度,g0="成功",e0="真太阳时",p0=e0==="真太阳时"?"定位成功，当前使用真太阳时":"定位成功，当前使用北京时间",W(),!0):(R0=null,e0="北京时间",g0="失败",p0=w1(t.原因),W(),!1)}function Iu(u){const n=Math.round(u*60),t=n>=0?"+":"−",e=Math.abs(n);return`${t}${Math.floor(e/60)}分${String(e%60).padStart(2,"0")}秒`}function mu(u){switch(u){case"已拒绝":return"权限拒绝";case"不可用":return"位置不可用";case"超时":return"超时";case"不支持":return"浏览器不支持";case"非安全连接":return"非安全连接";case"坐标无效":return"坐标无效";case"未知错误":return"未知错误";default:return"无"}}function Su(){const u=V.环境,n=V.状态==="成功"?`
      <span>纬度：${V.纬度?.toFixed(6)}</span>
      <span>经度：${V.经度?.toFixed(6)}</span>
      <span>定位精度：${V.精度米?.toFixed(0)} 米</span>`:"";return`
    <div class="location-diagnostics" data-location-diagnostics>
      <span>HTTPS：${u.HTTPS?"是":"否"}</span>
      <span>Geolocation：${u.支持定位?"支持":"不支持"}</span>
      <span>页面可见：${u.页面可见?"是":"否"}</span>
      <span data-location-diagnostic-status>定位状态：${V.状态}</span>
      <span data-location-diagnostic-error>错误类型：${mu(V.错误类型)}</span>
      <span data-location-diagnostic-code>错误码：${V.错误码??"无"}</span>
      <span>请求次数：${V.尝试次数}</span>
      ${n}
    </div>`}function T(u){return u.replace(/[&<>"']/gu,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n]??n)}function a1(u){return T(u)}function j2(u,n){return`<button type="button" class="deity-link" data-sacred-commemoration="${n}">${u}</button>`}function wu(u,n){const t=u.名称;if(!Z2(u))return T(t);if(!u.人物)return j2(T(t),n);const e=[...new Set([u.人物.主名称,...u.人物.匹配名称])].sort((r,g)=>g.length-r.length||r.localeCompare(g,"zh-CN")),i=[];for(let r=0;r<t.length;){const g=e.find(E=>t.startsWith(E,r));if(!g){r+=1;continue}i.push({开始:r,结束:r+g.length}),r+=g.length}if(i.length===0)return j2(T(t),n);let a=0,F="";for(const r of i){F+=T(t.slice(a,r.开始));const g=T(t.slice(r.开始,r.结束));F+=j2(g,n),a=r.结束}return`${F}${T(t.slice(a))}`}function F1(u,n){return`
    <div class="calendar-info-item">
      <h3>${u}</h3>
      <div class="calendar-info-values">${(n.length>0?n:["无"]).map(t=>`<span${t==="无"?' class="is-empty"':""}>${T(t)}</span>`).join("")}</div>
    </div>`}function pu(u){return gn=u,`
    <div class="calendar-info-item">
      <h3>神圣纪念</h3>
      <div class="calendar-info-values">${u.length>0?u.map((n,t)=>`<span>${wu(n,t)}</span>`).join(""):'<span class="is-empty">无</span>'}</div>
    </div>`}function I2(u){return u.split(/\r?\n[ \t]*\r?\n/u).map(n=>`<p>${T(n).replace(/\r?\n/gu,"<br>")}</p>`).join("")}function zu(u){return u.startsWith("/")?`/0f25bcf2bbb8a869e712/${u.slice(1)}`:u}function Nu(u){const n=u.人物,t=n?.神像?`<figure class="deity-portrait"><img src="${a1(zu(n.神像))}" alt="${a1(n.主名称)}神像"></figure>`:"",e=n?.宝诰?`<section class="deity-section deity-proclamation"><h3>${T(n.宝诰标题||"宝诰")}</h3>${I2(n.宝诰)}</section>`:"",i=n?.简介?`<section class="deity-section deity-introduction"><h3>人物简介</h3>${I2(n.简介)}</section>`:"",a=u.事件.纪念简介?`<section class="deity-section commemoration-introduction"><h3>纪念简介</h3>${I2(u.事件.纪念简介)}</section>`:"",F=n?.宝诰&&n.宝诰出处?`<p class="deity-source">宝诰出处：${T(n.宝诰出处)}</p>`:"",r=n?.主名称||u.名称;return`
    <article class="deity-dialog-card${n?.神像?" has-portrait":" is-text-only"}">
      ${t}
      <div class="deity-dialog-content">
        <header class="deity-dialog-heading">
          <div><p>神圣纪念详情</p><h2 id="deity-dialog-title">${T(r)}</h2></div>
          <button type="button" class="deity-dialog-close" data-action="close-deity" aria-label="关闭神圣纪念详情">×</button>
        </header>
        <div class="deity-dialog-scroll">${e}${i}${a}${F}</div>
      </div>
    </article>`}function Yu(u,n){if(!Z2(u))return;const t=$.querySelector("[data-deity-dialog]");t&&(t.innerHTML=Nu(u),t.classList.toggle("is-text-only",!u.人物?.神像),z2=n,document.body.classList.add("deity-dialog-open"),t.showModal(),t.querySelector("[data-action='close-deity']")?.focus())}function r1(u){u.open&&u.close()}function o1(u,n,t){const e=n.length>0?n:["无"];return`
    <div class="day-action-group is-${t}">
      <h3>${u}</h3>
      <div class="day-action-tags">${e.map(i=>`<span>${T(i)}</span>`).join("")}</div>
    </div>`}function m2(u,n,t="normal"){const e=Array.isArray(n)?n:[n];return`
    <div class="almanac-core-item is-${t}">
      <h3>${u}</h3>
      <strong>${e.map(i=>`<span>${T(i)}</span>`).join("")}</strong>
    </div>`}function Mu(u,n){const t=[{action:"previous-month",label:"上一月",text:"‹"},{action:"month-label",label:"月份导航",text:"月"},{action:"next-month",label:"下一月",text:"›"}],e=[{action:"previous-day",label:"上一天",text:"‹"},{action:"today",label:"返回今天",text:"今"},{action:"next-day",label:"下一天",text:"›"}];return`
    <div class="main-date-navigation">
      <input
        class="calendar-date-control"
        type="date"
        data-calendar-date
        aria-label="选择主日历日期"
        lang="zh-CN"
        min="${Q.最小日期}"
        max="${Q.最大日期}"
        value="${u}"
      >
      <span class="date-weekday">${n}</span>
      <div class="date-shortcuts" role="group" aria-label="月份快捷操作">
        ${t.map(i=>`<button type="button" class="date-shortcut-button" data-action="${i.action}" aria-label="${i.label}" title="${i.label}"${i.action==="month-label"?" disabled":""}>${i.text}</button>`).join("")}
      </div>
      <div class="date-shortcuts" role="group" aria-label="日期快捷操作">
        ${e.map(i=>`<button type="button" class="date-shortcut-button" data-action="${i.action}" aria-label="${i.label}" title="${i.label}">${i.text}</button>`).join("")}
      </div>
    </div>`}function Cn(u,n){return u.当日状态==="规则配置异常"?[u.当日状态]:u.命中.length>0?u.命中.map(t=>t.展示文本):[n]}function bu(u){const n=u.replace(/；项目中文配置保守用时结论$/u,"");return`
    <footer class="hour-detail-source" aria-label="时辰详情依据">
      <strong>时辰详情依据：</strong>
      <span>${T(n)}；风水禁忌另据项目中文风水规则配置。</span>
    </footer>`}const Tu=[{值:"light",标签:"浅色"},{值:"system",标签:"自动"},{值:"dark",标签:"深色"}];function Gu(){return`
    <div class="theme-switch" role="group" aria-label="页面主题">
      ${Tu.map(u=>`<button type="button" data-theme-preference="${u.值}" aria-pressed="${F2.偏好===u.值}"${F2.偏好===u.值?' class="is-active"':""}>${u.标签}</button>`).join("")}
    </div>`}function Zu(){$.querySelectorAll("[data-theme-preference]").forEach(u=>{const n=u.dataset.themePreference===F2.偏好;u.classList.toggle("is-active",n),u.setAttribute("aria-pressed",String(n))})}const Hu=["北京时间","真太阳时"];function ku(){return`
    <div class="time-basis-switch" role="group" aria-label="时间模式">
      ${Hu.map(u=>`<button type="button" data-time-basis="${u}" aria-pressed="${e0===u}"${e0===u?' class="is-active"':""}${g0==="定位中"?" disabled":""}>${u}</button>`).join("")}
    </div>`}function Ou(u){return`
    <div class="rule-result is-${u.状态}">
      <span aria-hidden="true"></span>
      <div>
        <strong>${u.名称}</strong>
        <p>${u.说明}</p>
      </div>
    </div>`}function $u(u){const n=u.时段.some(t=>t.键===F0);return`
    <article class="hour-card${u.当前?" is-current":""}${n?" is-selected":""}" aria-label="${u.名称}${u.当前?"，当前时辰":""}${n?"，已选中查看":""}">
      <header><strong>${u.名称}</strong>${u.当前||n?`<span>${u.当前?"当前":""}${u.当前&&n?" · ":""}${n?"已选":""}</span>`:""}</header>
      <div class="hour-segments">
        ${u.时段.map(t=>`
          <button
            type="button"
            class="hour-segment${t.当前?" is-current":""}${F0===t.键?" is-selected":""}"
            data-hour-key="${t.键}"
            aria-pressed="${F0===t.键}"
            aria-label="${t.名称}，${t.时间范围}，${t.时柱}时，${t.值神}${t.吉凶}，点击查看详情"
          >
            <div class="hour-time">${u.时段.length>1?`<span>${t.名称}</span>`:""}<time>${t.时间范围}</time></div>
            <div class="hour-meta"><strong>${t.时柱}时</strong><span>${t.值神}</span><em class="is-${t.吉凶}">${t.吉凶}</em></div>
          </button>`).join("")}
      </div>
    </article>`}function z0(u,n,t="normal"){const e=u==="日时关系"?"无特殊关系":"无";return`
    <div class="hour-detail-group is-${t}">
      <dt>${u}</dt>
      <dd>${n.length>0?n.map(i=>`<span>${T(i)}</span>`).join(""):`<em>${e}</em>`}</dd>
    </div>`}function Xu(u){const n=[...u.详情.时宜.map(t=>`宜${t}`),...u.详情.时忌.map(t=>`忌${t}`)];return z0("古籍用事",n,u.详情.时忌.length>0?"bad":"normal")}function Lu(u){return`
    <section class="modern-hour-actions" aria-label="现代时辰宜忌">
      <div class="modern-hour-actions-grid">
        ${z0("时宜",u.详情.现代时宜,"good")}
        ${z0("时忌",u.详情.现代时忌,"bad")}
      </div>
      <small>${u.详情.现代来源}</small>
    </section>`}function Dn(){const u=T0.trim()===""?null:Number(T0),n=u!==null&&Number.isFinite(u)&&u>=-180&&u<=180?u:null,t=ru(M0,b0,U0,n);return t.成功?`<div class="bazi-result" aria-live="polite">
        <p class="bazi-pillars">${t.结果.四柱}</p>
        <p class="bazi-line"><span>八字</span><strong>${t.结果.八字}</strong></p>
        <ul>${ou(t.结果).map(e=>`<li>${T(e)}</li>`).join("")}</ul>
      </div>`:`<p class="bazi-message" aria-live="polite">${T(t.提示)}</p>`}function An(u){const n=/^(\d{4})-(\d{2})-(\d{2})$/u.exec(u);return n?`${Number(n[1])}年${Number(n[2])}月${Number(n[3])}日`:u||"请选择日期"}function M2(){const u=$.querySelector('[data-picker-value="date"]'),n=$.querySelector('[data-picker-value="time"]');u&&(u.textContent=An(M0)),n&&(n.textContent=b0||"请选择时间")}function q0(){const u=$.querySelector("[data-bazi-output]");u&&(u.innerHTML=Dn())}function vu(){return`
    <section class="bazi-card" aria-label="生辰八字查询">
      <header><h2>生辰八字查询</h2><p>只查询年月日时四柱</p></header>
      <div class="bazi-form">
        <label class="bazi-picker-field" for="bazi-birth-date">日期
          <span class="mobile-picker-shell" data-picker-shell="date">
            <span class="mobile-picker-value" data-picker-value="date" aria-hidden="true">${An(M0)}</span>
            <input class="mobile-picker-native" id="bazi-birth-date" type="date" data-bazi-date aria-label="生辰日期" min="${Q.最小日期}" max="${Q.最大日期}" value="${M0}">
          </span>
        </label>
        <label class="bazi-picker-field" for="bazi-birth-time">时间
          <span class="mobile-picker-shell" data-picker-shell="time">
            <span class="mobile-picker-value" data-picker-value="time" aria-hidden="true">${b0||"请选择时间"}</span>
            <input class="mobile-picker-native" id="bazi-birth-time" type="time" data-bazi-time aria-label="生辰时间" value="${b0}">
          </span>
        </label>
        <label>计算依据<select data-bazi-basis>
          <option value="北京时间"${U0==="北京时间"?" selected":""}>北京时间</option>
          <option value="真太阳时"${U0==="真太阳时"?" selected":""}>真太阳时</option>
        </select></label>
        ${U0==="真太阳时"?`
          <label>出生地经度<input type="number" data-bazi-longitude min="-180" max="180" step="0.01" inputmode="decimal" placeholder="例如 116.40" value="${T(T0)}"></label>
          <button type="button" class="bazi-locate" data-action="bazi-locate" ${P0?"disabled":""}>${P0?"定位中…":"使用当前定位"}</button>
        `:""}
      </div>
      ${x0?`<p class="bazi-location-note">${T(x0)}</p>`:""}
      <div class="bazi-output" data-bazi-output>${Dn()}</div>
    </section>`}function Ju(u){if(!u)return"";const n=Cn(u.当日风水禁忌,"当日宜");return`
    <section class="hour-detail" aria-label="${u.名称}详细时辰信息">
      <header>
        <div><strong>${u.名称}</strong><span>${u.时柱}时 · ${u.时间范围}</span></div>
        <p>${u.值神} · <em class="is-${u.吉凶}">${u.吉凶}</em></p>
      </header>
      <dl>
        ${z0("日时关系",u.详情.日时关系)}
        ${z0("吉神",u.详情.吉神,"good")}
        ${z0("凶煞",u.详情.凶煞,"bad")}
        ${Xu(u)}
      </dl>
      ${Lu(u)}
      <section class="hour-rule-results" aria-label="风水禁忌速查">
        <div class="hour-rule-heading">
          <h4>风水禁忌速查</h4>
          <p class="${u.当日风水禁忌.当日状态==="当日宜"?"is-safe":"is-warning"}">${n.map(t=>`<span>${T(t)}</span>`).join("")}</p>
        </div>
        <div class="rule-results-grid">${u.风水禁忌.map(Ou).join("")}</div>
      </section>
      ${bu(u.详情.依据)}
    </section>`}async function Uu(){if(P0)return;const u=En();P0=!0,x0="正在获取当前位置…",W();const n=await u;hn(n),P0=!1,n.成功?(T0=n.经度.toFixed(2),x0="定位成功，已填入当前设备经度"):x0=w1(n.原因),W()}function W(){const u=fn(k.年,k.月),n=t5(k.年,k.月,Z0,y2.配置),t=k.所选日期,[e,i]=d0.时间.split(":"),a=C1(t.getFullYear(),t.getMonth()+1,t.getDate(),Number(e),Number(i),0),F=tu(a,e0,R0,G0,xu,y2.配置),{最终:r,历法结果:g,四柱:E,北斗:h,日级风水禁忌:D,真太阳时结果:l,十二时辰:c,时辰配置错误:x}=F,y=ju+x.length+y2.错误.length;e0=F.时间依据;const f=l1(r.最终时间),_=y1(Z0,g.农历),S=g.节气?`${g.节气.名称} · ${Y0(g.节气)}`:"当日无节气",z=g.节气?.名称??"无",G=l?`${J0(l.真太阳时,!0)}（修正 ${Iu(l.总修正分钟)}）`:"未取得定位，暂不计算",H=`${r.日柱计算时间.年}年${r.日柱计算时间.月}月${r.日柱计算时间.日}日`,O=d0.模式==="实时"?"实时更新":"手动查询",w=c.项目.flatMap(L=>L.时段),J=Eu(w,F0),i0=X2(t),X=gu(g.每日宜忌);F0&&J?.键!==F0&&(F0=null),$.innerHTML=`
    <main class="page-shell">
      <section class="calendar-layout" aria-label="日期核心详情与公历月历">
        <aside class="detail-card" aria-label="所选日期核心详情" aria-live="polite">
          <div class="detail-accent" aria-hidden="true"></div>
          <div class="detail-topbar">
            <p class="detail-kicker">农历</p>
            ${Gu()}
          </div>
          <div class="lunar-title-row">
            <h2 class="lunar-title">${g.农历.显示}</h2>
            ${ku()}
          </div>
          ${Mu(i0,A2[t.getDay()])}

          <section class="core-fact pillar-core" aria-label="四柱">
            <span>四柱</span>
            <strong>${E}</strong>
          </section>

          <section class="almanac-core-row" aria-label="日吉凶值日与风水禁忌">
            ${m2("日吉凶",`${g.日吉凶.天神} · ${g.日吉凶.类型} · ${g.日吉凶.吉凶}`,g.日吉凶.吉凶)}
            ${m2("值日",`${g.值星}日`)}
            ${m2("风水禁忌",Cn(D,"无"),D.命中.length>0?"凶":"normal")}
          </section>

          <section class="day-actions" aria-label="日宜与日忌">
            ${o1("日宜",X.日宜,"good")}
            ${o1("日忌",X.日忌,"bad")}
          </section>

          <section class="calendar-info-grid" aria-label="节气神圣纪念与传统节日">
            ${F1("节气",[z])}
            ${pu(_)}
            ${F1("传统节日",f)}
          </section>

          <section class="beidou-panel" aria-label="北斗">
            <h3>北斗</h3>
            <div class="beidou-grid">
              <div class="beidou-item${h.斗降日.命中?" is-hit":""}">
                <span>斗降日</span>
                <strong>${h.斗降日.名称}</strong>
              </div>
              <div class="beidou-item"><span>本命下日</span><strong>${h.本命下日}</strong></div>
              <div class="beidou-item"><span>本命星官</span><strong>${T(h.本命星官)}</strong></div>
            </div>
            ${h.斗降日.命中?`<p class="beidou-source">来源：${T(h.斗降日.来源显示)}</p>`:""}
          </section>

          <section class="hour-overview" aria-label="十二时辰">
            <div class="hour-overview-heading">
              <h3>十二时辰</h3>
              <button type="button" class="current-hour-button" data-action="current-hour">当前时辰</button>
            </div>
            ${Ju(J)}
            <div class="hour-grid">${c.项目.map($u).join("")}</div>
          </section>
        </aside>

        <div class="calendar-right">
          <article class="calendar-card">
          <div class="week-row" role="row">
            ${dn.map((L,c0)=>`<span role="columnheader" title="${A2[c0]}">${L}</span>`).join("")}
          </div>

          <div class="days-grid" data-month-calendar role="grid" aria-label="${k.年}年${k.月+1}月">
            ${u.map(L=>{if(L===null)return'<span class="empty-day" aria-hidden="true"></span>';const c0=new Date(k.年,k.月,L),B0=n[L-1],u2=N0(c0,E0),U2=N0(c0,t),D2=[...B0.传统节日,...B0.神圣纪念,...B0.斗降],cn=D2.length>0?`，${D2.join("、")}`:"",Bn=T(`${yn(c0)}，${A2[c0.getDay()]}，农历${B0.农历.显示}${cn}${u2?"，今天":""}`);return`
                  <button
                    type="button"
                    class="day-button${u2?" is-today":""}${U2?" is-selected":""}"
                    data-day="${L}"
                    role="gridcell"
                    aria-label="${Bn}"
                    ${u2?'aria-current="date"':""}
                    ${U2?'aria-selected="true"':'aria-selected="false"'}
                  >
                    <span class="solar-day">${L}</span>
                    <span class="lunar-day">${B0.农历摘要}</span>
                    <span class="day-events" title="${T(D2.join("、"))}">
                      ${B0.显示事件.map(ln=>`<span class="day-event">${T(ln)}</span>`).join("")}
                      ${B0.其余事件数>0?`<span class="day-event day-event-more">另${B0.其余事件数}项</span>`:""}
                    </span>
                    ${u2?'<small class="today-mark">今</small>':""}
                  </button>`}).join("")}
          </div>
          </article>
          ${vu()}
        </div>

        <section class="calculation-card" aria-label="时间与计算依据">
          <div class="time-controls">
            <div class="time-display-field">
              <span>查询时间 · ${O}</span>
              <output class="current-time-display" data-time-output aria-label="当前查询时间">${d0.时间}</output>
            </div>
            <button type="button" data-action="locate" ${g0==="定位中"?"disabled":""}>
              ${g0==="定位中"?"正在定位…":g0==="成功"?"重新定位":"获取定位"}
            </button>
            <p class="location-status is-${g0}" aria-live="polite">${p0}</p>
          </div>

          <details class="calculation-details">
            <summary>计算详情</summary>
            <dl class="calculation-list">
              <div><dt>北京时间</dt><dd>${J0(r.北京时间)}</dd></div>
              <div><dt>真太阳时</dt><dd>${G}</dd></div>
              <div><dt>计算依据</dt><dd>${e0}（${O}）</dd></div>
              <div><dt>历法日</dt><dd>${H}</dd></div>
              <div><dt>节气</dt><dd>${S}</dd></div>
              <div><dt>定位环境</dt><dd>${Su()}</dd></div>
              <div><dt>版本</dt><dd data-app-version>3e74470</dd></div>
            </dl>
            <p class="calculation-note">当前统一按${e0}计算；23:00进入子时，日柱仍在00:00换日</p>
          </details>

          <p class="config-status${y>0?" has-error":""}">
            规则配置：已读取 ${G0.length+1} 个文件 · ${yu} 条规则${y>0?` · ${y} 条待修正`:""}
          </p>
        </section>
      </section>

    </main>
    <button type="button" class="back-to-top" data-action="back-to-top" aria-label="返回顶部" title="返回顶部">↑</button>
    <dialog class="deity-dialog" data-deity-dialog aria-labelledby="deity-dialog-title"></dialog>
  `}$.addEventListener("input",u=>{const n=u.target.closest("[data-calendar-date]");if(n){$0=n.value,V0=!0;return}});$.addEventListener("change",u=>{const n=u.target;if(n.matches("[data-calendar-date]"))$0=n.value,n2||v2(n.value,"原生选择");else if(n.matches("[data-bazi-date]"))M0=n.value,M2(),q0();else if(n.matches("[data-bazi-time]"))b0=n.value,M2(),q0();else if(n.matches("[data-bazi-basis]"))U0=n.value==="真太阳时"?"真太阳时":"北京时间",x0="",W();else if(n.matches("[data-bazi-longitude]"))T0=n.value,x0="",q0();else return});$.addEventListener("input",u=>{const n=u.target;if(n.matches("[data-bazi-date]"))M0=n.value;else if(n.matches("[data-bazi-time]"))b0=n.value;else if(n.matches("[data-bazi-longitude]"))T0=n.value;else return;M2(),q0()});$.addEventListener("focusout",u=>{const n=u.target;if(n.matches("[data-calendar-date]")){const t=n2;V0=!1,t?v2($0??n.value,"键盘"):H0()}else n.matches("[data-bazi-longitude]")&&q0()});$.addEventListener("focusin",u=>{const n=u.target;n.matches("[data-calendar-date]")&&(V0=!0,$0=n.value)});$.addEventListener("pointerdown",u=>{const n=u.target;if(n.matches("[data-calendar-date]")){n2=!1;return}u.button!==0||!n.closest("[data-month-calendar]")||(t0={指针:u.pointerId,起点X:u.clientX,起点Y:u.clientY,已判定为纵向:!1})});$.addEventListener("pointermove",u=>{if(!t0||u.pointerId!==t0.指针||t0.已判定为纵向)return;const n=Math.abs(u.clientX-t0.起点X),t=Math.abs(u.clientY-t0.起点Y);t>=12&&t>n&&(t0.已判定为纵向=!0)});function Pu(u){if(!t0||u.pointerId!==t0.指针)return;const n=t0;if(t0=null,n.已判定为纵向)return;const t=u.clientX-n.起点X,e=u.clientY-n.起点Y;Math.abs(t)<48||Math.abs(t)<Math.abs(e)*1.35||(on=performance.now()+400,N2(t<0?1:-1))}$.addEventListener("pointerup",Pu);$.addEventListener("pointercancel",u=>{t0?.指针===u.pointerId&&(t0=null)});$.addEventListener("keydown",u=>{const n=u.target;if(n.matches("[data-calendar-date]")){if(u.key==="Enter"){u.preventDefault(),v2($0??n.value,"键盘");return}if(u.key==="Escape"){u.preventDefault(),H0(),W();return}(/^\d$/u.test(u.key)||["Backspace","Delete","ArrowUp","ArrowDown"].includes(u.key))&&(n2=!0)}});$.addEventListener("click",async u=>{const n=u.target,t=n.closest("[data-deity-dialog]");if(t&&n===t){r1(t);return}const e=n.closest("button");if(!e)return;if(e.dataset.action==="close-deity"){const g=e.closest("[data-deity-dialog]");g&&r1(g);return}const i=e.dataset.sacredCommemoration;if(i!==void 0){const g=gn[Number(i)];g&&Yu(g,e);return}if(Fn(e.dataset.themePreference)){F2.设置偏好(e.dataset.themePreference),Zu();return}const a=e.dataset.timeBasis;if(a==="北京时间"||a==="真太阳时"){if(a===e0)return;a==="北京时间"?(e0="北京时间",p0=R0===null?"当前使用北京时间":"定位成功，当前使用北京时间",W()):R0!==null?(e0="真太阳时",g0="成功",p0="定位成功，当前使用真太阳时",W()):await s1();return}if(e.dataset.action==="bazi-locate"){await Uu();return}const F=e.dataset.hourKey;if(F){F0=hu(F,e.classList.contains("is-current")),W();return}if(e.dataset.action==="current-hour"){const g=k0();E0=K0(g),d0=Q0(g),F0=Cu(),W();return}const r=e.dataset.day;if(r){if(performance.now()<on)return;C2(new Date(k.年,k.月,Number(r)));return}switch(e.dataset.action){case"previous-day":i1(-1);break;case"previous-month":N2(-1);break;case"today":Y2();break;case"next-day":i1(1);break;case"next-month":N2(1);break;case"back-to-top":window.scrollTo({top:0,behavior:"smooth"});break;case"locate":await s1();break}});$.addEventListener("close",u=>{!(u.target instanceof HTMLDialogElement)||!u.target.matches("[data-deity-dialog]")||(document.body.classList.remove("deity-dialog-open"),z2?.focus(),z2=null)},!0);W();const J2=su(u=>{const n=k0(new Date(u)),t=Au(k.所选日期,E0,d0,n);E0=t.今天,N0(k.所选日期,t.所选日期)||(k=r2(k,t.所选日期)),d0=t.时间查询,t.需要渲染&&!V0&&!$.querySelector("[data-deity-dialog][open]")&&W()});J2.启动();window.addEventListener("pagehide",()=>J2.停止());window.addEventListener("pageshow",()=>J2.启动());
