import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],
})
export class AppComponent {
  // fields specified in component classes are available in according html
  title = 'Shopping List:';
  shopping_list_items = [];

  constructor() {
    this.makeRequest().then(() => console.log(this.shopping_list_items));
  }

  // performs a request to /shopping_list which is forwarded to the express server at localhost:3000/shopping_list (cf. proxy.conf.json)
  public async makeRequest() {
    this.shopping_list_items = await fetch('/shopping_list').then((res) =>
      res.json()
    );
  }
}
