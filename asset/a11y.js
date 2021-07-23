window.onload = function () {
    //헤더 숨김
    $("#doz_header .new_fixed_header").hide();

    //회원가입 사진 첨부 기능 타이틀 추가

    $("#drop_profile_img2 input").attr("title", "프로필사진 업로드");

    // 게시글 좋아요 버튼들 텍스트 입력

    $(".bt-heart").text("좋아요");
    $(".icon-bubble").text("댓글");
    $(".bt-heart").attr("aria-hidden", "false");
    $(".icon-bubble").attr("aria-hidden", "false");

    // 아이프레임 처리
    $("#hidden_frame").remove();
    $("#hidden_frame").attr("tabindex", "-1");
    $("#hidden_frame").attr("title", "빈프레임");

    // 건너뛰기 버튼 추가

    // 타이틀 추가
    var pathname = $(location).attr("pathname");

    switch (pathname) {
        case "/site_join_agree":
            $("title").text("이용약관");
            break;
        case "/login":
            $("title").text("조합원 로그인");
            break;

        case "/site_join":
            $("title").text("회원가입");
            break;
    }
};
// 건너뛰기 버튼 추가
$("#doz_header_wrap").before("<a href='#main' class='skipLink'>본문 바로가기</a>");

$(".section_first").attr("id", "main");
$(".section_first").attr("tabindex", "0");

$(".skipLink").click(function () {
    $(".section_first").focus();
});
