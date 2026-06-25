// Declare VARIABLES below to save the different divs of your story.
let begin = document.querySelector('.begin');
let reviewTxt = document.querySelector('.review-box')
    reviewTxt.style.display='none';
let openPage = document.querySelector('.open-page');
let primerPagina = document.querySelector('.primer-page');
    let chuzGender = document.querySelector('.chuz-gender'); //reveal txt
    let genderOptions = document.querySelector('.gender-options'); //reveal txt

let boy = document.querySelector('.boy');
let girl = document.querySelector('.girl');
let thinkGender = document.querySelector('.rethink-gender');
    let bbEyes = document.querySelector('.bbeyes'); //reveal txt
    let hihName = document.querySelector('.hihname');//reveal txt BOY

    let bbgEyes = document.querySelector('.bbgeyes'); //reveal txt
    let herhName = document.querySelector('.herhname');//reveal txt GIRL

let nameBoy = document.querySelector('.name-boy');
let nameGirl = document.querySelector('.name-girl');
let chuzBoy = document.querySelector('.chuz-boy');
let chuzGirl = document.querySelector('.chuz-girl');
let nutleigh=document.querySelector('.nut1-butt'); //BOY nutleigh time flies
    let flyingTime2=document.querySelector('.time-flies-boy')
    flyingTime2.style.display='none';
    let boyCheese=document.querySelector('.chees-roller-boy')
    boyCheese.style.display='none';
    let cheeseBoyattend=document.querySelector('.bigday-attend-boy');
    cheeseBoyattend.style.display='none';

let nutleigh2=document.querySelector('.nut2-butt'); //GIRL nutleigh time flies
    let flyingTime=document.querySelector('.time-flies-girl')
    flyingTime.style.display='none';
    let girlCheese=document.querySelector('.chees-roller-girl')
    girlCheese.style.display='none';
    let cheeseGirlattend=document.querySelector('.bigday-attend-girl');
    cheeseGirlattend.style.display='none';


//other stories
let names=[document.querySelector('.ellie-butt'), document.querySelector('.stephanie-butt'), document.querySelector('avantika-butt'), document.querySelector('harold-butt'), document.querySelector('alex-butt')] 


//GIRL NUTLEIGH
let yo6Nut = document.querySelector('.yo-6-nut'); 
    let greatNewsgirl = document.querySelector('.great-news-girl')
        greatNewsgirl.style.display='none';
    let resentGirl = document.querySelector('.resents-girl');
        resentGirl.style.display='none';
    let twenty6Girl = document.querySelector('.twenty6-girl');
        twenty6Girl.style.display='none';
    let worldBestgirl = document.querySelector('.worlds-best-girl');
        worldBestgirl.style.display='none';
    let nutSentencedgirl = document.querySelector('.nut-sentenced-girl');
        nutSentencedgirl.style.display='none';
    let bailHerquest = document.querySelector('.bail-her-quest');
        bailHerquest.style.display='none';

let noAttend1 = document.querySelector('.no-attend-storyline-girl');
let yes = document.querySelector('.yes-attend');
let no = document.querySelector('.no-attend');
    no.style.display='none';
let noBail = document.querySelector('.no-bail');
let inJail = document.querySelector('.in-jail');
let servegirl = document.querySelector('.serve40-girl')
    servegirl.style.display='none';
let retry = document.querySelector('.retry');
let outJail = document.querySelector('.out-jail');
let yesBail = document.querySelector('.yes-bail');
    let lookUpgirl = document.querySelector('.looking-up-girl');
        lookUpgirl.style.display='none';
    let thanksGirl = document.querySelector('.thanksgiving-girl');
        thanksGirl.style.display='none';
    let peanutGirl = document.querySelector('.peanut-girl');
        peanutGirl.style.display='none';
    let retireGirl = document.querySelector('.retirement-girl');
        retireGirl.style.display='none';
    let endBailgirl = document.querySelector('.bail-end-girl');
        endBailgirl.style.display='none';
let retryJail = document.querySelector('.retry-jail-girl')


//BOY NUTLEIGH
let yo6Nut2 = document.querySelector('.yo-6-nut2')
    let greatNewsboy = document.querySelector('.great-news-boy')
        greatNewsboy.style.display='none';
    let resentBoy = document.querySelector('.resents-boy');
        resentBoy.style.display='none';
    let twenty6Boy = document.querySelector('.twenty6-boy');
        twenty6Boy.style.display='none';
    let worldBestboy = document.querySelector('.worlds-best-boy');
        worldBestboy.style.display='none';
    let nutSentencedboy = document.querySelector('.nut-sentenced-boy');
        nutSentencedboy.style.display='none';
    let bailHisquest = document.querySelector('.bail-his-quest');
        bailHisquest.style.display='none'; 

let noAttend2 = document.querySelector('.no-attend-storyline-boy');
let inJail2 = document.querySelector('.in-jail2');
let serveBoy = document.querySelector('.serve40-boy')
    serveBoy.style.display='none';
let yes2 = document.querySelector('.yes-attend2');
let no2 = document.querySelector('.no-attend2');
    no2.style.display='none';
let noBail2 = document.querySelector('.no-bail2');
let retry2 = document.querySelector('.retry2');
let retryJail2 = document.querySelector('.retry-jail-boy')
let outJail2 = document.querySelector('.out-jail2');
let yesBail2 = document.querySelector('.yes-bail2');
    let lookUpboy = document.querySelector('.looking-up-boy');
        lookUpboy.style.display='none';
    let thanksBoy = document.querySelector('.thanksgiving-boy');
        thanksBoy.style.display='none';
    let peanutBoy = document.querySelector('.peanut-boy');
        peanutBoy.style.display='none';
    let retireBoy = document.querySelector('.retirement-boy');
        retireBoy.style.display='none';
    let endBailboy = document.querySelector('.bail-end-boy');
        endBailboy.style.display='none';

//page DISPLAYS
primerPagina.style.display = 'none';
chuzGender.style.display='none';
genderOptions.style.display='none';
hihName.style.display='none';
bbEyes.style.display='none';
herhName.style.display='none';
bbgEyes.style.display='none';
nameBoy.style.display='none';
nameGirl.style.display='none';
chuzBoy.style.display='none';
chuzGirl.style.display='none';
thinkGender.style.display='none';
yo6Nut.style.display='none';
noAttend1.style.display='none';
noBail.style.display='none';
inJail.style.display='none';
retry.style.display='none';
yo6Nut2.style.display='none';
noAttend2.style.display='none';
inJail2.style.display='none';
outJail2.style.display='none';
outJail.style.display='none';
retryJail2.style.display='none';
retryJail.style.display='none';





//BEGINNGING STUFFFFFFF
begin.addEventListener('click', function() {
        openPage.style.display = 'none';
        primerPagina.style.display = 'block';
        setTimeout(() => {
            chuzGender.style.display='block';}, 800)
        setTimeout(() => {
            genderOptions.style.display='block';}, 1800)
    });

girl.addEventListener('click',
    function (){
        primerPagina.style.display='none';
        nameGirl.style.display='block';
        setTimeout(() => {
            bbgEyes.style.display='block';
        }, 400);
        setTimeout(() => {
            herhName.style.display='block'
        }, 1800);
        setTimeout(() => {
            thinkGender.style.display='block';
        }, 2800);    
        setTimeout(() => {
            chuzGirl.style.display='block';
        }, 3400);
    });

    //girl nut 187

boy.addEventListener('click',
    function (){
        primerPagina.style.display='none';
        nameBoy.style.display='block';
        setTimeout(() => {
            bbEyes.style.display='block';
        }, 400);
        setTimeout(() => {
            hihName.style.display='block'
        }, 1800);
        setTimeout(() => {
            thinkGender.style.display='block';
        }, 2500);    
        setTimeout(() => {
            chuzBoy.style.display='block';
        }, 3000); 
    });

thinkGender.addEventListener('click',
    function(){
        primerPagina.style.display='block';
        chuzGender.style.display='block';
        genderOptions.style.display='block';
        nameBoy.style.display='none';
        chuzBoy.style.display='none';
        chuzGirl.style.display='none';
        nameGirl.style.display='none';
        thinkGender.style.display='none';
    });

//everyone else stories


//boy nut's story
nutleigh.addEventListener('click',
    function(){
        nameBoy.style.display='none';
        nameGirl.style.display='none';
        chuzBoy.style.display='none';
        chuzGirl.style.display='none';
        thinkGender.style.display='none';
        yo6Nut2.style.display='block';
        setTimeout(() => {
            flyingTime2.style.display='block';
        }, 500);
        setTimeout(() => {
            girlCheese.style.display='block';
        }, 1600);
        setTimeout(() => {
            cheeseGirlattend.style.display='block';
        }, 2600);
        setTimeout(() => {
            no.style.display='block';
        }, 3500)
    });
    no2.addEventListener('click',
    function(){
        yo6Nut2.style.display='none';
        noAttend2.style.display='block';
        noBail2.style.display='inline';
    });

noBail2.addEventListener('click',
    function(){
        noAttend2.style.display='none';
        inJail2.style.display='block'
    });

retry2.addEventListener('click',
    function(){
        openPage.style.display='block';
        inJail2.style.display='none';
    });

yesBail2.addEventListener('click', 
    function (){
        noAttend2.style.display = 'none';
        outJail2.style.display = 'block';
        retryJail2.style.display='block';
    });

retryJail2.addEventListener('click',
    function(){
        openPage.style.display='block';
        inJail2.style.display='none';
        retryJail2.style.display='none';
        outJail2.style.display='none';
    });





    //GIRL NUT story
nutleigh2.addEventListener('click',
    function(){
        nameBoy.style.display='none';
        nameGirl.style.display='none';
        chuzBoy.style.display='none';
        chuzGirl.style.display='none';
        thinkGender.style.display='none';
        yo6Nut.style.display='block';
        setTimeout(() => {
            flyingTime.style.display='block';
        }, 500);
        setTimeout(() => {
            girlCheese.style.display='block';
        }, 1600);
        setTimeout(() => {
            cheeseGirlattend.style.display='block';
        }, 2600);
        setTimeout(() => {
            no.style.display='block';
        }, 3500)
    });

no.addEventListener('click',
    function(){
        yo6Nut.style.display='none';
        noAttend1.style.display='block';
        setTimeout(() => {
            greatNewsgirl.style.display='block';
        }, 500);
        setTimeout(() => {
            resentGirl.style.display='block';
        }, 1800);
        setTimeout(() => {
            twenty6Girl.style.display='block';
        }, 3000);
        setTimeout(() => {
            worldBestgirl.style.display='block';
        }, 4000);
        setTimeout(() => {
            nutSentencedgirl.style.display='block';
        }, 5100);
        setTimeout(() => {
            bailHerquest.style.display='block';
        }, 7900);
        noBail.style.display='inline';

    });

noBail.addEventListener('click',
    function(){
        noAttend1.style.display='none';
        inJail.style.display='block';
        setTimeout(() => {
            servegirl.style.display='block';
        }, 1000);
        setTimeout(() => {
            retry.style.display='block';
        }, 1800);
    });

retry.addEventListener('click',
    function(){
        openPage.style.display='block';
        inJail.style.display='none';
    });

yesBail.addEventListener('click', 
    function (){
        noAttend1.style.display = 'none';
        outJail.style.display = 'block';
        setTimeout(() => {
            lookUpgirl.style.display='block';
        }, 600);
        setTimeout(() => {
            thanksGirl.style.display='block';
        }, 1800);
        setTimeout(() => {
            peanutGirl.style.display='block';
        }, 3400);
        setTimeout(() => {
            retireGirl.style.display='block';
        }, 4900);
        setTimeout(() => {
            retryJail.style.display='block';
            endBailgirl.style.display='block';
        }, 5900);
    });

retryJail.addEventListener('click',
    function(){
        openPage.style.display='block';
        inJail.style.display='none';
        retryJail.style.display='none';
        outJail.style.display='none';
    });
















// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });