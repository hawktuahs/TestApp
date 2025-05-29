import { useState } from 'react';
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
  Rating,
} from '@mui/material';
import {
  SentimentSatisfied as HappyIcon,
  SentimentNeutral as NeutralIcon,
  SentimentDissatisfied as SadIcon,
} from '@mui/icons-material';

interface MoodEntry {
  id: number;
  date: string;
  mood: number;
  note: string;
}

interface GratitudeEntry {
  id: number;
  date: string;
  content: string;
}

export default function Emotional() {
  const [moodEntry, setMoodEntry] = useState('');
  const [moodRating, setMoodRating] = useState<number | null>(3);
  const [gratitudeEntry, setGratitudeEntry] = useState('');

  const [moodJournal, setMoodJournal] = useState<MoodEntry[]>([
    {
      id: 1,
      date: new Date().toLocaleDateString(),
      mood: 4,
      note: "Feeling blessed and grateful today.",
    },
  ]);

  const [gratitudeJournal, setGratitudeJournal] = useState<GratitudeEntry[]>([
    {
      id: 1,
      date: new Date().toLocaleDateString(),
      content: "Thankful for the beautiful sunrise and morning prayer time.",
    },
  ]);

  const handleAddMood = () => {
    if (moodEntry.trim() && moodRating !== null) {
      setMoodJournal([
        {
          id: moodJournal.length + 1,
          date: new Date().toLocaleDateString(),
          mood: moodRating,
          note: moodEntry.trim(),
        },
        ...moodJournal,
      ]);
      setMoodEntry('');
      setMoodRating(3);
    }
  };

  const handleAddGratitude = () => {
    if (gratitudeEntry.trim()) {
      setGratitudeJournal([
        {
          id: gratitudeJournal.length + 1,
          date: new Date().toLocaleDateString(),
          content: gratitudeEntry.trim(),
        },
        ...gratitudeJournal,
      ]);
      setGratitudeEntry('');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Emotional & Mental Health
      </Typography>

      <Grid container spacing={3}>
        {/* Mood Tracker */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Mood Tracker
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography component="legend">How are you feeling today?</Typography>
                <Rating
                  value={moodRating}
                  onChange={(_, newValue) => setMoodRating(newValue)}
                  max={5}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Share your thoughts..."
                  value={moodEntry}
                  onChange={(e) => setMoodEntry(e.target.value)}
                />
                <Button
                  variant="contained"
                  onClick={handleAddMood}
                  sx={{ mt: 1 }}
                >
                  Add Entry
                </Button>
              </Box>
              <List>
                {moodJournal.map((entry) => (
                  <Box key={entry.id}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Rating value={entry.mood} readOnly size="small" sx={{ mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              {entry.date}
                            </Typography>
                          </Box>
                        }
                        secondary={entry.note}
                      />
                    </ListItem>
                    <Divider />
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Gratitude Journal */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Gratitude Journal
              </Typography>
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="What are you grateful for today?"
                  value={gratitudeEntry}
                  onChange={(e) => setGratitudeEntry(e.target.value)}
                />
                <Button
                  variant="contained"
                  onClick={handleAddGratitude}
                  sx={{ mt: 1 }}
                >
                  Add Entry
                </Button>
              </Box>
              <List>
                {gratitudeJournal.map((entry) => (
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

        {/* Mindfulness Tips */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Christian Mindfulness
              </Typography>
              <Typography variant="body1" paragraph>
                Take a moment to breathe and reflect on God's presence:
              </Typography>
              <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                <ol>
                  <li>Breathe in deeply, acknowledging God's love</li>
                  <li>Hold your breath, feeling His presence</li>
                  <li>Exhale slowly, releasing your worries to Him</li>
                  <li>Repeat this breathing pattern while meditating on Psalm 46:10</li>
                </ol>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
} 