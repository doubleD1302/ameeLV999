export interface ContentCatalog {
  version: string;
  loaded: boolean;
}

export class ContentLoader {
  public async loadCoreConfig(): Promise<ContentCatalog> {
    return {
      version: '0.1.0',
      loaded: true
    };
  }
}
