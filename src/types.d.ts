interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

type AddFunction = (text: string) => void;

type ToggleFn = (todo: TodoType) => void;

type DeleteFn = (id: string | number) => void;
