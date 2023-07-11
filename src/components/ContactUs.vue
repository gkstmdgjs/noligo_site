<script setup>
  /**
	 * file : ContactUs.vue
	 * 설명 : 문의하기
	 */

  import { ref } from 'vue';
  import Swal from 'sweetalert2';
  import { MakeInquiry, OnlyNumber, checkInputText, isValidEmail } from './Common/common'

  const personal = ref('');         // 개인정보
  const platform = ref([]);         // 플랫폼
  const company = ref('');          // 회사명
  const name = ref('');             // 이름
  const number = ref('');           // 전화번호
  const email = ref('');            // 이메일
  const title = ref('');            // 제목
  const contents = ref('');         // 내용

  async function Inquiry(){

    // 개인정보수집에 동의 하지 않았다면 문구를 띄워준다.
    if(!personal.value){
      Swal.fire({
        title: '개인정보수집 동의',
        text: '개인정보수집에 동의 해주시길 바랍니다.',
        icon: 'warning',
        confirmButtonColor: '#4075d7', // confrim 버튼 색깔 지정
        confirmButtonText: '확인', // confirm 버튼 텍스트 지정
      });

      return;
    }

    // 모집 분야에를 선택하지 않았다면 문구를 띄워준다.
    if(platform.value.length == 0){
      Swal.fire({
        title: '문의 분야 선택',
        text: '문의 분야를 선택 해주시길 바랍니다.',
        icon: 'warning',
        confirmButtonColor: '#4075d7', // confrim 버튼 색깔 지정
        confirmButtonText: '확인', // confirm 버튼 텍스트 지정
      });

      return;
    }

    const inputs = document.querySelectorAll('.TextCheck');
    const emptyInputs = checkInputText(inputs);

    // input type Text에 빈 값이 있다면 문구를 띄워준다.
    if(emptyInputs.result){
      Swal.fire({
        title: `${emptyInputs.title} 입력`,
        text: `${emptyInputs.title}을(를) 입력 해주시길 바랍니다.`,
        icon: 'warning',
        confirmButtonColor: '#4075d7', // confrim 버튼 색깔 지정
        confirmButtonText: '확인', // confirm 버튼 텍스트 지정
      });

      return;
    }

    if(isValidEmail(email.value)){
      Swal.fire({
        title: '이메일',
        text: '올바른 이메일 주소를 입력 해주시길 바랍니다.',
        icon: 'warning',
        confirmButtonColor: '#4075d7', // confrim 버튼 색깔 지정
        confirmButtonText: '확인', // confirm 버튼 텍스트 지정
      });

      return;
    }

    const rtn = await MakeInquiry({
      METHOD: 'A',
      IDX: -1,
      PLATFORM: platform.value.join(','),
      COMPANY: company.value,
      NAME: name.value,
      NUMBER: number.value,
      EMAIL: email.value,
      TITLE: title.value,
      CONTENTS: contents.value
    });
    
    if(rtn.P_RETURN_FLAG === 'Y' && rtn.P_RETURN_MSG_CODE === 'MSG0002'){
      Swal.fire({
        title: '문의 완료',
        text: '문의가 정상적으로 완료 되었습니다.',
        icon: 'success',
        confirmButtonColor: '#4075d7', // confrim 버튼 색깔 지정
        confirmButtonText: '확인', // confirm 버튼 텍스트 지정
      });
    }
  }

</script>

<template>
    <!------------------------------ 중단 메인 이미지 부분 ------------------------------------->
    <div class="sub-visual ContactUs">
        <div class="sub-visual__wrapper container">
            <h1 class="sub-visual__title">Contact Us</h1>
        </div>
    </div>
    <!--------------------------------- 메인 부분 ------------------------------------>
    <main class="main py-15 py-lg-20" id="contents">
      <section class="section">
        <div class="container">
          <div class="form_wrap type_b">
              <!---------------------------------------- 개인정보처리방침 ------------------------------------------->
            <ul class="clause_list">
              <li>
                  <h5>개인정보처리방침</h5>
                  <div class="textarea_box_border">
                  <div class="textarea_box">
                      <p style="line-height: 2;">주식회사  HS 솔루션 (이하 '회사' 라고 함)는 정보통신망법, 개인정보보호법, 통신비밀보호법, 전기통신사업법 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호규정을 준수하며, 관련 법령에 의거한 개인정보처리방침을 정하여 고객 권익 보호에 최선을 다하고 있습니다. 본 개인정보처리방침은 회사에서 제공하는 서비스에 적용되며 다음과 같은 내용을 담고 있습니다.</p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">
                      <b>제 1 장 수집하는 개인정보의 항목 및 수집방법</b>
                      </p>
                      <p style="line-height: 2;">제 1 조 (수집하는 개인정보의 항목)</p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>① 회사는 회원 가입, 원활한 고객상담, 각종 서비스의 제공 등을 위해 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.&nbsp;
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>1. 개인 회원가입 필수 항목: 이메일 주소, 비밀번호, 성, 이름, 닉네임
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>② 서비스 이용과정이나 서비스 제공 업무 처리 과정에서 아래와 같은 정보들이 자동으로 생성되거나 추가로 수집될 수 있습니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>- IP Address, 쿠키, 접속 로그, 방문 일시, 서비스 이용 기록, 불량 이용 기록, 결제 기록
                      </p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">제 2 조 (개인정보 수집방법)</p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>① 회사는 다음과 같은 방법으로 개인정보를 수집합니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>1. 홈페이지 수집, 서면 양식, 팩스, 전화, 상담 게시판, 이메일, 오프라인 수집(이벤트 응모, 세미나 참석)
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>2. 협력 회사로부터의 제공
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>3. 생성 정보 수집 툴을 통한 수집
                      </p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">
                      <b>제 2 장 개인정보의 수집 및 이용목적</b>
                      </p>
                      <p style="line-height: 2;">제 3 조 (서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산)</p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>① 콘텐츠 제공, 특정 맞춤 서비스 제공, 청구서 등 발송, 본인인증, 구매 및 요금 결제, 요금 추심, 악성코드 침입방지 등 서비스 제공에 관련한 목적으로 개인정보를 수집합니다.
                      </p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">제 4 조 (회원관리)</p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>① 회원제 서비스 이용 및 제한적 본인 확인제에 따른 본인확인, 개인식별, 불량회원의 부정 이용 방지와 비인가 사용방지, 가입의사 확인, 가입 및 가입횟수 제한, 추후 법정 대리인 본인확인, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달 등 회원관리와 관련된 목적으로 개인정보를 수집합니다.
                      </p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">제 5 조 (신규 서비스 개발 및 마케팅/광고에 활용)</p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>① 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속빈도 파악, 회원의 서비스이용에 대한 통계 등 신규 서비스 개발과 마케팅 활용에 관련된 목적으로 개인정보를 수집합니다.&nbsp;
                      </p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">
                      <b>제 3 장 개인정보의 제공 및 처리 위탁</b>
                      </p>
                      <p style="line-height: 2;">제 6 조 (개인정보의 제공)</p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>① 회사는 고객들의 개인정보를 '제 2 장 개인정보의 수집목적 및 이용목적'서 고지한 범위 내에서 사용하며, 고객의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 고객의 개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>1. 고객들이 사전에 동의한 경우
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>2. 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>3. 고객 사전 동의 후 개인정보 제공이 발생하는 경우
                      </p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">
                      <b>제 4 장 개인정보의 보유 및 이용기간</b>
                      </p>
                      <p style="line-height: 2;">제 7 조 (관련법령에 의한 정보 보유 사유)</p>
                      <p style="line-height: 2;">상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래의 예시와 같습니다.</p>
                      <p style="line-height: 2;">
                      <br>
                      </p>
                      <table style="width: 944px; margin: 20px auto; text-align: center; border-spacing: 0px; border-right-style: solid; border-right-color: #000000; border-bottom-style: solid; border-bottom-color: #000000; color: #444444; font-family: &quot;Noto Sans KR&quot;, &quot;Malgun Gothic&quot;, &quot;맑은 고딕&quot;, &quot;Apple SD Gothic Neo&quot;, Arial, sans-serif, serif; font-size: 16px; white-space: pre-wrap; background-color: #fafafa;">
                          <tbody>
                          <tr style="background: rgb(204, 204, 204);">
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">보관하는 정보</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">보존 이유</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">보존 기간</td>
                              </tr>
                          <tr>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">계약 또는 청약철회 등에 관한 기록</td>
                              <td rowspan="4" style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">전자상거래 등에서의 소비자보호에 관한 법률</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">5년</td>
                              </tr>
                          <tr>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">대금결제 및 재화 등의 공급에 대한 기록</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">5년</td>
                              </tr>
                          <tr>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">소비자의 불만 또는 분쟁 처리에 관한 기록</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">3년</td>
                              </tr>
                          <tr>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">표지/광고에 관한 기록</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">6개월</td>
                              </tr>
                          <tr>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">계약 또는 청약철회 등에 관한 기록</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">전자상거래 등에서의 소비자보호에 관한 법률</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">5년</td>
                              </tr>
                          <tr>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">전자금융 거래에 관한 기록</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">전자금융거래법</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">5년</td>
                              </tr>
                          <tr>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">저작권 신고에 관한 기록</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">저작권법</td>
                              <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">1년</td>
                              </tr>
                          <tr>
                          <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">로그인 기록</td>
                          <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">통신비밀보호법</td>
                          <td style="padding: 0px; border-top-style: solid; border-top-color: #000000; border-left-style: solid; border-left-color: #000000;">3개월</td>
                          </tr>
                      </tbody>
                      </table>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">
                      <b>제 5 장 개인정보 파기절차 및 방법</b>
                      </p>
                      <p style="line-height: 2;">고객의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 회사의 개인정보 파기절차 및 방법은 다음과 같습니다.</p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">제 8 조 (파기절차)</p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>① 고객이 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>② 동 개인정보는 법률에 의한 경우를 제외하고 보유되는 이외의 다른 목적으로 이용되지 않습니다.
                      </p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">제 9 조 (파기방법)</p>
                      <p style="line-height: 2;">① 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</p>
                      <p style="line-height: 2;">② 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">
                      <b>제 6 장 고객 및 법정대리인의 권리</b>
                      </p>
                      <p style="line-height: 2;">제 10 조 (권리 및 행사방법)</p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>① 고객 및 법정대리인은 언제든지 등록되어 있는 자신의 개인정보를 조회, 수정(소속회사의 관리자를 통해 수정) 또는 가입해지를 요청할 수 있습니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>② 고객의 개인정보 조회, 수정을 위해서는 '프로필' 페이지에서 직접 열람, 정정(소속회사의 관리자를 통해 수정)이 가능하며 '일반 설정' 페이지에서 탈퇴가 가능합니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>③ 혹은 개인정보보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>④ 고객이 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제 3 자에게 이미 제공한 경우에는 정정 처리결과를 제 3 자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>⑤ 회사는 고객 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 '제 4 장 개인정보의 보유 및 이용기간'에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
                      </p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">
                      <b>제 7 장 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</b>
                      </p>
                      <p style="line-height: 2;">제 11 조 (쿠키의 정의)</p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>① 회사는 개인화되고 맞춤화 된 서비스를 제공하기 위해서 고객의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>② 쿠키는 웹사이트를 운영하는데 이용되는 서버가 고객의 브라우저에게 보내는 아주 작은 텍스트 파일로 고객 컴퓨터의 하드디스크에 저장됩니다. 이후 고객이 웹 사이트에 방문할 경우 웹 사이트 서버는 고객의 하드 디스크에 저장되어 있는 쿠키의 내용을 읽어 고객의 환경설정을 유지하고 맞춤화 된 서비스를 제공하기 위해 이용됩니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>③ 쿠키는 개인을 식별하는 정보를 자동적/능동적으로 수집하지 않으며, 고객은 언제든지 이러한 쿠키의 저장을 거부하거나 삭제할 수 있습니다.
                      </p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">제 12 조 (쿠키의 사용 목적)</p>
                      <p style="line-height: 2;">고객들이 방문한 회사의 서비스와 웹 사이트들에 대한 방문 및 이용형태, 고객 규모 등을 파악하여 고객에게 최적화된 맞춤형 정보를 제공을 위해 사용합니다.</p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">제 13 조 (쿠키의 설치/운영 및 거부)</p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>① 고객은 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 고객은 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>② 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 회사의 일부 서비스는 이용에 어려움이 있을 수 있습니다.
                      </p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>
                      </p>
                      <p style="line-height: 2;"><b>&nbsp;</b></p>
                      <p style="line-height: 2;">
                      <b>제 8 장 개인정보의 기술적/관리적 보호 대책</b>
                      </p>
                      <p style="line-height: 2;">회사는 고객들의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고 있습니다.</p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">제 14 조 (비밀번호 암호화)</p>
                      <p style="line-height: 2;">회원 비밀번호는 암호화되어 저장 및 관리되고 있어 본인만이 알고 있으며, 개인정보의 확인 및 변경도 비밀번호를 알고 있는 본인에 의해서만 가능합니다.</p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">제 15 조 (해킹 등에 대비한 대책)</p>
                      <p style="line-height: 2;">회사는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 백업하고 있고, 최신 백신프로그램을 이용하여 고객들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있으며, 암호화 통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다. 그리고 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.</p>
                      <p style="line-height: 2;">제 16 조 (개인정보 처리 직원의 최소화 및 교육)</p>
                      <p style="line-height: 2;">회사의 개인정보관련 처리 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 개인정보처리방침의 준수를 항상 강조하고 있습니다.</p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">
                      <b>제 9 장 기타</b>
                      </p>
                      <p style="line-height: 2;">제 17 조 (개인정보보호책임자 및 담당자의 연락처)</p>
                      <p style="line-height: 2;">귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보보호책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 고객들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</p>
                      <p style="line-height: 2;">
                      <br>
                      </p>
                      <p style="line-height: 2;">개인정보 보호책임자</p>
                      <p style="line-height: 2;">이름: 고채현</p>
                      <p style="line-height: 2;">소속: 정보보호팀</p>
                      <p style="line-height: 2;">연락처: 070-4060-6744, walter@jihoosoft.com</p>
                      <p style="line-height: 2;">
                      <span style="white-space:pre"></span>
                      </p>
                      <p style="line-height: 2;">기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>
                      <p style="line-height: 2;">개인정보침해신고센터 (https://privacy.kisa.or.kr / 국번없이 118)</p>
                      <p style="line-height: 2;">대검찰청 사이버수사과 (http://www.spo.go.kr / 국번없이 1301)</p>
                      <p style="line-height: 2;">경찰청 사이버안전국 (http://cyberbureau.police.go.kr / 국번없이 182)</p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">제 18 조 (예외 사항)</p>
                      <p style="line-height: 2;">회사의 인터넷 서비스에 링크되어 있는 웹사이트들이 개인정보를 수집하는 행위에 대해서는 본 '개인정보처리방침'이 적용되지 않음을 알려 드립니다.</p>
                      <p style="line-height: 2;">&nbsp;</p>
                      <p style="line-height: 2;">제 19 조 (고지의 의무)</p>
                      <p style="line-height: 2;">현 개인정보처리방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7 일전부터 홈페이지를 통해 고지할 것입니다. 다만, 개인정보의 수집 및 활용, 제 3 자 제공 등과 같이 고객 권리의 중요한변경이 있을 경우에는 최소 30 일 전에 고지합니다.</p>                    </div>
                  </div>
                  <div class="agree_box mt_10">
                      <input type="checkbox" name="yark" id="yark" title="개인정보처리방침에 동의" class="mr_05" required v-model="personal" :true-value="true" :false-value="false">
                      <label for="yark">개인정보수집에 동의합니다.</label>
                  </div>
              </li>
            </ul>
            <!------------------------------------------- 문의 작성 폼 --------------------------------------------->
            <table class=" table-form-01 type_b">
              <colgroup>
                <col class="col_w">
                <col width="*">
              </colgroup>
              <tbody>
                <!-------------------------------------------------- 문의분야 -------------------------------------------------->
                <tr>
                  <th>문의분야 <span class="text-danger">*</span></th>
                  <td>
                    <table class="table-view-02">
                      <colgroup>
                        <col width="200px">
                        <col width="*">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>통합개발플랫폼</th>
                          <td>
                            <label class="input-label input-label--checkbox">
                              <input type="checkbox" name="info1[]" value="NoligoFW" v-model="platform">
                              <span class="input-label__txt">Noligo FW(노리고 프레임)</span>
                            </label>
                            <label class="input-label input-label--checkbox ml-2">
                              <input type="checkbox" name="info1[]" value="SI" v-model="platform">
                              <span class="input-label__txt">SI</span>
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <!-------------------------------------------------- 회사명 -------------------------------------------------->
                <tr>
                  <th>회사명 <span class="text-danger">*</span></th>
                  <td>
                    <input type="text" title="회사명" maxlength="50" class="w-100 w-md-50 w-lg-25 TextCheck" v-model="company" required>
                  </td>
                </tr>
                <!-------------------------------------------------- 이름/직함 -------------------------------------------------->
                <tr>
                  <th>이름/직함 <span class="text-danger">*</span></th>
                  <td>
                    <input type="text" title="이름/직함" maxlength="50" class="w-100 w-md-50 w-lg-25 TextCheck" v-model="name" required>
                  </td>
                </tr>
                <!-------------------------------------------------- 연락처 -------------------------------------------------->
                <tr>
                  <th>연락처 <span class="text-danger">*</span></th>
                  <td>
                    <input type="text" title="연락처" :maxlength="11" class="w-100 w-md-50 w-lg-25 TextCheck" @input="OnlyNumber" placeholder="- 없이 숫자만 입력 (0101234567)"  v-model="number" required>
                  </td>
                </tr>
                <!-------------------------------------------------- 이메일 -------------------------------------------------->
                <tr>
                  <th>이메일 <span class="text-danger">*</span></th>
                  <td>
                    <input type="email" title="이메일" class="w-100 w-md-50 w-lg-25 TextCheck" chk="email_check" placeholder="@ 포함해서 입력 (aaa@bbb.com)" v-model="email" required>
                  </td>
                </tr>
                <!-------------------------------------------------- 제목 -------------------------------------------------->
                <tr>
                  <th>제목 <span class="text-danger">*</span></th>
                  <td>
                    <input type="text" title="제목" maxlength="100" class="input_for TextCheck" v-model="title" required>
                  </td>
                </tr>
                <!-------------------------------------------------- 내용 -------------------------------------------------->
                <tr>
                  <th>내용 <span class="text-danger">*</span></th>
                  <td>
                    <textarea type="textarea" title="문의내용" class="area_for ckeditor TextCheck" v-model="contents" required></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="board_btn_bx text_center mt_30">
              <button class="btn-border-01 py-3 px-15" @click="Inquiry">문의하기</button>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>