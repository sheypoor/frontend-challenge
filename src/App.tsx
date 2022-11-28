import { Card, CardContent, Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container maxWidth='xs'>
      <Card sx={{ marginTop: "64px" }}>
        <CardContent>
          <Typography
            variant='h3'
            gutterBottom
          >
            Sign Up
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default App;
