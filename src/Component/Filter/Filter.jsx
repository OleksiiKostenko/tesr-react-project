import { FormControl } from "@mui/base";
import { RadioGroup, FormLabel, FormControlLabel, Radio } from "@mui/material";
import { useEffect } from "react";
import { getArrayLangth } from "../../service/getQuery";
import css from "../Filter/Filter.module.css";
import { useInputContex } from "../Hooks/Contex";

function Filter() {
  const { setQuery, setPage, arrayLangth, query, setUsers, setArrayLangth } =
    useInputContex();
  useEffect(() => {
    getArrayLangth("").then((data) => setArrayLangth([data]));
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setUsers([]);
    setArrayLangth([]);
    setPage(1);
    if (query === "all") {
      getArrayLangth("").then((data) => setArrayLangth([data]));
    }
    getArrayLangth(query).then((data) => setArrayLangth([data]));
  };

  return (
    <FormControl className={css.filter_form}>
      <FormLabel id="radio-buttons-group-label">Tweets</FormLabel>
      <RadioGroup
        row
        onChange={handleChange}
        aria-labelledby="radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="false" control={<Radio />} label="Follow " />
        <FormControlLabel
          value="true"
          control={<Radio />}
          label="Followings "
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Filter;
