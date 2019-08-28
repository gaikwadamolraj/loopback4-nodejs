import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Org, OrgRelations } from '../models';
import { OrgDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class OrgRepository extends DefaultCrudRepository<
  Org,
  typeof Org.prototype.id,
  OrgRelations
  > {
  constructor(
    @inject('datasources.org') dataSource: juggler.DataSource,
  ) {
    super(Org, dataSource);
  }
}
