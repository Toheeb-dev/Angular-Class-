import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwChildComponent } from './veiw-child.component';

describe('VeiwChildComponent', () => {
  let component: VeiwChildComponent;
  let fixture: ComponentFixture<VeiwChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiwChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
