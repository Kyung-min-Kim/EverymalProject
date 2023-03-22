let opend = [false, false];
let hover_sw = [true, true];
$(function () {
  $("#hos_bar").click(function () {
    if (opend[1]) {
      $("#second").stop(1).animate(
        {
          left: "-82%",
        },
        1000
      );
      // back
      $("#third").stop(1).animate(
        {
          left: "-88%",
        },
        1000
      );
      // back
      opend[0] = false;
      opend[1] = false;
      hover_sw[0] = true;
      hover_sw[1] = true;
    } else if (opend[0]) {
      $("#second").stop(1).animate(
        {
          left: "-82%",
        },
        1000
      );
      // back
      opend[0] = false;
      hover_sw[0] = true;
      hover_sw[1] = true;
    }
  });
  $("#eme_bar").click(function () {
    $(this).stop(true).animate(
      {
        width: "5.55vh",
        right: "0px",
      },
      1000
    );
    if (!opend[0]) {
      $("#second").stop(1).animate(
        {
          left: "0%",
        },
        1000
      );
      // back
      opend[0] = true;
      hover_sw[0] = false;
    } else if (opend[0]) {
      $("#third").stop(1).animate(
        {
          left: "-88%",
        },
        1000
      );
      // back
      opend[1] = false;
      hover_sw[1] = true;
    }
  });
  $("#qna_bar").click(function () {
    $("#qna_bar").stop(true).animate(
      {
        width: "5.55vh",
      },
      1000
    );
    if (opend[0]) {
      $("#third").stop(1).animate(
        {
          left: "-6%",
        },
        1000
      );
      // back
      opend[0] = true;
      opend[1] = true;
      hover_sw[0] = false;
      hover_sw[1] = false;
    } else if (!opend[0]) {
      $("#third").stop(1).animate(
        {
          left: "-6%",
        },
        1000
      );
      $("#second").stop(1).animate(
        {
          left: "0%",
        },
        1000
      );
      // back
      opend[0] = true;
      opend[1] = true;
      hover_sw[0] = false;
      hover_sw[1] = false;
    }
  });

  $("#eme_bar").hover(
    function () {
      if (hover_sw[0]) {
        if (!opend[0]) {
          $("#second").stop(true).animate(
            {
              left: "-80%",
            },
            700
          );
        }
        $(this).stop(true).animate(
          {
            width: "5.55vh",
            right: "-38px",
          },
          700
        );
      }
    },
    function () {
      if (hover_sw[0]) {
        if (!opend[0]) {
          $("#second").stop(true).animate(
            {
              left: "-82%",
            },
            700
          );
        }
        $(this).stop(true).animate(
          {
            width: "5.55vh",
            right: "0px",
          },
          700
        );
      }
    }
  );
  $("#qna_bar").hover(
    function () {
      if (hover_sw[1]) {
        if (!opend[0]) {
          $("#second").stop(true).animate(
            {
              left: "-80%",
            },
            700
          );
          $("#third").stop(true).animate(
            {
              left: "-86%",
            },
            700
          );
        } else if (!opend[1]) {
          $("#third").stop(true).animate(
            {
              left: "-86%",
            },
            700
          );
        }
        $(this).stop(true).animate(
          {
            width: "152px",
          },
          700
        );
      }
    },
    function () {
      if (hover_sw[1]) {
        if (!opend[0]) {
          $("#second").stop(true).animate(
            {
              left: "-82%",
            },
            700
          );
          $("#third").stop(true).animate(
            {
              left: "-88%",
            },
            700
          );
        } else if (!opend[1]) {
          $("#third").stop(true).animate(
            {
              left: "-88%",
            },
            700
          );
        }
        $(this).stop(true).animate(
          {
            width: "115px",
          },
          700
        );
      }
    }
  );
});
