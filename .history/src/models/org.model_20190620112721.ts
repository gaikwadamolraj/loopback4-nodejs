import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Org extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  company: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Org>) {
    super(data);
  }
}

export interface OrgRelations {
  // describe navigational properties here
}

export type OrgWithRelations = Org & OrgRelations;
