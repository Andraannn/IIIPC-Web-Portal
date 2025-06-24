import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Modal from '../components/Modal';
import '../assets/css/styles.css';
import '../assets/css/home.css';
import { BsFillMegaphoneFill } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


function Home() {
  const [announcements, setAnnouncements] = useState([]);
  const [announcementPage, setAnnouncementPage] = useState(0);
  const announcementsPerPage = 3;

  const paginatedAnnouncements = announcements.slice(
    announcementPage * announcementsPerPage,
    (announcementPage + 1) * announcementsPerPage
  );
  const hasNextAnnouncements = (announcementPage + 1) * announcementsPerPage < announcements.length;
  const hasPrevAnnouncements = announcementPage > 0;

  const [events, setEvents] = useState([]);
  const [eventPage, setEventPage] = useState(0);
  const eventsPerPage = 5;

  const sortedEvents = [...events].sort((a, b) => new Date(a.event_date) - new Date(b.event_date));

  const paginatedEvents = sortedEvents.slice(
    eventPage * eventsPerPage,
    (eventPage + 1) * eventsPerPage
  );

  const hasNextEvents = (eventPage + 1) * eventsPerPage < sortedEvents.length;
  const hasPrevEvents = eventPage > 0;

  useEffect(() => {
    fetch("http://localhost:8000/api/announcements/")
      .then(res => res.json())
      .then(data => setAnnouncements(data));

    fetch("http://localhost:8000/api/events/")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const [activeStep, setActiveStep] = useState(null);
  const [isClosing, setisClosing] = useState(false);

  const handleClose = () => {
    setisClosing(true);
    setTimeout(() => {
      setActiveStep(null);
      setisClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && activeStep !== null) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeStep]);

  const colors = ['#1976d2', '#d32f2f', '#388e3c', '#f57c00', '#7b1fa2', '#0097a7'];
  const steps = [
    'STEP 1: Client Inquiry',
    'STEP 2: Orientation',
    'STEP 3: Submission',
    'STEP 4: Validation',
    'Step 5: Resolution',
    'FINAL STEP: Awarding',
  ];
  const modalContent = [
    [
      { type: 'numbered', text: 'Client inquires on the application process and incentives (walk in, online, call)' },
      { type: 'numbered', text: 'LEDIP Office encourages client to email initial documents to make the transaction official' },
      { type: 'bulleted', text: 'Letter of Intent' },
      { type: 'bulleted', text: 'Project Profile' },
      { type: 'text', text: '<b>NOTE:</b> In the absence of a Letter of Intent and a Project Profile, the client shall <strong>NOT</strong> be entertained' },
    ],
    [
      { type: 'numbered', text: 'Client visits LEDIP Office for brief orientation' },
      { type: 'numbered', text: 'LEDIP Office provides checklist of requirements' },
      { type: 'numbered', text: 'Client signs waiver and commitment of undertaking' },
      { type: 'text', text: '<b>NOTE:</b> To proceed with the application, a waiver and commitment of undertaking must be both signed and notarized prior to submission' },
    ],
    [
      { type: 'numbered', text: 'Client submits complete document' },
      { type: 'numbered', text: 'LEDIP Office issues “Acknowledgment Receipt”, this marks DAY 1 of the application' },
      { type: 'text', text: '<b>NOTE:</b> Please be advised that only complete and duly accomplished documentary requirements will be accepted for evaluation' },
    ],
    [
      { type: 'numbered', text: 'MTWG conducts technical and legal validation of the application' },
      { type: 'numbered', text: 'MTWG endorses recommendation to the Board for decision' },
      { type: 'text', text: '<b>NOTE:</b> The MTWG has <strong>10 days</strong> to process the request. If any findings arise, the LEDIP Office will <strong>immediately</strong> notify the client through an official notice, specifying the number of days given for compliance' },
    ],
    [
      { type: 'numbered', text: 'Board Issues Resolution upon the recommendation of MTWG' },
      { type: 'text', text: "<b>NOTE:</b> The LEDIPO will <strong>request a special Board meeting</strong> for this purpose. If the MTWG recommends that the client's submitted documents are <strong>insufficient for approval</strong>, the Board Resolution will <strong>explicitly state</strong> this as the basis for the client's appeal to the SP." },
    ],
    [
      { type: 'numbered', text: 'LEDIP Office schedules awarding of Certificate of Authority' },
    ],
  ];

  const [ResModal1, setResModal1] = useState(false);
  const [ResModal2, setResModal2] = useState(false);

  return (
    <>
      <div className='page-container'>
        <Header />
        <Hero />
        <main className='main-content'>
          <section className="whatsnew-section">
            <div className="columns">
              {/* Announcements */}
              <div className="column announcements">
                <h3 className="column-title">ANNOUNCEMENTS</h3>
                {paginatedAnnouncements.length === 0 ? (
                  <p className="no-announcements-message">No Announcements</p>
                ) : (
                  <ul className="item-list">
                  {paginatedAnnouncements.map(item => (
                    <li key={item.id} className="item">
                      <p className="item-title">
                        <BsFillMegaphoneFill style={{ marginRight: '10px' }} /> {item.title}
                      </p>
                      <p className="item-date">{new Date(item.created_at).toLocaleString()}</p>
                      <p className="item-description">{item.description}</p>

                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="learn-more-link"
                        >
                          Learn more <MdOutlineKeyboardDoubleArrowRight />
                        </a>
                      )}
                    </li>
                  ))}
                  </ul>
                )}
                {/* Pagination Controls */}
                <div className="pagination-controls">
                  <button disabled={!hasPrevAnnouncements} onClick={() => setAnnouncementPage(p => p - 1)}>
                    <GrPrevious />
                  </button>
                  <button disabled={!hasNextAnnouncements} onClick={() => setAnnouncementPage(p => p + 1)}>
                    <GrNext />
                  </button>
                </div>
              </div>
              {/* Events */}
              <div className="column events">
                <h3 className="column-title">UPCOMING EVENTS</h3>
                {paginatedEvents.length === 0 ? (
                  <p className="no-events-message">No Upcoming Events</p>
                ) : (
                  <ul className="item-list">
                    {paginatedEvents.map(item => {
                      const startDate = new Date(item.event_date);
                      const endDate = item.end_date ? new Date(item.end_date) : null;

                      const sameMonth = endDate && startDate.getMonth() === endDate.getMonth();
                      const sameYear = endDate && startDate.getFullYear() === endDate.getFullYear();

                      const month = startDate.toLocaleString("default", { month: "short" }).toUpperCase();
                      const day = startDate.getDate();
                      const time = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                      let dateBox;

                      if (!endDate) {
                        // Single-day event
                        dateBox = (
                          <div className="event-date-box">
                            <div className="event-month">{month}</div>
                            <div className="event-day">{day}</div>
                          </div>
                        );
                      } else if (sameMonth && sameYear) {
                        // Multi-day, same month
                        dateBox = (
                          <div className="event-date-box">
                            <div className="event-month">{month}</div>
                            <div className="event-day">{`${startDate.getDate()}–${endDate.getDate()}`}</div>
                          </div>
                        );
                      } else {
                        // Multi-day, different month/year — cross-month style
                        const startMonth = startDate.toLocaleString("default", { month: "short" }).toUpperCase();
                        const startDay = startDate.getDate();
                        const endMonth = endDate.toLocaleString("default", { month: "short" }).toUpperCase();
                        const endDay = endDate.getDate();

                        dateBox = (
                          <div className="event-date-box cross-month">
                            <div className="mini-box">
                              <div className="mini-month">{startMonth}</div>
                              <div className="mini-day">{startDay}</div>
                            </div>
                            <div className="mini-box">
                              <div className="mini-month">{endMonth}</div>
                              <div className="mini-day">{endDay}</div>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <li key={item.id} className="event-card">
                          {dateBox}
                          <div className="event-details">
                            <p className="event-title">{item.title}</p>
                            <p className="event-time">{time}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {/* Pagination Controls */}
                <div className="pagination-controls">
                  <button disabled={!hasPrevEvents} onClick={() => setEventPage(p => p - 1)}>
                    <GrPrevious />
                  </button>
                  <button disabled={!hasNextEvents} onClick={() => setEventPage(p => p + 1)}>
                    <GrNext />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="flow-section">
            <h2>IIIPC Process Flow</h2>
            <div className="timeline">
              {steps.map((desc, index) => (
                <div
                  className={`timeline-step ${index % 2 === 1 ? 'reverse' : ''}`}
                  key={index}
                >
                  <div
                    className="timeline-step-number clickable"
                    style={{ backgroundColor: colors[index] }}
                    onClick={() => setActiveStep(index)}
                  >
                    {index + 1}
                  </div>
                  <p className="timeline-step-description">
                    {
                      (() => {
                        const match = desc.match(/^((STEP \d+:|FINAL STEP:))/i);
                        if (match) {
                          return (
                            <>
                              <strong>{match[1]}</strong>
                              {desc.slice(match[1].length)}
                            </>
                          );
                        }
                        return desc;
                      })()
                    }
                  </p>
                </div>
              ))}
            </div>
            {activeStep !== null && (
              <div className="modal-overlay" onClick={handleClose}>
                <div
                  className={`modal-content ${isClosing ? 'closing' : ''}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="modal-close" onClick={handleClose}>×</button>
                  <h3>{steps[activeStep]}</h3>

                  <ul className="modal-list">
                    {modalContent[activeStep].map((item, idx) => {
                      if (item.type === 'numbered') {
                        return (
                          <li className="numbered" key={idx}>
                            <span className="list-index">{idx + 1}.</span> {item.text}
                          </li>
                        );
                      } else if (item.type === 'bulleted') {
                        return (
                          <li className="bulleted" key={idx}>
                            {item.text}
                          </li>
                        );
                      } else if (item.type === 'text') {
                        return (
                          <li
                            className="note-text"
                            key={idx}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          />
                        );
                      }
                      return null;
                    })}
                  </ul>
                </div>
              </div>
            )}
          </section>
          <section className="services-section">
            <h2>IIIPC Resources & Quick Links</h2>
            <div className="resource-list">
              <div className="resource-card card-2">
                <h3>Iligan Business Profiling and Accreditation Program</h3>
                <p>The City Government of Iligan, through the Local Economic Development and Investment Promotions (LEDIP) Office, is implementing the Iligan Business Profiling and Accreditation Program (IBAP) to create a database of legitimate and active businesses in the city.</p>
                <button className="btn process-btn" onClick={() => setResModal1(true)}>
                  Learn More
                </button>
              </div>

              <Modal
                show={ResModal1}
                onClose={() => setResModal1(false)}
                title="About Iligan Business Profiling and Accreditation Program (IBAP)"
              >
                <p>Here is more information about the Iligan Business Profiling and Accreditation Program...</p>
              </Modal>

              <div className="resource-card card-3">
                <h3>Incentives Application Checklist</h3>
                <p>To guide applicants through the investment incentive process efficiently, the following checklist outlines the necessary requirements to ensure complete compliance.</p>
                <button className="btn process-btn" onClick={() => setResModal2(true)}>
                  View Application Checklist
                </button>
              </div>

              <Modal
                show={ResModal2}
                onClose={() => setResModal2(false)}
                title="Incentives Application Checklist"
              >
                <p>Here is more information about the Iligan Business Profiling and Accreditation Program...</p>
              </Modal>

              <div className="resource-card card-4">
                <h3>Excerpts from the Revised Investment Code of 2025</h3>
                <p>Access excerpts from the Revised Investment Code of 2025 of the City of Iligan</p>
                <a href="https://tinyurl.com/2wk3bu9t" target="_blank" rel="noreferrer" className="btn process-btn">View Excerpts</a>
              </div>

              <div className="resource-card card-5">
                <h3>DTI Reference</h3>
                <p>View Department of Trade and Industry (DTI) resources including BMBE and other MSME-related policies.</p>
                <a href="https://tinyurl.com/DTI-BMBE" target="_blank" rel="noreferrer" className="btn process-btn">Visit DTI Website</a>
              </div>

              <div className="resource-card card-6">
                <h3>BOI Reference</h3>
                <p>Access Board of Investments guidelines for tax incentives, investment priority areas, and support.</p>
                <a href="https://tinyurl.com/BOI-GUIDEBOOK" target="_blank" rel="noreferrer" className="btn process-btn">Visit BOI Guidelines</a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;

