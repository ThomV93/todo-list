(()=>{"use strict";const e=e=>{let t=document.createElement("div");return t.className="sidebar-project",e.append(t),{renderSideProjectTitle:e=>{let n=document.createElement("div");n.className="sidebar-project-title-container";let a=document.createElement("img");a.className="sidebar-project-icon",a.src="icons/box.svg";let r=document.createElement("h2");r.className="sidebar-project-title",r.innerHTML=e,n.append(a,r),t.append(n)},renderSideTask:(e,n)=>{let a=document.createElement("div");a.className="sidebar-project-task-container";let r=document.createElement("input");r.className="sidebar-task-input",r.type="checkbox",r.name=e;let i=document.createElement("label");i.className="sidebar-task-label",i.innerHTML=e,!1===n&&(r.checked=!0,i.style.textDecoration="line-through"),a.append(r,i),t.append(a)}}},t=e=>{let t=document.createElement("div");t.className="project";let n=document.createElement("div");return n.className="task-container",t.append(n),e.append(t),{renderProjectTitle:e=>{let a=document.createElement("div");a.className="project-title-container";let r=document.createElement("h3");r.className="project-title",r.innerHTML=e;let i=document.createElement("div");i.id="project-date-container";let o=document.createElement("h3");o.className="project-date",o.innerHTML="Date";let s=document.createElement("img");s.className="project-date-filter",s.src="icons/chevrons-down.svg";let c=document.createElement("img");c.className="project-edit-icon",c.id="proj-edit-icon",c.src="icons/edit-3.svg";let d=document.createElement("img");d.className="project-trash-icon",d.id="proj-trash-icon",d.src="icons/trash-2.svg",i.append(o,s),a.append(r,i,c,d),t.prepend(a);let l=document.createElement("div");l.className="task",l.dataset.creator="y";let u=document.createElement("div");u.id="creator-container";let m=document.createElement("img");m.id="task-creator-img",m.src="icons/plus-2.svg";let h=document.createElement("p");return h.id="task-creator-text",h.innerHTML="Add task",u.append(m,h),l.append(u),n.append(l),{projectTitle:r}},renderTask:(e,t,a,r,i)=>{let o=document.createElement("div");o.className="task";let s=document.createElement("input");s.className="task-checkbox-input",s.type="checkbox";let c=document.createElement("p");c.className="task-time",c.innerHTML=a;let d=document.createElement("p");d.className="task-name",d.innerHTML=e;let l=document.createElement("img");l.className="task-flag",l.src="regular"===r?"icons/flag.svg":"icons/red-flag.svg";let u=document.createElement("p");u.className="task-date",u.innerHTML=t,!1===i&&(s.checked=!0,c.style.textDecoration="line-through",d.style.textDecoration="line-through",u.style.textDecoration="line-through",l.style.display="none");let m=document.createElement("img");m.className="task-edit-icon",m.src="icons/edit-3.svg";let h=document.createElement("img");h.className="task-trash-icon",h.src="icons/trash-2.svg";let g=document.createElement("div");g.id="notes-container",g.className="task-expanded",g.dataset.notes="notes",g.style.position="absolute",g.style.visibility="hidden";let f=document.createElement("h2");f.className="task-expanded-title",f.innerHTML="Notes:";let p=document.createElement("textarea");p.className="task-notes",p.innerHTML="",g.append(f,p);let v=document.createElement("div");v.id="checkbox-container",v.className="task-expanded",v.dataset.checkbox="checkbox",v.style.position="absolute",v.style.visibility="hidden";let y=document.createElement("h2");y.className="task-expanded-title",y.innerHTML="List:";let b=document.createElement("div");b.className="checkbox";let w=document.createElement("input");w.className="check-input",w.type="checkbox";let T=document.createElement("label");T.innerHTML="Diamon Hands",b.append(w,T),v.append(y,b),o.append(s,c,d,l,u,m,h,g,v),n.append(o)}}};function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(e){n(1,arguments);var t=a(e);return!isNaN(t)}var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var s,c={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,c=r.width?String(r.width):e.defaultWidth;a=e.values[c]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function u(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=a.match(o);if(!s)return null;var c,d=s[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(d))return n}(l):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(d))return n}(l),c=e.valueCallback?e.valueCallback(c):c,{value:c=r.valueCallback?r.valueCallback(c):c,rest:a.slice(d.length)}}}const m={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:c,formatRelative:function(e,t,n,a){return d[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(s={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(s.matchPattern);if(!r)return null;var i=r[0],o=n.match(s.parsePattern);if(!o)return null;var c=s.valueCallback?s.valueCallback(o[0]):o[0];return{value:c=a.valueCallback?a.valueCallback(c):c,rest:n.slice(i.length)}}),era:u({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:u({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:u({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:u({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function h(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function g(e,t){n(2,arguments);var r=a(e).getTime(),i=h(t);return new Date(r+i)}function f(e,t){n(2,arguments);var a=h(t);return g(e,-a)}function p(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}const v=function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return p("yy"===t?a%100:a,t.length)},y=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):p(n+1,2)},b=function(e,t){return p(e.getUTCDate(),t.length)},w=function(e,t){return p(e.getUTCHours()%12||12,t.length)},T=function(e,t){return p(e.getUTCHours(),t.length)},E=function(e,t){return p(e.getUTCMinutes(),t.length)},k=function(e,t){return p(e.getUTCSeconds(),t.length)},M=function(e,t){var n=t.length,a=e.getUTCMilliseconds();return p(Math.floor(a*Math.pow(10,n-3)),t.length)};var C=864e5;function x(e){n(1,arguments);var t=1,r=a(e),i=r.getUTCDay(),o=(i<t?7:0)+i-t;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function L(e){n(1,arguments);var t=a(e),r=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=x(i),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var c=x(s);return t.getTime()>=o.getTime()?r+1:t.getTime()>=c.getTime()?r:r-1}function N(e){n(1,arguments);var t=L(e),a=new Date(0);a.setUTCFullYear(t,0,4),a.setUTCHours(0,0,0,0);var r=x(a);return r}var P=6048e5;function D(e,t){n(1,arguments);var r=t||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:h(o),c=null==r.weekStartsOn?s:h(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=a(e),l=d.getUTCDay(),u=(l<c?7:0)+l-c;return d.setUTCDate(d.getUTCDate()-u),d.setUTCHours(0,0,0,0),d}function S(e,t){n(1,arguments);var r=a(e,t),i=r.getUTCFullYear(),o=t||{},s=o.locale,c=s&&s.options&&s.options.firstWeekContainsDate,d=null==c?1:h(c),l=null==o.firstWeekContainsDate?d:h(o.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setUTCFullYear(i+1,0,l),u.setUTCHours(0,0,0,0);var m=D(u,t),g=new Date(0);g.setUTCFullYear(i,0,l),g.setUTCHours(0,0,0,0);var f=D(g,t);return r.getTime()>=m.getTime()?i+1:r.getTime()>=f.getTime()?i:i-1}function j(e,t){n(1,arguments);var a=t||{},r=a.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:h(i),s=null==a.firstWeekContainsDate?o:h(a.firstWeekContainsDate),c=S(e,t),d=new Date(0);d.setUTCFullYear(c,0,s),d.setUTCHours(0,0,0,0);var l=D(d,t);return l}var H=6048e5;function U(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+p(i,2)}function B(e,t){return e%60==0?(e>0?"-":"+")+p(Math.abs(e)/60,2):W(e,t)}function W(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+p(Math.floor(r/60),2)+n+p(r%60,2)}const Y={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return v(e,t)},Y:function(e,t,n,a){var r=S(e,a),i=r>0?r:1-r;return"YY"===t?p(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):p(i,t.length)},R:function(e,t){return p(L(e),t.length)},u:function(e,t){return p(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return p(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return p(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return y(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return p(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,r,i){var o=function(e,t){n(1,arguments);var r=a(e),i=D(r,t).getTime()-j(r,t).getTime();return Math.round(i/H)+1}(e,i);return"wo"===t?r.ordinalNumber(o,{unit:"week"}):p(o,t.length)},I:function(e,t,r){var i=function(e){n(1,arguments);var t=a(e),r=x(t).getTime()-N(t).getTime();return Math.round(r/P)+1}(e);return"Io"===t?r.ordinalNumber(i,{unit:"week"}):p(i,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):b(e,t)},D:function(e,t,r){var i=function(e){n(1,arguments);var t=a(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),o=r-i;return Math.floor(o/C)+1}(e);return"Do"===t?r.ordinalNumber(i,{unit:"dayOfYear"}):p(i,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return p(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return p(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return p(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return w(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):T(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):p(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):p(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):E(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):k(e,t)},S:function(e,t){return M(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return B(r);case"XXXX":case"XX":return W(r);case"XXXXX":case"XXX":default:return W(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return B(r);case"xxxx":case"xx":return W(r);case"xxxxx":case"xxx":default:return W(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+U(r,":");case"OOOO":default:return"GMT"+W(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+U(r,":");case"zzzz":default:return"GMT"+W(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return p(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return p((a._originalDate||e).getTime(),t.length)}};function O(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function q(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const I={p:q,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return O(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",O(r,t)).replace("{{time}}",q(i,t))}};function A(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var F=["D","DD"],X=["YY","YYYY"];function z(e){return-1!==F.indexOf(e)}function Q(e){return-1!==X.indexOf(e)}function G(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,V=/^'([^]*?)'?$/,_=/''/g,K=/[a-zA-Z]/;function $(e,t,i){n(2,arguments);var o=String(t),s=i||{},c=s.locale||m,d=c.options&&c.options.firstWeekContainsDate,l=null==d?1:h(d),u=null==s.firstWeekContainsDate?l:h(s.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=c.options&&c.options.weekStartsOn,p=null==g?0:h(g),v=null==s.weekStartsOn?p:h(s.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var y=a(e);if(!r(y))throw new RangeError("Invalid time value");var b=A(y),w=f(y,b),T={firstWeekContainsDate:u,weekStartsOn:v,locale:c,_originalDate:y},E=o.match(J).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,I[t])(e,c.formatLong,T):e})).join("").match(R).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return Z(n);var r=Y[a];if(r)return!s.useAdditionalWeekYearTokens&&Q(n)&&G(n,t,e),!s.useAdditionalDayOfYearTokens&&z(n)&&G(n,t,e),r(w,n,c.localize,T);if(a.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return E}function Z(e){return e.match(V)[1].replace(_,"'")}const ee=()=>({renderPage:()=>{const e=document.getElementById("content");(e=>{let t=document.createElement("div");t.id="navbar";let n=document.createElement("img");n.id="list-icon",n.src="icons/list.svg";let a=document.createElement("div");a.id="search-container";let r=document.createElement("img");r.id="search-icon",r.src="icons/search.svg";let i=document.createElement("input");i.id="searchbar",i.type="text",i.placeholder="Search..",a.append(r,i);let o=document.createElement("img");o.id="sun-icon",o.src="icons/sun.svg";let s=document.createElement("img");s.id="more-vertical-icon",s.src="icons/more-vertical.svg",t.append(n,a,o,s),e.append(t)})(e),(e=>{let t=document.createElement("div");t.id="sidebar";let n=document.createElement("div");n.id="user-data-section";let a=document.createElement("h1");a.className="sidebar-section-title",a.innerHTML="To-Do's";let r=document.createElement("img");r.id="sidebar-home-icon",r.src="icons/home.svg";let i=document.createElement("h2");i.id="sidebar-title-home",i.className="user-titles",i.innerHTML="Home";let o=document.createElement("p");o.id="sidebar-value-home",o.innerHTML="0";let s=document.createElement("img");s.id="sidebar-today-icon",s.src="icons/calendar.svg";let c=document.createElement("h2");c.id="sidebar-title-today",c.className="user-titles",c.innerHTML="Today";let d=document.createElement("p");d.id="sidebar-value-today",d.innerHTML="0";let l=document.createElement("img");l.id="sidebar-trash-icon",l.src="icons/trash.svg";let u=document.createElement("h2");u.id="sidebar-title-trash",u.className="user-titles",u.innerHTML="Trash";let m=document.createElement("p");m.id="sidebar-value-trash",m.innerHTML="0",n.append(a,r,i,o,s,c,d,l,u,m);let h=document.createElement("img");h.id="sidebar-section-chevron-icon",h.src="icons/chevron-right.svg";let g=document.createElement("h1");g.id="sidebar-projects-section-title",g.className="sidebar-section-title",g.innerHTML="Projects";let f=document.createElement("img");f.id="sidebar-section-plus-icon",f.src="icons/plus-2.svg";let p=document.createElement("div");p.id="sidebar-projects-section";let v=document.createElement("p");v.innerHTML="Made by Thomas Veit";let y=document.createElement("img");y.id="github-logo",y.src="icons/github.svg",t.append(n,h,g,f,p,v,y),e.append(t)})(e),(e=>{let t=document.createElement("div");t.id="project-display-container",e.append(t)})(e)},sideProjects:(t,n)=>{n.innerHTML="";for(let a=0;a<t.length;a++){let r=e(n);r.renderSideProjectTitle(t[a].name);for(let e=0;e<t[a].taskList.length;e++){let n=t[a].taskList[e];r.renderSideTask(n.name,n.isActive)}}},selectedProject:(e,n)=>{n.innerHTML="";let a=t(n);a.renderProjectTitle(e.name);for(let t=0;t<e.taskList.length;t++){let n=e.taskList[t];a.renderTask(n.name,$(n.date,"dd/MM/yyyy"),n.time,n.priority,n.isActive)}},renderAll:(n,a,r)=>{for(let i=0;i<n.length;i++){let o=e(a),s=t(r);o.renderSideProjectTitle(n[i].name),s.renderProjectTitle(n[i].name);for(let e=0;e<n[i].taskList.length;e++){let t=n[i].taskList[e];o.renderSideTask(t.name),s.renderTask(t.name,t.date,t.time,t.priority,t.isActive)}}},collapseSidebar:(e,t,n)=>{!1===n?(e.style.transform="translateX(-450px)",t.style.gridColumn="1 / -1"):(e.style.transform="translateX(0)",t.style.gridColumn="4 / -1")},changeTheme:(e,t)=>{!1===t?(e.src="icons/moon.svg",document.documentElement.dataset.theme="dark"):(e.src="icons/sun.svg",document.documentElement.dataset.theme="light")},collapseSideProjects:(e,t,n)=>{!1===n?(e.style.transform="rotate(0deg)",t.style.visibility="hidden",t.style.opacity="0",t.style.transition="visibility 0s linear 400ms, opacity 400ms"):(e.style.transform="rotate(90deg)",t.style.visibility="visible",t.style.opacity="1",t.style.transition="visibility 0s linear 0s, opacity 400ms")},renderNotes:(e,t,n)=>{t[n].innerHTML=e.taskList[n].notes},expandTask:(e,t,n)=>{"absolute"===e[n].style.position?(e[n].style.position="static",e[n].style.visibility="visible",t[n].style.position="static",t[n].style.visibility="visible"):(e[n].style.visibility="hidden",e[n].style.position="absolute",t[n].style.visibility="hidden",t[n].style.position="absolute")}}),te=e=>{let t=[],n=e,a=!1;return{name:e,taskList:t,dateSort:a,task:(e,t,a,r)=>{let i=a.split("/").reverse().join("-");return{name:e,time:t,date:a=new Date(i),priority:r,notes:"",subList:[],isActive:!0,parentName:n}},addTask:e=>t.push(e),toggleTaskStatus:e=>!0===e.isActive?e.isActive=!1:e.isActive=!0,sortDates:()=>{!1===a?t.sort(((e,t)=>e.date-t.date)):t.sort(((e,t)=>t.date-e.date)),a=!a},findTaskIdx:e=>t.findIndex((t=>t.name===e)),findTask:e=>t.find((t=>t.name===e)),deleteTask:e=>t.splice(e,1)}},ne=()=>{const e=document.getElementById("form-title"),t=document.getElementById("form-name");return{creator:e=>{let n=t.value,a=te(n);e.push(a)},displayStoredValues:n=>{e.innerHTML="Edit Project",t.value=n.name},editor:e=>{e.name=t.value},close:()=>{document.body.removeChild(document.body.firstChild)}}},ae=()=>{const e=document.getElementById("form-name"),t=document.getElementById("form-time"),n=document.getElementById("form-date"),a=document.getElementById("form-flag"),r=document.getElementById("form-notes"),i=(e,t,n)=>{$(new Date,"yyyy/MM/dd")===$(n,"yyyy/MM/dd")&&e.addTask(t)};return{displayCorrectFlag:(e,t)=>{e.src=!1===t?"icons/red-flag.svg":"icons/flag.svg"},close:()=>{document.body.removeChild(document.body.firstChild)},creator:(o,s)=>{let c=e.value,d=t.value,l=n.value,u=-1!=a.src.indexOf("red-flag")?"high":"regular",m=r.value,h=o.task(c,d,l,u);h.notes=m,o.addTask(h),i(s,h,h.date)},displayStoredValues:(i,o)=>{document.getElementById("form-title").innerHTML="Edit Task","high"===i.taskList[o].priority?a.src="icons/red-flag.svg":a.src="icons/flag.svg",e.value=i.taskList[o].name,t.value=i.taskList[o].time,n.value=$(i.taskList[o].date,"yyyy-MM-dd"),r.value=i.taskList[o].notes},editor:(o,s,c)=>{let d=o.taskList[s];d.name=e.value,d.time=t.value,d.date=new Date(n.value),d.priority=-1!=a.src.indexOf("red-flag")?"high":"regular",d.notes=r.value,i(c,d,d.date)}}},re=e=>{let t=document.createElement("div");t.id="form-container";let n=document.createElement("div");n.id="task-form-container";let a=document.createElement("div");a.id="form-title-container";let r=document.createElement("h2");r.id="form-title",r.innerHTML="New Task",a.append(r);let i=document.createElement("img");i.id="form-flag",i.src="icons/flag.svg";let o=document.createElement("div");o.id="form-name-container",o.className="form-input-container";let s=document.createElement("label");s.id="form-label-name",s.innerHTML="Title:";let c=document.createElement("input");c.id="form-name",c.type="text",o.append(s,c);let d=document.createElement("div");d.id="form-time-container",d.className="form-input-container";let l=document.createElement("label");l.id="form-label-time",l.innerHTML="Time:";let u=document.createElement("input");u.id="form-time",u.type="time",d.append(l,u);let m=document.createElement("div");m.id="form-date-container",m.className="form-input-container";let h=document.createElement("label");h.id="form-label-date",h.innerHTML="Date:";let g=document.createElement("input");g.id="form-date",g.type="date",m.append(h,g);let f=document.createElement("div");f.id="form-notes-container",f.className="form-input-container";let p=document.createElement("label");p.id="form-label-notes",p.innerHTML="Notes:";let v=document.createElement("textarea");v.id="form-notes",f.append(p,v);let y=document.createElement("button");y.id="form-cancel-btn",y.type="button",y.innerHTML="Cancel";let b=document.createElement("button");b.id="form-save-btn",b.type="button",b.innerHTML="Save",n.append(a,i,o,d,m,f,y,b),t.append(n),e.prepend(t)},ie=e=>{let t=document.createElement("div");t.id="form-container";let n=document.createElement("div");n.id="project-form-container";let a=document.createElement("div");a.id="project-form-title-container";let r=document.createElement("h2");r.id="form-title",r.innerHTML="New Project",a.append(r);let i=document.createElement("div");i.id="project-form-name-container",i.className="form-input-container";let o=document.createElement("label");o.id="form-label-name",o.innerHTML="Title:";let s=document.createElement("input");s.id="form-name",s.type="text",i.append(o,s);let c=document.createElement("button");c.id="project-form-cancel-btn",c.type="button",c.innerHTML="Cancel";let d=document.createElement("button");d.id="project-form-save-btn",d.type="button",d.innerHTML="Save",n.append(a,i,c,d),t.append(n),e.prepend(t)};(()=>{ee().renderPage();let e=[],t=te("Today");const n=document.getElementById("sun-icon"),a=document.getElementById("list-icon"),r=document.getElementById("sidebar"),i=document.getElementById("sidebar-title-today"),o=document.getElementById("sidebar-projects-section-title"),s=document.getElementById("sidebar-section-chevron-icon"),c=document.getElementById("sidebar-section-plus-icon"),d=document.getElementById("sidebar-projects-section"),l=document.getElementsByClassName("sidebar-project-title-container"),u=document.getElementById("project-display-container");let m=te("Work"),h=m.task("Check Emails","09:00","27/03/2021","high"),g=m.task("Send Emails","10:30","21/01/2021","regular"),f=m.task("Create reports","14:00","27/03/2021","high"),p=m.task("Open Tickets","16:00","13/04/2021","regular");g.notes="Hello Notes",m.addTask(h),m.addTask(g),m.addTask(f),m.addTask(p),e.push(m);let v=te("Investing"),y=v.task("Tea Time","15:00","29/08/2021"),b=v.task("Dinner","18:00","27/03/2021"),w=v.task("Test","18:00","27/03/2021");v.addTask(y),v.addTask(b),v.addTask(w),e.push(v);let T=te("Coding"),E=T.task("Study","19:00","29/08/2021","regular"),k=T.task("Study MORE","20:30","27/03/2021","high"),M=T.task("Stretch back","22:00","29/08/2021","regular");T.addTask(E),T.addTask(k),T.addTask(M),e.push(T);const C=t=>{for(let n=0;n<e.length;n++)if(void 0!==e[n].findTask(t))return e[n].findTask(t)},x=()=>{for(let t=0;t<l.length;t++)l[t].addEventListener("click",(()=>{ee().selectedProject(e[t],u),N(e[t]),P(e[t]),W(e[t]),S(e[t]),j(e[t]),H(e[t]),D(e[t])}))},L=()=>{const t=document.getElementsByClassName("sidebar-task-input"),n=Array.from(t);for(let t=0;t<n.length;t++)n[t].addEventListener("click",(()=>{let a=C(n[t].name),r=(i=a.parentName,e.findIndex((e=>e.name===i)));var i;e[r].toggleTaskStatus(a),A(e,e[r],u,d)}))},N=t=>{document.getElementById("project-date-container").addEventListener("click",(()=>{t.sortDates(),A(e,t,u,d)}))},P=e=>{document.getElementById("proj-edit-icon").addEventListener("click",(()=>{ie(document.body),ne().displayStoredValues(e),U(),B(e)}))},D=t=>{const n=document.getElementsByClassName("task-checkbox-input");for(let a=0;a<n.length;a++)n[a].addEventListener("click",(()=>{t.toggleTaskStatus(t.taskList[a]),A(e,t,u,d)}))},S=e=>{const t=document.getElementsByClassName("task-edit-icon");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(()=>{re(document.body),ae().displayStoredValues(e,n),Y(),O(),I(e,n)}))},j=t=>{const n=document.getElementsByClassName("task-trash-icon");for(let a=0;a<n.length;a++)n[a].addEventListener("click",(()=>{t.deleteTask(a),A(e,t,u,d)}))},H=e=>{const t=document.getElementsByClassName("task-name"),n=document.getElementsByClassName("task-notes"),a=document.querySelectorAll("[data-notes]"),r=document.querySelectorAll("[data-checkbox]");for(let i=0;i<t.length;i++)t[i].addEventListener("click",(()=>{ee().expandTask(a,r,i),ee().renderNotes(e,n,i)}))},U=()=>{document.getElementById("project-form-cancel-btn").addEventListener("click",(()=>{ne().close()}))},B=t=>{document.getElementById("project-form-save-btn").addEventListener("click",(()=>{ne().editor(t),A(e,t,u,d),ne().close()}))},W=e=>{const t=document.querySelectorAll("[data-creator]");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(()=>{re(document.body),Y(),q(e),O()}))},Y=()=>{const e=document.getElementById("form-flag");let t=-1!=e.src.indexOf("red-flag");e.addEventListener("click",(()=>{ae().displayCorrectFlag(e,t),t=!t}))},O=()=>{document.getElementById("form-cancel-btn").addEventListener("click",(()=>{ae().close()}))},q=n=>{document.getElementById("form-save-btn").addEventListener("click",(()=>{ae().creator(n,t),A(e,n,u,d),ae().close()}))},I=(n,a)=>{document.getElementById("form-save-btn").addEventListener("click",(()=>{ae().editor(n,a,t),A(e,n,u,d),ae().close()}))},A=(e,t,n,a)=>{ee().selectedProject(t,n),ee().sideProjects(e,a),x(),N(t),P(t),W(t),S(t),j(t),H(t),D(t),L()};ee().sideProjects(e,d),(()=>{let e=!1;a.addEventListener("click",(()=>{ee().collapseSidebar(r,u,e),e=!e}))})(),(()=>{let e=!1;n.addEventListener("click",(()=>{ee().changeTheme(n,e),e=!e}))})(),i.addEventListener("click",(()=>{var e,n;e=t,n=u,ee().selectedProject(e,n),H(e),D(e)})),(e=>{let n=$(new Date,"yyyy/MM/dd");for(let a=0;a<e.length;a++){let r=e[a];for(let e=0;e<r.taskList.length;e++){let a=r.taskList[e];if($(a.date,"yyyy/MM/dd")===n){let e=a;t.addTask(e)}}}})(e),(()=>{let e=!1;o.addEventListener("click",(()=>{ee().collapseSideProjects(s,d,e),e=!e}))})(),x(),c.addEventListener("click",(()=>{ie(document.body),U(),document.getElementById("project-form-save-btn").addEventListener("click",(()=>{ne().creator(e),A(e,e[e.length-1],u,d),ne().close()}))})),L()})()})();