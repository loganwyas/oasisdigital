import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h4>Example application with multiple modules</h4>
    <about-section></about-section>
    <payroll-search></payroll-search>
    <hr-files-search></hr-files-search>
  `
})
export class AppComponent {}