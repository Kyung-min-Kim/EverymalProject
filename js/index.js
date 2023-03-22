function init(){
    $("#second").delay(500).animate({
        left : "-82%"
    },900);
    $("#third").delay(500).stop(1).animate({
        left : "-88%",
    },400);
    setTimeout(function(){
        $(".emergency").css({
            display : "none"
        });
        $(".petTaxi").css({
            display : "none"
        });
        $(".chatBox").css({
            display : "none"
        });
    }, 1000);
}

let opend=[false,false];
let hover_sw=[true,true,false];
$(function(){
    $("#hos_bar").click(function(){
        $("#eme_bar").stop(true).animate({
            width : "6%",
            right : "0%"
        },700);
        $("#hos_bar .bar_arrow").css({
            display : "none"
        });
        $("#eme_bar .bar_arrow").attr("src", "./img/arrow.png");
        $("#eme_bar .bar_arrow").css({
            display : "block"
        });
        $("#qna_bar .bar_arrow").attr("src", "./img/arrow.png");
        $("#qna_bar .bar_arrow").css({
            display : "block"
        });

        $("#hos_bar .hover_text").css({
            color : "#f2efe9"
        });
        $(this).stop(true).animate({
            width : "6%",
            right : '0px'
        },1000);
        if(opend[1]){
            $("#second").stop(1).animate({
                left : "-82%",
            },1000);
            // back
            // 오류
            $("#third").stop(1).animate({
                left : "-88%",
            },1000);
            // back
            opend[0]=false;
            opend[1]=false;
            hover_sw[0]=true;
            hover_sw[1]=true;
            hover_sw[2]=false;

        }else if(opend[0]){
            $("#second").stop(1).animate({
                left : "-82%",
            },1000);
            // back
            opend[0]=false;
            hover_sw[0]=true;
            hover_sw[1]=true;
            hover_sw[2]=false;
        }
        setTimeout(function(){
            $(".emergency").css({
                display : "none"
            });
            $(".petTaxi").css({
                display : "none"
            });
            $(".chatBox").css({
                display : "none"
            });
        }, 1000);
    });
    $("#eme_bar").click(function(){
        $("#eme_bar .hover_text").css({
            color : "#f2efe9"
        });
        $("#eme_bar .bar_arrow").css({
            display : "none"
        });
        
        $(this).stop(true).animate({
            width : "6%",
            right : '0px'
        },1000);
        $(".emergency").css({
            display : "block"
        });
        $(".petTaxi").css({
            display : "block"
        });
        if(!opend[0]){
            $("#second").stop(1).animate({
                left : "0%",
            },1000);
            // back
            
            $("#hos_bar .bar_arrow").attr("src", "./img/arrow_r.png");
            $("#hos_bar .bar_arrow").css({
                display : "block"
            });
            $("#qna_bar .bar_arrow").attr("src", "./img/arrow.png");
            $("#qna_bar .bar_arrow").css({
                display : "block"
            });
            opend[0]=true;
            hover_sw[0]=false;
            hover_sw[2]=true;
        }else if(opend[0]){
            $("#third").stop(1).animate({
                left : "-88%",
            },1000);
            // back
            $("#qna_bar .bar_arrow").attr("src", "./img/arrow.png");
            $("#qna_bar .bar_arrow").css({
                display : "block"
            });
            opend[1]=false;
            hover_sw[1]=true;
            hover_sw[2]=true;
        }
        setTimeout(function(){
            $(".chatBox").css({
                display : "none"
            });
        }, 1000);
    });
    $("#qna_bar").click(function(){
        $("#qna_bar .bar_arrow").css({
            display : "none"
        });
        $("#eme_bar .bar_arrow").attr("src", "./img/arrow_r.png");
        $("#eme_bar .bar_arrow").css({
            display : "block"
        });
        $("#hos_bar .bar_arrow").attr("src", "./img/arrow_r.png");
        $("#hos_bar .bar_arrow").css({
            display : "block"
        });

        $("#qna_bar .hover_text").css({
            color : "#f2efe9"
        });
        $("#qna_bar").stop(true).animate({
            width : "6%"
        },1000);
        $(".chatBox").css({
            display : "block"
        });
        if(opend[0]){
            $("#third").stop(1).animate({
                left : "-6%",
            },1000);
            // back
            opend[0]=true;
            opend[1]=true;
            hover_sw[0]=false;
            hover_sw[1]=false;
            hover_sw[2]=true;
        }
        else if(!opend[0]){
            $("#third").stop(1).animate({
                left : "-6%",
            },1000);
            $("#second").stop(1).animate({
                left : "0%",
            },1000);
            // back
            opend[0]=true;
            opend[1]=true;
            hover_sw[0]=false;
            hover_sw[1]=false;
            hover_sw[2]=true;
        }
    });


    $("#hos_bar").hover(function(){
        if(hover_sw[2]){
            if(opend[1]){
                $("#eme_bar").stop(true).animate({
                    width : "6%",
                    right : "2%"
                },400);
            }
            $(this).stop(true).animate({
                width : "8%"
            },400);
            $("#hos_bar .hover_text").css({
                color : "aquamarine"
            });
        }
    },function(){
        if(hover_sw[2]){
            if(opend[1]){
                $("#eme_bar").stop(true).animate({
                    width : "6%",
                    right : "0%"
                },400);
            }
            $(this).stop(true).animate({
                width : "6%"
            },400);
            $("#hos_bar .hover_text").css({
                color : "#f2efe9"
            });
        }
    });
    $("#eme_bar").hover(function(){
        
        if(hover_sw[0]){
            if(!opend[0]){
                $("#second").stop(true).animate({
                    left : "-80%"
                },400);
            }
            $(this).stop(true).animate({
                width : "8%",
                right : '-2%'
            },400);
            $("#eme_bar .hover_text").css({
                color : "aquamarine"
            });
        }
        else if(!hover_sw[0]){
            if(opend[1]){
                $(this).stop(true).animate({
                    width : "8%",
                    right : '0%'
                },400);
                $("#eme_bar .hover_text").css({
                    color : "aquamarine"
                });
            }
        }
    },function(){
        
        if(hover_sw[0]){
            if(!opend[0]){
                $("#second").stop(true).animate({
                    left : "-82%"
                },400);
            }
            $(this).stop(true).animate({
                width : "6%",
                right : "0%"
            },400);
            $("#eme_bar .hover_text").css({
                color : "#f2efe9"
            });
        }
        else if(!hover_sw[0]){
            if(opend[1]){
                $(this).stop(true).animate({
                    width : "6%",
                    right : "0%"
                },400);
                $("#eme_bar .hover_text").css({
                    color : "#f2efe9"
                });
            }
        }
    });
    $("#qna_bar").hover(function(){
        if(hover_sw[1]){
            if(!opend[0]){
                $("#second").stop(true).animate({
                    left : "-80%"
                },400);
                $("#third").stop(true).animate({
                    left : "-86%"
                },400);
            }else if(!opend[1]){
                $("#third").stop(true).animate({
                    left : "-86%"
                },400);
            }
            $(this).stop(true).animate({
                width : "8%"
            },400);
            $("#qna_bar .hover_text").css({
                color : "aquamarine"
            });
        }
    },function(){
        if(hover_sw[1]){
            if(!opend[0]){
                $("#second").stop(true).animate({
                    left : "-82%"
                },400);
                $("#third").stop(true).animate({
                    left : "-88%"
                },400);
            }else if(!opend[1]){
                $("#third").stop(true).animate({
                    left : "-88%"
                },400);
            }
            $(this).stop(true).animate({
                width : "6%"
            },400);
            $("#qna_bar .hover_text").css({
                color : "#f2efe9"
            });
        }
    });
});
