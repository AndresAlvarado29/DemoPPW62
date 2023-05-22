import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPutComponent } from './contacto-put.component';

describe('ContactoPutComponent', () => {
  let component: ContactoPutComponent;
  let fixture: ComponentFixture<ContactoPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoPutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
