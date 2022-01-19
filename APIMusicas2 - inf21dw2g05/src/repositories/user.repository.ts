import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {User, UserRelations, Musica} from '../models';
import {MusicaRepository} from './musica.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly userId: BelongsToAccessor<Musica, typeof User.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MusicaRepository') protected musicaRepositoryGetter: Getter<MusicaRepository>,
  ) {
    super(User, dataSource);
    this.userId = this.createBelongsToAccessorFor('userId', musicaRepositoryGetter,);
    this.registerInclusionResolver('userId', this.userId.inclusionResolver);
  }
}
