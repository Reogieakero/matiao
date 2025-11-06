
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "✅ Community Report Acknowledged.\n\nThank you for your proactive engagement. Our team will assess the issue shortly."
    );
  };

  return (
    <section className="issue-report-section section-padding bg-light">
      <div className="form-header">
        <h2 className="category-title">Submit a Community Issue Report</h2>
        <p className="section-subtitle">
          Help keep Barangay Matiao a safe and thriving community. Use this
          secure form to report <strong>non-emergency concerns</strong> such as
          public utilities, sanitation, or infrastructure issues.
        </p>
      </div>

      <div className="report-form-container">
        <form onSubmit={handleSubmit}>
          {/* --- Name --- */}
          <div className="form-group">
            <label htmlFor="reporterName">
              <i className="fas fa-user"></i> Full Name <span>*</span>
            </label>
            <input
              type="text"
              id="reporterName"
              name="reporterName"
              placeholder="Enter full name for official record"
              required
            />
          </div>

          {/* --- Contact Info --- */}
          <div className="form-group">
            <label htmlFor="contactInfo">
              <i className="fas fa-envelope"></i> Contact Information (Email or
              Mobile) <span>*</span>
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              placeholder="e.g., email@domain.com or 0917-xxx-xxxx"
              required
            />
          </div>

          {/* --- Issue Type --- */}
          <div className="form-group">
            <label htmlFor="issueType">
              <i className="fas fa-exclamation-circle"></i> Nature of Concern{" "}
              <span>*</span>
            </label>
            <div className="custom-select-wrapper">
              <select id="issueType" name="issueType" required>
                <option value="">-- Select Category --</option>
                <option value="Infrastructure">
                  Public Infrastructure Failure (e.g., damaged roads, streetlights)
                </option>
                <option value="Sanitation">
                  Solid Waste & Sanitation Management
                </option>
                <option value="PeaceAndOrder">
                  Minor Peace & Order / Nuisance (Non-emergency)
                </option>
                <option value="Utilities">
                  Public Utilities (Water/Power) Complaint
                </option>
                <option value="Environment">
                  Environmental Concern / Illegal Dumping
                </option>
                <option value="Other">Other Community Concern</option>
              </select>
            </div>
          </div>

          {/* --- Location --- */}
          <div className="form-group">
            <label htmlFor="location">
              <i className="fas fa-map-marker-alt"></i> Specific Address /
              Landmark of Incident <span>*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Purok and nearest landmark (e.g., Purok 4, near the covered court)"
              required
            />
          </div>

          {/* --- Description --- */}
          <div className="form-group">
            <label htmlFor="description">
              <i className="fas fa-align-left"></i> Detailed Description of
              Incident <span>*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              placeholder="Provide details, date, and time of the incident to assist our response team."
              required
            ></textarea>
          </div>

          {/* --- Submit Button --- */}
          <button type="submit" className="submit-report-btn">
            <i className="fas fa-paper-plane"></i> Submit Official Report
          </button>

          <p className="form-note">
            ⚠️ <strong>IMPORTANT:</strong> This form is for{" "}
            <strong>non-emergency</strong> reports only.  
            For emergencies, contact the{" "}
            <strong>BANTAY MATIAO HOTLINE</strong>.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
