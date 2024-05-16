import React from 'react';

const LogList = ({ logs }) => {
  return (
    <div className="log-list">
      <h2>Log List</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <div>Level: {log.level}</div>
            <div>Log String: {log.log_string}</div>
            <div>Timestamp: {log.timestamp}</div>
            <div>Source: {log.metadata.source}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogList;
