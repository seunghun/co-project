window.onload = function () {
    //헤더 숨김
    $("#doz_header .new_fixed_header").hide();

    //회원가입 사진 첨부 기능 타이틀 추가

    $("#drop_profile_img2 input").attr("title", "프로필사진 첨부");

    // 게시글 좋아요 버튼들 텍스트 입력

    $(".bt-heart").text("좋아요");
    $(".icon-bubble").text("댓글");
    $(".bt-heart").attr("aria-hidden", "false");
    $(".icon-bubble").attr("aria-hidden", "false");
    $("._fade_link").remove();

    // 아이프레임 처리
    $("#hidden_frame").remove();
    $("#hidden_frame").attr("tabindex", "-1");
    $("#hidden_frame").attr("title", "빈프레임");
};
