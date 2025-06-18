import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { ConfigService } from '../service/config.service';

@Injectable({ providedIn: 'root' })
export class FormState {
  private _formValues: WritableSignal<Record<string, string>> = signal({});
  readonly formValues: Signal<Record<string, string>> = this._formValues;

  constructor(private configService: ConfigService) {
    const config = this.configService.config();

    config?.Fields?.forEach((field) => {
      if (field.Type === 'Text' && field.ID) {
        this._formValues.update((values) => ({
          ...values,
          [field.ID as string]: '',
        }));
      }
    });
  }

  updateValue(id: string, value: string): void {
    this._formValues.update((values) => ({ ...values, [id]: value }));
  }

  getValue(id: string): string {
    return this._formValues()[id] || '';
  }

  parseAlert(template: string): string {
    return template.replace(/\${([^}]+)}/g, (_, key) => this.getValue(key));
  }
}
