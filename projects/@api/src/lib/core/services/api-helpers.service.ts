import { Inject, Injectable } from '@angular/core';
import { ApiConfig, API_CONFIG } from '../../api.module';


@Injectable()
export class ApiHelpersService {

  constructor(
    @Inject(API_CONFIG) private config: ApiConfig
  ) { }

  createUrl(action: string) {
    return [this.config.baseUrl, action].join('/').toString();
  }
}
