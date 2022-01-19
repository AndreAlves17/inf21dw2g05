import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  User,
  Musica,
} from '../models';
import {UserRepository} from '../repositories';

export class UserMusicaController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @get('/users/{id}/musica', {
    responses: {
      '200': {
        description: 'Musica belonging to User',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Musica)},
          },
        },
      },
    },
  })
  async getMusica(
    @param.path.number('id') id: typeof User.prototype.id,
  ): Promise<Musica> {
    return this.userRepository.userId(id);
  }
}
