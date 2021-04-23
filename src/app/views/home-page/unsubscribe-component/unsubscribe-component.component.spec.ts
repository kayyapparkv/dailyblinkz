import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeComponentComponent } from './unsubscribe-component.component';

describe('UnsubscribeComponentComponent', () => {
  let component: UnsubscribeComponentComponent;
  let fixture: ComponentFixture<UnsubscribeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
