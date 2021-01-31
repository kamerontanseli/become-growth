const Subscribe = ({ onHide }) => {
  return (
    <>
      <div className="info">
        <div className="info-text">
          <p>Get Notified When New Pages Are Published</p>
          <a
            className="info-btn"
            onClick={onHide}
            target="_blank"
            href="https://kameront.substack.com/"
          >
            Subscribe
          </a>
          <a
            className="info-cancel"
            onClick={(e) => {
              e.preventDefault();
              onHide();
            }}
            href="#"
          >
            No Thanks
          </a>
        </div>
      </div>
      <style jsx>{`
        .info {
          margin-bottom: 20px;
          background-color: #1f1f1f;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          padding: 10px;
        }
        .info-text {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }
        .info-text p {
          margin: 0;
          color: #fff;
          display: inline-block;
          margin-right: 20px;
        }
        .info-btn {
          display: inline-block;
          box-shadow: 0px 2px 8px #00000036;
          padding: 8px 18px;
          border-radius: 4px;
          background-color: #fff;
          color: #000;
          font-weight: 700;
          margin-right: 20px;
        }
        .info-btn:hover {
          text-decoration: none;
        }

        .info-cancel {
          color: #fff;
          text-decoration: underline;
        }

        @media screen and (max-width: 480px) {
          .info-text p,
          .info-btn,
          .info-cancel {
            margin-bottom: 10px;
            font-size: 0.8em;
          }
        }
      `}</style>
    </>
  );
};

export default Subscribe;
