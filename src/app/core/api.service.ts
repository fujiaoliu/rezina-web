import { Injectable, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import { Http, URLSearchParams } from '@angular/http';


@Injectable()
export class APIService {
	private url = 'http://127.0.0.1:31218';
	constructor(private http: Http, @Inject(DOCUMENT) private document) {
		this.url = 'http://'+ this.document.location.host;
	 }

  httpGet(uri: string, query_string={}) {
    let params: URLSearchParams = new URLSearchParams();
    for (let key in query_string) {
      params.set(key, query_string[key]);
    }
    return this.http.get(this.url + uri, {search: params})
     .map((r) => r.json())
     .catch(this.handleError);
    }

  getMaster() {
		return this.httpGet('/master');
	}

  getSettings() {
		return this.httpGet('/settings');
  }

	getWorker() {
		return this.httpGet('/worker');
	}

	getWorkerDetail(ip: string) {
		return this.httpGet('/worker/' + ip);
	}

	getTypology() {
		return this.httpGet('/typology');
	}

	getTypologyDetail(name: string) {
		return this.httpGet('/typology/' + name);
	}

	killMaster() {
		return this.httpGet('/killmaster');
	}

	killWorker() {
		return this.httpGet('/killworker');
	}

	killOneWorker(ip:string) {
		return this.httpGet('/killworker/' + ip);
	}

  typoAction(name, query_string) {
		return this.httpGet('/typoaction/' + name, query_string);
  }

	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}
}
