window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
    const upBtn = this.document.getElementsByClassName('scroll-up-btn')[0];
    upBtn.classList.toggle('active', window.scrollY > 500);    
});

const {ref, reactive} = Vue;
const App = {
    setup(){
        const modelsrc = ref("");
        const openImg = ref(false);
        const openMenu = ref(false);
        const exp = reactive([
            {name:"中原大學碩士班"},
            {name:"憶旺智慧工程師"},
            {name:"中原大學程式設計講師"},
            {name:"Python程式設計家教"},
            {name:"中原大學多媒體程式設計助教"},
            {name:"中原大學Python程式設計助教"},
            {name:"Microsoft Python證照"},
            {name:"中原大學畢業專題第三名"},
            {name:"全國資訊研討會第五名"},
            {name:"中原大學優良課業守護天使"},
            {name:"李紹陽數學輔導老師"},
            {name:"三星samsung活動督導"},
        ])
        const lifeImg = reactive([
            {src:"./images/life1.jpg"},
            {src:"./images/life2.jpg"},
            {src:"./images/life3.jpg"},
            {src:"./images/life4.jpg"},
            {src:"./images/life5.jpg"},
            {src:"./images/life6.jpg"},
            {src:"./images/life7.jpg"},
            {src:"./images/life8.jpg"},
            {src:"./images/life1.jpg"},
            {src:"./images/life2.jpg"},
            {src:"./images/life3.jpg"},
            {src:"./images/life4.jpg"},
            {src:"./images/life5.jpg"},
            {src:"./images/life6.jpg"},
            {src:"./images/life7.jpg"},
            {src:"./images/life8.jpg"},
        ])
        const skills = reactive([
            {name:"HTML",bars:"90%"},
            {name:"CSS",bars:"50%"},
            {name:"JavaScript",bars:"80%"},
            {name:"PHP",bars:"70%"},
            {name:"MySQL",bars:"60%"},
            {name:"Python",bars:"75%"},
        ])
        const worksCard = reactive([
            {imgsrc:"./images/9saio.jpg",
             href:"https://jiousaio.com/",
             title:"九霄空間設計JIOUSAIO",
             content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sunt ipsa quidem",
            },
            {imgsrc:"./images/cst.png",
             href:"https://carboncst.com/",
             title:"臺灣碳材料學會CST",
             content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sunt ipsa quidem",
            },
            {imgsrc:"./images/evone.jpg",
             href:"https://www.evoneic.com/",
             title:"憶旺智慧eVone",
             content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sunt ipsa quidem",
            },
            {imgsrc:"./images/lecture.png",
             href:"https://jiousaio.com/Lecture/",
             title:"中原大學魷魚遊戲",
             content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sunt ipsa quidem",
            },
            {imgsrc:"./images/9.jpg",
             href:"https://jiousaioshop.com/",
             title:"九霄模型",
             content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sunt ipsa quidem",
            },
            {imgsrc:"./images/colorful.jpg",
             href:"https://www.ice-finland.club/",
             title:"冰芬文教",
             content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sunt ipsa quidem",
            },
            
        ])
        const openImgFn = (e)=>{
            openImg.value = !openImg.value;
            modelsrc.value = e.target.src
            
        }
        const openMenuFn = ()=>{
            openMenu.value = !openMenu.value;
        }
        const top = ()=>{
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        const see = ()=>{
            document.body.scrollTop = 700;
            document.documentElement.scrollTop = 700;
        }
        return {openMenu, 
                openMenuFn, 
                lifeImg, 
                skills, 
                worksCard, 
                openImg, 
                openImgFn,
                modelsrc,
                top,
                see,
                exp,};
                
    }
};
Vue.createApp(App).mount("#app");
