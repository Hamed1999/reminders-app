import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';
import { log } from 'console';
import NewReminder from './components/NewReminder';
import { title } from 'process';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(()=>{
    loadReminders()
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  }

  const removeReminder = async (id: number) => {
    await reminderService.removeReminder(id);
    setReminders(reminders.filter(reminder =>  reminder.id !== id));
    // console.log(`Deleted ${id}.`);
  };

  const addReminder = async (title: string) => {
    if (reminders.find(item => item.title.toUpperCase() === title.toUpperCase()))
      return;
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder}/>
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
