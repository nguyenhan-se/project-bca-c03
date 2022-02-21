import { BasicPageParams, BasicPaginationFetchResult } from '/@/api/model/baseModel';

export interface SearchParamsCanBo extends BasicPageParams {
  tenCanBo?: string;
  donViTrucThuoc?: string;
  capBac?: string;
  ngayVaoNganh?: string;
  chuyenMonKyThuat?: string;
  trangThaiCongTac?: string;
}

export interface ModelCanBo {
  userId: String;
  orgCode: String;
  fullName: String;
  address?: String;
  capBac?: String;
  chucVu?: String;
  chuyenMonKyThuat?: String;
  lanhDaoTrucTiep?: String;
  ngayGiaNhap?: String;
  ngayVaoNganh?: String;
  nghiepVuCongAn?: String;
  phoneNumber?: String;
  queQuan?: String;
  trangThaiCongTac?: String;
  trinhDo?: String;
  trinhDoChinhTri?: String;
  userImage?: String;
  dateOfBirth?: Date;
}

export type ModelDanhSachCanBo = BasicPaginationFetchResult<ModelCanBo>;
