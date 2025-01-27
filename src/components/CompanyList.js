import React from 'react';
import CompanyCard from './CompanyCard';

function CompanyList({ companies, selectedDate }) {
  return (
    <div className="company-list">
      {companies.length > 0 ? (
        companies.map((company) => (
          <CompanyCard key={company.company} company={company} selectedDate={selectedDate} />
        ))
      ) : (
        <p>No companies match your search query.</p>
      )}
    </div>
  );
}

export default CompanyList;
