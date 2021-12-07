import { BaseDTO } from '../../core/@models/base.model';
import { BaseCreateRequest } from '../../core/@models/base-request.model';

export interface MovieDTO extends BaseDTO {
  runtime?: number;
}

export interface CreateMovieRequest extends BaseCreateRequest {
  runtime?: number;
}

