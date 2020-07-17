import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconComponent } from './icon/icon.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { TabsComponent } from './tabs/tabs.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ToolTipComponent } from './tool-tip/tool-tip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { CardsComponent } from './cards/cards.component';


const routes: Routes = [

  {path:'typography' , component:TypographyComponent},
  {path:'button', component:ButtonComponent},
  {path:'button-toggle' , component:ButtonToggleComponent},
  {path:'icon' , component:IconComponent},
  {path: 'badges', component:BadgesComponent},
  {path:'progress-spinner' , component:ProgressSpinnerComponent},
  {path:'navbar' , component:NavbarComponent },
  {path:'sidenav' , component:SidebarComponent },
  {path:'menu' , component:MenuComponent },
  {path:'list' , component:ListComponent },
  {path:'grid-list' , component:GridListComponent},
  {path:'expansion-panel' , component:ExpansionPanelComponent},
  {path:'tabs' , component:TabsComponent},
  {path:'stepper' , component:StepperComponent},
  {path:'input' , component:InputComponent},
  {path:'select' , component:SelectComponent},
  {path:'autocomplete' , component:AutocompleteComponent},
  {path:'checkbox' , component:CheckboxComponent},
  {path:'radio-button' , component:RadioButtonComponent},
  {path:'date-picker' , component:DatePickerComponent},
  {path:'tool-tip' , component:ToolTipComponent},
  {path:'snackbar' , component:SnackbarComponent},
  {path:'dialog' , component:DialogComponent},
  {path:'data-table' , component:DataTableComponent},
  {path:'virtual-scroll' , component:VirtualScrollComponent},
  {path:'card' , component:CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [TypographyComponent]
