export class TableConfig {
  selection?: {
    row?: boolean;
    all?: boolean;
  };

  constructor(config: TableConfig) {
    Object.assign(this, config);
  }
}
