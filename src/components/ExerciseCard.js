import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Typography, Stack} from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="Lazy" />
        <Stack direction="row">
          <Button sx={{ ml:'21px', color:'#fff', background: '#4aa544d9', fontSize: '14px', borderRadius: '10px', textTransform: 'capitalize'}}> 
          {exercise.bodyPart}
          </Button>
          <Button sx={{ ml:'21px', color:'#fff', background: '#fc5757', fontSize: '14px', borderRadius: '10px', textTransform: 'capitalize'}}> 
          {exercise.target}
          </Button>
        </Stack>
        <Typography ml="21px" color="#000" fontSize="24px" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize">
          {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard