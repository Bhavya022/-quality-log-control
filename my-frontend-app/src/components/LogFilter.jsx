import React from 'react';

const LogFilter = ({ filters, onChange }) => {
  // Handler function to update filters
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  };

  return (
    <div className="log-filter">
      <h2>Log Filter</h2>
      <form>
        <div className="form-group">
          <label>Level:</label>
          <select name="level" value={filters.level} onChange={handleInputChange}>
            <option value="">All</option>
            <option value="info">Info</option>
            <option value="error">Error</option>
            <option value="success">Success</option>
          </select>
        </div>
        <div className="form-group">
          <label>Log String:</label>
          <input type="text" name="log_string" value={filters.log_string} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Timestamp:</label>
          <input type="datetime-local" name="timestamp" value={filters.timestamp} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Source:</label>
          <input type="text" name="source" value={filters.source} onChange={handleInputChange} />
        </div>
      </form>
    </div>
  );
};

export default LogFilter;
