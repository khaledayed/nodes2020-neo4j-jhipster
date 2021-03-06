import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IType } from 'app/shared/model/type.model';

type EntityResponseType = HttpResponse<IType>;
type EntityArrayResponseType = HttpResponse<IType[]>;

@Injectable({ providedIn: 'root' })
export class TypeService {
  public resourceUrl = SERVER_API_URL + 'api/types';

  constructor(protected http: HttpClient) {}

  create(type: IType): Observable<EntityResponseType> {
    return this.http.post<IType>(this.resourceUrl, type, { observe: 'response' });
  }

  update(type: IType): Observable<EntityResponseType> {
    return this.http.put<IType>(this.resourceUrl, type, { observe: 'response' });
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<IType>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IType[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
