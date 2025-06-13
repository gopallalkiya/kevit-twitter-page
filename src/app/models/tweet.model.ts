export interface Tweet {
  id: number;
  username: string;
  content: string;
  parentId?: number;
  replies?: Tweet[];
}