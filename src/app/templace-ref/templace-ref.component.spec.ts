import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaceRefComponent } from './templace-ref.component';

describe('TemplaceRefComponent', () => {
  let component: TemplaceRefComponent;
  let fixture: ComponentFixture<TemplaceRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplaceRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplaceRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
