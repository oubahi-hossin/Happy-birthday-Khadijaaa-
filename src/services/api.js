import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

/**
 * Fetch birthday card data from Laravel backend
 */
export const fetchBirthdayData = async () => {
  try {
    const response = await api.get('/birthday');
    return response.data;
  } catch (error) {
    console.warn('Backend not available, using local data:', error.message);
    // Fallback data when backend is not running
    return {
      name: 'خديجة',
      title: 'عيد ميلاد سعيد يا خديجة!',
      date: '10/21',
      message: 'خديجة، أنتِ أجمل ما في حياتي. كل عام وأنتِ سعادتي ونور عيوني. عيد ميلاد سعيد يا أغلى البشر. أحبك كثيراً!',
      photo: null,
    };
  }
};

/**
 * Send a birthday wish
 */
export const sendWish = async (wish) => {
  try {
    const response = await api.post('/birthday/wish', { wish });
    return response.data;
  } catch (error) {
    console.warn('Could not send wish:', error.message);
    return { success: true, message: 'شكراً لرسالتك!' };
  }
};

export default api;
