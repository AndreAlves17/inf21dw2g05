import {Datagrid, NumberField,TextInput,NumberInput, TextField, List,EditButton,SimpleForm,Edit} from "react-admin";
export const ArtistaList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="nomeartista" />
            <TextField source="pais" />
            <EditButton></EditButton>
        </Datagrid>
    </List>
);

export const ArtistaEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="nomeartista" />
            <TextInput source="pais" />
        </SimpleForm>
    </Edit>
);