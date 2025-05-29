import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { useState } from 'react';

interface PrayerEntry {
  id: number;
  date: string;
  content: string;
}

export default function Faith() {
  const [prayerEntry, setPrayerEntry] = useState('');
  const [prayerJournal, setPrayerJournal] = useState<PrayerEntry[]>([
    {
      id: 1,
      date: new Date().toLocaleDateString(),
      content: "Thank you Lord for this new day. Guide me in your ways.",
    },
  ]);

  const handleAddPrayer = () => {
    if (prayerEntry.trim()) {
      setPrayerJournal([
        {
          id: prayerJournal.length + 1,
          date: new Date().toLocaleDateString(),
          content: prayerEntry.trim(),
        },
        ...prayerJournal,
      ]);
      setPrayerEntry('');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Faith & Spiritual Life
      </Typography>

      <Grid container spacing={3}>
        {/* Daily Bible Reading */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Daily Bible Reading
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                John 3:16
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Today's reading plan: John 3:1-21
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Prayer Journal */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Prayer Journal
              </Typography>
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Write your prayer here..."
                  value={prayerEntry}
                  onChange={(e) => setPrayerEntry(e.target.value)}
                />
                <Button
                  variant="contained"
                  onClick={handleAddPrayer}
                  sx={{ mt: 1 }}
                >
                  Add Prayer
                </Button>
              </Box>
              <List>
                {prayerJournal.map((entry) => (
                  <Box key={entry.id}>
                    <ListItem>
                      <ListItemText
                        primary={entry.content}
                        secondary={entry.date}
                      />
                    </ListItem>
                    <Divider />
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Spiritual Habits */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Spiritual Habits
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1">Prayer</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Daily prayer time: 15 minutes
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1">Bible Reading</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Daily reading: 1 chapter
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle1">Gratitude</Typography>
                  <Typography variant="body2" color="text.secondary">
                    3 things to thank God for today
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
} 