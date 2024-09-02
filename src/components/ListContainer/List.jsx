import React from "react";
import { useState } from "react";
import styles from "./ListContainer.module.scss";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";

function List(props) {
  const { studenDataList } = props;
  const {
    firstName,
    lastName,
    image,
    gender,
    age,
    height,
    phone,
    address: { address, city, state, stateCode, postalCode, country },
    hair: { color, type },
  } = studenDataList;

  const [openlist, setOpenList] = useState(false);

  return (
    <>
      <li className={`${styles.list} ${openlist ? styles.open : ""}`}>
        <div className={styles.upperBox}>
          <span className={styles.listAvatarBox}>
            <img src={image} className={styles.listAvatarImg} />
          </span>

          <p className={styles.listName}>
            {firstName} {lastName}
          </p>
          <span className={styles.editIcon}>
            <BiEditAlt />
          </span>
          <span
            className={styles.chevronIcon}
            onClick={() => {
              setOpenList(!openlist);
            }}
          >
            {openlist ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.boxInfo}>
            <img src={image} className={styles.boxInfoImg} />
            <div>
              <h4 className={styles.boxInfoName}>
                {firstName} {lastName}
              </h4>
              <ul className={styles.boxInfoList}>
                <li>
                  <span>Gender:</span>
                  <span>{gender}</span>
                </li>
                <li>
                  <span>Age:</span>
                  <span>{age}</span>
                </li>
                <li>
                  <span>Phone:</span>
                  <span>{phone}</span>
                </li>
                <li>
                  <span>Height:</span>
                  <span>{height.toFixed()} centimeters</span>
                </li>
                <li>
                  <span>Hair:</span>
                  <span>
                    {color}, {type}
                  </span>
                </li>
                <li>
                  <span>Address:</span>
                  <span>
                    {address}, {city}, {state}, {stateCode}, {postalCode},{" "}
                    {country}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default List;
