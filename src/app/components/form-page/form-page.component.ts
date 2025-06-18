import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Field } from '../../interface/config.interface';
import { ConfigService } from '../../service/config.service';
import { FormState } from '../../state/form.state';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  private configService = inject(ConfigService);
  public formState = inject(FormState);

  config = this.configService.config;
  fields = computed(() => this.config()?.Fields || []);
  title = computed(() => this.config()?.Title || '');
  subtitle = computed(() => this.config()?.Subtitle || '');

  async ngOnInit() {
    await this.configService.loadConfig();
  }

  onInputChange(id: string, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.formState.updateValue(id, value);
  }

  onButtonClick(field: Field): void {
    if (!field.AlertMessage) return;

    const message = this.formState.parseAlert(field.AlertMessage);
    alert(message);
  }
}
