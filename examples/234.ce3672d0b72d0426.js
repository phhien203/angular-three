"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[234],{8234:(tt,A,u)=>{u.r(A),u.d(A,{ClumpComponent:()=>St,EffectsComponent:()=>vt,ObjectClumpComponent:()=>ft,ObjectClumpComponentModule:()=>Je,PointerComponent:()=>bt});var B=u(3834),l=u(5667),T=u(221),L=u(4761),Q=u(1507),X=u(3815),F=u(991),G=u(4478),H=u(6462),V=u(9436),xt=(u(2089),u(4552),u(9049),u(8919));u(6484);var h=u(2046),r=u(6186);const Ft=["*"];let Et=(()=>{class e extends l.Jy{set args(t){this.set({instanceArgs:t})}set near(t){this.set({near:(0,l.su)(t)})}set far(t){this.set({far:(0,l.su)(t)})}set renderTarget(t){this.set({renderTarget:t})}objectInitFn(){const t=this.get(n=>n.instanceArgs);return new h._am(...t)}get preObjectInit(){return t=>{const n=this.get(a=>a.instanceArgs);n&&n.length&&this.set({near:n[0],far:n[1],renderTarget:n[2]}),this.effect((0,l.oe)(()=>{t()}))(this.instanceArgs$)}}get optionFields(){return Object.assign(Object.assign({},super.optionFields),{near:!1,far:!1,renderTarget:!1})}}return e.\u0275fac=function(){let o;return function(n){return(o||(o=r.n5z(e)))(n||e)}}(),e.\u0275cmp=r.Xpm({type:e,selectors:[["ngt-cube-camera"]],inputs:{args:"args",near:"near",far:"far",renderTarget:"renderTarget"},features:[r._Bn([(0,l.Q2)(e)]),r.qOj],ngContentSelectors:Ft,decls:1,vars:0,template:function(t,n){1&t&&(r.F$t(),r.Hsn(0))},encapsulation:2,changeDetection:0}),e})(),Tt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({}),e})();var P=u(4476),Pt=u(5255),Rt=u(6422),Bt=u(758),J=u(6153),ut=u(6517),z=u(2310),et=u(4643),nt=u(6822),wt=u(9622),It=u(8667);const U={schedule(e){let o=requestAnimationFrame,t=cancelAnimationFrame;const{delegate:n}=U;n&&(o=n.requestAnimationFrame,t=n.cancelAnimationFrame);const a=o(i=>{t=void 0,e(i)});return new It.w0(()=>null==t?void 0:t(a))},requestAnimationFrame(...e){const{delegate:o}=U;return((null==o?void 0:o.requestAnimationFrame)||requestAnimationFrame)(...e)},cancelAnimationFrame(...e){const{delegate:o}=U;return((null==o?void 0:o.cancelAnimationFrame)||cancelAnimationFrame)(...e)},delegate:void 0};var jt=u(8191);const ot=new class kt extends jt.v{flush(o){this._active=!0;const t=this._scheduled;this._scheduled=void 0;const{actions:n}=this;let a;o=o||n.shift();do{if(a=o.execute(o.state,o.delay))break}while((o=n[0])&&o.id===t&&n.shift());if(this._active=!1,a){for(;(o=n[0])&&o.id===t&&n.shift();)o.unsubscribe();throw a}}}(class Ot extends wt.o{constructor(o,t){super(o,t),this.scheduler=o,this.work=t}requestAsyncId(o,t,n=0){return null!==n&&n>0?super.requestAsyncId(o,t,n):(o.actions.push(this),o._scheduled||(o._scheduled=U.requestAnimationFrame(()=>o.flush(void 0))))}recycleAsyncId(o,t,n=0){if(null!=n&&n>0||null==n&&this.delay>0)return super.recycleAsyncId(o,t,n);o.actions.some(a=>a.id===t)||(U.cancelAnimationFrame(t),o._scheduled=void 0)}});var At=u(6083);class Gt extends h.yxD{constructor(o){super(o),this.type=h.cLu}parse(o){const s=function(d,v){switch(d){case 1:console.error("THREE.RGBELoader Read Error: "+(v||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(v||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(v||""));break;default:console.error("THREE.RGBELoader: Error: "+(v||""))}return-1},C=function(d,v,N){v=v||1024;let M=d.pos,_=-1,m=0,x="",b=String.fromCharCode.apply(null,new Uint16Array(d.subarray(M,M+128)));for(;0>(_=b.indexOf("\n"))&&m<v&&M<d.byteLength;)x+=b,m+=b.length,M+=128,b+=String.fromCharCode.apply(null,new Uint16Array(d.subarray(M,M+128)));return-1<_&&(!1!==N&&(d.pos+=m+_+1),x+b.slice(0,_))},Z=function(d,v,N,y){const _=Math.pow(2,d[v+3]-128)/255;N[y+0]=d[v+0]*_,N[y+1]=d[v+1]*_,N[y+2]=d[v+2]*_,N[y+3]=1},K=function(d,v,N,y){const _=Math.pow(2,d[v+3]-128)/255;N[y+0]=h.A5E.toHalfFloat(Math.min(d[v+0]*_,65504)),N[y+1]=h.A5E.toHalfFloat(Math.min(d[v+1]*_,65504)),N[y+2]=h.A5E.toHalfFloat(Math.min(d[v+2]*_,65504)),N[y+3]=h.A5E.toHalfFloat(1)},Y=new Uint8Array(o);Y.pos=0;const W=function(d){const N=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,y=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*FORMAT=(\S+)\s*$/,_=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,m={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let x,b;if(d.pos>=d.byteLength||!(x=C(d)))return s(1,"no header found");if(!(b=x.match(/^#\?(\S+)/)))return s(3,"bad initial token");for(m.valid|=1,m.programtype=b[1],m.string+=x+"\n";x=C(d),!1!==x;)if(m.string+=x+"\n","#"!==x.charAt(0)){if((b=x.match(N))&&(m.gamma=parseFloat(b[1])),(b=x.match(y))&&(m.exposure=parseFloat(b[1])),(b=x.match(M))&&(m.valid|=2,m.format=b[1]),(b=x.match(_))&&(m.valid|=4,m.height=parseInt(b[1],10),m.width=parseInt(b[2],10)),2&m.valid&&4&m.valid)break}else m.comments+=x+"\n";return 2&m.valid?4&m.valid?m:s(3,"missing image size specifier"):s(3,"missing format specifier")}(Y);if(-1!==W){const d=W.width,v=W.height,N=function(d,v,N){const y=v;if(y<8||y>32767||2!==d[0]||2!==d[1]||128&d[2])return new Uint8Array(d);if(y!==(d[2]<<8|d[3]))return s(3,"wrong scanline width");const M=new Uint8Array(4*v*N);if(!M.length)return s(4,"unable to allocate buffer space");let _=0,m=0;const x=4*y,b=new Uint8Array(4),E=new Uint8Array(x);let _t=N;for(;_t>0&&m<d.byteLength;){if(m+4>d.byteLength)return s(1);if(b[0]=d[m++],b[1]=d[m++],b[2]=d[m++],b[3]=d[m++],2!=b[0]||2!=b[1]||(b[2]<<8|b[3])!=y)return s(3,"bad rgbe scanline format");let O,$=0;for(;$<x&&m<d.byteLength;){O=d[m++];const j=O>128;if(j&&(O-=128),0===O||$+O>x)return s(3,"bad scanline data");if(j){const k=d[m++];for(let Nt=0;Nt<O;Nt++)E[$++]=k}else E.set(d.subarray(m,m+O),$),$+=O,m+=O}const qe=y;for(let j=0;j<qe;j++){let k=0;M[_]=E[j+k],k+=y,M[_+1]=E[j+k],k+=y,M[_+2]=E[j+k],k+=y,M[_+3]=E[j+k],_+=4}_t--}return M}(Y.subarray(Y.pos),d,v);if(-1!==N){let y,M,_,m;switch(this.type){case h.VzW:m=N.length/4;const x=new Float32Array(4*m);for(let E=0;E<m;E++)Z(N,4*E,x,4*E);y=x,_=h.VzW;break;case h.cLu:m=N.length/4;const b=new Uint16Array(4*m);for(let E=0;E<m;E++)K(N,4*E,b,4*E);y=b,_=h.cLu;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:d,height:v,data:y,header:W.string,gamma:W.gamma,exposure:W.exposure,format:M,type:_}}}return null}setDataType(o){return this.type=o,this}load(o,t,n,a){return super.load(o,function i(c,s){switch(c.type){case h.VzW:case h.cLu:c.encoding=h.rnI,c.minFilter=h.wem,c.magFilter=h.wem,c.generateMipmaps=!1,c.flipY=!0}t&&t(c,s)},n,a)}}const rt={sunset:"venice/venice_sunset_1k.hdr",dawn:"kiara/kiara_1_dawn_1k.hdr",night:"dikhololo/dikhololo_night_1k.hdr",warehouse:"empty-wharehouse/empty_warehouse_01_1k.hdr",forest:"forrest-slope/forest_slope_1k.hdr",apartment:"lebombo/lebombo_1k.hdr",studio:"studio-small-3/studio_small_03_1k.hdr",city:"potsdamer-platz/potsdamer_platz_1k.hdr",park:"rooitou/rooitou_park_1k.hdr",lobby:"st-fagans/st_fagans_interior_1k.hdr"};var zt=u(2375),Dt=u(4001),Lt=u(7669),Ht=u(2455);const Wt=["map",""],at=["*"];function Qt(e,o){1&e&&r.GkF(0)}const Vt=function(e,o,t){return[e,o,t]};function Ut(e,o){if(1&e){const t=r.EpF();r.TgZ(0,"ngt-cube-camera",5),r.NdJ("ready",function(a){return r.CHM(t),r.oxw().set({camera:a})})("beforeRender",function(){return r.CHM(t),r.oxw().onBeforeRender()}),r.qZA()}if(2&e){const t=o.ngIf,n=r.oxw();r.Q6J("args",r.kEZ(1,Vt,n.near,n.far,t))}}function Zt(e,o){if(1&e&&r._UZ(0,"ngt-soba-environment-cube",6),2&e){const t=r.oxw();r.Q6J("ngtSobaEnvironmentPassThrough",t)}}function Yt(e,o){if(1&e&&r._UZ(0,"ngt-soba-environment-map",7),2&e){const t=r.oxw();r.Q6J("ngtSobaEnvironmentPassThrough",t)("map",t.map)}}const $t=function(){return[1,16]};function Xt(e,o){if(1&e){const t=r.EpF();r.ynx(0),r._UZ(1,"ngt-soba-environment-map",1),r.TgZ(2,"ngt-mesh",2),r._UZ(3,"ngt-icosahedron-geometry",3),r.TgZ(4,"ngt-shader-material",4),r.NdJ("ready",function(a){return r.CHM(t),r.oxw().set({material:a})}),r.ALo(5,"side"),r.qZA()(),r.BQk()}if(2&e){const t=o.ngIf,n=r.oxw();r.xp6(1),r.Q6J("ngtSobaEnvironmentPassThrough",n)("map",t.texture),r.xp6(1),r.Q6J("scale",t.scale),r.xp6(1),r.Q6J("args",r.DdM(10,$t)),r.xp6(1),r.Q6J("side",r.lcZ(5,8,"back"))("vertexShader",n.vertexShader)("fragmentShader",t.fragment)("uniforms",n.uniforms)}}function Jt(e,o){if(1&e&&r._UZ(0,"ngt-soba-environment-ground",2),2&e){const t=r.oxw();r.Q6J("ngtSobaEnvironmentPassThrough",t)}}function qt(e,o){if(1&e&&r._UZ(0,"ngt-soba-environment-map",5),2&e){const t=r.oxw(2);r.Q6J("ngtSobaEnvironmentPassThrough",t)("map",t.map)}}function Kt(e,o){1&e&&r.GkF(0)}function te(e,o){if(1&e&&r.YNc(0,Kt,1,0,"ng-container",8),2&e){const t=r.oxw(4);r.Q6J("ngTemplateOutlet",t.content.templateRef)}}function ee(e,o){if(1&e&&(r.TgZ(0,"ngt-soba-environment-portal",2),r.YNc(1,te,1,1,"ng-template",7),r.qZA()),2&e){const t=r.oxw(3);r.Q6J("ngtSobaEnvironmentPassThrough",t)}}function ne(e,o){if(1&e&&r._UZ(0,"ngt-soba-environment-cube",2),2&e){const t=r.oxw(3);r.Q6J("ngtSobaEnvironmentPassThrough",t)}}function oe(e,o){if(1&e&&(r.YNc(0,ee,2,1,"ngt-soba-environment-portal",0),r.YNc(1,ne,1,1,"ng-template",null,6,r.W1O)),2&e){const t=r.MAs(2),n=r.oxw(2);r.Q6J("ngIf",!!n.content)("ngIfElse",t)}}function re(e,o){if(1&e&&(r.YNc(0,qt,1,2,"ngt-soba-environment-map",3),r.YNc(1,oe,3,2,"ng-template",null,4,r.W1O)),2&e){const t=r.MAs(2),n=r.oxw();r.Q6J("ngIf",!!n.map)("ngIfElse",t)}}const ce=e=>!!e&&e.isCubeTexture;function it(e){return l.is.ref(e)?e.value:e}let w=(()=>{class e extends l.WZ{get frames(){return this.get(t=>t.frames)}set frames(t){this.set({frames:(0,l.su)(t)})}get near(){return this.get(t=>t.near)}set near(t){this.set({near:(0,l.su)(t)})}get far(){return this.get(t=>t.far)}set far(t){this.set({far:(0,l.su)(t)})}get resolution(){return this.get(t=>t.resolution)}set resolution(t){this.set({resolution:(0,l.su)(t)})}get background(){return this.get(t=>t.background)}set background(t){this.set({background:"only"===t?t:(0,l.Ig)(t)})}get map(){return this.get(t=>t.map)}set map(t){this.set({map:t})}get files(){return this.get(t=>t.files)}set files(t){this.set({files:t})}get path(){return this.get(t=>t.path)}set path(t){this.set({path:t})}get preset(){return this.get(t=>t.preset)}set preset(t){this.set({preset:t})}get scene(){return this.get(t=>t.scene)}set scene(t){this.set({scene:t})}get extensions(){return this.get(t=>t.extensions)}set extensions(t){this.set({extensions:t})}get ground(){return this.get(t=>t.ground)}set ground(t){this.set({ground:l.is.obj(t)?t:(0,l.Ig)(t)})}}return e.\u0275fac=function(){let o;return function(n){return(o||(o=r.n5z(e)))(n||e)}}(),e.\u0275dir=r.lG2({type:e,inputs:{frames:"frames",near:"near",far:"far",resolution:"resolution",background:"background",map:"map",files:"files",path:"path",preset:"preset",scene:"scene",extensions:"extensions",ground:"ground"},features:[r.qOj]}),e})(),st=(()=>{class e{constructor(t){this.host=t}set ngtSobaEnvironmentPassThrough(t){this.assertWrapper(t),t.select(t.select(n=>n.frames).pipe((0,l.Xb)()),t.select(n=>n.near).pipe((0,l.Xb)()),t.select(n=>n.far).pipe((0,l.Xb)()),t.select(n=>n.resolution).pipe((0,l.Xb)()),t.select(n=>n.background).pipe((0,l.Xb)()),t.select(n=>n.map).pipe((0,l.Xb)()),t.select(n=>n.files).pipe((0,l.Xb)()),t.select(n=>n.path).pipe((0,l.Xb)()),t.select(n=>n.preset).pipe((0,l.Xb)()),t.select(n=>n.scene).pipe((0,l.Xb)()),t.select(n=>n.extensions).pipe((0,l.Xb)()),t.select(n=>n.ground).pipe((0,l.Xb)())).pipe((0,Pt.R)(t.destroy$)).subscribe(()=>{this.host.frames=t.frames,this.host.near=t.near,this.host.far=t.far,this.host.resolution=t.resolution,this.host.background=t.background,this.host.map=t.map,this.host.files=t.files,this.host.path=t.path,this.host.preset=t.preset,this.host.scene=t.scene,this.host.extensions=t.extensions,this.host.ground=t.ground})}assertWrapper(t){if(!(t instanceof w))throw new Error("[ngtSobaEnvironmentPassThrough] wrapper is not an NgtSobaEnvironmentGeneric")}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(w,10))},e.\u0275dir=r.lG2({type:e,selectors:[["","ngtSobaEnvironmentPassThrough",""]],inputs:{ngtSobaEnvironmentPassThrough:"ngtSobaEnvironmentPassThrough"}}),e})(),q=(()=>{class e extends l.gU{constructor(t,n){super(),this.loader=t,this.store=n,this.setTexture=this.effect((0,l.oe)(()=>{const{textureRef:a,extensions:i,preset:c}=this.get();let{files:s,path:g}=this.get();if(c){if(!(c in rt))throw new Error("Preset must be one of: "+Object.keys(rt).join(", "));s=rt[c],g="https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/hdris/"}const p=Array.isArray(s),S=this.loader.use(p?h.cBK:Gt,p?[s]:s,C=>{C.setPath(g),i&&i(C)}).subscribe(C=>{const R=p?C[0]:C;R.mapping=p?h.fY$:h.dSO,a.set(R)});return()=>{S.unsubscribe()}})),this.set({textureRef:new l.Rl})}use(t){this.useSubscription&&this.useSubscription.unsubscribe();const n=t({files:["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"],path:""}),a=(0,Rt.b)(n)?n:(0,Bt.of)(n);return this.set(a),this.useSubscription=this.onCanvasReady(this.store.ready$,()=>(this.setTexture(this.select(this.select(i=>i.path),this.select(i=>i.files),this.select(i=>i.preset).pipe((0,l.Xb)()),this.select(i=>i.extensions).pipe((0,l.Xb)()))),()=>{this.useSubscription&&this.useSubscription.unsubscribe()}),!0),this.get(i=>i.textureRef)}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(l.gj),r.LFG(l.W7))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})(),ct=(()=>{class e extends w{constructor(){super(...arguments),this.setEnvironment=this.effect((0,l.oe)(()=>{const{map:t,background:n,scene:a}=this.get(),i=this.store.get(c=>c.scene);if(t){const c=it(a||i),s=c.background,g=c.environment;return"only"!==n&&(c.environment=t),n&&(c.background=t),()=>{"only"!==n&&(c.environment=g),n&&(c.background=s)}}}))}preInit(){super.preInit(),this.set(t=>{var n;return{background:null!==(n=t.background)&&void 0!==n&&n}})}ngOnInit(){super.ngOnInit(),this.zone.runOutsideAngular(()=>{this.onCanvasReady(this.store.ready$,()=>{this.setEnvironment(this.select(this.store.select(t=>t.scene),this.select(t=>t.background),this.select(t=>t.map),this.select(t=>t.scene).pipe((0,l.Xb)())))})})}}return e.\u0275fac=function(){let o;return function(n){return(o||(o=r.n5z(e)))(n||e)}}(),e.\u0275cmp=r.Xpm({type:e,selectors:[["ngt-soba-environment-map","map",""]],features:[r._Bn([{provide:w,useExisting:e}]),r.qOj],attrs:Wt,ngContentSelectors:at,decls:1,vars:0,template:function(t,n){1&t&&(r.F$t(),r.Hsn(0))},encapsulation:2,changeDetection:0}),e})(),gt=(()=>{class e extends w{constructor(t,n,a,i,c){super(t,n,a,i),this.environmentResolver=c,this.setEnvironment=this.effect((0,l.oe)(({texture:s})=>{const g=this.store.get(I=>I.scene),{background:p,scene:f}=this.get(),S=it(f||g),C=S.background,R=S.environment;return"only"!==p&&(S.environment=s),p&&(S.background=s),()=>{"only"!==p&&(S.environment=R),p&&(S.background=C)}}))}preInit(){super.preInit(),this.set(t=>{var n;return{background:null!==(n=t.background)&&void 0!==n&&n}})}ngOnInit(){super.ngOnInit(),this.zone.runOutsideAngular(()=>{this.onCanvasReady(this.store.ready$,()=>{const t=this.environmentResolver.use(n=>this.select(this.select(a=>a.files).pipe((0,J.O)(n.files)),this.select(a=>a.path).pipe((0,J.O)(n.path)),this.select(a=>a.preset).pipe((0,l.Xb)()),this.select(a=>a.extensions).pipe((0,l.Xb)()),(a,i,c,s)=>({files:a,path:i,preset:c,extensions:s})));this.setEnvironment(this.select(t.pipe((0,ut.h)(n=>!!n)),this.select(n=>n.background),this.select(n=>n.scene).pipe((0,l.Xb)()),this.store.select(n=>n.scene),n=>({texture:n})))})})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.R0b),r.Y36(l.W7),r.Y36(l.cz,12),r.Y36(l.Aw,12),r.Y36(q))},e.\u0275cmp=r.Xpm({type:e,selectors:[["ngt-soba-environment-cube"]],features:[r._Bn([{provide:w,useExisting:e},q]),r.qOj],ngContentSelectors:at,decls:1,vars:0,template:function(t,n){1&t&&(r.F$t(),r.Hsn(0))},encapsulation:2,changeDetection:0}),e})(),lt=(()=>{class e{constructor(t){this.templateRef=t}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.Rgc))},e.\u0275dir=r.lG2({type:e,selectors:[["ng-template","ngt-soba-environment-content",""]]}),e})(),le=(()=>{class e extends w{constructor(){super(...arguments),this.virtualScene=new l.Rl((0,l.Pl)(new h.xsS,()=>this.store.get())),this.count=1,this.fbo$=this.select(t=>t.fbo),this.setEnvironment=this.effect((0,l.oe)(()=>{const{gl:t,scene:n}=this.store.get(),{frames:a,scene:i,background:c,fbo:s,camera:g}=this.get();1===a&&g.update(t,this.virtualScene.value);const p=it(i||n),f=p.background,S=p.environment;return"only"!==c&&(p.environment=s.texture),c&&(p.background=s.texture),()=>{"only"!==c&&(p.environment=S),c&&(p.background=f)}}))}preInit(){super.preInit(),this.set(t=>{var n,a,i,c,s;return{near:null!==(n=t.near)&&void 0!==n?n:1,far:null!==(a=t.far)&&void 0!==a?a:1e3,resolution:null!==(i=t.resolution)&&void 0!==i?i:256,frames:null!==(c=t.frames)&&void 0!==c?c:1,background:null!==(s=t.background)&&void 0!==s&&s}})}ngOnInit(){super.ngOnInit(),this.zone.runOutsideAngular(()=>{this.onCanvasReady(this.store.ready$,()=>{this.set(this.select(this.select(t=>t.resolution),t=>{const n=new h.oAp(t);return n.texture.type=h.cLu,{fbo:n}})),this.setEnvironment(this.select())})})}onBeforeRender(){const{camera:t,frames:n}=this.get(),a=this.store.get(i=>i.gl);t&&(n===1/0||this.count<n)&&(t.update(a,this.virtualScene.value),this.count++)}}return e.\u0275fac=function(){let o;return function(n){return(o||(o=r.n5z(e)))(n||e)}}(),e.\u0275cmp=r.Xpm({type:e,selectors:[["ngt-soba-environment-portal"]],contentQueries:function(t,n,a){if(1&t&&r.Suo(a,lt,7),2&t){let i;r.iGM(i=r.CRH())&&(n.content=i.first)}},features:[r._Bn([{provide:w,useExisting:e}]),r.qOj],decls:7,vars:7,consts:[[3,"ref"],[4,"ngTemplateOutlet"],[3,"args","ready","beforeRender",4,"ngIf"],[3,"ngtSobaEnvironmentPassThrough",4,"ngIf","ngIfElse"],["environmentMap",""],[3,"args","ready","beforeRender"],[3,"ngtSobaEnvironmentPassThrough"],[3,"ngtSobaEnvironmentPassThrough","map"]],template:function(t,n){if(1&t&&(r.TgZ(0,"ngt-portal",0),r.YNc(1,Qt,1,0,"ng-container",1),r.YNc(2,Ut,1,5,"ngt-cube-camera",2),r.ALo(3,"async"),r.YNc(4,Zt,1,1,"ngt-soba-environment-cube",3),r.YNc(5,Yt,1,2,"ng-template",null,4,r.W1O),r.qZA()),2&t){const a=r.MAs(6);r.Q6J("ref",n.virtualScene),r.xp6(1),r.Q6J("ngTemplateOutlet",n.content.templateRef),r.xp6(1),r.Q6J("ngIf",r.lcZ(3,5,n.fbo$)),r.xp6(2),r.Q6J("ngIf",n.files||n.preset)("ngIfElse",a)}},directives:[zt.WS,P.tP,P.O5,Et,gt,st,ct],pipes:[P.Ov],encapsulation:2,changeDetection:0}),e})(),ue=(()=>{class e extends w{constructor(t,n,a,i,c){super(t,n,a,i),this.environmentResolver=c,this.vertexShader="\nvarying vec3 vWorldPosition;\n\nvoid main() {\n  vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n  vWorldPosition = worldPosition.xyz;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}",this.uniforms={cubemap:{value:null},height:{value:15},radius:{value:60}},this.environmentGroundViewModel$=this.select(this.select(s=>s.texture),this.select(s=>s.scale),this.select(s=>s.fragment),(s,g,p)=>({texture:s,scale:g,fragment:p})),this.setDefines=this.effect((0,z.b)(()=>{var s,g;const{isCubeMap:p,texture:f}=this.get(),C=(null!==(g=p?null===(s=f.image[0])||void 0===s?void 0:s.width:f.image.width)&&void 0!==g?g:1024)/4,R=Math.floor(Math.log2(C)),I=Math.pow(2,R),Z=3*Math.max(I,112);this.set({defines:[p?"#define ENVMAP_TYPE_CUBE":"","#define CUBEUV_TEXEL_WIDTH "+1/Z,"#define CUBEUV_TEXEL_HEIGHT "+1/(4*I),`#define CUBEUV_MAX_MIP ${R}.0`,""]})})),this.setFragment=this.effect((0,z.b)(()=>{const s=this.get(g=>g.defines);this.set({fragment:s.join("\n")+"\n#define ENVMAP_TYPE_CUBE_UV\n\nvarying vec3 vWorldPosition;\n\nuniform float radius;\nuniform float height;\n\n#ifdef ENVMAP_TYPE_CUBE\n  uniform samplerCube cubemap;\n#else\n  uniform sampler2D cubemap;\n#endif\n\n// From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm\nfloat diskIntersect( in vec3 ro, in vec3 rd, vec3 c, vec3 n, float r ) {\n    vec3  o = ro - c;\n    float t = -dot(n, o)/dot(rd,n);\n    vec3  q = o + rd * t;\n    return (dot(q, q) < r * r) ? t : 1e6;\n}\n\n// From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm\nfloat sphereIntersect( in vec3 ro, in vec3 rd, in vec3 ce, float ra ) {\n    vec3 oc = ro - ce;\n    float b = dot( oc, rd );\n    float c = dot( oc, oc ) - ra*ra;\n    float h = b * b - c;\n    if(h < 0.0) -1.0;\n    h = sqrt( h );\n    return -b + h;\n}\n\nvec3 project() {\n  vec3 p = normalize(vWorldPosition);\n  vec3 camPos = cameraPosition;\n  camPos.y -= height;\n\n  float intersection = sphereIntersect(camPos, p, vec3(0.), radius);\n  if(intersection > 0.) {\n    vec3 h = vec3(0.0,-height,0.0);\n    float intersection2 = diskIntersect(camPos, p, h, vec3(0.0,-1.0,0.0), radius);\n    p = (camPos + min(intersection, intersection2) * p) / radius;\n  }\n  else {\n    p = vec3(0.0,1.0,0.0);\n  }\n  return p;\n}\n\n#include <common>\n#include <cube_uv_reflection_fragment>\n\nvoid main(){\n  vec3 projectedWorldPosition = project();\n\n  #ifdef ENVMAP_TYPE_CUBE\n    vec3 outcolor = textureCube(cubemap, projectedWorldPosition).rgb;\n  #else\n    vec3 direction = normalize(projectedWorldPosition);\n    vec2 uv = equirectUv(direction);\n    vec3 outcolor = texture2D(cubemap, uv).rgb;\n  #endif\n\n  gl_FragColor = vec4(outcolor, 1.0);\n\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n}"})})),this.setMaterialOptions=this.effect((0,z.b)(()=>{var s;const g=this.get(p=>p.ground);this.set({height:null==g?void 0:g.height,radius:null==g?void 0:g.radius,scale:null!==(s=null==g?void 0:g.scale)&&void 0!==s?s:1e3})})),this.setHeightUniform=this.effect((0,et.z)((0,nt.Q)(ot),(0,z.b)(()=>{const{height:s,material:g}=this.get();g&&s&&(g.uniforms.height.value=s)}))),this.setRadiusUniform=this.effect((0,et.z)((0,nt.Q)(ot),(0,z.b)(()=>{const{radius:s,material:g}=this.get();g&&s&&(g.uniforms.radius.value=s)}))),this.setCubeMapUniform=this.effect((0,et.z)((0,nt.Q)(ot),(0,z.b)(()=>{const{texture:s,material:g}=this.get();g&&(g.uniforms.cubemap.value=s)})))}ngOnInit(){super.ngOnInit(),this.onCanvasReady(this.store.ready$,()=>{const t=this.environmentResolver.use(n=>this.select(this.select(a=>a.files).pipe((0,J.O)(n.files)),this.select(a=>a.path).pipe((0,J.O)(n.path)),this.select(a=>a.preset).pipe((0,l.Xb)()),this.select(a=>a.extensions).pipe((0,l.Xb)()),(a,i,c,s)=>({files:a,path:i,preset:c,extensions:s})));this.set(this.select(this.select(n=>n.map).pipe((0,l.Xb)()),t.pipe((0,ut.h)(n=>!!n)),(n,a)=>(n&&(a=n),{texture:a,isCubeMap:ce(a)}))),this.setDefines(this.select(n=>n.texture).pipe((0,At.q)(1))),this.setFragment(this.select(n=>n.defines)),this.setMaterialOptions(this.select(n=>n.ground)),this.setHeightUniform(this.select(this.select(n=>n.material),this.select(n=>n.height).pipe((0,l.Xb)()))),this.setRadiusUniform(this.select(this.select(n=>n.material),this.select(n=>n.radius).pipe((0,l.Xb)()))),this.setCubeMapUniform(this.select(this.select(n=>n.material),this.select(n=>n.texture)))})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.R0b),r.Y36(l.W7),r.Y36(l.cz,12),r.Y36(l.Aw,12),r.Y36(q))},e.\u0275cmp=r.Xpm({type:e,selectors:[["ngt-soba-environment-ground"]],features:[r._Bn([{provide:w,useExisting:e},q]),r.qOj],decls:2,vars:3,consts:[[4,"ngIf"],[3,"ngtSobaEnvironmentPassThrough","map"],[3,"scale"],[3,"args"],[3,"side","vertexShader","fragmentShader","uniforms","ready"]],template:function(t,n){1&t&&(r.YNc(0,Xt,6,11,"ng-container",0),r.ALo(1,"async")),2&t&&r.Q6J("ngIf",r.lcZ(1,1,n.environmentGroundViewModel$))},directives:[P.O5,ct,st,xt.o,Dt.v,Lt.y],pipes:[P.Ov,Ht.i],encapsulation:2,changeDetection:0}),e})(),ge=(()=>{class e extends w{}return e.\u0275fac=function(){let o;return function(n){return(o||(o=r.n5z(e)))(n||e)}}(),e.\u0275cmp=r.Xpm({type:e,selectors:[["ngt-soba-environment"]],contentQueries:function(t,n,a){if(1&t&&r.Suo(a,lt,5),2&t){let i;r.iGM(i=r.CRH())&&(n.content=i.first)}},features:[r._Bn([{provide:w,useExisting:e}]),r.qOj],ngContentSelectors:at,decls:4,vars:2,consts:[[3,"ngtSobaEnvironmentPassThrough",4,"ngIf","ngIfElse"],["mapOrPortalOrCube",""],[3,"ngtSobaEnvironmentPassThrough"],[3,"ngtSobaEnvironmentPassThrough","map",4,"ngIf","ngIfElse"],["portalOrCube",""],[3,"ngtSobaEnvironmentPassThrough","map"],["cube",""],["ngt-soba-environment-content",""],[4,"ngTemplateOutlet"]],template:function(t,n){if(1&t&&(r.F$t(),r.YNc(0,Jt,1,1,"ngt-soba-environment-ground",0),r.YNc(1,re,3,2,"ng-template",null,1,r.W1O),r.Hsn(3)),2&t){const a=r.MAs(2);r.Q6J("ngIf",!!n.ground)("ngIfElse",a)}},directives:[P.O5,ue,st,ct,le,lt,P.tP,gt],encapsulation:2,changeDetection:0}),e})(),pe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[l.yh,P.ez,Tt,F.M$,L.Jv,X.RQ,l.g8]]}),e})();var he=u(2164);u(3444),new h.Pa4,u(3617);var be=u(132);u(9035),u(8607),u(5069),u(1615);var ht=u(1137);class D extends h.Kj0{constructor(){super(new h.DvJ(1,1,1),D.material)}}(0,ht.Z)(D,"SkyShader",{uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new h.Pa4},up:{value:new h.Pa4(0,1,0)}},vertexShader:["uniform vec3 sunPosition;","uniform float rayleigh;","uniform float turbidity;","uniform float mieCoefficient;","uniform vec3 up;","varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","const float e = 2.71828182845904523536028747135266249775724709369995957;","const float pi = 3.141592653589793238462643383279502884197169;","const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );","const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );","const float v = 4.0;","const vec3 K = vec3( 0.686, 0.678, 0.666 );","const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );","const float cutoffAngle = 1.6110731556870734;","const float steepness = 1.5;","const float EE = 1000.0;","float sunIntensity( float zenithAngleCos ) {","\tzenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );","\treturn EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );","}","vec3 totalMie( float T ) {","\tfloat c = ( 0.2 * T ) * 10E-18;","\treturn 0.434 * c * MieConst;","}","void main() {","\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );","\tvWorldPosition = worldPosition.xyz;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","\tgl_Position.z = gl_Position.w;","\tvSunDirection = normalize( sunPosition );","\tvSunE = sunIntensity( dot( vSunDirection, up ) );","\tvSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );","\tfloat rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );","\tvBetaR = totalRayleigh * rayleighCoefficient;","\tvBetaM = totalMie( turbidity ) * mieCoefficient;","}"].join("\n"),fragmentShader:["varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","uniform float mieDirectionalG;","uniform vec3 up;","const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );","const float pi = 3.141592653589793238462643383279502884197169;","const float n = 1.0003;","const float N = 2.545E25;","const float rayleighZenithLength = 8.4E3;","const float mieZenithLength = 1.25E3;","const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;","const float THREE_OVER_SIXTEENPI = 0.05968310365946075;","const float ONE_OVER_FOURPI = 0.07957747154594767;","float rayleighPhase( float cosTheta ) {","\treturn THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );","}","float hgPhase( float cosTheta, float g ) {","\tfloat g2 = pow( g, 2.0 );","\tfloat inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );","\treturn ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );","}","void main() {","\tvec3 direction = normalize( vWorldPosition - cameraPos );","\tfloat zenithAngle = acos( max( 0.0, dot( up, direction ) ) );","\tfloat inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );","\tfloat sR = rayleighZenithLength * inverse;","\tfloat sM = mieZenithLength * inverse;","\tvec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );","\tfloat cosTheta = dot( direction, vSunDirection );","\tfloat rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );","\tvec3 betaRTheta = vBetaR * rPhase;","\tfloat mPhase = hgPhase( cosTheta, mieDirectionalG );","\tvec3 betaMTheta = vBetaM * mPhase;","\tvec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );","\tLin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );","\tfloat theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]","\tfloat phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]","\tvec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );","\tvec3 L0 = vec3( 0.1 ) * Fex;","\tfloat sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );","\tL0 += ( vSunE * 19000.0 * Fex ) * sundisk;","\tvec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );","\tvec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );","\tgl_FragColor = vec4( retColor, 1.0 );","#include <tonemapping_fragment>","#include <encodings_fragment>","}"].join("\n")}),(0,ht.Z)(D,"material",new h.jyz({name:"SkyShader",fragmentShader:D.SkyShader.fragmentShader,vertexShader:D.SkyShader.vertexShader,uniforms:h.rDY.clone(D.SkyShader.uniforms),side:h._Li,depthWrite:!1}));const Ce=function(e){return{sky:e}};function Me(e,o){if(1&e&&r.GkF(0,1),2&e){const t=r.oxw();r.Q6J("ngTemplateOutlet",t.content.templateRef)("ngTemplateOutletContext",r.VKq(2,Ce,t.instance))}}const Fe=["*"];function Ee(e,o,t=new h.Pa4){const n=Math.PI*(e-.5),a=2*Math.PI*(o-.5);return t.x=Math.cos(a),t.y=Math.sin(n),t.z=Math.sin(a),t}let Te=(()=>{class e{constructor(t){this.templateRef=t}static ngTemplateContextGuard(t,n){return!0}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.Rgc))},e.\u0275dir=r.lG2({type:e,selectors:[["ng-template","ngt-soba-sky-content",""]]}),e})(),Pe=(()=>{class e extends l.uT{constructor(){super(...arguments),this.setScale=this.effect((0,z.b)(()=>{const t=this.get(n=>n.distance);this.instance.value.scale.copy((new h.Pa4).setScalar(t))})),this.updateMaterialUniforms=this.effect((0,z.b)(()=>{const{mieCoefficient:t,mieDirectionalG:n,rayleigh:a,sunPosition:i,turbidity:c}=this.get(),s=this.instance.value.material;s.uniforms.mieCoefficient.value=t,s.uniforms.mieDirectionalG.value=n,s.uniforms.rayleigh.value=a,s.uniforms.sunPosition.value=i,s.uniforms.turbidity.value=c,(0,l.QF)(s)}))}set distance(t){this.set({distance:(0,l.su)(t)})}set sunPosition(t){this.set({sunPosition:t})}set inclination(t){this.set({inclination:(0,l.su)(t)})}set azimuth(t){this.set({azimuth:(0,l.su)(t)})}set mieCoefficient(t){this.set({mieCoefficient:(0,l.su)(t)})}set mieDirectionalG(t){this.set({mieDirectionalG:(0,l.su)(t)})}set rayleigh(t){this.set({rayleigh:(0,l.su)(t)})}set turbidity(t){this.set({turbidity:(0,l.su)(t)})}preInit(){super.preInit(),this.set(t=>{var n,a,i,c,s,g,p,f;const S=null!==(n=t.inclination)&&void 0!==n?n:.6,C=null!==(a=t.azimuth)&&void 0!==a?a:.1;return{inclination:S,azimuth:C,distance:null!==(i=t.distance)&&void 0!==i?i:1e3,mieCoefficient:null!==(c=t.mieCoefficient)&&void 0!==c?c:.005,mieDirectionalG:null!==(s=t.mieDirectionalG)&&void 0!==s?s:.8,rayleigh:null!==(g=t.rayleigh)&&void 0!==g?g:.5,turbidity:null!==(p=t.turbidity)&&void 0!==p?p:10,sunPosition:null!==(f=t.sunPosition)&&void 0!==f?f:Ee(S,C)}})}postInit(){super.postInit(),this.setScale(this.select(t=>t.distance)),this.updateMaterialUniforms(this.select(this.select(t=>t.mieCoefficient),this.select(t=>t.mieDirectionalG),this.select(t=>t.rayleigh),this.select(t=>t.sunPosition),this.select(t=>t.turbidity)))}get meshType(){return D}}return e.\u0275fac=function(){let o;return function(n){return(o||(o=r.n5z(e)))(n||e)}}(),e.\u0275cmp=r.Xpm({type:e,selectors:[["ngt-soba-sky"]],contentQueries:function(t,n,a){if(1&t&&r.Suo(a,Te,5),2&t){let i;r.iGM(i=r.CRH())&&(n.content=i.first)}},inputs:{distance:"distance",sunPosition:"sunPosition",inclination:"inclination",azimuth:"azimuth",mieCoefficient:"mieCoefficient",mieDirectionalG:"mieDirectionalG",rayleigh:"rayleigh",turbidity:"turbidity"},features:[r.qOj],ngContentSelectors:Fe,decls:2,vars:1,consts:[[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){1&t&&(r.F$t(),r.YNc(0,Me,1,4,"ng-container",0),r.Hsn(1)),2&t&&r.Q6J("ngIf",n.content)},directives:[P.O5,P.tP],encapsulation:2,changeDetection:0}),e})(),Re=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[P.ez]]}),e})();var Be=u(1307),we=u(4349),Ie=u(4433),Oe=u(54),je=u(1188),mt=u(5751),ke=u(5281),Ae=u(1644),Ge=u(4986),ze=u(8181);const De=function(){return[1,2]},Le=function(){return[0,0,20]},He=function(e){return{position:e,fov:35,near:1,far:40}},We=function(){return[30,30,30]},Qe=function(){return["shadow","mapSize"]},Ve=function(){return[512,512]},Ue=function(e,o,t){return[e,o,t]},Ze=function(){return[0,2,0]};function Ye(e,o){1&e&&r._UZ(0,"ngt-bloom")}const $e=function(){return[1,32,32]};let ft=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["sandbox-object-clump"]],decls:11,vars:19,consts:[["shadows","","initialLog","",3,"dpr","camera"],["intensity","0.25"],["intensity","1","angle","0.2","penumbra","1","castShadow","",3,"position"],[3,"attach","vector2"],["intensity","5","color","purple",3,"position"],["iterations","10",3,"gravity"],["files","assets/adamsbridge.hdr"]],template:function(t,n){1&t&&(r.TgZ(0,"ngt-canvas",0),r._UZ(1,"ngt-ambient-light",1),r.TgZ(2,"ngt-spot-light",2),r._UZ(3,"ngt-vector2",3),r.qZA(),r._UZ(4,"ngt-directional-light",4),r.TgZ(5,"ngt-physics",5),r._UZ(6,"sandbox-pointer")(7,"sandbox-clump"),r.qZA(),r._UZ(8,"ngt-soba-environment",6)(9,"sandbox-effects")(10,"ngt-soba-sky"),r.qZA()),2&t&&(r.Q6J("dpr",r.DdM(7,De))("camera",r.VKq(9,He,r.DdM(8,Le))),r.xp6(2),r.Q6J("position",r.DdM(11,We)),r.xp6(1),r.Q6J("attach",r.DdM(12,Qe))("vector2",r.DdM(13,Ve)),r.xp6(1),r.Q6J("position",r.kEZ(14,Ue,-10,-10,-10)),r.xp6(1),r.Q6J("gravity",r.DdM(18,Ze)))},directives:function(){return[we.B3,be.w,he.K,Ie.M,Oe.Y,je.r,bt,St,ge,vt,Pe]},encapsulation:2,changeDetection:0}),e})(),bt=(()=>{class e extends l.gU{constructor(t,n,a){super(),this.physicBody=t,this.store=n,this.zone=a,this.pointerRef=this.physicBody.useSphere(()=>({type:"Kinematic",args:[3],position:[0,0,0]}),!1)}ngOnInit(){this.zone.runOutsideAngular(()=>{this.onCanvasReady(this.store.ready$,()=>{const t=this.store.registerBeforeRender({callback:({pointer:n,viewport:a})=>{this.pointerRef.api.position.set(n.x*a.width/2,n.y*a.height/2,0)}});return()=>{t()}},!0)})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(B.CN),r.Y36(l.W7),r.Y36(r.R0b))},e.\u0275cmp=r.Xpm({type:e,selectors:[["sandbox-pointer"]],features:[r._Bn([B.CN]),r.qOj],decls:0,vars:0,template:function(t,n){},encapsulation:2,changeDetection:0}),e})(),vt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["sandbox-effects"]],decls:2,vars:0,consts:[["ngt-effect-composer-content",""]],template:function(t,n){1&t&&(r.TgZ(0,"ngt-effect-composer"),r.YNc(1,Ye,1,0,"ng-template",0),r.qZA())},directives:[mt.dM,mt.sY,ke.y],encapsulation:2,changeDetection:0}),e})();const yt=new h.yGw,Xe=new h.Pa4;let St=(()=>{class e{constructor(t,n){this.textureLoader=t,this.physicBody=n,this.count=40,this.texture$=this.textureLoader.load("assets/cross.jpg"),this.sphereRef=this.physicBody.useSphere(()=>({args:[1],mass:1,angularDamping:.1,linearDamping:.65,position:[h.M8C.randFloatSpread(20),h.M8C.randFloatSpread(20),h.M8C.randFloatSpread(20)]}))}onBeforeRender(t){for(let n=0;n<this.count;n++)t.object.getMatrixAt(n,yt),this.sphereRef.api.at(n).applyForce(Xe.setFromMatrixPosition(yt).normalize().multiplyScalar(-50).toArray(),[0,0,0])}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(V.Wt),r.Y36(B.CN))},e.\u0275cmp=r.Xpm({type:e,selectors:[["sandbox-clump"]],features:[r._Bn([V.Wt,B.CN])],decls:4,vars:7,consts:[["castShadow","","receiveShadow","",3,"ref","count","beforeRender"],[3,"args"],["color","red","roughness","0","envMapIntensity","0.2","emissive","#370037",3,"map"]],template:function(t,n){1&t&&(r.TgZ(0,"ngt-instanced-mesh",0),r.NdJ("beforeRender",function(i){return n.onBeforeRender(i)}),r._UZ(1,"ngt-sphere-geometry",1)(2,"ngt-mesh-standard-material",2),r.ALo(3,"async"),r.qZA()),2&t&&(r.Q6J("ref",n.sphereRef.ref)("count",n.count),r.xp6(1),r.Q6J("args",r.DdM(6,$e)),r.xp6(1),r.Q6J("map",r.lcZ(3,4,n.texture$)))},directives:[Ae.f,Ge.o,ze.h],pipes:[P.Ov],encapsulation:2,changeDetection:0}),e})(),Je=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[P.ez,Be.Bz.forChild([{path:"",component:ft}]),G.km,H.Hr,F.R,L.fV,X.To,l.DX,Q.EQ,Q.Hk,T.fN,Q.in,B.M1,pe,Re,H.Lj,T.pk]]}),e})()},2089:(tt,A,u)=>{u.d(A,{I:()=>B.I});var B=u(4552)},4552:(tt,A,u)=>{u.d(A,{I:()=>X,U:()=>Q});var B=u(5667),l=u(2046),T=u(6186);const L=["*"];let Q=(()=>{class F extends B.Jy{objectInitFn(){return new l.ZAu}}return F.\u0275fac=function(){let G;return function(V){return(G||(G=T.n5z(F)))(V||F)}}(),F.\u0275cmp=T.Xpm({type:F,selectors:[["ngt-group"]],features:[T._Bn([(0,B.Q2)(F)]),T.qOj],ngContentSelectors:L,decls:1,vars:0,template:function(H,V){1&H&&(T.F$t(),T.Hsn(0))},encapsulation:2,changeDetection:0}),F})(),X=(()=>{class F{}return F.\u0275fac=function(H){return new(H||F)},F.\u0275mod=T.oAB({type:F}),F.\u0275inj=T.cJS({}),F})()},1137:(tt,A,u)=>{function B(l,T,L){return T in l?Object.defineProperty(l,T,{value:L,enumerable:!0,configurable:!0,writable:!0}):l[T]=L,l}u.d(A,{Z:()=>B})}}]);