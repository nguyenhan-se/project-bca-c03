export interface BasicPageParams {
  page: number;
  size: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}

export interface BasicPaginationFetchResult<T> {
  result: T[];
  last: boolean;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export type DanhMuc = Record<
  string,
  {
    ma: String;
    ten: String;
    moTa: String;
  }[]
>;
