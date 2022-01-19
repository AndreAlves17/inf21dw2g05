import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Artista} from './artista.model';
import {User} from './user.model';
import {Album} from './album.model';

@model()
export class Musica extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomeMusica: string;

  @property({
    type: 'string',
  })
  genero?: string;

  @property({
    type: 'number',
  })
  datadelancamento?: number;

  @hasMany(() => User, {keyTo: 'musicamaisouvida'})
  users: User[];

  @belongsTo(() => Artista, {name: 'artistaId'})
  nomeartista: number;

  @belongsTo(() => Album)
  albumId: number;

  constructor(data?: Partial<Musica>) {
    super(data);
  }
}

export interface MusicaRelations {
  // describe navigational properties here
}

export type MusicaWithRelations = Musica & MusicaRelations;
