import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mosh Hamedani Course';
  public isFavi = true;
  public jayanth = 'Jayanth';
  public obj = {
    'name': 'Jayanth Raj pramuk',
    'email': 'jayanth.rajpramuk@gmail.com'
  };
  public star = '**Batman**';

  public changeFired(isFav) {
    console.log('this is fired from app component: ' + isFav);
  }
}
