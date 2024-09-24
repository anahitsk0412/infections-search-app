import { Grid } from '@mui/material';
import { useEffect } from 'react';

import { UserCard } from '../components/UserCard';
import { getUser, userSelector } from '../features/userSlice';
import { useAppDispatch, useAppSelector } from '../utils/Reduxhooks';

export const ProfileScreen = () => {
  const userData = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(userSelector);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <Grid container spacing={2} mt={4} justifyContent={'space-between'}>
      <UserCard content={user} />
    </Grid>
  );
};
