import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import { Heart, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import './story.css';

export const OurStory = () => {
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likesCount, setLikesCount] = useState({});
  const [likedByUser, setLikedByUser] = useState(new Set());
  const [sessionId, setSessionId] = useState(null);
const totalLikes = Object.values(likesCount).reduce((sum, count) => sum + count, 0);
const [comments, setComments] = useState([]);
const [newComment, setNewComment] = useState('');

  // Crear o recuperar session_id
  useEffect(() => {
    let storedId = localStorage.getItem('session_id');
    if (!storedId) {
      storedId = uuidv4();
      localStorage.setItem('session_id', storedId);
    }
    setSessionId(storedId);
  }, []);

  // Traer likes cuando ya tenemos session_id
  useEffect(() => {
    if (sessionId) {
      fetchLikes();
    }
  }, [sessionId]);

  const fetchLikes = async () => {
    const { data, error } = await supabase
      .from('likes')
      .select('photo_index, session_id');

    if (error) {
      console.error('Error fetching likes:', error);
      return;
    }

    const counts = {};
    const userLiked = new Set();

    data.forEach(({ photo_index, session_id: liker }) => {
      counts[photo_index] = (counts[photo_index] || 0) + 1;
      if (liker === sessionId) {
        userLiked.add(photo_index);
      }
    });

    setLikesCount(counts);
    setLikedByUser(userLiked);
  };

  const toggleFavorite = async (index, e) => {
    e.stopPropagation();

    if (likedByUser.has(index)) return;

    await supabase.from('likes').insert([
      { photo_index: index, session_id: sessionId },
    ]);

    setLikesCount((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));

    setLikedByUser((prev) => new Set(prev).add(index));
  };

  const photos = [
    { src: '/img/1.jpeg', caption: 'Un paseo por disneyland', description: 'Un lugar magico con una compañia magica' },
    { src: '/img/2.jpeg', caption: 'Abrazos que lo dicen todo', description: 'En el silencio de un abrazo encontramos nuestro lenguaje más puro' },
    { src: '/img/3.jpeg', caption: 'Foto que lo dice todo', description: 'Cada paso juntos nos acerca más a nuestros sueños compartidos' },
    { src: '/img/4.jpeg', caption: 'Super super happy', description: 'La naturaleza como testigo de nuestro amor más auténtico' },
    { src: '/img/5.jpeg', caption: 'El día que guardamos en la memoria', description: 'Algunos lugares se vuelven especiales simplemente porque estamos juntos' },
    { src: '/img/6.jpeg', caption: 'Complicidad en la playa', description: 'El mar como cómplice de nuestras risas y secretos compartidos' },
    { src: '/img/7.jpeg', caption: 'Juntos, hasta el atardecer', description: 'Cada atardecer contigo es la promesa de un mañana mejor' },
  ];

const openModal = async (photo, index) => {
  setModalImage(photo);
  setCurrentIndex(index);
  await fetchComments(index);
};

const fetchComments = async (index) => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('photo_index', index)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error al traer comentarios:', error);
    return;
  }

  setComments(data);
};


  const closeModal = () => {
    setModalImage(null);
  };

  const navigateModal = (direction) => {
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % photos.length
        : (currentIndex - 1 + photos.length) % photos.length;

    setCurrentIndex(newIndex);
    setModalImage(photos[newIndex]);
  };

  const downloadImage = (src, caption) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `${caption}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCommentSubmit = async (e) => {
  e.preventDefault();
  if (newComment.trim() === '') return;

  const { error } = await supabase.from('comments').insert([
    {
      photo_index: currentIndex,
      session_id: sessionId,
      content: newComment.trim(),
    },
  ]);

  if (!error) {
    setComments([...comments, {
      photo_index: currentIndex,
      session_id: sessionId,
      content: newComment.trim(),
      created_at: new Date().toISOString()
    }]);
    setNewComment('');
  }
};


  return (
    <div className="story-container">
      {/* Header */}
      <div className="story-header">
        <h2 className="story-title">NOSOTROS...</h2>
      </div>

      {/* Gallery Grid */}
      <div className="story-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(photo, index)}>
            <img src={photo.src} alt={photo.caption} className="gallery-image" />
            <div className="gallery-overlay">
              <button className="favorite-btn" onClick={(e) => toggleFavorite(index, e)}>
                <Heart
                  size={20}
                  fill={likedByUser.has(index) ? '#ff4757' : 'none'}
                  color={likedByUser.has(index) ? '#ff4757' : '#fff'}
                />
              </button>
            </div>
            <div className="gallery-caption">
              {photo.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="nav-btn prev-btn" onClick={() => navigateModal('prev')}>
              <ChevronLeft size={24} />
            </button>
            <button className="nav-btn next-btn" onClick={() => navigateModal('next')}>
              <ChevronRight size={24} />
            </button>
            <button className="close-btn" onClick={closeModal}>
              <X size={24} />
            </button>
            <img src={modalImage.src} alt={modalImage.caption} className="modal-image" />
            <div className="modal-info">
              <h3 className="modal-title">{modalImage.caption}</h3>
              <p className="modal-description">{modalImage.description}</p>
              <div className="modal-actions">
                <button className="action-btn" onClick={(e) => toggleFavorite(currentIndex, e)}>
                  <Heart
                    size={20}
                    fill={likedByUser.has(currentIndex) ? '#ff4757' : 'none'}
                    color={likedByUser.has(currentIndex) ? '#ff4757' : '#666'}
                  />
                  {likedByUser.has(currentIndex) ? 'Me gusta' : 'Like'}
                </button>
                <button className="action-btn" onClick={() => downloadImage(modalImage.src, modalImage.caption)}>
                  <Download size={20} color="#666" />
                  Descargar
                </button>
              </div>
              <div className="comments-section">
  <div className="comments-list">
    {comments.map((comment, idx) => (
      <div key={idx} className="comment-item">
        <span className="comment-text">{comment.content}</span>
      </div>
    ))}
  </div>

  <form className="comment-form" onSubmit={handleCommentSubmit}>
    <input
      type="text"
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      placeholder="Escribí un comentario..."
      className="comment-input"
    />
    <button type="submit" className="comment-submit">Publicar</button>
  </form>
</div>

            </div>
          </div>
        </div>
      )}
      {totalLikes > 0 && (
  <div className="favorites-counter">
    ❤️ {totalLikes} favoritos
  </div>
)}

    </div>

    
  );
};
