import * as React from "react";
import { useContext } from "react";
import { Box } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import {
  greenThemeLight,
  greenThemeDark,
  bwThemeLight,
  bwThemeDark,
  blueThemeLight,
  blueThemeDark,
  redThemeLight,
  redThemeDark,
  orangeThemeLight,
  orangeThemeDark,
  purpleThemeLight,
  purpleThemeDark,
  pinkThemeLight,
  pinkThemeDark,
  yellowThemeLight,
  yellowThemeDark,
} from "../../theme/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ThemeSelector.css";

const ThemeSelector = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { textColor, settextColor } = React.useState("");
  const [newTheme, setnewTheme] = React.useState(theme);
  const themeData = [
    { name: "greenThemeLight", value: greenThemeLight },
    { name: "greenThemeDark", value: greenThemeDark },
    { name: "bwThemeLight", value: bwThemeLight },
    { name: "bwThemeDark", value: bwThemeDark },
    { name: "blueThemeLight", value: blueThemeLight },
    { name: "blueThemeDark", value: blueThemeDark },
    { name: "redThemeLight", value: redThemeLight },
    { name: "redThemeDark", value: redThemeDark },
    { name: "orangeThemeLight", value: orangeThemeLight },
    { name: "orangeThemeDark", value: orangeThemeDark },
    { name: "purpleThemeLight", value: purpleThemeLight },
    { name: "purpleThemeDark", value: purpleThemeDark },
    { name: "pinkThemeLight", value: pinkThemeLight },
    { name: "pinkThemeDark", value: pinkThemeDark },
    { name: "yellowThemeLight", value: yellowThemeLight },
    { name: "yellowThemeDark", value: yellowThemeDark },
  ];

  const handleChange = (event) => {
    setnewTheme(event.target.value);
    setTheme(event.target.value);
  };

  return (
    <>
      <Box class="theme_container" sx={{ minWidth: 200, width: 200 }}>
        <FormControl fullWidth>
          <InputLabel
            style={{ color: theme.primary }}
            id="demo-simple-select-label"
          >
            Choose Theme
          </InputLabel>
          <Select
            style={{ color: theme.primary }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newTheme}
            label="Theme"
            onChange={handleChange}
          >
            {themeData.map((theme) => {
              return <MenuItem value={theme.value}>{theme.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default ThemeSelector;
