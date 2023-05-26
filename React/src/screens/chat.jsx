import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [recipient, setRecipient] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [profileName, setProfileName] = useState('');
  const [profileNumber, setProfileNumber] = useState('');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const sendMessage = () => {
    if (inputText.trim() !== '' && recipient.trim() !== '') {
      const newMessage = {
        text: inputText,
        sender: 'user',
        recipient: recipient,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const deleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleProfileEdit = () => {
    setIsEditingProfile(true);
  };

  const handleProfileSave = () => {
    setIsEditingProfile(false);
  };

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#ede7f6' }}>
      <div style={{ flex: '1', maxWidth: '300px', padding: '20px', backgroundColor: '#f1d7ff', color: '#000000' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto', overflow: 'hidden', borderRadius: '50%', backgroundColor: '#fff' }}>
            {profileImage ? (
              <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : null}
          </div>
          <div style={{ fontSize: '18px', padding: '10px', borderRadius: '4px', border: 'none',  width: '100%' }}>
            {isEditingProfile ? (
              <input
                type="text"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                placeholder="Your Name"
                style={{ fontSize: '18px', padding: '10px', borderRadius: '4px', border: 'none', width: '100%' }}
              />
            ) : (
              profileName
            )}
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '16px', padding: '10px', borderRadius: '4px', border: 'none', width: '100%' }}>
            {isEditingProfile ? (
              <input
                type="text"
                value={profileNumber}
                onChange={(e) => setProfileNumber(e.target.value)}
                placeholder="Your Number"
                style={{ fontSize: '16px', padding: '10px', borderRadius: '4px', border: 'none', width: '100%' }}
              />
            ) : (
              profileNumber
            )}
          </div>
        </div>
        <div>
          {isEditingProfile ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <input type="file" onChange={handleProfileImageUpload} accept="image/*" />
              <button
                onClick={handleProfileSave}
                style={{
                  backgroundColor: '#7b1fa2',
                  color: '#fff',
                  padding: '10px 20px',
                  marginLeft: '10px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Save
              </button>
            </div>
          ) : (
            <button
              onClick={handleProfileEdit}
              style={{
                backgroundColor: '#7b1fa2',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
      <div style={{ flex: '2', padding: '20px', overflow: 'auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Recipient's name"
            style={{
              fontSize: '18px',
              padding: '10px',
              borderRadius: '4px',
              border: 'none',
              borderBottom: '1px solid #ddd',
              width: '100%',
            }}
          />
        </div>
        <div style={{ maxHeight: 'calc(100vh - 180px)', width: '100%' }}>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '8px',
                alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: message.sender === 'user' ? '#f3e5f5' : '#fff',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                maxWidth: '80%',
              }}
            >
              <div
                style={{
                  color: '#333',
                  marginBottom: '4px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {message.sender === 'user' ? 'You' : message.sender}
              </div>
              <div style={{ fontSize: '16px' }}>{message.text}</div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '4px',
                  fontSize: '12px',
                  color: '#888',
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <span>{message.timestamp}</span>
                <button
                  onClick={() => deleteMessage(index)}
                  style={{
                    backgroundColor: '#7b1fa2',
                    color: '#fff',
                    padding: '5px 10px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            style={{ fontSize: '16px', padding: '10px', borderRadius: '4px', border: 'none', borderBottom: '1px solid #ddd', width: '100%' }}
          />
          <button
            onClick={sendMessage}
            style={{
              backgroundColor: '#7b1fa2',
              color: '#fff',
              padding: '10px 20px',
              marginLeft: '10px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </div>
        <div style={{ fontSize: '14px', color: '#7b1fa2' }}>Current Time: {currentTime}</div>
      </div>
    </div>
  );
};

export default Chat;