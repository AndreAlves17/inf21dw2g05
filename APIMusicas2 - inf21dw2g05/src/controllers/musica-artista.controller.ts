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
  Artista,
} from '../models';
import {MusicaRepository} from '../repositories';

export class MusicaArtistaController {
  constructor(
    @repository(MusicaRepository)
    public musicaRepository: MusicaRepository,
  ) { }

  @get('/musicas/{id}/artista', {
    responses: {
      '200': {
        description: 'Artista belonging to Musica',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Artista)},
          },
        },
      },
    },
  })
  async getArtista(
    @param.path.number('id') id: typeof Musica.prototype.id,
  ): Promise<Artista> {
    return this.musicaRepository.artistaId(id);
  }
}
