interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

type AddFunction = (text: string) => void;
