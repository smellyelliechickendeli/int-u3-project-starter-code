// Declare variables below to save the different divs of your story.
let begin = document.querySelector('.begin');
let openPage = document.querySelector('.open-page');
let primerPagina = document.querySelector('.primer-page');
let boy = document.querySelector('.boy');
let girl = document.querySelector('.girl');
let thinkGender=document.querySelector ('.rethink-gender');
let nameBoy = document.querySelector('.name-boy');
let nameGirl = document.querySelector('.name-girl');
let chuzBoy = document.querySelector('.chuz-boy');
let chuzGirl = document.querySelector('.chuz-girl');
let nutleigh=document.querySelector('.nut1-butt'); //boy nutleigh
let nutleigh2=document.querySelector('.nut2-butt'); //girl nutleigh
let names=[document.querySelector('.ellie-butt'), document.querySelector('.stephanie-butt'), document.querySelector('avantika-butt'), document.querySelector('harold-butt'), document.querySelector('alex-butt')] 

//girl nutleigh
let yo6Nut = document.querySelector('.yo-6-nut');
let noAttend1 = document.querySelector('.no-attend-storyline-girl');
let yes = document.querySelector('.yes-attend');
let no = document.querySelector('.no-attend');
let noBail = document.querySelector('.no-bail');
let inJail = document.querySelector('.in-jail');
let retry = document.querySelector('.retry');
let outJail = document.querySelector('.out-jail');
let yesBail = document.querySelector('.yes-bail');
let retryJail = document.querySelector('.retry-jail-girl')

//boy nutleigh
let yo6Nut2 = document.querySelector('.yo-6-nut2')
let noAttend2 = document.querySelector('.no-attend-storyline-boy');
let inJail2 = document.querySelector('.in-jail2');
let yes2 = document.querySelector('.yes-attend2');
let no2 = document.querySelector('.no-attend2');
let noBail2 = document.querySelector('.no-bail2');
let retry2 = document.querySelector('.retry2');
let retryJail2 = document.querySelector('.retry-jail-boy')
let outJail2 = document.querySelector('.out-jail2');
let yesBail2 = document.querySelector('.yes-bail2');

//page displays
primerPagina.style.display = 'none';
nameBoy.style.display='none';
nameGirl.style.display='none';
chuzBoy.style.display='none';
chuzGirl.style.display='none';
thinkGender.style.display='none';
yo6Nut.style.display='none';
noAttend1.style.display='none';
noBail.style.display='none';
inJail.style.display='none';
retry.style.dispaly='none';
yo6Nut2.style.display='none';
noAttend2.style.display='none';
inJail2.style.display='none';
outJail2.style.display='none';
outJail.style.display='none';
retryJail2.style.display='none';
retryJail.style.display='none';

//on clicks
begin.addEventListener('click',
    function () {
        openPage.style.display = 'none';
        primerPagina.style.display = 'block';
    });

girl.addEventListener('click',
    function (){
        primerPagina.style.display='none';
        thinkGender.style.display='block';
        nameGirl.style.display='block';
        chuzGirl.style.display='block';

    });

boy.addEventListener('click',
    function (){
        primerPagina.style.display='none';
        thinkGender.style.display='block';
        nameBoy.style.display='block';
        chuzBoy.style.display='block';
    });

thinkGender.addEventListener('click',
    function(){
        primerPagina.style.display='block';
        nameBoy.style.display='none';
        nameGirl.style.display='none';
        chuzBoy.style.display='none';
        chuzGirl.style.display='none';
        thinkGender.style.display='none';
    });

//everyone else stories
names.addEventListener('click',
    function(){
        if ()
    });

//boy nut's story
nutleigh.addEventListener('click',
    function(){
        nameBoy.style.display='none';
        nameGirl.style.display='none';
        chuzBoy.style.display='none';
        chuzGirl.style.display='none';
        thinkGender.style.display='none';
        yo6Nut2.style.display='block';
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

    //girl nut's story
nutleigh2.addEventListener('click',
    function(){
        nameBoy.style.display='none';
        nameGirl.style.display='none';
        chuzBoy.style.display='none';
        chuzGirl.style.display='none';
        thinkGender.style.display='none';
        yo6Nut.style.display='block';
    });

no.addEventListener('click',
    function(){
        yo6Nut.style.display='none';
        noAttend1.style.display='block';
        noBail.style.display='inline';
    });

noBail.addEventListener('click',
    function(){
        noAttend1.style.display='none';
        inJail.style.display='block'
    });

retry.addEventListener('click',
    function(){
        openPage.style.display='block';
        inJail.style.display='none';
    });

yesBail.addEventListener('click', 
    function (){
        noAttend1.style.display = 'none';
        retryJail.style.display='block';
        outJail.style.display = 'block';
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