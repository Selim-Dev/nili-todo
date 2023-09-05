import React from 'react';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import NiliDo from './assets/nili.png'
import Heart from './assets/heart.png'
const TodoApp = () => {
  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: '100vh',
        }}
        elevation={0}
        className='paper-background'
      >
        <AppBar className='z-50' color="secondary" position="static" style={{ height: '64px' }}>
          <Toolbar className='flex justify-between'>
            <div className="flex justify-between w-100">
              <div className="flex items-center space-x-2">
                <img src={NiliDo} alt="" className='w-10 h-10' />
                <p >NiLi Do</p>
              </div>
            </div>
              <div className='flex items-center '>
                <p className='text-white font-bold rotate-45 text-sm -mr-4'>HBD Love</p>
                <img src={Heart} alt="" className='w-6 h-6'/>
              </div>
          </Toolbar>
          <Grid
            container
            justifyContent={'center'}
            style={{ marginTop: '1rem' }}
          >
            <Grid item xs={11} md={8} lg={4}>
              <TodoForm />
              <TodoList />
            </Grid>
          </Grid>
        </AppBar>
      </Paper>
    </div>
  );
};

export default TodoApp;
