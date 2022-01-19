import { Datagrid, Edit, EditButton, List, NumberField, NumberInput, SimpleForm, TextField, TextInput } from "react-admin";
export const AlbumList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="nomealbum" />
            <EditButton></EditButton>
        </Datagrid>
    </List>
);

export const AlbumEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="nomealbum" />
        </SimpleForm>
    </Edit>
);
