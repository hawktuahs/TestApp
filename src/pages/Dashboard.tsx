import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { format } from 'date-fns';

const scriptureOfTheDay = {
  verse: "For I know the plans I have for you,",
  reference: "Jeremiah 29:11",
  text: "declares the LORD, 'plans to prosper you and not to harm you, plans to give you hope and a future.'"
};

const topTasks = [
  { id: 1, title: "Morning Prayer", completed: false },
  { id: 2, title: "Read Daily Devotional", completed: false },
  { id: 3, title: "30-minute Workout", completed: false },
];

const healthSnapshot = {
  hydration: 4, // glasses
  steps: 2500,
  meals: 2,
};

const financeTip = {
  title: "Bless & Save",
  tip: "Set aside 10% of your income for giving and 20% for savings this month."
};

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Welcome back, {format(new Date(), 'EEEE')}!
      </Typography>

      <Grid container spacing={3}>
        {/* Scripture of the Day */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Scripture of the Day
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                "{scriptureOfTheDay.verse}"
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {scriptureOfTheDay.reference}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {scriptureOfTheDay.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Top Tasks */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Top Tasks
              </Typography>
              {topTasks.map((task) => (
                <Box key={task.id} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body1">
                    {task.title}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Health Snapshot */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Health Snapshot
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="body2" color="text.secondary">
                    Hydration
                  </Typography>
                  <Typography variant="h6">
                    {healthSnapshot.hydration} glasses
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="text.secondary">
                    Steps
                  </Typography>
                  <Typography variant="h6">
                    {healthSnapshot.steps}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="text.secondary">
                    Meals
                  </Typography>
                  <Typography variant="h6">
                    {healthSnapshot.meals}/3
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Finance Tip */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {financeTip.title}
              </Typography>
              <Typography variant="body1">
                {financeTip.tip}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
} 