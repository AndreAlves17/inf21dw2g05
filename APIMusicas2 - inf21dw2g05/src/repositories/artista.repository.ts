import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Artista, ArtistaRelations, Musica} from '../models';
import {MusicaRepository} from './musica.repository';

export class ArtistaRepository extends DefaultCrudRepository<
  Artista,
  typeof Artista.prototype.id,
  ArtistaRelations
> {

  public readonly musicas: HasManyRepositoryFactory<Musica, typeof Artista.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MusicaRepository') protected musicaRepositoryGetter: Getter<MusicaRepository>,
  ) {
    super(Artista, dataSource);
    this.musicas = this.createHasManyRepositoryFactoryFor('musicas', musicaRepositoryGetter,);
    this.registerInclusionResolver('musicas', this.musicas.inclusionResolver);
  }
}
