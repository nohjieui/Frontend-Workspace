// ------------------------------- 기본정보 -------------------------------
// ------------------------------- 생년월일 ------------------------------- 
$(function(){
    let arrDate = document.getElementsByClassName("birth_js");
    let Dateresult =[];
    for(let i = 0; i<arrDate.length;i++){
        Dateresult.push(arrDate[i].value);
    }
    console.log(Dateresult);
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
