import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import t from '../tags.json';
import Link from 'next/link'

function ListItemLink(props) {
  const { to, open, text, ...other } = props;

  return (
    <li>
      <ListItem button to={to} {...other}>
      <Link href={to}>
        <ListItemText primary={text} />
      </Link>
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default function Nav({ head }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="head">
            <p style={{color: '#5771E2'}}> Resources </p>
            <style jsx>{`
                .head {
                    flex-basis: 45%;
                    padding: 1.5rem;
                    margin-bottom: 4rem;
                    text-align: center;
                    top: 0;
                  }
                  .root {
                    display: flex;
                    flex-direction: column;
                    width: 360;
                  }
                  .lists {
                    width: fit-content;
                    padding: 1rem;
                  }
                  .nested {
                    padding-left :1rem;
                  }
            `}</style>
      <div className="root">
        <nav className="lists">
        <List>
        {t[head].map((val1, index1) => {
            return (
                <div key={index1} className="row">
                <li>
                  <ListItem button open={open} onClick={handleClick}>
                    <ListItemText primary={val1} />
                    {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
                  </ListItem>
                </li>
                <Collapse component="li" in={open} timeout="auto" unmountOnExit>
                  <List disablePadding>
                      {t[val1].map((val2, index2) => {
                          var to = "/resources/Web/" + val2;
                          return (
                              <div key={index2} className="row" className="nested">
                                  <ListItemLink to={to} text={val2} />
                              </div>
                          );
                      })}
                  </List>
                </Collapse>
                </div>
            );
        })}
        </ List>
        </nav>
      </div>
    </div>
  );
}
