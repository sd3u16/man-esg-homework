import React from 'react';

function CompanyCard({ company, selectedDate }) {
  const scores = company.esg_scores.find(score => score.date === selectedDate);

  return (
    <div className="company-card">
      <h2>{company.company}</h2>
      {scores ? (
        <ul>
          <li className={scores.environmental > 80 ? 'highlight' : ''}>
            Environmental: {scores.environmental}
          </li>
          <li className={scores.social > 80 ? 'highlight' : ''}>
            Social: {scores.social}
          </li>
          <li className={scores.governance > 80 ? 'highlight' : ''}>
            Governance: {scores.governance}
          </li>
        </ul>
      ) : (
        <p>No data available for the selected date.</p>
      )}
    </div>
  );
}

export default CompanyCard;
