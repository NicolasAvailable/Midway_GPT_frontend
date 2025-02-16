import { TextFieldModule } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  exports: [MatMenuModule, MatDialogModule, TextFieldModule],
})
export class MaterialModule {}
