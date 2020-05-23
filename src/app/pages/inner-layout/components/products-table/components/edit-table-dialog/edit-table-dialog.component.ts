import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreateProduct, DeleteProduct, UpdateProduct } from '@app-common/store/products/product.actions';

@Component({
  selector: 'app-edit-table-dialog',
  templateUrl: './edit-table-dialog.component.html',
  styleUrls: ['./edit-table-dialog.component.scss']
})
export class EditTableDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditTableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditTableDialogConfigDTO,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      size: [''],
      price: ['', Validators.pattern(/^(0|[1-9]\d*)?$/)],
    });
    if (this.data.data) {
      this.form.patchValue(this.data.data)
    }
  }

  public save() {
    switch (this.data.event) {
      case 'edit':
        this.store.dispatch(UpdateProduct({
          id: this.data.data.id,
          ...this.form.value
        }));
        break;
      case 'add':
        this.store.dispatch(CreateProduct(this.form.value))
        break;
    }
    this.closeDialog();
  }

  public delete(isAccept: boolean) {
    if (isAccept) {
      this.store.dispatch(DeleteProduct({ id: this.data.data.id }))
    }
    this.closeDialog();
  }

  private closeDialog() {
    this.dialogRef.close();
  }
}
