import Link from "next/link";

export default function TodoListItem({ item, handleDelete }){
  return (
    <li>
      <form>
        <span>{ item._id }</span>
        <Link href={ '/list/' + item._id }>{ item.done ? <s>{ item.title }</s> : item.title }</Link>
        <button type="submit" formAction={ handleDelete }>삭제</button>
      </form>
    </li>
  );
}