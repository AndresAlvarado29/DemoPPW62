import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarreraComponent } from './lista-carrera.component';

describe('ListaCarreraComponent', () => {
  let component: ListaCarreraComponent;
  let fixture: ComponentFixture<ListaCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
