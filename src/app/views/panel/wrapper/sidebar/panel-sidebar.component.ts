import {Component, ViewEncapsulation, Output, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel-sidebar',
  templateUrl: './panel-sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../../assets/styles/components/panel/sidebar.component.scss']
})
export class PanelSidebarComponent implements OnInit{
  @Input('user') user:any[] = [];
  @Output() editProfileClicked = new EventEmitter<void>();
  @Output() logoutClicked = new EventEmitter<void>();
  public elements:any[];
  public rate:number = 3;
  public prio_type:string = 'graphical';

  ngOnInit(): void {
    this.elements = [
      {
        name: 'Portfolio',
        state: 'expanded',
        type: 'organization',
        hide: false,
        locked: true,
        rate: 3,
        level: 1
      },
      {
        name: 'Company',
        state: 'expanded',
        type: 'company',
        hide: false,
        locked: true,
        rate: 2,
        level: 2
      },
      {
        name: 'Program',
        state: 'expanded',
        type: 'program',
        hide: false,
        locked: true,
        rate: 4,
        level: 3
      },
      {
        name: 'Strategy 1',
        state: 'expanded',
        type: 'strategy',
        hide: false,
        locked: true,
        rate: 4,
        level: 4
      },
      {
        name: 'Initiative 1-1',
        state: 'expanded',
        type: 'initiative',
        hide: false,
        locked: true,
        rate: 2,
        level: 5
      },
      {
        name: 'Initiative 1-2',
        state: 'expanded',
        type: 'initiative',
        hide: false,
        locked: true,
        rate: 1,
        level: 5
      },
      {
        name: 'Initiative 1-3',
        state: 'expanded',
        type: 'initiative',
        hide: false,
        locked: true,
        rate: 1,
        level: 5
      },
      {
        name: 'Strategy 2',
        state: 'expanded',
        type: 'strategy',
        hide: false,
        locked: true,
        rate: 4,
        level: 4
      },
      {
        name: 'Initiative 2-1',
        state: 'expanded',
        type: 'initiative',
        hide: false,
        locked: true,
        rate: 4,
        level: 5
      },
      {
        name: 'Initiative 2-2',
        state: 'expanded',
        type: 'initiative',
        hide: false,
        locked: true,
        rate: 3,
        level: 5
      },
      {
        name: 'Initiative 2-3',
        state: 'expanded',
        type: 'initiative',
        hide: false,
        locked: true,
        rate: 3,
        level: 5
      },
      {
        name: 'Strategy 3',
        state: 'expanded',
        type: 'strategy',
        hide: false,
        locked: true,
        rate: 5,
        level: 4
      },
      {
        name: 'Initiative 3-1',
        state: 'expanded',
        type: 'initiative',
        hide: false,
        locked: true,
        rate: 1,
        level: 5
      },
      {
        name: 'Initiative 3-2',
        state: 'expanded',
        type: 'initiative',
        hide: false,
        locked: true,
        rate: 2,
        level: 5
      },
      {
        name: 'Initiative 3-3',
        state: 'expanded',
        type: 'initiative',
        hide: false,
        locked: true,
        rate: 4,
        level: 5
      }
    ];
  }

  onExpandCollapseClick(i:number) :void {
    if (this.elements[i].state === 'expanded') {
      this.elements[i].state = 'collapsed';
    } else {
      this.elements[i].state = 'expanded';
    }
    let level = this.elements[i].level, j = i + 1;
    while (level < this.elements[j].level && j < this.elements.length) {
      this.elements[j].hide = !this.elements[j].hide;
      j++;
    }
  }

  onClick(): boolean {
    return false;
  }

  onClickEditProfile(): boolean {
    this.editProfileClicked.emit();
    return false;
  }
  onClickLogout(): boolean {
    console.log('logout clicked');
    this.logoutClicked.emit();
    return false;
  }
}
