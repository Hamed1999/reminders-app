import axios from 'axios';
import Reminder from '../models/reminder';


class ReminderService {
  http = axios.create({
    baseURL: 'http://localhost:8000' ///  http://jsonplaceholder.typicode.com/
  });

  async getReminders(){
    const response = await this.http.get<Reminder[]>('/reminders'); // /todos
    return response.data;
  }

  async addReminder(title: string){
    const response = await this.http.post<Reminder>('/reminders', { title }); // /todos
    return response.data;
  }

  async removeReminder(id: number){
    // const response = await this.http.delete(`/reminders/${id}` ); // /todos/ + id
    const response = await this.http.delete(`/reminders/${id}`);
    console.log('response:', response);
    return response.data;
  }
};

const reminderService = new ReminderService();

export default reminderService;