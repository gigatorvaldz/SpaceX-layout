import "./styles/template.scss";
import css from "./styles/App.module.scss";
import Header from "./components/Header";
import InfoList from "./components/InfoList";
import classNames from "classnames";
import Button from "./components/UI/Button";
import SparkleBackground  from "./components/SparkleBackground";
function App() {
  return (
    <div className={css.container}>
      <Header/>
      <SparkleBackground />
      <main className={classNames("wrapper", css.content)}>
        <div className={css.tagline}>
          <h1>ПУТЕШЕСТВИЕ</h1>
          <h2>на красную планету</h2>
          <div className={css.taglinebtn}>
            <Button>Начать путешествие</Button>
          </div>
        </div>
        <div className={css.info}>
          <InfoList />
        </div>
      </main>
    </div>
  );
}

export default App;
