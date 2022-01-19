import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Musica} from './musica.model';

@model()
export class User extends Entity {
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
  nome: string;

  @property({
    type: 'string',
  })
  pais?: string;

  @property({
    type: 'number',
  })
  idade?: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @belongsTo(() => Musica, {name: 'userId'})
  musicamaisouvida: number;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
