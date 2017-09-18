
$(window).on("scroll", function() {
  if($(window).scrollTop() > 50 ) {
    $(".nav_container").addClass("active");
  } else {
    $(".nav_container").removeClass("active");
  }
});

$(".breakdown-click").click(function() {
  $(".breakdown-title, .breakdown-container").show("slow");
  $(".breakdown-click").fadeOut();
  $("html, body").delay(150).animate({
    scrollTop: $(".breakdown-grid-container").offset().top}, "slow");
});

$("#reel-scroll").click(function() {
  $("html, body").delay(150).animate(({scrollTop: -70 + $(".reel-title").offset().top}),"slow");
});

/* image grid start */
var imgGrid = $(".work-grid .cell img");
var modalImg = $("#img01");
var modal = $("#myModal");

imgGrid.click(function(){
  const regex = /\w\.(png)/g;
  const str = this.src;
  const subst = '.jpg';
  const result = str.replace(regex, subst);
  modal.css("display","block");
  modalImg.attr("src", result);
});

modal.click(function(){
  modal.css("display","none");
});

modal.children().click(function(e) {
  e.stopPropagation();
});

/* image grid end */

/* 3D Work Dynamic Load start */

var classroomImgs = ['../../images/3D_Art/Classroom/render02.png',
                     '../../images/3D_Art/Classroom/render03.png',
                     '../../images/3D_Art/Classroom/render04.png'
];

var dreamhouseImgs = [
  '../../images/3D_Art/Dreamhouse/Fullview/house1.png',
  '../../images/3D_Art/Dreamhouse/Fullview/house2.png',
  '../../images/3D_Art/Dreamhouse/Fullview/house3.png',
  '../../images/3D_Art/Dreamhouse/Fullview/house4.png'
];

var heliosImgs = [
  '../../images/3D_Art/Helios/helios1.png',
  '../../images/3D_Art/Helios/helios2.png',
  '../../images/3D_Art/Helios/helios3.png',
  '../../images/3D_Art/Helios/helios4.png',
  '../../images/3D_Art/Helios/helios5.png'
];

var isometricImgs = [
  '../../images/3D_Art/Isometric/render3.png',
  '../../images/3D_Art/Isometric/render4.png',
  '../../images/3D_Art/Isometric/render5.png'
];

function heliosGen() {
  var heliosContent= "<h2>Helios Mod Project</h2><p>This was the final assignment for our last semester of school. As on of the game artists, I modeled and textured the three booths within the level. I also built many of the props such as the food, hats and playing cards</p><ul><li>PROGRAM USED:</li><li>MODELING:<span> 3DS Max and Zbrush</span></li><li>TEXTURING:<span> Ndo, Photoshop, Paint Tool SAI</span></li><li>RENDERING, LIGHTING, AND EFFECTS: <span>Unreal Engine</span></li></ul>";
  var heliosVid='<div id="contentframe" class="video-container"><iframe src="https://www.youtube.com/embed/wxZqosxnwEA?ecver=2" frameborder="0" allowfullscreen></iframe></div>';
  for (var i = 0, j = heliosImgs.length; i < j; i++) {
    $("#slideshow").prepend('<div class="mySlides fade"> <img src=' +heliosImgs[i]+ '> <a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a></div>');
  };

  $(".slide-content").append(heliosContent).append(heliosVid);
};

function isometricGen() {
  var isometricContent = "<h2>3D Handpainted Isometric House</h2><p>This was a little modeling and texturing exercise that we had to do back in school. We had to recreate a concept given to us using limited polygon count. It is modeled and hand painted by me.</p><ul><li>PROGRAM USED:</li><li>MODELING:<span> 3DS Max</span></li><li>TEXTURING:<span> Photoshop, Paint Tool SAI</span></li><li>RENDERING, LIGHTING, AND EFFECTS: <span>3DS Max</span></li></ul>";
  for (var i = 0, j = isometricImgs.length; i < j; i++) {
    $("#slideshow").prepend('<div class="mySlides fade"> <img src=' +isometricImgs[i]+ '> <a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a></div>');
  };

  $(".slide-content").append(isometricContent);
};

function dreamhouseGen() {
  var dreamhouseContent = "<h2>Tom Robinson's Dream House</h2><p>This is a personal project that I decided to work on that is based on <a href='https://www.artstation.com/artwork/dream-house-118293ca-bf01-4ed0-80be-78f5baaf28bb' class='pinklink' target='_blank'>Tom Robinson's really cute dream house concept</a></p><ul><li>PROGRAM USED:</li><li>MODELING:<span> 3DS Max</span></li><li>TEXTURING:<span> Photoshop, Paint Tool SAI</span></li><li>RENDERING, LIGHTING, AND EFFECTS: <span>Unreal Engine</span></li></ul>"
  for (var i = 0, j = dreamhouseImgs.length; i < j; i++) {
    $("#slideshow").prepend('<div class="mySlides fade"> <img src=' +dreamhouseImgs[i]+ '> <a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a></div>');
  };
    $(".slide-content").append(dreamhouseContent);
}

function classroomGen() {
  var classroomContent = "<h2>Classroom</h2><p>This is just a quick exercise I decided to do in my spare time to work on my hard surface modeling skills.</p><ul><li>PROGRAM USED:</li><li>MODELING:<span> 3DS Max</span></li><li>RENDERING:<span> 3DS Max</span></li></ul>"

  for (var i = 0, j = classroomImgs.length; i < j; i++) {
    $("#slideshow").prepend('<div class="mySlides fade"> <img src=' +classroomImgs[i]+ '> <a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a></div>');
  };

  $(".slide-content").append(classroomContent);
};

/* Starts page with classroom content loaded */


dreamhouseGen();


$(".image-gallery-container").on('click', function() {
  $(".image-gallery-container").removeClass("active-tab");
  $(this).addClass("active-tab");

  var galleryID = $(this).children("a").attr("id");
    $("#slideshow, .slide-content").empty();
    switch (galleryID) {
    case "classroom":
    classroomGen();
    break;

    case "dreamhouse":
    dreamhouseGen();
    break;

    case "helios":
    heliosGen();
    break;

    case "isometric":
    isometricGen();
    break;
  }

  $("#slideshow .mySlides:first-child").css({"display":"block"})
});

/* Carousel Code */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
};

function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
};


$(".prev, .next").click(function() {
  $("html, body").animate({
    scrollTop: $(".slide-content p").offset().top}, "slow");
});

/* Carousel Code end */

/*if ($(".image-gallery div").hasClass("active-tab")) {
  var galleryID = ;
  $(".slide-content").html(galleryID);
  /*switch (galleryID) {
    case "classroom":
    classroomGen();
    break;

    case "dreamhouse":
    dreamhouseGen();
    break;

    case "helios":
    heliosGen();
    break;

    case "isometric":
    isometricGen();
    break;
  }*/

/*var docFrag = document.createDocumentFragment();
  classroomImgs.forEach( function( url, index, originalArray ) {
  var img = document.createElement('img');
  img.src = url;
  docFrag.appendChild(img);
});

*/


/* 3D Work Dynamic Load End */




/* VIMEO api call for current time
$(function(){
    var iframe = $('#player1')[0],
        player = $f(iframe),
        status = $('.status');

// When the player is ready, add listeners for pause, finish, and playProgress
    player.addEvent('ready', function() {
        status.text('ready');

        player.addEvent('pause', onPause);
        player.addEvent('finish', onFinish);
        player.addEvent('playProgress', onPlayProgress);
    });

  // Call the API when a button is pressed
    $('button').bind('click', function() {
        player.api($(this).text().toLowerCase());
    });

    function onPause(id) {
        status.text('paused');
    }

    function onFinish(id) {
        status.text('finished');
    }

    function onPlayProgress(data, id) {
        status.text(data.seconds + 's played');
        if(data.seconds > 10) {
          status.text('OVER 10');
        }
    }
});

*/
