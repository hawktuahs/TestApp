import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  LocalDining as FoodIcon,
  FitnessCenter as FitnessIcon,
  WaterDrop as WaterIcon,
} from '@mui/icons-material';

const dailyGoals = {
  water: { current: 4, target: 8 }, // glasses
  steps: { current: 2500, target: 10000 },
  meals: { current: 2, target: 3 },
};

const workoutPlan = [
  { name: "Morning Prayer Walk", duration: "15 min", completed: true },
  { name: "Upper Body Strength", duration: "30 min", completed: false },
  { name: "Evening Stretch", duration: "10 min", completed: false },
];

const mealPlan = [
  { name: "Breakfast", items: ["Oatmeal with fruits", "Green tea"] },
  { name: "Lunch", items: ["Grilled chicken salad", "Whole grain bread"] },
  { name: "Dinner", items: ["Baked salmon", "Steamed vegetables"] },
];

export default function Health() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Health & Wellness
      </Typography>

      <Grid container spacing={3}>
        {/* Daily Progress */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Daily Progress
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <WaterIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">Water Intake</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(dailyGoals.water.current / dailyGoals.water.target) * 100}
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {dailyGoals.water.current} / {dailyGoals.water.target} glasses
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <FitnessIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">Steps</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(dailyGoals.steps.current / dailyGoals.steps.target) * 100}
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {dailyGoals.steps.current} / {dailyGoals.steps.target} steps
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <FoodIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">Meals</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(dailyGoals.meals.current / dailyGoals.meals.target) * 100}
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {dailyGoals.meals.current} / {dailyGoals.meals.target} meals
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Workout Plan */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Today's Workout Plan
              </Typography>
              <List>
                {workoutPlan.map((workout) => (
                  <ListItem key={workout.name}>
                    <ListItemIcon>
                      <FitnessIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={workout.name}
                      secondary={`${workout.duration} - ${workout.completed ? 'Completed' : 'Pending'}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Meal Plan */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Today's Meal Plan
              </Typography>
              <List>
                {mealPlan.map((meal) => (
                  <ListItem key={meal.name}>
                    <ListItemIcon>
                      <FoodIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={meal.name}
                      secondary={meal.items.join(', ')}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
} 