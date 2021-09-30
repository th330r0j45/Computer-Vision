import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRecComponent } from './image-rec.component';

describe('ImageRecComponent', () => {
  let component: ImageRecComponent;
  let fixture: ComponentFixture<ImageRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
