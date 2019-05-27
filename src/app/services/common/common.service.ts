import { Injectable, Inject, SkipSelf } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { StorageService } from '../storage/storage.service';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl = environment.baseUrl;
  TOKEN = 'TOKEN' ;
  constructor(private http:Http,private localStorage: StorageService) { }
  postApi(url, values = {}) {
    return new Promise((resolve, reject) => {
      this.http.post(
        this.apiUrl + url
        , values
        , { headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }) }

      ).subscribe(res => {
        resolve(res.json());
      }, (err) => {
        let er = JSON.parse(err._body);

        if (err.status == 500) {
          alert('Error (' + err.status + ')' + er.message);
        }
        else if (err.status == 401) {
          alert('Error (' + err.status + ')' + er.message);
        }
        else {
          alert('Error (' + err.status + ')' + er.message);
        }

        reject(err);
      });
    });
  }
  getApi(url) {

    return new Promise((resolve, reject) => {
      this.http.get(
        this.apiUrl + url
        ).subscribe(res => {
        resolve(res.json());
      }, (err) => {
        console.log(err);
        let er = JSON.parse(err._body);

        if (err.status == 500) {
          alert('Error (' + err.status + ')' + er.message);
        }
        else if (err.status == 401) {
          alert('Error (' + err.status + ')' + er.message);
        }
        else {
          alert('Error (' + err.status + ')' + er.message);
        }

        reject(err);
      });
    });
  }

  isLogged(){
    return this.localStorage.getItem(this.TOKEN)!= null;
  }
}
