import { Category } from "./category";

export class Post {
  id_post! : number;
  title! : string;
  author! : string;
  content! : string;
  date? : Date;
  category? : Category;
  comments? : Comment;
}
