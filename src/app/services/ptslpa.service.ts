import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PtslpaService {

  constructor(private http: HttpClient) { }

  getTopHeadLines() {

    return this.http.get<RespuestaToHeadLines>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7e5b01dd7cae4cfba8a099efa6d8efa4')

  }
}
