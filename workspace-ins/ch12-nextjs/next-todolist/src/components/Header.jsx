import Link from "next/link";

export default function Header(){
  return (
    <header>
      <h1>Todo List :)</h1>
      <nav>
        <div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/list">TodoList</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}