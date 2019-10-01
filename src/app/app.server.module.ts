import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UniversalInterceptor} from './universal-interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({

  imports: [
    FlexLayoutModule
  ],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UniversalInterceptor,
    multi: true
  }],
})
export class AppServerModule {}