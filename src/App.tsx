import { Card, CardContent, Container, Typography } from "@mui/material";
import Steps from "./components/steps";

const App: React.FC = () => {
  return (
    <Container maxWidth='xs'>
      <Card sx={{ marginTop: "64px" }}>
        <CardContent>
          <Typography
            variant='h3'
            gutterBottom
            align='center'
          >
            Sign Up
          </Typography>
          <Steps />
        </CardContent>
      </Card>
    </Container>
  );
};

export default App;
