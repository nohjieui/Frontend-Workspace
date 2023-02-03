// ------------------------------- 기본정보 -------------------------------
// ------------------------------- EMAIL -------------------------------
$(function () {
    // 1 아이디 입력 확인
    $("#emailSelect").click(function () {
        if ($("#userId").val() != "" && ($("#emailSelect").val() != 'x') && ($("input[name=EMAIL]").is(":checked"))) {
            $("#emailLevelResult").html("");
        } else if ($("#userId").val() == "" && $("#emailSelect").val() != 'x') {
            $("#emailLevelResult").html("아이디를 입력해 주세요.");
            // 1_2 아이디값이 비어있거나 / 이메일 값 x
        } else if ($("#userId").val() != "" && $("#emailSelect").val() != 'x') {
            $("#emailLevelResult").html("이메일 수신동의여부를 선택해 주세요.");
        } else {
            if ($("#userId").val() != "") {
                if ($("#emailSelect").val() == 'x') { // 옵션값이 x일 경우
                    $("#emailLevelResult").html("메일 주소를 선택해 주세요.");
                } else {
                    $("#emailLevelResult").html("이메일 수신동의여부를 선택해 주세요.");
                }
            }
        }
        // 강사님이 짜준 주석코드로 꼭 다시 해보기★★★★★★★★★★★★★★★★★★★★★★
        let valEmailCheck = $("#userId").val() != ""; // true시 아이디입력칸 작성함
        let selectedValueCheck = $("#emailSelect").val() != 'x'; // true일시 이메일 선택함
        let radioCheckdCheck = $("input[name=EMAIL]").is(":checked"); // ture면 체크함 

        if (valEmailCheck && selectedValueCheck && radioCheckdCheck){
            $("#emailLevelResult").html("입력");
        }

        // // 1_1 아이디값이 비어있거나 / 이메일 값이 x가 아니거나
        // if($("#userId").val() == "" && $("#emailSelect").val() != 'x'){
        //     $("#emailLevelResult").html("아이디를 입력해 주세요.");
        // // 1_2 아이디값이 비어있거나 / 이메일 값 x
        // }else if($("#userId").val()!= "" && $("#emailSelect").val()!= 'x'){
        //     $("#emailLevelResult").html("이메일 수신동의여부를 선택해 주세요.");
        // }else{
        //     if($("#userId").val() != ""){
        //         if($("#emailSelect").val() == 'x'){ // 옵션값이 x일 경우
        //             $("#emailLevelResult").html("메일 주소를 선택해 주세요.");
        //         }else{
        //             $("#emailLevelResult").html("이메일 수신동의여부를 선택해 주세요.");  
        //         }
        //     }
        // }   

    });
    // 2 수신동의 체크한다면
    $("input[name=EMAIL]").click(function () {
        if ($("#userId").val() != "" && ($("#emailSelect").val() != 'x') && ($("input[name=EMAIL]").is(":checked"))) {
            $("#emailLevelResult").html("");
        } else if ($("#userId").val() == "") {
            $("#emailLevelResult").html("아이디를 입력해 주세요.");
        }
    });
    $(document).click(function () {
        if ($("#userId").val() != "" &&
            ($("#emailSelect").val() != 'x') &&
            ($("input[name=EMAIL]").is(":checked"))) {
            $("#emailLevelResult").html("");
        }
    })

    // // 아이디값 입력 되있거나
    // // 이메일의 값이 x가 아니거나,
    // // 수신동의 체크상태면
    // // 멘트 x
    // $("#emailLevelResult").change(function(){
    //     if($("#userId").val() != "" && 
    //     ($("#emailSelect").val() != 'x') &&
    //     ($("input[name=EMAIL]").is(":checked"))){
    //         $("#emailLevelResult").html("");   
    //     }
    // });

    // 이메일 옵션값 인풋박스에 넣기
    $("#emailSelect").click(function () {
        $("#emailSelect").change(function () {
            $("#email_in").val($("#emailSelect option:selected").html());
        });
    });
});

// ------------------------------- 이름 ------------------------------- 
$(function () {
    // .onblur() : 사용자가 입력 필드를 떠날 때 자바 스크립트를 실행
    $("#name_js").blur(function () {
        let userName = document.getElementById("name_js").value;
        // let regExpName1 = /^+{2,5}$/;
        let regName = /\w/ig; // 영문자, 숫자, _
        let regNameGap = /^\s/; // 첫글자가 공백

        // 이름값이 비어있거나 공백일경우
        if ($("#name_js").val() == '' || regNameGap.test(userName)) {
            $("#nameLevelResult").html("이름을 입력해 주세요.");
        } else if(regName.test(userName)){
            $("#nameLevelResult").html("이름을 한글로 입력해 주세요.");
        } else if(userName.length < 2 || userName.length > 5){
            $("#nameLevelResult").html("이름을 2자 이상 5자 이하로 입력해 주세요.");
        }
    });
});

// ------------------------------- 비밀번호 ------------------------------- 
$(function () {
    // keyup 이벤트
    // 1. 한글자라도 입력했을 떄 -> 입력값의 길이가 0보다 클때
    // 비밀번호를 8자 이상 입력해 주세요.
    // 2. 8자 이상 입력했을 떄 -> 입력값의 길이가 8이상일때
    // 비밀번호 확인을 위해 다시 한 번 입력해 주세요.
    $("#userPwd").keyup(function(){
        if($("#userPwd").val().length > 0 || $("#userPwd").val().length < 8){
            $("#pwdLevelResult").html("비밀번호를 8자 이상 입력해 주세요.");
        } 
        if($("#userPwd").val().length >= 8){
             $("#pwdLevelResult").html("비밀번호 확인을 위해 다시 한 번 입력해 주세요.");
        }
    });
});


// ------------------------------- 비밀번호 확인 ------------------------------- 



// ------------------------------- 휴대폰 번호 ------------------------------- 
$(function () {

});


// ------------------------------- 생년월일 ------------------------------- 
$(function () {
    $("#birth_y option:selected").val();
    $("#birth_m option:selected").val();
    $("#birth_d option:selected").val();

    $(".birth_js").change(function () {
        // 모든 옵션값이 선택된 경우
        if ($("#birth_d option:selected").val() != '' && $("#birth_m option:selected").val() != '' && $("#birth_y option:selected").val() != '') {
            $("#birthLevelResult").html("");
        }
        else { // 모든 옵션값이 선택되지 않았을 경우
            if ($("#birth_d option:selected").val() == '') {
                $("#birthLevelResult").html("생년월일 일자를 선택해 주세요.");
            }

            if ($("#birth_m option:selected").val() == '') {
                $("#birthLevelResult").html("생년월일 월을 선택해 주세요.");
            }

            if ($("#birth_y option:selected").val() == '') {
                $("#birthLevelResult").html("생년월일 연도를 선택해 주세요.");
            }
        }
    });
});


// ------------------------------- 회원가입 약관 -------------------------------
$(function () {
    // 전체약관 동의 클릭시 하단 모든 체크박스 클릭
    // 전체약관 동의 클릭
    $(document).on("click", "#totalCheck", function () {
        // 하단 모든 체크박스들 체크
        if ($("#totalCheck").is(":checked")) {
            $("input[name=sCheck]").prop("checked", true);
        } else {
            $("input[name=sCheck]").prop("checked", false);
        }
    });

    // 하나라도 체크 해제 시 전체약관동의 언체크
    $(document).on("click", "input[name=sCheck]", function () {
        if ($("input[name=sCheck]:checked").length == $("input[name=sCheck]").length) {
            $("#totalCheck").prop("checked", true);
        } else {
            $("#totalCheck").prop("checked", false);
        }
    });
});


// ------------------------------- 유효성검사 -------------------------------
function validate() {
    let userPwd = document.getElementById("userPwd");

    let regExpEmail = /^\S$/;
    let regExpPwd = /^\S{8,}&/;
    // let regExpName = /^[ㄱ-ㅎㅏ-ㅣ가-힣]{2,5}$/;
    let regExpPhone1 = /^\d{3,4}&/;
    let regExpPhone2 = /^\d{4}&/;

    // if (!regExpPwd.test(userPwd)) {
    //     document.getElementById("userPwd_text").html("비밀번호를 8자 이상 입력해 주세요.");
    //     return false;
    // }




}
