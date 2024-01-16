import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiantsComponent } from './studiants.component';

describe('StudiantsComponent', () => {
  let component: StudiantsComponent;
  let fixture: ComponentFixture<StudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudiantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
