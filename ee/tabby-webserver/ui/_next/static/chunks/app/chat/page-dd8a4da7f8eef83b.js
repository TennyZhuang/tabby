(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1929],{70699:function(e,t,r){let n=r(50730),l={};for(let e of Object.keys(n))l[n[e]]=e;let a={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(let t of(e.exports=a,Object.keys(a))){if(!("channels"in a[t]))throw Error("missing channels property: "+t);if(!("labels"in a[t]))throw Error("missing channel labels property: "+t);if(a[t].labels.length!==a[t].channels)throw Error("channel and label counts mismatch: "+t);let{channels:e,labels:r}=a[t];delete a[t].channels,delete a[t].labels,Object.defineProperty(a[t],"channels",{value:e}),Object.defineProperty(a[t],"labels",{value:r})}a.rgb.hsl=function(e){let t;let r=e[0]/255,n=e[1]/255,l=e[2]/255,a=Math.min(r,n,l),o=Math.max(r,n,l),s=o-a;o===a?t=0:r===o?t=(n-l)/s:n===o?t=2+(l-r)/s:l===o&&(t=4+(r-n)/s),(t=Math.min(60*t,360))<0&&(t+=360);let i=(a+o)/2;return[t,100*(o===a?0:i<=.5?s/(o+a):s/(2-o-a)),100*i]},a.rgb.hsv=function(e){let t,r,n,l,a;let o=e[0]/255,s=e[1]/255,i=e[2]/255,h=Math.max(o,s,i),u=h-Math.min(o,s,i),c=function(e){return(h-e)/6/u+.5};return 0===u?(l=0,a=0):(a=u/h,t=c(o),r=c(s),n=c(i),o===h?l=n-r:s===h?l=1/3+t-n:i===h&&(l=2/3+r-t),l<0?l+=1:l>1&&(l-=1)),[360*l,100*a,100*h]},a.rgb.hwb=function(e){let t=e[0],r=e[1],n=e[2],l=a.rgb.hsl(e)[0],o=1/255*Math.min(t,Math.min(r,n));return[l,100*o,100*(n=1-1/255*Math.max(t,Math.max(r,n)))]},a.rgb.cmyk=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255,l=Math.min(1-t,1-r,1-n);return[100*((1-t-l)/(1-l)||0),100*((1-r-l)/(1-l)||0),100*((1-n-l)/(1-l)||0),100*l]},a.rgb.keyword=function(e){let t;let r=l[e];if(r)return r;let a=1/0;for(let r of Object.keys(n)){let l=n[r],o=(e[0]-l[0])**2+(e[1]-l[1])**2+(e[2]-l[2])**2;o<a&&(a=o,t=r)}return t},a.keyword.rgb=function(e){return n[e]},a.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;let l=.4124*t+.3576*r+.1805*n,a=.2126*t+.7152*r+.0722*n,o=.0193*t+.1192*r+.9505*n;return[100*l,100*a,100*o]},a.rgb.lab=function(e){let t=a.rgb.xyz(e),r=t[0],n=t[1],l=t[2];r/=95.047,n/=100,l/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,l=l>.008856?l**(1/3):7.787*l+16/116;let o=116*n-16,s=500*(r-n),i=200*(n-l);return[o,s,i]},a.hsl.rgb=function(e){let t,r,n;let l=e[0]/360,a=e[1]/100,o=e[2]/100;if(0===a)return[n=255*o,n,n];t=o<.5?o*(1+a):o+a-o*a;let s=2*o-t,i=[0,0,0];for(let e=0;e<3;e++)(r=l+-(1/3*(e-1)))<0&&r++,r>1&&r--,n=6*r<1?s+(t-s)*6*r:2*r<1?t:3*r<2?s+(t-s)*(2/3-r)*6:s,i[e]=255*n;return i},a.hsl.hsv=function(e){let t=e[0],r=e[1]/100,n=e[2]/100,l=r,a=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,l*=a<=1?a:2-a;let o=(n+r)/2,s=0===n?2*l/(a+l):2*r/(n+r);return[t,100*s,100*o]},a.hsv.rgb=function(e){let t=e[0]/60,r=e[1]/100,n=e[2]/100,l=t-Math.floor(t),a=255*n*(1-r),o=255*n*(1-r*l),s=255*n*(1-r*(1-l));switch(n*=255,Math.floor(t)%6){case 0:return[n,s,a];case 1:return[o,n,a];case 2:return[a,n,s];case 3:return[a,o,n];case 4:return[s,a,n];case 5:return[n,a,o]}},a.hsv.hsl=function(e){let t,r;let n=e[0],l=e[1]/100,a=e[2]/100,o=Math.max(a,.01);r=(2-l)*a;let s=(2-l)*o;return[n,100*(l*o/(s<=1?s:2-s)||0),100*(r/=2)]},a.hwb.rgb=function(e){let t,r,n,l;let a=e[0]/360,o=e[1]/100,s=e[2]/100,i=o+s;i>1&&(o/=i,s/=i);let h=Math.floor(6*a),u=1-s;t=6*a-h,(1&h)!=0&&(t=1-t);let c=o+t*(u-o);switch(h){default:case 6:case 0:r=u,n=c,l=o;break;case 1:r=c,n=u,l=o;break;case 2:r=o,n=u,l=c;break;case 3:r=o,n=c,l=u;break;case 4:r=c,n=o,l=u;break;case 5:r=u,n=o,l=c}return[255*r,255*n,255*l]},a.cmyk.rgb=function(e){let t=e[0]/100,r=e[1]/100,n=e[2]/100,l=e[3]/100;return[255*(1-Math.min(1,t*(1-l)+l)),255*(1-Math.min(1,r*(1-l)+l)),255*(1-Math.min(1,n*(1-l)+l))]},a.xyz.rgb=function(e){let t,r,n;let l=e[0]/100,a=e[1]/100,o=e[2]/100;return t=(t=3.2406*l+-1.5372*a+-.4986*o)>.0031308?1.055*t**(1/2.4)-.055:12.92*t,r=(r=-.9689*l+1.8758*a+.0415*o)>.0031308?1.055*r**(1/2.4)-.055:12.92*r,n=(n=.0557*l+-.204*a+1.057*o)>.0031308?1.055*n**(1/2.4)-.055:12.92*n,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]},a.xyz.lab=function(e){let t=e[0],r=e[1],n=e[2];t/=95.047,r/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;let l=116*r-16,a=500*(t-r),o=200*(r-n);return[l,a,o]},a.lab.xyz=function(e){let t,r,n;let l=e[0],a=e[1],o=e[2];t=a/500+(r=(l+16)/116),n=r-o/200;let s=r**3,i=t**3,h=n**3;return r=(s>.008856?s:(r-16/116)/7.787)*100,[t=(i>.008856?i:(t-16/116)/7.787)*95.047,r,n=(h>.008856?h:(n-16/116)/7.787)*108.883]},a.lab.lch=function(e){let t;let r=e[0],n=e[1],l=e[2];return(t=360*Math.atan2(l,n)/2/Math.PI)<0&&(t+=360),[r,Math.sqrt(n*n+l*l),t]},a.lch.lab=function(e){let t=e[0],r=e[1],n=e[2],l=n/360*2*Math.PI;return[t,r*Math.cos(l),r*Math.sin(l)]},a.rgb.ansi16=function(e,t=null){let[r,n,l]=e,o=null===t?a.rgb.hsv(e)[2]:t;if(0===(o=Math.round(o/50)))return 30;let s=30+(Math.round(l/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===o&&(s+=60),s},a.hsv.ansi16=function(e){return a.rgb.ansi16(a.hsv.rgb(e),e[2])},a.rgb.ansi256=function(e){let t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},a.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];let r=(~~(e>50)+1)*.5,n=(1&t)*r*255,l=(t>>1&1)*r*255,a=(t>>2&1)*r*255;return[n,l,a]},a.ansi256.rgb=function(e){let t;if(e>=232){let t=(e-232)*10+8;return[t,t,t]}e-=16;let r=Math.floor(e/36)/5*255,n=Math.floor((t=e%36)/6)/5*255;return[r,n,t%6/5*255]},a.rgb.hex=function(e){let t=((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2])),r=t.toString(16).toUpperCase();return"000000".substring(r.length)+r},a.hex.rgb=function(e){let t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=r.split("").map(e=>e+e).join(""));let n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},a.rgb.hcg=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255,l=Math.max(Math.max(t,r),n),a=Math.min(Math.min(t,r),n),o=l-a;return[360*((o<=0?0:l===t?(r-n)/o%6:l===r?2+(n-t)/o:4+(t-r)/o)/6%1),100*o,100*(o<1?a/(1-o):0)]},a.hsl.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=r<.5?2*t*r:2*t*(1-r),l=0;return n<1&&(l=(r-.5*n)/(1-n)),[e[0],100*n,100*l]},a.hsv.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=t*r,l=0;return n<1&&(l=(r-n)/(1-n)),[e[0],100*n,100*l]},a.hcg.rgb=function(e){let t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];let l=[0,0,0],a=t%1*6,o=a%1,s=1-o,i=0;switch(Math.floor(a)){case 0:l[0]=1,l[1]=o,l[2]=0;break;case 1:l[0]=s,l[1]=1,l[2]=0;break;case 2:l[0]=0,l[1]=1,l[2]=o;break;case 3:l[0]=0,l[1]=s,l[2]=1;break;case 4:l[0]=o,l[1]=0,l[2]=1;break;default:l[0]=1,l[1]=0,l[2]=s}return i=(1-r)*n,[(r*l[0]+i)*255,(r*l[1]+i)*255,(r*l[2]+i)*255]},a.hcg.hsv=function(e){let t=e[1]/100,r=e[2]/100,n=t+r*(1-t),l=0;return n>0&&(l=t/n),[e[0],100*l,100*n]},a.hcg.hsl=function(e){let t=e[1]/100,r=e[2]/100,n=r*(1-t)+.5*t,l=0;return n>0&&n<.5?l=t/(2*n):n>=.5&&n<1&&(l=t/(2*(1-n))),[e[0],100*l,100*n]},a.hcg.hwb=function(e){let t=e[1]/100,r=e[2]/100,n=t+r*(1-t);return[e[0],(n-t)*100,(1-n)*100]},a.hwb.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=1-r,l=n-t,a=0;return l<1&&(a=(n-l)/(1-l)),[e[0],100*l,100*a]},a.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},a.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},a.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},a.gray.hsl=function(e){return[0,0,e[0]]},a.gray.hsv=a.gray.hsl,a.gray.hwb=function(e){return[0,100,e[0]]},a.gray.cmyk=function(e){return[0,0,0,e[0]]},a.gray.lab=function(e){return[e[0],0,0]},a.gray.hex=function(e){let t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},a.rgb.gray=function(e){let t=(e[0]+e[1]+e[2])/3;return[t/255*100]}},69123:function(e,t,r){let n=r(70699),l=r(30719),a={},o=Object.keys(n);o.forEach(e=>{a[e]={},Object.defineProperty(a[e],"channels",{value:n[e].channels}),Object.defineProperty(a[e],"labels",{value:n[e].labels});let t=l(e),r=Object.keys(t);r.forEach(r=>{let n=t[r];a[e][r]=function(e){let t=function(...t){let r=t[0];if(null==r)return r;r.length>1&&(t=r);let n=e(t);if("object"==typeof n)for(let e=n.length,t=0;t<e;t++)n[t]=Math.round(n[t]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(n),a[e][r].raw=function(e){let t=function(...t){let r=t[0];return null==r?r:(r.length>1&&(t=r),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)})}),e.exports=a},30719:function(e,t,r){let n=r(70699);e.exports=function(e){let t=function(e){let t=function(){let e={},t=Object.keys(n);for(let r=t.length,n=0;n<r;n++)e[t[n]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;){let e=r.pop(),l=Object.keys(n[e]);for(let n=l.length,a=0;a<n;a++){let n=l[a],o=t[n];-1===o.distance&&(o.distance=t[e].distance+1,o.parent=e,r.unshift(n))}}return t}(e),r={},l=Object.keys(t);for(let e=l.length,a=0;a<e;a++){let e=l[a],o=t[e];null!==o.parent&&(r[e]=function(e,t){let r=[t[e].parent,e],l=n[t[e].parent][e],a=t[e].parent;for(;t[a].parent;)r.unshift(t[a].parent),l=function(e,t){return function(r){return t(e(r))}}(n[t[a].parent][a],l),a=t[a].parent;return l.conversion=r,l}(e,t))}return r}},50730:function(e){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},80721:function(e,t,r){var n=r(50730),l=r(94089),a=Object.hasOwnProperty,o=Object.create(null);for(var s in n)a.call(n,s)&&(o[n[s]]=s);var i=e.exports={to:{},get:{}};function h(e,t,r){return Math.min(Math.max(t,e),r)}function u(e){var t=Math.round(e).toString(16).toUpperCase();return t.length<2?"0"+t:t}i.get=function(e){var t,r;switch(e.substring(0,3).toLowerCase()){case"hsl":t=i.get.hsl(e),r="hsl";break;case"hwb":t=i.get.hwb(e),r="hwb";break;default:t=i.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},i.get.rgb=function(e){if(!e)return null;var t,r,l,o=[0,0,0,1];if(t=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(r=0,l=t[2],t=t[1];r<3;r++){var s=2*r;o[r]=parseInt(t.slice(s,s+2),16)}l&&(o[3]=parseInt(l,16)/255)}else if(t=e.match(/^#([a-f0-9]{3,4})$/i)){for(r=0,l=(t=t[1])[3];r<3;r++)o[r]=parseInt(t[r]+t[r],16);l&&(o[3]=parseInt(l+l,16)/255)}else if(t=e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(r=0;r<3;r++)o[r]=parseInt(t[r+1],0);t[4]&&(t[5]?o[3]=.01*parseFloat(t[4]):o[3]=parseFloat(t[4]))}else if(t=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(r=0;r<3;r++)o[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(t[5]?o[3]=.01*parseFloat(t[4]):o[3]=parseFloat(t[4]))}else if(!(t=e.match(/^(\w+)$/)))return null;else return"transparent"===t[1]?[0,0,0,0]:a.call(n,t[1])?((o=n[t[1]])[3]=1,o):null;for(r=0;r<3;r++)o[r]=h(o[r],0,255);return o[3]=h(o[3],0,1),o},i.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,h(parseFloat(t[2]),0,100),h(parseFloat(t[3]),0,100),h(isNaN(r)?1:r,0,1)]}return null},i.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,h(parseFloat(t[2]),0,100),h(parseFloat(t[3]),0,100),h(isNaN(r)?1:r,0,1)]}return null},i.to.hex=function(){var e=l(arguments);return"#"+u(e[0])+u(e[1])+u(e[2])+(e[3]<1?u(Math.round(255*e[3])):"")},i.to.rgb=function(){var e=l(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},i.to.rgb.percent=function(){var e=l(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},i.to.hsl=function(){var e=l(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},i.to.hwb=function(){var e=l(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},i.to.keyword=function(e){return o[e.slice(0,3)]}},47190:function(e,t,r){let n=r(80721),l=r(69123),a=["keyword","gray","hex"],o={};for(let e of Object.keys(l))o[[...l[e].labels].sort().join("")]=e;let s={};function i(e,t){let r,h;if(!(this instanceof i))return new i(e,t);if(t&&t in a&&(t=null),t&&!(t in l))throw Error("Unknown model: "+t);if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof i)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if("string"==typeof e){let t=n.get(e);if(null===t)throw Error("Unable to parse color from string: "+e);this.model=t.model,h=l[this.model].channels,this.color=t.value.slice(0,h),this.valpha="number"==typeof t.value[h]?t.value[h]:1}else if(e.length>0){this.model=t||"rgb",h=l[this.model].channels;let r=Array.prototype.slice.call(e,0,h);this.color=c(r,h),this.valpha="number"==typeof e[h]?e[h]:1}else if("number"==typeof e)this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;let t=Object.keys(e);"alpha"in e&&(t.splice(t.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);let n=t.sort().join("");if(!(n in o))throw Error("Unable to parse color from object: "+JSON.stringify(e));this.model=o[n];let{labels:a}=l[this.model],s=[];for(r=0;r<a.length;r++)s.push(e[a[r]]);this.color=c(s)}if(s[this.model])for(r=0,h=l[this.model].channels;r<h;r++){let e=s[this.model][r];e&&(this.color[r]=e(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}for(let e of(i.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in n.to?this:this.rgb();t=t.round("number"==typeof e?e:1);let r=1===t.valpha?t.color:[...t.color,this.valpha];return n.to[t.model](r)},percentString(e){let t=this.rgb().round("number"==typeof e?e:1),r=1===t.valpha?t.color:[...t.color,this.valpha];return n.to.rgb.percent(r)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){let e={},{channels:t}=l[this.model],{labels:r}=l[this.model];for(let n=0;n<t;n++)e[r[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray(){let e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject(){let e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round(e){var t;return e=Math.max(e||0,0),new i([...this.color.map((t=e,function(e){return Number(e.toFixed(t))})),this.valpha],this.model)},alpha(e){return void 0!==e?new i([...this.color,Math.max(0,Math.min(1,e))],this.model):this.valpha},red:h("rgb",0,u(255)),green:h("rgb",1,u(255)),blue:h("rgb",2,u(255)),hue:h(["hsl","hsv","hsl","hwb","hcg"],0,e=>(e%360+360)%360),saturationl:h("hsl",1,u(100)),lightness:h("hsl",2,u(100)),saturationv:h("hsv",1,u(100)),value:h("hsv",2,u(100)),chroma:h("hcg",1,u(100)),gray:h("hcg",2,u(100)),white:h("hwb",1,u(100)),wblack:h("hwb",2,u(100)),cyan:h("cmyk",0,u(100)),magenta:h("cmyk",1,u(100)),yellow:h("cmyk",2,u(100)),black:h("cmyk",3,u(100)),x:h("xyz",0,u(95.047)),y:h("xyz",1,u(100)),z:h("xyz",2,u(108.833)),l:h("lab",0,u(100)),a:h("lab",1),b:h("lab",2),keyword(e){return void 0!==e?new i(e):l[this.model].keyword(this.color)},hex(e){return void 0!==e?new i(e):n.to.hex(this.rgb().round().color)},hexa(e){if(void 0!==e)return new i(e);let t=this.rgb().round().color,r=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===r.length&&(r="0"+r),n.to.hex(t)+r},rgbNumber(){let e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity(){let e=this.rgb().color,t=[];for(let[r,n]of e.entries()){let e=n/255;t[r]=e<=.04045?e/12.92:((e+.055)/1.055)**2.4}return .2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){let t=this.luminosity(),r=e.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level(e){let t=this.contrast(e);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){let e=this.rgb().color,t=(2126*e[0]+7152*e[1]+722*e[2])/1e4;return t<128},isLight(){return!this.isDark()},negate(){let e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){let t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){let t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){let t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){let t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){let t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){let t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){let e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return i.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){let t=this.hsl(),r=t.color[0];return r=(r=(r+e)%360)<0?360+r:r,t.color[0]=r,t},mix(e,t){if(!e||!e.rgb)throw Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);let r=e.rgb(),n=this.rgb(),l=void 0===t?.5:t,a=2*l-1,o=r.alpha()-n.alpha(),s=((a*o==-1?a:(a+o)/(1+a*o))+1)/2,h=1-s;return i.rgb(s*r.red()+h*n.red(),s*r.green()+h*n.green(),s*r.blue()+h*n.blue(),r.alpha()*l+n.alpha()*(1-l))}},Object.keys(l))){if(a.includes(e))continue;let{channels:t}=l[e];i.prototype[e]=function(...t){var r;return this.model===e?new i(this):t.length>0?new i(t,e):new i([...Array.isArray(r=l[this.model][e].raw(this.color))?r:[r],this.valpha],e)},i[e]=function(...r){let n=r[0];return"number"==typeof n&&(n=c(r,t)),new i(n,e)}}function h(e,t,r){for(let n of e=Array.isArray(e)?e:[e])(s[n]||(s[n]=[]))[t]=r;return e=e[0],function(n){let l;return void 0!==n?(r&&(n=r(n)),(l=this[e]()).color[t]=n):(l=this[e]().color[t],r&&(l=r(l))),l}}function u(e){return function(t){return Math.max(0,Math.min(e,t))}}function c(e,t){for(let r=0;r<t;r++)"number"!=typeof e[r]&&(e[r]=0);return e}e.exports=i},42727:function(e){e.exports=function(e){return!!e&&"string"!=typeof e&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}},78627:function(e,t,r){Promise.resolve().then(r.bind(r,7931))},7931:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(36164),l=r(3546),a=r(18452),o=r(11978),s=r(74248),i=r(98428),h=r(47190),u=r.n(h);r(2596);let c=e=>u()(e).hsl().toString().replace(/hsla?\(/,"").replace(")","").split(",").slice(0,3).map((e,t)=>0===t?parseFloat(e).toFixed(1):e).join("");function f(){let[e,t]=(0,l.useState)(!1),[r,h]=(0,l.useState)(null),[u,f]=(0,l.useState)(""),[g,b]=(0,l.useState)([]),d=(0,l.useRef)(null),p=(0,o.useSearchParams)(),m=p.get("max-width")||void 0;(0,l.useEffect)(()=>{window.addEventListener("message",e=>{let{data:t}=e;if(t.style){let e=t.style.split(";").filter(e=>e).map(e=>{let[t,r]=e.split(":"),n=r.trim(),l=n.startsWith("#")||n.startsWith("rgb");if(!l)return"".concat(t,": ").concat(r);let a=c(n);return"".concat(t,": ").concat(a)}).join(";");document.documentElement.style.cssText=e}t.themeClass&&(document.documentElement.className=t.themeClass)})},[]);let y=e=>{if(d.current)d.current.sendUserChat(e);else{let t=[...g];t.push(e),b(t)}},v=(0,a.H)({init:e=>{d.current||(f((0,s.x0)()),t(!0),h(e.fetcherOptions))},sendMessage:e=>y(e)});if(!e||!r)return(0,n.jsx)(n.Fragment,{});let w={Authorization:"Bearer ".concat(r.authorization)};return(0,n.jsx)(i.e,{chatId:u,ref:d,headers:w,onThreadUpdates:()=>{},onNavigateToContext:e=>{null==v||v.navigate(e)},onLoaded:()=>{g.forEach(y),b([])},maxWidth:m},u)}},2596:function(){},94089:function(e,t,r){"use strict";var n=r(42727),l=Array.prototype.concat,a=Array.prototype.slice,o=e.exports=function(e){for(var t=[],r=0,o=e.length;r<o;r++){var s=e[r];n(s)?t=l.call(t,a.call(s)):t.push(s)}return t};o.wrap=function(e){return function(){return e(o(arguments))}}},18452:function(e,t,r){"use strict";r.d(t,{m:function(){return o},H:function(){return s}});var n=r(3546),l=r(89704),a=r(95686);function o(e,t){let r=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(e.current&&!r.current){var n;r.current=(n=e.current,(0,l.K)(n,{expose:{navigate:t.navigate}}))}},[e.current]),r.current}function s(e){let t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let r=window.self!==window.top;r&&!t.current&&(t.current=(0,a.c)({expose:{init:e.init,sendMessage:e.sendMessage}}))},[]),t.current}}},function(e){e.O(0,[872,55,3004,2178,6201,2578,3449,9421,4553,830,1454,2672,4546,9275,3299,2891,5606,5048,8002,2660,9736,1565,3396,7417,8428,3375,5289,1744],function(){return e(e.s=78627)}),_N_E=e.O()}]);