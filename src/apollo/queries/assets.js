import { gql } from '@apollo/client';

const CORE_VARIANT_FIELDS = gql`
  fragment CoreVariantFields on Variant {
    id
    category
    height
    width
    src
    orientation
  }
`;

export const GET_ASSET_FILES = gql`
  ${CORE_VARIANT_FIELDS}

  query getAssetFiles {
    variants: getFiles {
      getFiles {
          id
          filename
          variants {
            ...CoreVariantFields
          }
          exif
      }
    }
  }
`;

export const GET_FILES_BY_SIZE = gql`
  ${CORE_VARIANT_FIELDS}

  query getFilesBySize($width: Int!) {
    variants: getFilesBySize(width: $width) {
      id
      filename
      variants {
        ...CoreVariantFields
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
  ${CORE_VARIANT_FIELDS}

  query getImageByCategory($category: Catgegory!, $width: Int!) {
    images: getImageByCategory(category: $category, width: $width) {
      id
      filename
      variants {
        ...CoreVariantFields
      }
      exif
    }
  }
`;
