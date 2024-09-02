import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import ListContainer from "./components/ListContainer/ListContainer";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <ListContainer />
    </div>
  );
}

export default App;
