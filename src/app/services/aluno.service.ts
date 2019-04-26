import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { createRequestOption } from './request-util';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  public resourceUrl =  environment.URL_API  + 'aluno';
 
  constructor(protected http: HttpClient) {}
  
  login(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/login', { params: options, observe: 'response' });
  }

  loginSiteAntigo(req?: any): Observable<any>  {
    const options = createRequestOption(req);
    return this.http.post<any>('http://201.20.113.123:8000/esamaz/index.php?action=Site.loginSubmit', { params: options, observe: 'response' });
  }

}
