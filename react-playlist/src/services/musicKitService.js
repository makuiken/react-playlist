const fetchPlaylist = async (playlistId) => {
    try {
      const music = window.MusicKit.getInstance();
      return await music.api.playlist(playlistId);
    } catch (error) {
      console.error('Error fetching playlist:', error);
      throw error; // rethrow the error for handling it in the calling component
    }
  };
  
  export { fetchPlaylist };