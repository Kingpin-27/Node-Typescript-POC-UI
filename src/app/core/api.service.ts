import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api.response';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = environment.baseUrl + '/emp/';

  constructor(private http: HttpClient) { }

  getOneEmp(parameters: any): Observable<any> {
    return this.http.get<ApiResponse>(this.baseUrl + 'findOne?', { params: parameters, observe: 'response' });
  }

  getAllEmp(parameters: any): Observable<any> {
    return this.http.get<ApiResponse>(this.baseUrl + 'find', { params: parameters, observe: 'response' });
  }

  createEmp(employee: Employee): Observable<any> {
    return this.http.put<ApiResponse>(this.baseUrl, employee);
  }

  updateEmp(employee: Employee): Observable<any> {
    return this.http.post<ApiResponse>(this.baseUrl, employee);
  }

  deleteEmp(parameters: any): Observable<any> {
    return this.http.delete<ApiResponse>(this.baseUrl, { params: parameters, observe: 'response' });
  }

}
