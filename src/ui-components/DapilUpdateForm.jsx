/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Dapil } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function DapilUpdateForm(props) {
  const {
    id: idProp,
    dapil: dapilModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    kode_dapil: "",
    nama_dapil: "",
  };
  const [kode_dapil, setKode_dapil] = React.useState(initialValues.kode_dapil);
  const [nama_dapil, setNama_dapil] = React.useState(initialValues.nama_dapil);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = dapilRecord
      ? { ...initialValues, ...dapilRecord }
      : initialValues;
    setKode_dapil(cleanValues.kode_dapil);
    setNama_dapil(cleanValues.nama_dapil);
    setErrors({});
  };
  const [dapilRecord, setDapilRecord] = React.useState(dapilModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Dapil, idProp)
        : dapilModelProp;
      setDapilRecord(record);
    };
    queryData();
  }, [idProp, dapilModelProp]);
  React.useEffect(resetStateValues, [dapilRecord]);
  const validations = {
    kode_dapil: [{ type: "Required" }],
    nama_dapil: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          kode_dapil,
          nama_dapil,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Dapil.copyOf(dapilRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DapilUpdateForm")}
      {...rest}
    >
      <TextField
        label="Kode dapil"
        isRequired={true}
        isReadOnly={false}
        value={kode_dapil}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kode_dapil: value,
              nama_dapil,
            };
            const result = onChange(modelFields);
            value = result?.kode_dapil ?? value;
          }
          if (errors.kode_dapil?.hasError) {
            runValidationTasks("kode_dapil", value);
          }
          setKode_dapil(value);
        }}
        onBlur={() => runValidationTasks("kode_dapil", kode_dapil)}
        errorMessage={errors.kode_dapil?.errorMessage}
        hasError={errors.kode_dapil?.hasError}
        {...getOverrideProps(overrides, "kode_dapil")}
      ></TextField>
      <TextField
        label="Nama dapil"
        isRequired={true}
        isReadOnly={false}
        value={nama_dapil}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kode_dapil,
              nama_dapil: value,
            };
            const result = onChange(modelFields);
            value = result?.nama_dapil ?? value;
          }
          if (errors.nama_dapil?.hasError) {
            runValidationTasks("nama_dapil", value);
          }
          setNama_dapil(value);
        }}
        onBlur={() => runValidationTasks("nama_dapil", nama_dapil)}
        errorMessage={errors.nama_dapil?.errorMessage}
        hasError={errors.nama_dapil?.hasError}
        {...getOverrideProps(overrides, "nama_dapil")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || dapilModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || dapilModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
