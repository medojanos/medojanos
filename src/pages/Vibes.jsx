export default function Vibes() {
  return (
    <>
      <section className="container section">
        <div className="row">
          <div className="col">
            <p className="text-accent">VIBES</p>
            <h1>Listening & uploads</h1>
            <p className="text-secondary">Music listening, playlists, and personal audio uploads across Spotify and SoundCloud</p>
          </div>
          <div className="col">
            <div className="box d-flex justify-content-between align-items-center mb-3">
              <h3>Spotify</h3>
              <a href="https://open.spotify.com/user/31fevr2rbpigidn37ezzldcjqomu?si=348dd1b4432e428e" target="_blank">Open Spotify profile</a>
            </div>
            <div className="box d-flex justify-content-between align-items-center">
              <h3>SoundCloud</h3>
              <a href="https://soundcloud.com/medojanos" target="_blank">Open SoundCloud profile</a>
            </div>
          </div>
        </div>
        <hr/>
      </section>
      <section className="container section">
        <h2>Playlists</h2>
        <p className="text-secondary">For more check out my Spotify profile</p>
        <div className="row">
          <div className="col">
            <iframe data-testid="embed-iframe" style={{borderRadius: 12}} src="https://open.spotify.com/embed/playlist/5ZBXhTX4WOK27NxapJw34m?utm_source=generator&theme=0&si=607e81a062304923" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div className="col">
            <iframe data-testid="embed-iframe" style={{borderRadius: 12}} src="https://open.spotify.com/embed/playlist/5yuqQTVmkt5L7Uy7QofHer?utm_source=generator&theme=0&si=78961b292f604bf7" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </section>
      <section className="container section">
        <h2>Uploads</h2>
        <p className="text-secondary">Soon</p>
      </section>
    </>
  )
}