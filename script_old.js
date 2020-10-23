var courir = false;
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

$('#action').click(
    function (){
        console.log('Run-click');
        courir = true;
        runingCat();
    }
);
$('#stop').click(
    function(){
        console.log('stop-click');
        courir = false;
    }
);

$('#frame').click(
    function (){
        console.log('frame-click');
        courir = true;
        changeImage();
    }
);

function runingCat(){
    var compt =0;
    while (courir){

        console.log('Boucle currir');
        console.log(compt);
        
        setTimeout(changeImage(), 2000);
        compt ++;
    }
}

function changeImage(){
    if (imgNext >= img.length){
        imgNext = 0;
    }
    $('#cat-run').delay(temp).attr('src', img[imgNext]);
//    $('#cat-run').delay(temp).replaceWith(`<img id="cat-run" src="${img[imgNext]}" alt=""></img>`);
    imgNext ++;
}


