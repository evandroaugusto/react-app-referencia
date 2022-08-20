import React from "react";
import { useHistory } from "react-router";
import { TextField, Box, Button } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { User } from "../../../models/User";
import * as s from "./styles";

export type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  about: string;
};

type CreateFormProps = {
  defaultValues?: FormInputs | object;
  onSubmit: (data: User) => void;
};

const validationSchema = yup.object().shape({
  firstName: yup.string().min(4).required(),
  lastName: yup.string().min(4).required(),
  email: yup.string().email().required(),
  jobTitle: yup.string().required(),
  about: yup.string().required(),
});

const CreateForm: React.FC<CreateFormProps> = ({ defaultValues, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const history = useHistory();

  const submitHandler: SubmitHandler<FormInputs> = (data) => {
    const userProps = { id: new Date().valueOf(), ...data };
    const user = new User(userProps);
    onSubmit(user);
  };

  const linkToHome = () => {
    history.push("/users/list");
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      sx={{
        "& .MuiTextField-root": {
          mt: 2,
          backgroundColor: "#fff",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <Controller
        name="firstName"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nome"
            variant="outlined"
            data-test="firstName"
          />
        )}
      />
      {errors.firstName?.message && (
        <s.Error className="error">{errors.firstName?.message}</s.Error>
      )}

      <Controller
        name="lastName"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Sobrenome"
            variant="outlined"
            data-test="lastName"
          />
        )}
      />
      {errors.lastName?.message && (
        <s.Error className="error">{errors.lastName?.message}</s.Error>
      )}

      <Controller
        name="email"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            data-test="email"
          />
        )}
      />
      {errors.email?.message && (
        <s.Error className="error">{errors.email?.message}</s.Error>
      )}

      <Controller
        name="jobTitle"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Cargo"
            variant="outlined"
            data-test="jobTitle"
          />
        )}
      />
      {errors.jobTitle?.message && (
        <s.Error className="error">{errors.jobTitle?.message}</s.Error>
      )}

      <Controller
        name="about"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-multiline-static"
            label="Sobre"
            multiline
            rows={4}
            data-test="about"
          />
        )}
      />
      {errors.about?.message && (
        <s.Error className="error">{errors.about?.message}</s.Error>
      )}

      <br />

      <Button
        variant="contained"
        onClick={handleSubmit(submitHandler)}
        size="large"
        data-test="submitBtn"
      >
        Criar
      </Button>

      <br />
      <Button
        variant="outlined"
        onClick={linkToHome}
        size="large"
        data-test="gobackBtn"
      >
        Voltar
      </Button>
    </Box>
  );
};

CreateForm.defaultProps = {
  defaultValues: {},
};

export default CreateForm;
