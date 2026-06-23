import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private httpClient = inject(HttpClient);

  // TODO: Add catchError operator
  get(url: string) {
    return this.httpClient.get(url)
      .pipe(
        tap((res: any) => {console.log(res)})
      );
  }
}
