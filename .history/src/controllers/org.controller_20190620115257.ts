import { repository } from '@loopback/repository';
import { OrgRepository } from '../repositories';
import { Org } from '../models';
import {
  HttpErrors,
  post,
  param,
  requestBody,
  get,
  put,
  patch,
  del,
} from '@loopback/rest';

export class OrgController {
  constructor(@repository(OrgRepository) protected orgRepo: OrgRepository) { }

  @post('/orgs')
  async createOrg(@requestBody() Org: Org) {
    if (!Org.title) {
      throw new HttpErrors.BadRequest('title is required');
    }
    return await this.orgRepo.create(Org);
  }

  @get('/orgs/{id}')
  async findOrgById(@param.path.string('id') id: string): Promise<Org> {
    return await this.orgRepo.findById(id);
  }

  @get('/orgs')
  async findorgs(): Promise<Org[]> {
    return await this.orgRepo.find();
  }

  // @put('/orgs/{id}')
  // async replaceOrg(
  //   @param.path.string('id') id: string,
  //   @requestBody() Org: Org,
  // ): Promise<boolean> {
  //   return await this.orgRepo.replaceById(id, Org);
  // }

  // @patch('/orgs/{id}')
  // async updateOrg(
  //   @param.path.string('id') id: string,
  //   @requestBody() Org: Org,
  // ): Promise<boolean> {
  //   return await this.orgRepo.updateById(id, Org);
  // }

  // @del('/orgs/{id}')
  // async deleteOrg(@param.path.string('id') id: string): Promise<boolean> {
  //   return await this.orgRepo.deleteById(id);
  // }
}
