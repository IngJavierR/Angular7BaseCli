import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './services/data.service';
import { ConsumeService } from './services/consume.service';
import { TokenInterceptor } from './interceptors/token.interceptor';

export const APP_PROVIDERS = [
  DataService,
  ConsumeService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
];
