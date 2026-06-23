import { Component } from '@angular/core';
import { MainLogo } from '../../components/main-logo/main-logo';
import { SearchBox } from '../../features/search-box/search-box.component';

@Component({
  selector: 'app-home',
  imports: [MainLogo, SearchBox],
  template: `
  <main class="main">
    <div class="content">
      <div>
        <app-main-logo />
        <h1> Search Box </h1>
        <app-search-box />
      </div>
    </div>
  </main>
  `,
  styles: `
    h1 {
      font-size: 3.125rem;
      color: var(--gray-900);
      font-weight: 500;
      line-height: 100%;
      letter-spacing: -0.125rem;
      margin: 0;
      font-family: var(--app-font-family);
    }

    main {
      width: 100%;
      min-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      box-sizing: inherit;
      position: relative;
    }

    .content {
      display: flex;
      justify-content: space-around;
      width: 100%;
      max-width: 700px;
      margin-bottom: 3rem;
    }

    .content h1 {
      margin-top: 1.75rem;
    }

    @media screen and (max-width: 650px) {
      .content {
        flex-direction: column;
        width: max-content;
      }
    }
  `,
})
export class Home { }
