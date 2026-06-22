import { Component, viewChild, ViewChild, ElementRef, inject, signal } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  imports: [],
  template: `
    <div>
      <input #inputSearch type="text" (input)="handleInputSearch($event, inputSearch)"/>
      <ul>
        @for (item of resultSearch(); track $index) {
          <li> {{ item.name }} </li>
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class SearchBox {
  private httpSvc = inject(HttpService);
  private handleInputSearch$ = new Subject<string>();
  @ViewChild('inputSearch') inputSearchDecorator!: ElementRef<HTMLInputElement>;
  inputSearchQuery = viewChild<ElementRef<HTMLInputElement>>('inputSearch');
  resultSearch = signal<any>([]);

  constructor() {
    this.handleInputSearch$
      .pipe(
        filter((arg) => arg !== ' ' && arg.trim() !== ''),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((inputSearch: string) => {
          console.log(`🔎 Input search: ${inputSearch}`);
          return this.httpSvc.get('https://swapi.info/api/people')
            .pipe(map(
              (res) => res.filter((r: { name: string }) => r.name.toLowerCase().includes(inputSearch.toLowerCase()))
            ))
        })
      )
      .subscribe((filteredRes) => {
        this.resultSearch.set(filteredRes);
      });
  }

  handleInputSearch(evt: Event, inputSearchTemplateRef: any) {
    const evtTarget = evt.target as HTMLInputElement;

    console.group("Getting input val in 4 different ways | Recommendation Ranking");
    console.log(`Using template ref: ${inputSearchTemplateRef.value}`);
    console.log(`Using view child signal fn: ${this.inputSearchQuery()?.nativeElement.value}`);
    console.log(`Using view child decorator: ${this.inputSearchDecorator.nativeElement.value}`);
    console.log(`Using event target: ${evtTarget.value}`);
    console.groupEnd();

    this.handleInputSearch$.next(this.inputSearchQuery()?.nativeElement.value || '');
  }
}
