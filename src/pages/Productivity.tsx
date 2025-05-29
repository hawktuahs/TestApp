import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  TextField,
  Button,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Productivity() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Morning Prayer", completed: false },
    { id: 2, title: "Read Daily Devotional", completed: false },
    { id: 3, title: "30-minute Workout", completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          title: newTask.trim(),
          completed: false,
        },
      ]);
      setNewTask('');
    }
  };

  const handleToggleTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Productivity & Schedule
      </Typography>

      <Grid container spacing={3}>
        {/* Task List */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Today's Tasks
              </Typography>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Add a new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                />
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleAddTask}
                  sx={{ ml: 1 }}
                >
                  Add
                </Button>
              </Box>
              <List>
                {tasks.map((task) => (
                  <ListItem key={task.id}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={task.completed}
                        onChange={() => handleToggleTask(task.id)}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={task.title}
                      sx={{
                        textDecoration: task.completed ? 'line-through' : 'none',
                        color: task.completed ? 'text.secondary' : 'text.primary',
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Calendar */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Events
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Calendar integration coming soon...
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Priority of the Day */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Priority of the Day
              </Typography>
              <Typography variant="body1">
                Focus on completing your morning prayer and devotional time before starting other tasks.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
} 