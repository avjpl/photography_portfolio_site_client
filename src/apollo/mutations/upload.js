import { gql } from '@apollo/client';

export const UPLOAD_FILE = gql`
  mutation UploadFile($files: [Upload!]) {
    uploadFile(files: $files) {
      id
      filename
    }
  }
`;

export const SET_CATEGORY = gql`
  mutation setCategory($category: Catgegory!, $id: Int!) {
    variant: setCategory(category: $category, id: $id) {
      count
    }
  }
`;
