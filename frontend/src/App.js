import { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button, Modal, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Form from './components/form/Form';
import Posts from './components/posts/Posts';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '1',
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleEditModal = () => {
    setIsOpen(!isOpen);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: '50px',
        marginBottom: '50px',
        backgroundColor: '#fafafa',
        padding: '20px',
      }}
    >
      <AppBar
        position="static"
        color="inherit"
        style={{
          backgroundColor: '#fafafa',
          padding: '20px',
          marginBottom: '20px',
          position: 'sticky',
          top: '0',
          zIndex: '1',
          boxShadow: 'none',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          style={{
            padding: '20px',
            backgroundColor: '#fafafa',
            color: 'blue',
          }}
        >
          PERSONAL BLOGS
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            marginLeft: '20px',
            marginRight: '20px',
          }}
          onClick={handleEditModal}
        >
          Add a new post
        </Button>
      </AppBar>

      <Modal
        open={isOpen}
        onClose={handleEditModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form onClose={handleEditModal} />
        </Box>
      </Modal>

      <Grow in>
        <Container
          style={{
            marginTop: '20px',
            marginBottom: '50px',
            padding: '20px',
          }}
        >
          <Grid container justify="space-between" align="stretch" spacing={2}>
            <Grid item xs={12} sm={12}>
              <Posts />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
