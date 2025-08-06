import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <h1 className="title">StokStok</h1>
          
          <div className="status-section">
            <h2 className="status-title">Proje Yapım Aşamasında</h2>
            <p className="status-description">
              Uygulamamız şu anda geliştirme aşamasında.<br />
              Çok yakında sizlerle olacağız!
            </p>
            
            <div className="progress-section">
              <div className="progress-label">Geliştirme: %75 Tamamlandı</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="contact-section">
            <h3 className="contact-title">İletişim</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:info@ztaak.com" className="contact-link">info@ztaak.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Telefon:</span>
                <a href="tel:+905433920956" className="contact-link">+90 (543) 392 0956</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
