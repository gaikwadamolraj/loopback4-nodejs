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
  GetFromContextProvider,
} from '@loopback/rest';

export class OrgController {
  constructor(@repository(OrgRepository) protected orgRepo: OrgRepository) { }

  @post('/orgs')
  async createOrg(@requestBody() Org: Org) {
    if (!Org.name) {
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

  @get('/orgs/text/{text}')
  async findOrgTexts(@param.path.string('text') filterQ: string): Promise<Object[]> {
    var searchQ = [{ name: /cho/ }, {
      description: /cho/
    }];
    //console.log("Data " + typeof searchQ);
    return await this.orgRepo.find({ where: { name: new RegExp('' + filterQ + '$') } });
  }

  @get('/amol/{age}')
  amol(@param.path.string('age') age: string): String {
    var data = "This is amol gaikwad. Age is " + age;
    return data;
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
