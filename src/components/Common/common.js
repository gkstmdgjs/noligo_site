/**
 * 게시판 조회
 * @param {int} IDX IDX 값
 * @param {String} SEARCH 검색 대상
 * @param {String} STX 검색어
 * @param {int} PAGE_NO 페이지 번호
 * @param {int} PAGE_SIZE 페이지 갯수
 */
export async function initPage(IDX, SEARCH, STX, PAGE_NO, PAGE_SIZE) {
    const params = {
      VIEW_CODE: '',
      PREF: 'BOARD',
      METHOD_CODE: 'NOLIGO_SITE',
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
