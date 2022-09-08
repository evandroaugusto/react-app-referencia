import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as s from "./styles";
import Loading from "../../../../../shared/components/Loading";

export type FormInputs = {
  email: string;
  password: string;
};

type LoginFormProps = {
  isLoading: boolean;
  onSubmit: (data: FormInputs) => void;
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const [estado, setEstado] = React.useState("none");

  const submitHandler: SubmitHandler<FormInputs> = (data) => {
    onSubmit(data);
  };

  const handleEstado = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEstado(event.target.value);
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      sx={{
        "& .MuiTextField-root": { mt: 2 },
      }}
      maxWidth="400px"
      margin="40px auto"
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <InputLabel id="demo-simple-select-helper-label">Estado</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={estado}
          label="Age"
          onChange={handleEstado}
          data-test="estado"
        >
          <MenuItem value="none">
            <em>Escolha o estado</em>
          </MenuItem>
          <MenuItem value="PB">PB</MenuItem>
          <MenuItem value="RS">RS</MenuItem>
          <MenuItem value="RJ">RJ</MenuItem>
        </Select>
      </FormControl>

      <Controller
        name="email"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            disabled={isLoading}
            type="email"
            data-test="email"
          />
        )}
      />
      {errors.email?.message && <s.Error>{errors.email?.message}</s.Error>}

      <Controller
        name="password"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Senha"
            variant="outlined"
            disabled={isLoading}
            type="password"
            data-test="password"
          />
        )}
      />
      {errors.password?.message && (
        <s.Error>{errors.password?.message}</s.Error>
      )}

      <br />
      {!isLoading ? (
        <Button
          variant="contained"
          onClick={handleSubmit(submitHandler)}
          size="large"
          data-test="submit"
        >
          Entrar
        </Button>
      ) : (
        <Loading />
      )}
      <br />
      <small>usuário: admin@teste.com.br | senha: 1234</small>
    </Box>
  );
};

export default LoginForm;
