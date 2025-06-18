import { Injectable, signal, Signal } from '@angular/core';
import { Config } from '../interface/config.interface';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private _config = signal<Config | null>(null);
  readonly config: Signal<Config | null> = this._config;

  async loadConfig(): Promise<void> {
    // fetch from the public assets folder
    const res = await fetch('config.json');
    
    if (!res.ok) {
      console.error('Failed to load config:', res.statusText);
      return;
    }
    const cfg: Config = await res.json();
    this._config.set(cfg);
  }
}
