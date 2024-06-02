export interface BaseResponse<T> {
  data: T[];
  items: number;
  pages: number;
}
