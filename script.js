/* ==================================================
   手機版選單
================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileNav =
    document.getElementById("mobileNav");


menuButton.addEventListener(
    "click",
    function(){

        mobileNav.classList.toggle(
            "active"
        );

    }
);


/* 點擊手機選單後自動關閉 */

const mobileLinks =
    mobileNav.querySelectorAll("a");


mobileLinks.forEach(
    function(link){

        link.addEventListener(
            "click",
            function(){

                mobileNav.classList.remove(
                    "active"
                );

            }
        );

    }
);



/* ==================================================
   FAQ
================================================== */

const faqItems =
    document.querySelectorAll(
        ".faq-item"
    );


faqItems.forEach(
    function(item){

        const button =
            item.querySelector(
                ".faq-question"
            );


        button.addEventListener(
            "click",
            function(){

                const isActive =
                    item.classList.contains(
                        "active"
                    );


                /* 先全部關閉 */

                faqItems.forEach(
                    function(otherItem){

                        otherItem.classList.remove(
                            "active"
                        );

                    }
                );


                /* 如果原本沒有開啟就打開 */

                if(!isActive){

                    item.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* ==================================================
   首頁分貝動畫

   注意：
   此數字只是網頁展示效果，
   並非真正使用麥克風量測。
================================================== */

const dbNumber =
    document.getElementById(
        "dbNumber"
    );


const soundText =
    document.getElementById(
        "soundText"
    );


const demoValues = [

    {
        db:42,
        text:"安靜室內"
    },

    {
        db:50,
        text:"一般室內環境"
    },

    {
        db:55,
        text:"一般交談"
    },

    {
        db:60,
        text:"日常生活聲音"
    },

    {
        db:58,
        text:"一般交談"
    }

];


let demoIndex = 0;


function changeDemoDB(){

    demoIndex++;

    if(
        demoIndex >=
        demoValues.length
    ){

        demoIndex = 0;

    }


    dbNumber.textContent =
        demoValues[
            demoIndex
        ].db;


    soundText.textContent =
        demoValues[
            demoIndex
        ].text;

}


/* 每3秒變換 */

setInterval(
    changeDemoDB,
    3000
);