import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-settings-popover',
  templateUrl: './settings-popover.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../../assets/styles/components/popover.components.scss',]
})
export class SettingsPopoverComponent {
  @Output() addOrganizationClicked = new EventEmitter<void>();
  @Output() confirmClicked = new EventEmitter<void>();
  onConfirmClicked():boolean {
    this.confirmClicked.emit();
    return false;
  }

  onClickAddOrganization(): boolean {
    this.addOrganizationClicked.emit();
    return false;
  }

}
