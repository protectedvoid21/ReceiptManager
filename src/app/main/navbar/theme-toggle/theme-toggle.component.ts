import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
  toggleTheme() {
    const isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
    localStorage.setItem('isDarkTheme', (!isDarkTheme).toString());
    document.documentElement.style.colorScheme = isDarkTheme ? 'light' : 'dark';
  }
}
