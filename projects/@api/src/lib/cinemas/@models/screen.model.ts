import { BaseDTO } from '../../core/@models/base.model';
import { BaseCreateRequest, BaseRequest } from '../../core/@models/base-request.model';

export interface ScreenDTO extends BaseDTO {}

export interface ScreenRequest extends BaseRequest {
  cinemaId: string;
}

export interface CreateScreenRequest extends BaseCreateRequest {
  cinemaId: string;
}
