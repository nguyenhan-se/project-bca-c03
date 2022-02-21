import { BasicPageParams } from '/@/api/model/baseModel';

export interface RequestDtoSearchCanBo extends BasicPageParams {
  tenCanBo?: string;
  donViTrucThuoc?: string;
  capBac?: string;
  ngayVaoNganh?: string;
  chuyenMonKyThuat?: string;
  trangThaiCongTac?: string;
}

export interface RequestDtoCreateCanBo {
  username: string;
  fullname: string;
  trangThaiCongTac: string;
  orgCode: string;
  address?: string;
  capBac?: string;
  dateOfBirth?: Date;
  chucVu?: string;
  queQuan?: string;
  chuyenMonKyThuat?: string;
  nghiepVuCongAn?: string;
  phoneNumber?: string;
  trinhDo?: string;
  ngayVaoNganh?: string;
  trinhDoChinhTri?: string;
  ngayGiaNhap?: string;
  lanhDaoTrucTiep?: string;
  userImage?: string;
}

export interface RequestDtoUpdateCanBo extends Partial<Omit<RequestDtoCreateCanBo, 'dateOfBirth'>> {
  userImage: string;
}
