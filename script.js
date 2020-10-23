var img = ["./images/cat-1.jpg",
    "./images/cat-2.jpg",
    "./images/cat-3.jpg",
    "./images/cat-4.jpg",
    "./images/cat-5.jpg",
    "./images/cat-6.jpg",
    "./images/cat-7.jpg",
    "./images/cat-8.jpg",
    "./images/cat-9.jpg",
    "./images/cat-10.jpg",
    "./images/cat-11.jpg",
    "./images/cat-12.jpg",
    "./images/cat-13.jpg"];
var imgNext =1;
var temp = 400;  //  400ms = 25frames per seconde
var idIntervalChat;
var courir = false;

$('#action').click(
    function (){
        if ( !courir ){
            courir = true;
            console.log('Run-click');
            idIntervalChat = setInterval('changeImage()',100);
        }
    }
);
$('#stop').click(
    function(){
        courir = false;
        console.log('Stop-click');
        clearInterval(idIntervalChat);
    }
);

$('#frame').click(
    function (){
        console.log('frame-click');
        changeImage();
    }
);

function changeImage(){
    $('#cat-run').attr('src', img[imgNext]);
    imgNext ++;
    if (imgNext >= img.length){
        imgNext = 0;
    }
}