import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
urlAObtener: string;
  constructor(private http: HttpClient) {
  this.urlAObtener = environment.urlBack;
  }
  llamame() {
    console.log(this.urlAObtener);
    return this.http.get(this.urlAObtener + 'comments');
  }

}
