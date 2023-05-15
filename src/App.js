import "./styles/App.css";
import Api from "./api/Api";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [list, setList] = useState([]);
  const [status, setStatus] = useState(0);
  const [enableItemTable, setEnableItemTable] = useState(false);

  const statusClear = () => {
    console.log(status);
    setStatus(0);
  };

  // GET ITEMS
  useEffect(() => {
    const getAllItemData = async () => {
      const allItems = await getItemData();
      if (allItems) setList(allItems);
    };

    getAllItemData();
  }, [list]);

  const getItemData = async () => {
    const response = await Api.get("/all")
      .then(setEnableItemTable(true))
      .catch((error) => {
        if (error.request) {
          setEnableItemTable(false);
          setStatus(4);
        }
      });
    return response.data;
  };

  //ADD ITEMS
  const addItemHandler = async (itemEntry) => {
    console.log(itemEntry);

    const request = {
      id: list.length + 1,
      ...itemEntry,
    };

    console.log(request);
    const response = await Api.post("/add", itemEntry)
      .then(setStatus(1))
      .catch((error) => {
        if (error.request) {
          setStatus(5);
        }
      });
    if (status === 1) {
      setList([...list, response.data]);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // UPDATE ITEMS
  const updateItemHandler = async (request) => {
    console.log(request);
    const response = await Api.put(`/update/${request.id}`, request)
      .then(setStatus(2))
      .catch((error) => {
        if (error.request) {
          setStatus(6);
        }
      });
    if (status === 2) {
      console.log(response);
      setList(
        list.map((item) => {
          return item.id === request.id ? { ...response.data } : item;
        })
      );
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // DELETE ITEMS
  const deleteItemHandler = async (request) => {
    console.log(request);
    await Api.delete(`/delete/${request}`)
      .then(setStatus(3))
      .catch((error) => {
        if (error.request) {
          setStatus(7);
        }
      });
    const newList = list.filter((item) => {
      return item.id !== request.id;
    });
    setList(newList);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              items={list}
              status={status}
              tableToggle={enableItemTable}
              onClearStatus={statusClear}
              onAddEntry={addItemHandler}
              onDeleteEntry={deleteItemHandler}
              onUpdateEntry={updateItemHandler}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
