import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  member: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  }
});

const Members = ({ members, setEditMember }) => {
  const classes = useStyles();
  return (
    <div className={classes.member}>
      {members.map(member => (
        <Card className={classes.root}>
          <CardContent key={member.id}>
            <Typography variant="h5" component="h2">
              {member.name}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {member.role}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {member.email}
            </Typography>
            <button onClick={() => { setEditMember(member) }} >Edit</button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Members;
