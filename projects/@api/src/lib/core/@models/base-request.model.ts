export interface BaseRequest {
  size?: number;
  page?: number;
  id?: number;
}

export interface BaseCreateRequest {
  name: string;
}

export interface SearchRequest {
  text: string;
}
