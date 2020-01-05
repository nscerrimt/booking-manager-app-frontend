import { NgModule } from '@angular/core';
import { 
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCommonModule,
  MatIconModule, 
  MatMenuModule,
  MatTableModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatStepperModule, 
  MatSlideToggleModule,
  MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatCommonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatStepperModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatCommonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatStepperModule  ]
})
export class MaterialModule { }
