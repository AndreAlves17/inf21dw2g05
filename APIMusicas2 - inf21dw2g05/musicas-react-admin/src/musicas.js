import { Datagrid, Edit, EditButton, List, NumberField, NumberInput, ReferenceField, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput } from "react-admin";
export const MusicaList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="nomeMusica" />
            <TextField source="genero" />
            <NumberField source="datadelancamento" />
            <ReferenceField source="nomeartista" reference="artistas"><TextField source="id" /></ReferenceField>
            <ReferenceField source="albumId" reference="albums"><TextField source="id" /></ReferenceField>
            <EditButton></EditButton>
        </Datagrid>
    </List>
);

export const MusicaEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="nomeMusica" />
            <TextInput source="genero" />
            <NumberInput source="datadelancamento" />
            <ReferenceInput source="nomeartista" reference="artistas"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceInput source="albumId" reference="albums"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

