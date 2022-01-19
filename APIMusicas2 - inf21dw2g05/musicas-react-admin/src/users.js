import {Datagrid, NumberField, TextField,NumberInput,ReferenceInput,TextInput, List, EmailField, ReferenceField,EditButton, SimpleForm, Edit, SelectInput} from "react-admin";
export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="pais" />
            <NumberField source="idade" />
            <EmailField source="email" />
            <ReferenceField source="musicamaisouvida" reference="musicas"><TextField source="id" /></ReferenceField>
            <EditButton></EditButton>
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="nome" />
            <TextInput source="pais" />
            <NumberInput source="idade" />
            <TextInput source="email" />
            <ReferenceInput source="musicamaisouvida" reference="musicas"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);