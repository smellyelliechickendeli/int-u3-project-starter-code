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
let nutleigh=document.querySelector('.nut1-butt');
let nutleigh2=document.querySelector('.nut2-butt');
let yo6Nut = document.querySelector('.yo-6-nut');
let noAttend1 = document.querySelector('.no-attend-storyline-girl');
let yes = document.querySelector('.yes-attend');
let no = document.querySelector('.no-attend');
let noBail = document.querySelector('.no-bail');
let inJail = document.querySelector('.in-jail');
let retry = document.querySelector('.retry');

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

//boy nut's story
nutleigh.addEventListener('click',
    function(){
        nameBoy.style.display='none';
        nameGirl.style.display='none';
        chuzBoy.style.display='none';
        chuzGirl.style.display='none';
        thinkGender.style.display='none';
        yo6Nut.style.display='block';
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
    }
)














// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });