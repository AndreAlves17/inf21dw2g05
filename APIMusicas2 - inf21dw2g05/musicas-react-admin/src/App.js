import { Admin, Resource } from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import { AlbumEdit, AlbumList } from './albums';
import { ArtistaEdit, ArtistaList } from './artistas';
import { MusicaEdit, MusicaList } from './musicas';
import { UserEdit, UserList } from './users';
//Configuração do localhost na porta 3000
const d = lb4Provider("http://localhost:3000");
const App = () => (
  <Admin dataProvider={d}>
    <Resource name='albums' list={AlbumList} edit={AlbumEdit} />
    <Resource name='artistas' list={ArtistaList} edit={ArtistaEdit} />
    <Resource name='musicas' list={MusicaList} edit={MusicaEdit} />
    <Resource name='users' list={UserList} edit={UserEdit} />
  </Admin>
)

export default App;
