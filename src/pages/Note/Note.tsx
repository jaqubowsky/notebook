import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import ValueModal from "./ValueModal";
import DeleteModal from "./DeleteModal";
import InfoSnackbar from "./SnackBar";

export default function Note() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Card
      sx={{
        position: "relative",
        minWidth: "80%",
        maxWidth: "80%",
        minHeight: 160,
        marginTop: "50px",
        background: colors.color[100],
      }}
    >
      <CardContent sx={{ p: "20px 25px" }}>
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: colors.color[100],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Edit modal */}
          <ValueModal btnName={"Change"} title={"Change your note"} />
          {/* Info about copy */}
          <InfoSnackbar />
          {/* Delete modal */}
          <DeleteModal />
        </Box>

        <Box>
          <Typography
            variant="h3"
            component="div"
            sx={{ marginBottom: "20px" }}
          >
            Title
          </Typography>
          <Typography>Well meaning and kindly.</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}