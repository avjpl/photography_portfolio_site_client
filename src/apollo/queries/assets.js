import { gql } from '@apollo/client';

export const GET_ASSET_FILES = gql`
  query getAssetFiles {
    variants: getFiles {
      getFiles {
          id
          filename
          variants {
            category
            width
            src
          }
          exif
      }
    }
  }
`;

export const GET_FILES_BY_SIZE = gql`
  query getFilesBySize($width: Int!) {
    variants: getFilesBySize(width: $width) {
      id
      filename
      variants {
        category
        width
        src
      }
      exif
    }
  }
`;

// const SET_ASSET_CATEGORY = gql`
//     query setAssetCategory($category: Catgegory!, $id: Int!) {
//         variant: setAssetCategory(category: $category, id: $id) {
//             id
//             filename
//             category
//         }
//     }
// `;

export const GET_IMAGE_BY_CATEGORY = gql`
    query getImageByCategory($category: Catgegory!, $width: Int!) {
        images: getImageByCategory(category: $category, width: $width) {
            id
            filename
            variants {
                id
                category
                src
                width
            }
            exif
        }
    }
`;
