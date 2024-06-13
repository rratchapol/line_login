import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineLoginComponent } from './line-login.component';

describe('LineLoginComponent', () => {
  let component: LineLoginComponent;
  let fixture: ComponentFixture<LineLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
