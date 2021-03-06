import { NgModule } from '@angular/core';
import { AngularMaterialComboboxComponent } from './angular-material-combobox.component';
import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatTooltipModule } from "@angular/material/tooltip"
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AngularMaterialComboboxComponent],
	imports: [
		CommonModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatAutocompleteModule,
		MatTooltipModule,
		MatIconModule,
		MatButtonModule,
		MatInputModule,
		MatProgressSpinnerModule
	],
	exports: [AngularMaterialComboboxComponent]
})
export class AngularMaterialComboboxModule { }
