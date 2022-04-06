import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CommentTitle } from "../comment/CommentTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentLikeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="comment.id" reference="Comment" label="Comment">
          <SelectInput optionText={CommentTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
