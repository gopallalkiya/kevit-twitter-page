import { Injectable } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {
constructor(private recaptchaV3Service: ReCaptchaV3Service) {}

  execute(action: string): Observable<string> {
    return this.recaptchaV3Service.execute(action);
  }
}
