/**
 * 게시판 조회
 * @param {int} IDX IDX 값
 * @param {String} SEARCH 검색 대상
 * @param {String} STX 검색어
 * @param {int} PAGE_NO 페이지 번호
 * @param {int} PAGE_SIZE 페이지 갯수
 */
export async function InitPage(IDX, SEARCH, STX, PAGE_NO, PAGE_SIZE) {
    const params = {
      VIEW_CODE: '',
      PREF: 'NOLIGO',
      METHOD_CODE: 'SITE_BOARD',
      DATA: {
        IDX: IDX,
        SEARCH: SEARCH,
        STX: STX,
        PAGE_NO: PAGE_NO,
        PAGE_SIZE: PAGE_SIZE,
      },
    }
    return await ng_core.common.getData(params);
}

/**
 * 문의 하기 
 * @param {Object} data 객체 형태로 데이터가 넘어 온다
 * @param {string} data.METHOD 실행 종류(A: 추가, U: 수정, D: 삭제)
 * @param {int} data.IDX IDX
 * @param {string} data.PLATFORM NoligoFW, SI
 * @param {string} data.COMPANY 회사명
 * @param {string} data.NAME 이름
 * @param {string} data.NUMBER 연락처
 * @param {string} data.EMAIL 이메일
 * @param {string} data.TITLE 제목
 * @param {string} data.CONTENT 내용
 */
export async function MakeInquiry(data) {
    const params = {
      VIEW_CODE: '',
      PREF: 'NOLIGO',
      METHOD_CODE: 'SITE_CONTACT',
      DATA: {
        METHOD: data.METHOD,
        IDX: data.IDX,
        PLATFORM: data.PLATFORM,
        COMPANY: data.COMPANY,
        NAME: data.NAME,
        NUMBER: data.NUMBER,
        EMAIL: data.EMAIL,
        TITLE: data.TITLE,
        CONTENTS: data.CONTENTS
      },
    }
    const rtn = await ng_core.common.saveData(params);
    return rtn.data.rtndata;
} 

/**
 * 숫자만 입력
 * @param {Object} target text 입력 대상
 */
export function OnlyNumber(target){
  if(target.target.value.replace(/[^0-9]/g, "") == "") target.target.placeholder = "숫자만 입력해 주시길 바랍니다!"
  target.target.value = target.target.value.replace(/[^0-9]/g, "");
}

/**
 * 메일형식 체크
 * @param {Object} email email 입력 대상
 */
export function isValidEmail(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(email);
}

/**
 * input type이 Text인 엘리먼트에 빈 값이 있는지 체크
 * @param {Object} inputs input 엘리먼트
 */
export function checkInputText(inputs){

  const emptyInputs = {};
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].className.includes("TextCheck") && inputs[i].value.trim() === '') {
      emptyInputs['title'] = inputs[i].title;
      emptyInputs['result'] = true;
    }
    // 하나라도 입력이 되어있지 않다면 return
    if(Object.keys(emptyInputs).length > 0){
      return emptyInputs;
    }
  }

  return emptyInputs['result'] = false;
}
