import { ErrorMessageMode } from '/#/axios';
import { canBoHttp } from '/@/utils/http/axios';

import { DanhMuc } from '../../model/baseModel';

export * from './can-bo';

export function getDanhMucQlCanBo(
  params: { username: string },
  mode: ErrorMessageMode = 'modal',
): Promise<DanhMuc> {
  return canBoHttp.get<DanhMuc>(
    {
      url: '/danh-muc/danh-sach',
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
