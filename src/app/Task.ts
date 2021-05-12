export interface Task {
  // ? means optional in ts
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
