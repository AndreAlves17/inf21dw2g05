import {Entity, model, property, hasMany} from '@loopback/repository';
import {Musica} from './musica.model';

@model()
export class Artista extends Entity {
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
  nomeartista: string;

  @property({
    type: 'string',
  })
  pais?: string;

  @hasMany(() => Musica, {keyTo: 'nomeartista'})
  musicas: Musica[];

  constructor(data?: Partial<Artista>) {
    super(data);
  }
}

export interface ArtistaRelations {
  // describe navigational properties here
}

export type ArtistaWithRelations = Artista & ArtistaRelations;
