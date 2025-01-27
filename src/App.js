import React, { useState } from 'react';
import './App.css';
import esgData from './data.json';
import SearchBar from './components/SearchBar';
import DateSelector from './components/DateSelector';
import CompanyList from './components/CompanyList';

function App() {
  const [query, setQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('2023-01-01');

  const enhancedEsgData = esgData.map(company => ({
    ...company,
    searchableName: `${company.company.toLowerCase()} ${company.company[0].toLowerCase()}`
  }));

  const filteredCompanies = enhancedEsgData.filter(company =>
    company.searchableName.includes(query.toLowerCase().trim())
  );

  return (
    <div className="App">
      <h1>ESG Scores</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <CompanyList companies={filteredCompanies} selectedDate={selectedDate} />
    </div>
  );
}

export default App;

