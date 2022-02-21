import { defineStore } from 'pinia';

import { getAllDonVi } from '/@/api/app/common/don-vi';
import { store } from '/@/store';
import { DonViInfo } from '/#/store';
import { FLAT_LIST_DON_VI_KEY } from '/@/enums/cacheEnum';
import { Persistent } from '/@/utils/cache/persistent';

interface DonViState {
  listDonVi: DonViInfo;
}

export const useDonViStore = defineStore({
  id: 'don-vi',
  state: (): DonViState => ({
    listDonVi: Persistent.getLocal(FLAT_LIST_DON_VI_KEY) || {},
  }),
  getters: {
    donViByKey: (state) => (key: string) => state.listDonVi[key],
  },
  actions: {
    setFlatListDonVi(listDonVi: DonViInfo) {
      this.listDonVi = listDonVi;
      Persistent.setLocal(FLAT_LIST_DON_VI_KEY, this.listDonVi);
    },
    resetState() {
      this.listDonVi = {};
    },
    async getFlatListDonVi(): Promise<DonViInfo> {
      const data = await getAllDonVi();
      const donViTransform = Object.values(data).reduce<DonViInfo>(
        (pre, currentDonVi) => ({
          ...pre,
          [currentDonVi.code.toString()]: {
            code: currentDonVi.code,
            codeParent: currentDonVi.codeParent,
            mpk: currentDonVi.mpk,
            name: currentDonVi.name,
            status: currentDonVi.status,
          },
        }),
        {},
      );

      this.setFlatListDonVi(donViTransform);
      return donViTransform;
    },
  },
});

export function useDonViStoreWithOut() {
  return useDonViStore(store);
}
