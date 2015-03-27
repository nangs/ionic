import {bootstrap} from 'angular2/core';
import {Component, Template} from 'angular2/angular2';
import {View} from 'ionic2/components/view/view';
import {Content} from 'ionic2/components/content/content';
import {Icon} from 'ionic2/components/icon/icon';


@Component({ selector: '[ion-app]' })
@Template({
  url: 'main.html',
  directives: [View, Content, Icon]
})
class IonicApp {
  constructor() {
    console.log('IonicApp Start')
  }
}

bootstrap(IonicApp)
