$(document).ready(function() {

    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";

    function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function() {
        scrolling = false;
    }, animTime);
    };

    function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
    };

    function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
    };

    $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
    } else { 
        navigateDown();
    }
    });

    $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
        navigateUp();
    } else if (e.which === 40) {
        navigateDown();
    }
    });

    });

// for loading screen

$(window).on("load", () =>{
    $('.load-wrapper').fadeOut("slow");
});

// for animation text
word1 = document.querySelector('.word1');
word2 = document.querySelector('.word2');

var word1 = [word1.innerHTML],
part,
i = 0,
offset = 0,
len = word1.length,
forwards = true,
skip_count = 0,
skip_delay = 15,
speed = 100;

var word2 = [word2.innerHTML],
part,
i = 0,
offset = 0,
len = word1.length,
forwards = true,
skip_count = 0,
skip_delay = 15,
speed = 100;

var wordflick1 = function () {
setInterval(function () {
if (forwards) {
  if (offset >= word1[i].length) {
    ++skip_count;
    if (skip_count == skip_delay) {
      forwards = false;
      skip_count = 0;
    }
  }
}
else {
  if (offset == 0) {
    forwards = true;
    i++;
    offset = 0;
    if (i >= len) {
      i = 0;
    }
  }
}
part1 = word1[i].substr(0, offset);
if (skip_count == 0) {
  if (forwards) {
    offset++;
  }
  else {
    offset--;
  }
}
$('.word1').text(part1);
},speed);
};
var wordflick2 = function () {
setInterval(function () {
if (forwards) {
  if (offset >= word2[i].length) {
    ++skip_count;
    if (skip_count == skip_delay) {
      forwards = false;
      skip_count = 0;
    }
  }
}
else {
  if (offset == 0) {
    forwards = true;
    i++;
    offset = 0;
    if (i >= len) {
      i = 0;
    }
  }
}
part2 = word2[i].substr(0, offset);
if (skip_count == 0) {
  if (forwards) {
    offset++;
  }
  else {
    offset--;
  }
}
$('.word2').text(part2);
},speed);
};

$(document).ready(function () {
wordflick1();
});
$(document).ready(function () {
wordflick2();
});
// for scroll android
view.setOnTouchListener(new OnTouchListener() {

    private long startClickTime;

    @Override
    public boolean onTouch(View view, MotionEvent event) {

        if (event.getAction() == MotionEvent.ACTION_DOWN) {

            startClickTime = System.currentTimeMillis();

        } else if (event.getAction() == MotionEvent.ACTION_UP) {

            if (System.currentTimeMillis() - startClickTime < ViewConfiguration.getTapTimeout()) {

                // Touch was a simple tap. Do whatever.

            } else {

                // Touch was a not a simple tap.

            }

        }

        return true;
    }

});
