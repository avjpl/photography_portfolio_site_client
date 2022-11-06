import { useCallback } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useDropzone } from "react-dropzone";

import { UPLOAD_FILE, SET_CATEGORY } from "../../apollo/mutations/upload";
import { DELETE_FILE } from "../../apollo/mutations/delete";
import { GET_FILES_BY_SIZE } from "../../apollo/queries/assets";

import css from "./dropZone.module.css";

const DropZone = () => {
  const { data, loading } = useQuery(GET_FILES_BY_SIZE, {
    variables: { width: 600 },
  });

  const [deleteFile] = useMutation(DELETE_FILE, {
    refetchQueries: [{ query: GET_FILES_BY_SIZE, variables: { width: 600 } }],
  });

  const [setCategory] = useMutation(SET_CATEGORY, {
    refetchQueries: [{ query: GET_FILES_BY_SIZE, variables: { width: 600 } }],
  });

  const [uploadFile, { error: uploadError }] = useMutation(UPLOAD_FILE, {
    refetchQueries: [{ query: GET_FILES_BY_SIZE, variables: { width: 600 } }],
  });

  const onDrop = useCallback(
    async (files) => {
      await uploadFile({ variables: { files } });
    },
    [uploadFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // getFilesFromEvent: (evt) => customFileGetter(evt),
  });

  const handleDelete = (id, filename) => async () => {
    return (await deleteFile({ variables: { id: parseInt(id, 10), filename } })).data;
    // console.log({ data });
  };

  const handleSetCategory = (id) => async (e) => {
    const category = e.target.value.toUpperCase().toUpperCase();
    await setCategory({ variables: { id: parseInt(id, 10), category } });
  }

  if (loading) return <p>Loading...</p>;
  if (uploadError) return <p>Upload error</p>;

  return (
    <>
      <div className={css.dropzone}>
        <div {...getRootProps()}>
          <input className={css.dropzone__zone} {...getInputProps()} />

          <p className={css.dropzone__zone__message}>
            {isDragActive ? (
              <span>Drop the files here ...</span>
            ) : (
              <span>
                Drag &apos;n&apos; drop some files here, or click to select
                files
              </span>
            )}
          </p>
        </div>
      </div>

      <div className={css.content}>
        <ul className={css.listing}>
          {data?.variants?.map(({ id, filename, variants }) => (
            <li key={filename} className={css.listing__item}>
              <div className={css.listing__item__container}>
                <img
                  className={css.listing__item__img}
                  src={`http://localhost:8080${variants[0]?.src}`}
                />
              </div>

              <ul className={css.listing__item__details}>
                <li>
                  <span>Filename:</span> {filename}
                </li>
              </ul>

              <div className={css.item__actions}>
                <select value={variants[0]?.category?.toLowerCase()} onChange={handleSetCategory(id)}>
                  <option>Select a Category</option>
                  <option value="people">People</option>
                  <option value="places">Places</option>
                  <option value="studio">Studio</option>
                  <option value="macro">Macro</option>
                  <option value="wildlife">Wildlife</option>
                  <option value="flowers">Flowers</option>
                </select>

                <button type="button" onClick={handleDelete(id, filename)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropZone;
