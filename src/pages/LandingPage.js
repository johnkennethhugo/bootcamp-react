import menu from "../assets/menu.png";
import ItemTable from "../components/ItemTable";
import MarqueeHeader from "../components/MarqueeHeader";
import StatusHeader from "../components/StatusHeader";
import StoreHeader from "../components/StoreHeader";
import UserForms from "../components/UserForms";
import "../styles/LandingPage.css";

function LandingPage(page) {
  const newEntry = (entry) => {
    page.onAddEntry(entry);
  };
  const removeEntry = (entry) => {
    page.onDeleteEntry(entry);
  };
  const updateEntry = (entry) => {
    page.onUpdateEntry(entry);
  };
  const statusClear = (e) => {
    console.log(e);
    page.onClearStatus(e);
  };

  return (
    <div className="App">
      <div className="headers">
        <StoreHeader />
        <MarqueeHeader />
        <StatusHeader scenario={page.status} clear={statusClear} />
      </div>

      <div className="app-contents">
        <div className="landing-page">
          <div className="main-container">
            <div className="menu-container">
              <img src={menu} alt="Menu"></img>
            </div>
            <div className="display-container">
              <UserForms onSaveData={newEntry} />
              {page.tableToggle === true ? (
                <ItemTable
                  items={page.items}
                  bills={page.bills}
                  onDeleteData={removeEntry}
                  onUpdateItem={updateEntry}
                />
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="app-footer">
        All rights reserved 2020 @ KopeeTearia
      </footer>
    </div>
  );
}

export default LandingPage;
