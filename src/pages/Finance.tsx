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
  Divider,
} from '@mui/material';
import {
  AccountBalance as SavingsIcon,
  VolunteerActivism as GivingIcon,
  TrendingUp as InvestmentIcon,
} from '@mui/icons-material';

const monthlyBudget = {
  income: 5000,
  expenses: {
    tithe: 500,
    savings: 1000,
    bills: 2000,
    groceries: 500,
    entertainment: 300,
  },
};

const financialGoals = [
  {
    name: "Emergency Fund",
    target: 10000,
    current: 5000,
    icon: <SavingsIcon />,
  },
  {
    name: "Missions Giving",
    target: 2000,
    current: 1500,
    icon: <GivingIcon />,
  },
  {
    name: "Investment Portfolio",
    target: 50000,
    current: 25000,
    icon: <InvestmentIcon />,
  },
];

const monthlyTip = {
  title: "Biblical Financial Wisdom",
  tip: "Proverbs 3:9-10 reminds us to honor the LORD with our wealth and with the firstfruits of all our produce. Consider setting up automatic giving to your church or favorite ministry.",
};

export default function Finance() {
  const totalExpenses = Object.values(monthlyBudget.expenses).reduce((a, b) => a + b, 0);
  const remaining = monthlyBudget.income - totalExpenses;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Finance & Career Growth
      </Typography>

      <Grid container spacing={3}>
        {/* Monthly Budget Overview */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Budget Overview
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1">Income</Typography>
                  <Typography variant="h6" color="primary">
                    ${monthlyBudget.income.toLocaleString()}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1">Expenses</Typography>
                  <Typography variant="h6" color="error">
                    ${totalExpenses.toLocaleString()}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1">Remaining</Typography>
                  <Typography variant="h6" color={remaining >= 0 ? "success.main" : "error.main"}>
                    ${remaining.toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Financial Goals */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Financial Goals
              </Typography>
              <List>
                {financialGoals.map((goal) => (
                  <Box key={goal.name}>
                    <ListItem>
                      <ListItemIcon>{goal.icon}</ListItemIcon>
                      <ListItemText
                        primary={goal.name}
                        secondary={
                          <Box sx={{ mt: 1 }}>
                            <LinearProgress
                              variant="determinate"
                              value={(goal.current / goal.target) * 100}
                              sx={{ mb: 0.5 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Monthly Tip */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {monthlyTip.title}
              </Typography>
              <Typography variant="body1">
                {monthlyTip.tip}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Expense Breakdown */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Expense Breakdown
              </Typography>
              <Grid container spacing={2}>
                {Object.entries(monthlyBudget.expenses).map(([category, amount]) => (
                  <Grid item xs={12} sm={4} key={category}>
                    <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
                      {category}
                    </Typography>
                    <Typography variant="h6">
                      ${amount.toLocaleString()}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={(amount / totalExpenses) * 100}
                      sx={{ mt: 1 }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
} 