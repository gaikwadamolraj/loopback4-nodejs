import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './org.datasource.json';

export class OrgDataSource extends juggler.DataSource {
  static dataSourceName = 'org';

  constructor(
    @inject('datasources.config.org', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
