import { BasicPaginationFetchResult } from '/@/api/model/baseModel';

export interface ResponseDtoCanBo {
  username: String;
  orgCode: String;
  fullname: String;
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

export type ResponseDtoDanhSachCanBo = BasicPaginationFetchResult<ResponseDtoCanBo>;
