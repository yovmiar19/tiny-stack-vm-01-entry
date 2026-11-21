import{mkdirSync as M,readdirSync as R,readFileSync as F,writeFileSync as W}from'node:fs';
import{join as J}from'node:path';
const S=`!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%"%`;
function run(p,q){
const A=n=>new Int32Array(n),D=A(256),C=A(64),Y=A(256),o=new Uint8Array(65536);
let s=0,c=0,l=0,i=0,x=0,t=0;const n=p.length;
const d=v=>[o.slice(0,l),v];
for(;;){
if(t===1e6)return d(10);
if(x<0||x>=n)return d(9);
const g=p[x],k=(S.charCodeAt(g)||0)-33;
if(k<0)return d(5);
const m=k>>4,po=(k>>2)&3,pu=k&3;
if(x+m>=n)return d(9);
t++;
const y=x+1+m;
if(s<po)return d(2);
if(s-po+pu>256)return d(3);
x=y;
if(g>=16&&g<=34&&g!==23&&g!==27){
const b=D[s-1],a=D[s-2];
if(g>18&&g<23&&!b)return d(4);
const r=[a+b|0,a-b|0,Math.imul(a,b),(a/b)|0,a%b|0,(a>>>0)/(b>>>0)|0,(a>>>0)%(b>>>0)|0,0,a&b,a|b,a^b,0,a<<(b&31),a>>(b&31),a>>>(b&31)|0,0,a===b?1:0,a<b?1:0,(a>>>0)<(b>>>0)?1:0][g-16];
s-=2;D[s++]=r;
continue;
}
if(g===64||g===65){
const a=D[s-1];
if(a<0||a>255)return d(6);
if(g===64)D[s-1]=Y[a];
else{s-=2;Y[a]=D[s];}
continue;
}
if(g>=48&&g<=52){
if(g===51){if(c===64)return d(7);C[c++]=y;x=p[y-2]|p[y-1]<<8;}
else if(g===52){if(!c)return d(8);x=C[--c];}
else{const v=g===48?0:D[--s];if(g===48||(g===49)==(v===0))x=y+(((p[y-2]|p[y-1]<<8)<<16)>>16);}
continue;
}
switch(g){
case 0:return d(0);
case 1:D[s++]=(p[y-1]<<24)>>24;break;
case 2:D[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:[D[s-1],D[s-2]]=[D[s-2],D[s-1]];break;
case 6:D[s]=D[s-2];s++;break;
case 7:[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];break;
case 23:D[s-1]=-D[s-1]|0;break;
case 27:D[s-1]=~D[s-1];break;
case 80:{
const b=Buffer.from(String(D[s-1]));
if(l+b.length>65536)return d(11);
s--;o.set(b,l);l+=b.length;break;
}
case 81:
if(l+1>65536)return d(11);
o[l++]=D[--s]&255;break;
case 82:D[s++]=i<q.length?q[i++]:-1;break;
case 83:return d(D[--s]&255);
}
}
}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const id of R(I).sort()){
const r=run(F(J(I,id,'program.bin')),F(J(I,id,'input.bin')));
M(J(O,id),{recursive:true});
W(J(O,id,'stdout.bin'),r[0]);
W(J(O,id,'exit.txt'),r[1]+'\n');
}
