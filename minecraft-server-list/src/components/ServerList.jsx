import React, { useState } from 'react';
import TagList from './TagList';

const servers = [
    { rank: 1, name: 'Hypixel', description: 'The best Minecraft server with tons of games.', players: 50000, ip: 'mc.hypixel.net', tags: ['mini-games', 'popular'] },
    { rank: 2, name: 'Mineplex', description: 'A popular Minecraft server with a variety of games.', players: 30000, ip: 'us.mineplex.com', tags: ['mini-games', 'pvp'] },
    { rank: 3, name: 'The Hive', description: 'Mini-games and more.', players: 20000, ip: 'play.hivemc.com', tags: ['mini-games'] },
    { rank: 4, name: 'Cubecraft', description: 'Innovative mini-games and more.', players: 18000, ip: 'play.cubecraft.net', tags: ['mini-games'] },
    { rank: 5, name: 'Wynncraft', description: 'An expansive MMORPG in Minecraft.', players: 16000, ip: 'play.wynncraft.com', tags: ['mmorpg'] },
    { rank: 6, name: 'GommeHD', description: 'Large German Minecraft server.', players: 14000, ip: 'gommehd.net', tags: ['mini-games'] },
    { rank: 7, name: 'PvP Land', description: 'Practice PvP and more.', players: 12000, ip: 'pvp.land', tags: ['pvp'] },
    { rank: 8, name: '2b2t', description: 'The oldest anarchy server in Minecraft.', players: 10000, ip: '2b2t.org', tags: ['anarchy'] },
    { rank: 9, name: 'ManaCube', description: 'A diverse range of game modes.', players: 9000, ip: 'play.manacube.net', tags: ['mini-games'] },
    { rank: 10, name: 'Desteria', description: 'Factions and more.', players: 8000, ip: 'pvp.desteria.com', tags: ['factions'] },
    { rank: 11, name: 'ExtremeCraft', description: 'A variety of game modes.', players: 7500, ip: 'play.extremecraft.net', tags: ['mini-games'] },
    { rank: 12, name: 'MineHeroes', description: 'A variety of game modes.', players: 7000, ip: 'play.mineheroes.net', tags: ['mini-games'] },
    { rank: 13, name: 'Server 13', description: 'Description 13', players: 6800, ip: 'ip13.example.com', tags: ['pvp'] },
    { rank: 14, name: 'Server 14', description: 'Description 14', players: 6600, ip: 'ip14.example.com', tags: ['factions'] },
    { rank: 15, name: 'Server 15', description: 'Description 15', players: 6400, ip: 'ip15.example.com', tags: ['anarchy'] },
    { rank: 16, name: 'Server 16', description: 'Description 16', players: 6200, ip: 'ip16.example.com', tags: ['mini-games'] },
    { rank: 17, name: 'Server 17', description: 'Description 17', players: 6000, ip: 'ip17.example.com', tags: ['mmorpg'] },
    { rank: 18, name: 'Server 18', description: 'Description 18', players: 5800, ip: 'ip18.example.com', tags: ['mini-games'] },
    { rank: 19, name: 'Server 19', description: 'Description 19', players: 5600, ip: 'ip19.example.com', tags: ['pvp'] },
    { rank: 20, name: 'Server 20', description: 'Description 20', players: 5400, ip: 'ip20.example.com', tags: ['mini-games'] },
    { rank: 21, name: 'Server 21', description: 'Description 21', players: 5200, ip: 'ip21.example.com', tags: ['popular'] },
    { rank: 22, name: 'Server 22', description: 'Description 22', players: 5000, ip: 'ip22.example.com', tags: ['mini-games'] },
    { rank: 23, name: 'Server 23', description: 'Description 23', players: 4800, ip: 'ip23.example.com', tags: ['anarchy'] },
    { rank: 24, name: 'Server 24', description: 'Description 24', players: 4600, ip: 'ip24.example.com', tags: ['mini-games'] },
    { rank: 25, name: 'Server 25', description: 'Description 25', players: 4400, ip: 'ip25.example.com', tags: ['factions'] },
    { rank: 26, name: 'Server 26', description: 'Description 26', players: 4200, ip: 'ip26.example.com', tags: ['pvp'] },
    { rank: 27, name: 'Server 27', description: 'Description 27', players: 4000, ip: 'ip27.example.com', tags: ['mini-games'] },
    { rank: 28, name: 'Server 28', description: 'Description 28', players: 3800, ip: 'ip28.example.com', tags: ['mmorpg'] },
    { rank: 29, name: 'Server 29', description: 'Description 29', players: 3600, ip: 'ip29.example.com', tags: ['mini-games'] },
    { rank: 30, name: 'Server 30', description: 'Description 30', players: 3400, ip: 'ip30.example.com', tags: ['anarchy'] },
    { rank: 31, name: 'Server 31', description: 'Description 31', players: 3200, ip: 'ip31.example.com', tags: ['pvp'] },
    { rank: 32, name: 'Server 32', description: 'Description 32', players: 3000, ip: 'ip32.example.com', tags: ['popular'] },
    { rank: 33, name: 'Server 33', description: 'Description 33', players: 2800, ip: 'ip33.example.com', tags: ['mini-games'] },
    { rank: 34, name: 'Server 34', description: 'Description 34', players: 2600, ip: 'ip34.example.com', tags: ['pvp'] },
    { rank: 35, name: 'Server 35', description: 'Description 35', players: 2400, ip: 'ip35.example.com', tags: ['anarchy'] },
    { rank: 36, name: 'Server 36', description: 'Description 36', players: 2200, ip: 'ip36.example.com', tags: ['mmorpg'] },
    { rank: 37, name: 'Server 37', description: 'Description 37', players: 2000, ip: 'ip37.example.com', tags: ['mini-games'] },
    { rank: 38, name: 'Server 38', description: 'Description 38', players: 1800, ip: 'ip38.example.com', tags: ['factions'] },
    { rank: 39, name: 'Server 39', description: 'Description 39', players: 1600, ip: 'ip39.example.com', tags: ['popular'] },
    { rank: 40, name: 'Server 40', description: 'Description 40', players: 1400, ip: 'ip40.example.com', tags: ['mini-games'] },
    { rank: 41, name: 'Server 41', description: 'Description 41', players: 1200, ip: 'ip41.example.com', tags: ['mmorpg'] },
    { rank: 42, name: 'Server 42', description: 'Description 42', players: 1000, ip: 'ip42.example.com', tags: ['mini-games'] },
    { rank: 43, name: 'Server 43', description: 'Description 43', players: 800, ip: 'ip43.example.com', tags: ['pvp'] },
    { rank: 44, name: 'Server 44', description: 'Description 44', players: 600, ip: 'ip44.example.com', tags: ['factions'] },
    { rank: 45, name: 'Server 45', description: 'Description 45', players: 400, ip: 'ip45.example.com', tags: ['anarchy'] },
    { rank: 46, name: 'Server 46', description: 'Description 46', players: 200, ip: 'ip46.example.com', tags: ['mini-games'] },
    { rank: 47, name: 'Server 47', description: 'Description 47', players: 100, ip: 'ip47.example.com', tags: ['mmorpg'] },
    { rank: 48, name: 'Server 48', description: 'Description 48', players: 50, ip: 'ip48.example.com', tags: ['mini-games'] },
    { rank: 49, name: 'Server 49', description: 'Description 49', players: 25, ip: 'ip49.example.com', tags: ['pvp'] },
    { rank: 50, name: 'Server 50', description: 'Description 50', players: 10, ip: 'ip50.example.com', tags: ['popular'] },
    { rank: 51, name: 'Server 51', description: 'Description 51', players: 5, ip: 'ip51.example.com', tags: ['mini-games'] },
    { rank: 52, name: 'Server 52', description: 'Description 52', players: 5, ip: 'ip52.example.com', tags: ['mini-games'] },
    { rank: 53, name: 'Server 53', description: 'Description 53', players: 5, ip: 'ip53.example.com', tags: ['mini-games'] },
    { rank: 54, name: 'Server 54', description: 'Description 54', players: 5, ip: 'ip54.example.com', tags: ['mini-games'] },
    { rank: 55, name: 'Server 55', description: 'Description 55', players: 5, ip: 'ip55.example.com', tags: ['mini-games'] },
    { rank: 56, name: 'Server 56', description: 'Description 56', players: 5, ip: 'ip56.example.com', tags: ['mini-games'] },
    { rank: 57, name: 'Server 57', description: 'Description 57', players: 5, ip: 'ip57.example.com', tags: ['mini-games'] },
    { rank: 58, name: 'Server 58', description: 'Description 58', players: 5, ip: 'ip58.example.com', tags: ['mini-games'] },
    { rank: 59, name: 'Server 59', description: 'Description 59', players: 5, ip: 'ip59.example.com', tags: ['mini-games'] },
    { rank: 60, name: 'Server 60', description: 'Description 60', players: 5, ip: 'ip60.example.com', tags: ['mini-games'] },
    { rank: 61, name: 'Server 61', description: 'Description 61', players: 5, ip: 'ip61.example.com', tags: ['mini-games'] },
    { rank: 62, name: 'Server 62', description: 'Description 62', players: 5, ip: 'ip62.example.com', tags: ['mini-games'] },
];

const allTags = Array.from(new Set(servers.flatMap(server => server.tags)));

const ServerList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTag, setSelectedTag] = useState(null);
    const serversPerPage = 10;

    const filteredServers = selectedTag
        ? servers.filter(server => server.tags.includes(selectedTag))
        : servers;

    const indexOfLastServer = currentPage * serversPerPage;
    const indexOfFirstServer = indexOfLastServer - serversPerPage;
    const currentServers = filteredServers.slice(indexOfFirstServer, indexOfLastServer);

    const totalPages = Math.ceil(filteredServers.length / serversPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSelectTag = (tag) => {
        setSelectedTag(tag);
        setCurrentPage(1);
    };

    return (
        <div style={styles.container}>
            <h1>Server List</h1>
            <TagList tags={allTags} selectedTag={selectedTag} onSelectTag={handleSelectTag} />
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Players</th>
                        <th>IP Address</th>
                    </tr>
                </thead>
                <tbody>
                    {currentServers.map((server) => (
                        <tr key={server.rank}>
                            <td>{server.rank}</td>
                            <td>{server.name}</td>
                            <td>{server.description}</td>
                            <td>{server.players}</td>
                            <td>{server.ip}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={styles.pagination}>
                {[...Array(totalPages).keys()].map((number) => (
                    <button
                        key={number + 1}
                        onClick={() => handleClick(number + 1)}
                        style={currentPage === number + 1 ? styles.activePage : styles.pageButton}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        border: '1px solid #ddd',
        padding: '8px',
        backgroundColor: '#f2f2f2',
    },
    td: {
        border: '1px solid #ddd',
        padding: '8px',
    },
    pagination: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
    pageButton: {
        margin: '0 5px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: '#f2f2f2',
        border: 'none',
    },
    activePage: {
        margin: '0 5px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
    },
};

export default ServerList;
