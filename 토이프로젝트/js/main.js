// ------------------------------- 기본정보 -------------------------------
// ------------------------------- EMAIL -------------------------------
$(function(){
    // 1 아이디 입력 확인
    // 1_1 이메일 옵션 값 중 x가 아닌 경우
    // 옵션값들을 배열에 담아 담긴 배열값으로 조건문 작성
    $("#emailSelect").click(function(){
        let emailarr = document.getElementsByClassName("emailOp");
        let emailarr2 = [];
        for(let j = 0; j<emailarr.length; j++){
            emailarr2.push(emailarr[j].value);
            if(emailarr2 != 'x'){
                $("#emailLevelResult").html("아이디를 입력해 주세요.");
            }else{
                $("#emailLevelResult").html("");
            }
        };
    });   
    // 1_2 수신동의 체크한다면
    $("#radioBtn").click(function(){
        if($(this).is(":checked")){
            $("#emailLevelResult").html("아이디를 입력해 주세요.");   
        }
    });
    
    // 이메일 입력 확인
    // 아이디 입력값이 있을때 셀렉트박스 클릭시
    $("#emailSelect").click(function(){
        let emailarr = document.getElementsByClassName("emailOp");
        let emailarr2 = [];
        for(let j = 0; j<emailarr.length; j++){
            emailarr2.push(emailarr[j].value);

            let valEmail = $("#userId").val();

            if(valEmail != null || valEmail != undefined || valEmail != " "){ // 아이디값이 없을시
                if(emailarr2 == 'x'){ // 옵션값이 x일 경우
                    $("#emailLevelResult").html("메일 주소를 선택해 주세요.");
                }else{
                    $("#emailLevelResult").html("이메일 수신동의여부를 선택해 주세요.");  
                }
            }
        };
    });

    // 이메일 옵션값 인풋박스에 넣기
    $("#emailSelect").click(function(){
        $("#emailSelect").change(function(){
            $("#email_in").val($("#emailSelect option:selected").html());
        });
    });

    // 아이디값 입력, 이메일선택, 수신동의체크 -> 멘트x
});

// ------------------------------- 생년월일 ------------------------------- 
$(function(){
    let arrDate = document.getElementsByClassName("birth_js");
    let birthResult =[];
    for(let i = 0; i<arrDate.length;i++){
        birthResult.push(arrDate[i].value);
    }
    console.log(birthResult);
    console.log(birthResult[0]);

    // 년도 클릭시 숫자가 아니라면
    $("#birth_y").click(function(){
        if($(birthResult[0]) == Number){
            
        } else{
            $("#birthLevelResult").html("생년월일 연도를 선택해 주세요.");

        }
    });

    // - 연도가 선택되지 않았다면 (생년월일 연도를 선택해 주세요.)
    // 연도의 값이 "년도"라면
    // $("#birth_y").click(function(){
    //     if($("#birth_y").val("year").prop("selected","true")){
    //         $("#birthLevelResult").html("생년월일 연도를 선택해 주세요.");
    //     }

    // });
    // - 월이 선택되지 않았다면 (생년월일 월을 선택해 주세요.)
    // $("#birth_m")
    
    // - 일수가 선택되지 않았다면 (생년월일 일을 선택해 주세요.)
    // $("#birth_d")

});





// ------------------------------- 회원가입 약관 -------------------------------
$(function(){
    // 전체약관 동의 클릭시 하단 모든 체크박스 클릭
    // 전체약관 동의 클릭
    $(document).on("click","#totalCheck",function(){     
        // 하단 모든 체크박스들 체크
        if($("#totalCheck").is(":checked")){
            $("input[name=sCheck]").prop("checked",true);
        }else{
            $("input[name=sCheck]").prop("checked",false);
        }
    });

    // 하나라도 체크 해제 시 전체약관동의 언체크
    $(document).on("click","input[name=sCheck]",function(){
        if($("input[name=sCheck]:checked").length == $("input[name=sCheck]").length){
            $("#totalCheck").prop("checked",true);
        }else{
            $("#totalCheck").prop("checked",false);
        }
    });
});

// ------------------------------- 유효성검사 -------------------------------

function validate(){
    let userPwd = document.getElementById("userPwd");

    let regExpEmail = /^\S$/;
    let regExpPwd = /^\S{8,}&/;
    let regExpName = /^[ㄱ-ㅎㅏ-ㅣ가-힣]{2,5}$/;
    let regExpPhone1 = /^\d{3,4}&/;
    let regExpPhone2 = /^\d{4}&/;

    if(!regExpPwd.test(userPwd)){
        document.getElementById("userPwd_text").html("비밀번호를 8자 이상 입력해 주세요.");
        return false;
    }


}
