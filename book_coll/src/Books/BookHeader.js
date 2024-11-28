import React from "react";

const BookHeader = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>📚 WELCOME TO BLR BOOKSHOP</h1>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
         
          <li style={styles.navItem}>
            <a href="/" style={styles.navLink}>
              Books
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/genres" style={styles.navLink}>
              Genres
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/addBook" style={styles.navLink}>
              Add Book
            </a>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "white",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    alignItems: "center",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
  },
  navLinkHover: {
    color: "#f0e68c",
  },
};

export default BookHeader;
