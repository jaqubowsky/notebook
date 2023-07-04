import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { Alert, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function InfoSnackbar() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Tooltip title="Copy">
        <IconButton
          onClick={handleClick({ vertical: "top", horizontal: "right" })}
        >
          <ContentCopyIcon />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );

  return (
    <Box>
      {buttons}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", mt: "38px", mr: "20px" }}
        >
          You copied your note.
        </Alert>
      </Snackbar>
    </Box>
  );
}