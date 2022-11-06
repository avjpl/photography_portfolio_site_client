import { gql } from '@apollo/client';

export const DELETE_FILE = gql`
  mutation deleteFile($id: Int!, $filename: String!) {
    deleteFile(id: $id, filename: $filename) {
      success
    }
  }
`;
