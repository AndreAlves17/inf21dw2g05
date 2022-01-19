import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Artista, Musica, MusicaRelations, User, Album} from '../models';
import {ArtistaRepository} from './artista.repository';
import {UserRepository} from './user.repository';
import {AlbumRepository} from './album.repository';

export class MusicaRepository extends DefaultCrudRepository<
  Musica,
  typeof Musica.prototype.id,
  MusicaRelations
> {

  public readonly users: HasManyRepositoryFactory<User, typeof Musica.prototype.id>;

  public readonly artistaId: BelongsToAccessor<Artista, typeof Musica.prototype.id>;

  public readonly album: BelongsToAccessor<Album, typeof Musica.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('ArtistaRepository') protected artistaRepositoryGetter: Getter<ArtistaRepository>, @repository.getter('AlbumRepository') protected albumRepositoryGetter: Getter<AlbumRepository>,
  ) {
    super(Musica, dataSource);
    this.album = this.createBelongsToAccessorFor('album', albumRepositoryGetter,);
    this.registerInclusionResolver('album', this.album.inclusionResolver);
    this.artistaId = this.createBelongsToAccessorFor('artistaId', artistaRepositoryGetter,);
    this.registerInclusionResolver('artistaId', this.artistaId.inclusionResolver);
    this.users = this.createHasManyRepositoryFactoryFor('users', userRepositoryGetter,);
    this.registerInclusionResolver('users', this.users.inclusionResolver);
  }
}
