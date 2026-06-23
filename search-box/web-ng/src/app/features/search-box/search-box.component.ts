import { Component, viewChild, ViewChild, ElementRef, inject, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { HttpService } from '../../core/services/http.service';

@Component({
  selector: 'app-search-box',
  imports: [],
  template: `
    <div>
      <input #inputSearch type="text" aria-label="Search" placeholder="Search people..." (input)="handleInputSearch($event, inputSearch)" />
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

  ngOnDestroy() {
    this.handleInputSearch$.complete(); // Avoiding any mem leak
  }

  handleInputSearch(evt: Event, inputSearchTemplateRef: any) {
    const value = this.inputSearchQuery()?.nativeElement.value;

    console.group("Getting input val in 4 different ways | Recommendation Ranking");
    console.log(`Using template ref: ${inputSearchTemplateRef.value}`);
    console.log(`Using view child signal fn: ${this.inputSearchQuery()?.nativeElement.value}`);
    console.log(`Using view child decorator: ${this.inputSearchDecorator.nativeElement.value}`);
    console.log(`Using event target: ${(evt.target as HTMLInputElement).value}`);
    console.groupEnd();

    if (value?.trim() === '') {
      this.resultSearch.set([]);
      return;
    }

    this.handleInputSearch$.next(this.inputSearchQuery()?.nativeElement.value || '');
  }
}
