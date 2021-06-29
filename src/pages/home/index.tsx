import Typography from '@material-ui/core/Typography';
import {useSelector} from 'react-redux';
import {RootState} from 'reducers';

export default function Home() {
  const profile = useSelector((state: RootState) => state.user.data);
  return (
    <div>
      <Typography variant="h2" component="h3" gutterBottom>
        {profile && profile.user ? `Hi ${profile.user.name}` : 'Home page'}
      </Typography>
    </div>
  );
}
