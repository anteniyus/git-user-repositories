import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "../constants/ColorPalette";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function CustomButton(props) {
  const classes = useStyles();

  const { title, onClick, IconComponent, bgColor } = props;

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={onClick}
      /* eslint-disable-next-line react/jsx-pascal-case */
      startIcon={IconComponent && <IconComponent.type />}
      style={{ backgroundColor: bgColor }}
    >
      {title}
    </Button>
  );
}

CustomButton.defaultProps = {
  IconComponent: null,
  onClick: () => {},
  bgColor: green,
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  IconComponent: PropTypes.element,
  bgColor: PropTypes.string,
};
