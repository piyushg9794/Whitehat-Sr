import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ForumIcon from '@material-ui/icons/Forum';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: "max-content",
  },
  lists: {
    backgroundColor: "#5771E2",
    marginTop: theme.spacing(1),
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <nav className={classes.lists}>
        <List style={{ color: "whitesmoke" }}>
            <ListItem button style={{ paddingLeft: "2rem", width: "20vw"}}>
              <ListItemIcon>
                <AccountCircleIcon style={{ color: "whitesmoke" }}/>
              </ListItemIcon>
              <Link href="/">
              <a style={{active: "yellow"}}>
                <ListItemText primary="Profile" />
              </a>
              </Link>
            </ListItem>
            <ListItem button style={{ paddingLeft: "2rem", paddingRight: "3rem"}}>
              <ListItemIcon>
                <AssessmentIcon style={{ color: "whitesmoke" }}/>
              </ListItemIcon>
              <Link href="/">
                <ListItemText primary="Leaderboard" />
              </Link>
            </ListItem>
            <ListItem button style={{ paddingLeft: "2rem", paddingRight: "3rem"}}>
              <ListItemIcon>
                <LibraryBooksIcon style={{ color: "whitesmoke" }}/>
              </ListItemIcon>
              <Link href="/resources">
                <ListItemText primary="Resources" />
              </Link>
            </ListItem>
            <ListItem button style={{ paddingLeft: "2rem", paddingRight: "3rem"}}>
              <ListItemIcon>
                <ForumIcon style={{ color: "whitesmoke" }}/>
              </ListItemIcon>
              <Link href="/">
                  <ListItemText primary="Discussion" />
              </Link>
            </ListItem>
            <ListItem button style={{ paddingLeft: "2rem", paddingRight: "3rem"}}>
              <ListItemIcon>
                <ContactSupportIcon style={{ color: "whitesmoke" }}/>
              </ListItemIcon>
              <Link href="/">
                <ListItemText primary="Help" />
              </Link>
            </ListItem>
            <ListItem button style={{ paddingLeft: "2rem", paddingRight: "3rem"}}>
              <ListItemIcon>
                <InfoIcon style={{ color: "whitesmoke" }}/>
              </ListItemIcon>
              <Link href="/">
                <ListItemText primary="About Us" />
              </Link>
            </ListItem>
        </ List>
        </nav>
      </div>
  );
}
