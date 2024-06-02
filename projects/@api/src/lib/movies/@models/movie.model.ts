import { BaseDTO } from '../../core/@models/base.model';
import { BaseCreateRequest } from '../../core/@models/base-request.model';

export interface MovieDTO extends BaseDTO {
  runtime?: number;
  actors: string;
  description: string;
  director: string;
}

export interface CRUDMovieRequest extends BaseCreateRequest, MovieDTO {
}

