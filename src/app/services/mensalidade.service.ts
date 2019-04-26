import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { createRequestOption } from './request-util';

@Injectable({
  providedIn: 'root'
})
export class MensalidadeService {

  public resourceUrl =  environment.URL_API  + 'pagamento';

  constructor(protected http: HttpClient) {}
  
  getMensalidadesPorPeriodo(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/periodo', { params: options, observe: 'response' });
  }
}

