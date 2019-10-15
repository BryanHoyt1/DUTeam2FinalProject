import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
  private readonly localStorage: Storage = window.localStorage;

  constructor() {
  }

  public getItem(key: string): string | null {
    return this.localStorage.getItem(key);
  }

  public setItem(key: string, value: string): void {
    this.localStorage.setItem(key, value);
  }

  public removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }

  public clear(): void {
    this.localStorage.clear();
  }
}