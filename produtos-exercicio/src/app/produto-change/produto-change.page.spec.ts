import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoChangePage } from './produto-change.page';

describe('ProdutoChangePage', () => {
  let component: ProdutoChangePage;
  let fixture: ComponentFixture<ProdutoChangePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
