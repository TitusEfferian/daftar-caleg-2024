/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCalonLegislatif } from "../graphql/queries";
import { updateCalonLegislatif } from "../graphql/mutations";
const client = generateClient();
export default function CalonLegislatifUpdateForm(props) {
  const {
    id: idProp,
    calonLegislatif: calonLegislatifModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    party: "",
    gender: "",
    city: "",
    img_src: "",
    ex_koruptor: false,
    ex_koruptor_source: "",
    dapil: "",
    no: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [party, setParty] = React.useState(initialValues.party);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [city, setCity] = React.useState(initialValues.city);
  const [img_src, setImg_src] = React.useState(initialValues.img_src);
  const [ex_koruptor, setEx_koruptor] = React.useState(
    initialValues.ex_koruptor
  );
  const [ex_koruptor_source, setEx_koruptor_source] = React.useState(
    initialValues.ex_koruptor_source
  );
  const [dapil, setDapil] = React.useState(initialValues.dapil);
  const [no, setNo] = React.useState(initialValues.no);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = calonLegislatifRecord
      ? { ...initialValues, ...calonLegislatifRecord }
      : initialValues;
    setName(cleanValues.name);
    setParty(cleanValues.party);
    setGender(cleanValues.gender);
    setCity(cleanValues.city);
    setImg_src(cleanValues.img_src);
    setEx_koruptor(cleanValues.ex_koruptor);
    setEx_koruptor_source(cleanValues.ex_koruptor_source);
    setDapil(cleanValues.dapil);
    setNo(cleanValues.no);
    setErrors({});
  };
  const [calonLegislatifRecord, setCalonLegislatifRecord] = React.useState(
    calonLegislatifModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCalonLegislatif.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCalonLegislatif
        : calonLegislatifModelProp;
      setCalonLegislatifRecord(record);
    };
    queryData();
  }, [idProp, calonLegislatifModelProp]);
  React.useEffect(resetStateValues, [calonLegislatifRecord]);
  const validations = {
    name: [{ type: "Required" }],
    party: [{ type: "Required" }],
    gender: [{ type: "Required" }],
    city: [{ type: "Required" }],
    img_src: [{ type: "Required" }],
    ex_koruptor: [{ type: "Required" }],
    ex_koruptor_source: [],
    dapil: [{ type: "Required" }],
    no: [{ type: "Required" }],
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
          name,
          party,
          gender,
          city,
          img_src,
          ex_koruptor,
          ex_koruptor_source: ex_koruptor_source ?? null,
          dapil,
          no,
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
          await client.graphql({
            query: updateCalonLegislatif.replaceAll("__typename", ""),
            variables: {
              input: {
                id: calonLegislatifRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CalonLegislatifUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              party,
              gender,
              city,
              img_src,
              ex_koruptor,
              ex_koruptor_source,
              dapil,
              no,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Party"
        isRequired={true}
        isReadOnly={false}
        value={party}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              party: value,
              gender,
              city,
              img_src,
              ex_koruptor,
              ex_koruptor_source,
              dapil,
              no,
            };
            const result = onChange(modelFields);
            value = result?.party ?? value;
          }
          if (errors.party?.hasError) {
            runValidationTasks("party", value);
          }
          setParty(value);
        }}
        onBlur={() => runValidationTasks("party", party)}
        errorMessage={errors.party?.errorMessage}
        hasError={errors.party?.hasError}
        {...getOverrideProps(overrides, "party")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={true}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              party,
              gender: value,
              city,
              img_src,
              ex_koruptor,
              ex_koruptor_source,
              dapil,
              no,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="City"
        isRequired={true}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              party,
              gender,
              city: value,
              img_src,
              ex_koruptor,
              ex_koruptor_source,
              dapil,
              no,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Img src"
        isRequired={true}
        isReadOnly={false}
        value={img_src}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              party,
              gender,
              city,
              img_src: value,
              ex_koruptor,
              ex_koruptor_source,
              dapil,
              no,
            };
            const result = onChange(modelFields);
            value = result?.img_src ?? value;
          }
          if (errors.img_src?.hasError) {
            runValidationTasks("img_src", value);
          }
          setImg_src(value);
        }}
        onBlur={() => runValidationTasks("img_src", img_src)}
        errorMessage={errors.img_src?.errorMessage}
        hasError={errors.img_src?.hasError}
        {...getOverrideProps(overrides, "img_src")}
      ></TextField>
      <SwitchField
        label="Ex koruptor"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ex_koruptor}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              party,
              gender,
              city,
              img_src,
              ex_koruptor: value,
              ex_koruptor_source,
              dapil,
              no,
            };
            const result = onChange(modelFields);
            value = result?.ex_koruptor ?? value;
          }
          if (errors.ex_koruptor?.hasError) {
            runValidationTasks("ex_koruptor", value);
          }
          setEx_koruptor(value);
        }}
        onBlur={() => runValidationTasks("ex_koruptor", ex_koruptor)}
        errorMessage={errors.ex_koruptor?.errorMessage}
        hasError={errors.ex_koruptor?.hasError}
        {...getOverrideProps(overrides, "ex_koruptor")}
      ></SwitchField>
      <TextField
        label="Ex koruptor source"
        isRequired={false}
        isReadOnly={false}
        value={ex_koruptor_source}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              party,
              gender,
              city,
              img_src,
              ex_koruptor,
              ex_koruptor_source: value,
              dapil,
              no,
            };
            const result = onChange(modelFields);
            value = result?.ex_koruptor_source ?? value;
          }
          if (errors.ex_koruptor_source?.hasError) {
            runValidationTasks("ex_koruptor_source", value);
          }
          setEx_koruptor_source(value);
        }}
        onBlur={() =>
          runValidationTasks("ex_koruptor_source", ex_koruptor_source)
        }
        errorMessage={errors.ex_koruptor_source?.errorMessage}
        hasError={errors.ex_koruptor_source?.hasError}
        {...getOverrideProps(overrides, "ex_koruptor_source")}
      ></TextField>
      <TextField
        label="Dapil"
        isRequired={true}
        isReadOnly={false}
        value={dapil}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              party,
              gender,
              city,
              img_src,
              ex_koruptor,
              ex_koruptor_source,
              dapil: value,
              no,
            };
            const result = onChange(modelFields);
            value = result?.dapil ?? value;
          }
          if (errors.dapil?.hasError) {
            runValidationTasks("dapil", value);
          }
          setDapil(value);
        }}
        onBlur={() => runValidationTasks("dapil", dapil)}
        errorMessage={errors.dapil?.errorMessage}
        hasError={errors.dapil?.hasError}
        {...getOverrideProps(overrides, "dapil")}
      ></TextField>
      <TextField
        label="No"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={no}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              party,
              gender,
              city,
              img_src,
              ex_koruptor,
              ex_koruptor_source,
              dapil,
              no: value,
            };
            const result = onChange(modelFields);
            value = result?.no ?? value;
          }
          if (errors.no?.hasError) {
            runValidationTasks("no", value);
          }
          setNo(value);
        }}
        onBlur={() => runValidationTasks("no", no)}
        errorMessage={errors.no?.errorMessage}
        hasError={errors.no?.hasError}
        {...getOverrideProps(overrides, "no")}
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
          isDisabled={!(idProp || calonLegislatifModelProp)}
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
              !(idProp || calonLegislatifModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
