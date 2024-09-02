import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import List from "./List";
import styles from "./ListContainer.module.scss";
import ListContainerSkelton from "./ListContainerSkelton";

function ListContainer() {
  const [studentData, setStudentData] = useState([]);
  const [filterStudentList, setFilterStudentList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/users?limit=20");
    const dataJson = await data.json();
    setStudentData(dataJson.users);
    setFilterStudentList(dataJson.users);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return studentData.length === 0 ? (
    <ListContainerSkelton />
  ) : (
    <>
      <h2 className={styles.heading}>Students Details List</h2>
      <div>
        <input
          className={styles.inputSearch}
          type="text"
          placeholder="Search for eg* james"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className={styles.searchBtn}
          onClick={() => {
            const filterStudent = studentData.filter((data) =>
              data.firstName.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterStudentList(filterStudent);
          }}
        >
          Search
        </button>
      </div>
      <ul className={styles.listContainer}>
        {filterStudentList.map((data, index) => {
          return <List key={index} studenDataList={data} />;
        })}
      </ul>
    </>
  );
}

export default ListContainer;
