
import {ref } from 'vue'

export const data = ref([])

export async function initPage() {
    debugger
    const params = {
      VIEW_CODE: '',
      PREF: 'BOARD',
      METHOD_CODE: 'NOLIGO_SITE',
      DATA: {
        PAGE_NO: '1',
        PAGE_SIZE: '15',
      },
    }
    const rtn = await ng_core.common.getData(params);
    data.value = rtn.data.rtndata;
}