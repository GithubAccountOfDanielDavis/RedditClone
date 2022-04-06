import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { POST_TITLE_FIELD } from "../post/PostTitle";
import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="CommentLike"
          target="UserId"
          label="Comment Likes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Comment"
          target="UserId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="Body" source="body" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Community"
          target="UserId"
          label="Communities"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField label="Owner" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PostLike"
          target="UserId"
          label="Post Likes"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Post" target="UserId" label="Posts">
          <Datagrid rowClick="show">
            <TextField label="Body" source="body" />
            <ReferenceField
              label="Community"
              source="community.id"
              reference="Community"
            >
              <TextField source={COMMUNITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
