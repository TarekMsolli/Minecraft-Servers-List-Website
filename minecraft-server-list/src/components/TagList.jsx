import React from 'react';

const TagList = ({ tags, selectedTag, onSelectTag }) => {
    return (
        <div style={styles.container}>
            <h2>Popular Tags</h2>
            <div style={styles.tagList}>
                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => onSelectTag(tag)}
                        style={selectedTag === tag ? styles.activeTag : styles.tagButton}
                    >
                        {tag}
                    </button>
                ))}
                <button
                    onClick={() => onSelectTag(null)}
                    style={selectedTag === null ? styles.activeTag : styles.tagButton}
                >
                    All
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        marginBottom: '20px',
    },
    tagList: {
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
    },
    tagButton: {
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: '#f2f2f2',
        border: 'none',
    },
    activeTag: {
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
    },
};

export default TagList;
