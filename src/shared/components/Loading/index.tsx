import { CircularProgress, Stack } from "@mui/material";

const Loading = () => {
  return (
    <Stack justifyContent="center" flex="1 0 auto" alignItems="center">
      <CircularProgress />
    </Stack>
  );
};

export default Loading;
