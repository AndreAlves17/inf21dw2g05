import {Entity, model, property, hasMany} from '@loopback/repository';
import {Musica} from './musica.model';

@model()
export class Album extends Entity {
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
  nomealbum: string;

  @hasMany(() => Musica)
  musicas: Musica[];

  constructor(data?: Partial<Album>) {
    super(data);
  }
}

export interface AlbumRelations {
  // describe navigational properties here
}

export type AlbumWithRelations = Album & AlbumRelations;
