import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProfileSetup.css';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    socialPlatform: '',
    socialHandle: '',
    niche: '',
    followerCount: ''
  });

  // Predefined options for dropdowns
  const platforms = ['Instagram', 'TikTok', 'YouTube', 'Twitter', 'LinkedIn', 'Other'];
  const niches = [
    'Fashion & Style',
    'Beauty & Makeup',
    'Health & Fitness',
    'Food & Cooking',
    'Travel',
    'Technology',
    'Gaming',
    'Business & Entrepreneurship',
    'Education',
    'Entertainment',
    'Lifestyle',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userId = location.state?.userId;
      if (!userId) {
        throw new Error('User ID not found. Please try logging in again.');
      }

      const userRef = doc(db, "users", userId);
      await setDoc(userRef, {
        ...formData,
        followerCount: Number(formData.followerCount),
        profileComplete: true,
        updatedAt: new Date()
      }, { merge: true });

      toast.success('Profile setup completed!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      // Redirect to home after successful setup
      setTimeout(() => {
        navigate('/');
      }, 3000);

    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-setup-container">
      <div className="profile-setup-card">
        <h2>Complete Your Profile</h2>
        <p className="setup-description">Tell us more about your social media presence</p>
        
        <form onSubmit={handleSubmit} className="profile-setup-form">
          <div className="form-group">
            <label htmlFor="socialPlatform">Main Social Media Platform</label>
            <select
              id="socialPlatform"
              name="socialPlatform"
              value={formData.socialPlatform}
              onChange={handleChange}
              required
            >
              <option value="">Select a platform</option>
              {platforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="socialHandle">Social Media Handle</label>
            <div className="input-with-icon">
              <Person className="input-icon" />
              <input
                type="text"
                id="socialHandle"
                name="socialHandle"
                placeholder="@yourusername"
                value={formData.socialHandle}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="niche">Content Niche</label>
            <select
              id="niche"
              name="niche"
              value={formData.niche}
              onChange={handleChange}
              required
            >
              <option value="">Select your niche</option>
              {niches.map(niche => (
                <option key={niche} value={niche}>{niche}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="followerCount">Follower Count</label>
            <input
              type="number"
              id="followerCount"
              name="followerCount"
              placeholder="Enter your follower count"
              value={formData.followerCount}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <button 
            type="submit" 
            className="setup-submit-button"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Complete Setup'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfileSetup;
