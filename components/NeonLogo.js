const NeonLogo = () => (
  <>
    <header className='wrapper'>
      <div className='logoNeon'>
        <b>
          Good <span>Enough </span>Li<span>ve</span> Karaoke
        </b>
      </div>
    </header>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
      @import url('https://fonts.googleapis.com/css?family=Bungee+Shade&display=swap');

      .logoNeon {
        text-align: center;
        width: 65%;
        margin: auto;
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        user-select: none;
      }
      .logoNeon b {
        font: 400 13vh 'Bungee Shade';
        color: #fee;
        text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444,
          0 0 0.1em #ff4444, 0 10px 3px #000;
      }
      .logoNeon b span {
        animation: blink linear infinite 2s;
      }
      .logoNeon b span:nth-of-type(2) {
        animation: blink linear infinite 3s;
      }
      @keyframes blink {
        78% {
          color: inherit;
          text-shadow: inherit;
        }
        79% {
          color: #333;
        }
        80% {
          text-shadow: none;
        }
        81% {
          color: inherit;
          text-shadow: inherit;
        }
        82% {
          color: #333;
          text-shadow: none;
        }
        83% {
          color: inherit;
          text-shadow: inherit;
        }
        92% {
          color: #333;
          text-shadow: none;
        }
        92.5% {
          color: inherit;
          text-shadow: inherit;
        }
      }

      .wrapper {
        margin: 0 auto;
        max-width: 960px;
        padding: 0 2%;
      }
    `}</style>
  </>
);

export default NeonLogo;
