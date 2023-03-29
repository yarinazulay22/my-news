import { Injectable } from '@angular/core';
import { UtilityService } from './utulity.service';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly url = 'http://localhost:3001';
  private readonly options = { withCredentials: true };

constructor( private utility: UtilityService, private http :HttpClient) { }


  get<T>(route: string) {
    this.utility.loader(true);

    return this.http.get<T>(`${this.url}/${route}`, this.options).pipe(finalize(() => {
        this.utility.loader(false);
    }));
}

post<T>(route: string, body: any) {
    this.utility.loader(true);

    return this.http.post<T>(`${this.url}/${route}`, body, this.options).pipe(finalize(() => {
        this.utility.loader(false);
    }));
}

put<T>(route: string, body: any) {
    this.utility.loader(true);

    return this.http.put<T>(`${this.url}/${route}`, body, this.options).pipe(finalize(() => {
        this.utility.loader(false);
    }));
}

delete<T>(route: string) {
    this.utility.loader(true);

    return this.http.delete<T>(`${this.url}/${route}`, this.options).pipe(finalize(() => {
        this.utility.loader(false);
    }));
}

}

