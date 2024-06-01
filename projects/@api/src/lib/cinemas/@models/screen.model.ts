import { BaseDTO } from '../../core/@models/base.model';
import { BaseCreateRequest, BaseRequest } from '../../core/@models/base-request.model';
import { MovieDTO } from '@movies-app/api';

export interface ScreenDTO extends BaseDTO {}

export interface ScreenRequest extends BaseRequest {
  cinemaId: number;
}

export interface CreateScreenRequest extends BaseCreateRequest {
  cinemaId: number;
}

export interface ScreeningDTO {
  id: number;
  cinemaName: string;
  screenName: string;
  start: string;
  movie: MovieDTO
}

export interface CreateScreeningRequest {
  cinemaId: number;
  screenId: number;
  movieId: number,
  startTime: string
}

export interface ScreeningRequest extends ScreenRequest {

}
