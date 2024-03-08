import Header from "../../components/Header";
import TodoContainer from "./TodoContainer";
import Footer from "../../components/Footer";

function ListPage(){

  return (
    <div id="todo">
      <Header />
      <TodoContainer />
      <Footer />
    </div>
  );
}

export default ListPage;