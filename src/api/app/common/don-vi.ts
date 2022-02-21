import { ErrorMessageMode } from '/#/axios';
import { cateV1Http, etcCustomsHttp } from '/@/utils/http/axios';

import { SCustomModal } from './model';
import { ResponseDtoDonViTreeInfo } from './dto/response';

enum Api {
  SCustomsAll = '/SCUSTOMS/all',
  treeDonVi = '/auth-org/get-auth-org-child-by-code-parent-to-tree',
}

export function getAllDonVi(mode: ErrorMessageMode = 'modal'): Promise<SCustomModal[]> {
  return etcCustomsHttp.get<SCustomModal[]>(
    {
      url: Api.SCustomsAll,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export const getTreeDonVi = (mode: ErrorMessageMode = 'modal') => {
  return cateV1Http.get<ResponseDtoDonViTreeInfo[]>(
    {
      url: Api.treeDonVi,
    },
    {
      errorMessageMode: mode,
    },
  );
};
