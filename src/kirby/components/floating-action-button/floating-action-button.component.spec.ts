import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import * as ionic from '@ionic/angular';
import { By } from '@angular/platform-browser';

import { FloatingActionButtonComponent } from './floating-action-button.component';

describe('FloatingActionButtonComponent', () => {
  let component: FloatingActionButtonComponent;
  let fixture: ComponentFixture<FloatingActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingActionButtonComponent, MockComponent(ionic.IonFabButton)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isFloating', () => {
    it('should be floating by default', () => {
      expect(component.isFloating).toEqual(true);
    });

    it('should render medium fab when size property has changed', () => {
      component.isFloating = false;
      fixture.detectChanges();
      var el = fixture.debugElement.query(By.directive(ionic.IonFabButton));
      expect(el.classes['not-floating']).toBeTruthy();
    });
  });

  describe('shadows', () => {
    it('should have a shadow by default', () => {
      expect(component.showShadow).toBeTruthy();
    });

    it('should render a shadow by default', () => {
      var el = fixture.debugElement.query(By.directive(ionic.IonFabButton));
      expect(el.classes['no-shadow']).not.toBeTruthy();
    });
  });

  describe('disabled', () => {
    it('should not be disabled by default', () => {
      expect(component.disabled).not.toBeTruthy();
    });

    it('should not be rendered as disabled by default', () => {
      var el = fixture.debugElement.query(By.directive(ionic.IonFabButton));
      expect(el.componentInstance.disabled).not.toBeTruthy();
    });

    it('should be rendered as disabled when disabled is set to true', () => {
      component.disabled = true;
      fixture.detectChanges();
      var el = fixture.debugElement.query(By.directive(ionic.IonFabButton));
      expect(el.componentInstance.disabled).toBeTruthy();
    });
  });
});
