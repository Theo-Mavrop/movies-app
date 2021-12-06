import { BaseDTO } from '../../core/@models/base.model';
import { ScreenDTO } from './screen.model';

export interface CinemaDTO extends BaseDTO{
  screens: ScreenDTO[]
}
