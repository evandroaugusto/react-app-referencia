import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

type PageProps = {
  categories: string[];
  onSearch: (search: string, category: string) => void;
};

const SearchProductForm = ({ categories, onSearch }: PageProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value.replace("none", ""));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchHandle = () => {
    onSearch(searchTerm, selectedCategory);
  };

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "background.paper",
        borderRadius: 1,
        mb: 4,
        padding: 3,
      }}
      boxShadow={3}
    >
      <TextField
        onChange={handleInputChange}
        type="search"
        label="Buscar"
        sx={{ flexGrow: 1, mr: 2 }}
      />

      <FormControl sx={{ minWidth: 200, mr: 2 }}>
        <InputLabel>Categorias</InputLabel>
        <Select
          label="Categorias"
          value={selectedCategory}
          onChange={handleSelectChange}
        >
          <MenuItem value="none">- selecione -</MenuItem>
          {categories?.map((category) => {
            return (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={searchHandle}>
        Buscar
      </Button>
    </Box>
  );
};

export default SearchProductForm;
