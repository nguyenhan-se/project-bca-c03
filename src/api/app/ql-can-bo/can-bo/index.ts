import { ErrorMessageMode } from '/#/axios';
import { canBoHttp } from '/@/utils/http/axios';

import { ModelCanBo, ModelDanhSachCanBo, SearchParamsCanBo } from './model';
import { ResponseDtoDanhSachCanBo } from './dto';

enum Api {
  Search = '/danh-sach',
  Default = '',
}

export function getCanBo(
  params: { username: string },
  mode: ErrorMessageMode = 'modal',
): Promise<ModelCanBo> {
  return canBoHttp.get<ModelCanBo>(
    {
      url: Api.Search,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export const getDanhSachCanBo = async (
  params?: SearchParamsCanBo,
  mode: ErrorMessageMode = 'modal',
): Promise<ModelDanhSachCanBo> => {
  const res = await canBoHttp.get<ResponseDtoDanhSachCanBo>(
    {
      url: Api.Search,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
  const transform: ModelDanhSachCanBo = {
    ...res,
    result: res.result.map<ModelCanBo>((item) => ({
      fullName: item.fullname,
      userId: item.username,
      orgCode: item.orgCode,
      address: item.address,
      capBac: item.address,
      chucVu: item.address,
      chuyenMonKyThuat: item.chuyenMonKyThuat,
      dateOfBirth: item.dateOfBirth,
      lanhDaoTrucTiep: item.lanhDaoTrucTiep,
      ngayGiaNhap: item.ngayGiaNhap,
      ngayVaoNganh: item.ngayVaoNganh,
      nghiepVuCongAn: item.nghiepVuCongAn,
      phoneNumber: item.phoneNumber,
      queQuan: item.queQuan,
      trangThaiCongTac: item.trangThaiCongTac,
      trinhDo: item.trinhDo,
      trinhDoChinhTri: item.trinhDoChinhTri,
      userImage: item.userImage,
    })),
  };
  return transform;
};
