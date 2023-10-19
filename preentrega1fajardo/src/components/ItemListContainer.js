import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const ItemListContainer = ({ greeting }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{ bgcolor: "#cfe8fc", height: "100vh" }}
        mt={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <h2>{greeting}</h2>
      </Box>
    </Container>
  );
};
