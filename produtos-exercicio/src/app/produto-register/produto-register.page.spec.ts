import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoRegisterPage } from './produto-register.page';

describe('ProdutoRegisterPage', () => {
  let component: ProdutoRegisterPage;
  let fixture: ComponentFixture<ProdutoRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
