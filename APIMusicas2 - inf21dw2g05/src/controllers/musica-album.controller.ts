import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Musica,
  Album,
} from '../models';
import {MusicaRepository} from '../repositories';

export class MusicaAlbumController {
  constructor(
    @repository(MusicaRepository)
    public musicaRepository: MusicaRepository,
  ) { }

  @get('/musicas/{id}/album', {
    responses: {
      '200': {
        description: 'Album belonging to Musica',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Album)},
          },
        },
      },
    },
  })
  async getAlbum(
    @param.path.number('id') id: typeof Musica.prototype.id,
  ): Promise<Album> {
    return this.musicaRepository.album(id);
  }
}
