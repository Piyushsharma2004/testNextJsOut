(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9894:function(e,t,i){Promise.resolve().then(i.t.bind(i,231,23)),Promise.resolve().then(i.bind(i,2618)),Promise.resolve().then(i.bind(i,8871)),Promise.resolve().then(i.bind(i,1620)),Promise.resolve().then(i.bind(i,4570)),Promise.resolve().then(i.bind(i,7975)),Promise.resolve().then(i.bind(i,6617))},2618:function(e,t,i){"use strict";i.d(t,{default:function(){return c}});var r=i(7437),a=i(7138),s=i(3179),n=i(6349);i(2265);var l=i(4484);let o=e=>{let{children:t,className:i,containerClassName:a,animate:s=!0}=e,o={initial:{backgroundPosition:"0 50%"},animate:{backgroundPosition:["0, 50%","100% 50%","0 50%"]}};return(0,r.jsxs)("div",{className:(0,n.cn)("relative p-[4px] group",a),children:[(0,r.jsx)(l.E.div,{variants:s?o:void 0,initial:s?"initial":void 0,animate:s?"animate":void 0,transition:s?{duration:5,repeat:1/0,repeatType:"reverse"}:void 0,style:{backgroundSize:s?"400% 400%":void 0},className:(0,n.cn)("absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform"," bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]")}),(0,r.jsx)(l.E.div,{variants:s?o:void 0,initial:s?"initial":void 0,animate:s?"animate":void 0,transition:s?{duration:5,repeat:1/0,repeatType:"reverse"}:void 0,style:{backgroundSize:s?"400% 400%":void 0},className:(0,n.cn)("absolute inset-0 rounded-3xl z-[1] will-change-transform","bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]")}),(0,r.jsx)("div",{className:(0,n.cn)("relative z-10",i),children:t})]})};var c=function(){let e=s.r.filter(e=>e.isFeatured);return(0,r.jsxs)("div",{className:"py-12 dark:bg-black ",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h2",{className:"text-base text-teal-600 font-semibold tracking-wide uppercase",children:"FEATURED COURSES"}),(0,r.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl",children:"Learn With the Best"})]})}),(0,r.jsx)("div",{className:"mt-10 mx-8",children:(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center",children:e.map(e=>(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(o,{className:"flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm",children:(0,r.jsxs)("div",{className:"p-4 sm:p-6 flex flex-col items-center text-center flex-grow",children:[(0,r.jsx)("p",{className:"text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200",children:e.title}),(0,r.jsx)("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 flex-grow",children:e.description}),(0,r.jsx)(a.default,{href:"/courses/".concat(e.slug),children:"Learn More"})]})})},e.id))})}),(0,r.jsx)("div",{className:"mt-20 text-center",children:(0,r.jsx)(a.default,{href:"/courses",className:"px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200",children:"View All courses"})})]})}},8871:function(e,t,i){"use strict";i.d(t,{default:function(){return x}});var r=i(7437),a=i(6349),s=i(2265),n=i(8184);let l=e=>{let t,i,l,o,c,d,u,{children:m,className:h,containerClassName:g,colors:p,waveWidth:x,backgroundFill:f,blur:v=10,speed:y="fast",waveOpacity:b=.5,...w}=e,j=(0,n.zz)(),N=(0,s.useRef)(null),k=()=>{switch(y){case"slow":default:return .001;case"fast":return .002}},_=()=>{t=(d=N.current.getContext("2d")).canvas.width=window.innerWidth,i=d.canvas.height=window.innerHeight,d.filter="blur(".concat(v,"px)"),l=0,window.onresize=function(){t=d.canvas.width=window.innerWidth,i=d.canvas.height=window.innerHeight,d.filter="blur(".concat(v,"px)")},M()},E=null!=p?p:["#38bdf8","#818cf8","#c084fc","#e879f9","#22d3ee"],z=e=>{for(l+=k(),o=0;o<e;o++){for(d.beginPath(),d.lineWidth=x||50,d.strokeStyle=E[o%E.length],c=0;c<t;c+=5){var r=100*j(c/800,.3*o,l);d.lineTo(c,r+.5*i)}d.stroke(),d.closePath()}},M=()=>{d.fillStyle=f||"black",d.globalAlpha=b||.5,d.fillRect(0,0,t,i),z(5),u=requestAnimationFrame(M)};return(0,s.useEffect)(()=>(_(),()=>{cancelAnimationFrame(u)}),[]),(0,r.jsxs)("div",{className:(0,a.cn)("h-screen flex flex-col items-center justify-center",g),children:[(0,r.jsx)("canvas",{className:"absolute inset-0 z-0",ref:N,id:"canvas"}),(0,r.jsx)("div",{className:(0,a.cn)("relative z-10",h),...w,children:m})]})};var o=i(6648),c=i(5282),d=i(6391),u=i(831),m=i(5127),h=i(4484);let g=e=>{let{items:t}=e,[i,a]=(0,s.useState)(null),n={stiffness:100,damping:5},l=(0,c.c)(0),g=(0,d.q)((0,u.H)(l,[-100,100],[-45,45]),n),p=(0,d.q)((0,u.H)(l,[-100,100],[-50,50]),n),x=e=>{let t=e.target.offsetWidth/2;l.set(e.nativeEvent.offsetX-t)};return(0,r.jsx)(r.Fragment,{children:t.map((e,t)=>(0,r.jsxs)("div",{className:"-mr-4  relative group",onMouseEnter:()=>a(e.id),onMouseLeave:()=>a(null),children:[(0,r.jsx)(m.M,{mode:"wait",children:i===e.id&&(0,r.jsxs)(h.E.div,{initial:{opacity:0,y:20,scale:.6},animate:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:260,damping:10}},exit:{opacity:0,y:20,scale:.6},style:{translateX:p,rotate:g,whiteSpace:"nowrap"},className:"absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2",children:[(0,r.jsx)("div",{className:"absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px "}),(0,r.jsx)("div",{className:"absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px "}),(0,r.jsx)("div",{className:"font-bold text-white relative z-30 text-base",children:e.name}),(0,r.jsx)("div",{className:"text-white text-xs",children:e.designation})]})}),(0,r.jsx)(o.default,{onMouseMove:x,height:100,width:100,src:e.image,alt:e.name,className:"object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"})]},e.name))})},p=[{id:1,name:"Piyush sharma",designation:"Guitar Instructor",image:"/piyush.png"},{id:2,name:"Hardika",designation:"Vocal Coach",image:"/avtar9.png"},{id:3,name:"Ravi",designation:"Piano Teacher",image:"/avtar2.png"},{id:4,name:"Siddhant",designation:"Drumming Expert",image:"/avtar12.png"}];var x=function(){return(0,r.jsx)("div",{className:"relative h-[40rem] overflow-hidden flex items-center justify-center",children:(0,r.jsxs)(l,{className:"w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full",children:[(0,r.jsx)("h2",{className:"text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8",children:"Meet Our Instructors"}),(0,r.jsx)("p",{className:"text-base md:text-lg text-white text-center mb-4",children:"Discover the talented professionals who will guide your musical journey"}),(0,r.jsx)("div",{className:"flex flex-row items-center justify-center mb-10 w-full",children:(0,r.jsx)(g,{items:p})})]})})}},1620:function(e,t,i){"use strict";i.d(t,{default:function(){return o}});var r=i(7437),a=i(6349),s=i(2265);let n=e=>{let{items:t,direction:i="left",speed:n="fast",pauseOnHover:l=!0,className:o}=e,c=s.useRef(null),d=s.useRef(null);(0,s.useEffect)(()=>{c.current&&d.current&&(Array.from(d.current.children).forEach(e=>{let t=e.cloneNode(!0);d.current&&d.current.appendChild(t)}),h(),g(),m(!0))},[]);let[u,m]=(0,s.useState)(!1),h=()=>{c.current&&("left"===i?c.current.style.setProperty("--animation-direction","forwards"):c.current.style.setProperty("--animation-direction","reverse"))},g=()=>{c.current&&("fast"===n?c.current.style.setProperty("--animation-duration","20s"):"normal"===n?c.current.style.setProperty("--animation-duration","40s"):c.current.style.setProperty("--animation-duration","80s"))};return(0,r.jsx)("div",{ref:c,className:(0,a.cn)("scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",o),children:(0,r.jsx)("ul",{ref:d,className:(0,a.cn)(" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",u&&"animate-scroll ",l&&"hover:[animation-play-state:paused]"),children:t.map((e,t)=>(0,r.jsx)("li",{className:"w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]",style:{background:"linear-gradient(180deg, var(--slate-800), var(--slate-900)"},children:(0,r.jsxs)("blockquote",{children:[(0,r.jsx)("div",{"aria-hidden":"true",className:"user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"}),(0,r.jsx)("span",{className:" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal",children:e.quote}),(0,r.jsx)("div",{className:"relative z-20 mt-6 flex flex-row items-center",children:(0,r.jsxs)("span",{className:"flex flex-col gap-1",children:[(0,r.jsx)("span",{className:" text-sm leading-[1.6] text-gray-400 font-normal",children:e.name}),(0,r.jsx)("span",{className:" text-sm leading-[1.6] text-gray-400 font-normal",children:e.title})]})})]})},e.name))})})},l=[{quote:"Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",name:"Alex Johnson",title:"Guitar Student"},{quote:"The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",name:"Samantha Lee",title:"Piano Student"},{quote:"This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",name:"Michael Chen",title:"Vocal Student"},{quote:"As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",name:"Emily Taylor",title:"Violin Student"},{quote:"The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",name:"Chris Morales",title:"Music Production Student"}];var o=function(){return(0,r.jsxs)("div",{className:"h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-center mb-8 z-10",children:"Hear our Harmony: Voices of success"}),(0,r.jsx)("div",{className:"flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8",children:(0,r.jsx)("div",{className:"w-full max-w-6xl",children:(0,r.jsx)(n,{items:l,direction:"right",speed:"slow"})})})]})}},7975:function(e,t,i){"use strict";i.d(t,{default:function(){return h}});var r=i(7437),a=i(7138),s=i(6349),n=i(5127),l=i(4484),o=i(2265);let c=e=>{let{items:t,className:i}=e,[c,h]=(0,o.useState)(null);return(0,r.jsx)("div",{className:(0,s.cn)("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",i),children:t.map((e,t)=>(0,r.jsxs)(a.default,{href:null==e?void 0:e.link,className:"relative group  block p-2 h-full w-full",onMouseEnter:()=>h(t),onMouseLeave:()=>h(null),children:[(0,r.jsx)(n.M,{children:c===t&&(0,r.jsx)(l.E.span,{className:"absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl",layoutId:"hoverBackground",initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.15,delay:.2}}})}),(0,r.jsxs)(d,{children:[(0,r.jsx)(u,{children:e.title}),(0,r.jsx)(m,{children:e.description})]})]},null==e?void 0:e.link))})},d=e=>{let{className:t,children:i}=e;return(0,r.jsx)("div",{className:(0,s.cn)("rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",t),children:(0,r.jsx)("div",{className:"relative z-50",children:(0,r.jsx)("div",{className:"p-4",children:i})})})},u=e=>{let{className:t,children:i}=e;return(0,r.jsx)("h4",{className:(0,s.cn)("text-zinc-100 font-bold tracking-wide mt-4",t),children:i})},m=e=>{let{className:t,children:i}=e;return(0,r.jsx)("p",{className:(0,s.cn)("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",t),children:i})};var h=function(){return(0,r.jsx)("div",{className:"p-12 bg-gray-900",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h2",{className:"text-base text-teal-600 font-semibold tracking-wide uppercase",children:"FEATURED WEBINARS"}),(0,r.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl",children:"Enhance Your Musical Journey"})]}),(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsx)(c,{items:[{title:"Understanding Music Theory",description:"Dive deep into the fundamentals of music theory and enhance your musical skills.",slug:"understanding-music-theory",isFeatured:!0},{title:"The Art of Songwriting",description:"Learn the craft of songwriting from experienced musicians and songwriters.",slug:"the-art-of-songwriting",isFeatured:!0},{title:"Mastering Your Instrument",description:"Advanced techniques to master your musical instrument of choice.",slug:"mastering-your-instrument",isFeatured:!0},{title:"Music Production Essentials",description:"Get started with music production with this comprehensive overview.",slug:"music-production-essentials",isFeatured:!0},{title:"Live Performance Techniques",description:"Enhance your live performance skills with expert tips and strategies.",slug:"live-performance-techniques",isFeatured:!0},{title:"Digital Music Marketing",description:"Learn how to promote your music effectively in the digital age.",slug:"digital-music-marketing",isFeatured:!0}].map(e=>({title:e.title,description:e.description,link:"/"}))})}),(0,r.jsx)("div",{className:"mt-10 text-center",children:(0,r.jsx)(a.default,{href:"/",className:"px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200",children:"View All webinars"})})]})})}},6617:function(e,t,i){"use strict";i.d(t,{default:function(){return u}});var r=i(7437),a=i(2265),s=i(9754),n=i(6179),l=i(4484),o=i(6349);let c=e=>{var t;let{content:i,contentClassName:c}=e,[d,u]=a.useState(0),m=(0,a.useRef)(null),{scrollYProgress:h}=(0,s.v)({container:m,offset:["start start","end start"]}),g=i.length;(0,n.W)(h,"change",e=>{let t=i.map((e,t)=>t/g);u(t.reduce((i,r,a)=>Math.abs(e-r)<Math.abs(e-t[i])?a:i,0))});let p=["var(--slate-900)","var(--black)","var(--neutral-900)"],x=["linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))","linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))","linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))"],[f,v]=(0,a.useState)(x[0]);return(0,a.useEffect)(()=>{v(x[d%x.length])},[d]),(0,r.jsxs)(l.E.div,{animate:{backgroundColor:p[d%p.length]},className:"h-[30rem] flex justify-center relative space-x-10 rounded-md p-10 overflow-y-auto",ref:m,style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:[(0,r.jsx)("div",{className:"div relative flex items-start px-4",children:(0,r.jsxs)("div",{className:"max-w-2xl",children:[i.map((e,t)=>(0,r.jsxs)("div",{className:"my-20",children:[(0,r.jsx)(l.E.h2,{initial:{opacity:0},animate:{opacity:d===t?1:.3},className:"text-2xl font-bold text-slate-100",children:e.title}),(0,r.jsx)(l.E.p,{initial:{opacity:0},animate:{opacity:d===t?1:.3},className:"text-kg text-slate-300 max-w-sm mt-10",children:e.description})]},e.title+t)),(0,r.jsx)("div",{className:"h-40"})]})}),(0,r.jsx)("div",{style:{background:f},className:(0,o.cn)("hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",c),children:null!==(t=i[d].content)&&void 0!==t?t:null})]})};i(3054);let d=[{title:"Discover Your Sound with Us: A Personal Journey in Music Mastery",description:"Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery."},{title:"Discover Your Sound with Us: A Personal Journey in Music Mastery",description:"Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery."},{title:"Discover Your Sound with Us: A Personal Journey in Music Mastery",description:"Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery."},{title:"Live Feedback & Engagement",description:"Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques."},{title:"Cutting-Edge Curriculum",description:"Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry."},{title:"Limitless Learning Opportunities",description:"With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing."}];var u=function(){return(0,r.jsx)("div",{className:"scroll-bar-hide dark:bg-black ",children:(0,r.jsx)(c,{content:d})})}},4570:function(e,t,i){"use strict";i.d(t,{Button:function(){return h}});var r=i(8646),a=i(7437),s=i(2265),n=i(5282),l=i(6227),o=i(831),c=i(4846),d=i(4484),u=i(6349);function m(){let e=(0,r._)(["translateX(","px) translateY(","px) translateX(-50%) translateY(-50%)"]);return m=function(){return e},e}function h(e){let{borderRadius:t="1.75rem",children:i,as:r="button",containerClassName:s,borderClassName:n,duration:l,className:o,...c}=e;return(0,a.jsxs)(r,{className:(0,u.cn)("bg-transparent relative text-xl  h-16 w-40 p-[1px] overflow-hidden ",s),style:{borderRadius:t},...c,children:[(0,a.jsx)("div",{className:"absolute inset-0",style:{borderRadius:"calc(".concat(t," * 0.96)")},children:(0,a.jsx)(g,{duration:l,rx:"30%",ry:"30%",children:(0,a.jsx)("div",{className:(0,u.cn)("h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",n)})})}),(0,a.jsx)("div",{className:(0,u.cn)("relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",o),style:{borderRadius:"calc(".concat(t," * 0.96)")},children:i})]})}let g=e=>{let{children:t,duration:i=2e3,rx:r,ry:u,...h}=e,g=(0,s.useRef)(),p=(0,n.c)(0);(0,l.p)(e=>{var t;let r=null===(t=g.current)||void 0===t?void 0:t.getTotalLength();r&&p.set(r/i*e%r)});let x=(0,o.H)(p,e=>{var t;return null===(t=g.current)||void 0===t?void 0:t.getPointAtLength(e).x}),f=(0,o.H)(p,e=>{var t;return null===(t=g.current)||void 0===t?void 0:t.getPointAtLength(e).y}),v=(0,c.Y)(m(),x,f);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",className:"absolute h-full w-full",width:"100%",height:"100%",...h,children:(0,a.jsx)("rect",{fill:"none",width:"100%",height:"100%",rx:r,ry:u,ref:g})}),(0,a.jsx)(d.E.div,{style:{position:"absolute",top:0,left:0,display:"inline-block",transform:v},children:t})]})}},6349:function(e,t,i){"use strict";i.d(t,{cn:function(){return s}});var r=i(4839),a=i(6164);function s(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,a.m6)((0,r.W)(t))}},3054:function(){},3179:function(e){"use strict";e.exports=JSON.parse('{"r":[{"id":1,"title":"Guitar Fundamentals","slug":"guitar-fundamentals","description":"Learn the basics of playing guitar with our comprehensive beginner\'s course.","price":99.99,"instructor":"John Doe","isFeatured":true,"image":"/courses/guitar.jpg"},{"id":2,"title":"Piano for Beginners","slug":"piano-for-beginners","description":"Start your musical journey with foundational piano skills taught by expert instructors.","price":109.99,"instructor":"Jane Smith","isFeatured":false,"image":"/courses/piano.jpg"},{"id":3,"title":"Advanced Vocal Techniques","slug":"advanced-vocal-techniques","description":"Enhance your singing with advanced vocal techniques for intermediate to advanced learners.","price":119.99,"instructor":"Emily Johnson","isFeatured":true,"image":"/courses/vocalist.jpg"},{"id":4,"title":"Drumming Mastery","slug":"drumming-mastery","description":"Master the drums with our comprehensive course covering all skill levels.","price":129.99,"instructor":"Mike Brown","isFeatured":false,"image":"/courses/drumming.jpg"},{"id":5,"title":"Jazz Improvisation","slug":"jazz-improvisation","description":"Learn the art of jazz improvisation with this course designed for all levels.","price":139.99,"instructor":"Chris Davis","isFeatured":false,"image":"/courses/jazz.jpg"},{"id":6,"title":"Music Production Fundamentals","slug":"music-production-fundamentals","description":"Dive into music production with this introductory course on the basics of sound engineering and mixing.","price":149.99,"instructor":"Alex Wilson","isFeatured":true,"image":"/courses/music-prod.jpg"},{"id":7,"title":"Songwriting Essentials","slug":"songwriting-essentials","description":"Learn the essentials of songwriting to express your musical creativity.","price":159.99,"instructor":"Samantha Miller","isFeatured":false,"image":"/courses/song-writing.jpg"},{"id":8,"title":"Electronic Music Production","slug":"electronic-music-production","description":"Create compelling electronic music with our course designed for beginners to advanced users.","price":169.99,"instructor":"Luke Harris","isFeatured":true,"image":"/courses/music-prod.jpg"},{"id":9,"title":"Classical Music History","slug":"classical-music-history","description":"Explore the rich history of classical music from its origins to the present day.","price":179.99,"instructor":"Grace Lee","isFeatured":false,"image":"/courses/classical-music.jpg"},{"id":10,"title":"Blues Guitar Techniques","slug":"blues-guitar-techniques","description":"Discover the techniques of blues guitar to add soul and depth to your playing.","price":189.99,"instructor":"Ethan Moore","isFeatured":true,"image":"/courses/blues.jpg"}]}')}},function(e){e.O(0,[6,868,484,648,138,441,971,23,744],function(){return e(e.s=9894)}),_N_E=e.O()}]);