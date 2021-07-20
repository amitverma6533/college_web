import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStdComponent } from './update-std.component';

describe('UpdateStdComponent', () => {
  let component: UpdateStdComponent;
  let fixture: ComponentFixture<UpdateStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
