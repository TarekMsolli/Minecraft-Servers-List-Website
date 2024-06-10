import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>
                <Link to="/" style={styles.link}>Minecraft Servers</Link>
            </div>
            <ul style={styles.navLinks}>
                <li><Link to="/" style={styles.link}>Home</Link></li>
                <li><Link to="/servers" style={styles.link}>Servers List</Link></li>
                <li><Link to="/add-server" style={styles.link}>Add Server</Link></li>
            </ul>
            <div style={styles.search}>
                <input type="text" placeholder="Search servers..." style={styles.searchInput} />
            </div>
            <ul style={styles.authLinks}>
                <li><Link to="/login" style={styles.link}>Login</Link></li>
                <li><Link to="/signup" style={styles.link}>Signup</Link></li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff'
    },
    logo: {
        fontSize: '1.5rem'
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '10px'
    },
    authLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '10px'
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    },
    search: {
        flexGrow: 1,
        textAlign: 'center'
    },
    searchInput: {
        padding: '5px',
        width: '50%'
    }
};

export default Navbar;
