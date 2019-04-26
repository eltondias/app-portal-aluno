import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { createRequestOption } from './request-util';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  public resourceUrl =  environment.URL_API  + 'curso';
  constructor(protected http: HttpClient) {}
  
  getCurso(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/', { params: options, observe: 'response' });
  }
}
