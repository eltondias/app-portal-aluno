import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { createRequestOption } from './request-util';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  public resourceUrl =  environment.URL_API  + 'semestre';
 
  constructor(protected http: HttpClient) {}
  
  getSemestres(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/periodos', { params: options, observe: 'response' });
  }
}
