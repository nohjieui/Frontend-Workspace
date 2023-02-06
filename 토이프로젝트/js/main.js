let idcheck = false;
$(function () {
    // ------------------------------- 네비바 스크롤 이벤트 -------------------------------
    let lastScrollTop = 0;

    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        // scrollTop() : 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정하는 메소드
        //               즉, 현재 내려온 정도 를 말하며 보통 스크롤 한번에 100px 내려옴

        if (scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀜
            if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
                /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
                $("#top").css("top", "-100px");
            } else {
                $("#top").css("top", "0px");
            }
            lastScrollTop = scrollTop;
        }
    });


    // ------------------------------- 기본정보 -------------------------------
    // ------------------------------- EMAIL -------------------------------
    // 1 아이디 입력 확인
    $("#emailSelect").click(function () {
        let regId = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
        if ($("#userId").val() != "" && ($("#emailSelect").val() != 'x') && ($("input[name=EMAIL]").is(":checked"))) {
            $("#emailLevelResult").html(""); 
            idcheck= true;
        } else if ($("#userId").val() == "" && $("#emailSelect").val() != 'x') {
            $("#emailLevelResult").html("아이디를 입력해 주세요.");
            // 1_2 아이디값이 비어있거나 / 이메일 값 x
        } else if ($("#userId").val() != "" && $("#emailSelect").val() != 'x') {
            if (regId.test($("#userId").val())) {
                $("#emailLevelResult").html("이메일 주소 형식에 맞지 않습니다.");
                idcheck = false;
            } else {
                $("#emailLevelResult").html("이메일 수신동의여부를 선택해 주세요.");
            }
        } else if ($("#userId").val() != "") {
            if ($("#emailSelect").val() == 'x') { // 옵션값이 x일 경우
                $("#emailLevelResult").html("메일 주소를 선택해 주세요.");
            } else {
                $("#emailLevelResult").html("이메일 수신동의여부를 선택해 주세요.");
            }
        }

    });
    $("#userId").keyup(function(){
        let regId = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
        if ($("#userId").val() != "" && ($("#emailSelect").val() != 'x') && ($("input[name=EMAIL]").is(":checked"))) {
            $("#emailLevelResult").html(""); 
            idcheck= true;
        } else if ($("#userId").val() == "" && $("#emailSelect").val() != 'x') {
            $("#emailLevelResult").html("아이디를 입력해 주세요.");
            // 1_2 아이디값이 비어있거나 / 이메일 값 x
        } else if ($("#userId").val() != "" && $("#emailSelect").val() != 'x') {
            if (regId.test($("#userId").val())) {
                $("#emailLevelResult").html("이메일 주소 형식에 맞지 않습니다.");
                idcheck = false;
            } else {
                $("#emailLevelResult").html("이메일 수신동의여부를 선택해 주세요.");
            }
        } else if ($("#userId").val() != "") {
            if ($("#emailSelect").val() == 'x') { // 옵션값이 x일 경우
                $("#emailLevelResult").html("메일 주소를 선택해 주세요.");
            } else {
                $("#emailLevelResult").html("이메일 수신동의여부를 선택해 주세요.");
            }
        }
    })
    // 2 수신동의 체크한다면
    $("input[name=EMAIL]").click(function () {
        if ($("#userId").val() != "" && ($("#emailSelect").val() != 'x') && ($("input[name=EMAIL]").is(":checked"))) {
            $("#emailLevelResult").html("");
            idcheck= true;
        } else if ($("#userId").val() == "") {
            $("#emailLevelResult").html("아이디를 입력해 주세요.");
        } 
    });

    // 모든 조건을 만족했을 경우 페이지내 어디든 클릭시
    $(document).click(function () {
        if ($("#userId").val() != "" &&
            ($("#emailSelect").val() != 'x') &&
            ($("input[name=EMAIL]").is(":checked"))) {
            $("#emailLevelResult").html("");
            idcheck= true;
        }
    })

    // 이메일 옵션값 인풋박스에 넣기
    $("#emailSelect").click(function () {
        $("#emailSelect").change(function () {
            $("#email_in").val($("#emailSelect option:selected").html());
        });
    });


    // ------------------------------- 이름 ------------------------------- 
    // .onblur() : 사용자가 입력 필드를 떠날 때 자바 스크립트를 실행
    $("#name_js").blur(function () {
        let userName = document.getElementById("name_js").value;
        // let regExpName1 = /^+{2,5}$/;
        let regName = /\w/ig; // 영문자, 숫자, _
        let regNameGap = /^\s/; // 첫글자가 공백

        // 이름값이 비어있거나 공백일경우
        if ($("#name_js").val() == '' || regNameGap.test(userName)) {
            $("#nameLevelResult").html("이름을 입력해 주세요.");
        } else if (regName.test(userName)) {
            $("#nameLevelResult").html("이름을 한글로 입력해 주세요.");
        } else if (userName.length < 2 || userName.length > 5) {
            $("#nameLevelResult").html("이름을 2자 이상 5자 이하로 입력해 주세요.");
        } else{
            $("#nameLevelResult").html("");
        }
    });


    // ------------------------------- 비밀번호 ------------------------------- 
    // keyup 이벤트
    // 1. 한글자라도 입력했을 떄 -> 입력값의 길이가 0보다 클때
    // 비밀번호를 8자 이상 입력해 주세요.
    // 2. 8자 이상 입력했을 떄 -> 입력값의 길이가 8이상일때
    // 유효성 조건 만족시
    // 비밀번호 확인을 위해 다시 한 번 입력해 주세요.
    // 유성성 검사 불만족시
    // 영문+숫자, 혹은 영문+특수문자 등 비밀번호를 조합하여 입력해 주세요.
    $("#pwd_js").keyup(function () {
        let userPwd = document.getElementById("pwd_js").value;
        let userPwdCk = document.getElementById("pwdch_js").value;
        let eng = /[a-z]/ig;
        let num = /[0-9]/g;
        let spe = /[`~!@@#$%^&*]/g;
        if (userPwd.length > 0 || userPwd.length < 8) {
            $("#pwdLevelResult").html("비밀번호를 8자 이상 입력해 주세요.");
        }
        if (userPwd.length >= 8) {
            if (eng.test(userPwd) && (num.test(userPwd) || spe.test(userPwd))) {
                $("#pwdLevelResult").html("비밀번호 확인을 위해 다시 한 번 입력해 주세요.");
            } else {
                $("#pwdLevelResult").html("영문+숫자, 혹은 영문+특수문자 등 비밀번호를 조합하여 입력해 주세요.");
            }

        }
    });


    // ------------------------------- 비밀번호 확인 ------------------------------- 
    $("#pwdch_js").keyup(function () {
        let userPwd = document.getElementById("pwd_js").value;
        let userPwdCk = document.getElementById("pwdch_js").value;
        let eng = /[a-z]/ig;
        let num = /[0-9]/g;
        let spe = /[`~!@@#$%^&*]/g;

        // 비밀번호 확인 8자 이상, 유효성 검사 만족시
        if (userPwdCk.length >= 8 && (eng.test(userPwd) && (num.test(userPwd) || spe.test(userPwd)))) {
            if (userPwd == userPwdCk) { // 비밀번호 일치한다면
                $("#pwdLevelResult").html("");
                $("#pwdckFixed").html("");
                return false;
            }
            if (userPwd != userPwdCk) { // 비밀번호 불일치시
                $("#pwdckFixed").html("비밀번호가 일치하지 않습니다.");
                return false;
            }
        }

    });


    // ------------------------------- 휴대폰 번호 ------------------------------- 
    $("#phone1").keyup(function () {
        // onKeyup으로 입력이 된 후 그 값을 체크하여 숫자 이외의 값을 ''으로 replace하는 개념
        let phoneVal1 = $("#phone1").val();
        $("#phone1").val(phoneVal1.replace(/[^0-9]/gi, ''));

        // 자동으로 탭 이동 .focus() 사용
        if (phoneVal1.length == 4) {
            $("#phone2").focus();
        }
    });

    $("#phone2").keyup(function () {
        // onKeyup으로 입력이 된 후 그 값을 체크하여 숫자 이외의 값을 ''으로 replace하는 개념
        let phoneVal2 = $("#phone2").val();

        // 입력 필드를 떠남 .blur() 사용
        if (phoneVal2.length == 4) {
            $("#phone2").blur();
        }
    });

    $(".phone_js").blur(function () {
        let phoneVal1 = $("#phone1").val();
        let phoneVal2 = $("#phone2").val();

        // phone1에서 넘어갈때 빈값이면 휴대폰번호 "입력"
        // 값이 3글자나 4글자가 아니면 휴대폰번호 "확인"
        if (phoneVal1 == '') {
            $("#PhoneLevelResult").html("휴대폰 번호를 입력해 주세요.");
        } else if (phoneVal1.length != 3 || phoneVal1.length != 4) {
            $("#PhoneLevelResult").html("휴대폰 번호를 확인해주세요.");
        }

        if (phoneVal2 == '') {
            $("#PhoneLevelResult").html("휴대폰 번호를 입력해 주세요.");
        } else if (phoneVal2.length != 4) {
            $("#PhoneLevelResult").html("휴대폰 번호를 확인해주세요.");
        }

        // 모든 조건 만족시
        if (phoneVal1 != '' && phoneVal2 != '' && (phoneVal1.length == 3 || phoneVal1.length == 4) && phoneVal2.length == 4) {
            $("#PhoneLevelResult").html("");
        }
    });


    // ------------------------------- 생년월일 ------------------------------- 
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


    // ------------------------------- 회원가입 약관 -------------------------------
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



    // ------------------------------- 회원가입 버튼 클릭 -------------------------------
    //회원가입 버튼 클릭시 이벤트
    /*
    1. **기본정보(input-radio 태그 먼저 실행 → 필수입력정보순)**
    1. 이메일수신동의 체크
    - 미체크시 alert(”이메일 수신동의여부를 선택해 주세요.”)
    - 기본정보 텍스트있는곳으로 페이지업
    2. SMS수신동의 체크
    - 미체크시 alert(”SMS 수신동의여부를 선택해 주세요.”)
    - 기본정보 텍스트있는곳으로 페이지업
    3. 기본정보입력란 필수입력정보들
    - 기본정보 텍스트있는곳으로 페이지업
    2. ****회원 가입약관****
    1. 이용약관
    - 미체크시 alert(”프로스펙스닷컴 이용약관에 동의해주세요.”)
    2. 개인정보 수집 및 이용에 관한 동의
    - 미체크시 alert(”개인정보 수집 및 이용 약관에 동의해주세요.”)
    3. 개인정보의 취급 위탁 동의
    - 미체크시 alert(”개인정보 취급 및 위탁에 동의해주세요.”)
    3. 위의내용 모두 만족시
    1. alert(”입력하신 정보로 회원가입 하시겠습니까?”)
    2. 생년월일 14세미만
    - alert(”14세 미만은 가입할 수 없습니다.”)
    */

    let 회원가입버튼 = document.getElementById("main_btn");
    회원가입버튼.addEventListener("click", function () {

        let 이메일 = [document.getElementById("userId"), document.getElementById("email_in")];
        let 이메일수신동의 = document.getElementsByName("EMAIL");
        let 비밀번호 = [document.getElementById("pwd_js"), document.getElementById("pwdch_js")];
        let 이름 = document.getElementById("name_js");
        let 폰번호 = [document.getElementById("phone1"), document.getElementById("phone2")];
        let sms수신동의 = document.getElementsByName("SMS");
        let 생년월일 = [document.getElementById("birth_y"), document.getElementById("birth_m"), document.getElementById("birth_d"),];
        let 성별 = document.getElementsByName("gender");
        let 가입약관 = document.getElementsByName("sCheck");
        if (!(이메일수신동의[0].checked || 이메일수신동의[1].checked)) {
            alert("이메일 수신동의여부를 선택해 주세요.");
            window.scrollTo(0, 200);
            return;
        }
        if (!(sms수신동의[0].checked || sms수신동의[1].checked)) {
            alert("SMS 수신동의여부를 선택해 주세요.");
            window.scrollTo(0, 200);
            return;
        }
        let regId = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
        if (이메일[0].value == '' || 이메일[1].value == '' || regId.test($("#userId").val())) {
            alert("이메일을 입력하세요");
            window.scrollTo(0, 200);
            return;
        }
        if (비밀번호[0].value == '' || 비밀번호[1].value == '' || 비밀번호[0].value !=비밀번호[1].value) {
            alert("비밀번호를 입력하세요");
            window.scrollTo(0, 200);
            return;
        }
        let userName = document.getElementById("name_js").value;
        let regName = /\w/ig; // 영문자, 숫자, _
        let regNameGap = /^\s/; // 첫글자가 공백
        if (이름.value == '' || regNameGap.test(userName) || regName.test(userName) ||(userName.length < 2 || userName.length > 5)) {
            alert("이름을 입력하세요");
            window.scrollTo(0, 200);
            return;
        }

        let phoneVal1 = $("#phone1").val();
        let phoneVal2 = $("#phone2").val();
        if (폰번호[0].value == '' || 폰번호[1].value == '' || (phoneVal1.length < 3) || phoneVal2.length != 4) {
            alert("휴대폰 번호를 입력해주세요");
            window.scrollTo(0, 200);
            return;
        }
        if (생년월일[0].value == '' || 생년월일[1].value == '' || 생년월일[2].value == '') {
            alert("생년월일을 입력해주세요");
            window.scrollTo(0, 200);
            return;
        }
        if (!(성별[0].checked || 성별[1].checked)) {
            alert("성별을 선택해주세요");
            window.scrollTo(0, 200);
            return;
        }
        if (!가입약관[0].checked) {
            alert("프로스펙스닷컴 이용약관에 동의해주세요.");
            return;
        }
        if (!가입약관[1].checked) {
            alert("개인정보 수집 및 이용에 동의해주세요.");
            return;
        }
        if (!가입약관[2].checked) {
            alert("개인정보 취급 및 위탁에 동의해주세요.");
            return;
        }
        if (!가입약관[3].checked) {
            alert("개인정보 제3자 제공에 동의해주세요");
            return;
        }

        if (new Date().getFullYear() - 생년월일[0].value < 14) {
            alert("14세 미만은 가입할 수 없습니다.")
        } else {
            if (confirm("입력하신 정보로 회원가입 하시겠습니까?")) {
                alert("회원가입되었습니다.");
                location.reload();
            }
        }
    })


    // ------------------------------- top button 이벤트 -------------------------------
    // 1. 특정 위치에서 부터 버튼 나타나고, 사라지게
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $("#top_btn").fadeIn();
        } else {
            $("#top_btn").fadeOut();
        }
    });

    // 2. 버튼 클릭하면 원하는 위치로 이동
    $("#top_btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });
});

