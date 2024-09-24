import { Typography } from '@mui/material';

import { useState } from 'react';

import { StyledCard, StyledCardContent } from './StyledCardMedia';
import { User } from '../models/User';

interface IUserCardProps {
  content: User | null;
}

export const UserCard = (props: IUserCardProps) => {
  const { content } = props;
  const [loaded, setIsLoaded] = useState<boolean>(false);

  if (!content) {
    return (
      <Typography gutterBottom variant="subtitle3" component="span">
        No user exists, please, check details
      </Typography>
    );
  }

  return (
    <StyledCard>
      <StyledCardContent>
        <Typography gutterBottom>
          <Typography gutterBottom variant="subtitle2" component="span">
            User Name:
          </Typography>
          <Typography variant="label3" component="span">
            {content!.name}
          </Typography>
        </Typography>

        <Typography gutterBottom>
          <Typography gutterBottom variant="subtitle2" component="span">
            User Email:
          </Typography>
          <Typography variant="label3" component="span">
            {content!.email}
          </Typography>
        </Typography>

        <Typography gutterBottom>
          <Typography gutterBottom variant="subtitle2" component="span">
            Credits:
          </Typography>
          <Typography variant="label3" component="span">
            {content!.credits}
          </Typography>
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};
