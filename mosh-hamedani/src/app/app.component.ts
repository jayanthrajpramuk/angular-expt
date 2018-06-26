import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mosh Hamedani Course';
  public isFavi = true;
  public jayanth = 'Jayanth u r Awesome';
  public obj = {
    'name': 'Jayanth Raj pramuk',
    'email': 'jayanth.rajpramuk@gmail.com'
  };
  public valFromAppComponent = 'Brazil';
  public winner = 'Argentenia';
  public star = '**Batman**';
  public communicateVal = true;
  public childValue;
  public dynamicVal;

  public justiceLeague = ['Batman', 'Wonder Woman', 'Superman', 'Aquaman', 'Flash'];
 // public justiceLeague = [];
  public changeFired(isFav) {
    console.log('this is fired from app component: ' + isFav);
  }

  public communicate() {
    this.communicateVal = !this.communicateVal;
  }

  public acceptValueFromChild (param) {
      this.childValue = param;
  }

  public dynamicValueFromChildMethod(val) {
    this.dynamicVal = val;
  }

 }
