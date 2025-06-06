import {
  AfterContentChecked,
  AfterContentInit,
  afterNextRender,
  afterRender,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  effect,
  OnChanges,
  OnInit,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')}`,
    'color: #db0452; font-weight: bold;'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  traditionalProperty = 'Eduardo';
  signalProperty = signal('Eduardo');

  constructor() {
    console.log('Constructor llamado');

    //   setTimeout(() => {
    //     this.signalProperty.set('Pedro Perez');
    //   }, 2000);
    //
  }

  changeTraditionalProperty() {
    this.traditionalProperty = 'Eduardo Villavicencio';
    log(
      'changeTraditionalProperty',
      '	Changes the traditional property value, triggering ngOnChanges and ngDoCheck.'
    );
  }

  changeSignalProperty() {
    this.signalProperty.set('Eduardo Villavicencio Mendez');
    log(
      'changeSignalProperty',
      '	Changes the signal property value, triggering ngOnChanges and ngDoCheck.'
    );
  }

  basicEffect = effect((onCleanup) => {
    log(
      'basicEffect',
      '	Runs every time the component is initialized or updated.'
    );

    onCleanup(() => {
      log(
        'onCleanup',
        '	Cleanup function that runs before the effect is re-run or when the component is destroyed.'
      );
    });
  });

  ngOnInit() {
    log(
      'ngOnInit',
      "	Runs once after Angular has initialized all the component's inputs."
    );
  }

  ngOnChanges() {
    log('ngOnInit', "	Runs every time the component's inputs have changed.");
  }

  ngDoCheck() {
    log(
      'ngOnChanges',
      '	Runs every time this component is checked for changes.'
    );
  }

  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      "	Runs once after the component's content has been initialized."
    );
  }

  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      '	Runs every time this component content has been checked for changes.'
    );
  }

  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      "	Runs once after the component's view has been initialized."
    );
  }

  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      "	Runs every time the component's view has been checked for changes."
    );
  }

  ngOnDestroy() {
    log('ngOnDestroy', '	Runs once before the component is destroyed.');
  }

  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRender',
      '	Runs once the next time that all components have been rendered to the DOM.'
    );
  });

  afterRenderEffect = afterRender(() => {
    log(
      'afterRender',
      '	Runs every time all components have been rendered to the DOM.'
    );
  });
}
